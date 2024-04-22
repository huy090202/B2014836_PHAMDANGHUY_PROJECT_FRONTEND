<script>
    
</script>

<template>
    <div class="staffs rounded p-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="text-uppercase fw-bold">Quản lý nhân viên</h5>
            <router-link class="text-black text-decoration-none" to="/admin/newStaff">
                <div class="staff-btn border border-1">Thêm nhân viên mới</div>
            </router-link>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Chức vụ</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Điện Thoại</th>
                <th scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Phạm Đang Huy</td>
                    <td>Nhân viên</td>
                    <td>Cà Mau</td>
                    <td>0788793092</td>
                    <td>Xóa</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Phạm Đang Huy</td>
                    <td>Nhân viên</td>
                    <td>Cà Mau</td>
                    <td>0788793092</td>
                    <td>Xóa</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Phạm Đang Huy</td>
                    <td>Nhân viên</td>
                    <td>Cà Mau</td>
                    <td>0788793092</td>
                    <td>Xóa</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/staffPage/style.scss");
</style>