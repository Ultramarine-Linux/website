<template>
  <div
    class="min-h-screen text-gray-900 bg-gray-100 dark:text-gray-200 dark:bg-gray-900"
  >
    <Navbar />
    <div
      class="flex flex-col min-h-screen p-12 text-gray-900 bg-gray-100 place-content-center md:items-center dark:bg-gray-900 dark:text-gray-100"
    >
      <h1 class="text-4xl">Pick your flavor of Ultramarine</h1>
      <h2 class="pt-1 text-gray-400">Latest Release: 21.12 (Phing Kan)</h2>
      <div class="">
        <div class="grid grid-flow-row-dense grid-cols-1 gap-10 pt-12 md:grid-cols-2 md:flex-row">
          <div class="flex flex-col items-center">
            <nuxt-img
              src="ultramarine.png"
              alt="Ultramarine Flagship Screenshot"
              class="h-auto pb-4 rounded-sm w-96"
              quality="40"
            />
            <a
              href="https://lapis.ultramarine-linux.org/pub/ultramarine/35/Flagship/x86_64/iso/"
              class="flex flex-row rounded-lg"
            >
              <button
                class="px-4 py-2 font-semibold text-gray-900 bg-transparent border-2 border-blue-500 rounded-lg dark:text-gray-50 hover:bg-blue-600 hover:text-gray-50"
              >
                Download Flagship Edition
              </button>
            </a>
            <div class="pt-4">
              <p class="max-w-md text-lg text-justify">
                The flagship edition with the latest and greatest software and our
                best polish. Powered by Solus' Budgie Desktop. (Recommended)
                <!-- maybe will add a wiki reference to what budgie is here, alongside a read further here, redirecting to wiki-->
              </p>
            </div>
          </div>

          <div class="flex flex-col items-center">
            <nuxt-img
              src="cutefish.png"
              alt="Ultramarine Cutefish Screenshot"
              class="h-auto pb-4 rounded-sm w-96"
              quality="40"
            />
            <a
              href="https://lapis.ultramarine-linux.org/pub/ultramarine/35/Cutefish/x86_64/iso/"
              class="flex flex-row rounded-lg"
            >
              <button
                class="px-4 py-2 font-semibold text-gray-900 bg-transparent border-2 border-blue-500 rounded-lg dark:text-gray-50 hover:bg-blue-600 hover:text-gray-50"
              >
                Download Cutefish Edition
              </button>
            </a>
            <div class="pt-4">
              <p class="max-w-md text-lg text-justify">
                Simplicity, beauty, and practicality, with a familiar look. (In
                early development, only recommended for more advanced users)
                <!-- maybe will add a wiki reference to what cutefish is here, alongside a read further here, redirecting to wiki-->
              </p>
            </div>
          </div>

          <div class="flex flex-col items-center">
            <nuxt-img
              src="GNOME.png"
              alt="Ultramarine GNOME Screenshot"
              class="h-auto pb-4 rounded-sm w-96"
              quality="40"
            />
            <a
              href="https://lapis.ultramarine-linux.org/pub/ultramarine/35/GNOME/x86_64/iso/"
              class="flex flex-row rounded-lg"
            >
              <button
                class="px-4 py-2 font-semibold text-gray-900 bg-transparent border-2 border-blue-500 rounded-lg dark:text-gray-50 hover:bg-blue-600 hover:text-gray-50"
              >
                Download GNOME Edition
              </button>
            </a>
            <div class="pt-4">
              <p class="max-w-md text-lg text-justify">
                GNOME is a simple, elegant, and intuitive desktop environment with a focus on productivity.
              </p>
            </div>
          </div>

          <div class="flex flex-col items-center">
            <nuxt-img
              src="pantheon.png"
              alt="Ultramarine Pantheon Screenshot"
              class="h-auto pb-4 rounded-sm w-96"
              quality="40"
            />
            <a
              href="https://lapis.ultramarine-linux.org/pub/ultramarine/35/Pantheon/x86_64/iso/"
              class="flex flex-row rounded-lg"
            >
              <button
                class="px-4 py-2 font-semibold text-gray-900 bg-transparent border-2 border-blue-500 rounded-lg dark:text-gray-50 hover:bg-blue-600 hover:text-gray-50"
              >
                Download Pantheon Edition
              </button>
            </a>
            <div class="pt-4">
              <p class="max-w-md text-lg text-justify">
                The default desktop of elementary OS focused on elegance and visual appeal.
              </p>
            </div>
          </div>

        </div>
      </div>

      <a href="/download/alternatives" class="pt-1 text-gray-400 mt-6">Looking for more downloads? You can find alternative downloads <span class="text-gray-100">here</span>.</a>

      <h2 class="text-3xl mt-20">Torrents</h2>
      <h2 class="pt-1 text-gray-400">You can also download Ultramarine Builds using Torrent clients from FOSS Torrents which are available
          <a class="text-gray-100 hover:text-blue-600 dark:hover:text-blue-200"
            href="https://fosstorrents.com/distributions/ultramarine-linux/">
              here
            </a>.
      </h2>

    </div>
    <Footer
      class="bg-gray-200 dark:bg-gray-800"
      @set-color-mode="setColorMode"
    />
  </div>

</template>

<script>
export default {
  methods: {
    setColorMode(mode) {
      this.$colorMode.preference = mode;
    },
  },
};
</script>
