<template>
  <div
    class="min-h-screen text-gray-900 bg-gray-100 dark:text-gray-200 dark:bg-gray-900"
  >
    <div
      class="flex flex-col min-h-screen p-2 md:px-12 text-gray-900 bg-gray-100 place-content-center md:items-center dark:bg-gray-900 dark:text-gray-100"
    >
    <BackMenu targetLink="/" target="Home"></BackMenu>
      <h1 class="text-4xl font-bold">Pick your flavor of Ultramarine</h1>
      <h2 class="pt-1 text-gray-400">Latest Release: 36 (Rhode Island)</h2>
      <div class="">
        <div class="grid grid-flow-row-dense grid-cols-1 gap-10 pt-12 md:grid-cols-2 md:flex-row">
          <DownloadSection
            editionName="Flagship"
            screenshot="ultramarine.png"
            description="The flagship edition with the latest and greatest software and ourbest polish. Powered by Solus' Budgie Desktop. (Recommended)"
          />

          <DownloadSection
            editionName="GNOME"
            screenshot="GNOME.png"
            description="GNOME is a simple, elegant, and intuitive desktop environment with a focus on productivity."
          />

          <DownloadSection
            editionName="Pantheon"
            screenshot="pantheon.png"
            description="The default desktop of elementary OS focused on elegance and visual appeal."
          />

          <DownloadSection
            editionName="Lapis"
            screenshot="ultramarine.png"
            description="The Flagship Edition, but immutable. Powered by OSTree."
            isoLink="https://lapis.ultramarine-linux.org/pub/ultramarine/36/Lapis/x86_64/iso/Ultramarine-36-20220829.0-Lapis-x86_64-ostree1.iso"
          />
        </div>
      </div>

      <h2 class="text-2xl mt-20 font-semibold">Deprecated Builds</h2>
      <h2 class="pt-1 text-gray-400">These builds are provided as is and will not be actively maintained.</h2>
      <div class="">
        <div class="grid grid-flow-row-dense grid-cols-1 gap-10 pt-12 md:grid-cols-1 md:flex-row">
          <DownloadSection
            editionName="Cutefish"
            screenshot="cutefish.png"
            description="Simplicity, beauty, and practicality, with a familiar look."
            deprecatedMajorVersion="36"
            deprecatedMinorVersion="1.1"
          />
        </div>
      </div>


      <h2 class="text-2xl font-semibold mt-20">Torrents</h2>
      <h2 class="pt-1 text-gray-400 pb-12">You can also download Ultramarine Builds using Torrent clients from FOSS Torrents which are available
          <a class="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-200"
            href="https://fosstorrents.com/distributions/ultramarine-linux/">
              here
            </a>.
      </h2>

    </div>
    
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </div>

</template>
