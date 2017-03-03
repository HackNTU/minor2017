<template>
  <div>

      <v-row v-for="item in items" :key="item.id" class="my-2">
        <v-col xs6="xs6" class="text-xs-right">
          <v-chip label outline class="red red--text mr-5">
            <v-icon left>label</v-icon>{{item.chip}}
          </v-chip>
        </v-col>
        <v-col xs6="xs6" class="text-xs-left">
          <div v-if="item.href"><a :href="item.href">{{item.content}}</a></div>
          <div v-else class="white--text">{{item.content}}</div>
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
          content: 'HackNTU臺大黑客松',
        },{
          chip: '聯合主辦',
          content: '國泰金控',
        },{
          chip: '聯絡信箱',
          content: 'hackntu@gmail.com',
        //   href: 'mailto:hackntu@gmail.com',
        },{
          chip: '粉絲專頁',
          content: 'facebook.com/hackNTU/',
          href: 'https://facebook.com/hackntu/',
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
