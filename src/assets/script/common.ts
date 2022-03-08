import axios from 'axios'
import { IApiResponse } from '@/assets/script/type'
import store from '@/store'
import Vue from 'vue'

export const commonFunct = {
  data: {
  },
  methods: {
    async getMethod (this: any, url: string, params: any, apiVersion = '1.0'): Promise<IApiResponse> {
      return await axios.get(
        url, {
          params: params
        }).then(response => {
        return {
          data: response.data,
          status: response.status
        } as IApiResponse
      }).catch(error => {
        // store.dispatch('actionSetErrorStatus', true)
        Vue.notify({
          title: 'Error',
          text: error.response.status + ' ' + error.response.statusText,
          type: 'error'
        })
        return {
          data: null,
          status: error.response.status
        } as IApiResponse
      })
    }
  }
}
