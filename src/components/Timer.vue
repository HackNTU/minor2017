<template>
  <div>
    <v-container fluid>
      <h3>Timer</h3>
      <h6>I am a h6</h6>

      <div id="countdown">
        <Countdown deadline="Sat Feb 04 2017 03:30:00 GMT+0800 (CST)"></Countdown>
      </div>

      <v-btn info large>加入Discord</v-btn>
      <!-- <v-breadcrumbs id="breadcrumbs" divider="/" v-bind:items="channels"></v-breadcrumbs> -->

    </v-container>
  </div>
</template>

<!-- ====================================================================== -->

<script>
import Countdown from './Countdown.vue';
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
  components: {Countdown},
}

</script>

<!-- ====================================================================== -->

<style scoped>
#breadcrumbs {
  position: fixed;
  bottom: 10;
  color: red;
  border: solid green;
}
#countdown{
    align-items: center;
    bottom: 0;
    /*background-color: #34495e;*/
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top:0;
}
</style>
