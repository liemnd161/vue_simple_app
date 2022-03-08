import Vue from 'vue'
import Vuex from 'vuex'
import { IPostComments, IPost, IPosts, IPostComment } from '@/assets/script/type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPageError: false,
    checkedList: [] as IPosts
  },
  getters: {
  },
  mutations: {
    mutationSetErrorStatus (state, payload) {
      state.isPageError = payload
    },
    mutationSetCheckedList (state, payload: IPost) {
      const isExisted = state.checkedList.find(x => x.id === payload.id) as IPost
      if (!isExisted) {
        state.checkedList.push(payload)
        return
      }
      isExisted.isChecked = payload.isChecked
    }
  },
  actions: {
    actionSetErrorStatus (context, payload) {
      context.commit('mutationSetErrorStatus', payload)
    },
    actionSetCheckedList (context, payload) {
      context.commit('mutationSetCheckedList', payload)
    }
  },
  modules: {
  }
})
