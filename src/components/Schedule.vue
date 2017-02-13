<template>
  <div>

    <h4>活動流程</h4>

    <h4>同步活動</h4>

    <h4>賽前活動 pre-event</h4>
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
      // pre_events_1: {
      //   a: {
      //     src: 'http://www.istartedsomething.com/bingimages/cache/LakeWakapitu_EN-US11634817642_1366x768.jpg'
      //   },
      //   b: {
      //     src: 'http://www.istartedsomething.com/bingimages/cache/LakeWakapitu_EN-US11634817642_1366x768.jpg'
      //   }
      // }
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
</style>
