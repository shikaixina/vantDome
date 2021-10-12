<template>
  <van-index-bar>
    <div v-for="(item, index) in arr" :index="index">
      <van-index-anchor :index="item.index" />
      <div v-for="(item1, index1) in item.arr1" :index="index1">
        <van-cell :title="item1" />
      </div>
    </div>
  </van-index-bar>
</template>
<script lang="ts" setup="props">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const arr = ref([
  {
    index: 'A',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'B',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'C',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'D',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'E',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'F',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'G',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'H',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'I',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'J',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'K',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'L',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'M',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'N',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'N',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'O',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'P',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'Q',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'R',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'S',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'T',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'U',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'V',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'W',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'X',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'Y',
    arr1: [1111111, 2222222, 3333333],
  },
  {
    index: 'Z',
    arr1: [1111111, 2222222, 3333333],
  },
])
</script>
<style lang="less" scoped>
.van-index-bar {
  padding-top: 10px;
  padding-bottom: 60px;
}
</style>
