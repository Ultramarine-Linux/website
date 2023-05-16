<template>
  <div class="flex flex-col items-center">
    <img :src="screenshot" :alt="'Ultramarine' + editionName + 'Screenshot'" class="h-auto pb-4 rounded-sm w-96"
      width="384px" />

    <div class="flex flex-col items-center">
      <a :href="downloadLink"
        class="px-4 py-2 font-semibold text-gray-900 bg-transparent border-2 border-blue-500 rounded-lg dark:text-gray-50 hover:bg-blue-600 hover:text-gray-50">
        <i class="fa fa-download"></i> &nbsp;
        Download {{ editionName }} Edition
      </a>

      <div class="flex flex-col items-center gap-3 mt-2">
        <a :href="checksumLink" class="text-gray-400">View Checksum</a>
      </div>
    </div>

    <div class="pt-2">
      <p class="max-w-md text-lg text-center">
        {{ description }}
      </p>
    </div>

  </div>
</template>


<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  editionName: string;
  screenshot: string;
  downloadLink: string;
  description: string;
}>();

const checksumLink = computed(() => props.downloadLink + '.sha256sum');
</script>
