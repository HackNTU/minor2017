import Vue from 'vue'
import VueRouter from 'vue-router'

// STEP 1: 註冊你的component
import Template from './components/Template.vue'

import Home from './components/Home.vue'
import Counter from './components/Counter.vue'
import Parallax from './components/Parallax.vue'
import QA from './components/QA.vue'
import About from './components/About.vue'
import Event from './components/event/Event.vue'
import Signup from './components/Signup.vue'
import Partners from './components/Partners.vue'
import Timer from './components/Timer.vue'
import Countdown from './components/Countdown.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/qa', component: QA },
  { path: '/signup', component: Signup },
  // STEP 2: 如果你的component即是一個頁面，直接在此綁定到路徑'/path'
  { path: '/template', component: Template },
];

const router = new VueRouter({
  routes,
})

export default router;
