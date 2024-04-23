<script>
    import { ref, onMounted } from 'vue';
    import router from '@/routes';
    import { userStore } from '@/store/userStore';
    import { adminStore } from '@/store/adminStore';

    export default {
        setup() {
            const isUserStore = userStore();
            const isAdminStore = adminStore();

            const logInForm = ref({
                DienThoai: '',
                Password: ''
            });

            const isUser = ref(window.location.href.indexOf('admin') === -1)
            console.log(isUser.value);

            onMounted(() => {
                document.title = 'Đăng nhập';
            });

            const logInUser = async (data) => {
                try {
                    await isUserStore.logInUserStore(data);
                    if(isUserStore.isLoggedIn && isUserStore.user) {
                        localStorage.setItem('user', JSON.stringify(isUserStore.user.data));
                        localStorage.setItem('accessToken', isUserStore.accessToken);
                        alert('Đăng nhập thành công');
                        setTimeout(() => {
                            router.push('/');
                        }, 1000);
                    } else {
                        alert('Đăng nhập thất bại');
                    }
                } catch (error) {
                    console.log('Đăng nhập thất bại', error);
                }                
            }

            const logInAdmin = async (data) => {
                try {
                    await isAdminStore.logInAdminStore(data);
                    if(isAdminStore.isLoggedIn && isAdminStore.admin) {
                        localStorage.setItem('admin', JSON.stringify(isAdminStore.admin.data));
                        localStorage.setItem('accessToken', isAdminStore.accessToken);
                        alert('Đăng nhập thành công');
                        setTimeout(() => {
                            router.push('/admin');
                        }, 1000);
                    } else {
                        alert('Đăng nhập thất bại');
                    }
                } catch (error) {
                    console.log('Đăng nhập thất bại', error);
                }                
            }

            const handleLogin = async (e) => {
                e.preventDefault();

                const regexSDT = /^[(]?[0-9]{3}[)]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

                if (!regexSDT.test(logInForm.value.DienThoai)) {
                    return alert('Số điện thoại không hợp lệ');
                }

                if(isUser.value) {
                    await logInUser(logInForm.value);
                } else if (!isUser.value) {
                    await logInAdmin(logInForm.value);
                }
            }

            const isShow = ref(false);

            const handleToggleShow = () => {
                isShow.value = !isShow.value;
            }

            return {
                logInForm,
                handleLogin,
                isShow,
                handleToggleShow
            }
        }
    }
</script>

<template>
    <div class="auth text-light">
        <div class="container">
            <router-link class="text-decoration-none text-light fs-2" to="/">
                <i class="fa-solid fa-arrow-left-long"></i>
            </router-link>

            <form @submit="handleLogin" class="logIn-form rounded-3 p-4">
                <div class="fs-3 text-uppercase text-center fw-bold">Đăng nhập</div>
                <div class="fs-5 text-center">Chào mừng bạn trở lại!</div>

                <div class="row my-5">
                    <div class="col-12">
                        <label for="account">Tài khoản: </label>
                        <input type="text" id="account" class="form-control text-light p-3 mt-2" placeholder="Nhập vào số điện thoại của bạn" required v-model="logInForm.DienThoai" />
                    </div>

                    <div class="col-12 my-4">
                        <label for="password fs-5">Mật khẩu: </label>
                        <div class="position-relative">
                            <input :type="isShow ? 'text' : 'password'" id="password" class="form-control text-light p-3 mt-2" placeholder="Nhập vào mật khẩu của bạn" required v-model="logInForm.Password" />
                            <i @click="handleToggleShow" class="fa-solid" :class="{ 'fa-eye': isShow, 'fa-eye-slash': !isShow, 'position-absolute': true, 'top-50': true, 'end-0': true, 'translate-middle-y': true, 'me-3': true }"></i>
                        </div>
                        <span class="d-flex fs-6 mt-2">Quên mật khẩu ?</span>
                    </div>

                    <div class="col-12 text-center">
                        <button type="submit" class="logIn-form-btn w-75 fw-bold border border-0 rounded-4 p-3">Đăng nhập</button>
                    </div>

                    <div class="col-12 text-center not-account">
                        <span class="fs-6">Bạn chưa có tài khoản? 
                            <router-link to="/register" class="text-decoration-none text-light">Đăng ký ngay</router-link>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url("@/views/auth/style.scss");
</style>