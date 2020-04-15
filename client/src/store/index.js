import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCT (state, dataBaru) {
      state.products = dataBaru
    }
  },
  actions: {
    fetchProduct (context, payload) {
      axios({
        method: 'GET',
        url: '/product',
        headers: {
          token: localStorage.token
        }
      })
        .then(result => {
          const newproducts = result.data
          context.commit('SET_PRODUCT', newproducts)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
