<template>
  <div class="paint-bottom">
    <el-icon :size="25" @click="jumpNewArt(0)" :class="{ active: nftId == 1 }">
      <back></back>
    </el-icon>
    <div class="paint-id strong">Art ID {{ nftId }}</div>
    <el-icon :size="25" @click="jumpNewArt(1)" :class="{ active: nftId == artMaxIndex }">
      <right></right>
    </el-icon>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, defineEmits } from 'vue';
import { useRoute } from "vue-router";
import { getAllImages } from "../../axios/api";
import { Back, Right } from '@element-plus/icons-vue';
const route = useRoute();
const artMaxIndex = ref(1);
let nftId = ref(Number(route.query.nftId));
//获取所有图片
const getTotalImage = async () => {
  const res: any = await getAllImages();
  if (!res.result) return;
  artMaxIndex.value =
    res.data.length == 0 ? 0 : res.data[res.data.length - 1].id;
}
//前后跳转
const emit = defineEmits(['changePaintData']);
const jumpNewArt = (number: number) => {
  if (nftId.value == 1 && number == 0) return;
  if (nftId.value == artMaxIndex.value && number == 1) return;
  let index = number == 1 ? ++nftId.value : --nftId.value;
  emit('changePaintData', index);
};
onMounted(() => {
  getTotalImage();
})
</script>

<style lang="less" scoped>
@import url("../../assets/css/board/paint.less");
</style>