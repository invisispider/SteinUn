import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import { pinia } from "@/main";
import { useStore } from "@/stores/index";
// import Greeting from "@/components/Landing/Greeting.vue";
// import Website from '@/components/Landing/Website.vue';
// import SteinunLimited from '@/components/Landing/SteinunLimited.vue';
// import IntegralTheory from '@/components/Landing/IntegralTheory.vue';
// import UnThinkMe from "@/components/Landing/UnThinkMe.vue";
// import SteinTime from '@/components/Landing/SteinTime.vue';
// import Beacon from '@/components/Landing/Beacon.vue';
// import Developer from '@/components/Landing/Developer.vue';
// import Artist from '@/components/Landing/Artist.vue';
// import Technomancy from '@/components/Landing/Technomancy.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/landing/greeting",
    name: "Home",
    component: Home,
    children: [
      {
        path: 'landing/greeting',
        component: () => import("@/components/Landing/Greeting.vue"),
      },
      {
        path: 'landing/website',
        component: () => import("@/components/Landing/Website.vue"),
      },
      {
        path: 'landing/steinunlimited',
        component: () => import("@/components/Landing/SteinunLimited.vue"),
      },
      {
        path: 'landing/integraltheory',
        component: () => import("@/components/Landing/IntegralTheory.vue")
      },
      {
        path: 'landing/unthinkme',
        component: () => import("@/components/Landing/UnThinkMe.vue"),
      },
      {
        path: 'landing/steintime',
        component: () => import("@/components/Landing/SteinTime.vue"),
      },
      {
        path: 'landing/beacon',
        component: () => import("@/components/Landing/Beacon.vue"),
      },
      {
        path: 'landing/developer',
        component: () => import("@/components/Landing/Developer.vue"),
      },
      {
        path: 'landing/artist',
        component: () => import("@/components/Landing/Artist.vue"),
      },
      {
        path: 'landing/technomancy',
        component: () => import("@/components/Landing/Technomancy.vue"),
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
  // {
  //   path: "/YogaCalendar",
  //   name: "YogaCalendar",
  //   component: () => import("@/components/YogaCalendar.vue"),
  // },
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
    path: "/YouTube",
    name: "YouTube",
    component: () => import("@/views/YouTube.vue"),
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
    path: "/UnThinkMe",
    name: "UnThinkMe",
    component: () => import("@/views/UnThinkMe.vue"),
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
