<template>
  <div class="min-h-screen text-gray-900 bg-gray-100 dark:text-gray-200 dark:bg-gray-900">
    <Navbar />
    <div class="max-w-screen-2xl mx-auto px-8">
      <nuxt />
    </div>
    <Footer @set-color-mode="setColorMode" />
  </div>
</template>

<script>
export default {
  name: 'default',
  methods: {
    setColorMode (mode) {
      this.$colorMode.preference = mode
    },
  }
}
</script>
