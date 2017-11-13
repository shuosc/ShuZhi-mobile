<template>
  <q-card class="full-width" style="padding-top:10px;">
    <q-card-title>
      <div style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">{{activity.title}}</div>
    </q-card-title>
    <q-card-media overlay-position="bottom">
      <q-parallax :src="activity.poster" class="full-width" :height="150" >
        <div slot="loading">Loading...</div>
      </q-parallax>
    </q-card-media>
    <q-card-separator />
    <q-list dense no-border>
      <q-item>
        <q-item-side>
          <q-item-tile color="primary" icon="people" />
        </q-item-side>
        <q-item-main>
          <q-item-tile label>{{activity.enrolls}} / {{activity.capacity}}已报名</q-item-tile>
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-side>
          <q-item-tile color="primary" icon="watch_later" />
        </q-item-side>
        <q-item-main>
          <q-item-tile label>{{activity.start.slice(5,10)}} {{activity.start.slice(11,16)}}~{{activity.end.slice(5,10)}} {{activity.end.slice(11,16)}}</q-item-tile>
        </q-item-main>
      </q-item>
      <q-item>
        <q-item-side>
          <q-item-tile color="primary" icon="room" />
        </q-item-side>
        <q-item-main>
          <q-item-tile label>{{activity.location}}</q-item-tile>
        </q-item-main>
      </q-item>
    </q-list>
    <q-card-actions align="around">
      <!-- <q-btn color="primary" flat style="width:31%;" @click="$emit('onFavoriteClick')">
              <q-icon name="star" :color="activity.favorite?'orange':'primary'" />{{activity.favorite?'已收藏':'收藏'}}</q-btn> -->
      <q-btn color="primary" flat style="width:45%;" @click="open = true">
        <q-icon name="star" :color="activity.favorite?'orange':'primary'" />查看简介</q-btn>
      <q-btn color="primary" flat style="width:45%;" @click="$emit('onRegisterClick')">
        <q-icon name="filter_vintage" :color="activity.register?'orange':'primary'" />{{activity.register?'已报名':'报名'}}</q-btn>
    </q-card-actions>

    <q-modal v-model="open">
      <q-card>
        <q-card-title>{{activity.title}}</q-card-title>
        <q-card-main v-html="activity.detail"></q-card-main>
        <q-card-actions align="around">
          <q-btn color="primary" @click="open = false" class="full-width">关闭</q-btn>
        </q-card-actions>
      </q-card>
    </q-modal>
  </q-card>
</template>

<script>
export default {
  props: {
    activity: Object
  },
  data() {
    return { open: false }
  }
}
</script>

<style>

</style>
