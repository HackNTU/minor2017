<template>
  <section class="mt-5">

    <h3>賽前活動</h3>
    <v-carousel icon="remove">
      <v-carousel-item
      v-for="pre_event in pre_events"
      :key="pre_event.id"
      v-bind:src="pre_event.get('Poster')[0].url"
      />
    </v-carousel>

  </section>
</template>

<script>
import { pre_events } from '../../service/airtable'
export default {
  name: 'preevents',
  data: function(){
    return {
      pre_events: pre_events,
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
</style>
