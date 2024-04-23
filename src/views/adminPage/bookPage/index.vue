<script>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router';
    import { getAllSach } from '@/services/sach.service';

    export default {
        setup () {
            const route = useRoute();
            const isBook = ref(false);
            const dataBook = ref([]);

            const fetchData = async () => {
                try {
                    if (route.path === '/admin/books') {
                        isBook.value = true;
                        const res = await getAllSach("All");
                        dataBook.value = res.allSach;
                    }
                } catch (error) {
                    console.log(error);
                }
            }

            onMounted(async () => {
                await fetchData();
            });

            return {
                isBook,
                dataBook
            }
        }
    }
</script>

<template>
    <div class="books rounded p-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="text-uppercase fw-bold">Quản lý sách</h5>
            <router-link class="text-black text-decoration-none" to="/admin/newBook">
                    <div class="books-btn border border-1">Thêm sách</div>
            </router-link>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên sách</th>
                <th scope="col">Đơn giá</th>
                <th scope="col">Số quyển</th>
                <th scope="col">Năm xuất bản</th>
                <th scope="col">Nhà xuất bản</th>
                <th scope="col">Tác giả</th>
                <th scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody v-if="dataBook">
                <tr v-for="(h, i) in dataBook" :key="h._id">
                    <th scope="row">{{ i + 1 }}</th>
                    <td>{{ isBook ? h.TenSach : "NaN" }}</td>
                    <td>{{ isBook ? h.DonGia : "NaN" }} VNĐ</td>
                    <td>{{ isBook ? h.SoQuyen : "NaN" }}</td>
                    <td>{{ isBook ? h.NamXuatBan : "NaN" }}</td>
                    <td>{{ isBook ? h.MaNXB : "NaN" }}</td>
                    <td>{{ isBook ? h.TacGia : "NaN" }}</td>
                    <td class="text-center">
                        <router-link :to="'/admin/updateBook/' + h.MaSach">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/bookPage/style.scss");
</style>