#!/usr/bin/bash

# Fedora to Ultramarine Linux migration script
# Lea's pro tip: Run this through shellcheck, it'll genuinely save so much time and effort

ver="0.1.3"
# Oldest repo we provide is um37
MINIMUM_RELEASEVER=37
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
os_id=$(grep -E '^ID=' /etc/os-release | sed -e 's/ID=//g'; true)
os_version=$(grep -E '^VERSION_ID=' /etc/os-release | sed -e 's/VERSION_ID=//g'; true)
os_variant=$(grep -E '^VARIANT_ID=' /etc/os-release | sed -e 's/VARIANT_ID=//g'; true)

# If the os_id is fedora and os_version is greater than or equal to MINIMUM_RELEASEVER, then permit upgrade, otherwise error
if [[ ${os_id} = "fedora" ]] && [[ ${os_version} -ge $MINIMUM_RELEASEVER ]]; then
  : # do nothing
elif [[ ${os_id} = "fedora" ]] || [[ ${os_version} -lt $MINIMUM_RELEASEVER ]]; then
  echo "This script is only for Fedora $MINIMUM_RELEASEVER or newer."
  exit 1
elif [[ ${os_id} = "ultramarine" ]]; then
  echo "You are already running Ultramarine Linux. Congratulations!"
  exit 1
else
  echo "OS ${os_id} version ${os_version} is not supported. Please run this script on a copy of Fedora Linux $MINIMUM_RELEASEVER or newer."
  exit 1
fi


echo
echo ┌────────────────────────────────────┐
echo │ Ultramarine Linux Migration Script │
echo └──────────────────────────────╴v$ver
echo "Welcome to the Fedora to Ultramarine Linux migration script!
This script will migrate your Fedora system to Ultramarine Linux.
Please make sure you have a backup of your system before proceeding, as this script will make major changes to your system.
This script will also update your system to the latest version of Fedora before proceeding. Please make sure you can properly update your system before proceeding."
echo

read -n 1 -p "□ Are you sure you want to continue? (Y/n) " -r REPLY

if [[ ${REPLY} =~ ^[Nn]$ ]]; then
  echo "Exiting..."
  exit 1
fi

echo
echo "━━━╸Beginning migration╺━━━"
echo

echo "■ (1/3) Updating system..."
trace sudo dnf update -y
trace sudo dnf downgrade dnf5 -y || true
echo
echo
echo "■ (2/3) Installing repositories..."
echo
echo " ...[1/3] RPM Fusion"
nonfree=$(rpm -qa rpmfusion-nonfree-release | head -c1 | wc -c)
free=$(rpm -qa rpmfusion-free-release | head -c1 | wc -c)
if [ "$nonfree" -eq 0 ] && [ "$free" -eq 0 ]; then
  echo " --> Installing rpmfusion-nonfree-release and rpmfusion-free-release"
  trace sudo dnf install -y "https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-${os_version}.noarch.rpm" "https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-${os_version}.noarch.rpm"
elif [ "$nonfree" -eq 0 ]; then
  echo " --> Detected rpmfusion-free-release"
  echo " --> Installing rpmfusion-nonfree-release"
  trace sudo dnf install -y "https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-${os_version}.noarch.rpm"
elif [ "$free" -eq 0 ]; then
  echo " --> Detected rpmfusion-nonfree-release"
  echo " --> Installing rpmfusion-free-release"
  trace sudo dnf install -y "https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-${os_version}.noarch.rpm"
else
  echo " --> Seems like both rpmfusion-nonfree-release and rpmfusion-free-release are installed"
fi

# HACK: there is a bug in dnf5 that doesn't parse $variables in `--setopt` correctly
# https://github.com/rpm-software-management/dnf5/issues/1941
releasever=$(rpm -E '%fedora')

echo
echo " ...[2/3] Terra"
if [ "$(rpm -qa terra-release | head -c1 | wc -c)" -eq 0 ]; then
  trace sudo dnf install -y --repofrompath 'terra,https://repos.fyralabs.com/terra$releasever' --setopt="terra.gpgkey=https://repos.fyralabs.com/terra$releasever/key.asc" terra-release
