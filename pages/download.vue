<template>
  <div
    class="
      min-h-screen
      text-gray-900
      dark:text-gray-200
      bg-gray-100
      dark:bg-gray-900
    "
  >
    <Navbar />
    <!-- Add a red banner here to show that the download links are down -->
    <!-- <div class="bg-red-500 dark:bg-red-700 text-white font-bold py-4 px-4">
      <p style="text-align: center">
        Due to some major infrastructure issues, the download links and the
        Ultramarine Linux repositories are currently out of service. We are very
        sorry for the inconvenience.
      </p>
    </div> -->
    <div
      class="
        flex
        p-12
        flex-col
        md:items-center
        items-start
        min-h-screen
        bg-gray-100
        dark:bg-gray-900
        text-gray-900
        dark:text-gray-100
      "
    >
      <h1 class="text-4xl">Pick your flavor of Ultramarine</h1>
      <h2 class="pt-1 text-gray-400">Latest Release: 21.12 (Phing Kan)</h2>
      <div class="flex flex-col md:flex-row gap-10 pt-12">
        <div class="flex flex-col items-center">
          <nuxt-img
            src="ultramarine.png"
            alt="Ultramarine Flagship Screenshot"
            class="w-96 h-auto pb-4 rounded-sm"
          />
          <a
            href="https://lapis.ultramarine-linux.org/pub/ultramarine/35/Flagship/x86_64/iso/"
            class="flex flex-row rounded-lg"
          >
            <button
              class="
                px-4
                py-2
                rounded-lg
                bg-transparent
                font-semibold
                text-gray-900
                dark:text-gray-50
                border-2 border-blue-500
                hover:bg-blue-600 hover:text-gray-50
              "
            >
              Download Flagship Edition
            </button>
          </a>
          <div class="pt-4">
            <p class="text-lg text-justify max-w-md">
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
            class="w-96 h-auto pb-4 rounded-sm"
          />
          <a
            href="https://lapis.ultramarine-linux.org/pub/ultramarine/35/Cutefish/x86_64/iso/"
            class="flex flex-row rounded-lg"
          >
            <button
              class="
                px-4
                py-2
                rounded-lg
                bg-transparent
                font-semibold
                text-gray-900
                dark:text-gray-50
                border-2 border-blue-500
                hover:bg-blue-600 hover:text-gray-50
              "
            >
              Download Cutefish Edition
            </button>
          </a>
          <div class="pt-4">
            <p class="text-lg text-justify max-w-md">
              Simplicity, beauty, and practicality, with a familiar look. (In
              early development, only recommended for more advanced users)
              <!-- maybe will add a wiki reference to what cutefish is here, alongside a read further here, redirecting to wiki-->
            </p>
          </div>
        </div>
      </div>
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
    setColorMode (mode) {
      this.$colorMode.preference = mode
    }
  }
}
</script>
