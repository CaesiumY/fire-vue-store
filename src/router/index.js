import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Review from "../views/Review.vue";
import ReviewDetail from "../views/ReviewDetail.vue";

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
  },
  {
    path: "/review/:id",
    name: "reviewDetail",
    props: true,
    component: ReviewDetail
  }
];

const router = new VueRouter({
  routes
});

export default router;
