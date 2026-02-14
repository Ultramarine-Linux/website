#!/usr/bin/env bash

# Migrate from Risi to Ultramarine Linux script

# log all output to file
LOG=ultramarine-migrate.log
exec > >(tee -a "$LOG") 2>&1

# get distro data from /etc/os-release
os_id=$(grep -E '^ID=' /etc/os-release | sed -e 's/ID=//g')
# get distro version data from /etc/os-release
os_version=$(grep -E '^VERSION_ID=' /etc/os-release | sed -e 's/VERSION_ID=//g')
# if os_id is fedora and os_version is greater than or equal to 35
if [ "$os_id" = "risios" ] && [ "$os_version" -ge 38 ]; then
    # run fedora migration script
    MIGRATABLE=true
# elif it's not f35 or newer
elif [ "$os_id" = "fedora" ] || [ "$os_version" -ge 35 ]; then
    # set MIGRATABLE to false
    echo "This script is to convert risiOS to Ultramarine Linux - A script for Fedora is on ultramarine-linux.org"
    MIGRATABLE=false
elif [ "$os_id" = "ultramarine" ]; then
    echo "You are already running Ultramarine Linux. Congratulations!"
    MIGRATABLE=false
else
    # set MIGRATABLE to false
    echo "OS $os_id version $os_version is not supported. Please run this script on risiOS 38."
    MIGRATABLE=false
fi

# if migratable is still false, exit
if [ "$MIGRATABLE" = false ]; then
    exit 1
fi
echo
# prompt

# check root
#if [ "$(id -u)" != "0" ]; then
#    echo "This script must be run as root."
#    exit 1
#fi

echo "Welcome to the risiOS to Ultramarine Linux migration script!"
echo "This script will migrate your risiOS system to Ultramarine Linux."
echo "Please make sure you have a backup of your system before proceeding, as this script will make major changes to your system."
echo "This script will also preform the upgrade to Ultramarine 39, this may take a while and your computer will not be useable during the upgrade."
echo
# prompt
read -p "Are you sure you want to continue? (y/n) " -r REPLY

if [[ $REPLY =~ ^[Nn]$ ]]; then
    echo "Exiting..."
    exit 1
fi

echo "====Beginning migration..===="
echo
echo "Installing the Ultramarine repository..."
pkglist=(
    'ultramarine-repos-common'
    'ultramarine-repos'
)
sudo dnf --nogpgcheck --repofrompath ultramarine,https://repos.fyralabs.com/um${os_version}/ install -y ${pkglist[@]}
sudo dnf -y remove risios-repositories

echo "Repo installation complete."
echo
# remove risi packages
echo "Removing risiOS Packages"
sudo dnf -y remove risi-zsh-plugins plymouth-theme-risi-spinner risi-tweaks risi-script risi-welcome risifetch rtheme webapp-manager
sudo dnf -y install starship ultramarine-shell-config
sudo plymouth-set-default-theme bgrt -R


echo "Disabling the risiOS repository"
sudo rm -f /etc/yum.repos.d/risiOS.repo
#update system
echo "Updating current release..."
sudo dnf update -y
echo
echo "Downloading and installing required packages..."
# find file in http directory
echo "Installing RPM Fusion..."
sudo dnf install -y https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

echo
# convert to flatpak onlyoffice for cleaner install
   # check if onlyoffice is installed
   if [ -z "$(rpm -qa onlyoffice-desktopeditors)" ]; then
        # remove the repository if not installed
        sudo dnf config-manager --set-disabled onlyoffice
	sudo rm -f /etc/yum.repos.d/onlyoffice.repo
    else
        # ask the user
        echo "risiOS includes a repository for OnlyOffice"
        read -p "Would you like to switch to the Flatpak? You will not lose any files.  (y/n) " -r REPLY

		if [[ $REPLY =~ ^[yY]$ ]]; then
		sudo dnf -y remove onlyoffice*
		flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
		flatpak install -y flathub org.onlyoffice.desktopeditors
		sudo rm -f /etc/yum.repos.d/onlyoffice.repo
		echo "Switched to OnlyOffice Flatpak"
        fi
	fi

echo "Converting to Ultramarine..."
# convert to ultramarine
sudo dnf swap -y risios-release-common ultramarine-release-common --allowerasing
sudo dnf swap -y risios-logos ultramarine-logos --allowerasing
echo "Migration complete!"
echo 
echo "You are now running Ultramarine 38, would you like to upgrade to Ultramarine 39?"
echo "This may take a while and your computer will not be useable during the offline portion of the upgrade."
echo
# prompt
read -p "Would you like to continue? (y/n) " -r REPLY

if [[ $REPLY =~ ^[Nn]$ ]]; then
    echo "Enjoy Ultramarine Linux"
    echo "The migration logs can be found at ${LOG}."
    exit 1
fi
echo "Sit back and relax, you can continue using your computer while we downlad the updates"
sudo dnf upgrade -y
echo "Sit back and relax, you can continue using your computer while we downlad the updates"
sudo dnf install -y dnf-plugin-system-upgrade
echo "Sit back and relax, you can continue using your computer while we downlad the updates"
sudo dnf system-upgrade download --releasever=39 -y --allowerasing
echo "Your system is ready to upgrade! Save your work and"
read -p "Press enter to reboot"
sudo dnf system-upgrade reboot
