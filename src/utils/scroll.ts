import _ from "lodash";

const ScollPostion = () => {
  let t: number=0, l: number=0, w: number=0, h: number=0;
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

const allEl:any  = document.getElementsByClassName("scroll_animate");
const list= new Array(allEl.length).fill("");
const distance = list.map((item, index) => {
  return [
    allEl[index].offsetTop,
    allEl[index].offsetTop + allEl[index].offsetHeight,
  ];
});
window.addEventListener("scroll", scrollAnimate);
window.onload = scrollAnimate;

export default { ScollPostion, getClientHeight, scrollAnimate };
