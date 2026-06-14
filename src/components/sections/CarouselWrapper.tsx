import Carousel from "../Carousel";

export const CarouselWrapper = () => {
  return (
    <Carousel
      views={[
        {
          name: "Play",
          description:
            "An example gaming setup, displaying Portal 2 and Steam's controller configurator. Ultramarine supports the majority of games on Steam and most game controllers.",
          image: "/carousel/play.webp",
          apps: (
            <>
              <a
                href="https://store.steampowered.com/app/620/Portal_2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-200 hover:text-accent-400"
              >
                Portal 2
              </a>{" "}
              and{" "}
              <a
                href="https://steampowered.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-200 hover:text-accent-400"
              >
                Steam
              </a>{" "}
              by Valve Software
            </>
          ),
        },
        {
          name: "Create",
          description:
            "An example creative setup, displaying a drawing in Krita and a Drum Machine app",
          image: "/carousel/create.webp",
          apps: (
            <>
              <a
                href="https://flathub.org/en/apps/org.kde.krita"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-200 hover:text-accent-400"
              >
                Krita
              </a>{" "}
              by KDE and{" "}
              <a
                href="https://flathub.org/en/apps/io.github.revisto.drum-machine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-200 hover:text-accent-400"
              >
                Drum Machine
              </a>{" "}
              by Revisito
            </>
          ),
        },
        {
          name: "Develop",
          description:
            "An example software development setup, displaying Zed Editor and documentation open in a web browser",
          image: "/carousel/develop.webp",
          apps: (
            <>
              <a
                href="https://flathub.org/en/apps/dev.zed.Zed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-200 hover:text-accent-400"
              >
                Zed
              </a>{" "}
              by Zed Industries and{" "}
              <a
                href="https://zed.dev/docs/linux#other-ways-to-install-zed-on-linux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-200 hover:text-accent-400"
              >
                Firefox
              </a>{" "}
              by Mozilla
            </>
          ),
        },
        {
          name: "Study",
          description:
            'An example study setup, with a web browser opened on the Wikipedia page for "Catgirl" and an essay opened in LibreOffice',
          image: "/carousel/study.webp",
          apps: (
            <>
              <a
                href="https://flathub.org/en/apps/org.mozilla.firefox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-200 hover:text-accent-400"
              >
                Firefox
              </a>{" "}
              by Mozilla and{" "}
              <a
                href="https://flathub.org/en/apps/org.libreoffice.LibreOffice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-200 hover:text-accent-400"
              >
                LibreOffice
              </a>
            </>
          ),
        },
      ]}
    />
  );
};
