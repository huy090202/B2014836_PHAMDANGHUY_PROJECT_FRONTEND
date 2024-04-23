<script>
    import { onMounted, ref } from "vue"
    import { useRoute } from "vue-router"
    import { updateNXB, getDetailNXB } from "@/services/nhaXuatBan.service";

    export default {
        setup () {
            const router = useRoute();

            const TenNXB = ref();
            const DiaChi = ref();

            const { id } = router.params;
            const getData = async () => {
                try {
                    if (id) {
                        console.log("ID: ", id);
                        const nxb = await getDetailNXB(id);
                        console.log("NXB: ", nxb);
                        if (nxb.data) {
                            const dataNXB = nxb.data;
                            TenNXB.value = dataNXB.TenNXB;
                            DiaChi.value = dataNXB.DiaChi;
                        }
                    }
                } catch (e) {
                    console.log(e);
                }
            }

            const handleEditNXB = async (e) => {
                e.preventDefault();

                try {
                    const res = await updateNXB({
                        MaNXB: id,
                        TenNXB: TenNXB.value,
                        DiaChi: DiaChi.value,
                    });
                    alert("Cập nhật thông tin nhà xuất bản thành công!");
                } catch (e) {
                    console.log("Cập nhật thông tin nhà xuất bản thất bại!", e);
                }
            }

            onMounted(async () => {
                await getData();
            });

            return {
                TenNXB,
                DiaChi,
                handleEditNXB
            }
        }
    }
</script>

<template>
    <div class="update-publishing rounded p-4">
        <h4 class="text-uppercase fw-bold">Cập nhật thông tin nhà xuất bản</h4>
        <form @submit="handleEditNXB">
            <div class="mb-3">
                <label for="staffName" class="form-label fw-bold fs-6">Tên nhà xuất bản:  </label>
                <input type="text" class="form-control" id="staffName" placeholder="Nhập vào họ tên nhân viên" v-model="TenNXB">
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
    @import url("@/views/adminPage/publishingPage/updatePublishing/style.scss");
</style>