<template>
  <div class="home" id="home">
    <div class="link" id="link">
      <div class="bg">
        <img class="img-bg" src="../../assets/images/home/slide-1.png" />
      </div>
      <div class="heroCarousel">
        <div class="area min600">
          <h2>Create NFT paintings and share asset value together</h2>
          <p>1024 NFT paintings for PixelArt artists & NFT fans community</p>
          <p>Artists unlimited, Ideas unlimited, Value unlimited</p>
          <a class="btn-get-started scrollto" @click="goToRoute('gallery')">Discover & Participation</a>
        </div>
      </div>
    </div>
    <!-- counts -->
    <div class="area">
      <Paint></Paint>
    </div>
    <!--  -->
    <!-- about -->
    <div class="area">
      <About></About>
    </div>
    <!-- <Footer /> -->
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import About from "./About.vue";
import Paint from "./Paint.vue";
const router = useRouter();
const goToRoute = (item) => {
  router.push(item);
};
</script>

<style lang="less" scoped>
@import url("../../assets/css/home/Home.less");
</style>
