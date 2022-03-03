import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPageError: false
  },
  getters: {
  },
  mutations: {
    mutationSetErrorStatus (state, payload) {
      state.isPageError = payload
    }
  },
  actions: {
    actionSetErrorStatus (context, payload) {
      context.commit('mutationSetErrorStatus', payload)
    }
  },
  modules: {
  }
})
