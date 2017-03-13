<template>
  <div class="block">
    <!-- <h5 class="mt-5">最新消息</h5> -->
    <v-tabs id="mobile- tabs-6" scroll-bars class="mt-0">
      <v-tab-item
        v-for="a_piece_of_news in news"
        :key="a_piece_of_news.id"
        v-bind:href="'#mobile-tabs-6-' + a_piece_of_news.index"
        slot="activators">

        <a :href="a_piece_of_news.get('Link')">
          [{{ a_piece_of_news.get('Release') }}] {{ a_piece_of_news.get('Title') }}
        </a>

      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import { news } from '../service/airtable.js'
export default {
  name: 'news',
  data: function(){
    return{
      news: news,
      l: news.length
    }
  },
  computed: {
    indexedNews: function(){
      var indexedNews = []
      this.news.forEach(function (value, i) {
        // console.log('%d: %s', i, value);
        // console.log(this.news[i]);
        indexedNews[i] = news[i]
        indexedNews[i].index = i
      });
      return indexedNews
    }
  },
}
</script>

<style scoped>
/* prevent default <a/> style from turning link invisible on tab */
a {
  color: white;
  text-decoration: none;
}
</style>
