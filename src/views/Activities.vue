<template>
  <div>
    <q-tabs v-model="selectedTab" style="z-index:20;">
      <!-- Tabs - notice slot="title" -->
      <q-tab default slot="title" label="全部活动" name="tab-1" />
      <!-- <q-tab slot="title" label="我的收藏" name="tab-2" /> -->
      <q-tab slot="title" label="我的活动" name="tab-3" />
      <!-- Targets -->
      <q-tab-pane name="tab-1">
        <q-pull-to-refresh :handler="refresher">
          <q-card class="full-width">
            <q-card-main>
              <q-search v-model="search.name" placeholder="输入活动名称搜索" />
              <q-collapsible label="更多条件">
                <q-select v-model="search.categroy" float-label="活动分类" :options="options.categroy" />
                <q-select v-model="search.location" float-label="活动地点" :options="options.location" />
                <q-select v-model="search.date" float-label="活动时间" :options="options.date" />
                <q-select v-model="search.full" float-label="报名人数" :options="options.full" />
              </q-collapsible>
            </q-card-main>
          </q-card>
          <q-infinite-scroll :handler="loadMoreActivities" ref="activitiesInfiniteScroll" style="text-align:center;">
            <activity-card v-for="(activity,index) in activities" :activity="activity" :key="index" @onFavoriteClick="onFavoriteClick(index,activity)" @onRegisterClick="onRegisterClick(index,activity)"></activity-card>
            <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
          </q-infinite-scroll>
        </q-pull-to-refresh>
      </q-tab-pane>
      <!-- <q-tab-pane name="tab-2"> -->
      <!-- <q-infinite-scroll :handler="loadMore" ref="infiniteScroll" style="text-align:center;"> -->
      <!-- <activity-card v-for="(activity,index) in activities" :activity="favoriteActivity" :key="index" @onFavoriteClick="onFavoriteClick(index)" @onRegisterClick="onRegisterClick(index)"></activity-card> -->
      <!-- <q-spinner-dots slot="message" :size="40"></q-spinner-dots> -->
      <!-- </q-infinite-scroll> -->
      <!-- </q-tab-pane> -->
      <q-tab-pane name="tab-3">
        <q-pull-to-refresh :handler="enrollsRefresher">
          <q-infinite-scroll :handler="loadMoreEnrollsActivities" ref="enrollsActivitiesInfiniteScroll" style="text-align:center;">
            <activity-card v-for="(activity,index) in enrollsActivities" :activity="activity" :key="index" @onFavoriteClick="onFavoriteClick(index,activity)" @onRegisterClick="onRegisterClick(index,activity)"></activity-card>
            <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
          </q-infinite-scroll>
        </q-pull-to-refresh>
      </q-tab-pane>
    </q-tabs>
    <q-btn v-back-to-top v-back-to-top.animate="{offset: 500, duration: 200}" round color="teal-5" class="fixed-bottom-right" style="margin: 0 15px 15px 0">
      <q-icon name="keyboard_arrow_up" />
    </q-btn>
    <q-modal v-model="open" minimized ref="basicModal">
      <q-card flat>
        <q-card-title>请填写您的联系方式完成报名</q-card-title>
        <!-- <q-card-separator /> -->
        <q-card-main>
          <q-input v-model="phone" type="number" float-label="联系电话" />
          <q-input v-model="email" type="email" float-label="联系邮箱" />
        </q-card-main>
        <q-card-actions align="around">
          <q-btn @click.native="open = false" label="Close" style="width:45%;">取消</q-btn>
          <q-btn @click.native="register()" label="Close" style="width:45%;">报名</q-btn>
        </q-card-actions>
      </q-card>
    </q-modal>
  </div>
</template>

<script>
import {
  Loading,
  Dialog,
  Events
  // optional!, for example below
  // with custom spinner
  // QSpinnerGears
} from 'quasar'

