<template>
  <div>
    <q-tabs v-model="selectedTab">
      <!-- Tabs - notice slot="title" -->
      <q-tab default slot="title" label="校历查询" name="tab-1" />
      <q-tab slot="title" label="校车查询" name="tab-2" />
      <q-tab slot="title" label="校园地图" name="tab-3" />
      <!-- Targets -->
      <q-tab-pane name="tab-1">
        <img src="http://www.sz.shu.edu.cn/resources/xiaoli/2019-2020-2.jpg" class="responsive" />
        <img src="http://www.sz.shu.edu.cn/resources/xiaoli/2019-2020-1.jpg" class="responsive" />
      </q-tab-pane>
      <q-tab-pane name="tab-2">
        <img src="http://api.shu.edu.cn/CampusFileList/%E6%A0%A1%E8%BD%A6%E6%97%B6%E5%88%BB%E8%A1%A8.jpg" class="responsive" />
      </q-tab-pane>
      <q-tab-pane name="tab-3">
        <img src="~/assets/SchoolMap.png" class="responsive" />
      </q-tab-pane>
    </q-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
