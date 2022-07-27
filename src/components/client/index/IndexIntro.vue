<template>
  <div class="mps-comp-index-intro">
    <div class="mps-intro-row mps-intro-guide">
      <div class="mps-intro-side">
        <el-icon :size="100" color="white">
          <promotion></promotion>
        </el-icon>
        <span>Guide</span>
      </div>
      <div class="mps-intro-main">
        <div class="mps-intro-main-row">
          <el-icon :size="30" color="white">
            <house></house>
          </el-icon>
          <span
            ><el-link class="handle-el-link" @click="$router.push('/')"
              >Index</el-link
            >, what you see now.</span
          >
        </div>
        <div class="mps-intro-main-row">
          <el-icon :size="30" color="white">
            <Document></Document>
          </el-icon>
          <span
            ><el-link class="handle-el-link" @click="$router.push('/blog')"
              >Blog</el-link
            >, sharing some technologic articles and daily stickies.</span
          >
        </div>
        <div class="mps-intro-main-row">
          <el-icon :size="30" color="white">
            <picture-icon></picture-icon>
          </el-icon>
          <span
            ><el-link class="handle-el-link" @click="$router.push('/image')"
              >Images</el-link
            >, sharing some pics.</span
          >
        </div>
        <div class="mps-intro-main-row">
          <el-icon :size="30" color="white">
            <files></files>
          </el-icon>
          <span
            ><el-link class="handle-el-link" @click="$router.push('/project')"
              >Projects</el-link
            >, showing some web works.</span
          >
        </div>
      </div>
    </div>
    <div class="mps-intro-row mps-intro-me">
      <div class="mps-intro-side">
        <el-avatar :size="100" :src="url.avatar" />
        <span>Me</span>
      </div>
      <div class="mps-intro-main">
        <div class="mps-intro-main-row">
          <el-icon :size="30" color="white">
            <user></user>
          </el-icon>
          <span>Mark Polo</span>
        </div>
        <div class="mps-intro-main-row">
          <el-icon :size="30" color="white">
            <map-location></map-location>
          </el-icon>
          <span>SC of FZU, Fuzhou, China P.R. .</span>
        </div>
        <div class="mps-intro-main-row">
          <el-icon :size="30" color="white">
            <chat-dot-round></chat-dot-round>
          </el-icon>
          <div class="mps-intro-contact">
            <span class="iconfont">&#xe602;</span>
            <div>{{ url.email }}</div>
          </div>
          <div class="mps-intro-contact">
            <span class="iconfont">&#xe622;</span>
            <a :href="url.twitter" class="handle-default-a" target="_blank"
              >@MarkXiong16</a
            >
          </div>
          <div class="mps-intro-contact">
            <span class="iconfont">&#xec01;</span>
            <a :href="url.github" class="handle-default-a" target="_blank"
              >MarkPoloChina</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  Promotion,
  House,
  Document,
  Picture as PictureIcon,
  Files,
  User,
  MapLocation,
  ChatDotRound,
} from "@element-plus/icons-vue";
import { getCurrentInstance } from "vue";
const url = getCurrentInstance().proxy.$var.url;
</script>
<style lang="scss" scoped>
.mps-comp-index-intro {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  .mps-intro-row {
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: row;
    margin: 0 0 30px 0;
    border-radius: 20px;
    &.mps-intro-guide {
      background-color: $theme-main-color-2t;
    }
    &.mps-intro-me {
      background-color: $theme-main-color-3t;
    }
    .mps-intro-side {
      width: 30%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        margin-top: 10px;
        font-family: "Raleway";
        font-weight: 600;
        font-size: 30px;
      }
    }
    .mps-intro-main {
      .mps-intro-main-row {
        height: 60px;
        padding: 10px 5px 10px 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        font-size: 20px;
        font-family: "Raleway";
        font-weight: 500;
        font-size: 20px;
        span {
          margin: 0 0 0 20px;
          display: flex;
        }
        .mps-intro-contact {
          margin: 0 20px 0 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          span {
            margin: 0 10px 0 0;
            font-size: 22px;
          }
        }
      }
    }
  }
}
</style>
