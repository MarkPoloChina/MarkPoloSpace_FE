<template>
  <div
    class="mps-view-client-entry"
    :style="{ 'background-image': `url(${backgroundUrl})` }"
  >
    <client-header></client-header>
    <div class="mps-view-client-main">
      <nest-plugin></nest-plugin>
      <router-view />
    </div>
    <client-footer></client-footer>
  </div>
</template>
<script setup>
import ClientHeader from "@/components/client/ClientHeader.vue";
import ClientFooter from "@/components/client/ClientFooter.vue";
import NestPlugin from "@/plugins/nest/NestBackground.vue";
import { getCurrentInstance } from "vue";
const backgroundUrl = getCurrentInstance().proxy.$var.url.background;
</script>
<style lang="scss" scoped>
.mps-view-client-entry {
  width: 100%;
  background-size: auto 100%;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}

.mps-view-client-main {
  position: relative;
  padding-top: 70px;
  min-height: calc(100vh - 70px);
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
}
</style>
