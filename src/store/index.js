import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    message: 'Hello Vuex!'
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {

  }
})

export default store
