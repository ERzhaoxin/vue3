<template>
  <div>
    <Pixel-Box ref="pixelBox"></Pixel-Box>
  </div>
</template>
<script lang="ts">
import PixelBox from "./views/index.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { PixelBox },
  setup() {},
});
</script>
