<template>
  <div style="height:100%">
    <q-carousel class="text-white" style="height:30vh;margin-bottom:5vh;">
      <div slot="slide" class="no-padding">
        <img src="/statics/2018.jpg" style="height:100%;width:100%;max-width:500px;">
      </div>
      <div slot="slide" class="no-padding" @click="open('https://mp.weixin.qq.com/s/KICkRjDIqzhpcD8i9oDIWQ')">
        <img src="/statics/slider_2.png" style="height:100%;width:100%;">
      </div>
    </q-carousel>
    <div class="grid wrap">
      <q-card flat class="no-margin col-4" v-for="link in links" :key="link.name" @click="$router.push(link.url)">
        <div style="color: #a2e2e3;" class="text-center">
          <img :src="link.img" />
        </div>
        <q-card-separator />
        <q-card-main style="text-align:center;">
          {{link.name}}
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>
import { QInput, openURL } from 'quasar'
export default {
  name: 'hello',
  components: {
    QInput
  },
  data() {
    return {
      links: [
        { img: 'statics/school-info.png', name: '通知通告', url: '/news' },
        { img: 'statics/school-activity.png', name: '校园活动', url: '/activities' },
        { img: 'statics/school-query.png', name: '校园查询', url: '/query' },
        { img: 'statics/school-service.png', name: '场地预约', url: '/room-booking' },
        { img: 'statics/community-signup.png', name: '社团风采', url: '/clubs' }
        // { img: 'statics/banshi-query.png', name: '事务办理', url: '/issues' }
      ],
      name: 'text',
      text: 'text'
    }
  },
  methods: {
    oid(val) {
      console.log(val)
    },
    linkPC: function() {
      window.open('http://www.sz.shu.edu.cn')
    },
    open(url) {
      openURL(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '~variables'

img
  width 5rem
  heightL 5rem

.grid
  display flex
  justify-content space-around
  height 55vh
</style>
