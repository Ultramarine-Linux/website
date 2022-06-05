<template>
  <div class="flex flex-col items-center">
    <nuxt-img
      :src="screenshot"
      :alt="'Ultramarine' + editionName + 'Screenshot'"
      class="h-auto pb-4 rounded-sm w-96"
      quality="10"
    />

    <div class="flex flex-col items-center">
      <a
        :href="downloadLink"
        class="px-4 py-2 font-semibold text-gray-900 bg-transparent border-2 border-blue-500 rounded-lg dark:text-gray-50 hover:bg-blue-600 hover:text-gray-50"
      >
        Download {{ editionName }} Edition
      </a>
      <a :href="checksumLink" class="mt-1 text-gray-400">View Checksum</a>
    </div>

    <div class="pt-2">
      <p class="max-w-md text-lg text-justify">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
const currentMajorVersion = '36'
const currentMinorVersion = '1.1'
const lapisBaseLink = 'https://lapis.ultramarine-linux.org/pub/ultramarine'


export default {
  name: 'DownloadSection',
  props: ['editionName', 'screenshot', 'description', 'isoLink'],
  computed: {
    baseLink() {
      return `${lapisBaseLink}/${currentMajorVersion}/${this.editionName}/x86_64/iso`
    },
    downloadLink() {
      if (this.isoLink) return this.isoLink

      return `${this.baseLink}/Ultramarine-${this.editionName}-Live-x86_64-${currentMajorVersion}-${currentMinorVersion}.iso`
    },

    checksumLink() {
      return `${this.baseLink}/CHECKSUM`
    }
  }
}
</script>