else
  echo " --> Seems like terra-release has already been installed"
fi

echo
echo " ...[3/3] Ultramarine Repositories"
if [ "$(rpm -qa ultramarine-repos-common | head -c1 | wc -c)" -eq 0 ]; then
  trace sudo dnf install -y --repofrompath 'ultramarine,https://repos.fyralabs.com/um$releasever' --setopt="ultramarine.gpgkey=https://repos.fyralabs.com/um$releasever/key.asc" ultramarine-repos-common
else
  echo " [!] Seems like ultramarine-repos-common has already been installed"
fi

echo
echo
echo "■ (3/3) Converting to Ultramarine..."
if [[ ${os_variant} = "workstation" ]]; then
  echo ' ... Detected Fedora Workstation'
  trace sudo dnf swap -y fedora-release-common ultramarine-release-gnome --allowerasing
  trace sudo dnf group install --allowerasing -y ultramarine-gnome-product-environment
  trace sudo dnf group remove -y workstation-product-environment
elif [[ ${os_variant} = "kde" ]]; then
  echo ' ... Detected Fedora KDE Spin'
  trace sudo dnf swap -y fedora-release-common ultramarine-release-kde --allowerasing
  trace sudo dnf group install --allowerasing -y ultramarine-kde-product-environment
  trace sudo dnf group remove -y kde-desktop-environment
elif [[ ${os_variant} = "budgie" ]]; then
  echo ' ... Detected Fedora Budgie Spin'
  trace sudo dnf swap -y fedora-release-common ultramarine-release-flagship --allowerasing
  # BUG: dnf depsolv issue
  trace sudo dnf swap -y budgie-desktop-defaults ultramarine-flagship-filesystem
  trace sudo dnf group install --allowerasing -y ultramarine-flagship-product-environment --exclude=budgie-desktop-defaults
  trace sudo dnf group remove -y budgie-desktop-environment
elif [[ ${os_variant} = "xfce" ]]; then
  echo ' ... Detected Fedora XFCE Spin'
  trace sudo dnf swap -y fedora-release-common ultramarine-release-xfce --allowerasing
  # BUG: dnf depsolv issue
  trace sudo dnf swap -y desktop-backgrounds-compat ultramarine-backgrounds-compat
  trace sudo dnf group install --allowerasing -y ultramarine-xfce-product-environment --exclude=desktop-backgrounds-compat
  trace sudo dnf group remove -y xfce-desktop-environment
else # If the variant is unknown or doesn't have an equivalent in Ultramarine
  echo ' ... Falling back to `ultramarine-release-common`'
  trace sudo dnf swap -y fedora-release-common ultramarine-release-common --allowerasing
  trace sudo dnf group install --allowerasing --no-best -y ultramarine-product-common
fi
if [ "$(rpm -qa ultramarine-logos | head -c1 | wc -c)" -eq 0 ]; then
  trace sudo dnf swap -y fedora-logos ultramarine-logos --allowerasing
fi

echo
echo
echo '┏━━━           ──────  '
echo '  Migration Complete!  '
echo '  ──────           ━━━┛'
echo "You may now reboot your system.
The next Linux kernel update will make your system entry appear as Ultramarine Linux, but now you're already running Ultramarine Linux."
echo

read -n 1 -p "□ Would you like to also generate a new initramfs? (generate an Ultramarine boot entry) (y/N) " -r REPLY

if [[ ${REPLY} =~ ^[Yy]$ ]]; then
  echo
  echo "■ Generating new initramfs..."
  trace sudo dracut -f
  echo "New initramfs generated."
fi

echo
echo "The migration logs can be found at ${LOG}.
Come chat with us at https://discord.gg/5fdPuxTg5Q or https://matrix.to/#/#hub:fyralabs.com.
For addtional information, please see the Ultramarine Wiki, https://wiki.ultramarine-linux.org.
Have fun, thank you for using Ultramarine Linux!"

