<template>
  <header class="mps-comp-client-header">
    <el-link class="mps-logo" @click="$router.push('/')" :underline="false">
      <logo class="mps-logo-svg"></logo>
      <div class="mps-logo-text">Mark Polo Space</div>
    </el-link>
    <el-menu
      mode="horizontal"
      :ellipsis="false"
      class="mps-menu"
      :active-text-color="theme_main_color_1"
      background-color="transparent"
      :default-active="activeIndex"
      router
    >
      <el-menu-item index="/" class="mps-menu-icon">
        <el-icon><house></house></el-icon
      ></el-menu-item>
      <el-menu-item index="/blog" class="mps-menu-icon">
        <el-icon><Document></Document></el-icon
      ></el-menu-item>
      <el-menu-item index="/illust" class="mps-menu-icon">
        <el-icon><picture-icon></picture-icon></el-icon>
      </el-menu-item>
      <el-menu-item index="/project" class="mps-menu-icon"
        ><el-icon><files></files></el-icon
      ></el-menu-item>
    </el-menu>
  </header>
</template>
<script setup>
import {
  House,
  Document,
  Picture as PictureIcon,
  Files,
} from "@element-plus/icons-vue";
import Logo from "@/components/others/LogoSvg.vue";
import { getCurrentInstance, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const theme_main_color_1 =
  getCurrentInstance().proxy.$var.color.theme_main_color_1;
const activeIndex = ref("");
onMounted(() => {
  activeIndex.value = route.path.startsWith("/blog")
    ? "/blog"
    : route.path.startsWith("/illust")
    ? "/illust"
    : route.path.startsWith("/project")
    ? "/project"
    : route.path.startsWith("/")
    ? "/"
    : "";
});
watch(
  () => route.path,
  () => {
    activeIndex.value = route.path.startsWith("/blog")
      ? "/blog"
      : route.path.startsWith("/illust")
      ? "/illust"
      : route.path.startsWith("/project")
      ? "/project"
      : route.path.startsWith("/")
      ? "/"
      : "";
  }
);
</script>
<style lang="scss" scoped>
.mps-comp-client-header {
  position: fixed;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background-color: #ffffffbf;
  backdrop-filter: blur(20px);
  border-radius: 0 0 10px 10px;
  padding: 0 20px 0 20px;
  .mps-logo {
    margin: 0 50px 0 50px;
    user-select: none;
    .mps-logo-svg {
      width: 44px;
      height: 44px;
      padding: 3px;
      margin: 0 15px 0 0;
      vertical-align: middle;
    }
    .mps-logo-text {
      display: inline-block;
      vertical-align: middle;
      white-space: nowrap;
      font-size: 30px;
      color: $theme-main-color-1;
      font-family: "Raleway";
      font-weight: 1000;
    }
  }
  .mps-menu {
    height: 50px;
    margin: 0 40px 0 0;
    .mps-menu-icon {
      i {
        font-size: 30px;
        margin: 0;
      }
    }
  }
}
</style>
