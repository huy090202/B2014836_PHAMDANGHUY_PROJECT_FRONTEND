<script>
</script>

<template>
  <div class="container mt-4">
    <div class="row detail-container">
      <div class="col-4">
        <div class="detail-img rounded">
        </div>
      </div>
      <div class="col-8 detail-content-right rounded p-4">
        <div class="fw-bold text-uppercase fs-4">Book test 001</div>
        
        <div class="d-flex justify-content-between align-items-start my-2">
          <div class="content-right-contents d-flex justify-content-start flex-column my-2">
            <span class="author">Tác giả: Phạm Đang Huy</span>
            <span class="price">Đơn giá: 200.000 VNĐ</span>
            <span class="quantity">Số lượng sách còn trong kho: 12</span>
          </div>
          
          <div class="content-right-publishing d-flex justify-content-start flex-column my-2">
            <span class="year">Năm xuất bản: 2024</span>
            <span class="company">Nhà xuất bản: Bộ GD&ĐT Cà Mau</span>
          </div>
        </div>

        <div class="content-right-borrow rounded p-4">
          <div class="form-group row">
            <div class="col-12">
              <h3 class="text-center fw-bold text-uppercase">Đăng ký mượn sách</h3>
            </div>

            <div class="col-6 my-4">
              <label for="borrow-date">Chọn ngày mượn: </label>
              <input type="date" class="form-control" id="borrow-date">
            </div>
            
            <div class="col-6 my-4">
              <label for="pay-date">Chọn ngày trả: </label>
              <input type="date" class="form-control" id="pay-date">
            </div>
            
            <div class="col-8">
              <label for="quatity">Chọn số lượng sách muốn mượn: </label>
              <input type="text" value="1" class="form-control" id="quatity" disabled>
            </div>
            <div class="col-4 d-flex flex-column">
              <label for="borrow">Xác nhận mượn: </label>
              <input type="button" value="Mượn" class="content-right-btn border border-0 text-black rounded-4" id="borrow">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<style lang="scss" scoped>
@import "@/views/detailPage/style.scss";
</style>