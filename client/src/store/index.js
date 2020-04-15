import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin : false
  },
  mutations: {
    SET_LOGIN (state,status){
      state.islogin = status
    }
  },
  actions: {
  },
  modules: {
  }
})
