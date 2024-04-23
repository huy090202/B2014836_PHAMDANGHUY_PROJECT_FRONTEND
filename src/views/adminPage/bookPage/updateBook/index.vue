<script>
    import { onMounted, ref } from "vue"
    import { useRoute } from "vue-router"
    import { updateSach, getDetailSach } from "@/services/sach.service";
    import { getAllNXB } from "@/services/nhaXuatBan.service";

    export default {
        setup () {
            const router = useRoute();

            const TenSach = ref();
            const DonGia = ref();
            const SoQuyen = ref();
            const NamXuatBan = ref();
            const MaNXB = ref();
            const TacGia = ref();

            const nxb = ref([]);

            const { id } = router.params;
            const getData = async () => {
                try {
                    if (id) {
                        console.log("ID: ", id);
                        const book = await getDetailSach(id);
                        console.log("Book: ", book);
                        if (book.data) {
                            const dataBook = book.data;
                            TenSach.value = dataBook.TenSach;
                            DonGia.value = dataBook.DonGia;
                            SoQuyen.value = dataBook.SoQuyen;
                            NamXuatBan.value = dataBook.NamXuatBan;
                            MaNXB.value = dataBook.MaNXB;
                            TacGia.value = dataBook.TacGia;
                        }
                    }
                    const res = await getAllNXB("All");
                    nxb.value = res.data;
                } catch (e) {
                    console.log(e);
                }
            }

            const handleEditBook = async (e) => {
                e.preventDefault();

                try {
                    const res = await updateSach({
                        MaSach: id,
                        TenSach: TenSach.value,
                        DonGia: DonGia.value,
                        SoQuyen: +SoQuyen.value,
                        NamXuatBan: NamXuatBan.value,
                        MaNXB: MaNXB.value,
                        TacGia: TacGia.value,
                    });

                    alert("Cập nhật thông tin sách thành công!");
                } catch (e) {
                    console.log("Cập nhật thông tin sách thất bại!", e);
                }
            }

            onMounted(async () => {
                await getData();
            });

            return {
                TenSach,
                DonGia,
                SoQuyen,
                NamXuatBan,
                MaNXB,
                TacGia,
                handleEditBook,
                nxb
            }

        }
    }
</script>

<template>
    <div class="update-book rounded p-4">
        <h4 class="text-uppercase fw-bold">Cập nhật thông tin sách</h4>
        <form @submit="handleEditBook">
            <div class="mb-3">
                <label for="bookName" class="form-label fw-bold fs-6">Tên sách: </label>
                <input type="text" class="form-control" id="bookName" placeholder="Nhập vào tên sách" v-model="TenSach">
            </div>

            <div class="mb-3">
                <label for="bookPrice" class="form-label fw-bold fs-6">Đơn giá: </label>
                <input type="text" class="form-control" id="bookPrice" placeholder="Nhập vào đơn giá" v-model="DonGia">
            </div>

            <div class="mb-3">
                <label for="bookCount" class="form-label fw-bold fs-6">Số quyển: </label>
                <input type="number" class="form-control" min="1" id="bookCount" placeholder="Nhập vào số quyển" v-model="SoQuyen">
            </div>

            <div class="mb-3">
                <label for="publishing-year" class="form-label fw-bold fs-6">Năm xuất bản: </label>
                <input type="text" class="form-control" id="publishing-year" placeholder="Nhập vào năm xuất bản" v-model="NamXuatBan">
            </div>

            <div class="mb-3">
                <label for="pulishing" class="form-label fw-bold fs-6">Nhà xuất bản: </label>
                <select class="form-control" id="pulishing" v-if="nxb" v-model="MaNXB">
                    <option :value="el.MaNXB" v-for="el in nxb" :selected="el.MaNXB === MaNXB.value">
                        {{ el.TenNXB }}
                    </option>
                </select>
            </div>

            <div class="mb-3">
                <label for="bookAuthor" class="form-label fw-bold fs-6">Tác giả: </label>
                <input type="text" class="form-control" id="bookAuthor" placeholder="Nhập vào tên tác giả" v-model="TacGia">
            </div>

            <button type="submit" class="btn btn-primary" >Xác nhận</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/bookPage/updateBook/style.scss");
</style>