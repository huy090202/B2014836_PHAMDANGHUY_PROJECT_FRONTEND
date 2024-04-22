<script></script>

<template>
    <div class="header-admin sticky-top">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-between align-items-center">
                    <div>
                        <router-link to="/">
                        <img
                            class="header-admin-logo"
                            src="@/assets/LogoWeb.png"
                            alt="Logo Website"
                        />
                        </router-link>
                    </div>

                    <div class="fs-5 d-flex align-items-center gap-5">
                        <div class="text-uppercase fw-bold">
                            <span>Hello, Admin</span>
                        </div>
                        <div class="px-4">
                            <router-link class="text-black" to="/logIn">
                                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/assets/styles/headerAdmin.scss");
</style>