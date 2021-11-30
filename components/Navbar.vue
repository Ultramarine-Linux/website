<template>
  <header id="nav" class="flex flex-row justify-between items-center w-full 2xl:px-72 xl:px-48 lg:px-40 md:px-20 px-4 pt-4 pb-2 text-gray-800 dark:text-gray-200 sticky top-0 z-50 bg-clip-padding bg-gray-100 bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-20 backdrop-filter backdrop-blur-lg">
    <router-link to="/" class=" flex flex-row items-center font-bold hover:text-blue-600 dark:hover:text-blue-200">
      <img src="../static/ultramarine-logo.svg" alt="Logo" class="w-11 h-auto mr-2">
      <h1 class="text-xl">
        Ultramarine
      </h1>
    </router-link>
    <div class="links-right flex flex-row justify-center align-middle items-center font-semibold">
      <a href="#projects" class="hover:text-blue-600 dark:hover:text-blue-200 mr-4">About</a>
      <a href="/installation" class="hover:text-blue-600 dark:hover:text-blue-200">Installation</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