import ActivityCard from '@/ActivityCard.vue'
export default {
  components: {
    ActivityCard
  },
  data() {
    return {
      selectedTab: '',
      phone: '',
      email: '',
      open: false,
      count: 10,
      search: {
        name: '',
        location: '全部',
        date: '全部',
        categroy: '全部',
        full: '全部'
      },
      index: 0,
      show: true,
      activities: [],
      activity: {},
      favoriteActivities: [],
      enrollsActivities: [],
      page: 0,
      options: {
        location: [
          { label: '全部', value: '全部' },
          { label: '宝山', value: '宝山' },
          { label: '嘉定', value: '嘉定' },
          { label: '延长', value: '延长' }
        ],
        date: [
          { label: '全部', value: '全部' },
          { label: '今天', value: '今天' },
          { label: '明天', value: '明天' },
          { label: '后天', value: '后天' },
          { label: '最近一周', value: '最近一周' },
          { label: '最近一月', value: '最近一月' }
        ],
        categroy: [
          { label: '全部', value: '全部' },
          { label: '学业辅导', value: '学业辅导' },
          { label: '师生互动', value: '师生互动' },
          { label: '志愿服务', value: '志愿服务' },
          { label: '社会实践', value: '社会实践' },
          { label: '创新创业', value: '创新创业' },
          { label: '文体活动', value: '文体活动' },
          { label: '素质拓展', value: '素质拓展' },
          { label: '国际交流', value: '国际交流' }
        ],
        full: [
          { label: '全部', value: '全部' },
          { label: '未满', value: '未满' },
          { label: '已满', value: '已满' }
        ]
      }
    }
  },
  created() {
    // this.getCategories()
    // this.getActivities()
    if (!this.$user.login) {
      Events.$emit('shuzhi:login')
    }
  },
  watch: {
    search: {
      deep: true,
      handler: function() {
        this.refresher()
      }
    }
  },
  methods: {
    register() {
      // let index = this.index
      Loading.show()
      this.$http
        .post('/api/HuoDong/HuoDBMXX/CreateHuoDBM', {
          HuoDXXId: this.activity.id,
          XueHao: this.$user.ID,
          ShouJHM: this.phone,
          Email: this.email
        })
        .then(resposne => {
          Loading.hide()
          Dialog.create({
            title: '提示',
            message: resposne.data.message,
            buttons: [
              {
                label: '确定',
                handler: () => {
                  this.open = false
                }
              }
            ]
          })
        })
    },
    onFavoriteClick(index, activity) {
      if (!this.$user.login) {
        Events.$emit('shuzhi:login')
        return
      }
      this.index = index
      console.log('onFavoriteClick', index)
      if (activity.favorite) {
      } else {
      }
    },
    onRegisterClick(index, activity) {
      if (!this.$user.login) {
        Events.$emit('shuzhi:login')
        return
      }
      console.log('onRegisterClick', index)
      this.index = index
      this.activity = activity
      if (activity.register) {
        Dialog.create({
          title: '提示',
          message: '取消报名此活动吗',
          buttons: [
            {
              label: '确定',
              handler: () => {
                this.$http
                  .post('/api/HuoDong/HuoDBMXX/DeleteHuoDBM', {
                    params: { hdmid: activity.HuoDBMXXId }
                  })
                  .then(response => {
                    console.log(response)
                  })
                this.enrollsRefresher()
              }
            },
            {
              label: '取消',
              handler: () => {
                this.enrollsRefresher()
              }
            }
          ]
        })
      } else {
        this.open = true
      }
    },
    getCategories() {
      console.log('cate')
      this.$http.get('/api/HuoDong/HuoDLB/GetHuoDLB').then(response => {
        console.log(response)
      })
    },
    loadMoreEnrollsActivities: function(index, done) {
      this.page = index
      this.$http
        .get('/api/HuoDong/HuoDBMXX/GetHuoDBMXX', {
          params: { xueHao: this.$user.ID, pageSize: 10, pageNumber: this.page }
        })
        .then(response => {
          if (response.data.data.huodxx.length === 0) {
            this.$refs.enrollsActivitiesInfiniteScroll.stop()
            done()
            return
          }
          for (let rawActivity of response.data.data.huodxx) {
            this.enrollsActivities.push({
              id: rawActivity.Id,
              title: rawActivity.HuoDMC,
              founder: {
                avatar: `http://www.sz.shu.edu.cn/Resources/TouXiang/${rawActivity.TouXZP}`,
                name: rawActivity.CreateName
              },
              poster: `http://www.sz.shu.edu.cn/Resources/HuoDTP/${rawActivity.HaiBTP}`,
              views: rawActivity.LiuLRS,
              enrolls: rawActivity.BaoMRS,
              favoriteTime: rawActivity.ShouCRS,
              capacity: rawActivity.BaoMXZ,
              location: rawActivity.HuoDDDXQ,
              favorite: true,
              register: true,
              start: rawActivity.HuoDKSSJ,
              end: rawActivity.HuoDJSSJ,
              detail: rawActivity.HuoDJJ,
              notice: rawActivity.BaoMXuZ
            })
          }
          done()
        })
    },
    loadMoreActivities: function(index, done) {
      this.count += 10
      this.page = index
      this.$http
        .get('/api/HuoDong/HuoDXX/GetAllHuoDXX', {
          params: {
            huodmc: this.search.name,
            huodlb: 0,
            huodddxq: this.search.location,
            huodsj: this.search.date,
            baomzt: this.search.full,
            pageSize: 10,
            pageNumber: this.page
          }
        })
        .then(response => {
          console.log(response.data.data)
          if (response.data.data.huodxx.length === 0) {
            this.$refs.activitiesInfiniteScroll.stop()
            done()
            return
          }
          for (let rawActivity of response.data.data.huodxx) {
            this.activities.push({
              id: rawActivity.Id,
              title: rawActivity.HuoDMC,
              founder: {
                avatar: `http://www.sz.shu.edu.cn/Resources/TouXiang/${rawActivity.TouXZP}`,
                name: rawActivity.CreateName
              },
              poster: `http://www.sz.shu.edu.cn/Resources/HuoDTP/${rawActivity.HaiBTP}`,
              views: rawActivity.LiuLRS,
              enrolls: rawActivity.BaoMRS,
              favoriteTime: rawActivity.ShouCRS,
              capacity: rawActivity.BaoMXZ,
              location: rawActivity.HuoDDDXQ,
              favorite: true,
              register: false,
              start: rawActivity.HuoDKSSJ,
              end: rawActivity.HuoDJSSJ,
              detail: rawActivity.HuoDJJ,
              notice: rawActivity.BaoMXuZ
            })
          }
          done()
        })
    },
    activitiesInfiniteScrollReset() {
      this.$refs.activitiesInfiniteScroll.reset()
      this.$refs.activitiesInfiniteScroll.resume()
    },
    enrollsActivitiesInfiniteScrollReset() {
      this.$refs.enrollsActivitiesInfiniteScroll.reset()
      this.$refs.enrollsActivitiesInfiniteScroll.resume()
    },
    refresher(done) {
      this.activities = []
      this.activitiesInfiniteScrollReset()
      if (done !== undefined) {
        done()
      }
    },
    enrollsRefresher(done) {
      this.enrollsActivities = []
      this.enrollsActivitiesInfiniteScrollReset()
      if (done !== undefined) {
        done()
      }
    }
  }
}
</script>

<style>

</style>
