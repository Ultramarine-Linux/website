if [[ ${os_id} != "ultramarine" ]]; then
echo "You are not running Ultramarine Linux — nothing to roll back."
exit 1
fi

echo
echo ┌────────────────────────────────────┐
echo │ Ultramarine Rollback Tool │
echo └──────────────────────────────╴v$ver
echo
read -n 1 -p "□ Are you sure you want to roll back? (Y/n) " -r REPLY
echo
if [[ ${REPLY} =~ ^[Nn]$ ]]; then
echo "Rollback canceled."
exit 1
fi

releasever=$(rpm -E '%fedora')
echo "━━━╸Rolling back.╺━━━"

echo "■ Removing Ultramarine repositories..."
trace sudo dnf remove -y ultramarine-repos-common terra-release || true


echo "■ Swapping back Fedora release packages..."
if rpm -qa | grep -q ultramarine-release-gnome; then
trace sudo dnf swap -y ultramarine-release-gnome fedora-release-workstation --allowerasing
elif rpm -qa | grep -q ultramarine-release-kde; then
trace sudo dnf swap -y ultramarine-release-kde fedora-release-kde --allowerasing
elif rpm -qa | grep -q ultramarine-release-flagship; then
trace sudo dnf swap -y ultramarine-release-flagship fedora-release-budgie --allowerasing
elif rpm -qa | grep -q ultramarine-release-xfce; then
trace sudo dnf swap -y ultramarine-release-xfce fedora-release-xfce --allowerasing
else
trace sudo dnf swap -y ultramarine-release-common fedora-release-common --allowerasing
fi

echo "■ Restoring Fedora logos..."
trace sudo dnf swap -y ultramarine-logos fedora-logos --allowerasing

echo
read -n 1 -p "□ Generate new initramfs (for Fedora boot entry)? (y/N) " -r REPLY
echo
if [[ ${REPLY} =~ ^[Yy]$ ]]; then
trace sudo dracut -f
fi

echo
echo "Rollback complete! Your system is now Fedora again."
echo "You may reboot to finish restoration."
fi
