<template>
  <div class="paint-wrap" id="paint-wrap">
    <div class="section"></div>
    <div class="paint-box">
      <div class="drawing-board" id="drawing-board">
        <div class="left">
          <div class="title">
            <h2>Canvas</h2>
          </div>
          <div class="board-box">
            <ul class="board-list" id="board-list">
              <li
                class="square"
                v-for="(item, index) in data.boardList"
                :key="'paint' + index"
                :style="{
                  background: item.isChecked ? item.newColor : item.color,
                }"
                @click="changeBoardColor()"
              ></li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="top">
            <PaintHead :changePaintData="changePaintData"></PaintHead>
            <!-- <div class="paint-top">
              <div class="count-down" v-if="isDrawingTimeShow == 1">
                <div class="text">Counting down: {{ localTime }}</div>
              </div>
              <div class="text strong" v-if="isDrawingTimeShow == 0">Drawing is not begin</div>
              <div class="text strong" v-if="isDrawingTimeShow == 2">Drawing is ended</div>
            </div>-->
          </div>
          <!-- <div class="bottom">
            <div class="current-color">
              <div class="color-left">Current color:</div>
              <div class="color-right">
                <div
                  class="color"
                  :style="{ background: currentColor }"
                  :class="{ active: currentColor == '#ffffff' }"
                  v-show="chooseIndex == 0"
                ></div>
                <div class="color" v-show="chooseIndex == 1">
                  <i class="el-icon-brush"></i>
                </div>
              </div>
            </div>
            <div class="title">Setp 1:Choose Color</div>
            <ul class="color-box">
              <li
                :class="{ active: item.color == '#ffffff' }"
                v-for="(item, index) in ColorItems"
                :style="{ background: `${item.color}` }"
                :key="index + 'state'"
                @click="chooseColor(item, index)"
              >
                <div class="img-box" v-show="item.isCheck">
                  <img v-show="item.state == 2" src="../../assets/images/icon/white_check.png" alt />
                  <img v-show="item.state == 1" src="../../assets/images/icon/black_check.png" alt />
                </div>
              </li>
            </ul>
            <div class="more" @click.stop="openColorBoard">
              <div
                class="more-left"
                :class="{ active: addPaintList.length == 0 }"
                @click.stop="userEraser"
              >
                <span v-show="chooseIndex != 1">eraser</span>
                <img v-show="chooseIndex == 1" src="../../assets/images/icon/black_check.png" alt />
              </div>
              <div class="more-right">
                More color
                <i class="el-icon-more"></i>
              </div>
            </div>
            <div class="title step2">Setp 2:Fill Pixel</div>
            <div class="move">Move cursor to canvas & click</div>
            <div
              :class="['confirm', { active: addPaintList.length > 0 }]"
              @click="submitColor"
            >Confirm</div>
          </div>-->
        </div>
      </div>
    </div>
    <!-- 更多颜色调色板 -->
    <!-- <div>
      <Board @close="closeBoard" @send="getColor" :currentColor="currentColor" v-if="isBoardShown"></Board>
    </div>-->
    <div class="box"></div>
    <!-- 更多颜色调色板 -->
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import PaintHead from './PaintHead.vue'
const data: { boardList: any[] } = reactive({
  boardList: []
})
for (let i = 0; i < 1024; i++) {
  data.boardList.push({
    color: "#ffff00",
    isShow: false,
    index: i,
  });
}

const changeBoardColor = () => { };
//跳转后切换数据
const changePaintData = (index: number) => {
  console.log(index);
}
</script>

<style lang="less" scoped>
@import url("../../assets/css/board/paint.less");
</style>