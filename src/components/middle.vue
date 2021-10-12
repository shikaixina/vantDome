<template>
  <div>
    <van-tabs :active="active">
      <van-tab title="标签 1">
        <Middle1 />
      </van-tab>
      <van-tab title="标签 2">
        <Middle2 />
      </van-tab>
      <van-tab title="标签 3">
        <Middle3 />
      </van-tab>
      <van-tab title="标签 4">
        <Middle4 />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup="props">
import Middle1 from './middle1.vue'
import Middle2 from './middle2.vue'
import Middle3 from './middle3.vue'
import Middle4 from './middle4.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const active = ref<number>(0)
</script>

<style scoped lang="less"></style>
