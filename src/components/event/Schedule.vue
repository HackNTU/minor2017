<template>
  <section>

    <h5>活動流程</h5>

    <v-tabs id="mobile-tabs-3" grow>
      <v-tab-item :href="'/#/#day1'" slot="activators"> 3/18(六) </v-tab-item>
      <v-tab-item :href="'/#/#day2'" slot="activators"> 3/19(日) </v-tab-item>
      <v-tab-content :id="'day1'" slot="content">
        <v-card>
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
        <template v-for="s in schedule" v-if="s.get('Date')=='2017-03-18'">
          <tr>
            <!-- <td v-text="s.get('Date')"></td> -->
            <td v-text="s.get('Time')"></td>
            <td v-text="s.get('Name')"></td>
          </tr>
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
      ]
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
</style>
