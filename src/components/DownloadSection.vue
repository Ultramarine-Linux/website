<template>
  <div class="flex flex-col items-center">
    <img
      :src="screenshot"
      :alt="'Ultramarine' + editionName + 'Screenshot'"
      class="h-auto pb-4 rounded-sm w-96"
      width="384px"
    />

    <div class="flex flex-col items-center">
      <a
        :href="downloadLink"
        class="px-4 py-2 font-semibold  bg-transparent border-2 border-blue-500 rounded-lg hover:bg-blue-600 hover:text-gray-50"
      >
        <i class="fa fa-download"></i> &nbsp;
        Download {{ editionName }} Edition
      </a>

      <div class="flex flex-col items-center gap-3 mt-2">

        <a :href="checksumLink" class="text-gray-400">View Checksum</a>

        <div class="" v-if="deprecatedMajorVersion && deprecatedMinorVersion">
          <div class="px-2 py-1 text-gray-700 italic dark:text-gray-200 font-medium rounded-lg">
            Ultramarine Linux {{ deprecatedMajorVersion }}.{{ deprecatedMinorVersion }}
          </div>
        </div>
      </div>
    </div>

    <div class="pt-2">
      <p class="max-w-md text-lg text-center">
        {{ description }}
      </p>
    </div>

  </div>
</template>

<script lang="ts">
const currentMajorVersion = '36'
const currentMinorVersion = '1.2'
const lapisBaseLink = 'https://lapis.ultramarine-linux.org/pub/ultramarine'
export default {
  name: 'DownloadSection',
  props: ['editionName', 'screenshot', 'description', 'isoLink', 'archivedIso', 'deprecatedMajorVersion', 'deprecatedMinorVersion'],
  computed: {
    baseLink() {
      if (this.deprecatedMajorVersion) {
        if (this.archivedIso)
          return `${lapisBaseLink}/archive/${this.editionName}/x86_64/iso`
        else
          return `${lapisBaseLink}/${this.deprecatedMajorVersion}/${this.editionName}/x86_64/iso`
      }
      else
        return `${lapisBaseLink}/${currentMajorVersion}/${this.editionName}/x86_64/iso`
    },
    downloadLink() {
      if (this.isoLink) return this.isoLink
      if(this.deprecatedMajorVersion && this.deprecatedMinorVersion)
        return `${this.baseLink}/Ultramarine-${this.editionName}-Live-x86_64-${this.deprecatedMajorVersion}-${this.deprecatedMinorVersion}.iso`
      else
        return `${this.baseLink}/Ultramarine-${this.editionName}-Live-x86_64-${currentMajorVersion}-${currentMinorVersion}.iso`
    },
    checksumLink() {
      return `${this.baseLink}/CHECKSUM`
    }
  }
}
</script>
