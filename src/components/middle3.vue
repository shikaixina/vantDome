<template>
  <div class="m3">
    <van-collapse v-model="activeName" @change="asd" accordion>
      <van-collapse-item title="标题1" name="1">
        <vam-video
          v-if="activeName == '1'"
          :properties="videoOption.properties"
          :videoStyle="videoOption.videoStyle"
          :controlsConfig="videoOption.controlsConfig"
          @play="playVideo"
          @canplay="canplayVideo"
          @pause="pauseVideo"
        ></vam-video>
      </van-collapse-item>
      <van-collapse-item title="标题2" name="2">
        <vam-video
          v-if="activeName == '2'"
          :properties="videoOption.properties"
          :videoStyle="videoOption.videoStyle"
          :controlsConfig="videoOption.controlsConfig"
          @play="playVideo"
          @canplay="canplayVideo"
          @pause="pauseVideo"
        ></vam-video>
      </van-collapse-item>
      <van-collapse-item title="标题3" name="3">
        <vam-video
          v-if="activeName == '3'"
          :properties="videoOption.properties"
          :videoStyle="videoOption.videoStyle"
          :controlsConfig="videoOption.controlsConfig"
          @play="playVideo"
          @canplay="canplayVideo"
          @pause="pauseVideo"
        ></vam-video>
      </van-collapse-item>
      <van-collapse-item title="标题3" name="4">
        <vam-video
          v-if="activeName == '4'"
          :properties="videoOption.properties"
          :videoStyle="videoOption.videoStyle"
          :controlsConfig="videoOption.controlsConfig"
          @play="playVideo"
          @canplay="canplayVideo"
          @pause="pauseVideo"
        ></vam-video>
      </van-collapse-item>
      <van-collapse-item title="标题3" name="5">
        <vam-video
          v-if="activeName == '5'"
          :properties="videoOption.properties"
          :videoStyle="videoOption.videoStyle"
          :controlsConfig="videoOption.controlsConfig"
          @play="playVideo"
          @canplay="canplayVideo"
          @pause="pauseVideo"
        ></vam-video>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script lang="ts" setup="props">
import VamVideo from 'vue-vam-video'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const active = ref<number>(2)
const activeName = ref('1')
const videoOption = reactive({
  properties: {
    //poster: require('../assets/logo.jpeg'),
    src: 'https://mos-vod-drcn.dbankcdn.cn/P_VT/video_injection/2A1343EFA/v3/6CC21C811065945606293295744/MP4Mix_H.264_1920x1080_6000_HEAAC1_PVC_NoCut.mp4',
    // "https://mos-vod-drcn.dbankcdn.cn/P_VT/video_injection/2A1343EFA/v3/6CC21C811065945606293295744/MP4Mix_H.264_1920x1080_6000_HEAAC1_PVC_NoCut.mp4",
    // 'https://tv.youkutv.cc/2019/11/12/mjkHyHycfh0LyS4r/playlist.m3u8',
    preload: 'auto',
    // loop: "loop",
    // autoplay:"autoplay",
    // muted:true
  },
  videoStyle: {
    width: '100vw',
    height: 'auto',
  },
  controlsConfig: {
    fullScreenTit: '全屏',
    EscfullScreenTit: '退出全屏',
    speedTit: '倍速',
    yinliangTit: '音量',
    jingyinTit: '静音',
    playTit: '播放',
    pauseTit: '暂停',
    fullScreen: true,
    speed: true,
    listen: true,
  },
})
const asd = (id) => {
  console.log('123', id)
  switch (id) {
    case '1':
      videoOption.properties.src = 'https://mos-vod-drcn.dbankcdn.cn/P_VT/video_injection/2A1343EFA/v3/6CC21C811065945606293295744/MP4Mix_H.264_1920x1080_6000_HEAAC1_PVC_NoCut.mp4'
      break
    case '2':
      videoOption.properties.src = 'https://tv.cctv.com/2021/07/22/VIDEP8zAQ1eltDrsPlWZIVQ5210722.shtml?spm=C81395.POI8zboafX4j.EiFNHsYkDNCf.7'
      break
    case '3':
      videoOption.properties.src = 'https://tv.cctv.com/2021/07/26/VIDEJJTK8OjXPyQPwCpL58Oc210726.shtml?spm=C81395.POI8zboafX4j.EiFNHsYkDNCf.1'
      break
    case '4':
      videoOption.properties.src = 'https://tv.cctv.com/2021/07/26/VIDEJJTK8OjXPyQPwCpL58Oc210726.shtml?spm=C81395.POI8zboafX4j.EiFNHsYkDNCf.1'
      break
    case '5':
      videoOption.properties.src = 'https://tv.cctv.com/2021/07/26/VIDEJJTK8OjXPyQPwCpL58Oc210726.shtml?spm=C81395.POI8zboafX4j.EiFNHsYkDNCf.1'
      break
    default:
      break
  }
}
const playVideo = () => {
  console.log('play')
}
const pauseVideo = () => {
  console.log('pause')
}
const canplayVideo = () => {
  console.log('canplay')
}
</script>

<style scoped lang="less">
.m3 {
  margin-bottom: 50px;
}
/deep/.bottom-tool {
  position: static;
  z-index: 1;
}
/deep/.mz {
  z-index: 1;
}
</style>
