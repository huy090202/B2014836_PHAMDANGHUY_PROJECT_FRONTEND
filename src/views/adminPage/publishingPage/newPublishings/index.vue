<script>
    import { onMounted, ref } from "vue"
    import { createNXB } from "@/services/nhaXuatBan.service";

    export default {
        setup () {
            const publishingNew = ref({
                TenNXB: "",
                DiaChi: ""
            });

            onMounted(() => {
                document.title = 'Thêm mới nhà xuất bản';
            });

            const handleCreate = async (e) => {
                e.preventDefault();

                try {
                    const res = await createNXB({
                        TenNXB: publishingNew.value.TenNXB,
                        DiaChi: publishingNew.value.DiaChi
                    });

                    if (res.status === "OK") {
                        alert("Thêm nhà xuất bản mới thành công");
                        publishingNew.value.TenNXB = "";
                        publishingNew.value.DiaChi = "";
                    }
                } catch (e) {
                    console.log(e);
                }
            }

            return {
                publishingNew,
                handleCreate
            }
        }
    }
</script>

<template>
    <div class="new-publishing rounded p-4">
        <h5 class="text-uppercase fw-bold">Thêm nhà xuất bản mới</h5>

        <form @submit="handleCreate">
            <div class="mb-3">
                <label for="publishingName" class="form-label fw-bold fs-6">Tên nhà xuất bản: </label>
                <input type="text" class="form-control" id="publishingName" placeholder="Nhập vào tên nhà xuất bản" required v-model="publishingNew.TenNXB">
            </div>

            <div class="mb-3">
                <label for="publishingAddress" class="form-label fw-bold fs-6">Địa chỉ: </label>
                <input type="text" class="form-control" id="publishingAddress" placeholder="Nhập vào địa chỉ nhà xuất bản" v-model="publishingNew.DiaChi">
            </div>

            <button type="submit" class="btn btn-primary">Thêm mới</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/adminPage/publishingPage/newPublishings/style.scss");
</style>