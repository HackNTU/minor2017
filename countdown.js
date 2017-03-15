new Vue({

  el: '#countdown',

  mounted: function() {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000);
    },1000);
  },

  // props: ['deadline'],
  // data: {
  //   deadline: 'Sun Mar 19 2017 14:00:00 GMT+0800 (CST)',
  //   msgg: 'hi',
  // },

  data: function() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      deadline: 'Sun Mar 19 2017 14:00:00 GMT+0800 (CST)',
      msgg: 'hi',
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
      return Math.trunc((this.normalizedDate - this.now) / 60 / 60);
    },
    days() {
      return Math.trunc((this.normalizedDate - this.now) / 60 / 60 / 24);
    },
  }
})
