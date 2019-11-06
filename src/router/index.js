import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Review from "../views/Review.vue";
// import ReviewDetail from "../views/ReviewDetail.vue";

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
    component: () => import("../views/Review.vue")
  },
  {
    path: "/review/:id",
    name: "reviewDetail",
    props: true,
    component: () => import("../views/ReviewDetail.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
