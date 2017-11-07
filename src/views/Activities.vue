<template>
  <div>
    <q-tabs v-model="selectedTab">
      <!-- Tabs - notice slot="title" -->
      <q-tab default slot="title" label="全部活动" name="tab-1" />
      <q-tab slot="title" label="我的收藏" name="tab-2" />
      <q-tab slot="title" label="我的活动" name="tab-3" />
      <!-- Targets -->
      <q-tab-pane name="tab-1">
        <!-- <q-pull-to-refresh :handler="refresher"> -->
        <q-card class="full-width">
          <q-card-main>
            <q-search v-model="search.text" placeholder="输入活动名称搜索" />
            <q-collapsible label="更多条件">
              <q-select v-model="search.categroy" float-label="活动分类" :options="options.categroy" />
              <q-select v-model="search.location" float-label="活动地点" :options="options.location" />
              <q-select v-model="search.date" float-label="活动时间" :options="options.date" />
              <q-select v-model="search.full" float-label="报名人数" :options="options.full" />
            </q-collapsible>
          </q-card-main>
        </q-card>
        <q-infinite-scroll :handler="loadMore" ref="infiniteScroll" style="text-align:center;">
          <activity-card v-for="(activity,index) in activities" :activity="activity" :key="index" @onFavoriteClick="onFavoriteClick(index)" @onRegisterClick="onRegisterClick(index)"></activity-card>
          <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
        </q-infinite-scroll>
        <!-- </q-pull-to-refresh> -->
      </q-tab-pane>
      <q-tab-pane name="tab-2">
        <q-infinite-scroll :handler="loadMore" ref="infiniteScroll" style="text-align:center;">
          <activity-card v-for="(activity,index) in activities" :activity="activity" :key="index" @onFavoriteClick="onFavoriteClick(index)" @onRegisterClick="onRegisterClick(index)"></activity-card>
          <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
        </q-infinite-scroll>
      </q-tab-pane>
      <q-tab-pane name="tab-3">
        <q-infinite-scroll :handler="loadMore" ref="infiniteScroll" style="text-align:center;">
          <activity-card v-for="(activity,index) in activities" :activity="activity" :key="index" @onFavoriteClick="onFavoriteClick(index)" @onRegisterClick="onRegisterClick(index)"></activity-card>
          <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
        </q-infinite-scroll>
      </q-tab-pane>
    </q-tabs>
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
  Dialog
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
        location: '0',
        date: '0',
        categroy: '0',
        full: '0'
      },
      index: 0,
      show: true,
      activities: [
        {
          title: '【学业辅导】2017版学生手册及诚信守则意见征询活动】',
          founder: {
            avatar:
              'http://quasar-framework.org/quasar-play/android/statics/boy-avatar.png',
            name: '王平'
          },
          views: 123,
          enrolls: 0,
          capacity: 30,
          location: '上海大学宝山校区 图书馆7Y3',
          favorite: true,
          register: false,
          start: '11/06 11:08',
          end: '11/06 11:08',
          detail: ''
        }
      ],
      options: {
        location: [
          { label: '全部', value: '0' },
          { label: '宝山', value: '1' },
          { label: '嘉定', value: '2' },
          { label: '延长', value: '3' }
        ],
        date: [
          { label: '全部', value: '0' },
          { label: '今天', value: '1' },
          { label: '明天', value: '2' },
          { label: '后天', value: '3' },
          { label: '最近一周', value: '4' },
          { label: '最近一月', value: '5' }
        ],
        categroy: [
          { label: '全部', value: '0' },
          { label: '学业辅导', value: '1' },
          { label: '师生互动', value: '2' },
          { label: '志愿服务', value: '3' },
          { label: '社会实践', value: '4' },
          { label: '创新创业', value: '5' },
          { label: '文体活动', value: '6' },
          { label: '素质拓展', value: '7' },
          { label: '国际交流', value: '8' }
        ],
        full: [
          { label: '全部', value: '0' },
          { label: '未满', value: '0' },
          { label: '已满', value: '0' }
        ]
      }
    }
  },
  created() {
    this.getCategories()
    this.getActivities()
  },
  watch: {
    search: {
      deep: true,
      handler: function() {
        this.getActivities()
      }
    }
  },
  methods: {
    register() {
      // let index = this.index
      Loading.show()
      Loading.hide()
      Dialog.create({
        title: '提示',
        message: '您已成功报名此活动',
        buttons: [
          {
            label: '确定',
            handler: () => {
              this.open = false
            }
          }
        ]
      })
    },
    onFavoriteClick(index) {
      this.index = index
      console.log('onFavoriteClick', index)
      if (this.activities[index].favorite) {
      } else {
      }
    },
    onRegisterClick(index) {
      console.log('onRegisterClick', index)
      this.index = index
      if (this.activities[index].register) {
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
    getActivities() {
      console.log('/search')
      this.$http
        .get('/api/HuoDong/HuoDXX/GetAllHuoDXX', {
          params: {
            huodmc: '',
            huodlb: 0,
            huodddxq: '全部',
            huodsj: '全部',
            baomzt: '全部',
            pageSize: 10,
            pageNumber: 1
          }
        })
        .then(response => {
          console.log(response)
        })
      // this.$http.get('/api/activities')
    },
    loadMore: function(index, done) {
      this.count += 10
      // done()
    },
    refresher(done) {
      console.log('done')
      done()
    }
  }
}
</script>

<style>

</style>
