<script>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router';
    import { getAllDG } from '@/services/docGia.service';

    export default {
        setup() {
            const route = useRoute();
            const isUser = ref(false);
            const dataUser = ref([]);

            const fetchData = async () => {
                try {
                    if (route.path === '/admin') {
                        isUser.value = true;
                        const res = await getAllDG("All");
                        dataUser.value = res.allDG;
                    } 
                } catch (error) {
                    console.log(error);
                }
            }

            const convertDate = (date) => {
                const d = new Date(date);
                return d.toISOString().split('T')[0];
            }

            onMounted(async () => {
                await fetchData();
            });

            return {
                isUser,
                dataUser,
                convertDate
            }
        }
    }
</script>

<template>
    <div class="users rounded p-4">
        <h5 class="text-uppercase fw-bold mb-4">Quản lý người dùng</h5>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Họ lót</th>
                <th scope="col">Tên</th>
                <th scope="col">Ngày sinh</th>
                <th scope="col">Phái</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Điện thoại</th>
                </tr>
            </thead>
            <tbody v-if="dataUser">
                <tr v-for="(h, i) in dataUser" :key="h._id">
                    <th scope="row">{{ i + 1 }}</th>
                    <td>{{ isUser ? h.HoLot : "NaN" }}</td>
                    <td>{{ isUser ? h.Ten : "NaN" }}</td>
                    <td>{{ isUser ? convertDate(h.NgaySinh) : "NaN" }}</td>
                    <td>{{ isUser ? h.Phai : "NaN" }}</td>
                    <td>{{ isUser ? h.DiaChi : "NaN" }}</td>
                    <td>{{ isUser ? h.DienThoai : "NaN" }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/userPage/style.scss");
</style>