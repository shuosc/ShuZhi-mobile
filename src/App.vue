<template>
  <!-- Don't drop "q-app" class -->
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
          <q-btn flat v-if="$user.login" @click="$refs.layout.toggleRight()">
            <!-- <q-icon name="more vert" /> -->
            {{$user.name}}
          </q-btn>
          <q-btn flat v-else @click="$refs.layout.toggleRight()">
            <!-- <q-icon name="more vert" /> -->
            登陆
          </q-btn>
        </q-toolbar>
        <!-- Navigation -->
        <!-- <q-tabs slot="navigation">
                          <q-route-tab slot="title"  to="/test-layout/about" replace hide="icon" label="About" />
                          <q-route-tab slot="title"  to="/test-layout/toolbar" replace hide="icon" label="Toolbar" />
                          <q-route-tab slot="title"  to="/test-layout/tabs" replace label="Tabs" />
                          <q-route-tab slot="title"  to="/test-layout/drawer" replace label="Drawer" />
                        </q-tabs> -->
        <!-- sub-routes get injected here: -->
        <router-view />
        <q-modal v-model="open" minimized ref="basicModal" no-backdrop-dismiss>
          <q-card flat>
            <q-card-title>登录</q-card-title>
            <!-- <q-card-separator /> -->
            <q-card-main>
              <q-input v-model="userName" type="number" float-label="一卡通" />
              <q-input v-model="passWord" type="password" float-label="密码" />
            </q-card-main>
            <q-card-actions align="around">
              <!-- <q-btn @click.native="open = false" label="Close" style="width:45%;">取消</q-btn> -->
              <q-btn @click.native="login()" class="full-width">登录</q-btn>
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
import { Toast } from 'quasar'
import Toolbar from '@/Toolbar.vue'
export default {
  comments: {
    Toolbar
  },
  data() {
    return {
      open: false,
      userName: '',
      passWord: ''
    }
  },
  created() {
    // this.$q.events.$on('shuzhi:login', state => {
    //   this.open = true
    //   console.log('App became', state)
    // })
  },
  methods: {
    login() {
      this.open = false
      Toast.create('成功登陆')
      this.$user.ID = '16120005'
      this.$user.login = true
      // this.$http
      //   .post('/api/Sys/Users/Login', {
      //     userName: this.userName,
      //     passWord: this.passWord
      //   })
      //   .then(response => {
      //     this.$user.ID = this.userName
      //     this.$user.name = '刘星'
      //     this.$user.login = true
      //     console.log(response)
      //     this.open = false
      //     Toast.create('成功登陆')
      //   })
      //
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
