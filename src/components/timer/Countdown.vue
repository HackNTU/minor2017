<!-- TODO: #/timer和Timer.vue中的two_digits可用，#/countdown和Countdown.vue裡的two_digits就抓不到 -->

<template>
  <div id="countdown">

    <div class="block">
      <p class="digit">{{ days }}</p>
      <p class="text">Days</p>
    </div>
    <div class="block">
      <p class="digit">{{ hours | two_digits }}</p>
      <p class="text">Hours</p>
    </div>
    <div class="block">
      <p class="digit">{{ minutes | two_digits }}</p>
      <p class="text">Minutes</p>
    </div>
    <div class="block">
      <p class="digit">{{ seconds | two_digits }}</p>
      <p class="text">Seconds</p>
    </div>

  </div>
</template>

<script>
export default {

  name: 'countdown',

  mounted: function() {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000);
    },1000);
  },

  props: ['deadline'],

  data: function() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
    }
  },

  filters: {
    two_digits: function (value) {
      if(value.toString().length < 2)
      {
        return "0"+value.toString();
      }
      return value.toString();
    },
  },

  computed: {
    normalizedDate: function() {
      return Math.trunc(Date.parse(this.deadline) / 1000);
    },
    seconds() {
      return (this.normalizedDate - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.normalizedDate - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.normalizedDate - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.normalizedDate - this.now) / 60 / 60 / 24);
    },
  }
}

</script>

<style lang="css">
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);
.block {
  display: flex;
  flex-direction: column;
  margin: 2vw;
}
.text {
  color: #1abc9c;
  font-size: 3vw;
  font-family: 'Roboto Condensed', serif;
  font-weight: 40;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
.digit {
  color: #ecf0f1;
  font-size: 16vw;
  font-weight: 100;
  font-family: 'Roboto', serif;
  margin: 1vw;
  text-align: center;
}
</style>
