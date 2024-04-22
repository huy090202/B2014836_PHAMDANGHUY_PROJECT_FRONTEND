import { createRouter, createWebHistory } from "vue-router";
import ClientTemplate from "@/templates/clientTemplate.vue";
import AdminTemplate from "@/templates/adminTemplate.vue";
import UserTemplate from "@/templates/userTemplate.vue";

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
        path: "/userInfo",
        component: UserTemplate,
        children: [
          {
            path: "",
            name: "userInfo",
            component: () => import("@/views/userInfoPage/index.vue"),
          },
          {
            path: "/userInfo/borrows",
            name: "borrow",
            component: () => import("@/views/userInfoPage/userInfoBorrow/index.vue"),
          },
          {
            path: "/userInfo/update",
            name: "update",
            component: () => import("@/views/userInfoPage/userInfoUpdate/index.vue"),
          }
        ],
      },
      {
        path: "/search",
        name: "search",
        component: () => import("@/views/searchPage/index.vue"),
      },
      {
        path: "/detail/:id",
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
  },
  {
    path: "/admin",
    component: AdminTemplate,
    children: [
      {
        path: "",
        name: "user",
        component: () => import("@/views/adminPage/userPage/index.vue"),
      },
      {
        path: "/admin/staffs",
        name: "staffs",
        component: () => import("@/views/adminPage/staffPage/index.vue"),
      },
      {
        path: "/admin/newStaff",
        name: "newStaff",
        component: () => import("@/views/adminPage/staffPage/newStaffs/index.vue"),
      },
      {
        path: "/admin/publishings",
        name: "publishing",
        component: () => import("@/views/adminPage/publishingPage/index.vue"),
      },
      {
        path: "/admin/newPublishing",
        name: "newPublishing",
        component: () => import("@/views/adminPage/publishingPage/newPublishings/index.vue"),
      },
      {
        path: "/admin/books",
        name: "books",
        component: () => import("@/views/adminPage/bookPage/index.vue"),
      },
      {
        path: "/admin/newBook",
        name: "newBook",
        component: () => import("@/views/adminPage/bookPage/newBooks/index.vue"),
      },
      {
        path: "/admin/borrows",
        name: "borrows",
        component: () => import("@/views/adminPage/borrowPage/index.vue"),
      },
      {
        path: "/admin/statusBorrow",
        name: "statusBorrow",
        component: () => import("@/views/adminPage/borrowPage/statusBorrow/index.vue"),
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/notFoundPage/index.vue"),

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
