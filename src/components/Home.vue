<template>
  <div>

    <parallax></parallax>

    <!-- <news></news> -->

    <about></about>

    <!-- <topics></topics><br><br><br> -->

    <event></event>

    <signup></signup>

    <partners></partners>

  </div>
</template>
<script>
import Parallax from './Parallax.vue'
import News from './News.vue'
import About from './About.vue'
import Topics from './Topics.vue'
import Event from './event/Event.vue'
import Signup from './Signup.vue'
import Partners from './Partners.vue'

export default {
  name: 'home',
  components: {
    parallax: Parallax,
    news: News,
    about: About,
    topics: Topics,
    event: Event,
    signup: Signup,
    partners: Partners,
  },
}
</script>
<style scoped>

</style>
