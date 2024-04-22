<script>
    
</script>

<template>
    <div class="new-book rounded p-4">
        <h4 class="text-uppercase fw-bold">Thêm sách mới</h4>

        <div class="mb-3">
            <label for="bookName" class="form-label fw-bold fs-6">Tên sách: </label>
            <input type="text" class="form-control" id="bookName" placeholder="Nhập vào tên sách">
        </div>

        <div class="mb-3">
            <label for="formFile" class="form-label">Hình ảnh: </label>
            <input class="form-control" type="file" id="formFile">
        </div>

        <div class="mb-3">
            <label for="bookPrice" class="form-label fw-bold fs-6">Đơn giá: </label>
            <input type="text" class="form-control" id="bookPrice" placeholder="Nhập vào đơn giá">
        </div>

        <div class="mb-3">
            <label for="bookCount" class="form-label fw-bold fs-6">Số quyển: </label>
            <input type="text" class="form-control" id="bookCount" placeholder="Nhập vào số quyển">
        </div>

        <div class="mb-3">
            <label for="publishing-year" class="form-label fw-bold fs-6">Năm xuất bản: </label>
            <input type="date" class="form-control" id="publishing-year">
        </div>

        <div class="mb-3">
            <label for="pulishing" class="form-label fw-bold fs-6">Nhà xuất bản: </label>
            <select class="form-control" id="pulishing">
                <option value="1">Nhà xuất bản 1</option>
                <option value="2">Nhà xuất bản 2</option>
                <option value="3">Nhà xuất bản 3</option>
            </select>
        </div>

        <div class="mb-3">
            <label for="bookAuthor" class="form-label fw-bold fs-6">Tác giả: </label>
            <input type="text" class="form-control" id="bookAuthor" placeholder="Nhập vào tên tác giả">
        </div>

        <button type="submit" class="btn btn-primary">Thêm mới</button>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/bookPage/newBooks/style.scss");
</style>