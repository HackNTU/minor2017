<template>
  <section class="py-0 my-0">

      <div id="countdown_digits">
        <Countdown deadline="Sun Mar 19 2017 14:00:00 GMT+0800 (CST)"></Countdown>
      </div>

      <a href="#"></a><v-btn info large>加入Discord</v-btn>
      <!-- <v-breadcrumbs id="breadcrumbs" divider="/" v-bind:items="channels"></v-breadcrumbs> -->

  </section>
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
section {
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
