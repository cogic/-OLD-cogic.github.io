import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./assets/js/router";
import "../node_modules/mint-ui/lib/style.css";
import Mint from "mint-ui";
Vue.use(Mint);
Vue.use(VueRouter);

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
