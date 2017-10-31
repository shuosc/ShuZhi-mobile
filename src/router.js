import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/Home.vue'
import Activities from '@/Activities.vue'
import RoomBooking from '@/RoomBooking.vue'
import News from '@/News.vue'
import Clubs from '@/Clubs.vue'
import Query from '@/Query.vue'
Vue.use(VueRouter)

/*
 * Uncomment this section and use "load()" if you want
 * to lazy load routes.
function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}
*/

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    { path: '/', component: Home },
    { path: '/activities', component: Activities },
    { path: '/room-booking', component: RoomBooking },
    { path: '/news', component: News },
    { path: '/clubs', component: Clubs },
    { path: '/query', component: Query }
  ]
})
