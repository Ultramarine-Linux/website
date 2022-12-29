<template>
  <div class="mb-4 float-left xs:hidden font-bold text-xl">
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
