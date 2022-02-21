<template>
  <div class="footer" id="footer">
    <div class="bgc" id="bgc"></div>
    <div class="area" id="area">
      <div class="footer-info">
        <h3>
          <font color="red">1k</font>Pixel Labs
        </h3>
        <!-- <h3><img src="../../assets/images/home/logo.png" alt=""></h3> -->
        <div class="social-links">
          <a href="https://twitter.com/1kPixel" class="twitter" target="_blank">
            <img src="../assets/images/home/Twitter.png" />
          </a>
          <a href="https://t.me/DAO_1kPixel" class="reddit" target="_blank">
            <img src="../assets/images/home/telegram.png" />
          </a>
        </div>
      </div>

      <div class="footer-links contras-us">
        <div class="links-title">Contact Us</div>
        <p>
          Technique:
          <a href="#">support@1kPixel.io</a>
        </p>
        <p>
          Business:
          <a href="#">bd@1kPixel.io</a>
        </p>
        <p>&copy; Copyright 1kPixel Labs. All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.area {
  // width: 1320px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
}
.footer {
  position: relative;
  width: 100%;
  height: 280px;
  background-color: #071527;
  display: flex;
  align-items: center;
  justify-content: center;

  .bgc {
    background: rgb(7, 21, 39);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .footer-info {
    width: 415px;
    height: 150px;
    background-color: #05101e;
    border-top: 4px solid #ed502e;
    text-align: center;
    padding: 30px 20px;
    h3 {
      font-size: 24px;
      margin: 0 0 20px 0;
      padding: 2px 0 2px 0;
      line-height: 1;
      font-weight: 700;
      color: #fff;
      img {
        width: 100px;
      }
    }
    p {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 0;
      font-family: "Raleway", sans-serif;
    }
    .social-links {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        width: 36px;
        height: 36px;
        background-color: #0a1e38;
        align-items: center;
        display: flex;
        float: left;
        margin-right: 10px;
        justify-content: center;
        border-radius: 5px;
        img {
          width: 18px;
          height: 18px;
        }
        &:hover {
          background-color: #ed502e;
        }
      }
    }
  }

  .footer-links {
    text-align: left;
    ul {
      list-style: none;
      .cursor {
        cursor: pointer;
      }
      li {
        padding: 10px 0;
        display: flex;
        font-size: 14px;
        i {
          padding-right: 2px;
          color: #ef6445;
          font-size: 12px;
        }
        a {
          color: #fff;
          transition: 0.3s;
          display: inline-block;
          line-height: 1;
          &:hover {
            color: #ef6445;
          }
        }
        &:first-child {
          padding-top: 0;
        }
      }
    }
    p {
      color: #fff;
      padding-bottom: 13px;
      font-size: 14px;
      a {
        color: #ed432a;
      }
    }
    .links-title {
      font-size: 16px;
      color: #fff;
      margin-bottom: 20px;
    }
  }
  .contras-us {
    margin-left: 100px;
  }
}
@media screen and (max-width: 800px) {
  #footer {
    height: 380px;
    .area {
      width: 415px;
      flex-wrap: wrap;
      justify-content: flex-start;
      .contras-us {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }
}
@media screen and (max-width: 400px) {
  #footer {
    height: 340px;
    .area {
      width: 100%;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: 0 15px;
      .footer-info {
        width: 100%;
      }
      .contras-us {
        margin-left: 0;
        margin-top: 20px;
      }
    }
    .footer-info {
      padding: 15px 20px;
      height: 140px;
    }
  }
}
</style>
