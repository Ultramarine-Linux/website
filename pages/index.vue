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
        Download links and the Ultramarine Linux repositories are up for the time being,
        unstable download speed is expected. We are very sorry for the inconvenience.
      </p>
    </div> -->

    <div class="content flex flex-col items-center">
      <section
        id="hero"
        class="
          flex flex-col
          items-center
          mt-4
          xl:mx-42
          lg:mx-40
          md:mx-20
          px-8
          2xl:py-4
        "
      >
        <h1
          class="
            self-start
            md:self-center
            text-5xl
            md:text-6xl
            font-semibold
            tracking-wide
            text-blue-700
            dark:text-blue-200
          "
        >
          Ultramarine Linux
        </h1>
        <h2 class="text-xl self-start md:self-center pl-1 md:pl-0">
          A simplified yet powerful Linux® experience for all.
        </h2>
        <div
          class="
            buttons
            flex flex-row
            justify-between
            mt-4
            self-start
            md:self-center
          "
        >
          <nuxt-link
            to="/download"
            class="
              flex flex-row
              justify-center
              items-center
              rounded-lg
              mr-2
              px-4
              py-2
              bg-blue-500
              text-gray-50
              hover:bg-blue-700
            "
          >
            <button class="flex flex-row justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
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
            href="/wiki"
            class="flex flex-row justify-center items-center rounded-lg"
          >
            <button
              class="
                ml-2
                px-4
                py-2
                rounded-lg
                bg-transparent
                text-blue-300
                dark:text-blue-100
                border-2
                dark:border-blue-400
                border-blue-500
                hover:bg-blue-400 hover:text-gray-50
                dark:hover:text-gray-50
              "
            >
              Installation Guide
            </button>
          </a>
        </div>
        <div class="screenshot hidden md:flex md:flex-col md:justify-center">
          <nuxt-img
            src="ultramarine.png"
            alt="Desktop Environment Screenshot"
            class="
              mt-6
              w-4/5
              lg:h-96 lg:w-auto
              rounded-md
              bg-gray-800
              self-center
            "
          />
          <p class="pt-1 text-gray-400 dark:text-gray-500 text-center">
            Upcoming Release: Ultramarine Flagship 22.04 (Rhode Island)
          </p>
        </div>
        <!-- Migration script -->
        <div class="p-4">
          <div class="hidden md:flex md:flex-col md:justify-center">
            <p class="text-xl p-4">
              You can also migrate from an existing Fedora installation!
            </p>
            <!-- code block for copying command -->
            <div class="p-6 bg-gray-600 text-gray-400 rounded-xl">

              <p id="migrate-script" class="display: inline-block">curl ultramarine-linux.org/migrate.sh | sudo bash</p>
              <!-- add a button to copy the text next to the code block -->
              <button type="button" class="copy-button fa-copy" @click="onCopy">
                <span class="hidden">Copy</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        class="
          bg-gray-200
          dark:bg-gray-800
          flex flex-col
          items-center
          w-full
          xl:mx-42
          lg:mx-40
          md:mx-20
          mt-12
          px-8
          py-8
        "
      >
        <h1
          class="
            mx-6
            pt-2
            text-3xl
            md:text-4xl
            font-semibold
            tracking-wide
            text-blue-500
            dark:text-blue-200
          "
        >
          Why Ultramarine?
        </h1>
        <p
          class="
            mt-2
            mb-4
            text-lg text-justify
            lg:max-w-4xl
            max-w-2xl
            md:mx-20
            mx-4
          "
        >
          Ultramarine Linux is a Linux® distribution based on Fedora® Linux. Our
          goal is to design an experience which satisfies the beginner with the
          simplicity, while retaining the features a power user would demand.
          Here's what we offer:
          <!--maybe want to add a hyperlink to "wiki" to direct it to the wiki, will see if i can do it later :^)-->
        </p>
        <div
          class="features mt-4 flex flex-col items-center justify-center mb-4"
        >
          <div
            class="
              icons
              flex flex-col
              md:flex-row
              justify-between
              items-start
              gap-16
              md:gap-20
              text-7xl
              pt-2
            "
          >
            <div class="flex flex-col items-center">
              <div class="fab fa-fedora mb-2 text-blue-600 dark:text-blue-50" />
              <h3 class="text-xl font-semibold tracking-wide mb-1">
                Based on Fedora®
              </h3>
              <p class="text-lg max-w-sm text-justify">
                As a Fedora® Remix, Ultramarine provides you with all advantages
                of Fedora, but with the freedom of choice and our tweaks to make
                your experience even better.
              </p>
            </div>

            <div class="flex flex-col justify-center items-center">
              <div
                class="fas fa-lock-open mb-2 text-blue-600 dark:text-blue-50"
              />
              <h3 class="text-xl font-semibold tracking-wide mb-1">
                Open Source
              </h3>
              <p class="text-lg max-w-sm text-justify">
                Just like any other good Linux® distributions, we are free and
                open source, so you can always take a look under the hood and
                see what's going on behind the curtains.
              </p>
            </div>

            <div class="flex flex-col justify-center items-center">
              <div
                class="far fa-check-circle mb-2 text-blue-600 dark:text-blue-50"
              />
              <h3 class="text-xl font-semibold tracking-wide mb-1">
                Sane Defaults
              </h3>
              <p class="text-lg max-w-sm text-justify">
                Fedora® Linux is great, but it is even better with our included
                defaults. From a preinstalled NVIDIA driver to more software
                repositories like RPM Fusion, we have them all.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="sponsors" class="flex flex-col items-center py-8 px-4">
        <h1
          class="
            text-3xl
            font-semibold
            tracking-wide
            mb-6
            text-blue-500
            dark:text-blue-200
          "
        >
          Our Sponsors
        </h1>
        <div class="sponsors flex flex-col justify-end items-center gap-10">
          <a href="https://tensordock.com/">
            <img
              src="https://tensordock.com/assets/img/brand.png"
              alt="Tensordock Logo"
              class="h-14 w-auto rounded-md"
            />
            <h2 class="text-center">tensordock.com</h2>
          </a>
          <a href="https://webhorizon.in">
            <img
              src="https://lt.moebox.pl/webhorizon.png"
              alt="WebHorizon"
              class="h-28 w-auto rounded-md"
            />
            <h2 class="text-center">webhorizon.in</h2>
          </a>
        </div>
      </section>
      <section
        id="contact"
        class="
          flex flex-col
          justify-start
          items-center
          py-12
          px-6
          bg-gray-200
          dark:bg-gray-800
          w-full
        "
      >
        <h1
          class="
            text-3xl
            font-semibold
            tracking-wide
            mb-2
            text-blue-500
            dark:text-blue-200
          "
        >
          Want to know more?
        </h1>
        <p class="text-lg max-w-4xl text-justify mb-6">
          You can read a more detailed description of our goal in our wiki.
          There you can also find documentation on the changes and guides on how
          to get your things done. For any other inquiries, check out our
          contact channels:
        </p>
        <div class="icons flex flex-row gap-12 text-5xl">
          <a
            class="
              fab
              fa-twitter
              text-gray-600
              dark:text-gray-200
              hover:text-blue-600
              dark:hover:text-blue-200
            "
            href="https://twitter.com/UltramarineProj"
          />
          <a
            class="
              fab
              fa-discord
              text-gray-600
              dark:text-gray-200
              hover:text-blue-600
              dark:hover:text-blue-200
            "
            href="https://discord.gg/bUuQasHdrF"
          />
          <a
            class="
              fab
              fa-gitlab
              text-gray-600
              dark:text-gray-200
              hover:text-blue-600
              dark:hover:text-blue-200
            "
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
