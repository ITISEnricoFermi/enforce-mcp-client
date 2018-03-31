import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/root/root'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    }
  ]
})
