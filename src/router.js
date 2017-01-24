import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Counter from './components/Counter.vue'
import Parallax from './components/Parallax.vue'

import Qa from './components/QA.vue'
import About from './components/About.vue'
import Schedule from './components/Schedule.vue'
import Reviewer from './components/Reviewer.vue'
import Signup from './components/Signup.vue'
import Partners from './components/Partners.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/counter', component: Counter },
  { path: '/parallax', component: Parallax },
  { path: '/qa', component: Qa },
  { path: '/about', component: About },
  { path: '/schedule', component: Schedule },
  { path: '/reviewer', component: Reviewer },
  { path: '/signup', component: Signup },
  { path: '/partners', component: Partners },
];

const router = new VueRouter({
  routes,
})

export default router;
