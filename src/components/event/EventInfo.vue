<template>
  <section class="mt-5">
    <v-card>

      <!-- Title -->
      <v-card-row class="blue darken-1">
        <v-card-title>
          <span class="white--text">活動資訊</span>
        </v-card-title>
      </v-card-row>

      <!-- Items -->
      <v-card-text v-for="i in items">
        <v-card-row class="pt-1" id="v-card-row">
          <v-icon class="mr-4">{{i.icon}}</v-icon>
          <div>
            <strong><div class="text-xs-left">{{ i.title }}</div></strong>
            <div class="text-xs-left">{{ i.descp }}</div>
          </div>
        </v-card-row>
      </v-card-text>

      <!-- Google Map -->
      <v-card-row>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57834.704881184225!2d121.4688627944242!3d25.045302843194733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a94922d056a3%3A0x92caa79347844314!2z5Y2h5biC6YGU5Ym15qWt5Yqg5rK556uZIOWck-WxseWfuuWcsA!5e0!3m2!1szh-TW!2stw!4v1488214436630" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
      </v-card-row>

      <!-- Google Map Link -->
      <v-card-row actions>
        <v-btn flat class="green--text darken-1"><v-icon left>directions</v-icon>Google 地圖</v-btn>
      </v-card-row>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'eventinfo',
  data: function(){
    return {
      items: [
        {
          title: '時間',
          descp: '2017/03/18 8:30 報到 ～ 2017/03/19 18:00 賦歸（兩天Hacking不間斷！）',
          icon:  'watch_later',
        },
        {
          title: '地點',
          descp: '卡市達圓山創新基地（台北市大同區承德路三段232號B2）',
          icon:  'flag',
        },
        {
          title: '餐食',
          descp: '提供免費餐食、點心、宵夜。',
          icon:  'local_bar',
        },
        {
          title: '費用',
          descp: '免費！僅收取保證金新臺幣 300 元，於3/18 報到時全額退還。',
          icon:  'tag_faces',
        },
        {
          title: '現場設備',
          descp: '現場提供插座、網路，並可於會場連接至雲端虛擬機取得主辦方提供之大量金融數據。',
          icon:  'router',
        }
      ]
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
