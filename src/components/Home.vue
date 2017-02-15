<template>
  <div>

    <parallax></parallax><br><br>

    <about></about><br><br>

    <topics></topics><br><br>

    <schedule></schedule><br><br>

    <reviewer></reviewer><br><br>

    <signup></signup><br><br>

    <partners></partners><br><br>

  </div>
</template>
<script>
import Parallax from './Parallax.vue'
import About from './About.vue'
import Topics from './Topics.vue'
import Schedule from './Schedule.vue'
import Reviewer from './Reviewer.vue'
import Signup from './Signup.vue'
import Partners from './Partners.vue'

export default {
  name: 'home',
  components: {
    parallax: Parallax,
    about: About,
    topics: Topics,
    schedule: Schedule,
    reviewer: Reviewer,
    signup: Signup,
    partners: Partners,
  },
}
</script>
<style scoped>

</style>
