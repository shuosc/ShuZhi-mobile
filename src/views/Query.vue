<template>
  <div>
    <q-tabs v-model="selectedTab">
      <!-- Tabs - notice slot="title" -->
      <q-tab default slot="title" label="校历查询" name="tab-1" />
      <q-tab slot="title" label="校车查询" name="tab-2" />
      <q-tab slot="title" label="校园地图" name="tab-3" />
      <!-- Targets -->
      <q-tab-pane name="tab-1">
        <img src="http://api.shu.edu.cn/CampusFileList/2016-2017%E6%98%A5.jpg"/>
      </q-tab-pane>
      <q-tab-pane name="tab-2">
        <img src="http://api.shu.edu.cn/CampusFileList/%E6%A0%A1%E8%BD%A6%E6%97%B6%E5%88%BB%E8%A1%A8.jpg"/>
      </q-tab-pane>
      <q-tab-pane name="tab-3">
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

<style>

</style>
