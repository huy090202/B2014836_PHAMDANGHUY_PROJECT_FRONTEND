<script>
    
</script>

<template>
    <div class="books rounded p-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="text-uppercase fw-bold">Quản lý sách</h5>
            <router-link class="text-black text-decoration-none" to="/admin/newBook">
                    <div class="books-btn border border-1">Thêm sách</div>
            </router-link>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên sách</th>
                <th scope="col">Đơn giá</th>
                <th scope="col">Số quyển</th>
                <th scope="col">Năm xuất bản</th>
                <th scope="col">Nhà xuất bản</th>
                <th scope="col">Tác giả</th>
                <th scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Toán rời rạc</td>
                    <td>100.000 VNĐ</td>
                    <td>20</td>
                    <td>2002</td>
                    <td>Bộ GD&DT</td>
                    <td>Phạm Đang Huy</td>
                    <td>Xóa</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Toán rời rạc</td>
                    <td>100.000 VNĐ</td>
                    <td>20</td>
                    <td>2002</td>
                    <td>Bộ GD&DT</td>
                    <td>Phạm Đang Huy</td>
                    <td>Xóa</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Toán rời rạc</td>
                    <td>100.000 VNĐ</td>
                    <td>20</td>
                    <td>2002</td>
                    <td>Bộ GD&DT</td>
                    <td>Phạm Đang Huy</td>
                    <td>Xóa</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/bookPage/style.scss");
</style>