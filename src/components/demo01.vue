<template>
  <div>
    <div class="scroll_animate">
      <div>
        <img class="wrapper1_img" src="../assets/img/scence1/bgd1.png" />
        <img class="wrapper1_img" src="../assets/img/scence1/bgd2.png" />
        <img class="wrapper1_img" src="../assets/img/scence1/bgd3.png" />
        <img
          class="wrapper1_img_fadein1 animated fadeInRight"
          src="../assets/img/scence1/fadein1.png"
        />
        <img
          class="wrapper1_img_fadein2 animatesd fadeInLeft"
          src="../assets/img/scence1/left1.png"
        />
        <img
          class="wrapper1_img_fadein3 animated fadeInLeft"
          src="../assets/img/scence1/left2.png"
        />
      </div>
    </div>
    <div class="scroll_animate">
      <div>
        <!-- <img
          class="wrapper1_img_fadein1"
          src="../assets/img/scence3/bgd1.png"
        />
        <img
          class="wrapper1_img_fadein2 fadeInLeft"
          src="../assets/img/scence3/bgd2.png"
        /> -->
        <!--<img class="wrapper1_img_fadein2"	src='../assets/img/scence3/bgd3.png'/>-->
        <!--<img class="wrapper1_img_fadein2"	src='../assets/img/scence3/bgd4.png'/>-->
      </div>
    </div>

    <div class="scroll_animate">
      <div>
        <!-- <img
          class="wrapper1_img_fadein1"
          src="../assets/img/scence3/bgd1.png"
        />
        <img
          class="wrapper1_img_fadein2 fadeInLeft"
          src="../assets/img/scence3/bgd2.png"
        /> -->
        <!--<img class="wrapper1_img_fadein2"	src='../assets/img/scence3/bgd3.png'/>-->
        <!--<img class="wrapper1_img_fadein2"	src='../assets/img/scence3/bgd4.png'/>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, onMounted } from "vue";
import _ from "lodash";

export default defineComponent({
  setup() {
    // 滚动条位置
    const ScollPostion = () => {
      let t: number = 0,
        l: number = 0,
        w: number = 0,
        h: number = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        t = document.documentElement.scrollTop;
        l = document.documentElement.scrollLeft;
        w = document.documentElement.scrollWidth;
        h = document.documentElement.scrollHeight;
      } else if (document.body) {
        t = document.body.scrollTop;
        l = document.body.scrollLeft;
        w = document.body.scrollWidth;
        h = document.body.scrollHeight;
      }
      return {
        top: t,
        left: l,
        width: w,
        height: h,
      };
    };

    //  获取浏览器视口高度
    const getClientHeight = () => {
      let clientHeight = 0;
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight =
          document.body.clientHeight < document.documentElement.clientHeight
            ? document.body.clientHeight
            : document.documentElement.clientHeight;
      } else {
        clientHeight =
          document.body.clientHeight > document.documentElement.clientHeight
            ? document.body.clientHeight
            : document.documentElement.clientHeight;
      }
      return clientHeight;
    };

    let distance: Array<[number, number]> = [];
    let allEl: any;
    const scrollAnimate = _.debounce(() => {
      const windowMinHeigth = ScollPostion().top;
      const windowMaxHeigth = ScollPostion().top + getClientHeight();

      distance.forEach((item, index) => {
        if (
          (item[0] - 1 <= windowMinHeigth && windowMinHeigth <= item[1] - 1) ||
          (item[0] - 1 <= windowMaxHeigth && windowMaxHeigth <= item[1] - 1) ||
          (item[0] - 1 >= windowMinHeigth && windowMaxHeigth >= item[1] - 1)
        ) {
          allEl[index].classList.add("bgdC");
        } else {
          allEl[index].classList.remove("bgdC");
        }
      });
    }, 250);

    onMounted(() => {
      //  监听滚动事件

      allEl = document.getElementsByClassName("scroll_animate");

      console.log("allEl", allEl);
      const list = new Array(allEl.length).fill("");
      distance = list.map((item, index) => {
        return [
          allEl[index].offsetTop,
          allEl[index].offsetTop + allEl[index].offsetHeight,
        ];
      });
      window.addEventListener("scroll", scrollAnimate);
      window.onload = scrollAnimate;
      allEl[0].classList.add("bgdC");
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", scrollAnimate);
    });
  },
});
</script>

<style>
* {
  user-select: none;
}

/*.bgd{
    background-image: url("./img/scence1/bgd.png");
}*/
div {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-size: 28px;
  font-weight: bold;
}

img {
  display: block;
}
.fix {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  background-color: aqua;
}

.wrapper1_img {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.wrapper1_img:nth-child(1) {
  opacity: 1;
}
.wrapper1_img:nth-child(2) {
  opacity: 1;
}
.wrapper1_img:nth-child(3) {
  opacity: 0.5;
}
.wrapper1_img_fadein1 {
  position: absolute;
  right: 0;
  top: 0;
}
.wrapper1_img_fadein2 {
  position: absolute;
  left: -10px;
  bottom: -120px;
}

.wrapper1_img_fadein3 {
  position: absolute;
  left: -10px;
  top: 0;
  opacity: 1;
}

.scroll_animate > div {
  display: none;
  position: relative;
}
.bgdC > div {
  width: 100%;
  height: 100%;
  color: darkcyan;
  transition: color 10s;
  font-size: 28px;
  font-weight: bold;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}

.bgdC div {
  display: block;
}
</style>
