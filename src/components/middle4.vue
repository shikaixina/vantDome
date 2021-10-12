<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in arr" v-bind:key="index" class="swiper-slide"><img :src="require('@/img/' + 1 + '.jpg')" alt="" /></div>
        <!-- <div class="swiper-slide img1"><img src="./img/1.jpg" alt="" /></div>
        <div class="swiper-slide img2"><img src="./img/2.jpg" alt="" /></div>
        <div class="swiper-slide img3"><img src="./img/3.jpg" alt="" /></div>
        <div class="swiper-slide img4"><img src="./img/4.jpg" alt="" /></div>
        <div class="swiper-slide img5"><img src="./img/5.jpg" alt="" /></div>
        <div class="swiper-slide img6"><img src="./img/6.jpg" alt="" /></div>
        <div class="swiper-slide img7"><img src="./img/7.jpg" alt="" /></div>
        <div class="swiper-slide img8"><img src="./img/8.jpg" alt="" /></div>
        <div class="swiper-slide img9"><img src="./img/9.jpg" alt="" /></div>
        <div class="swiper-slide img10"><img src="./img/10.jpg" alt="" /></div> -->
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script lang="ts" setup="props">
import './swiper-bundle.min.js'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const active = ref<number>(2)
onMounted(() => {
  swiper()
})
const arr = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
/* const arr = ref(["require('./img/1.jpg')", './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg', './img/7.jpg', './img/8.jpg', './img/9.jpg', './img/10.jpg']) */
const swiper = () =>
  new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  })
</script>

<style scoped lang="less">
/* .img1 {
  background: url(./img/1.jpg);
}
.img2 {
  background: url(./img/2.jpg);
}
.img3 {
  background: url(./img/3.jpg);
}
.img4 {
  background: url(./img/4.jpg);
}
.img5 {
  background: url(./img/5.jpg);
}
.img6 {
  background: url(./img/6.jpg);
}
.img7 {
  background: url(./img/7.jpg);
}
.img8 {
  background: url(./img/8.jpg);
}
.img9 {
  background: url(./img/19.jpg);
}
.img10 {
  background: url(./img/10.jpg);
} */
body {
  background: #fff;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
