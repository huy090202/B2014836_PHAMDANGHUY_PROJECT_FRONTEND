<script>
    
</script>

<template>
    <div class="publishings rounded p-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="text-uppercase fw-bold">Quản lý nhà xuất bản</h5>
            <router-link class="text-black text-decoration-none" to="/admin/newPublishing">
                <div class="publishing-btn border border-1">Thêm nhà xuất bản mới</div>
            </router-link>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Bộ GD&DT Cà Mau</td>
                    <td>Cà Mau</td>
                    <td>Xóa</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Bộ GD&DT Cần Thơ</td>
                    <td>Cần Thơ</td>
                    <td>Xóa</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Bộ GD&DT Hồ Chí Minh</td>
                    <td>Hồ Chí Minh</td>
                    <td>Xóa</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/publishingPage/style.scss");
</style>