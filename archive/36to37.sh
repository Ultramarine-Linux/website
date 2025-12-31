#!/usr/bin/env bash

# Upgrade from Ultramarine Linux 36 to 37 script

# log all output to file
LOG=ultramarine-upgrade.log
exec > >(tee -a "$LOG") 2>&1

# get distro data from /etc/os-release
os_id=$(grep -E '^ID=' /etc/os-release | sed -e 's/ID=//g')
# get distro version data from /etc/os-release
os_version=$(grep -E '^VERSION_ID=' /etc/os-release | sed -e 's/VERSION_ID=//g')
# if os_id ultramarine fedora and os_version is 36
if [ "$os_id" = "ultramarine" ] && [ "$os_version" = "36" ]; then
    # run upgrade script
    UPGRADABLE=true
else
    # set UPGRADABLE to false
    echo "This script is for upgrading from Ultramarine Linux 36 to 37. Your system is not running Ultramarine Linux 36. Maybe you wanted to run the migration script (https://ultramarine-linux.org/#migrate) instead?"
    UPGRADABLE=false
fi

# if upgradable is still false, exit
if [ "$UPGRADABLE" = false ]; then
    exit 1
fi

echo "Welcome to the Ultramarine Linux 36 to 37 upgrade script!"
echo "This script will upgrade your Ultramarine Linux 36 installation to Ultramarine Linux 37."
echo "Please make sure you have a backup of your system before proceeding, as this script will make major changes to your system."
echo "This script will also update your system to the latest version of Ultramarine Linux 36 before proceeding. Please make sure you can properly update your system before proceeding."
echo "Your system will be rebooted several times during the upgrade process."
echo
# prompt
read -p "Are you sure you want to continue? (y/n) " -r REPLY

if [[ ! "$REPLY" =~ ^[Yy]$ ]]; then
    echo "Exiting..."
    exit 1
fi

echo "====Beginning upgrade...===="
echo
# update system
echo "Updating system to the latest version of Ultramarine Linux 36..."
# Make all commands visible
set -x
sudo dnf update -y --refresh
set +x

echo
echo "Downloading and installing required packages..."
set -x
sudo dnf install -y dnf-plugin-system-upgrade dnf-plugins-core
set +x

echo
echo "Importing Terra repo..."
set -x
sudo dnf config-manager --add-repo https://raw.githubusercontent.com/Ultramarine-Linux/ultramarine-pkgs/main/ultramarine/repos/terra.repo
set +x

echo
echo "Replacing old Ultramarine repos with new repos..."
set -x
sudo dnf config-manager --set-disabled ultramarine ultramarine-updates
sudo mv /etc/yum.repos.d/ultramarine.repo /etc/yum.repos.d/ultramarine.repo.bak
sudo mv /etc/yum.repos.d/ultramarine-updates.repo /etc/yum.repos.d/ultramarine-updates.repo.bak
sudo dnf config-manager --add-repo https://raw.githubusercontent.com/Ultramarine-Linux/ultramarine-pkgs/main/ultramarine/repos/ultramarine.repo
set +x

echo
echo "Downloading Ultramarine Linux 37 packages..."
# upgrade to ultramarine 37
set -x
sudo dnf system-upgrade download -y --allowerasing --releasever=37
set +x

echo
echo "Starting system upgrade... (This will reboot your system.)"

set -x
sudo dnf system-upgrade reboot
set +x
