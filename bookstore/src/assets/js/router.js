import VueRouter from "vue-router";
import index from "../../components/index.vue";
import home from "../../components/home.vue";
import city from "../../components/city.vue";
import cart from "../../components/cart.vue";
import my from "../../components/my.vue";
import login from "../../components/login.vue";
import details from "../../components/details.vue";
import more from "../../components/more.vue";

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: index,
      redirect: "/home",
      children: [
        {
          path: "/home",
          component: home
        },
        {
          path: "/cart",
          component: cart
        },
        {
          path: "/my",
          component: my
        },
        {
          path: "/more",
          component: more,
          redirect: "/login"
        }
      ]
    },
    {
      path: "/city",
      component: city
    },
    {
      path: "/login",
      component: login
    },
    {
      path: "/details",
      component: details
    }
  ]
});
