<template>
  <q-card class="full-width" style="padding-top:10px;">
    <div class="row">
      <div class="col-5">
        <q-card-media overlay-position="bottom">
          <img :src="`http://www.sz.shu.edu.cn/Resources/ZuZTX/${club.logo}`" style="height:160px">
          <q-card-title slot="overlay">
            <div slot="subtitle" style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">{{club.name}}</div>
          </q-card-title>
        </q-card-media>
        <q-card-separator />
      </div>
      <div class="col-7">
        <q-list no-border>
          <q-item>
            <q-item-side>
              <q-item-tile color="primary" icon="person" />
            </q-item-side>
            <q-item-main>
              <q-item-tile label>{{club.charger}}</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-side>
              <q-item-tile color="primary" icon="person" />
            </q-item-side>
            <q-item-main>
              <q-item-tile label>{{club.teacher}}</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-side>
              <q-item-tile color="primary" icon="people" />
            </q-item-side>
            <q-item-main>
              <q-item-tile label>{{club.enrolls}}人</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-side>
              <q-item-tile color="primary" icon="star" />
            </q-item-side>
            <q-item-main>
              <q-rating slot="subtitle" v-model="club.stars" :max="5" />
            </q-item-main>
          </q-item>
        </q-list>
      </div>
    </div>
    <q-card-actions align="around">
      <q-btn color="primary" flat style="width:45%;" @click="open = true">查看简介</q-btn>
      <q-btn color="primary" flat style="width:45%;" @click="$emit('onRegisterClick')">
        {{club.register?'已报名':'申请加入'}}</q-btn>
    </q-card-actions>
    <q-modal v-model="open">
      <q-card>
        <q-card-title>{{club.name}}</q-card-title>
        <q-card-main v-html="club.detail"></q-card-main>
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
    club: Object
  },
  data() {
    return { open: false }
  }
}
</script>

<style>

</style>
