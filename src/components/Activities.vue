<template>
    <div>
        <q-tabs>
            <!-- Tabs - notice slot="title" -->
            <q-tab slot="title" label="全部教室" name="tab-1" />
            <q-tab slot="title" label="我的预约" name="tab-2" />
            <!-- Targets -->
            <q-tab-pane name="tab-1">Tab One</q-tab-pane>
            <q-tab-pane name="tab-2">Tab Two</q-tab-pane>
        </q-tabs>
    </div>
</template>

<script>
export default {}
</script>

<style>

</style>
