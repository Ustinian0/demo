import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Login')
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('../views/Sign')
    }
  ]
})
