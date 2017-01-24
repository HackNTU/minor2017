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
          header: 'Header'
        }, {
          title: '首頁',
          group: '/company',
          items: [ //
            {
              title: 'Home',
              href: '/',
              action: 'link'
            }, {
              title: 'counter',
              href: '/counter',
              action: 'link'
            }, {
              title: 'foo',
              href: '/foo',
              action: 'link'
            }, {
              title: 'bar',
              href: '/bar',
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
          header: 'Another Header'
        }, {
          title: 'Parallax',
          href: "/parallax",
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
