<template>
  <section class="flexbox">

    <h3>活動</h3>

    <eventinfo></eventinfo>

    <rule></rule>

    <schedule></schedule>

  </section>
</template>

<script>
import EventInfo from './EventInfo.vue'
import Rule from './Rule.vue'
import Schedule from './Schedule.vue'
export default {
  name: 'event',
  components:{
    eventinfo: EventInfo,
    rule: Rule,
    schedule:  Schedule,
  },
}
</script>

<style scoped>
</style>
