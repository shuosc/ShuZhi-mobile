<template>
  <div>
    <q-tabs>
      <!-- Tabs - notice slot="title" -->
      <q-tab default slot="title" label="全部教室" name="tab-1" />
      <q-tab slot="title" label="我的预约" name="tab-2" />
      <!-- Targets -->
      <q-tab-pane name="tab-1">
        <q-card>
          <q-card-main>
            <span slot="subtitle">
              预约教室请留上海本地手机！当日20:00之前申请，当天审核；超过20:00，次日审核，请注意审核时间，以免耽误活动开展
            </span>
          </q-card-main>
        </q-card>
        <room-booking-card v-for="(room,index) in rooms" :room="room" :key="index">
        </room-booking-card>
      </q-tab-pane>
      <q-tab-pane name="tab-2">
        <q-card>
          <q-card-title>
            306
          </q-card-title>
          <q-list>
            <q-item>
              <q-item-side>
                <q-item-tile color="primary" icon="bookmark" />
              </q-item-side>
              <q-item-main>
                <q-item-tile label>教室类别</q-item-tile>
                <q-item-tile sublabel>本科人才协同培养中心</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side>
                <q-item-tile color="primary" icon="event seat" />
              </q-item-side>
              <q-item-main>
                <q-item-tile label>教室容量</q-item-tile>
                <q-item-tile sublabel>80</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side>
                <q-item-tile color="primary" icon="event" />
              </q-item-side>
              <q-item-main>
                <q-item-tile label>预约日期</q-item-tile>
                <q-item-tile sublabel>{{data}}</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side>
                <q-item-tile color="primary" icon="query builder" />
              </q-item-side>
              <q-item-main>
                <q-item-tile label>预约时间段</q-item-tile>
                <q-item-tile sublabel></q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-card>
      </q-tab-pane>
    </q-tabs>
    <q-modal v-model="open" minimized ref="basicModal">
      <q-card flat>
        <q-card-title>请填写您的联系方式完成报名</q-card-title>
        <!-- <q-card-separator /> -->
        <q-card-main>
          <q-input v-model="phone" type="number" float-label="联系电话" />
          <q-input v-model="Actname" type="Actname" float-label="活动名称" />
          <q-datetime v-model="date" float-label="预约日期" />
          <q-datetime-range v-model="timerange" type="time" class="full-width" float-label="预约时间" />
        </q-card-main>
        <q-card-actions align="around">
          <q-btn @click.native="open = false" label="Close" style="width:45%;">取消</q-btn>
          <q-btn @click.native="register()" label="Close" style="width:45%;">预约</q-btn>
        </q-card-actions>
      </q-card>
    </q-modal>
  </div>
</template>
<script>
import '../themes/docs-input.styl'
import RoomBookingCard from '@/RoomBookingCard.vue'
export default {
  components: {
    RoomBookingCard
  },
  data() {
    return {
      open: false,
      rooms: [
        {
          num: 306,
          type: '本科人才协同培养中心',
          cap: '80'
        },
        {
          num: 309,
          type: 'balala',
          cap: '180'
        }
      ]
    }
  },
  created() {
    this.create()
  },
  methods: {
    getMyBookings() {
      this.$http
        .get('/api/ChangDXX/ShiNCDYYXX/GetShiNCDYYXXByXueHao', {
          params: { xueHao: this.$user.ID, pageSize: 10, pageNumber: 1 }
        })
        .then(response => {
          console.log(response)
        })
    },
    getRooms() {},
    create() {
      this.$http
        .post('/api/ChangDXX/ShiWCDYYXX/CreateShiWCDYYXX', {
          ZuZXXId: '2',
          ChangDXXId: '1',
          YuYRQ: '2017-07-14',
          YuYSJD: '14:00-16:00',
          XueHao: this.$user.ID,
          XingMing: this.$user.name,
          LianXDH: '13818918989',
          HuoDMC: '测试',
          HuoDLX: '1',
          HuoDJJ: '测试5',
          HuoDRS: '80'
        })
        .then(response => {
          console.log(response)
        })
    }
  }
}
</script>

<style>

</style>
