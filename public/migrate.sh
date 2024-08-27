#!/usr/bin/env bash

# Fedora to Ultramarine Linux migration script
# Lea's pro tip: Run this through shellcheck, it'll genuinely save so much time and effort

set -euo pipefail

trace() {
  set -x
  "$@"
  { set +x; } 2> /dev/null
}

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
trace sudo dnf update -y
echo

echo "Downloading and installing required packages..."

echo "Installing RPM Fusion..."
trace sudo dnf install -y "https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-${os_version}.noarch.rpm" "https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-${os_version}.noarch.rpm"

echo "Installing Terra..."
trace sudo dnf install -y --repofrompath 'terra,https://repos.fyralabs.com/terra$releasever' --setopt='terra.gpgkey=https://repos.fyralabs.com/terra$releasever/key.asc' terra-release

echo "Installing the Ultramarine repositories..."
trace sudo dnf --nogpgcheck --repofrompath "ultramarine,https://repos.fyralabs.com/um${os_version}/" install -y ultramarine-repos-common ultramarine-repos

echo "Repo installation complete."
echo

echo "Converting to Ultramarine..."
if [[ ${os_variant} = "workstation" ]]; then
  trace sudo dnf swap -y fedora-release-common ultramarine-release-gnome --allowerasing
  trace sudo dnf group install --allowerasing -y ultramarine-gnome-product-environment
  trace sudo dnf group remove -y workstation-product-environment
elif [[ ${os_variant} = "kde" ]]; then
  trace sudo dnf swap -y fedora-release-common ultramarine-release-kde --allowerasing
  trace sudo dnf group install --allowerasing -y ultramarine-kde-product-environment
  trace sudo dnf group remove -y kde-desktop-environment
elif [[ ${os_variant} = "budgie" ]]; then
  trace sudo dnf swap -y fedora-release-common ultramarine-release-flagship --allowerasing
  trace sudo dnf group install --allowerasing -y ultramarine-flagship-product-environment
  trace sudo dnf group remove -y budgie-desktop-environment
else # If the variant is unknown or doesn't have an equivalent in Ultramarine
  trace sudo dnf swap -y fedora-release-common ultramarine-release-common --allowerasing
  trace sudo dnf group install --allowerasing -y ultramarine-product-common
fi
trace sudo dnf swap -y fedora-logos ultramarine-logos --allowerasing

echo "Migration complete! Please reboot your system.
The next Linux kernel update will make your system entry appear as Ultramarine Linux, but now you're already running Ultramarine Linux."

read -p "Would you like to also generate a new initramfs? (generate an Ultramarine boot entry) (y/n) " -r REPLY

if [[ ${REPLY} =~ ^[Yy]$ ]]; then
  echo "Generating new initramfs..."
  trace sudo dracut -f
  echo "New initramfs generated."
fi

echo
echo "The migration logs can be found at ${LOG}.
Come chat with us at https://discord.gg/5fdPuxTg5Q or https://matrix.to/#/#hub:fyralabs.com.
For addtional information, please see the Ultramarine Wiki, https://wiki.ultramarine-linux.org.
Have fun, thank you for using Ultramarine Linux!"

