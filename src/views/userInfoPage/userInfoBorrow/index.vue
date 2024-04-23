<script>
    import { ref, onMounted } from "vue";
    import { useRoute } from "vue-router";
    import { userStore } from "@/store/userStore";
    import { getAllTDMS } from "@/services/theoDoiMuonSach.service";

    export default {
        setup () {
            const route = useRoute();
            const isTDMS = ref(false);
            const dataTDMS = ref([]);
            const isUserStore = userStore();

            const fetchData = async () => {
                try {
                    if (route.path === '/userInfo/borrows') {
                        isTDMS.value = true;
                        const res = await getAllTDMS(isUserStore.user.MaDocGia);
                        dataTDMS.value = res.allTDMS;
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
                isTDMS,
                dataTDMS,
                convertDate
            }
        }
    }
</script>

<template>
    <div class="userInfo-borrow rounded p-4">
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Đọc giả</th>
                <th scope="col">Sách</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Ngày mượn</th>
                <th scope="col">Ngày trả</th>
                </tr>
            </thead>
            <tbody v-if="dataTDMS">
                <tr v-for="(h, i) in dataTDMS" :key="h._id">
                    <th scope="row">{{ i + 1 }}</th>
                    <td>{{ isTDMS ? h.MaDocGia : "NaN" }}</td>
                    <td>{{ isTDMS ? h.MaSach : "NaN" }}</td>
                    <td>{{ isTDMS ? h.TrangThai : "NaN" }}</td>
                    <td>{{ isTDMS ? convertDate(h.NgayMuon) : "NaN" }}</td>
                    <td>{{ isTDMS ? convertDate(h.NgayTra) : "NaN" }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/userInfoPage/userInfoBorrow/style.scss");
</style>