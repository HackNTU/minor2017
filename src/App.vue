<template>
  <v-app top-navbar footer left-fixed-sidebar>
    <header>
      <v-navbar ripple>
        <v-navbar-logo>大數據黑客松</v-navbar-logo>
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
          title: '關於活動',
          href: "",
          action: 'link'

        }, {
          title: '流程',
          href: "",
          action: 'link'

        }, {
          title: '評審',
          href: "",
          action: 'link'

        }, {
          title: '報名',
          group: '/company',
          items: [ //
            {
              title: 'Q & A',
              href: '/qa',
              action: 'link'
            }
          ]
        }, {
          title: '合作夥伴',
          href: "",
          action: 'link'

        }, {
          header: '關於我們'
        }, {
          title: 'HackNTU',
          // href: "https://www.hackntu.org/",官網建置中
          href: "http://ppt.cc/xBsG",
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
