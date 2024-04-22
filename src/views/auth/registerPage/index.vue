<script></script>

<template>
    <div class="auth text-light">
        <div class="container">
            <router-link class="text-decoration-none text-light fs-2" to="/logIn">
                <i class="fa-solid fa-arrow-left-long"></i>
            </router-link>

            <div class="logIn-form rounded-3 p-4">
                <div class="fs-3 text-uppercase text-center fw-bold">Đăng ký</div>
                <div class="fs-5 text-center">Tạo tài khoản mới để sử dụng</div>

                <div class="row my-5">
                    <div class="col-6">
                        <label for="last-name">Họ lót: </label>
                        <input type="text" id="last-name" class="form-control text-light p-3 mt-2" placeholder="Nhập vào họ lót của bạn" />
                    </div>

                    <div class="col-6">
                        <label for="first-name">Tên: </label>
                        <input type="text" id="first-name" class="form-control text-light p-3 mt-2" placeholder="Nhập vào tên của bạn" />
                    </div>

                    <div class="col-12 my-2">
                        <label for="account">Tài khoản: </label>
                        <input type="text" id="account" class="form-control text-light p-3 mt-2" placeholder="Nhập vào số điện thoại của bạn" />
                    </div>

                    <div class="col-12">
                        <label for="password fs-5">Mật khẩu: </label>
                        <div class="position-relative">
                            <input type="password" id="password" class="form-control text-light p-3 mt-2" placeholder="Nhập vào mật khẩu của bạn" />
                            <i class="fa-regular fa-eye position-absolute top-50 end-0 translate-middle-y me-3"></i>
                        </div>
                    </div>

                    <div class="col-12 my-2">
                        <label for="confirm-password fs-5">Xác nhận mật khẩu: </label>
                        <div class="position-relative">
                            <input type="password" id="confirm-password" class="form-control text-light p-3 mt-2" placeholder="Xác nhận mật khẩu của bạn" />
                            <i class="fa-regular fa-eye position-absolute top-50 end-0 translate-middle-y me-3"></i>
                        </div>
                        
                    </div>

                    <div class="col-12 text-center mb-4">
                        <button type="button" class="logIn-form-btn w-75 fw-bold border border-0 rounded-4 p-3">Đăng ký</button>
                    </div>

                    <div class="col-12 text-center yes-account">
                        <span class="fs-6">Bạn đã có tài khoản? 
                            <router-link to="/logIn" class="text-decoration-none text-light">Đăng nhập</router-link>
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