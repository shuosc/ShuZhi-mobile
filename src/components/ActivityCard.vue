<template>
  <q-card class="full-width" style="padding-top:10px;">
    <q-card-media overlay-position="bottom">
      <img src="~statics/quasar-logo.png" height="150px">
      <!-- Notice the slot="overlay" -->
      <q-card-title slot="overlay">
        <div slot="subtitle" style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">{{activity.title}}</div>
      </q-card-title>
    </q-card-media>
    <q-card-separator />
    <q-list>
      <q-item>
        <q-item-side :avatar="activity.founder.avatar">
          <!-- http://quasar-framework.org/quasar-play/android/statics/boy-avatar.png -->
        </q-item-side>
        <q-item-main>
          <q-item-tile label>{{activity.founder.name}}</q-item-tile>
        </q-item-main>
        <q-item-side right>
          {{activity.views}} 次浏览
        </q-item-side>
      </q-item>
      <q-card-separator />
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
          <q-item-tile label>{{activity.start}} ~ {{activity.end}}</q-item-tile>
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
      <q-btn color="primary" flat style="width:45%;" @click="$emit('onFavoriteClick')">
        <q-icon name="star" :color="activity.favorite?'orange':'primary'" />{{activity.favorite?'已收藏':'收藏'}}</q-btn>
      <q-btn color="primary" flat style="width:45%;" @click="$emit('onRegisterClick')">
        <q-icon name="filter_vintage" :color="activity.register?'orange':'primary'" />{{activity.register?'已报名':'报名'}}</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    activity: Object
  }
}
</script>

<style>

</style>
