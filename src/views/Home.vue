<template>
  <div style="height:100%">
    <q-carousel class="text-white" style="height:25vh;margin-bottom:10px;">
      <div slot="slide" class="no-padding">
        <img src="/statics/slider_1.png" style="height:100%;width:100%;">
      </div>
      <div slot="slide" class="no-padding" @click="open('https://mp.weixin.qq.com/s/KICkRjDIqzhpcD8i9oDIWQ')">
        <img src="/statics/slider_2.png" style="height:100%;width:100%;">
      </div>
      <!-- <div slot="slide" class="bg-tertiary">
        Slide 3
      </div> -->
    </q-carousel>
    <div class="grid ">
      <q-card flat class="no-margin" @click="$router.push('/news')">
        <!-- <q-card-title> -->
        <div style="color: #a2e2e3">
          <!-- inheriting color #a2e2e3: -->
          <!-- <q-icon name="filter_vintage" size="5rem" /> -->
          <img src="~assets/school-info.png" />
        </div>
        <!-- </q-card-title> -->
        <q-card-separator />
        <q-card-main style="text-align:center;">
          通知通告
        </q-card-main>
      </q-card>
      <q-card flat class="no-margin" @click="$router.push('/activities')">
        <!-- <q-card-title> -->
        <div style="color: #a2e2e3">
          <!-- inheriting color #a2e2e3: -->
          <img src="~assets/school-activity.png" />
          <!-- <q-icon name="filter_vintage" size="5rem" /> -->
        </div>
        <!-- </q-card-title> -->
        <q-card-separator />
        <q-card-main style="text-align:center;">
          校园活动
        </q-card-main>
      </q-card>
    </div>
    <div class="grid">
      <q-card flat class="no-margin" @click="$router.push('/query')">
        <!-- <q-card-title> -->
        <div style="color: #a2e2e3">
          <!-- inheriting color #a2e2e3: --><img src="~assets/school-query.png" />
          <!-- <q-icon name="filter_vintage" size="5rem" /> -->
        </div>
        <!-- </q-card-title> -->
        <q-card-separator />
        <q-card-main style="text-align:center;">
          校园查询
        </q-card-main>
      </q-card>
      <q-card flat class="no-margin" @click="$router.push('/room-booking')">
        <!-- <q-card-title> -->
        <div style="color: #a2e2e3">
          <!-- inheriting color #a2e2e3: -->
          <!-- <q-icon name="alarm" size="5rem" /> -->
          <img src="~assets/school-service.png" />
        </div>
        <!-- </q-card-title> -->
        <q-card-separator />
        <q-card-main style="text-align:center;">
          场地预约
        </q-card-main>
      </q-card>
    </div>
    <div class="grid">
      <q-card flat class="no-margin" @click="$router.push('/clubs')">
        <!-- <q-card-title> -->
        <div style="color: #a2e2e3">
          <!-- inheriting color #a2e2e3: -->
          <!-- <q-icon name="filter_vintage" size="5rem" /> -->
          <img src="~assets/community-signup.png" />
        </div>
        <!-- </q-card-title> -->
        <q-card-separator />
        <q-card-main style="text-align:center;">
          社团组织
        </q-card-main>
      </q-card>
      <q-card flat class="no-margin" @click="$router.push('/issues')">
        <!-- <q-card-title> -->
        <div style="color: #a2e2e3">
          <!-- inheriting color #a2e2e3: -->
          <img src="~assets/banshi-query.png" />
        </div>
        <!-- </q-card-title> -->
        <q-card-separator />
        <q-card-main style="text-align:center;">
          事务办理
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'hello',
  methods: {
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
  height 20vh
</style>
