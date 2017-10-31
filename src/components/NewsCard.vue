<template>
  <q-card class="full-width" flat @click="open=true" style="margin:0;">
    <q-card-main style="text-align:left;">
      {{news.title}}
    </q-card-main>
    <q-card-separator />
    <q-modal v-model="open">
      <q-card>
        <q-card-title>{{news.title}}</q-card-title>
        <q-card-main v-html="news.detail"></q-card-main>
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
    news: Object
  },
  data() {
    return { open: false }
  }
}
</script>

<style>

</style>
