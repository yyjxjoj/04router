<template>
<swiper :pagination="true" class="mySwiper">
  <swiper-slide><img src="image/slider01.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="image/slider02.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="image/slider03.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="image/slider04.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="image/slider05.jpg" alt=""></swiper-slide>
  </swiper>

  <div class="container m-5">
    <div class="best mb-5">
      <h2 class="py-3">BEST PRODUCT</h2>
      <p>발송일로부터 3일 이내 로스팅된 원두로 보내드립니다.</p>
    </div>
    <div class="row">
      <div class="col-sm-6 col-md-3 py-3 text-center" v-for="(item,i) in pdata" :key="i">
        <img :src="pdata[i].image" alt="" class="w-100">
        {{pdata[i].title}}
      </div>
    </div>

    <div class="btn bg-danger py-2 m-auto d-block" style="width:100px">
      <router-link to="/product">more</router-link>
    </div>
  </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/components/pagination/pagination.min.css"
import 'swiper/swiper.scss';

// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

export default {
  props:['pdata'],
    components: {
    Swiper,
    SwiperSlide,
  },
}

</script>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.best h2 {text-align: center;}
.best h2:after {
  content:""; width: 30px; height: 1px; background: #333; display:block; margin:auto; margin-top: 15px;}
.best p {text-align: center;}

</style>