import Vue from 'vue'
import Vuex from 'vuex'

// 告诉vue使用 vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
// 需要维护的状态
const store = new Vuex.Store({
  mutations: {
    SAVE_POSITION (state, position) {
    state.position = position
    }
  }
})

// 整合初始状态和变更函数，我们就得到了所需的store
// 至此，这个store就可以连接到我们的引用中
export default store
