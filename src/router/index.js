import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve) => require(['../views/home/home'], resolve),
      children: [

      ]
    },
    {
      path: '/home',
      name: 'home',
      component: (resolve) => require(['../views/home/home'], resolve)
    },
    {
      path: '/login',
      component: (resolve) => require(['../views/login/login'], resolve)
    },
    {
      path: '/city',
      component: (resolve) => require(['../views/city/city'], resolve)
    },
    {
      path: '/search',
      component: (resolve) => require(['../views/search/search'], resolve)
    }
  ]
})
