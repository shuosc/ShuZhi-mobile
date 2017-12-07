<template>
  <q-card>
          <q-card-title>
            {{room.name}}
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
          <q-modal v-model="open" minimized ref="basicModal">
            <q-card flat>
              <q-card-title>请填写信息完成预约
                <span slot="subtitle" v-if="roomaviliable === false ">无法预约请更换日期或时间段</span>
              </q-card-title>
              <q-card-main>
                <q-input v-model="name" float-label="姓名" />
                <q-input v-model="ID" type="number" float-label="学号" />
                <q-input v-model="phone" type="number" float-label="联系电话" />
                <q-input v-model="actname" float-label="活动名称" />
                <q-datetime v-model="date" float-label="预约日期" />
                <q-datetime-range v-model="timerange" type="time" class="full-width" float-label="预约时间" />
              </q-card-main>
              <q-card-actions align="around">
                <q-btn @click.native="open = false" label="Close" style="width:45%;" color="primary">取消</q-btn>
                <q-btn v-if="roomaviliable === true " @click.native="register()" label="Close" style="width:45%;" color="primary">预约</q-btn>
                <q-btn v-else :disable="!progress" color="negative">无法预约</q-btn>
              </q-card-actions>
            </q-card>
          </q-modal>
        </q-card>
</template>

<script>
import {Loading, Dialog} from 'quasar'
export default {
  props: {
    room: Object
  },
  data() {
    return {
      index: 0,
      open: false,
      name: '',
      ID: '',
      phone: '',
      date: '',
      actname: '',
      roomaviliable: true,
      timerange: {
        from: null,
        to: null
      },
      mintime: '6:00',
      maxtime: '18:00'
    }
  },
  methods: {
    register(room, timerange, date) {
      Loading.show()
      this.$http.post('/api/ChangDXX/ShiNCDYYXX/CreateShiNCDYYXX', {
        ZuZXXId: '2',
        ChangDXXId: this.room.id,
        YuYSRQ: this.data,
        YuYSJD: this.timerange.from - this.timerange.to,
        XueHao: this.ID,
        XingMing: this.name,
        LianXDH: this.phone,
        HuoDMC: this.actname,
        HuoDLX: '1',
        HuoDJJ: '测试5',
        HuoDRS: '80'
      })
        .then(resposne => {
          Loading.hide()
          Dialog.create({
            title: '提示',
            message: resposne.data.message,
            buttons: [
              {
                label: '确定',
                handler: () => {
                  this.open = false
                }
              }
            ]
          })
        })
    }
  }
}
</script>

<style>

</style>