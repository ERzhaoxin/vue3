<template>
  <div class="open-canvas-wrap" id="open-canvas-wrap">
    <div class="title">Open new canvas</div>
    <div class="end-time-block">
      <div class="end-time">
        <span>*</span>
        End Time：
      </div>
      <div class="block">
        <el-date-picker v-model="endTime" type="datetime" placeholder="Choose end time"></el-date-picker>
      </div>
      <el-button type="primary" @click="submitCanvas">submit</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const endTime = ref('');
const submitCanvas: Function = () => { }

</script>

<style lang="less" scoped>
.open-canvas-wrap {
  text-align: left;

  .title {
    font-size: 25px;
    color: #000;
    margin-bottom: 20px;
  }

  .end-time {
    font-size: 20px;
    color: #000;

    span {
      color: #ff0000;
    }
  }

  .end-time-block {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .block {
      margin-right: 30px;
    }
  }

  .el-button--primary {
    font-size: 16px;
  }
}
@media screen and (max-width: 500px) {
  #open-canvas-wrap {
    .end-time-block {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 30px;

      .block {
        margin: 10px 0;
      }
    }
  }
}
</style>