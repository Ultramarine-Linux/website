
<template>
  <footer
    class="relative flex flex-col md:flex-row gap-4 md:gap-0 bg-gray-900 text-gray-600 dark:text-gray-400 border-t border-gray-800 w-full"
  >
    <div class="flex flex-col px-6 md:px-14 py-5 mx-auto max-w-screen-2xl items-start w-full">
      <span class="font-semibold tracking-wide">
        Copyright © 2021 - {{ new Date().getFullYear() }} Fyra Labs
      </span>
      <a
        href="/licenses"
        class="text-accent-500 dark:text-accent-400 hover:text-accent-600 hover:dark:text-accent-500"
        >License Notice & Credits</a
      >
    </div>
  </footer>
</template>
