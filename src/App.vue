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
        <q-modal v-model="open" minimized ref="basicModal" no-backdrop-dismiss>
          <q-card flat>
            <q-card-main>
              <q-input v-model="userName" type="number" float-label="一卡通" />
              <q-input v-model="passWord" type="password" float-label="密码" />
            </q-card-main>
            <q-card-actions align="around">
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
      passWord: '',
      name: ''
    }
  },
  created() {
    this.$q.events.$on('shuzhi:login', state => {
      this.open = true
      console.log('App became', state)
    })
  },
  methods: {
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
            console.log(response)
            this.open = false
            Toast.create('成功登陆')
          }
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
