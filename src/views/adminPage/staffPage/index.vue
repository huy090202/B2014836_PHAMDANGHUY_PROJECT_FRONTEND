<script>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router';
    import { getAllNV } from '@/services/nhanVien.service';

    export default {
        setup() {
            const route = useRoute();
            const isStaff = ref(false);
            const dataStaff = ref([]);

            const fetchData = async () => {
                try {
                    if (route.path === '/admin/staffs') {
                        isStaff.value = true;
                        const res = await getAllNV("All");
                        dataStaff.value = res.allNV;
                    }
                } catch (error) {
                    console.log(error);
                }
            }

            onMounted(async () => {
                await fetchData();
            });

            return {
                isStaff,
                dataStaff
            }
        }
    }
</script>

<template>
    <div class="staffs rounded p-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="text-uppercase fw-bold">Quản lý nhân viên</h5>
            <router-link class="text-black text-decoration-none" to="/admin/newStaff">
                <div class="staff-btn border border-1">Thêm nhân viên mới</div>
            </router-link>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Chức vụ</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Điện Thoại</th>
                <th scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody v-if="dataStaff">
                <tr v-for="(h, i) in dataStaff" :key="h._id">
                    <th scope="row">{{ i + 1 }}</th>
                    <td>{{ isStaff ? h.HoTenNV : "NaN" }}</td>
                    <td>{{ isStaff ? h.ChucVu : "NaN" }}</td>
                    <td>{{ isStaff ? h.DiaChi : "NaN" }}</td>
                    <td>{{ isStaff ? h.DienThoai : "NaN" }}</td>
                    <td class="text-center">
                        <router-link :to="'/admin/updateStaff/' + h.MSNV">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/staffPage/style.scss");
</style>