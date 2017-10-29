<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <header></header>
    <main>
      <q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100" reveal >
        <q-toolbar slot="header">
          <q-btn flat @click="$router.push('/')">
            <q-icon name="home" />
          </q-btn>
          <q-toolbar-title>
            孰知网
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
  }
}
</script>

<style lang="stylus">
@import '~variables'
</style>
