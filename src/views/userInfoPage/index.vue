<script></script>

<template>
    <div class="userInfo rounded p-4">
        <div class="mb-3 row">
            <label for="inputFirst" class="col-sm-3 col-form-label">Họ lót: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputFirst" disabled/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputLast" class="col-sm-3 col-form-label">Tên: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputLast" disabled/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputBirthday" class="col-sm-3 col-form-label">Ngày sinh: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputBirthday" disabled/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputGender" class="col-sm-3 col-form-label">Phái: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputGender" disabled/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputAddress" class="col-sm-3 col-form-label">Địa chỉ: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputAddress" disabled/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputPhone" class="col-sm-3 col-form-label">Số điện thoại: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputPhone" disabled/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/userInfoPage/style.scss");
</style>