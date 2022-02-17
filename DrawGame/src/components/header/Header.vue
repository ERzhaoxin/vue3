<template>
  <div class="top-bar" id="top-bar">
    <div class="head-content">
      <div class="logo" @click="$router.push('/')">
        <img src="../../assets/images/home/logo.png" alt="" />
      </div>
      <div class="unfold">
        <Tab></Tab>
        <Setting></Setting>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Tab from "./Tab.vue";
import Setting from "./Setting.vue";
export default defineComponent({
  components: { Tab, Setting },
  setup() {},
});
</script>
<style lang="less" scoped>
.top-bar {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .head-content {
    width: 1320px;
    height: 42px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .logo {
      font-size: 26px;
      margin: 0;
      padding: 0;
      line-height: 1;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: none;
      cursor: pointer;
      font-family: "Raleway", sans-serif;
      .red {
        color: red;
      }
      img {
        width: 100px;
      }
    }
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
  }
}
.btn {
  width: 145px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  background: #ed502e;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  font-weight: 400;
}

.shade {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  .shade-content {
    width: 80%;
    height: 100%;
    position: absolute;
    right: 0;
    overflow: auto;
    background: #ffffff;
    padding: 15px;
    box-sizing: border-box;
    .close {
      width: 100%;
      height: 30px;
      color: #333;
      // line-height: 60px;
      font-size: 26px;
      text-align: right;
      margin-top: 10px;
      // cursor: pointer;
    }
    .tab-list {
      li {
        text-align: left;
        color: #0b2341;
        padding: 15px 20px 15px 10px;
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
      margin: 0 0 0 10px;
      box-sizing: border-box;
      // margin-left: auto;
      .btn {
        margin-top: 20px;
        text-align: left;
        width: 100%;
        color: #fff;
        border-radius: 5px;
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
        padding: 0 20px;
        background-color: #ed502e;
      }
      .setting_icon {
        width: 30px;
        height: 30px;
        margin-left: 10px;
        cursor: pointer;
      }
      .account-message {
        .chain {
          margin-top: 20px;
          width: 160px;
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
          width: 160px;
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
        }
        .account {
          margin-top: 20px;
          width: 160px;
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
        }
      }
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100vw);
}
@media screen and (max-width: 1000px) {
  #top-bar {
    .unfold {
      display: none;
    }
    .fold {
      display: block;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .head-content {
      padding: 0 20px;
    }
    .header-scrolled {
      box-shadow: 0px 2px 1px 0px #ccc;
    }
  }
}
</style>

