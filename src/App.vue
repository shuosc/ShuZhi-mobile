<template>
  <div id="q-app">
    <header></header>
    <main>
      <q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100" reveal>
        <q-toolbar slot="header">
          <q-btn flat @click="$router.push('/')">
            <q-icon name="home" />
          </q-btn>
          <q-toolbar-title>
            iSHU
          </q-toolbar-title>
          <!-- <q-btn flat @click="onScanClick">
            扫一扫
          </q-btn> -->
          <q-btn flat v-if="$user.login">
            {{$user.ID}}
          </q-btn>
          <q-btn flat v-else @click="open=true">
            登陆
          </q-btn>
        </q-toolbar>
        <router-view />
        <!-- <q-card-main> -->
        <!-- <input @keydown.native.prevent name="name" v-model="name"/> -->
        <!-- <q-input  name="name" v-model="name"  /> -->
        <!-- </q-card-main> -->
        <q-modal minimized no-backdrop-dismiss v-model="open" v-show="open">
          <q-card flat>
            <q-card-main>
              <q-input v-model="userName" type="number" float-label="一卡通" />
              <q-input v-model="passWord" type="password" float-label="密码" />
            </q-card-main>
            <q-card-actions align="around">
              <q-btn @click.native="login" class="full-width">登录</q-btn>
            </q-card-actions>
          </q-card>
        </q-modal>
      </q-layout>
    </main>
  </div>
</template>

<script>
/*
 * Root component
 */
import { Toast, Dialog } from 'quasar'
import Toolbar from '@/Toolbar.vue'
export default {
  comments: {
    Toolbar
  },
  data() {
    return {
      userName: '',
      passWord: '',
      name: '',
      open: false,
      callback: () => {}
    }
  },
  created() {
    this.$q.events.$on('shuzhi:login', callback => {
      this.open = true
      this.callback = callback
    })
    // Toast.create('查询参数', this.$route.query)
    if (this.$route.query.action === 'checkin') {
      this.open = true
      this.callback = () => {
        this.checkin()
      }
    }
  },
  mounted() {},
  methods: {
    // wxConfig() {
    //   this.$http.get()
    //   this.$wx.config({
    //     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //     appId: '', // 必填，公众号的唯一标识
    //     timestamp: 123, // 必填，生成签名的时间戳
    //     nonceStr: '', // 必填，生成签名的随机串
    //     signature: '', // 必填，签名
    //     jsApiList: [] // 必填，需要使用的JS接口列表
    //   })
    // },
    onScanClick() {
      this.wxConfig()
      this.$wx.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
        success: function(res) {
          var result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
          console.log(result)
        }
      })
    },
    login() {
      this.$http
        .post('/api/Sys/Users/Login', {
          userName: this.userName,
          passWord: this.passWord
        })
        .then(response => {
          if (response.data.errorcode !== 0) {
            Toast.create(response.data.message)
          } else {
            this.$user.ID = this.userName
            this.$user.login = true
            this.open = false
            this.$nextTick(() => {
              Toast.create('成功登陆')
              this.$nextTick(() => {
                this.callback()
                this.callback = () => {}
              })
            })
          }
        })
    },
    checkin() {
      let hdid = this.$route.query.hdid
      this.$http
        .get(`/api/HuoDong/HuoDBMXX/UpdateHuoDCJZT?hdid=${hdid}&xueHao=${this.$user.ID}`)
        // .get(`/api/HuoDong/HuoDBMXX/UpdateHuoDCJZT?hdid=1028&xueHao=17121364`)
        .then(resp => {
          console.log(resp)
          Dialog.create({
            title: '提示',
            message: `${this.$user.ID}，您已成功签到本次活动`
          })
        })
        .catch(err => {
          console.log(err)
          Toast.create(err)
        })
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'

.pull-to-refresh-message
  z-index 10

.q-tabs-head
  z-index 20
</style>
