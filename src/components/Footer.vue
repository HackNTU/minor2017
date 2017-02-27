<template>
  <div>

      <!-- simple items -->
      <v-row v-for="item in items" class="my-2">
        <v-col xs6="xs6" class="text-xs-right">
          <v-chip label outline class="red red--text mr-5">
            <v-icon left>label</v-icon>{{item.chip}}
          </v-chip>
        </v-col>
        <v-col xs6="xs6" class="text-xs-left">
          <span class="white--text">{{item.content}}</span>
        </v-col>
      </v-row>


      <!-- complex items -->
      <v-row>
        <v-col xs6="xs6" class="text-xs-right">
          <v-chip label outline class="red red--text mr-5">
            <v-icon left>label</v-icon>贊助單位
          </v-chip>
        </v-col>
        <v-col xs6="xs6" class="text-xs-left">
          <div class="white--text" v-for="p in partners">
            <img :src="p.get('Photo')[0].url" height="30em">
          </div>
        </v-col>
      </v-row>

  </div>
</template>

<script>
import { partners } from '../service/airtable.js'
export default {
  name: 'footer',
  data: function(){
    return{
      partners: partners,
      items:[
        {
          chip: '主辦單位',
          content: 'HackNTU 台大黑客松',
        },{
          chip: '粉絲專頁',
          content: 'facebook.com/hackNTU/',
        },{
          chip: '聯絡電話',
          content: '0901-234-567',
        },{
          chip: '聯絡信箱',
          content: 'hackntu@gmail.com',
        }
      ]
    }
  }
}
</script>

<style scoped>
img {
    float: left;
    margin: 0 10px 10px 0;
}
</style>
