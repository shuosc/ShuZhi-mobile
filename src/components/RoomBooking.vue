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
                    <q-collapsible label="预约">
                        <div>
                            <q-datetime 
                            v-model="data" 
                            type="date" 
                            float-label="Date"
                            />
                            
                            <q-datetime-range
                            type="time"
                            format24h
                            v-model="range"
                            :min="mintime"
                            :max="maxtime"
                            float-label="Select Time"
                            />
                            <br>
                            <q-btn color="primary">
                                确认
                            </q-btn>
                        </div>
                    </q-collapsible>
                </q-card>                
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
                                <q-item-tile sublabel>{{range.from}}-{{range.to}}</q-item-tile>
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

export default {
  data () {
    return {
      range: {
        from: null,
        to: null
      },
      mintime: '6:00',
      maxtime: '18:00',
      data: null
    }
  }
}
</script>

<style>

</style>
