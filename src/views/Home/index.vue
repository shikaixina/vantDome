<template>
  <div>
    <div class="top">
      <div>
        <van-sidebar v-model="actives" @click="bbb" class="lefts" v-if="state">
          <van-sidebar-item title="手机" />
          <van-sidebar-item title="电脑" />
          <van-sidebar-item title="手表" />
        </van-sidebar>
        <van-swipe @mouseenter="asd" @mouseleave="zxc" :autoplay="3000" lazy-render @click="imgOnchange" class="lunbo">
          <van-swipe-item v-for="image in images" :key="image"> <img :src="image" /> </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="middle">
      <Middle ref="qwe" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Middle from '../../components/middle.vue'
import { reactive, ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const actives = ref(0)
const state = ref(false)
const qwe = ref()
const images = ref(['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'])
watch(actives, (a, b) => {
  if (a == 0) {
    images.value = ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg']
  } else if (a == 1) {
    images.value = ['https://img0.baidu.com/it/u=3040300836,2750208922&fm=26&fmt=auto&gp=0.jpg', 'https://img1.baidu.com/it/u=2333295486,2840005379&fm=26&fmt=auto&gp=0.jpg']
  } else {
    images.value = ['https://img1.baidu.com/it/u=1327575296,4197537630&fm=26&fmt=auto&gp=0.jpg', 'https://img0.baidu.com/it/u=2999852337,2436025282&fm=26&fmt=auto&gp=0.jpg']
  }
  state.value = false
})
onMounted(() => {
  console.log('11', qwe.value)
})
const asd = () => {
  //state.value = true
}
const zxc = () => {
  //state.value = false
}
const imgOnchange = () => {
  state.value = true
}
const bbb = () => {
  state.value = false
}
</script>
<style lang="less" scoped>
.lefts {
  position: absolute;
  left: 0;
  height: 200px;
  z-index: 10000;
  .van-sidebar-item {
    height: 66px;
  }
}
.tabbar {
  border-top: #aaa;
  background: #efefef;
}
.van-nav-bar {
  border-bottom: #aaa;
  background: #efefef;
}
.lunbo {
  width: 100vw;
  height: 200px;
  img {
    width: 100%;
    height: 200px;
  }
}
</style>
