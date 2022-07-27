<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 86.2 86.26"
    xml:space="preserve"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" class="grad-stop-1" />
        <stop offset="100%" class="grad-stop-2" />
      </linearGradient>
    </defs>
    <path
      d="M84.64,79.97C29.4,56.18,50.82-33.45,70.55,26.95c7.05,52.9-60.76,52.86-53.7,0
	c19.91-60.52,40.9,29.56-14.09,53.02"
    />
  </svg>
</template>
<script setup></script>
<style lang="scss" scoped>
svg {
  enable-background: new 0 0 118.79 118.79;
  .grad-stop-1 {
    stop-color: $theme-main-color-1;
    stop-opacity: 1;
  }
  .grad-stop-2 {
    stop-color: $theme-main-color-3;
    stop-opacity: 1;
  }
  path {
    fill: transparent;
    stroke: url("#grad1");
    stroke-width: 8;
    stroke-miterlimit: 10;
  }
}
</style>
