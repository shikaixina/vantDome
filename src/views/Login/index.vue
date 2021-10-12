<template>
  <div class="aaa">
    <h1>登录页</h1>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="state.username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="state.password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 登录 </van-button>
      </div>
    </van-form>
    <p>*注：用户名为姓名，密码为生日全拼，如：19990504</p>
  </div>
</template>
<script lang="ts" setup="props">
import { reactive, createApp } from 'vue'
import { Dialog } from 'vant'
const app = createApp()
app.use(Dialog)
import { useRouter } from 'vue-router'
const router = useRouter()
import { useStore } from 'vuex'
const store = useStore()
const state = reactive({
  username: '',
  password: '',
})
const onSubmit = () => {
  console.log('111', state)
  if (state.username == '王思雨' || state.username == '李开新') {
    if (state.username == '王思雨') {
      if (state.password == '19990504') {
        state.username = ''
        state.password = ''
        router.push('/')
        sessionStorage.setItem('login', '1')
        store.commit('newData', { active: 0, title: '首页' })
      } else {
        Dialog.alert({
          title: '提示',
          message: '请输入生日全拼，格式如19990101',
          theme: 'round-button',
        }).then(() => {
          // on close
        })
      }
    }
    if (state.username == '李开新') {
      if (state.password == '19990711') {
        state.username = ''
        state.password = ''
        router.push('/')
        sessionStorage.setItem('login', '1')
        store.commit('newData', { active: 0, title: '首页' })
      } else {
        Dialog.alert({
          title: '提示',
          message: '请输入生日全拼，格式如19990101',
          theme: 'round-button',
        }).then(() => {
          // on close
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.van-form {
  .van-cell-group,
  .van-cell {
    background-color: rgba(0, 0, 0, 0);
    width: 350px;
    input {
      padding-left: 10px;
    }
  }
}
.aaa {
  position: fixed;
  width: 100vw;
  top: 0px;
  height: 100vh;
  background-image: url(../../assets/login.jpeg);
  background-size: 100% 100%;
  h1 {
    text-align: center;
    margin-bottom: 40px;
  }
  p {
    margin-top: 50px;
    text-align: center;
    //color: red;
  }
}
</style>
