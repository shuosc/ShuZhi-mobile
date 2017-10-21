<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <header></header>
    <main>
      <q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100">
        <q-toolbar slot="header">
          <!-- <q-btn flat @click="$refs.layout.toggleLeft()">
            <q-icon name="menu" />
          </q-btn> -->
          <q-toolbar-title>
            Layout Header
            <!-- <span slot="subtitle">Optional subtitle</span> -->
          </q-toolbar-title>
          <!-- <q-btn flat @click="$refs.layout.toggleRight()">
            <q-icon name="menu" />
          </q-btn> -->
        </q-toolbar>
        <!-- Navigation -->
        <!-- <q-tabs slot="navigation">
          <q-route-tab slot="title" icon="view_quilt" to="/test-layout/about" replace hide="icon" label="About" />
          <q-route-tab slot="title" icon="view_day" to="/test-layout/toolbar" replace hide="icon" label="Toolbar" />
          <q-route-tab slot="title" icon="view_day" to="/test-layout/tabs" replace label="Tabs" />
          <q-route-tab slot="title" icon="input" to="/test-layout/drawer" replace label="Drawer" />
        </q-tabs> -->
        <!-- Left Side Panel -->
        <!-- <div slot="left">
          <q-list no-border link inset-separator>
            <q-list-header>Essential Links</q-list-header>
            <q-side-link item to="/docs">
              <q-item-side icon="school" />
              <q-item-main label="Docs" sublabel="quasar-framework.org" />
            </q-side-link>
            <q-side-link item to="/forum">
              <q-item-side icon="record_voice_over" />
              <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
            </q-side-link>
            <q-side-link item to="/chat">
              <q-item-side icon="chat" />
              <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
            </q-side-link>
            <q-side-link item to="/twitter">
              <q-item-side icon="rss feed" />
              <q-item-main label="Twitter" sublabel="@quasarframework" />
            </q-side-link>
          </q-list>
        </div> -->
        <!-- Right Side Panel -->
        <!-- <div slot="right">
          Right Side of Layout
        </div> -->
        <!-- sub-routes get injected here: -->
        <router-view />
        <!-- Footer -->
        <!-- <q-toolbar slot="footer">
          <q-toolbar-title>
            Layout Footer
          </q-toolbar-title>
        </q-toolbar> -->
      </q-layout>
      <!-- <img src="~assets/quasar-logo-full.svg" alt="Quasar PWA"> -->
      <!-- <router-link to="/activities">activities</router-link>
      <router-link to="/room-booking">roombooking</router-link> -->
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

// main
//   text-align center
//   margin-top 40px

// header
//   margin 0
//   height 10px
//   background-color $primary
</style>
