import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomeView",
    component: ()=> import("@/views/HomeView.vue"),
    // beforeEnter: () => {
    //   const useStore = () => import("@/stores/index.ts");
    //   const store = useStore(pinia);
    // },
  },
  // {
  //   path: "/Talk",
  //   name: "TalkView",
  //   component: () => import("@/views/TalkView.vue"),
  // },
  // {
  //   path: "/user/:user",
  //   name: "UserView"
  // },
  // {
    //   path: "/assets/avatar/:avatar",
    //   name: "Avatar",
    //   component: ChatWindow,
    // },
  {
    path: "/UnThinkMe",
    name: "UnThinkMe",
    component: () => import("@/views/UnThinkMe.vue"),
  },
  {
    path: "/Next",
    name: "NextView",
    component: () => import("@/views/NextView.vue"),
  },
  {
    path: "/Crossword",
    name: "CrosswordView",
    component: () => import("@/views/CrosswordView.vue"),
    // beforeEnter: () => {
    //   const useCrossword = () => import("@/stores/crosswordvideogame.ts");
    //   const store = useCrossword(pinia);
    // },
  },
  {
    path: "/Teacher",
    name: "TeacherView",
    component: () => import("@/views/TeacherView.vue"),
  },
  {
    path: "/UnTimeMe",
    name: "UnTimeMe",
    component: () => import("@/views/UnTimeMe.vue"),
    // beforeEnter: () => {
    //   const useTime = () => import("@/stores/time.ts");
    //   const store = useTime(pinia);
    // },
  },
  {
    path: "/UnReadMe",
    name: "UnReadMe",
    component: () => import("@/views/UnReadMe.vue"),
  },
  {
    path: "/PrivacyPolicy",
    name: "PrivacyPolicy",
    component: () => import("@/views/PrivacyPolicy.vue"),
  },
  {
    path: "/TermsOfService",
    name: "TermsOfService",
    component: () => import("@/views/TermsOfService.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "FourOhFour",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
