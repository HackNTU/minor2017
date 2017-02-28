<template>
  <div>

    <div class="parallax" style="background-image: url('public/fintech.jpg')">
    <!-- use inline style to avoid url() module resolve problem -->
      <div class="center" style="color:#FFF">
        <img src="public/v.png" max-width="50px" alt="hackNTU-logo">
        <h6 style="color:#FFF" class="mt-2 mb-0">HackNTU x 國泰</h6>
        <h2 style="color:#FFF">數據分析黑客松</h2>
        <p>數據分析黑客松實戰演練，成為下一個金融界的跨界人才！</p>
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
  /*background-image: url('public/fintech.jpg');*/
  /* ^this would cause url() module resolve problem, maybe it is a loader bug*/

  /* Set a specific height */
  height: 70vh;

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
