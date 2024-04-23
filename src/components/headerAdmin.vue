<script>
    import { ref, onMounted } from "vue";
    import router from "@/routes";
    import { adminStore } from "@/store/adminStore";

    export default {
        setup() {
            const isAdmin = adminStore();
            const HoTenNV = ref('');

            const handleLogOut = () => {
                localStorage.removeItem('admin');
                localStorage.removeItem('accessToken');
                isAdmin.logOut();
                router.push('/logIn/admin');
            }

            const checkLocalStorage = () => {
                const adminData = localStorage.getItem('admin');
                const accessToken = localStorage.getItem('accessToken');

                if (adminData && accessToken) {
                    isAdmin.admin.data = JSON.parse(adminData);
                    isAdmin.accessToken = accessToken;
                    isAdmin.isLoggedIn = true;
                    HoTenNV.value = isAdmin.admin.data.HoTenNV;
                }
            }

            const getDataNV = async () => {
                const MSNV = isAdmin.admin?.data?.MSNV;
                console.log(MSNV);
                if (MSNV) {
                    try {
                        await isAdmin.setInfoAdmin(MSNV);

                        if (isAdmin.admin) {
                            HoTenNV.value = isAdmin.admin.data.HoTenNV;
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            }

            onMounted(async () => {
                checkLocalStorage();
                await getDataNV();
            });

            return {
                HoTenNV,
                handleLogOut
            }
        },
    }
</script>

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
                            <span v-if="HoTenNV">Hello, {{ HoTenNV }}</span>
                        </div>
                        <div class="px-4" @click="handleLogOut">
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
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