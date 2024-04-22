<script>
    
</script>

<template>
    <div class="new-publishing rounded p-4">
        <h5 class="text-uppercase fw-bold">Thêm nhà xuất bản mới</h5>

        <div class="mb-3">
            <label for="bookName" class="form-label fw-bold fs-6">Tên nhà xuất bản: </label>
            <input type="text" class="form-control" id="bookName" placeholder="Nhập vào tên nhà xuất bản" required>
        </div>

         <div class="mb-3">
            <label for="bookName" class="form-label fw-bold fs-6">Địa chỉ: </label>
            <input type="text" class="form-control" id="bookName" placeholder="Nhập vào địa chỉ nhà xuất bản">
        </div>

        <button type="submit" class="btn btn-primary">Thêm mới</button>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/publishingPage/newPublishings/style.scss");
</style>