<template>
  <div class="min-h-screen text-gray-900 dark:text-gray-200 bg-gray-100 dark:bg-gray-900">
    <Navbar />
    <div class="content flex flex-col items-center">
      <section id="hero" class="flex flex-col items-center mt-4 xl:mx-42 lg:mx-40 md:mx-20 px-8 2xl:py-4">
        <h1 class="self-start md:self-center text-5xl md:text-6xl font-semibold tracking-wide text-blue-700 dark:text-blue-300">
          Ultramarine Linux
        </h1>
        <h2 class="text-xl self-start md:self-center pl-1 md:pl-0">
          A simplified yet powerful Linux experience for all.
        </h2>
        <div class="buttons flex flex-row justify-between mt-4 self-start md:self-center">
          <nuxt-link to="/download" class="flex flex-row justify-center items-center rounded-lg mr-2 px-4 py-2 bg-blue-600 text-gray-50 hover:bg-blue-700">
            <button class="flex flex-row justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <p>Download</p>
            </button>
          </nuxt-link>
          <a href="" class="flex flex-row justify-center items-center rounded-lg">
            <button class="ml-2 px-4 py-2 rounded-lg bg-transparent text-blue-500 dark:text-blue-200 border-2 border-blue-500 hover:bg-blue-600 hover:text-gray-50 dark:hover:text-gray-50">
              Installation Guide
            </button>
          </a>
        </div>
        <div class="screenshot hidden md:flex md:flex-col md:justify-center">
          <nuxt-img src="ultramarine.png" alt="Desktop Environment Screenshot" class="mt-6 w-4/5 lg:h-96 lg:w-auto rounded-md bg-gray-800 self-center" />
          <p class="pt-1 text-gray-400 dark:text-gray-500 text-center">
            Latest Release: Ultramarine Flagship 21.11 (Phing Kan)
          </p>
        </div>
      </section>
      <section id="about" class="bg-gray-200 dark:bg-gray-800 flex flex-col items-center w-full xl:mx-42 lg:mx-40 md:mx-20 mt-12 px-8 py-4">
        <h1 class="mx-6 pt-2 text-3xl md:text-4xl font-semibold tracking-wide border-b-2 border-blue-600 dark:border-blue-500">
          Why Ultramarine?
        </h1>
        <p class="mt-6 text-lg text-justify lg:max-w-5xl max-w-4xl md:mx-20 mx-4">
          Ultramarine Linux is a Linux distribution based on Fedora.
          Our goal is to design an experience which satisfies the beginner with the simplicity, while retaining the features a power user would demand.
          Want to know more? We have a wiki!
          <!--maybe want to add a hyperlink to "wiki" to direct it to the wiki, will see if i can do it later :^)-->
        </p>
        <div class="features mt-4 flex flex-col items-center justify-center">
          <h2 class="mx-6 pt-2 text-2xl w-min font-medium tracking-wide border-b-2 border-blue-400 dark:border-blue-200 self-center text-center">
            Features
          </h2>
          <div class="icons flex flex-row justify-between pt-2">
            <div>Work in progress</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>
