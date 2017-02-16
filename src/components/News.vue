<template>
  <div class="block">
    <!-- <h5 class="mt-5">最新消息</h5> -->
    <v-tabs id="mobile- tabs-6" scroll-bars class="mt-0">
      <v-tab-item v-for="i in 13" v-bind:href="'#mobile-tabs-6-' + i" slot="activators">
        <pre>  這是一條最新消息的標題！           </pre>
      </v-tab-item>
      <v-tab-content v-for="i in 13" v-bind:id="'mobile-tabs-6-' + i" slot="content">
        <v-card>
          <v-card-text><p>
            這是一條最新消息的內容的內容，這是一條最新消息的內容的內容，這是一條最新消息的內容的內容，這是一條最新消息的內容的內容，這是一條最新消息的內容的內容，這是一條最新消息的內容的內容，這是一條最新消息的內容的內容，這是一條最新消息的內容的內容。詳情請見 https://facebook.com/hackntu
          </p></v-card-text>
        </v-card>
      </v-tab-content>
    </v-tabs>

  </div>
</template>

<script>
export default {
  name: 'news',
  data: function(){
    return{

    }
  }
}
</script>

<style scoped>
p,v-card-text {
  margin: auto;
  max-width: 1000px;
}
</style>
