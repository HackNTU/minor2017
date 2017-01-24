<template>
  <div>

    <parallax></parallax><br><br>
    <about id="about"></about><br><br>
    <schedule></schedule><br><br>
    <reviewer></reviewer><br><br>
    <signup id="signup"></signup><br><br>
    <partners id="partners"></partners><br><br>

  </div>
</template>
<script>
import Parallax from './Parallax.vue'
import About from './About.vue'
import Schedule from './Schedule.vue'
import Reviewer from './Reviewer.vue'
import Signup from './Signup.vue'
import Partners from './Partners.vue'

export default {
  name: 'home',
  components: {
    parallax: Parallax,
    about: About,
    schedule: Schedule,
    reviewer: Reviewer,
    signup: Signup,
    partners: Partners,
  },
}
</script>
<style scoped>

</style>
