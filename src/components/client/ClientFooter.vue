<template>
  <footer class="mps-comp-client-footer-container">
    <div class="mps-comp-client-footer">
      <div class="mps-footer-row">
        <el-link class="handle-el-link" @click="$router.push('/about')"
          >[README]</el-link
        >
      </div>
      <div class="mps-footer-row">
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          class="handle-default-a"
          >闽ICP备2020022020号-2</a
        >
      </div>
      <div class="mps-footer-row">
        Copyright © 2020-{{ thisYear }} MP Studio, All Rights Reserved.
      </div>
      <!-- <div
        style="
          width: 300px;
          margin: 0 auto;
          padding: 20px 0;
          text-align: center;
        "
      >
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35010202001298"
          style="
            display: inline-block;
            text-decoration: none;
            height: 20px;
            line-height: 20px;
          "
          ><img :src="beianUrl" style="float: left" />
          <p
            style="
              float: left;
              height: 20px;
              line-height: 20px;
              margin: 0px 0px 0px 5px;
              color: #939393;
            "
          >
            闽公网安备 35010202001298号
          </p></a
        >
      </div> -->
    </div>
  </footer>
</template>
<script setup>
// import { getCurrentInstance } from "vue";
// const beianUrl = getCurrentInstance().proxy.$var.url.beian;
const thisYear = new Date().getFullYear();
</script>
<style lang="scss" scoped>
.mps-comp-client-footer-container {
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(3px);
}
.mps-comp-client-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0 0;
  padding: 10px 0 10px 0;
  background-color: rgba(255, 255, 255, 0.7);
  .mps-footer-row {
    width: 100%;
    text-align: center;
    margin: 10px 0 0 0;
  }
}
</style>
