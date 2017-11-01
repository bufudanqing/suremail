import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
import index from '../components/index.vue'
import joinus from '../components/joinus.vue'
import more from '../components/more.vue'
import download from '../components/download.vue'
import enterprise from '../components/enterprise.vue'
import product from '../components/product.vue'
import news from '../components/news.vue'
import information from '../components/information.vue'

Vue.use(Router)
// Vue.use(Element)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/components/index',
      name: 'index',
      component: index,
      meta: {
        title: 'index',
        keepAlive: true
      }
    },
    {
      path: '/components/joinus',
      name: 'joinus',
      component: joinus
    },
    {
      path: '/components/more',
      name: 'more',
      component: more
    },
    {
      path: '/components/download',
      name: 'down',
      component: download
    },
    {
      path: '/components/enterprise',
      name: 'enterprise',
      component: enterprise
    },
    {
      path: '/components/product',
      name: 'product',
      component: product
    },
    {
      path: '/components/news',
      name: 'news',
      component: news
    },
    {
      path: '/components/information',
      name: 'info',
      component: information
    },
    // 重定向
    {
      path: '/',
      redirect: '/components/index'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      console.log(savedPosition)
      return savedPosition
    } else {
      return {x: 0, y: 0}
      // return {x: 0, y: to.meta.savedPosition || 0}
    }
  }
})
// const index = r => require.ensure([], () => r(require('../components/index')), 'index')

// export default [{
//   path: '/',
//   component: index
// }]
