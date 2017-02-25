<template>
  <section>

    <h3>主題介紹</h3>

    <v-card class="mw-1000 mt-2">
      <v-card-row class="blue darken-1">
        <v-card-title>
          <span class="white--text">主題一</span>
          <v-spacer></v-spacer>
        </v-card-title>
      </v-card-row>
      <v-card-row img="public/fintech.jpg" height="300px"></v-card-row>
      <v-card-text class="blue darken-1 white--text">
        <!-- <div v-text="參賽者可利用主辦方提供之數據，自由運用各式分析、呈現工具，佐以其他開放資料，以期能從資料中挖出金融服務創新的契機；作品內容著重在呈現從數據挖出的特別現象，並須說明思考邏輯、分析方法、步驟等脈絡。"></div> -->
        <div class="">
          參賽者可利用主辦方提供之數據，自由運用各式分析、呈現工具，佐以其他開放資料，以期能從資料中挖出金融服務創新的契機；作品內容著重在呈現從數據挖出的特別現象，並須說明思考邏輯、分析方法、步驟等脈絡。
        </div>
      </v-card-text>
    </v-card>



  </section>
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
section {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
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
