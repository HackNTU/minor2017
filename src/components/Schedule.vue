<template>
  <div>

    <h3>活動</h3>

    <!-- 活動資訊 -->
    <h5>活動資訊</h5>
    <section class="flexbox">
      <div class="bloc">
        <ul class="text-md-left">
          <li><v-icon class="grey--text text--darken-2">watch_later</v-icon>
            <pre> 時間:     2017年3月18日早上9點至次日下午4點</pre></li><!--query_builder-->
          <li><v-icon class="grey--text text--darken-2">flag</v-icon>
            <pre> 地點:     台萬大學博雅教學樓101</pre></li>
          <li><v-icon class="grey--text text--darken-2">local_bar</v-icon>
            <pre> 餐食:     </pre></li>
          <li><v-icon class="grey--text text--darken-2">verified_user</v-icon>
            <pre> 保證金:    每人777元，於活動當日報到時退回</pre></li><!--monetization_on, beenhere, tag_faces-->
          <li><v-icon class="grey--text text--darken-2">router</v-icon>
            <pre> 現場設備:  高速無線網路，充足插座，休息區</pre></li>
        </ul>
      </div>
      <div class="bloc">
        <img src="/public/lib_edu.jpg" alt="liberal education building" height="160px">
      </div>
    </section><br><br>


    <!-- 活動辦法 -->
    <h5>活動辦法</h5>
    <div class="text-md-left center60">
      <ul>
        <li> ► Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        <ul>
          <li>&nbsp&nbsp&nbsp&nbsp ▷ quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
          <li>&nbsp&nbsp&nbsp&nbsp ▷ Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
        </ul>
        <li> ► Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
        <li> ► Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        <ul>
          <li>&nbsp&nbsp&nbsp&nbsp ▷ quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
          <li>&nbsp&nbsp&nbsp&nbsp ▷ Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
        </ul>
        <li> ► Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
        </ul>
    </div><br>

    <!-- 活動流程 -->
    <h5>活動流程</h5>

    <!-- 同步活動 -->
    <h5>同步活動</h5>

    <!-- 賽前活動 -->
    <h5>賽前活動 pre-event</h5>
    <v-carousel icon="remove">
      <v-carousel-item
      v-for="pre_event in pre_events"
      v-bind:src="pre_event.get('Poster')[0].url"
      />
    </v-carousel>

  </div>
</template>

<script>
import { pre_events } from '../service/airtable.js'
export default {
  name: 'schedule',
  data: function(){
    return {
      pre_events: pre_events,
    }
  },
  methods: function(){
    return {
      sayHi: function(){
        console.log('hi!!!!!!');
      }
    }
  }
}
</script>

<style scoped>
.center30 {
  margin-left: auto;
  margin-right: auto;
  max-width: 30em;
}
.center60 {
  margin-left: auto;
  margin-right: auto;
  max-width: 60em;
}
ul {
  list-style-type: none;
}
pre {
  display: inline;
  padding: 0;
  margin: 0;
}


.flexbox {
      max-width:60em;
      width:100%;
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
      height:auto;
      /*background-color:blue;*/
      margin:auto;
      }
.bloc{
  width:26em;
  height: auto;
  /*background-color:yellow;*/
  float:left;
  margin:10px;
  /*text-align:center;*/
}
@media only screen and (max-width :480px) {
/* Styles pour cette Media Queries */
  header {
   flex-direction:column;
   }
  .bloc {background-color:red;
    margin:auto;
    margin-top:10px;
    margin-bottom:10px;
    }
}

</style>
