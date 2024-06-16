#!/usr/bin/env bash

# Migrate from Fedora to Ultramarine Linux script

# cli flags
# -f, --force: force migration

while [[ $# -gt 0 ]]; do
    key="$1"
    case $key in
        -f|--force)
            FORCE=true
            shift
            ;;
        -v|--verbose)
            VERBOSE=true
            shift
            ;;
        *)
            echo "Unknown option $key"
            exit 1
            ;;
    esac
done

if [ "$VERBOSE" = true ]; then
    set -x
fi

MINIMUM_VERSION=37

# log all output to file
LOG=ultramarine-migrate.log
exec > >(tee -a "$LOG") 2>&1

# get distro data from /etc/os-release
os_id=$(grep -E '^ID=' /etc/os-release | sed -e 's/ID=//g')
# get distro version data from /etc/os-release
os_version=$(grep -E '^VERSION_ID=' /etc/os-release | sed -e 's/VERSION_ID=//g')
# if os_id is fedora and os_version is greater than or equal to $MINIMUM_VERSION
if [ "$FORCE" = true ]; then
    echo "--force flag detected. Continuing..."
    MIGRATABLE=true

elif [ "$os_id" = "fedora" ] && [ "$os_version" -ge $MINIMUM_VERSION ]; then
    # run fedora migration script
    MIGRATABLE=true
# elif it's not f35 or newer
elif [ "$os_id" = "fedora" ] || [ "$os_version" -lt $MINIMUM_VERSION ]; then
    # set MIGRATABLE to false
    echo "This script is only for Fedora $MINIMUM_VERSION or newer."
    MIGRATABLE=false
    # if or force
elif [ "$os_id" = "ultramarine" ]; then
    echo "You are already running Ultramarine Linux. Congratulations!"
    MIGRATABLE=false
elif [ "$FORCE" != true ]; then
    # set MIGRATABLE to false
    echo "OS $os_id version $os_version is not supported. Please run this script on a copy of Fedora Linux $MINIMUM_VERSION or newer."
    MIGRATABLE=false
fi

# check if the installation is OSTree-based
if [ -d /ostree ]; then
    echo "OSTree-based installation detected. This script does not support OSTree-based installations at this time."
    MIGRATABLE=false
fi

# if migratable is still false, exit
if [ "$MIGRATABLE" = false ]; then
    exit 1
fi

# check root
#if [ "$(id -u)" != "0" ]; then
#    echo "This script must be run as root."
#    exit 1
#fi

flathub() {
    echo "Enabling Flathub..."
    if [ -f /usr/bin/flatpak ]; then
        flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
    fi
}

dnf_update() {
    echo "Updating system..."
    # update system
    sudo dnf update -y
}

echo "Welcome to the Fedora to Ultramarine Linux migration script!"
echo "This script will migrate your Fedora system to Ultramarine Linux."
echo "Please make sure you have a backup of your system before proceeding, as this script will make major changes to your system."
echo "This script will also update your system to the latest version of Fedora before proceeding. Please make sure you can properly update your system before proceeding."
echo
echo "The oldest version to support migration is Fedora $MINIMUM_VERSION."
echo
# prompt
read -p "Are you sure you want to continue? (y/n) " -r REPLY

if [[ $REPLY =~ ^[Nn]$ ]]; then
    echo "Exiting..."
    exit 1
fi

echo "====Beginning migration..===="

dnf_update

echo "Downloading and installing required packages..."
# Run flathub function
flathub

rpmfusion() {
    echo "Installing RPM Fusion..."
    sudo dnf install -y https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
}

# find file in http directory
echo "Installing the Ultramarine repository..."
pkglist=(
    'ultramarine-repos-common'
    'ultramarine-repos'
)
# join by space
pkglist_join=$(printf " %s" "${pkglist[@]}")

install_from_repo() {
    sudo dnf --nogpgcheck --repofrompath ultramarine,https://repos.fyralabs.com/um${os_version}/ install -y $pkglist_join
}


ultramarine_convert() {
    sudo dnf swap -y fedora-release-common ultramarine-release-common --allowerasing
    sudo dnf swap -y fedora-logos ultramarine-logos --allowerasing
    sudo dnf reinstall -y ultramarine-repos ultramarine-repos-common
}

echo "Repo installation complete."
echo

echo "Converting to Ultramarine..."
# convert to ultramarine
ultramarine_convert


read -p "Would you like to also generate a new initramfs (Startup RAM Disk image)? (generate an Ultramarine boot entry)

If you do not generate a new initramfs, your boot entry will appear as Fedora, however your environment is still Ultramarine.

(y/n)" -r REPLY

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Generating new initramfs..."
    # generate new initramfs
    sudo dracut -f --regenerate-all --verbose
    echo "New initramfs generated."
fi

echo "Migration complete! Please reboot your system."

echo "The migration logs can be found at $(realpath ${LOG})."
echo "Have fun!"
