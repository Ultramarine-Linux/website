<template>
  <div
    class="min-h-screen text-gray-900 bg-gray-100  dark:text-gray-200 dark:bg-gray-900"
  >
    <Navbar />
    <div class="flex flex-col items-center content">
      <section
        id="hero"
        class="flex flex-col items-center px-8 mt-8 md:mt-6 xl:mx-42 lg:mx-40 md:mx-20 2xl:py-4"
      >
        <h1
          class="self-start text-5xl font-semibold tracking-wide text-blue-700 md:self-center md:text-6xl dark:text-blue-200"
        >
          Ultramarine Linux
        </h1>
        <h2 class="self-start pl-1 text-xl md:self-center md:pl-0">
          A simplified yet powerful Linux® experience for all.
        </h2>
        <div
          id="buttons" class="flex flex-col gap-4 md:flex-row self-start justify-between mt-4 md:self-center"
        >
          <nuxt-link
            to="/download"
            class="flex flex-row items-center justify-center px-4 py-2 mr-2 bg-blue-500 rounded-lg  text-gray-50 hover:bg-blue-700"
          >
            <button class="flex flex-row items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <p>Download</p>
            </button>
          </nuxt-link>
          <a
            href="https://wiki.ultramarine-linux.org/en/guide"
            class="flex flex-row items-center justify-center rounded-lg"
          >
            <button
              class="px-4 py-2 text-blue-300 bg-transparent border-2 border-blue-500 rounded-lg  dark:text-blue-100 dark:border-blue-400 hover:bg-blue-400 hover:text-gray-50 dark:hover:text-gray-50"
            >
              Installation Guide
            </button>
          </a>
        </div>
        <div class="hidden screenshot md:flex md:flex-col md:justify-center">
          <nuxt-img
            :src="require(`~/static/ultramarine.png`)"
            alt="Desktop Environment Screenshot"
            class="self-center w-4/5 mt-6 bg-gray-800 rounded-md lg:h-96 lg:w-auto"
            quality="70"
          />
          <p class="pt-1 text-center text-gray-400 dark:text-gray-500">
            Upcoming Release: Ultramarine Flagship 22.04 (Rhode Island)
          </p>
        </div>
        <!-- Migration script -->
        <div id="migration" class="hidden md:flex md:flex-col md:justify-center mt-6">
          <p class="pt- pb-2 text-xl text-center">
            You can also migrate from an existing Fedora installation!
          </p>
          <div class="p-2">
            <!-- code block for copying command -->
            <div class="inline-flex items-center bg-gray-600 rounded-xl">
              <div class="p-6 text-gray-400 bg-gray-700 rounded-xl">
                <!-- eslint-disable-next-line vue/no-parsing-error -->
                <p id="migrate-script" class="font-mono" >bash <(curl -s https://ultramarine-linux.org/migrate.sh)</p>
              </div>
              <!-- add a button to copy the text next to the code block -->
              <div class="relative px-3 py-4 mx-1 text-gray-400 bg-gray-600 cursor-pointer rounded-xl dark:text-gray-200 hover:bg-gray-500 dark:hover:text-gray-100" @click="onCopy">
                <button type="button" class="copy-button fa fa-copy">
                  <span class="hidden">Copy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        class="flex flex-col items-start md:items-center text-left w-full px-8 py-8 mt-8 mx-auto bg-gray-200 dark:bg-gray-800 xl:mx-42 lg:mx-40 md:mx-20"
      >
        <h1
          class="pt-2 text-3xl font-semibold tracking-wide text-blue-500  md:text-4xl dark:text-blue-200"
        >
          Why Ultramarine?
        </h1>
        <p
          class="max-w-2xl mt-2 mb-4 text-lg text-left md:text-justify lg:max-w-4xl md:mx-20"
        >
          Ultramarine Linux is a Linux® distribution based on Fedora® Linux. Our
          goal is to design an experience which satisfies the beginner with the
          simplicity, while retaining the features a power user would demand.
          Here's what we offer:
          <!--maybe want to add a hyperlink to "wiki" to direct it to the wiki, will see if i can do it later :^)-->
        </p>
        <div
          id="features" class="flex flex-col md:items-center md:justify-center mt-4 mb-4"
        >
          <div
            id="icons" class="flex flex-col items-start justify-between gap-20 md:gap-20 pt-2 md:flex-row text-7xl"
          >
            <div class="flex flex-col items-start md:items-center">
              <div class="mb-2 text-blue-600 fab fa-fedora dark:text-blue-50" />
              <h3 class="mb-1 text-xl font-semibold tracking-wide">
                Based on Fedora®
              </h3>
              <p class="max-w-sm text-lg text-left md:text-justify">
                As a Fedora® Remix, Ultramarine provides you with all advantages
                of Fedora, but with the freedom of choice and our tweaks to make
                your experience even better.
              </p>
            </div>

            <div class="flex flex-col items-start md:items-center">
              <div
                class="mb-2 text-blue-600 fas fa-lock-open dark:text-blue-50"
              />
              <h3 class="mb-1 text-xl font-semibold tracking-wide">
                Open Source
              </h3>
              <p class="max-w-sm text-lg text-left md:text-justify">
                Just like any other good Linux® distributions, we are free and
                open source, so you can always take a look under the hood and
                see what's going on behind the curtains.
              </p>
            </div>

            <div class="flex flex-col items-start md:items-center">
              <div
                class="mb-2 text-blue-600 far fa-check-circle dark:text-blue-50"
              />
              <h3 class="mb-1 text-xl font-semibold tracking-wide">
                Sane Defaults
              </h3>
              <p class="max-w-sm text-lg text-left md:text-justify">
                Fedora® Linux is great, but it is even better with our included
                defaults. From a preinstalled NVIDIA driver to more software
                repositories like RPM Fusion, we have them all.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="sponsors" class="flex flex-col items-center px-4 py-8">
        <h1
          class="mb-6 text-3xl font-semibold tracking-wide text-blue-500  dark:text-blue-200"
        >
          Our Sponsors
        </h1>
        <div class="flex flex-col md:grid grid-flow-row-dense grid-cols-2 place-items-center items-center justify-end gap-10 sponsors">
          <a href="https://tensordock.com/" class="object-cover">
            <img
              src="https://tensordock.com/assets/img/brand.png"
              alt="Tensordock Logo"
              class="w-72 h-auto rounded-md"
            />
            <h2 class="text-center">tensordock.com</h2>
          </a>
          <a href="https://webhorizon.in" class="object-scale">
            <nuxt-img
              src="webhorizon.png"
              alt="WebHorizon"
              class="w-72 h-auto rounded-md"
              quality="50"
            />
            <h2 class="text-center">webhorizon.in</h2>
          </a>
        </div>
      </section>
      <section
        id="contact"
        class="flex flex-col items-center justify-start w-full px-6 py-12 bg-gray-200  dark:bg-gray-800"
      >
        <h1
          class="mb-2 text-3xl font-semibold tracking-wide text-blue-500  dark:text-blue-200"
        >
          Want to know more?
        </h1>
        <p class="max-w-4xl mb-6 text-lg text-justify">
          You can read a more detailed description of our goal in our wiki.
          There you can also find documentation on the changes and guides on how
          to get your things done. For any other inquiries, check out our
          contact channels:
        </p>
        <div class="flex flex-row gap-12 text-5xl icons">
          <a
            class="text-gray-600  fab fa-twitter dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-200"
            href="https://twitter.com/UltramarineProj"
          />
          <a
            class="text-gray-600  fab fa-discord dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-200"
            href="https://discord.gg/bUuQasHdrF"
          />
          <a
            class="text-gray-600  fab fa-gitlab dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-200"
            href="https://gitlab.ultramarine-linux.org"
          />
        </div>
      </section>
    </div>
    <Footer @set-color-mode="setColorMode" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </div>
</template>

<script>
export default {
  methods: {
    setColorMode (mode) {
      this.$colorMode.preference = mode
    },
    onCopy (event) {
      // get the text from #migrate-script
      const text = document.getElementById('migrate-script').textContent
      this.$copyText(text)
    }
  }
}
</script>
