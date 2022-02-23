<template>
  <div class="claim" id="claim">
    <div class="section"></div>
    <div class="area">
      <div v-if="data.artTotalList.length == 0" class="dataEmpty">
        <el-empty description="Empty data"></el-empty>
      </div>
      <div class="record" v-else id="record">
        <ul
          class="infinite-list"
          v-infinite-scroll="loadMomentImg"
          infinite-scroll-distance="100"
          infinite-scroll-delay="500"
          infinite-scroll-immediate="false"
        >
          <li
            class="img-list"
            :class="{ active: item.isTransfrom }"
            v-for="(item, index) in data.artTotalList"
            :key="index + 'test'"
            @click="goToPaintPage()"
          >
            <div class="img-box">
              <img :src="item.image" />
            </div>
            <p>
              <strong>ArtID:</strong>
              {{ item.id }}
              <br />
              <strong>Pixels:</strong>
              {{ item.pixelNum }}
              <br />
            </p>
            <div :class="isShowPC ? 'join-pc' : 'join-phone'" v-show="item.states != 2">
              <span>Join us</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import Footer from "../../components/Footer.vue";
import { getAllImages } from "../../axios/api";
import { ImgArray } from '../../types/gallery/index';

const data: { artTotalList: ImgArray[] } = reactive({
  artTotalList: []
});

const isShowPC = ref(false);
const getTotalImage = async () => {
  const res: any = await getAllImages();
  if (!res.result) return;
  data.artTotalList = res.data;
}
const loadMomentImg = () => { };
const goToPaintPage = () => { };
onMounted(() => {
  getTotalImage();
})

</script>

<style lang="less" scoped>
@import url("../../assets/css/gallery/gallery.less");
</style>