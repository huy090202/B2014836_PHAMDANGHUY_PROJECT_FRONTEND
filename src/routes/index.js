import { createRouter, createWebHistory } from "vue-router";
import ClientTemplate from "@/templates/clientTemplate.vue";
import AdminTemplate from "@/templates/adminTemplate.vue";
import UserTemplate from "@/templates/userTemplate.vue";
import { adminStore } from "@/store/adminStore";
import { userStore } from "@/store/userStore";

const requireAdmin = (to, from, next) => {
  const isAdminStore = adminStore();
  if (isAdminStore.isLoggedIn) {
    next();
  } else {
    const dataAdmin = localStorage.getItem("admin");
    const dataToken = localStorage.getItem("accessToken");

    if (dataAdmin && dataAdmin !== undefined && dataToken && dataToken !== undefined) {
      isAdminStore.setLocal(JSON.parse(dataAdmin), dataToken);
      next();
    } else {
      next({ name: "logInAdmin", params: {} });
    }
  }
};


const requireUser = (to, from, next) => {
  const isUserStore = userStore();
  if (isUserStore.isLoggedIn) {
    next();
  } else {
    const dataUser = localStorage.getItem("user");
    const dataTokenUser = localStorage.getItem("accessToken");

    console.log(dataUser, dataTokenUser);


    if (dataUser && dataUser !== undefined && dataTokenUser && dataTokenUser !== undefined) {
      isUserStore.setLocal(JSON.parse(dataUser), dataTokenUser);
      next();
    } else {
      next({ name: "logInUser", params: {} });
    }
  }
};

const routes = [
  {
    path: "/",
    component: ClientTemplate,
    beforeEnter: requireUser,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/homePage/index.vue"),
      },
      {
        path: "/userInfo",
        component: UserTemplate,
        beforeEnter: requireUser,
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
    path: "/logIn/admin",
    name: "logInAdmin",
    component: () => import("@/views/auth/logInPage/index.vue"),
  },
  {
    path: "/logIn",
    name: "logInUser",
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
    beforeEnter: requireAdmin,
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
        path: "/admin/updateBorrow",
        name: "updateBorrow",
        component: () => import("@/views/adminPage/borrowPage/updateBorrow/index.vue"),
      },
      {
        path: "/admin/updateBook/:id",
        name: "updateBook",
        component: () => import("@/views/adminPage/bookPage/updateBook/index.vue"),
      },
      {
        path: "/admin/updateStaff/:id",
        name: "updateStaff",
        component: () => import("@/views/adminPage/staffPage/updateStaff/index.vue"),
      },
      {
        path: "/admin/updatePublishing/:id",
        name: "updatePublishing",
        component: () => import("@/views/adminPage/publishingPage/updatePublishing/index.vue"),
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
