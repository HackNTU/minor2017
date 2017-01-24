<template>
  <v-app top-navbar footer left-fixed-sidebar>
    <header>
      <v-navbar ripple>
        <v-navbar-logo>HackNTU</v-navbar-logo>
        <v-navbar-items></v-navbar-items>
      </v-navbar>
    </header>
    <main>
      <v-sidebar id="sidebar" :items="items" left fixed router close-on-click></v-sidebar>
      <v-content>
        <v-container fluid>
          <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-container>
      </v-content>
    </main>
    <v-footer></v-footer>
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
      items: [ //
        {
          header: '大數據黑客松'
        }, {
          title: '首頁',
          group: '/company',
          items: [ //
            {
              title: 'Q & A',
              href: '/qa',
              action: 'link'
            }
          ]
        }, {
          title: '常見問題',
          href: "#!",
          action: 'link'

        }, {
          title: '報名',
          href: "#!",
          action: 'link'
        }, {
          title: '聯絡我們',
          href: "mailto:hackntu@gmail.com",
          action: 'link'
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
