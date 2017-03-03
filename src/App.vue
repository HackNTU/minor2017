<template>
  <v-app top-toolbar footer>

      <v-toolbar class="blue-grey darken-4">
        <v-toolbar-logo class="hidden-sm-and-down">HackNTU</v-toolbar-logo>
        <v-toolbar-items v-for="item in items" :key="item.id">
          <v-toolbar-item ripple v-bind:href="item.href"> {{ item.text }} </v-toolbar-item>
        </v-toolbar-items>
      </v-toolbar>

    <main>
      <!-- <v-sidebar id="sidebar" :items="items" left fixed router close-on-click></v-sidebar> -->
      <v-content class="pt-0">
        <v-container fluid>
          <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-container>
      </v-content>

    </main>

    <!-- Footer -->
    <footer>
      <minor2017footer class="blue-grey darken-4 text-xs-center mt-5 mb-0 pa-3"></minor2017footer>
      <v-footer class="blue-grey darken-4"></v-footer>
    </footer>

  </v-app>
</template>
<script>
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  data: function(){
    return {
      home:{
        text: 'HackNTU',
        href: '#/',
        action: 'link'
      },
      items: [
        {
          text: '關於活動',
          title: '關於活動',
          href: "#/",
          action: 'link'
        }, {
          text: '報名',
          title: '報名',
          href: "#/signup",
          action: 'link'
        // }, {
        //   text: '常見問題',
        //   title: '常見問題',
        //   href: "#/qa",
        //   action: 'link'
        }, {
          text: 'Facebook',
          // icon: 'email',
          title: 'Facebook',
          href: "https://www.facebook.com/hackNTU/",
          target: "_blank"
          // action: 'link'
        }
      ]
    }
  },
  components: {
    minor2017footer: Footer,
  }
}
</script>
<style lang="stylus">
@import '../node_modules/vuetify/src/stylus/main';
@import './css/main.css';
@import './css/slide-fade.css';
</style>
