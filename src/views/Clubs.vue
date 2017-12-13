<template>
  <div>
    <!-- <q-pull-to-refresh :handler="refresher"> -->
    <q-card class="full-width">
      <q-card-main>
        <q-search v-model="search.name" placeholder="输入组织名称搜索" />
        <q-collapsible label="更多条件">
          <q-select v-model="search.level" float-label="组织级别" :options="options.level" />
          <q-select v-model="search.categroy" float-label="组织类别" :options="options.categroy" />
        </q-collapsible>
      </q-card-main>
    </q-card>
    <q-infinite-scroll :handler="loadMore" ref="infiniteScroll" style="text-align:center;">
      <club-card v-for="(club,index) in clubs" :club="club" :key="index" @onFavoriteClick="onFavoriteClick(index)" @onRegisterClick="onRegisterClick(index)"></club-card>
      <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
    </q-infinite-scroll>
    <!-- </q-pull-to-refresh> -->
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
          <q-input v-model="special" type="text" float-label="特色特长" />
          <q-input v-model="reason" type="text" float-label="申请理由" />
        </q-card-main>
        <q-card-actions align="around">
          <q-btn @click.native="open = false" label="Close" style="width:45%;">取消</q-btn>
          <!-- <q-btn @click.native="register()" label="Close" style="width:45%;">报名</q-btn> -->
        </q-card-actions>
      </q-card>
    </q-modal>
  </div>
</template>

<script>
// import { Events } from 'quasar'
import {
  Loading,
  Dialog,
  Events
  // optional!, for example below
  // with custom spinner
  // QSpinnerGears
} from 'quasar'

import ClubCard from '@/ClubCard.vue'
export default {
  components: {
    ClubCard
  },
  data() {
    return {
      selectedTab: '',
      phone: '',
      email: '',
      open: false,
      count: 10,
      page: 1,
      search: {
        name: '',
        categroy: '0',
        level: '0'
      },
      index: 0,
      show: true,
      clubs: [],
      options: {
        level: [
          { label: '全部', value: '0' },
          { label: '校级', value: '1' },
          { label: '院级', value: '2' }
        ],
        categroy: [
          { label: '全部', value: '0' },
          { label: '公益实践类', value: '1' },
          { label: '体育健身类', value: '2' },
          { label: '文化艺术类', value: '3' },
          { label: '学术科技类', value: '4' },
          { label: '理论学习累', value: '5' },
          { label: '社会科学类', value: '6' }
        ]
      }
    }
  },
  created() {
    this.getClubs()
  },
  watch: {
    search: {
      deep: true,
      handler: function() {
        this.clubs = []
        this.getClubs()
      }
    }
  },
  methods: {
    register() {
      // let index = this.index
      Loading.show()
      this.$http
        .post('/api/ZuZhi/ZuZCY/CreateZuZBM', {
          ZuZXXId: this.clubs[this.index].id,
          XueHao: this.$user.ID,
          ShouJHM: this.phone,
          YouXiang: this.email,
          TeCTS: this.special,
          ShenQLY: this.reason
        })
        .then(response => {
          Loading.hide()
          Dialog.create({
            title: '提示',
            message: response.data.message,
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
    onFavoriteClick(index) {
      if (!this.$user.login) {
        Events.$emit('shuzhi:login')
        return
      }
      this.index = index
      console.log('onFavoriteClick', index)
      if (this.activities[index].favorite) {
      } else {
      }
    },
    onRegisterClick(index) {
      if (!this.$user.login) {
        Events.$emit('shuzhi:login')
        return
      }
      console.log('onRegisterClick', index)
      this.index = index
      this.open = true
    },
    getClubs(done) {
      this.$http
        .get('/api/ZuZhi/ZuZXX/GetAllZuZXX', {
          params: {
            zuzmc: '',
            zuzjb: '全部',
            zuzlb: '全部',
            pageSize: 10,
            pageNumber: this.page
          }
        })
        .then(response => {
          console.log(response)
          for (let item of response.data.data.zuzxx) {
            let club = {
              id: item.Id,
              name: item.ZuZMC,
              stars: parseInt(item.XingJi),
              charger: item.ZuZLDRXM,
              teacher: item.ZhiDLSXM,
              logo: item.ZuZLogo,
              enrolls: item.ChengYS,
              detail: item.ZuZJS,
              favorite: false,
              register: false
            }
            this.clubs.push(club)
          }
          this.count += 10
          this.page += 1
          done()
        })
    },
    loadMore: function(index, done) {
      this.getClubs(done)
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
