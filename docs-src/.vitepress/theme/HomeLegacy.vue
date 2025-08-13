<template>
  <div id="legacy-host">
    <iframe
      class="legacy-frame"
      src="/home/index.html"
      title="DROPIFY® Home"
      loading="eager"
    ></iframe>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(async () => {
  // Apply original body class for styling and rely on iframe content for layout
  document.body.classList.add("dropify");
});

onUnmounted(() => {
  // Clean up body class when navigating away in VitePress
  document.body.classList.remove("dropify");
  const host = document.getElementById("legacy-host");
  if (host) host.innerHTML = "";
});
</script>

<style>
body.dropify #legacy-host {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100svh;
  overflow: hidden;
  z-index: 0;
}
body.dropify #legacy-host .legacy-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
