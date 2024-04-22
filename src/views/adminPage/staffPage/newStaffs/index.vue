<script>
    
</script>

<template>
    <div class="new-staff rounded p-4">
        <h5 class="text-uppercase fw-bold">Thêm nhân viên mới</h5>

        <div class="mb-3">
            <label for="bookName" class="form-label fw-bold fs-6">Họ tên: </label>
            <input type="text" class="form-control" id="bookName" placeholder="Nhập vào họ tên nhân viên" required>
        </div>

        <div class="mb-3">
            <label for="bookName" class="form-label fw-bold fs-6">Mật khẩu: </label>
            <input type="password" class="form-control" id="bookName" placeholder="Nhập vào mật khẩu" required>
        </div>

        <div class="mb-3">
            <label for="bookName" class="form-label fw-bold fs-6">Chức vụ: </label>
            <select class="form-control" id="pulishing">
                <option value="1">Nhân viên</option>
                <option value="2">Quản lý</option>
            </select>
        </div>

        <div class="mb-3">
            <label for="bookName" class="form-label fw-bold fs-6">Địa chỉ: </label>
            <input type="text" class="form-control" id="bookName" placeholder="Nhập vào địa chỉ">
        </div>

        <div class="mb-3">
            <label for="bookName" class="form-label fw-bold fs-6">Số điện thoại: </label>
            <input type="text" class="form-control" id="bookName" required placeholder="Nhập vào số điện thoại" pattern="(+84|0)d{9,10}" title="Nhập số điện thoại từ 10 đến 11 số" >
        </div>

        <button type="submit" class="btn btn-primary">Thêm mới</button>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/staffPage/newStaffs/style.scss");
</style>