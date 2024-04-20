import ClientTemplate from "@/templates/clientTemplate.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: ClientTemplate,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/homePage/index.vue"),
      },
      {
        path: ":id",
        name: "detail",
        component: () => import("@/views/detailPage/index.vue"),
      }
    ],
  },
  {
    path: "/logIn",
    name: "logIn",
    component: () => import("@/views/auth/logInPage/index.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/auth/registerPage/index.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  next();
});

export default router;
