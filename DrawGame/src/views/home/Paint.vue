<template>
  <div class="counts animationAbout" id="counts">
    <div class="section-title" id="section-title">
      <h2>Current</h2>
      <p>Choose a painting</p>
    </div>
    <div class="www">
      <div class="no-gutters area2">
        <div class="noData" v-if="momentList.length == 0" id="noData">
          <div class="icon">
            <img :src="loadImg" />
          </div>
        </div>
        <div class="record" v-else id="work-record">
          <ul>
            <li
              class="img-list"
              v-for="(item, index) in momentList"
              :key="index + 'test'"
            >
              <div class="img-box" id="img-box">
                <Board
                  :boardList="item.boardList"
                  :states="item.states"
                ></Board>
              </div>
              <p>
                <strong>ArtID:</strong>
                {{ item.artId }}
                <br />
                <strong>Pixels:</strong>
                {{ item.pixLength }}
                <br />
                <span v-show="item.states != 2">
                  <strong>MomentID:</strong>
                  {{ item.id }}
                </span>
                <span v-show="item.states == 2">
                  <em v-if="!item.price"> <strong>Status:</strong>Ended </em>
                  <em v-else>
                    <strong>Price:</strong>
                    {{ item.price }}
                    <i>WETH</i>
                  </em>
                </span>
              </p>
              <div
                :class="isShowPC ? 'join-pc' : 'join-phone'"
                v-show="item.states != 2"
              >
                Join us
              </div>
              <div
                :class="[
                  isShowPC ? 'auction-pc' : 'auction-phone',
                  item.auctionState == 2 ? 'enjoy' : 'auction',
                ]"
                v-show="item.states == 2"
              >
                {{ item.auctionState == 2 ? "Enjoy" : "Auction" }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const loadImg = "/src/assets/images/home/nft01.png";
const isShowPC = ref(false);
const momentList = [];
</script>
<style lang="less" scoped>
@import url("../../assets/css/home/Home.less");
</style>