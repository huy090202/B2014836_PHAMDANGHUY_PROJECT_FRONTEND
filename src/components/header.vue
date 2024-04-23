<script>
  import "bootstrap/dist/js/bootstrap.bundle.min.js";
  import { onMounted, ref, computed } from "vue";
  import router from "@/routes";
  import { userStore } from "@/store/userStore";

  export default {
    setup () {
      const isUserStore = userStore();
      const search = ref("");

      const handleSearch = () => {
        if (router) {
          router.push(`/search?MaSach=${search.value}`);
        }
      }

      onMounted(async () => {
        
        
      })

      const validate = computed(() => isUserStore.user !== null && isUserStore.user !== undefined && isUserStore.user);
      console.log(validate.value);

      const handleScrollTop = async () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

      const handleLoggout = async () => {
          try {
              localStorage.removeItem('user');
              localStorage.removeItem('accessToken');
              isUserStore.logOut();
              router.push("/logIn");
          } catch (error) {
              console.log(error);
          }
      
      }

      return {
        search,
        handleSearch,
        validate,
        handleScrollTop,
        handleLoggout
      }
    }
  }
</script>

<template>
  <header class="sticky-top">
    <div
      class="container d-flex justify-content-between align-items-center h-100"
    >
      <div>
        <router-link class="navbar-brand" to="/">
          <img
            class="header-logo"
            src="@/assets/LogoWeb.png"
            alt="Logo Website"
          />
        </router-link>
      </div>

      <div class="form-group d-flex w-50 position-relative">
        <form method="get" @submit.prevent="handleSearch" class="w-100">
          <input
            type="text"
            class="form-control px-5 py-2 rounded-pill"
            placeholder="Tìm kiếm..."
            v-model="search"
          />
          <button class="search-btn border border-0 position-absolute top-50 start-0 translate-middle-y p-3">
            <i
              class="fa-solid fa-magnifying-glass"
            ></i>
          </button>
        </form>
      </div>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="#banners">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#books">Books</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#abouts">About Us</a>
        </li>
      </ul>

      <button
        class="bg-transparent p-3 fs-4 border-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header border-bottom py-4">
        <div class="w-100 fw-bold text-uppercase fs-5">
          Đăng nhập để tiếp tục! 
        </div>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body px-0 pt-0">
        <ul class="list-group list-group-flush">
          <li class="list-group-item fw-bold">
            <router-link :to="validate ? '/userInfo' : '/logIn'" class="d-flex align-items-center gap-4 text-decoration-none text-black">
              <div class="account-icon d-flex align-items-center justify-content-center">
                <i class="fa-regular fa-address-book"></i>
              </div>
              <span>Thông tin tài khoản</span>
            </router-link>
          </li>

          <li class="list-group-item fw-bold" @click="handleLoggout">
            <router-link to="" class="d-flex align-items-center gap-4 text-decoration-none text-black">
              <div class="account-icon d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </div>
              Đăng xuất
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import url("@/assets/styles/header.scss");
</style> 
