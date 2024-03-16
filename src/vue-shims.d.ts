// declare module "*.vue" {
//     import Vue from "vue";
//     export default Vue;
// }
// import VueRouter, { Route } from 'vue-router'

/* eslint-disable */
// declare module '*.vue' {
//   import type { DefineComponent } from 'vue'
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }

// declare module 'vue/types/vue' {
//   interface Vue {
//     $router: VueRouter
//   }
// }
//
declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
