<template>
  <section class="flexbox">

    <h3>活動</h3>

    <eventinfo></eventinfo>

  </section>
</template>

<script>
import EventInfo from './EventInfo.vue'
export default {
  name: 'event',
  components:{
    eventinfo: EventInfo,
  },
}
</script>

<style scoped>
</style>
