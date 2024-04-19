<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center"
    },
    breakpoints: {
      700: {
        itemsToShow: 3.5,
        snapAlign: "center"
      },
      1024: {
        itemsToShow: 5,
        snapAlign: "start"
      }
    }
  })
});
</script>

<template>
  <div
    data-bs-spy="scroll"
    data-bs-target="#navbar-example2"
    data-bs-offset="0"
    class="scrollspy-example"
    tabindex="0"
  >
    <div id="banners">
      <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="@/assets/images/Banners/bannerImage2.avif"
              class="d-block w-100"
              alt="#Banner Image 1"
              style="height: 500px"
            />
            <div class="carousel-caption d-none d-md-block text-uppercase">
              <h2>Dĩ vãng</h2>
              <p>
                Những trang sách đưa ta đến thời gian xa xôi, nơi những câu
                chuyện cổ xưa vẫn sống động trong kí ức, làm cho trái tim ta
                lặng lẽ ngân vang trong hồi ức tuổi thơ.
              </p>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="@/assets/images/Banners/bannerImage1.avif"
              class="d-block w-100"
              alt="#Banner Image 2"
              style="height: 500px"
            />
            <div class="carousel-caption d-none d-md-block text-uppercase">
              <h2>Phiêu lưu</h2>
              <p>
                Như một nguồn suối vô tận, lan tỏa rộng lớn qua từng trang sách
                mở ra. Những trang sách này là cánh cửa mở ra thế giới của kiến
                thức, khám phá và sự hiểu biết.
              </p>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="@/assets/images/Banners/bannerImage3.avif"
              class="d-block w-100"
              alt="#Banner Image 3"
              style="height: 500px"
            />
            <div class="carousel-caption d-none d-md-block text-uppercase">
              <h2>Tri thức</h2>
              <p>
                Một cuộc hành trình vô tận, khiến cho trái tim ta đập mạnh lên
                trong niềm háo hức với những thế giới mới lạ. Sách là nguồn cảm
                hứng cho những người luôn khát khao khám phá, chinh phục.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div id="books">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="text-center text-uppercase fw-bold m-4">
              Books worth borrowing
            </h2>
          </div>

          <div class="col-12">
            <Carousel v-bind="settings" :breakpoints="breakpoints">
              <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item">
                  <div class="book-image position-relative rounded-top-3">
                    <div
                      class="book-detail text-black position-absolute top-50 start-50 translate-middle rounded-pill"
                    >
                      Mượn sách
                    </div>
                  </div>
                  <div
                    class="book-title text-center text-uppercase fw-bold p-3"
                  >
                    <span>Dac nhan tam</span>
                  </div>
                </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>

          <div class="col-12">
            <h2 class="text-center text-uppercase fw-bold m-4">New books</h2>
          </div>

          <div class="col-12">
            <div
              class="book-new d-flex justify-content-between flex-row align-items-center flex-sm-wrap gap-4"
            >
              <div class="book-new-image rounded-3 position-relative">
                <div class="book-new-title d-flex justify-content-between align-items-center position-absolute w-100 text-black bg-white bottom-0 end-0 rounded-3 p-3">
                  <span class="w-75 book-new-left border-end border-secondary pe-2">Book test Book test Book test Book test</span>
                  <div class="book-new-right d-flex w-25 justify-content-end align-items-center">
                    <i class="fa-regular fa-eye"></i>
                  </div>
                </div>
              </div>
              <div class="book-new-image rounded-3 position-relative">
                <div class="book-new-title d-flex justify-content-between align-items-center position-absolute w-100 text-black bg-white bottom-0 end-0 rounded-3 p-3">
                  <span class="w-75 book-new-left border-end border-secondary pe-2">Book test Book test Book test</span>
                  <div class="book-new-right d-flex w-25 justify-content-end align-items-center">
                    <i class="fa-regular fa-eye"></i>
                  </div>
                </div>
              </div>
              <div class="book-new-image rounded-3 position-relative">
                <div class="book-new-title d-flex justify-content-between align-items-center position-absolute w-100 text-black bg-white bottom-0 end-0 rounded-3 p-3">
                  <span class="w-75 book-new-left border-end border-secondary pe-2">Book test</span>
                  <div class="book-new-right d-flex w-25 justify-content-end align-items-center">
                    <i class="fa-regular fa-eye"></i>
                  </div>
                </div>
              </div>
              <div class="book-new-image rounded-3 position-relative">
                <div class="book-new-title d-flex justify-content-between align-items-center position-absolute w-100 text-black bg-white bottom-0 end-0 rounded-3 p-3">
                  <span class="w-75 book-new-left border-end border-secondary pe-2">Book test</span>
                  <div class="book-new-right d-flex w-25 justify-content-end align-items-center">
                    <i class="fa-regular fa-eye"></i>
                  </div>
                </div>
              </div>
              <div class="book-new-image rounded-3 position-relative">
                <div class="book-new-title d-flex justify-content-between align-items-center position-absolute w-100 text-black bg-white bottom-0 end-0 rounded-3 p-3">
                  <span class="w-75 book-new-left border-end border-secondary pe-2">Book test</span>
                  <div class="book-new-right d-flex w-25 justify-content-end align-items-center">
                    <i class="fa-regular fa-eye"></i>
                  </div>
                </div>
              </div>
              <div class="book-new-image rounded-3 position-relative">
                <div class="book-new-title d-flex justify-content-between align-items-center position-absolute w-100 text-black bg-white bottom-0 end-0 rounded-3 p-3">
                  <span class="w-75 book-new-left border-end border-secondary pe-2">Book test</span>
                  <div class="book-new-right d-flex w-25 justify-content-end align-items-center">
                    <i class="fa-regular fa-eye"></i>
                  </div>
                </div>
              </div>
              <div class="book-new-image rounded-3 position-relative">
                <div class="book-new-title d-flex justify-content-between align-items-center position-absolute w-100 text-black bg-white bottom-0 end-0 rounded-3 p-3">
                  <span class="w-75 book-new-left border-end border-secondary pe-2">Book test</span>
                  <div class="book-new-right d-flex w-25 justify-content-end align-items-center">
                    <i class="fa-regular fa-eye"></i>
                  </div>
                </div>
              </div>
              <div class="book-new-image rounded-3 position-relative">
                <div class="book-new-title d-flex justify-content-between align-items-center position-absolute w-100 text-black bg-white bottom-0 end-0 rounded-3 p-3">
                  <span class="w-75 book-new-left border-end border-secondary pe-2">Book test</span>
                  <div class="book-new-right d-flex w-25 justify-content-end align-items-center">
                    <i class="fa-regular fa-eye"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 text-center">
            <button class="book-btn border border-0 text-black rounded-4 mt-4">Xem thêm</button>
          </div>
        </div>
      </div>
    </div>

    <div id="abouts">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="text-center text-uppercase fw-bold m-4">About us</h2>
          </div>

          <div class="col-12">
            <div class="book-aboutUs position-relative">
              <div class="book-aboutUs-image w-75 rounded"></div>
              <div class="book-aboutUs-content d-flex justify-content-center align-items-center flex-column position-absolute w-50 rounded p-5">
                <h3 class="text-uppercase fw-bold mb-3">Về chúng tôi</h3>
                <p class="text-justify">
                  Sách là những cánh cửa mở ra thế giới mới, nơi mà bạn có thể khám phá, học hỏi và trải nghiệm những điều mới mẻ. Từ những trang giấy in sáng bóng, những dòng chữ kỳ diệu, đến những hình ảnh tuyệt vời, sách là nguồn cảm hứng và tri thức vô tận. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("@/views/homePage/style.scss");
</style>
