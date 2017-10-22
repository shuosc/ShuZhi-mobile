<template>
    <div>
        <q-tabs>
            <!-- Tabs - notice slot="title" -->
            <q-tab slot="title" label="全部教室" name="tab-1" />
            <q-tab slot="title" label="我的预约" name="tab-2" />
            <!-- Targets -->
            <q-tab-pane  default name="tab-1">
                <q-card>
                <q-card-main>
                    <span slot="subtitle">
                            预约教室请留上海本地手机！当日20:00之前申请，当天审核；超过20:00，次日审核，请注意审核时间，以免耽误活动开展
                    </span>
                </q-card-main>
                </q-card>
                <q-card >
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
                    </q-list>
                    <q-card-actions>
                        <q-btn class="full-width" loader flat>预约</q-btn>
                    </q-card-actions>
                </q-card>                
            </q-tab-pane>
            <q-tab-pane name="tab-2">
                
            </q-tab-pane>
        </q-tabs>
    </div>
</template>
<script>
export default {
}
</script>

<style>

</style>
