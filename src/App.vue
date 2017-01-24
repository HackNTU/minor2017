<template>
  <v-app top-navbar footer>

      <v-navbar class="blue-grey darken-4">
        <v-navbar-logo class="hidden-sm-and-down">HackNTU</v-navbar-logo>
        <v-navbar-items v-bind:items="items"></v-navbar-items>
      </v-navbar>

    <main>
      <!-- <v-sidebar id="sidebar" :items="items" left fixed router close-on-click></v-sidebar> -->
      <v-content>
        <v-container fluid>
          <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-container>
      </v-content>

    </main>

    <!-- Footer -->
    <v-footer class="blue-grey darken-4">
      <div class="text-xs-center">HackNTU © 2017</div>
    </v-footer>

  </v-app>
</template>
<script>
export default {
  name: 'App',
  mounted() {
    this.$vuetify.init();
  },
  data() {
    return {
      home:{
        text: 'HackNTU',
        href: '#/',
        action: 'link'
      },
      items: [ //
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
        }, {
          text: '常見問題',
          title: '常見問題',
          href: "#/qa",
          action: 'link'
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
  }
}
</script>
<style lang="stylus">
@import '../node_modules/vuetify/src/stylus/main';
@import './css/main.css';
@import './css/slide-fade.css';
</style>
