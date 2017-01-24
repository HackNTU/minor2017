import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import Counter from './components/Counter.vue'
import Parallax from './components/Parallax.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/counter', component: Counter },
  { path: '/parallax', component: Parallax },
];

const router = new VueRouter({
  routes,
})

export default router;
