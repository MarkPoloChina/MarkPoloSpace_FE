<template>
  <div class="mps-view-client-entry">
    <client-header></client-header>
    <div class="mps-view-client-main">
      <router-view />
    </div>
    <client-footer></client-footer>
  </div>
  <nest-plugin></nest-plugin>
</template>
<script setup>
import ClientHeader from "@/components/client/ClientHeader.vue";
import ClientFooter from "@/components/client/ClientFooter.vue";
import NestPlugin from '@/plugins/nest/NestBackground.vue'
// import { getCurrentInstance } from "vue";
// const backgroundUrl = getCurrentInstance().proxy.$var.url.background;
</script>
<style lang="scss" scoped>
.mps-view-client-entry {
  width: 100%;
  background-image: url($url-bg);
  background-size: auto 100%;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}

.mps-view-client-main {
  position: relative;
  padding-top: 70px;
  min-height: calc(100vh - 70px);
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px);
}
</style>
