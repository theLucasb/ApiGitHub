import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Lucas from "../views/Lucas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/Lucas",
    name: "Lucas",
    component: Lucas,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
