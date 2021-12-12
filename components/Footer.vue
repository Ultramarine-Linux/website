<template>
  <footer class="flex flex-row w-full justify-between px-6 py-4 text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-900">
    <div class="flex flex-col">
      <h1 class="font-semibold tracking-wide">
        Copyright © 2021 Ultramarine Linux Team
      </h1>
      <h2>Linux® is a registered trademark of Linus Torvalds.</h2>
    </div>
    <div id="color-mode-toggle" class="text-right font-semibold">
      <h2>Theme:</h2>
      <button class="pr-2 hover:text-blue-600 dark:hover:text-blue-200" @click="setColorMode('system')">
        System
      </button>
      <button class="pr-2 hover:text-blue-600 dark:hover:text-blue-200" @click="setColorMode('light')">
        Light
      </button>
      <button class="hover:text-blue-600 dark:hover:text-blue-200" @click="setColorMode('dark')">
        Dark
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    setColorMode (mode) {
      this.$emit('set-color-mode', mode)
    }
  }
}
</script>
