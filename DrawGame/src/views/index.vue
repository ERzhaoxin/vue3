<template>
  <div class="kpixel-wrap" ref="pixelWrap">
    <div class="header">
      <Header></Header>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import Header from "../components/header/Header.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Header },
  setup() { },
});
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

    &.active {
      transition: all 0.5s;
      width: calc(100vw - 17px);
    }
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
