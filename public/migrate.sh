#!/usr/bin/env bash

set -x

# Fedora to Ultramarine Linux migration script

# Log all output to a file
LOG=ultramarine-migrate.log
exec > >(tee -a "${LOG}") 2>&1

# Get distro data from /etc/os-release
os_id=$(grep -E '^ID=' /etc/os-release | sed -e 's/ID=//g')
os_version=$(grep -E '^VERSION_ID=' /etc/os-release | sed -e 's/VERSION_ID=//g')
os_variant=$(grep -E '^VARIANT_ID=' /etc/os-release | sed -e 's/VARIANT_ID=//g')

# If the os_id is fedora and os_version is greater than or equal to 35, then permit upgrade, otherwise error
if [[ ${os_id} = "fedora" ]] && [[ ${os_version} -ge 35 ]]; then
  MIGRATABLE=true
elif [[ ${os_id} = "fedora" ]] || [[ ${os_version} -lt 35 ]]; then
  echo "This script is only for Fedora 35 or newer."
  MIGRATABLE=false
elif [[ ${os_id} = "ultramarine" ]]; then
  echo "You are already running Ultramarine Linux. Congratulations!"
  MIGRATABLE=false
else
  echo "OS ${os_id} version ${os_version} is not supported. Please run this script on a copy of Fedora Linux 35 or newer."
  MIGRATABLE=false
fi

# If migratable is false, then exit
if [[ ${MIGRATABLE} = false ]]; then
  exit 1
fi

echo "Welcome to the Fedora to Ultramarine Linux migration script!
This script will migrate your Fedora system to Ultramarine Linux.
Please make sure you have a backup of your system before proceeding, as this script will make major changes to your system.
This script will also update your system to the latest version of Fedora before proceeding. Please make sure you can properly update your system before proceeding."
echo

read -p "Are you sure you want to continue? (y/n) " -r REPLY

if [[ ${REPLY} =~ ^[Nn]$ ]]; then
  echo "Exiting..."
  exit 1
fi

echo "====Beginning migration..===="
echo

echo "Updating system..."
sudo dnf update -y
echo

echo "Downloading and installing required packages..."

echo "Installing RPM Fusion..."
sudo dnf install -y "https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-${os_version}.noarch.rpm" "https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-${os_version}.noarch.rpm"

echo "Installing the Ultramarine repositories..."
sudo dnf --nogpgcheck --repofrompath "ultramarine,https://repos.fyralabs.com/um${os_version}/" install -y ultramarine-repos-common ultramarine-repos

echo "Repo installation complete."
echo

echo "Converting to Ultramarine..."
if [[ ${os_variant} = "workstation" ]]; then
  sudo dnf swap -y fedora-release-common ultramarine-release-gnome --allowerasing
elif [[ ${os_variant} = "kde" ]]; then
  sudo dnf swap -y fedora-release-common ultramarine-release-kde --allowerasing
elif [[ ${os_variant} = "budgie" ]]; then
  sudo dnf swap -y fedora-release-common ultramarine-release-flagship --allowerasing
else
  sudo dnf swap -y fedora-release-common ultramarine-release-common --allowerasing
fi
sudo dnf swap -y fedora-logos ultramarine-logos --allowerasing

echo "Migration complete! Please reboot your system.
The next Linux kernel update will make your system entry appear as Ultramarine Linux, but now you're already running Ultramarine Linux."

read -p "Would you like to also generate a new initramfs? (generate an Ultramarine boot entry) (y/n) " -r REPLY

if [[ ${REPLY} =~ ^[Yy]$ ]]; then
  echo "Generating new initramfs..."
  sudo dracut -f
  echo "New initramfs generated."
fi

echo "The migration logs can be found at ${LOG}.
Come chat with us at https://discord.gg/5fdPuxTg5Q or https://matrix.to/#/#hub:fyralabs.com.
Have fun, thank you for using Ultramarine Linux!"

