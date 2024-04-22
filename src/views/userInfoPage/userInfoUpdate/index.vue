<script></script>

<template>
    <div class="userInfo-update rounded p-4">
        <div class="mb-3 row">
            <label for="inputFirst" class="col-sm-3 col-form-label">Họ lót: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputFirst"/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputLast" class="col-sm-3 col-form-label">Tên: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputLast"/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputBirthday" class="col-sm-3 col-form-label">Ngày sinh: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputBirthday"/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputGender" class="col-sm-3 col-form-label">Phái: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputGender"/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputAddress" class="col-sm-3 col-form-label">Địa chỉ: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputAddress"/>
            </div>
        </div>

        <div class="mb-3 row">
            <div class="col-sm-3"></div>
            <div class="col-sm-9 text-end">
                <button class="btn btn-primary">Cập nhật</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/userInfoPage/userInfoUpdate/style.scss");
</style>