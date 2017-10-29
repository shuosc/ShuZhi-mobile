<template>
<<<<<<< HEAD
  <div>
    <q-tabs>
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
        <q-infinite-scroll :handler="loadMore" ref="infiniteScroll">
          <q-card v-for="i in count" class="full-width" style="padding-top:10px;">
            <q-card-media overlay-position="bottom">
              <img src="~statics/quasar-logo.png" height="150px">
              <!-- Notice the slot="overlay" -->
              <q-card-title slot="overlay">
                <div slot="subtitle" style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">【学业辅导】2017版学生手册及诚信守则意见征询活动</div>
              </q-card-title>
            </q-card-media>
            <q-card-separator />
            <q-list>
              <q-item>
                <q-item-side avatar="http://quasar-framework.org/quasar-play/android/statics/boy-avatar.png">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>王平</q-item-tile>
                </q-item-main>
                <q-item-side right>
                  123 次浏览
                </q-item-side>
              </q-item>
              <q-card-separator />
              <q-item>
                <q-item-side>
                  <q-item-tile color="primary" icon="people" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>0/30已报名</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item>
                <q-item-side>
                  <q-item-tile color="primary" icon="watch_later" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>11-01 16:46 ~ 11-01 16:51</q-item-tile>
                </q-item-main>
              </q-item>
              <q-item>
                <q-item-side>
                  <q-item-tile color="primary" icon="room" />
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>上海大学宝山校区 图书馆7Y3</q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
            <!-- <q-card-main></q-card-main> -->
            <q-card-actions align="around">
              <q-btn color="primary" flat style="width:45%;">
                <q-icon name="star" color="orange" />收藏</q-btn>
              <q-btn color="primary" flat style="width:45%;" @click="open = true">
                <q-icon name="filter_vintage" />报名</q-btn>
            </q-card-actions>
          </q-card>
          <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
        </q-infinite-scroll>
        <!-- </q-pull-to-refresh> -->
      </q-tab-pane>
      <q-tab-pane name="tab-2">Tab Two</q-tab-pane>
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
          <q-btn @click.native="open = false" label="Close" style="width:45%;">报名</q-btn>
        </q-card-actions>
      </q-card>
    </q-modal>
  </div>
=======
    <div>
        <q-tabs>
            <!-- Tabs - notice slot="title" -->
            <q-tab slot="title" label="全部教室" name="tab-1" />
            <q-tab slot="title" label="我的预约" name="tab-2" />
            <!-- Targets -->
            <q-tab-pane name="tab-1">Tab One</q-tab-pane>
            <q-tab-pane name="tab-2">Tab Two</q-tab-pane>
        </q-tabs>
    </div>
>>>>>>> 8e2f74644425b6a4fd0653954f20099499f0c832
</template>

<script>
export default {
  data () {
    return {
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
      show: true,
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
  methods: {
    loadMore: function (index, done) {
      this.count += 10
      done()
    },
    refresher (done) {
      console.log('done')
      done()
    }
  }
}
</script>

<style>

</style>
