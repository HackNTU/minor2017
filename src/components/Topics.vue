<template>
  <div class="block">
    <h3>主題介紹</h3>
    <h5 class="mt-5">主題一</h5>

    <p>Scroll Up and Down this page to see the parallax scrolling effect.</p>

    <div class="parallax"></div>

    <!-- <div style="height:100px;background-color:red;font-size:36px">
      Scroll Up and Down this page to see the parallax scrolling effect.
      This div is just here to enable scrolling.
      Tip: Try to remove the background-attachment property to remove the scrolling effect.
    </div> -->

  </div>
</template>

<script>
import Parallax from './Parallax.vue'
export default {
  name: 'topics',
  data: function(){
    return{

    }
  },
  components: {
    parallax: Parallax
  }
}
</script>

<style scoped>
p,v-card-text {
  margin: auto;
  max-width: 1000px;
}
.parallax {
  /* The image used */
  background-image: url("http://www.istartedsomething.com/bingimages/cache/LakeWakapitu_EN-US11634817642_1366x768.jpg");

  /* Set a specific height */
  height: 300px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
