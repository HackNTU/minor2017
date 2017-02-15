<template>
  <div class="block">
    <h3>關於活動</h3>

    <h5 class="mt-5">活動介紹</h5>
    <p>宗旨之類的約 300字，Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <h5 class="mt-5 mb-0">主辦單位</h5>
    <img src="/public/hackntu_logo.png" alt="hackntu logo" style="
    float:center;
    max-width:20em;
    hight:auto;
    padding:1em;
    ">
    <p>
      臺大黑客松 相關介紹，Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>


    <h5 class="mt-5">最新消息</h5>
    <v-tabs id="mobile- tabs-6" scroll-bars>
      <v-tab-item v-for="i in 13" v-bind:href="'#mobile-tabs-6-' + i" slot="activators">
        <pre>  這是一條最新消息的標題！             </pre>
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
  name: 'about',
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
