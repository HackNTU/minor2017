<template>
  <section class="flexbox">

    <schedule></schedule>

    <rule></rule>

    <!-- <preevents></preevents> -->

    <eventinfo></eventinfo>

  </section>
</template>

<script>
import EventInfo from './EventInfo.vue'
import Rule from './Rule.vue'
import Schedule from './Schedule.vue'
import PreEvents from './PreEvents.vue'
export default {
  name: 'event',
  components:{
    eventinfo: EventInfo,
    rule: Rule,
    schedule:  Schedule,
    preevents: PreEvents,
  },
}
</script>

<style scoped>
</style>
