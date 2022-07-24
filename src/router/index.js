import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogView from "../views/BlogView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/blogs",
      name: "Blogs",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AllBlogsView.vue"),
    },
    {
      path: "/blog/:id",
      name: "BlogView",
      component: BlogView,
    },
    {
      path: "/edit/:id",
      name: "EditBlog",
      component: () => import("../views/EditView.vue"),
    },
    {
      path: "/highlight",
      name: "Highlights",
      component: () => import("../views/HighlightView.vue"),
    },
    {
      path: "/addpost",
      name: "AddPost",
      component: () => import("../views/CreatePostView.vue"),
    },
    {
      path: "/high",
      name: "Highlights",
      component: () => import("../views/HighlightTest.vue"),
    },
  ],
});

export default router;
