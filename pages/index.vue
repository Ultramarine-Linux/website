<template>
  <div class="min-h-screen text-gray-900 dark:text-gray-200 bg-gray-100 dark:bg-gray-900">
    <Navbar />
    <div class="content flex flex-col items-center xl:mx-42 lg:mx-40 md:mx-20 px-8 py-4">
      <div class="hero flex flex-col items-center mt-4">
        <h1 class="self-start md:self-center text-6xl font-semibold tracking-wide text-blue-700 dark:text-blue-400">
          Ultramarine Linux
        </h1>
        <h2 class="text-xl self-start md:self-center">
          A simplified Linux experience for everyone.
        </h2>
        <div class="buttons flex flex-row justify-between mt-4 self-start md:self-center">
          <button class="flex flex-row justify-center items-center mr-2 px-4 py-2 rounded-lg bg-blue-600 text-gray-50 hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <p>Download</p>
          </button>
          <button class="ml-2 px-4 py-2 rounded-lg bg-transparent text-gray-900 dark:text-gray-50 border-2 border-blue-500 hover:bg-blue-600 hover:text-gray-50">
            Installation Guide
          </button>
        </div>
        <div class="screenshot hidden md:block">
          <img src="../static/ultramarine.png" alt="Desktop Environment Screenshot" class="mt-6 w-4/5 lg:h-96 lg:w-auto rounded-md">
          <p class="text-gray-400 dark:text-gray-300 text-center">
            Latest Release: Ultramarine Flagship 21.11 (Phing Kan)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
