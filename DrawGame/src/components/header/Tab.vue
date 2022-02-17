<template>
  <div class="unfold">
    <ul class="tab-list">
      <li
        v-for="(item, index) in navList"
        :key="'nav' + index"
        @click="goToPath(item)"
        :class="{ active: routeName == item.name }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const navList: Array<object> = [
      {
        name: "Home",
        path: "Home",
      },
      // {
      //   name: "Admin",
      //   path: "Admin",
      // },
      {
        name: "Gallery",
        path: "Gallery",
      },
      {
        name: "Account",
        path: "Account",
      },
      {
        name: "Claim",
        path: "Claim",
      },
      {
        name: "Pools",
        path: "Pools",
      },
      {
        name: "Help",
        path: "Help",
        http: true,
        url: "https://doc.1kpixel.io/",
      },
    ];
    return {
      navList,
    };
  },
});
</script>
<style lang="less" scoped>
.unfold {
  display: flex;
  .tab-list {
    margin-left: 100px;
    display: flex;
    justify-content: flex-start;
    margin-left: auto;
    li {
      color: #0b2341;
      padding: 10px 0 10px 30px;
      cursor: pointer;
      font-size: 15px;
      font-weight: 400;
      font-family: "Open Sans", sans-serif;
      &:hover {
        color: #ed502e;
      }
      &.active {
        color: #ed502e;
      }
    }
  }
  .setting {
    margin: 0 0 0 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    // margin-left: auto;
    .setting_icon {
      width: 30px;
      height: 30px;
      margin-left: 10px;
      cursor: pointer;
    }
    .account-message {
      display: flex;
      justify-content: space-between;
      .chain {
        // width: 160px;
        height: 34px;
        background: #ed502e;
        border: 1px solid #ed502e;
        border-radius: 20px;
        box-sizing: border-box;
        padding: 0 15px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #fff;
        font-weight: 400;
        cursor: pointer;
        font-family: "Open Sans", sans-serif;
        img {
          width: 24px;
          margin-right: 10px;
        }
        span {
          display: block;
          height: 20px;
          line-height: 20px;
        }
      }
      .balance {
        height: 34px;
        border-radius: 20px;
        box-sizing: border-box;
        padding: 0 15px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #fff;
        font-weight: bold;
        background: linear-gradient(to right, #4c249f 28%, #ec47c9 164%);
        margin-left: 10px;
      }
      .account {
        height: 34px;
        border-radius: 20px;
        box-sizing: border-box;
        padding: 0 15px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: #ed502e;
        border: 1px solid #ed502e;
        color: #fff;
        font-weight: 400;
        font-family: "Open Sans", sans-serif;
        img {
          width: 24px;
          margin-right: 10px;
          border-radius: 50%;
        }
        span {
          display: block;
          height: 20px;
          line-height: 20px;
        }
        margin-left: 10px;
      }
    }
  }
}
.fold {
  cursor: pointer;
  display: none;
  .el-icon-menu {
    font-size: 30px;
    color: #ed502e;
  }
}
</style>
