<template>
  <div>

    <parallax></parallax>

    <news></news>

    <about></about><br><br><br>

    <topics></topics><br><br><br>

    <reviewer></reviewer><br><br><br>

    <event></event><br><br><br>

    <signup></signup><br><br><br>

    <partners></partners><br><br><br>

  </div>
</template>
<script>
import Parallax from './Parallax.vue'
import News from './News.vue'
import About from './About.vue'
import Topics from './Topics.vue'
import Event from './event/Event.vue'
import Reviewer from './Reviewer.vue'
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
    reviewer: Reviewer,
    signup: Signup,
    partners: Partners,
  },
}
</script>
<style scoped>

</style>
