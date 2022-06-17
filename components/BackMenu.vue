<template>
    <div class="mb-4 float-left xs:hidden font-bold text-xl">
        <nuxt-link :to="targetLink">
            <i class="fa fa-angle-left"></i> &nbsp; Back to {{target}}
        </nuxt-link>    
    </div>
</template>
<script>
export default {
    props:["target","targetLink"]
}
</script>