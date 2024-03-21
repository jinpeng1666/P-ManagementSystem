import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入用户模块
import user from "@/store/modules/user"

export default new Vuex.Store({
  modules: {
    user
  }
})