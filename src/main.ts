import Vue from "vue";
import App from "./App.vue";
import { routes } from "./router/routes";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import './assets/tailwind.css'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false;


const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
