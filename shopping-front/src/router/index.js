import Vue from 'vue'
import Router from 'vue-router'
import Produc from '@/modules/product/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/products',
      name: 'Products',
      component: () => import('@/modules/product/Product')
    }, {
      path: '/user',
      name: 'User',
      component: () => import('@/modules/user/User')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/modules/order/Order')
    },
    { path: '*', redirect: '/products' }
  ]
})
