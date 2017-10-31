<template>
<div>
  <div style="display:flex;justify-content:space-around;">
   <q-card flat @click="$router.push('/activities')">
      <q-card-title>
        <div style="color: #a2e2e3">
          <!-- inheriting color #a2e2e3: -->
          <q-icon name="filter_vintage" size="5rem" />
        </div>
      </q-card-title>
      <q-card-separator />
      <q-card-main style="text-align:center;">
        通知通告
      </q-card-main>
    </q-card>
    <q-card flat @click="$router.push('/activities')">
      <q-card-title>
        <div style="color: #a2e2e3">
          <!-- inheriting color #a2e2e3: -->
          <q-icon name="filter_vintage" size="5rem" />
        </div>
      </q-card-title>
      <q-card-separator />
      <q-card-main style="text-align:center;">
        校园活动
      </q-card-main>
    </q-card>
  </div>
  <div style="display:flex;justify-content:space-around;">
    <q-card flat @click="$router.push('/activities')">
      <q-card-title>
        <div style="color: #a2e2e3">
          <!-- inheriting color #a2e2e3: -->
          <q-icon name="filter_vintage" size="5rem" />
        </div>
      </q-card-title>
      <q-card-separator />
      <q-card-main style="text-align:center;">
        校园查询
      </q-card-main>
    </q-card>
    <q-card flat @click="$router.push('/room-booking')">
      <q-card-title>
        <div style="color: #a2e2e3">
          <!-- inheriting color #a2e2e3: -->
          <q-icon name="alarm" size="5rem" />
        </div>
      </q-card-title>
      <q-card-separator />
      <q-card-main style="text-align:center;">
        教室预约
      </q-card-main>
    </q-card>
  </div>
  <div style="display:flex;justify-content:space-around;">
    <q-card flat @click="$router.push('/activities')">
      <q-card-title>
        <div style="color: #a2e2e3">
          <!-- inheriting color #a2e2e3: -->
          <q-icon name="filter_vintage" size="5rem" />
        </div>
      </q-card-title>
      <q-card-separator />
      <q-card-main style="text-align:center;">
        社团组织
      </q-card-main>
    </q-card>
    <q-card flat @click="$router.push('/activities')">
      <q-card-title>
        <div style="color: #a2e2e3">
          <!-- inheriting color #a2e2e3: -->
          <q-icon name="filter_vintage" size="5rem" />
        </div>
      </q-card-title>
      <q-card-separator />
      <q-card-main style="text-align:center;">
        电脑版
      </q-card-main>
    </q-card>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '~variables'
</style>
