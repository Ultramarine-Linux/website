#!/usr/bin/env bash

# Migrate from Fedora to Ultramarine Linux script

# log all output to file
LOG=ultramarine-migrate.log
exec > >(tee -a "$LOG") 2>&1

# get distro data from /etc/os-release
os_id=$(grep -E '^ID=' /etc/os-release | sed -e 's/ID=//g')
# get distro version data from /etc/os-release
os_version=$(grep -E '^VERSION_ID=' /etc/os-release | sed -e 's/VERSION_ID=//g')
# if os_id is fedora and os_version is greater than or equal to 35
if [ "$os_id" = "fedora" ] && [ "$os_version" -ge 35 ]; then
    # run fedora migration script
    MIGRATABLE=true
# elif it's not f35 or newer
elif [ "$os_id" = "fedora" ] || [ "$os_version" -lt 35 ]; then
    # set MIGRATABLE to false
    echo "This script is only for Fedora 35 or newer."
    MIGRATABLE=false
elif [ "$os_id" = "ultramarine" ]; then
    echo "You are already running Ultramarine Linux. Congratulations!"
    MIGRATABLE=false
else
    # set MIGRATABLE to false
    echo "OS $os_id version $os_version is not supported. Please run this script on a copy of Fedora Linux 35 or newer."
    MIGRATABLE=false
fi

# if migratable is still false, exit
if [ "$MIGRATABLE" = false ]; then
    exit 1
fi

# check root
if [ "$(id -u)" != "0" ]; then
    echo "This script must be run as root."
    exit 1
fi

echo "Welcome to the Fedora to Ultramarine Linux migration script!"
echo "This script will migrate your Fedora system to Ultramarine Linux."
echo "Please make sure you have a backup of your system before proceeding, as this script will make major changes to your system."
echo "This script will also update your system to the latest version of Fedora before proceeding. Please make sure you can properly update your system before proceeding."
echo
# prompt
read -p "Are you sure you want to continue? (y/n) " -r REPLY

if [[ $REPLY =~ ^[Nn]$ ]]; then
    echo "Exiting..."
    exit 1
fi

echo "====Beginning migration..===="
echo
# update system
echo "Updating system..."
# Make all commands visible
set -x
dnf update -y

echo
echo "Downloading and installing required packages..."
# find file in http directory
echo "Installing RPM Fusion..."
dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
echo "Installing the Ultramarine repository..."

pkglist=(
    'ultramarine-repos-common'
    'ultramarine-repos'
)
for pkg in "${pkglist[@]}"; do
    file=$(curl -s https://lapis.ultramarine-linux.org/pub/ultramarine/${os_version}/Everything/x86_64/os/Packages/ | grep -E $pkg | grep -Eo 'href="[^"]*"' | sed -e 's/href="//g' | sed -e 's/"//g')
    dnf install -yq https://lapis.ultramarine-linux.org/pub/ultramarine/${os_version}/Everything/x86_64/os/Packages/${file}
done


echo "Repo installation complete."
echo

echo "Converting to Ultramarine..."
# convert to ultramarine
dnf swap -y fedora-release-common ultramarine-release-common --allowerasing
dnf swap -y fedora-logos ultramarine-logos --allowerasing

echo "Migration complete! Please reboot your system."
echo "The next Linux kernel update will make your system entry appear as Ultramarine Linux, but now you're already running Ultramarine Linux."

read -p "Would you like to also generate a new initramfs? (generate an Ultramarine boot entry) (y/n) " -r REPLY

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Generating new initramfs..."
    # generate new initramfs
    dracut -f
    echo "New initramfs generated."
fi

echo "The migration logs can be found at ${LOG}."
echo "Have fun!"
