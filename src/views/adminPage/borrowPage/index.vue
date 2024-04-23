<script>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router';
    import { getAllTDMS } from '@/services/theoDoiMuonSach.service';

    export default {
        setup () {
            const route = useRoute();
            const isBorrow = ref(false);
            const dataBorrow = ref([]);

            const fetchData = async () => {
                try {
                    if (route.path === '/admin/borrows') {
                        isBorrow.value = true;
                        const res = await getAllTDMS("All", "All", "All");
                        dataBorrow.value = res.allTDMS;
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
                isBorrow,
                dataBorrow,
                convertDate
            }
        
        }
    }
</script>

<template>
    <div class="borrows rounded p-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="text-uppercase fw-bold">Quản lý phiếu mượn</h5>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Đọc giả</th>
                <th scope="col">Sách</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Ngày mượn</th>
                <th scope="col">Ngày trả</th>
                <th scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody v-if="dataBorrow">
                <tr v-for="(h, i) in dataBorrow" :key="h._id">
                    <th scope="row">{{ i + 1 }}</th>
                    <td>{{ isBorrow ? h?.MaDocGia : "NaN"}}</td>
                    <td>{{ isBorrow ? h.MaSach : "NaN" }}</td>
                    <td>{{ isBorrow ? h.TrangThai : "NaN" }}</td>
                    <td>{{ isBorrow ? convertDate(h.NgayMuon) : "NaN" }}</td>
                    <td>{{ isBorrow ? convertDate(h.NgayTra) : "NaN" }}</td>
                    <td class="text-center">
                        <router-link :to="'/admin/updateBorrow?MaDocGia=' + h.MaDocGia + '&MaSach=' + h.MaSach + '&NgayMuon=' + h.NgayMuon">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/borrowPage/style.scss");
</style>