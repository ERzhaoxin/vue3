<template>
  <div class="kpixel-wrap" ref="pixelWrap" @scroll="scroll">
    <div
      :class="{ 'header': true, 'header-scrolled': isChangeHeight, }"
      :style="`width:${hWidth}px`"
    >
      <Header></Header>
    </div>
    <div class="content" ref="content" v-resize:200="onResize">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from "../components/header/Header.vue";
import { onMounted, ref, reactive } from "vue";
const content = ref();
const pixelWrap = ref();
const hWidth = ref("calc(100vw)");
const isChangeHeight = ref(false);
const scroll = () => {
  isChangeHeight.value = pixelWrap.value.scrollTop > 80 ? true : false;
};
const onResize = () => {
  hWidth.value = content.value.clientWidth;
}
</script>
<style lang="less" scoped>
.kpixel-wrap {
  height: 100%;
  background: #fff;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  overflow: auto;
  .header {
    position: fixed;
    width: 100%;
    padding: 20px 0;
    top: 0px;
    z-index: 1;
    background-color: #fff;
    transition: all 0.5s;

    &.header-scrolled {
      padding: 12px 0;
      box-shadow: 0px 2px 15px #c1c3bb;
      transition: all 0.5s;
    }
  }
  .content {
    margin: 0 auto;
  }
}
</style>
