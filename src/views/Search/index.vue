<template>
  <div>
    <van-search v-model="value" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" @search="so" @clear="cl" />
    <van-card v-if="state" num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </template>
    </van-card>
  </div>
</template>
<script lang="ts" setup="props">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const value = ref('')
const state = ref(false)
const so = (data) => {
  console.log('data', data)
  state.value = true
}
const cl = () => {
  state.value = false
}
watch(value, (a, b) => {
  if (!a) {
    state.value = false
  }
})
</script>
