<script>
    import { onMounted, ref, watch } from "vue"
    import { getAllNXB } from "@/services/nhaXuatBan.service";
    import { createSach } from "@/services/sach.service";

    export default {
        setup () {
            const nhaXuatBan = ref([]);
            const TenSach = ref();
            const HinhAnh = ref();
            const DonGia = ref();
            const SoQuyen = ref(0);
            const NamXuatBan = ref();
            const MaNXB = ref();
            const TacGia = ref();

            const getNXB = async () => {
                try {
                    const res = await getAllNXB("All");
                    nhaXuatBan.value = res.data;

                    if (nhaXuatBan.value) {
                        MaNXB.value = nhaXuatBan.value[0].MaNXB;
                    }
                } catch (e) {
                    console.log(e);
                }
            }

            const clearInput = () => {
                TenSach.value = "";
                HinhAnh.value = "";
                DonGia.value = "";
                SoQuyen.value = 0;
                NamXuatBan.value = "";
                MaNXB.value = "";
                TacGia.value = "";
            }

            const handleCreate = async (e) => {
                e.preventDefault();

                const donGia = +(DonGia.value.replace('.', ''));

                if(isNaN(donGia)) {
                    return alert("Đơn giá không hợp lệ");
                }

                try {

                    const res = await createSach({
                        TenSach: TenSach.value,
                        HinhAnh: HinhAnh.value,
                        DonGia: donGia,
                        SoQuyen: +SoQuyen.value,
                        NamXuatBan: NamXuatBan.value,
                        MaNXB: MaNXB.value,
                        TacGia: TacGia.value
                    });

                    console.log("Thêm sách thành công! ", res);

                    clearInput();
                    await getNXB();
                } catch (e) {
                    console.log("Thêm sách thất bại! ", e);
                }
            }

            onMounted(async () => {
                document.title = 'Thêm mới sách';
                await getNXB();
            });
            
            return {
                nhaXuatBan,
                handleCreate,
                TenSach,
                HinhAnh,
                DonGia,
                SoQuyen,
                NamXuatBan,
                MaNXB,
                TacGia,
            }
        }
    }
</script>

<template>
    <div class="new-book rounded p-4">
        <h4 class="text-uppercase fw-bold">Thêm sách mới</h4>
        <form @submit="handleCreate">
            <div class="mb-3">
                <label for="bookName" class="form-label fw-bold fs-6">Tên sách: </label>
                <input type="text" class="form-control" id="bookName" placeholder="Nhập vào tên sách" v-model="TenSach">
            </div>

            <div class="mb-3">
                <label for="formFile" class="form-label">Hình ảnh: </label>
                <input class="form-control" type="text" id="formFile" placeholder="Nhập vào tên hình ảnh" v-model="HinhAnh">
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
                <select class="form-control" id="pulishing" v-if="nhaXuatBan" v-model="MaNXB">
                    <option :value="nxb.MaNXB" v-for="nxb in nhaXuatBan" :key="nxb.MaNXB">
                        {{ nxb.TenNXB }}
                    </option>
                </select>
            </div>

            <div class="mb-3">
                <label for="bookAuthor" class="form-label fw-bold fs-6">Tác giả: </label>
                <input type="text" class="form-control" id="bookAuthor" placeholder="Nhập vào tên tác giả" v-model="TacGia">
            </div>

            <button type="submit" class="btn btn-primary">Thêm mới</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/bookPage/newBooks/style.scss");
</style>