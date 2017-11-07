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
          <q-btn flat @click="$refs.layout.toggleRight()">
            <q-icon name="more vert" />
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
        <q-modal v-model="open" minimized ref="basicModal">
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
import Toolbar from '@/Toolbar.vue'
export default {
  comments: {
    Toolbar
  },
  data() {
    return {
      open: true,
      userName: '',
      passWord: ''
    }
  },
  created() {},
  methods: {
    login() {
      this.$http
        .post('/api/Sys/Users/Login', {
          userName: this.userName,
          passWord: this.passWord
        })
        .then(response => {
          console.log(response)
        })
      this.open = false
      //
    }
  }
}
</script>

<style lang="stylus">
@import '~variables';
</style>
