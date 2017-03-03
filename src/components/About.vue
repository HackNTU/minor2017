<template>
  <section>

    <h3>活動介紹</h3>
    <v-card>
      <!-- <v-card-text>
        參賽者可利用主辦方提供之數據，自由運用各式分析、呈現工具，佐以其他開放資料，以期能從資料中挖出金融服務創新的契機；作品內容著重在呈現從數據挖出的特別現象，並須說明思考邏輯、分析方法、步驟等脈絡。
      </v-card-text> -->
      <v-card-text class="text-xs-left text-lg-center">
        <p>參賽者可利用主辦方提供之數據，自由運用各式分析、呈現工具，佐以其他開放資料，以期能從資料中挖出金融服務創新的契機；作品內容著重在呈現從數據挖出的特別現象，並須說明思考邏輯、分析方法、步驟等脈絡。 希望能從過往服務產生的數據中建立消費者行為相關的各種預測模型，以便日後推出客製化服務、推薦系統等創新服務的方向。</p>
        <p>＊數據內容：
        國泰加密處理過的各項金融服務資料，每個隊伍能獨立連進一台虛擬主機，在那台主機上選手可自由安裝任何和linux相容的工具來處理資料。</p>
      </v-card-text>
    </v-card>

    <h3 class="mt-5">主辦單位</h3>
    <v-card>
      <v-card-text>
        <p class="text-xs-left text-lg-center">
          HackNTU是一個學生自發性創辦的非營利組織，籌辦了臺灣第一場大型校園Hackathon，目標成為學術界與產業間的溝通橋樑。我們提供有Hacker Spirit的學生交流的平台，提倡動手解決問題，並致力於協助大家獲得技術上的能力。<br>HackNTU相信聚集並且培養擁有Hacker spirit的Hacker們，能夠創造一個更美好的世界！</p>
        <img src="public/hackntu_logo.png" alt="hackntu logo" style="float:center;max-width:20em;hight:auto;">
      </v-card-text>
    </v-card>

  </section>
</template>

<script>
export default {
  name: 'about',
  data: function(){
    return{

    }
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
</style>
