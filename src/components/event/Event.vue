<template>
  <section class="flexbox">

    <h3>活動</h3>

    <eventinfo></eventinfo>

    <schedule></schedule>

  </section>
</template>

<script>
import EventInfo from './EventInfo.vue'
import Schedule from './Schedule.vue'
export default {
  name: 'event',
  components:{
    eventinfo: EventInfo,
    schedule:  Schedule,
  },
}
</script>

<style scoped>
</style>
