import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import One from './views/One'
import Two from './views/Two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/one',
      name: 'one',
      component: One
    },
    {
      path: '/two',
      name: 'two',
      component: Two
    }
  ]
})
