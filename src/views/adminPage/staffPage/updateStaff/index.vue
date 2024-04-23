<script>
    import { onMounted, ref } from "vue"
    import { useRoute } from "vue-router"
    import { updateNV, getDetail } from "@/services/nhanVien.service";

    export default {
        setup () {
            const router = useRoute();

            const HoTenNV = ref();
            const ChucVu = ref();
            const DiaChi = ref();

            const { id } = router.params;
            const getData = async () => {
                try {
                    if (id) {
                        console.log("ID: ", id);
                        const staff = await getDetail(id);
                        console.log("Staff: ", staff);
                        if (staff.data) {
                            const dataStaff = staff.data;
                            HoTenNV.value = dataStaff.HoTenNV;
                            ChucVu.value = dataStaff.ChucVu;
                            DiaChi.value = dataStaff.DiaChi;
                        }
                    }
                } catch (e) {
                    console.log(e);
                }
            }

            const handleEditStaff = async (e) => {
                e.preventDefault();

                try {
                    const res = await updateNV({
                        MSNV: id,
                        HoTenNV: HoTenNV.value,
                        ChucVu: ChucVu.value,
                        DiaChi: DiaChi.value,
                    });

                    alert("Cập nhật thông tin nhân viên thành công!");
                } catch (e) {
                    console.log("Cập nhật thông tin nhân viên thất bại!", e);
                }
            }

            onMounted(async () => {
                await getData();
            });

            return {
                HoTenNV,
                ChucVu,
                DiaChi,
                handleEditStaff
            }
        
        }
    }
</script>

<template>
    <div class="update-staff rounded p-4">
        <h4 class="text-uppercase fw-bold">Cập nhật thông tin nhân viên</h4>
        <form @submit="handleEditStaff">
            <div class="mb-3">
                <label for="staffName" class="form-label fw-bold fs-6">Họ tên: </label>
                <input type="text" class="form-control" id="staffName" placeholder="Nhập vào họ tên nhân viên" v-model="HoTenNV">
            </div>

            <div class="mb-3">
                <label for="staffCV" class="form-label fw-bold fs-6">Chức vụ (Mặc định là Nhân viên): </label>
                <input type="text" class="form-control" id="staffCV" placeholder="Nhập vào chức vụ (Nhân viên / Quản lý)" title="Nhập vào chức vụ (Nhân viên / Quản lý)" v-model="ChucVu">
            </div>

            <div class="mb-3">
                <label for="staffAddress" class="form-label fw-bold fs-6">Địa chỉ: </label>
                <input type="text" class="form-control" id="staffAddress" placeholder="Nhập vào địa chỉ" v-model="DiaChi">
            </div>

            <button type="submit" class="btn btn-primary">Xác nhận</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/staffPage/updateStaff/style.scss");
</style>