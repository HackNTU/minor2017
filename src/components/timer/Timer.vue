<template>
  <div class="py-0 my-0 height100vh">

      <div id="countdown_digits">
        <countdown deadline="Sun Mar 19 2017 14:00:00 GMT+0800 (CST)"></countdown>
      </div>

      <a href="#"><v-btn info large>加入Discord頻道</v-btn></a>
      <!-- <v-breadcrumbs id="breadcrumbs" divider="/" v-bind:items="channels"></v-breadcrumbs> -->

      <div style="border:1px green solid;">
        <schedule></schedule>
      </div>

  </div>
</template>

<!-- ====================================================================== -->

<script>
import Countdown from './Countdown.vue';
import Schedule from './Schedule.vue'
export default {
  name: 'Timer',
  data: function () {
    return {
      channels: [
        { href: '#!', text: 'General', disabled: false },
        { href: '#!', text: 'Random', disabled: true },
        { href: '#!', text: 'Projects', disabled: true }
      ],
    }
  },
  components: {
    countdown: Countdown,
    schedule: Schedule,
  },
}

</script>

<!-- ====================================================================== -->

<style scoped>
.height100vh {
  background-color: #34495E;
  height: 100vh;
}
#breadcrumbs {
  position: fixed;
  bottom: 10;
  color: red;
  border: solid green;
}
#countdown{
  max-width: 80vh;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10vh;
  /*align-items: center;*/
  background-color: #34495e;
  display: flex;
  justify-content: center;
  /*border: 1px red solid;*/
}
</style>
