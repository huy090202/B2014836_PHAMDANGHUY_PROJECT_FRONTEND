<script>
    import { ref, onMounted } from "vue"
    import { useRoute } from "vue-router"
    import router from "@/routes";
    import { userStore } from "@/store/userStore";

    export default {
        setup() {
            const isUserStore = userStore();
            const route = useRoute();
            const HoLot = ref("");
            const Ten = ref("");
            const NgaySinh = ref("");
            const Phai = ref("");
            const DiaChi = ref("");
            const DienThoai = ref("");

            const { MaDocGia } = route.params;

            const convertDate = (date) => {
                const dateObject = new Date(date);
                const year = dateObject.getFullYear();
                const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
                const day = dateObject.getDate().toString().padStart(2, "0");

                NgaySinh.value = `${year} - ${month} - ${day}`;
            }

            const getData = async () => {
                try {
                    if (!MaDocGia) {
                        router.push("/");
                    }
                    
                    if (isUserStore.user) {
                        const dataUser = isUserStore.user;
                        HoLot.value = dataUser.HoLot;
                        Ten.value = dataUser.Ten;
                        convertDate(dataUser.NgaySinh);
                        Phai.value = dataUser.Phai;
                        DiaChi.value = dataUser.DiaChi;
                        DienThoai.value = dataUser.DienThoai;
                    } else {
                        router.push("/");
                    }
                } catch (error) {
                    console.log(error);
                }
            }

            onMounted(async () => {
                await getData();
            });

            return {
                HoLot,
                Ten,
                NgaySinh,
                Phai,
                DiaChi,
                DienThoai,
            }
        }
    }
</script>

<template>
    <div class="userInfo rounded p-4">
        <div class="mb-3 row">
            <label for="inputFirst" class="col-sm-3 col-form-label">Họ lót: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputFirst" disabled v-model="HoLot"/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputLast" class="col-sm-3 col-form-label">Tên: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputLast" disabled v-model="Ten"/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputBirthday" class="col-sm-3 col-form-label">Ngày sinh: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputBirthday" disabled v-model="NgaySinh"/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputGender" class="col-sm-3 col-form-label">Phái: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputGender" disabled v-model="Phai"/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputAddress" class="col-sm-3 col-form-label">Địa chỉ: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputAddress" disabled v-model="DiaChi"/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputPhone" class="col-sm-3 col-form-label">Số điện thoại: </label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="inputPhone" disabled v-model="DienThoai"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import url("@/views/userInfoPage/style.scss");
</style>