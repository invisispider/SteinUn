import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
export { pinia };
router.isReady().then(() => {
  app.mount("#app");
});

// import { createApp, watch } from "vue"
// import App from "@/App.vue"
// import router from "@/router"
// import { createPinia } from "pinia"
// const pinia = createPinia()
// const app = createApp(App)
// app.use(pinia)
// watch(
//   pinia.state,
//   (state) => {
//     localStorage.setItem("state", JSON.stringify(state))
//   },
//   { deep: true }
// )
// if (localStorage.getItem("state")) {
//   pinia.state.value = JSON.parse(localStorage.getItem("state"))
// }
// app.use(router)
// router.isReady().then(() => {
//   app.mount("#app")
// })
// export { pinia }
