import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import { pinia } from "@/main";
import { useStore } from "@/stores/index";
import Greeting from "@/components/Landing/Greeting.vue";
import Website from '@/components/Landing/Website.vue';
import SteinunLimited from '@/components/Landing/SteinunLimited.vue';
import IntegralTheory from '@/components/Landing/IntegralTheory.vue';
import UnThinkMe from "@/components/Landing/UnThinkMe.vue";
import SteinTime from '@/components/Landing/SteinTime.vue';
import Beacon from '@/components/Landing/Beacon.vue';
import Developer from '@/components/Landing/Developer.vue';
import Artist from '@/components/Landing/Artist.vue';
import Technomancy from '@/components/Landing/Technomancy.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/landing/greeting",
    name: "Home",
    component: Home,
    children: [
      {
        path: 'landing/greeting',
        component: Greeting,
      },
      {
        path: 'landing/website',
        component: Website,
      },
      {
        path: 'landing/steinunlimited',
        component: SteinunLimited,
      },
      {
        path: 'landing/integraltheory',
        component: IntegralTheory
      },
      {
        path: 'landing/unthinkme',
        component: UnThinkMe,
      },
      {
        path: 'landing/steintime',
        component: SteinTime,
      },
      {
        path: 'landing/beacon',
        component: Beacon,
      },
      {
        path: 'landing/developer',
        component: Developer,
      },
      {
        path: 'landing/artist',
        component: Artist,
      },
      {
        path: 'landing/technomancy',
        component: Technomancy,
      }

    ]
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("@/components/Login.vue"),
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
    path: "/YogaCalendar",
    name: "YogaCalendar",
    component: () => import("@/components/YogaCalendar.vue"),
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
    path: "/Unwolfme",
    name: "Unwolfme",
    component: () => import("@/components/Unwolfme.vue"),
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
  if (to.meta.requiresAuth && !store.uid) return "/";
});
export default router;
