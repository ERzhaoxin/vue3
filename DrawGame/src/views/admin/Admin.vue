<template>
  <div class="admin-box-wrap" id="admin-wrap">
    <div class="section"></div>
    <div class="area">
      <!-- 管理员提取画画费用 -->
      <OpenCanvas></OpenCanvas>
    </div>
  </div>
</template>
<script lang="ts" setup>
import OpenCanvas from './OpenNewCanvas.vue';
</script>

<style lang="less" scoped>
@import url("../../assets/css/admin/admin.less");
</style>