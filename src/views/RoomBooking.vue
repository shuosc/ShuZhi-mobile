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
        <room-booking-card v-for="(room,index) in rooms" :room="room" :key="index" >
        </room-booking-card>
      </q-tab-pane>
      <q-tab-pane name="tab-2">
        <q-card v-for="(myroom,index) in myrooms" :myroom="myroom" :key="index">
          <q-card-title>
            {{myroom.roomname}}
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
                <q-item-tile sublabel>{{myroom.cap}}</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side>
                <q-item-tile color="primary" icon="event" />
              </q-item-side>
              <q-item-main>
                <q-item-tile label>预约日期</q-item-tile>
                <q-item-tile sublabel>{{myroom.data}}</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side>
                <q-item-tile color="primary" icon="query builder" />
              </q-item-side>
              <q-item-main>
                <q-item-tile label>预约时间段</q-item-tile>
                <q-item-tile sublabel>{{myroom.time}}</q-item-tile>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side>
                <q-item-tile color="primary" icon="autorenew" />
              </q-item-side>
              <q-item-main>
                <q-item-tile label>预约状态</q-item-tile>
                <q-item-tile sublabel>{{myroom.state}}</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-card>
      </q-tab-pane>
    </q-tabs>
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
      rooms: [],
      myrooms: []
    }
  },
  created() {
    this.getRooms()
    this.getMyBookings()
    this.getinfo()
  },
  methods: {
    getMyBookings() {
      this.$http.get('/api/ChangDXX/ShiNCDYYXX/GetShiNCDYYXXByXueHao', {
        params: { xueHao: this.$user.ID, pageSize: 10, pageNumber: 1 }
      })
        .then(response => {
          console.log(response)
          for (let item of response.data.data.shincdyyxx) {
            let myroom = {
              roomname: item.ChangDMC,
              ID: item.Id,
              state: item.ShenHZT,
              name: item.XingMing,
              data: item.YuYRQ,
              time: item.YuYSJD,
              actname: item.HuoDLBName,
              studentId: item.XueHao,
              cap: item.ChangDRL
            }
            this.myrooms.push(myroom)
          }
        })
    },
    getRooms() {
      this.$http.get('/api/ChangDXX/ChangDXX/GetShiNCDXX', {
        params: { pageSize: 10, pageNumber: 1 }
      })
        .then(response => {
          console.log(response)
          for (let item of response.data.data.changdxx) {
            let room = {
              cap: item.ChangDRL,
              ID: item.id,
              name: item.ChangDMC,
              aviliable: item.ChangDZT,
              type: item.ChangDSX
            }
            this.rooms.push(room)
          }
        })
    }
  }
}
</script>

<style>

</style>
