<template>
  <div class="mps-view-client-illust">
    <div
      class="mps-illust-topimg mps-topimg"
      :style="{ 'background-image': `url(${topimg})` }"
    >
      <div class="mps-topimg-text">Mark Polo Illust</div>
    </div>
    <illust-today></illust-today>
  </div>
</template>
<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
import IllustToday from "@/components/client/illust/IllustToday.vue";
const topimg = ref("");
onMounted(() => {
  topimg.value = getCurrentInstance().proxy.$var.url.topImg[1];
});
</script>
<style lang="scss" scoped>
.mps-view-client-illust {
  width: 100%;
  padding: 0 0 20px 0;

  .mps-illust-topimg {
    background-position: 50% 55%;
    background-repeat: no-repeat;
    background-size: cover;
    .mps-topimg-text {
      color: $text-gary-color-1;
      background-color: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(10px);
      padding: 20px 20px 20px 20px;
      border-radius: 20px;
    }
  }
}
</style>
