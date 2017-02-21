<template>
  <section>
    <v-card>
      <v-card-row class="blue-grey darken-1">
        <v-card-title>
          <span class="white--text">活動資訊</span>
        </v-card-title>
      </v-card-row>
      <v-card-text v-for="i in items">
        <v-card-row height="48px" id="v-card-row">
          <v-icon class="mr-5">{{i.icon}}</v-icon>
          <div>
            <div class="text-xs-center text-sm-left">{{ i.title }}</div>
            <strong><div class="text-sm-left">{{ i.descp }}</div></strong>
          </div>
        </v-card-row>
      </v-card-text>
      <v-card-row actions>
        <v-btn flat class="green--text darken-1">地圖</v-btn>
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
          descp: '2017/03/18-19，六日兩天，0800-2200（過夜不間斷）',
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
          descp: '免報名費，僅收取保證金 元。',
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
