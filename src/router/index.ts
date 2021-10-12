import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import("../views/Home/index.vue"),
  },
  {
    path: "/search",
    name: "Search",
    meta: {
      title: "搜索",
      keepAlive: true
    },
    component: () => import("../views/Search/index.vue"),
  },
  {
    path: "/user",
    name: "User",
    meta: {
      title: "用户",
      keepAlive: true
    },
    component: () => import("../views/User/index.vue"),
  },
  {
    path: "/setup",
    name: "Setup",
    meta: {
      title: "设置",
      keepAlive: true
    },
    component: () => import("../views/Setup/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true
    },
    component: () => import("../views/Login/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
