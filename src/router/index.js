import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Review from "../views/Review.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/review",
    name: "review",
    component: Review
  }
];

const router = new VueRouter({
  routes
});

export default router;
