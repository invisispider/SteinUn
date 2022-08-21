import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import { pinia } from "@/main";
import { useStore } from "@/stores/index";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Chat",
    name: "ChatApp",
    meta: { requiresAuth: true },
    component: () => import("@/components/Chat/ChatApp.vue"),
  },
  {
    path: "/Logout",
    name: "LogoutComponent",
    component: () => import("@/components/LogoutComponent.vue"),
  },
  {
    path: "/yogacalendar",
    name: "YogaCalendar",
    component: () => import("@/components/yogacalendar/YogaCalendar.vue"),
  },
  {
    path: "/Admin",
    name: "Admin",
    meta: { requiresAuth: true },
    component: () => import("@/views/Admin.vue"),
    beforeEnter: () => {
      const store = useStore(pinia);
      if (store.uid !== import.meta.env.VITE_UID) {
        return false;
      }
    },
  },
  {
    path: "/UnThinkMe",
    name: "UnThinkMe",
    component: () => import("@/views/UnThinkMe.vue"),
  },
  {
    path: "/Next",
    name: "Next",
    component: () => import("@/views/Next.vue"),
  },
  {
    path: "/Crossword",
    name: "Crossword",
    component: () => import("@/views/Crossword.vue"),
  },
  {
    path: "/Teacher",
    name: "Teacher",
    component: () => import("@/views/Teacher.vue"),
  },
  {
    path: "/UnTimeMe",
    name: "UnTimeMe",
    component: () => import("@/views/UnTimeMe.vue"),
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
router.beforeEach((to) => {
  const store = useStore(pinia);
  if (to.meta.requiresAuth && !store.isIn) return "/";
});
export default router;
