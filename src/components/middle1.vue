<template>
  <div>
    <h1>倒计时</h1>
    <van-count-down millisecond :time="time">
      <template #default="timeData">
        <span class="block">{{ timeData.hours }}</span>
        <span class="colon">:</span>
        <span class="block">{{ timeData.minutes }}</span>
        <span class="colon">:</span>
        <span class="block">{{ timeData.seconds }}</span>
        <span class="colon">:</span>
        <span class="block">{{ timeData.milliseconds }}</span>
      </template>
    </van-count-down>
  </div>
</template>

<script lang="ts" setup="props">
import { reactive, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const time = ref(24 * 60 * 60 * 1000)
</script>

<style scoped lang="less">
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
.van-count-down {
  margin: 30px 0 0 125px;
}
h1 {
  text-align: center;
  color: aqua;
}
</style>
