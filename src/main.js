// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import iView from 'iview'
import store from './../store/index'
// import VueWaves from 'vue-waves'
import 'iview/dist/styles/iview.css'    // 使用 CSS
require('./assets/css/navigation.css')
require('echarts/map/js/china.js')

Vue.prototype.$echarts = echarts
// var Vue = require('vue')
// var VueWaves = require('vue-waves')

// Vue.use(VueRouter)
Vue.use(iView)
Vue.use(store)
// var VueWaves = require('vue-waves')
// Vue.use(VueWaves)

Vue.config.productionTip = false
// const router = new VueRouter({
//   mode: 'history',
//   routes: routers
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  // 注入到根实例中
  template: '<App/>',
  components: { App },
  store
})
