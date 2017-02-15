<template>
  <div>

    <!-- Parallax by Vuetify, cannot costomize -->
    <!-- <div> -->
    <!-- <v-parallax height="500" src="http://www.istartedsomething.com/bingimages/cache/LakeWakapitu_EN-US11634817642_1366x768.jpg"></v-parallax> -->
    <!-- </div> -->

    <div class="parallax">
      <div class="center">
        <img src="/public/v.png" max-width="50px" alt="hackNTU-logo">
        <h6 style="color:#FFF">HackNTU x 國泰</h6>
        <h4 style="color:#FFF">數據分析黑客松</h4>
      </div>

    </div>


  </div>
</template>
<script>
export default {
  name: 'parallax'
}
</script>

<style scoped>
.parallax {
  /* The image used */
  background-image: url('/public/fintech.jpg');

  /* Set a specific height */
  height: 80vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.center {
  top: 50%;
  transform: translateY(30%);
  -ms-transform: translateY(30%);
  -moz-transform: translateY(30%);
  -webkit-transform: translateY(30%);
  -o-transform: translateY(30%);
}
</style>
