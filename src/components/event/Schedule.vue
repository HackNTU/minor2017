<template>
  <section>

    <h4 class="yellow-minor2017 ma-0 pt-2">活動流程</h4>

    <v-tabs id="mobile-tabs-3" grow>
      <v-tab-item ripple :href="'/#'" slot="activators">
        <pre v-on:click="tab=318" class="tab">   </pre>
        <div v-on:click="tab=318" class="tab">3/18(六)</div>
        <pre v-on:click="tab=318" class="tab">   </pre>
      </v-tab-item>
      <v-tab-item ripple :href="'/#'" slot="activators">
        <pre v-on:click="tab=319" class="tab">   </pre>
        <div v-on:click="tab=319" class="tab">3/19(日)</div>
        <pre v-on:click="tab=319" class="tab">   </pre>
      </v-tab-item>
      <v-tab-content :id="'day1'" slot="content">
        <v-card v-on:click="tab=318">
          <v-card-text>111111!!!!!!!!!</v-card-text>
        </v-card>
      </v-tab-content>
      <v-tab-content :id="'day2'" slot="content">
        <v-card>
          <v-card-text>22222!!!!!!!!!</v-card-text>
        </v-card>
      </v-tab-content>
    </v-tabs>

    <table>
      <tbody>
        <template v-if="tab == 318">
          <template v-for="s in schedule" v-if="s.get('Date')=='2017-03-18'">
            <tr>
              <td v-text="s.get('Time')"></td>
                <td v-if="s.get('Link')"><a :href="s.get('Link')">{{ s.get('Name') }}</a></td>
                <td v-else v-text="s.get('Name')"></td>
            </tr>
          </template>
        </template>
        <template v-else="tab == 319">
          <template v-for="s in schedule" v-if="s.get('Date')=='2017-03-19'">
            <tr>
              <td v-text="s.get('Time')"></td>
              <td v-if="s.get('Link')"><a :href="s.get('Link')">{{ s.get('Name') }}</a></td>
              <td v-else v-text="s.get('Name')"></td>
            </tr>
          </template>
        </template>
      </tbody>
    </table>

  </section>
</template>

<script>
import { schedule } from '../../service/airtable.js'
export default {
  name: 'schedule',
  data: function(){
    return {
      schedule: schedule,
      header: [
        '時間',
        '活動',
      ],
      tab: 318,
    }
  },
}
</script>

<style scoped>
section {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}
table td, table th {
    padding: 14px;
    text-align: center;
    width: 50%;
    /*border: solid green 1px;*/
}
.tab{
  /*border: green 1px solid;*/
  width: 100%;
}
</style>
