<template>
  <div>

    <div class="parallax">
      <img id="title" class="center" src="public/title.png" max-width="10px" alt="hackNTU-logo">
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
  /* Set a specific height */
  height: 70vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* Set the gradient to background-image only */
  background-image: url('../../public/bg-prism-2x.png');
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.3) 0%,rgba(255,255,255,0.3) 100%), url('../../public/bg-prism-2x.png');

}
.center {
  top: 30%;
  transform: translateY(30%);
  -ms-transform: translateY(30%);
  -moz-transform: translateY(30%);
  -webkit-transform: translateY(30%);
  -o-transform: translateY(30%);
  /*border: green solid 1px;*/
}
#prism {
  /*border: blue solid 3px;*/
  position: fixed;
  top: 15%;
  /*left: 10%;*/
  opacity: 0.4;
  /*width: 80%;*/
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 150%;
  /*z-index: -1;*/
  /*display: block;*/
  /*margin: 0 auto;*/
}
#title {
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  filter: drop-shadow(20px 20px 20px #FFF);
  /*border: yellow solid 1px;*/
}
</style>
