<template>
  <q-tabs v-model="selectedTab">
    <!-- Tabs - notice slot="title" -->
    <q-tab default slot="title" label="就业办" name="tab-1" />
    <q-tab slot="title" label="学工办" name="tab-2" />
    <q-tab slot="title" label="教务处" name="tab-3" />
    <!-- Targets -->
    <q-tab-pane name="tab-1">
      <q-infinite-scroll :handler="loadMore" ref="infiniteScroll" style="text-align:center;">
        <news-card v-for="(news,index) in news_all" :news="news" :key="index" @click.native="onNewsClick(index)"></news-card>
        <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
      </q-infinite-scroll>
    </q-tab-pane>
    <q-tab-pane name="tab-2">
      <q-infinite-scroll :handler="loadMore" ref="infiniteScroll" style="text-align:center;">
        <news-card v-for="(news,index) in news_all" :news="news" :key="index"></news-card>
        <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
      </q-infinite-scroll>
    </q-tab-pane>
    <q-tab-pane name="tab-3">
      <q-infinite-scroll :handler="loadMore" ref="infiniteScroll" style="text-align:center;">
        <news-card v-for="(news,index) in news_all" :news="news" :key="index"></news-card>
        <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
      </q-infinite-scroll>
    </q-tab-pane>
    <q-modal v-model="open">
      <q-card>
        <q-card-title>{{news.title}}</q-card-title>
        <q-card-main v-html="news.detail"></q-card-main>
        <q-card-actions align="around">
          <q-btn color="primary" @click="open = false" class="full-width">关闭</q-btn>
        </q-card-actions>
      </q-card>
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
    getNews(done) {
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
          for (let item of response.data.data.xinw) {
            let news = {
              title: item.InfoTitle,
              detail: item.InfoContent
            }
            this.news_all.push(news)
            done()
          }
          this.count += 10
          this.page += 1
        })
    },
    loadMore: function(index, done) {
      this.getNews(done)
    }
  }
}
</script>

<style>

</style>
