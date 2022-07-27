<template>
  <div class="mps-view-client-index">
    <index-carousel></index-carousel>
    <index-intro></index-intro>
  </div>
</template>
<script setup>
import IndexCarousel from "@/components/client/index/IndexCarousel.vue";
import IndexIntro from "@/components/client/index/IndexIntro.vue";
import { onMounted } from "vue";
onMounted(()=>{
})
</script>
<style lang="scss" scoped>
.mps-view-client-index {
  width: 100%;
}
</style>
