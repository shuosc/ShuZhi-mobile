<template>
  <div>
    <q-tabs v-model="selectedTab">
      <!-- Tabs - notice slot="title" -->
      <q-tab default slot="title" label="校历查询" name="tab-1" />
      <q-tab slot="title" label="校车查询" name="tab-2" />
      <q-tab slot="title" label="校园地图" name="tab-3" />
      <!-- Targets -->
      <q-tab-pane name="tab-1">
      </q-tab-pane>
      <q-tab-pane name="tab-2">
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
