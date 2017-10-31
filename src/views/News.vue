<template>
  <div>
    <q-pull-to-refresh :handler="refresher">
      <q-infinite-scroll :handler="loadMore" ref="infiniteScroll" style="text-align:center;">
        <div v-for="i in 10">
        <news-card v-for="(news,index) in news_all" :news="news" :key="index" @onFavoriteClick="onFavoriteClick(index)" @onRegisterClick="onRegisterClick(index)"></news-card>
        </div>
        <q-spinner-dots slot="message" :size="40"></q-spinner-dots>
      </q-infinite-scroll>
    </q-pull-to-refresh>
  </div>
</template>

<script>
import NewsCard from '@/NewsCard.vue'
export default {
  components: {
    NewsCard
  },
  data() {
    return {
      news_all: [
        {
          title: '上海大学第二十届运动会暨第十二届教工运动会开幕式举行',
          date: '2017-10-30 00:00:00',
          source: '体育学院 ',
          detail: `<div>
     <p class="vsbcontent_start">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
     <div>
      <p class="vsbcontent_img">
       <img width="600" height="314" alt="" src="/__local/F/71/31/EA1E37CE0B0C50CE5E8819BF451_4A9D0849_19C1C.jpg" border="0" vsbhref="vurl" vurl="/_vsl/F7131EA1E37CE0B0C50CE5E8819BF451/4A9D0849/19C1C?e=.jpg" vheight="314" vwidth="600" orisrc="/__local/F/71/31/EA1E37CE0B0C50CE5E8819BF451_4A9D0849_19C1C.jpg" class="img_vsb_content"></p>
     </div>
     <p>10月29日上午，上海大学第二十届运动会暨第十二届教工运动会开幕式在校本部东区田径场举行。校领导夏小和、徐旭、龚思怡、段勇、吴明红、聂清、欧阳华，以及学校各部处、院系的领导、老师出席了本届运动会的开幕式。开幕式由副校长聂清主持。</p>
     <div>
      <p class="vsbcontent_img">
       <img width="600" height="374" alt="" src="/__local/E/F8/F5/93BEF58FB4B729E45F255DA8485_F198352E_24F65.jpg" border="0" vsbhref="vurl" vurl="/_vsl/EF8F593BEF58FB4B729E45F255DA8485/F198352E/24F65?e=.jpg" vheight="374" vwidth="600" orisrc="/__local/E/F8/F5/93BEF58FB4B729E45F255DA8485_F198352E_24F65.jpg" class="img_vsb_content"></p>
     </div>
     <p>开幕式开始，校党委副书记、副校长徐旭为运动会授旗。接着，国旗队、校旗队、红旗队与29个学院、系统的运动员方阵踏着矫健的步伐依次入场。他们饱满的精神、具有创意与特色的展示，获得了观众席上的阵阵掌声。接下来，街舞社、击剑社、跆拳道社和高水平武术队的表演给观众带来了不同的感受。时尚动感的街舞表演，让人感受到了青春的力量、创造的激情；气质高雅的击剑表演，展现了互相尊重、崇尚公平的礼节；跆拳道社的特技展示，表现出了韵律之美、力量之美、气势之美；武术学子身手矫健，一招一式刚劲有力，气势如虹、虎虎生风，展示了上大学子风采，弘扬了中国传统体育文化。</p>
    </div>`
        }
      ]
    }
  },
  methods: {
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
