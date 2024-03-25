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
    redirect: "/landing/namaste",
    children: [
      {
        path: 'landing/namaste',
        component: () => import("@/components/Landing/Namaste.vue"),
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
        path: 'landing/Calendar',
        component: () => import("@/components/Landing/Calendar.vue"),
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
    path: "/Time",
    name: "Time",
    component: () => import("@/views/Time.vue"),
  },
  {
    path: "/Integral",
    name: "Integral",
    component: () => import("@/views/Integral.vue"),
  },
  {
    path: "/Beacon",
    name: "Beacon",
    component: () => import("@/views/Beacon.vue"),
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
    path: "/Music",
    name: "Music",
    component: () => import("@/views/Music.vue"),
  },
  {
    path: "/Videos",
    name: "Videos",
    component: () => import("@/views/Videos.vue"),
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
  scrollBehavior() {
    return { top: 0 }
    // document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
});
router.beforeEach((to) => {
  const store = useStore(pinia);
  if (to.meta.requiresAuth && !store.uid) return "/";
});
export default router;
