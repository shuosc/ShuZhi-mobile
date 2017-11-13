<template>
  <q-tabs v-model="selectedTab">
    <!-- Tabs - notice slot="title" -->
    <q-tab default slot="title" label="通知公告" name="tab-1" />
    <q-tab slot="title" label="学工办通告" name="tab-2" />
    <q-tab slot="title" label="教务通知" name="tab-3" />
    <q-tab slot="title" label="实习就业" name="tab-4" />
    <!-- Targets -->
    <q-tab-pane name="tab-1" class="no-padding">
      <!-- <q-toolbar slot="header">...</q-toolbar> -->
      <q-infinite-scroll :handler="loadMoreSHU" ref="infiniteScroll" style="text-align:center;">
        <news-card v-for="(news,index) in news_all" :news="news" :key="index" @click.native="onNewsClick(index)"></news-card>
        <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
      </q-infinite-scroll>
    </q-tab-pane>
    <q-tab-pane name="tab-2" class="no-padding">
      <q-infinite-scroll :handler="loadMoreXGB" ref="infiniteScroll" style="text-align:center;">
        <news-card v-for="(news,index) in news_all" :news="news" :key="index"></news-card>
        <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
      </q-infinite-scroll>
    </q-tab-pane>
    <q-tab-pane name="tab-3" class="no-padding">
      <q-infinite-scroll :handler="loadMoreJWC" ref="infiniteScroll" style="text-align:center;">
        <news-card v-for="(news,index) in news_all" :news="news" :key="index"></news-card>
        <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
      </q-infinite-scroll>
    </q-tab-pane>
    <q-tab-pane name="tab-4" class="no-padding">
      <q-infinite-scroll :handler="loadMoreJYB" ref="infiniteScrollJYB" style="text-align:center;">
        <news-card v-for="(news,index) in news_all" :news="news" :key="index"></news-card>
        <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
      </q-infinite-scroll>
    </q-tab-pane>
    <q-btn v-back-to-top v-back-to-top.animate="{offset: 500, duration: 200}" round color="teal-5" class="fixed-bottom-right" style="margin: 0 15px 15px 0">
      <q-icon name="keyboard_arrow_up" />
    </q-btn>
    <q-modal v-model="open">
      <q-modal-layout>
        <q-toolbar slot="header" inverted>
          <q-btn color="primary" flat @click="open = false">
            <q-icon name="close" />
            <q-toolbar-title>
              新闻详情
            </q-toolbar-title>
          </q-btn>
        </q-toolbar>
        <q-card>
          <q-card-title>{{news.title}}</q-card-title>
          <q-card-main v-html="news.detail"></q-card-main>
        </q-card>
      </q-modal-layout>
    </q-modal>
  </q-tabs>
</template>

<script>
import NewsCard from '@/NewsCard.vue'
export default {
  components: {
    NewsCard
  },
  data() {
    return {
      selectedTab: '',
      open: false,
      news_all: [],
      page: 1,
      news: {
        title: '',
        detail: ''
      }
    }
  },
  created() {},
  methods: {
    onNewsClick(index) {
      this.news = this.news_all[index]
      this.open = true
    },
    // getNews(done) {
    //   this.$http
    //     .get('/api/TongZGG/TongZGG/GetJiuYXW', {
    //       params: {
    //         infoTitle: '',
    //         infoType: '通知公告',
    //         pageSize: 20,
    //         pageNumber: this.page
    //       }
    //     })
    //     .then(response => {
    //       console.log(response)
    //       for (let item of response.data.data.xinw) {
    //         let news = {
    //           title: item.InfoTitle,
    //           detail: item.InfoContent
    //         }
    //         this.news_all.push(news)
    //         done()
    //       }
    //       this.count += 10
    //       this.page += 1
    //     })
    // },
    loadMoreJYB: function(index, done) {
      this.page = index
      this.$http
        .get('/api/TongZGG/TongZGG/GetJiuYXW', {
          params: {
            infoTitle: '',
            infoType: '通知公告',
            pageSize: 20,
            pageNumber: this.page
          }
        })
        .then(response => {
          console.log(response)
          if (response.data.data.xinw.length === 0) {
            this.$refs.infiniteScrollJYB.stop()
          }
          for (let item of response.data.data.xinw) {
            let news = {
              title: item.InfoTitle,
              detail: item.InfoContent
            }
            this.news_all.push(news)
            done()
          }
        })
    }
  }
}
</script>

<style>

</style>
