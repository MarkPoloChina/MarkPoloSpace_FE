<template>
  <div ref="canvasNestElement" style="
  width: 100%;
  height: 100%;
  position:absolute;
    "></div>
</template>
<script setup>
import CanvasNest from "canvas-nest.js";
import { onMounted, ref } from "vue";
let canvasNestElement = ref(null)
onMounted(() => {
  const config = {
    color: "0,0,0",
    count: 88,
    zIndex: -1,
  };
  new CanvasNest(canvasNestElement.value, config);
});
</script>
<style lang="scss" scoped>
</style>
