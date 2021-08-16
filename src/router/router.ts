import { createRouter, createWebHashHistory } from "vue-router";
import vue3 from "./vue3";

const Home = () => import("../components/index.vue");
const demo01 = () => import("../components/demo01.vue");

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/demo01",
    component: demo01,
    meta: {
      title: "动画",
    },
  },
  vue3,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    (document as any).title = to.meta.title;
  }
  next();
});

export default router;
