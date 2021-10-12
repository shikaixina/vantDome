<template>
  <div>
    <div class="tops" v-if="actives != 4">
      <van-nav-bar :title="titles" left-text="首页" left-arrow @click-left="go(1)" @click-right="showShare = true">
        <template #right>
          <!-- <van-icon name="search" size="18" /> -->
          <van-icon name="weapp-nav" />
        </template>
      </van-nav-bar>
      <van-share-sheet :show="showShare" title="立即分享给好友" :options="options" @select="selectSheet" @cancel="showShare = false" />
      <van-popup :show="show23" @click="show23 = false" @click-overlay="show23 = false"><img class="imgMa" src="./assets/二维码.png" alt="" /></van-popup>
      <van-notice-bar left-icon="volume-o" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
    </div>
    <div class="middles">
      <RouterView />
    </div>
    <p ref="mmm"></p>
    <div class="bottoms" v-if="actives != 4">
      <van-tabbar v-model="actives" class="tabbar">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search">搜索</van-tabbar-item>
        <van-tabbar-item icon="friends-o">用户</van-tabbar-item>
        <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup: () => {
    const store = useStore()
    const router = useRouter()
    const mmm = ref(null)
    const go = (index) => {
      let obj = {}
      if (index == 1) {
        router.push('/')
        obj = { active: 0, title: '首页' }
      } else {
        router.push('/Search')
        obj = { active: 1, title: '搜索' }
      }
      sessionStorage.setItem('vue3meta', JSON.stringify(obj))
      store.commit('newData', obj)
    }
    if (JSON.parse(sessionStorage.getItem('vue3meta'))) {
      store.commit('newData', JSON.parse(sessionStorage.getItem('vue3meta')))
    }
    const titles = computed(() => {
      return store.state.data.title
    })
    const actives = computed({
      get() {
        return store.state.data.active
      },
      set(value) {
        let obj = {}
        switch (value) {
          case 1:
            obj = { active: 1, title: '搜索' }
            router.push({ name: 'Search' })
            break
          case 2:
            obj = { active: 2, title: '用户' }
            router.push({ name: 'User' })
            break
          case 3:
            obj = { active: 3, title: '设置' }
            router.push({ name: 'Setup' })
            break
          default:
            obj = { active: 0, title: '首页' }
            router.push({ name: 'Home' })
            break
        }
        sessionStorage.setItem('vue3meta', JSON.stringify(obj))
        store.commit('newData', obj)
      },
    })
    const showShare = ref(false)
    const show23 = ref(false)
    const options = [
      [
        { name: '微信', icon: 'wechat' },
        { name: '朋友圈', icon: 'wechat-moments' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
        { name: '小程序码', icon: 'weapp-qrcode' },
      ],
    ]
    const copy = () => {
      let textarea = document.createElement('textarea')
      textarea.id = 'copyTextarea'
      textarea.style.width = 0
      textarea.style.height = 0
      document.body.appendChild(textarea)
      textarea = document.getElementById('copyTextarea')
      textarea.innerHTML = 'https://wangsiyv.com'
      let a = 'qwe'
      if (a == 'ios') {
        const range = document.createRange()
        range.selectNode(document.getElementById('copyTextarea'))
        const selection = window.getSelection()
        if (selection.rangeCount > 0) selection.removeAllRanges()
        selection.addRange(range)
      } else {
        textarea.select()
      }

      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    const selectSheet = (option, index) => {
      console.log('123', option, index)
      switch (option.name) {
        case '二维码':
          show23.value = true
          break
        case '复制链接':
          copy()
          break
        case '分享海报':
          break
        default:
          break
      }
    }
    onMounted(() => {
      console.log('12', mmm.value)
      if (!sessionStorage.getItem('login')) {
        store.commit('newData', { active: 4, title: '登录' })
        router.push({ name: 'Login' })
      }
    })
    return {
      actives,
      titles,
      go,
      mmm,
      options,
      showShare,
      selectSheet,
      show23,
    }
  },
})
</script>

<style>
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
#app {
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
p {
  margin: 0;
}
.tops {
  position: fixed;
  width: 100%;
  height: 86px;
  top: 0;
  z-index: 10000;
}
.middles {
  position: absolute;
  top: 86px;
  width: 100%;
  overflow-y: auto;
}
.imgMa {
  width: 50vw;
  height: auto;
}
.van-tabbar {
  z-index: 10000;
}
</style>
