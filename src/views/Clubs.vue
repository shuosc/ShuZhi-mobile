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
      search: {
        name: '',
        categroy: '0',
        level: '0'
      },
      index: 0,
      show: true,
      clubs: [
        {
          name: '【组织】日本与同好会',
          stars: 5,
          charger: '董永杰',
          teacher: '董永杰',
          enrolls: 1000,
          detail: '日语同好会成立于2009年5月，由外国语学院日语系学生自发组织创建，面向全校招募会员。至今为止会员人数已经超过1000人，其中包括日语专业的学生和其他对日语学习和日本文化感兴趣的学生。秉承“因为你们，我们将做的更好”这一宗旨，日语同好会已在老师的指导和学生的支持下开展了许多丰富多彩的活动，社团目标是希望能向更多的同学提供一个将日语学习与各种有趣的活动相结合，为喜欢日语、对日本文化感兴趣的同学提供一个集聚一堂研究日语、各抒己见、展示才艺的平台。通过寓教于乐，从而实现快乐学习日语的目标！',
          favorite: true,
          register: false
        }
      ],
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
    getActivities() {
      console.log('/search')
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
