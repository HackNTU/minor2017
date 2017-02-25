import Vue from 'vue'

import store from './vuex.js'
import router from './router.js'

import Vuetify from 'vuetify'
import App from './App.vue'

Vue.config.debug = true
Vue.use(Vuetify)

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




/*===============================================
=            Google Analytics Script            =
===============================================*/

(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-92294754-2', 'auto');
ga('send', 'pageview');

/*=====  End of Google Analytics Script  ======*/
