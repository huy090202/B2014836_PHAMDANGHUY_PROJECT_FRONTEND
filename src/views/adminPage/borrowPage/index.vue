<script>
    
</script>

<template>
    <div class="borrows rounded p-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="text-uppercase fw-bold">Quản lý phiếu mượn</h5>
            <router-link class="text-black text-decoration-none" to="/admin/statusBorrow">
                <div class="borrow-btn border border-1">Cập nhật trạng thái</div>
            </router-link>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Đọc giả</th>
                <th scope="col">Sách</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Ngày mượn</th>
                <th scope="col">Ngày trả</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Phạm Đang Huy</td>
                    <td>Vi tích phân A1</td>
                    <td>Đang mượn</td>
                    <td>2024-04-12</td>
                    <td>2024-04-20</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Phạm Đang Huy</td>
                    <td>Vi tích phân A1</td>
                    <td>Đang mượn</td>
                    <td>2024-04-12</td>
                    <td>2024-04-20</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Phạm Đang Huy</td>
                    <td>Vi tích phân A1</td>
                    <td>Đang mượn</td>
                    <td>2024-04-12</td>
                    <td>2024-04-20</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/borrowPage/style.scss");
</style>