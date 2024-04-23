<script>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { getAllNXB } from '@/services/nhaXuatBan.service';

    export default {
        setup () {
            const route = useRoute();
            const isPublishing = ref(false);
            const dataPublishing = ref([]);

            const fetchData = async () => {
                try {
                    if (route.path === '/admin/publishings') {
                        isPublishing.value = true;
                        const res = await getAllNXB("All");
                        dataPublishing.value = res.data;
                    }
                } catch (error) {
                    console.log(error);
                }
            }

            onMounted(async () => {
                await fetchData();
            });

            return {
                isPublishing,
                dataPublishing
            }
        
        }
    }
</script>

<template>
    <div class="publishings rounded p-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="text-uppercase fw-bold">Quản lý nhà xuất bản</h5>
            <router-link class="text-black text-decoration-none" to="/admin/newPublishing">
                <div class="publishing-btn border border-1">Thêm nhà xuất bản mới</div>
            </router-link>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody v-if="dataPublishing">
                <tr v-for="(h, i) in dataPublishing" :key="h._id">
                    <th scope="row">{{ i + 1 }}</th>
                    <td>{{ isPublishing ? h.TenNXB : "NaN" }}</td>
                    <td>{{ isPublishing ? h.DiaChi : "NaN" }}</td>
                    <td class="text-center">
                        <router-link :to="'/admin/updatePublishing/' + h.MaNXB">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/publishingPage/style.scss");
</style>