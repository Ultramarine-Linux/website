<template>
  <header id="nav" class="flex flex-row justify-between items-center max-w-screen-2xl px-8 py-6 mx-auto text-gray-800 dark:text-gray-200 sticky top-0 z-50 bg-clip-padding bg-gray-100 bg-opacity-30 dark:bg-gray-900 dark:bg-opacity-40 backdrop-filter backdrop-blur-xl">
    <nuxt-link to="/" class=" flex flex-row items-center font-bold hover:text-blue-600 dark:hover:text-blue-200">
      <img src="../static/ultramarine-logo.svg" alt="Logo" class="w-11 h-auto mr-2">
      <h1 class="text-xl font-montserrat-bold">
        Ultramarine
      </h1>
    </nuxt-link>
    <div class="links-right flex flex-row gap-8 justify-center align-middle items-center font-semibold">
      <a href="#about" class="hover:text-blue-600 dark:hover:text-blue-200">About</a>
      <a href="https://wiki.ultramarine-linux.org" class="hover:text-blue-600 dark:hover:text-blue-200">Wiki</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
