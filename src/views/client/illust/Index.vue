<template>
  <div class="mps-view-client-illust">
    <div
      class="mps-illust-topimg mps-topimg"
      :style="{ 'background-image': `url(${topimg})` }"
    >
      <div class="mps-topimg-text">Mark Polo Illust</div>
    </div>
    <div class="mps-illust-pictd">
      <div class="mps-illust-pictd-img-container">
        <el-image
          class="mps-illust-pictd-img"
          :src="imgUrl"
          :preview-src-list="[]"
          fit="contain"
        >
        </el-image>
        <div class="mps-illust-pictd-func">
          <el-button :icon="ArrowLeft" circle />
          <el-button :icon="ArrowRight" circle />
          <el-button type="info" :icon="Calendar" circle />
          <el-button type="primary" :icon="Share" circle />
          <el-button type="success" :icon="Download" circle />
        </div>
      </div>
      <div class="mps-illust-pictd-info-container">
        <div class="mps-illust-pictd-title">Illust Today</div>
        <el-descriptions
          class="mps-illust-info"
          title="Illust Info"
          border
          :column="1"
        >
          <el-descriptions-item label="来源">kooriookami</el-descriptions-item>
          <el-descriptions-item label="ID">18100000000</el-descriptions-item>
          <el-descriptions-item label="链接">Suzhou</el-descriptions-item>
          <el-descriptions-item label="角色">
            <el-tag size="small">School</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="标签">45</el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Share,
  Download,
} from "@element-plus/icons-vue";
import { getCurrentInstance, onMounted, ref } from "vue";
const imgUrl = ref("");
const topimg = ref("");
onMounted(() => {
  imgUrl.value = getCurrentInstance().proxy.$var.url.background;
  topimg.value = getCurrentInstance().proxy.$var.url.topImg[1];
});
</script>
<style lang="scss" scoped>
.mps-view-client-illust {
  width: 100%;
  padding: 0 0 20px 0;

  .mps-illust-topimg {
    background-position: 50% 30%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .mps-illust-pictd {
    display: flex;
    position: relative;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;

    .mps-illust-pictd-img-container {
      margin: 20px;
      position: relative;

      .mps-illust-pictd-img {
        border-radius: 20px;
      }

      .mps-illust-pictd-func {
        position: absolute;
        bottom: 10px;
        right: 8px;
      }
    }

    .mps-illust-pictd-info-container {
      min-width: 18%;

      .mps-illust-pictd-title {
        // display: inline-block;
        height: 100px;
        padding: 20px;
        font-family: "Raleway";
        text-align: center;
        font-size: 50px;
        font-weight: bolder;
      }

      .mps-illust-info {
        // display: inline-block;
        margin: 20px;

        :deep(.el-descriptions__body) {
          padding: 5px;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
