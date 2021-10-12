<template>
  <div @click="ddd">{{ aaa.a }}----{{ aaa.b }}-----{{ aaa.c }}</div>
</template>

<script lang="ts" setup="props">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const active = ref<number>(2)
interface Doo<T> {
  a: T
  b: T
  c?: T
}
const aaa = reactive<Doo<number>>({ a: 1, b: 1, c: 1 })

interface Aoo<T> {
  (a: T): T
}
function bbb<T>(a: T): T {
  return a
}
const ccc: Aoo<number> = bbb

interface Soo {
  length: number
}
function eee<T extends Soo>(a: T): T {
  alert(a.length)
  return a
}
const ddd = () => {
  // alert(ccc(3))
  //eee({ cccc: '111', length: 34 })
  eee('123123')
}
</script>

<style scoped lang="less"></style>
