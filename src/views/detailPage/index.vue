<script>
    import { onMounted, ref } from "vue"
    import { useRoute } from "vue-router"
    import { getDetailSach } from "@/services/sach.service";
    import { getAllNXB } from "@/services/nhaXuatBan.service";
    import { userStore } from "@/store/userStore";
    import { createTDMS } from "@/services/theoDoiMuonSach.service";

    export default {
      setup () {
        const route = useRoute();

        const TenSach = ref();
        const DonGia = ref();
        const SoQuyen = ref();
        const NamXuatBan = ref();
        const MaNXB = ref();
        const TacGia = ref();
        const HinhAnh = ref();

        const nxb = ref([]);

        const isUserStore = userStore();

        const NgayMuon = ref();
        const NgayTra = ref();

        const { id } = route.params;
        const getData = async () => {
          try {
            if (id) {
              const book = await getDetailSach(id);
              if (book.data) {
                const dataBook = book.data;
                TenSach.value = dataBook.TenSach;
                DonGia.value = dataBook.DonGia;
                SoQuyen.value = dataBook.SoQuyen;
                NamXuatBan.value = dataBook.NamXuatBan;
                MaNXB.value = dataBook.MaNXB;
                TacGia.value = dataBook.TacGia;
                HinhAnh.value = dataBook.HinhAnh;
              }
            }
            const res = await getAllNXB("All");
            nxb.value = res.data;
            MaNXB.value = nxb.value.find((item) => item.MaNXB === MaNXB.value).TenNXB;
          } catch (e) {
            console.log(e);
          }
        }

        console.log("UserStore: ", isUserStore.user.MaDocGia);
        console.log("ID: ", id);

        const creatTDMS = async (e) => {
          e.preventDefault();

          try {
            const res = await createTDMS({
              MaDocGia: isUserStore.user.MaDocGia,
              MaSach: id,
              NgayMuon: NgayMuon.value,
              NgayTra: NgayTra.value,
              SoLuong: 1
            });
            console.log("Creat TDMS: ", res);

            if (res.status === 200) {
              alert("Đăng ký mượn sách thành công!");
              NgayMuon.value = "";
              NgayTra.value = "";
            }
          } catch (e) {
            console.log(e);
          }
        }

        onMounted (async () => {
          await getData();
        });

        return {
          TenSach,
          DonGia,
          SoQuyen,
          NamXuatBan,
          MaNXB,
          TacGia,
          HinhAnh,
          nxb,
          NgayMuon,
          NgayTra,
          creatTDMS
        }
      }
    }
</script>

<template>
  <div class="container mt-4">
    <div class="row detail-container">
      <div class="col-4">
        <div class="detail-img rounded" :style="{ backgroundImage: `url(/src/assets/images/Books/${HinhAnh})` }">
        </div>
      </div>
      <div class="col-8 detail-content-right rounded p-4">
        <div class="fw-bold text-uppercase fs-4">{{TenSach}}</div>
        
        <div class="d-flex justify-content-between align-items-start my-2">
          <div class="content-right-contents d-flex justify-content-start flex-column my-2">
            <span class="author">Tác giả: {{TacGia}}</span>
            <span class="price">Đơn giá: {{DonGia}} VNĐ</span>
            <span class="quantity">Số lượng sách còn trong kho: {{ SoQuyen }}</span>
          </div>
          
          <div class="content-right-publishing d-flex justify-content-start flex-column my-2">
            <span class="year">Năm xuất bản: {{NamXuatBan}}</span>
            <span class="company">Nhà xuất bản: {{MaNXB}}</span>
          </div>
        </div>

        <div class="content-right-borrow rounded p-4">
          <div class="form-group row">
            <div class="col-12">
              <h3 class="text-center fw-bold text-uppercase">Đăng ký mượn sách</h3>
            </div>

            <form class="form-group row" @submit="creatTDMS">
              <div class="col-6 my-4">
                <label for="borrow-date">Chọn ngày mượn: </label>
                <input type="date" class="form-control" id="borrow-date" v-model="NgayMuon">
              </div>
              
              <div class="col-6 my-4">
                <label for="pay-date">Chọn ngày trả: </label>
                <input type="date" class="form-control" id="pay-date" v-model="NgayTra">
              </div>
              
              <div class="col-8">
                <label for="quatity">Chọn số lượng sách muốn mượn: </label>
                <input type="text" value="1" class="form-control" id="quatity" disabled>
              </div>
              <div class="col-4 d-flex flex-column">
                <label for="borrow">Xác nhận mượn: </label>
                <input type="submit" value="Mượn" class="content-right-btn border border-0 text-black rounded-4" id="borrow">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<style lang="scss" scoped>
@import "@/views/detailPage/style.scss";
</style>