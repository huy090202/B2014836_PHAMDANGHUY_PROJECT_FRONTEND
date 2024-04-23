<script>
    import { onMounted, ref } from "vue"
    import { register } from "@/services/nhanVien.service";

    export default {
        setup() {
            const registerForm = ref({
                HoTenNV: '',
                DiaChi: '',
                DienThoai: '',
                Password: '',
                ChucVu: '',
            });

            onMounted(() => {
                document.title = 'Thêm mới nhân viên';
            });

            const registerSubmit = async (e) => {

                e.preventDefault();

                const regexSDT = /^[(]?[0-9]{3}[)]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
                const checkPhone = regexSDT.test(registerForm.value.DienThoai);

                if (!checkPhone) {
                    return alert('Số điện thoại không hợp lệ');
                }

                if (!registerForm.value.Password) {
                    return alert('Vui lòng nhập mật khẩu');
                }

                const response = await register(registerForm.value);
                setTimeout(() => {
                    router.push('/admin/staffs');
                }, 1000);
            }

            const isShow = ref(false);

            const handleToggleShow = () => {
                isShow.value = !isShow.value;
            }

            return {
                registerForm,
                registerSubmit,
                isShow, 
                handleToggleShow
            }
        }
    }
</script>

<template>
    <div class="new-staff rounded p-4">
        <h5 class="text-uppercase fw-bold">Thêm nhân viên mới</h5>

        <form @submit="registerSubmit">
            <div class="mb-3">
                <label for="staffName" class="form-label fw-bold fs-6">Họ tên: </label>
                <input type="text" class="form-control" id="staffName" placeholder="Nhập vào họ tên nhân viên" required v-model="registerForm.HoTenNV">
            </div>

            <div class="mb-3">
                <label for="staffPassword" class="form-label fw-bold fs-6">Mật khẩu: </label>
                <div class="position-relative">
                    <input :type="isShow ? 'text' : 'password'" id="staffPassword" class="form-control p-3 mt-2" placeholder="Nhập vào mật khẩu của bạn" required v-model="registerForm.Password" />
                    <i @click="handleToggleShow" class="fa-solid" :class="{ 'fa-eye': isShow, 'fa-eye-slash': !isShow, 'position-absolute': true, 'top-50': true, 'end-0': true, 'translate-middle-y': true, 'me-3': true }"></i>
                </div>
            </div>

            <div class="mb-3">
                <label for="staffCV" class="form-label fw-bold fs-6">Chức vụ (Mặc định là Nhân viên): </label>
                <input type="text" class="form-control" id="staffCV" placeholder="Nhập vào chức vụ (Nhân viên / Quản lý)" required v-model="registerForm.ChucVu">
            </div>

            <div class="mb-3">
                <label for="staffAddress" class="form-label fw-bold fs-6">Địa chỉ: </label>
                <input type="text" class="form-control" id="staffAddress" placeholder="Nhập vào địa chỉ" v-model="registerForm.DiaChi">
            </div>

            <div class="mb-3">
                <label for="staffPhone" class="form-label fw-bold fs-6">Số điện thoại: </label>
                <input type="text" class="form-control" id="staffPhone" required placeholder="Nhập vào số điện thoại" pattern="(+84|0)d{9,10}" title="Nhập số điện thoại từ 10 đến 11 số" v-model="registerForm.DienThoai">
            </div>

            <button type="submit" class="btn btn-primary">Thêm mới</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/staffPage/newStaffs/style.scss");
</style>