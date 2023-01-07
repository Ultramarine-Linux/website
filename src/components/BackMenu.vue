<template>
  <div class="mb-4 float-left text-gray-500 text-lg w-full hover:text-gray-300">
      <a :href="targetLink">
          <i class="fa fa-angle-left"></i> &nbsp; Back to {{target}}
      </a>
  </div>
</template>
<script lang="ts">
export default {
  props:["target","targetLink"]
}
</script>
