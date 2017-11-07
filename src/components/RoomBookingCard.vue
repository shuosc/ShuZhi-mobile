<template>
  <q-card>
          <q-card-title>
            {{room.num}}
          </q-card-title>
          <q-list>
            <q-item>
              <q-item-side>
                <q-item-tile color="primary" icon="bookmark" />
              </q-item-side>
              <q-item-main>
                <q-item-tile label>教室类别</q-item-tile>
                <q-item-tile sublabel>{{room.type}}</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side>
                <q-item-tile color="primary" icon="event seat" />
              </q-item-side>
              <q-item-main>
                <q-item-tile label>教室容量</q-item-tile>
                <q-item-tile sublabel>{{room.cap}}</q-item-tile>
              </q-item-main>
            </q-item>
            <q-btn color="primary" class="full-width" @click="open = true">
              预约
            </q-btn>
          </q-list>
        </q-card>
</template>

<script>
export default {
  props: {
    room: Object
  },
  data() {
    return {
      index: 0,
      open: false,
      phone: '',
      data: '',
      timerange: {
        from: null,
        to: null
      },
      mintime: '6:00',
      maxtime: '18:00'
    }
  }
}
</script>

<style>

</style>