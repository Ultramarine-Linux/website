import { useStore } from "@nanostores/react";
import { downloadArch, downloadDevice } from "./downloadStore";
import DownloadIcon from "./icons/DownloadIcon.svg?react";
import { downloadLink } from "../utils/download";

const DownloadLinks = ({
  version,
  edition,
}: {
  version: string;
  edition: string;
}) => {
  const arch = useStore(downloadArch);
  const device = useStore(downloadDevice);
  const link = downloadLink(edition, version, arch, device);
  const downloadParams = new URLSearchParams({
    edition,
    version: version.toString(),
    arch,
    device,
  });
  const thankYouLink = `/thank-you?${downloadParams.toString()}`;

  return (
    <div className="flex flex-col sm:flex-row gap-2 md:gap-4 sm:items-center z-10 mt-6 md:mt-0">
      <a
        className="flex flex-row gap-2 items-center justify-center px-3 sm:px-4 md:px-6 py-2 bg-accent-700 rounded-xl text-gray-50 hover:bg-accent-800 transition-colors w-full sm:w-auto text-sm sm:text-base"
        href={thankYouLink}
      >
        <DownloadIcon />
        <span>Download</span>
      </a>
      <a
        href={link + ".sha256sum"}
        className="text-gray-400 hover:text-blue-400 text-center md:text-left text-xs md:text-base"
      >
        View Checksum
      </a>
    </div>
  );
};

export default DownloadLinks;
