<script>
    export default {
        data() {
            return {
            selectedItem: "admin"
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
                <router-link class="text-black text-decoration-none" to="/admin">
                    <li class="list-group-item rounded fw-bold border border-0 ps-5"
                    :class="{ 'click': selectedItem === 'admin' }"
                    @click="selectItem('admin')">
                        <i class="fa-regular fa-user"></i>
                        Quản lý người dùng
                    </li>
                </router-link>

                <router-link class="text-black text-decoration-none" to="/admin/staffs">
                    <li class="list-group-item rounded fw-bold border border-0 ps-5"
                    :class="{ 'click': selectedItem === 'adminStaff' }"
                    @click="selectItem('adminStaff')">
                        <i class="fa-solid fa-user-gear"></i>
                        Quản lý nhân viên
                    </li>
                </router-link>

                <router-link class="text-black text-decoration-none" to="/admin/publishings">
                    <li class="list-group-item rounded fw-bold border border-0 ps-5"
                    :class="{ 'click': selectedItem === 'adminPublishing' }"
                    @click="selectItem('adminPublishing')">
                        <i class="fa-solid fa-user-pen"></i>
                        Quản lý nhà xuất bản
                    </li>
                </router-link>

                <router-link class="text-black text-decoration-none" to="/admin/books">
                    <li class="list-group-item rounded fw-bold border border-0 ps-5"
                    :class="{ 'click': selectedItem === 'adminBook' }"
                    @click="selectItem('adminBook')">
                        <i class="fa-solid fa-book"></i>
                        Quản lý sách
                    </li>
                </router-link>

                <router-link class="text-black text-decoration-none" to="/admin/borrows">
                    <li class="list-group-item rounded fw-bold border border-0 ps-5"
                    :class="{ 'click': selectedItem === 'adminBorrow' }"
                    @click="selectItem('adminBorrow')">
                        <i class="fa-solid fa-up-right-from-square"></i>
                        Quản lý phiếu mượn
                    </li>
                </router-link>
            </ul>
        </div>
        <div class="content">
            <div class="content-title fw-bold text-uppercase">Thêm mới</div>
            <ul class="list-group list-group-flush">
                <router-link class="text-black text-decoration-none" to="/admin/newBook">
                    <li class="list-group-item rounded fw-bold border border-0 ps-5"
                    :class="{ 'click': selectedItem === 'newBook' }"
                    @click="selectItem('newBook')">
                        <i class="fa-solid fa-square-plus"></i>
                        Thêm sách mới
                    </li>
                </router-link>

                <router-link class="text-black text-decoration-none" to="/admin/newStaff">
                    <li class="list-group-item rounded fw-bold border border-0 ps-5"
                    :class="{ 'click': selectedItem === 'newStaff' }"
                    @click="selectItem('newStaff')">
                        <i class="fa-solid fa-square-plus"></i>
                        Thêm nhân viên mới
                    </li>
                </router-link>

                <router-link class="text-black text-decoration-none" to="/admin/newPublishing">
                    <li class="list-group-item rounded fw-bold border border-0 ps-5"
                    :class="{ 'click': selectedItem === 'newPublishing' }"
                    @click="selectItem('newPublishing')">
                        <i class="fa-solid fa-building-user"></i>
                        Thêm nhà xuất bản mới
                    </li>
                </router-link>
            </ul>
        </div>
        <div class="content">
            <div class="content-title fw-bold text-uppercase">Cập nhật trạng thái</div>
            <ul class="list-group list-group-flush">
                <router-link class="text-black text-decoration-none" to="/admin/statusBorrow">
                    <li class="list-group-item rounded fw-bold border border-0 ps-5"
                    :class="{ 'click': selectedItem === 'statusBorrow' }"
                    @click="selectItem('statusBorrow')">
                        <i class="fa-solid fa-toggle-on"></i>
                        Trạng thái phiếu mượn
                    </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/assets/styles/mainLeftAdmin.scss");
</style>