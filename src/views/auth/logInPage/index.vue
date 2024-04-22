<script></script>

<template>
    <div class="auth text-light">
        <div class="container">
            <router-link class="text-decoration-none text-light fs-2" to="/">
                <i class="fa-solid fa-arrow-left-long"></i>
            </router-link>

            <div class="logIn-form rounded-3 p-4">
                <div class="fs-3 text-uppercase text-center fw-bold">Đăng nhập</div>
                <div class="fs-5 text-center">Chào mừng bạn trở lại!</div>

                <div class="row my-5">
                    <div class="col-12">
                        <label for="account">Tài khoản: </label>
                        <input type="text" id="account" class="form-control text-light p-3 mt-2" placeholder="Nhập vào số điện thoại của bạn" />
                    </div>

                    <div class="col-12 my-4">
                        <label for="password fs-5">Mật khẩu: </label>
                        <div class="position-relative">
                            <input type="password" id="password" class="form-control text-light p-3 mt-2" placeholder="Nhập vào mật khẩu của bạn" />
                            <i class="fa-regular fa-eye position-absolute top-50 end-0 translate-middle-y me-3"></i>
                        </div>
                        <span class="d-flex fs-6 mt-2">Quên mật khẩu ?</span>
                    </div>

                    <div class="col-12 text-center">
                        <button type="button" class="logIn-form-btn w-75 fw-bold border border-0 rounded-4 p-3">Đăng nhập</button>
                    </div>

                    <div class="col-12 text-center not-account">
                        <span class="fs-6">Bạn chưa có tài khoản? 
                            <router-link to="/register" class="text-decoration-none text-light">Đăng ký ngay</router-link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url("@/views/auth/style.scss");
</style>