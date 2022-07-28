<template>
  <div class="mps-view-client-blog">
    <div
      class="mps-blog-topimg mps-topimg"
      :style="{ 'background-image': `url(${topimg})` }"
    >
      <div class="mps-topimg-text">Mark Polo Blog</div>
    </div>
  </div>
</template>
<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
const topimg = ref("");
onMounted(() => {
  topimg.value = getCurrentInstance().proxy.$var.url.topImg[0];
});
</script>
<style lang="scss" scoped>
.mps-blog-topimg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
