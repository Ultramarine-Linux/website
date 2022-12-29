
<template>
  <footer
    class="flex flex-col md:flex-row gap-4 md:gap-0 max-w-screen-2xl justify-between mx-auto px-8 py-4 text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 border-t border-gray-400 dark:border-gray-600"
  >
    <div class="flex flex-col">
      <span class="font-semibold tracking-wide">
        Copyright © 2021 - 2022 Ultramarine Linux Team
      </span>
      <a
        href="/licenses"
        class="text-blue-200 dark:text-blue-50 hover:text-blue-300 hover:underline"
        >License Notice & Credits</a
      >
    </div>
    <div id="color-mode-toggle" class="md:text-right text-left font-semibold">
      <h2>Theme:</h2>
      <button
        class="pr-2 hover:text-blue-600 dark:hover:text-blue-200"
        @click="setTheme('light')"
      >
        Light
      </button>
      <button
        class="hover:text-blue-600 dark:hover:text-blue-200"
        @click="setTheme('dark')"
      >
        Dark
      </button>
    </div>
  </footer>
</template>

<script setup lang="ts">
const setTheme = (theme: string) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    window.localStorage.setItem("theme", "dark");
  }
  else {
    document.documentElement.classList.remove("dark");
    window.localStorage.setItem("theme", "light");
  }
}
</script>
