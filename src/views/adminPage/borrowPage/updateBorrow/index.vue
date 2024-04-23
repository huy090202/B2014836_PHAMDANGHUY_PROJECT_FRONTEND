<script>
    import { onMounted, ref } from "vue"
    import { useRoute } from "vue-router"
    import { updateTDMS, getDetailTDMS } from "@/services/theoDoiMuonSach.service";

    export default {
        setup () {
            const router = useRoute();

            const TrangThai = ref();

            const { MaDocGia, MaSach, NgayMuon } = router.query;
            const getData = async () => {
                try {
                    console.log("maDG, maSach, ngayMuon: ", MaDocGia, MaSach, NgayMuon);
                    
                    const borrow = await getDetailTDMS(MaDocGia, MaSach, NgayMuon);
                    console.log("Borrow: ", borrow);
                    if (borrow.data) {
                        const dataBorrow = borrow.data;
                        TrangThai.value = dataBorrow.TrangThai;
                    }
                    
                } catch (e) {
                    console.log(e);
                }
            }

            const handleEditBorrow = async (e) => {
                e.preventDefault();

                try {
                    const res = await updateTDMS({
                        MaDocGia: MaDocGia,
                        MaSach: MaSach,
                        NgayMuon: NgayMuon,
                        TrangThai: TrangThai.value,
                    });

                    alert("Cập nhật thông tin phiếu mượn thành công!");
                } catch (e) {
                    console.log("Cập nhật thông tin phiếu mượn thất bại!", e);
                }
            }

            onMounted(async () => {
                await getData();
            });

            return {
                TrangThai,
                handleEditBorrow
            }
        }
    }
</script>

<template>
    <div class="update-borrow rounded p-4">
        <h4 class="text-uppercase fw-bold">Cập nhật thông tin phiếu mượn</h4>
        <form @submit="handleEditBorrow">
            <div class="mb-3">
                <label for="statusBorrow" class="form-label fw-bold fs-6">Trạng thái: </label>
                <input type="text" class="form-control" id="statusBorrow" placeholder="Nhập vào trạng thái (Đang mượn / Đã trả / Chờ xác nhận)" v-model="TrangThai">
            </div>

            <button type="submit" class="btn btn-primary">Xác nhận</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/borrowPage/updateBorrow/style.scss");
</style>