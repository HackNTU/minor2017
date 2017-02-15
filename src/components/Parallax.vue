<template>
  <div>

    <div class="parallax">
      <div class="center" style="color:#FFF">
        <img src="/public/v.png" max-width="50px" alt="hackNTU-logo">
        <h6 style="color:#FFF" class="mt-2 mb-0">HackNTU x 國泰</h6>
        <h2 style="color:#FFF">數據分析黑客松</h2>
        <pre>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore aliqua.</pre>
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
