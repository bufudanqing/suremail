import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import joinus from '@/components/joinus'

Vue.use(Router)
// Vue.use(Element)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: index
    },
    {
      path: '/components/:name',
      name: 'joinus',
      component: joinus
    }
  ]
})
