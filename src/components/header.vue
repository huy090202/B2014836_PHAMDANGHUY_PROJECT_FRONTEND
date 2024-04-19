<script>
import "bootstrap/dist/js/bootstrap.bundle.min.js";
</script>

<template>
  <header class="sticky-top">
    <div
      class="container d-flex justify-content-between align-items-center h-100"
    >
      <div>
        <a class="navbar-brand" href="#">
          <img
            class="header-logo"
            src="../assets/LogoWeb.png"
            alt="Logo Website"
          />
        </a>
      </div>

      <div class="form-group d-flex w-50 position-relative">
        <input
          type="text"
          class="form-control px-5 py-2 rounded-pill"
          placeholder="Tìm kiếm..."
        />
        <i
          class="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y p-3"
        ></i>
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
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Welcome</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">...</div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import url("@/assets/styles/header.scss");
</style> 
