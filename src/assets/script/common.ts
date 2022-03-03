import axios from 'axios'
import { IApiResponse } from '@/assets/script/type'
import store from '@/store'

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
        store.dispatch('actionSetErrorStatus', true)
        return {
          data: null,
          status: error.response.status
        } as IApiResponse
      })
    }
  }
}
