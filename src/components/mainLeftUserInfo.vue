<script>
    export default {
        data() {
            return {
            selectedItem: "userInfo"
            };
        },
        methods: {
            selectItem(item) {
            this.selectedItem = item;
            }
        }
    };
</script>

<template>
    <div class="main-left-admin rounded py-3">
        <div class="content">
            <div class="content-title fw-bold text-uppercase">Hiển thị</div>
            <ul class="list-group list-group-flush">
                <router-link class="text-black text-decoration-none" to="/userInfo">
                    <li class="list-group-item rounded fw-bold border border-0 ps-5"
                    :class="{ 'click': selectedItem === 'userInfo' }"
                    @click="selectItem('userInfo')">
                        <i class="fa-regular fa-user"></i>
                        Thông tin tài khoản
                    </li>
                </router-link>

                <router-link class="text-black text-decoration-none" to="/userInfo/borrows">
                    <li class="list-group-item rounded fw-bold border border-0 ps-5"
                    :class="{ 'click': selectedItem === 'userInfoBorrow' }"
                    @click="selectItem('userInfoBorrow')">
                        <i class="fa-solid fa-up-right-from-square"></i>
                        Thông tin phiếu mượn
                    </li>
                </router-link>
            </ul>
        </div>
        
        <div class="content">
            <div class="content-title fw-bold text-uppercase">Cập nhật</div>
            <ul class="list-group list-group-flush">
                <router-link class="text-black text-decoration-none" to="/userInfo/update">
                    <li class="list-group-item rounded fw-bold border border-0 ps-5"
                    :class="{ 'click': selectedItem === 'updateUserInfo' }"
                    @click="selectItem('updateUserInfo')">
                        <i class="fa-solid fa-pen-nib"></i>
                        Cập nhật thông tin
                    </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/assets/styles/mainLeftAdmin.scss");
</style>