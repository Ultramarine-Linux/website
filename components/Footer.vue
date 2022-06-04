<template>
  <footer
    class="
      flex flex-col md:flex-row gap-4 md:gap-0
      max-w-screen-2xl
      justify-between
      mx-auto
      px-8
      pb-2
      text-gray-600
      dark:text-gray-300
      bg-gray-100
      dark:bg-gray-900
    "
  >
    <div class="flex flex-col">
      <h1 class="font-semibold tracking-wide">
        Copyright © 2021 - 2022 Ultramarine Linux Team
      </h1>
      <h2>
        Linux® is a registered international trademark of Linus Torvalds
      </h2>
      <h2>
        Fedora® and the Infinity design logo are international trademarks of Red Hat Inc.
      </h2>
    </div>
    <div id="color-mode-toggle" class="md:text-right text-left font-semibold">
      <h2>Theme:</h2>
      <button
        class="pr-2 hover:text-blue-600 dark:hover:text-blue-200"
        @click="setColorMode('system')"
      >
        System
      </button>
      <button
        class="pr-2 hover:text-blue-600 dark:hover:text-blue-200"
        @click="setColorMode('light')"
      >
        Light
      </button>
      <button
        class="hover:text-blue-600 dark:hover:text-blue-200"
        @click="setColorMode('dark')"
      >
        Dark
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    setColorMode(mode) {
      this.$emit("set-color-mode", mode);
    },
  },
};
</script>
