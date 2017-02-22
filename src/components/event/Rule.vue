<template>
  <section>
    
    <v-card class="blue darken-1 white--text">
      <v-card-text>
        <div>{{ card_text }}</div>
      </v-card-text>
    </v-card>

    <h5>活動辦法</h5>
    <div class="text-md-left center60">
      <ul>
        <li> ► Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        <ul>
          <li>&nbsp&nbsp&nbsp&nbsp ▷ quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
          <li>&nbsp&nbsp&nbsp&nbsp ▷ Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
        </ul>
        <li> ► Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
        <li> ► Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        <ul>
          <li>&nbsp&nbsp&nbsp&nbsp ▷ quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
          <li>&nbsp&nbsp&nbsp&nbsp ▷ Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
        </ul>
        <li> ► Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
        </ul>
    </div>

  </section>
</template>

<script>
export default {
  name: 'rule',
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
