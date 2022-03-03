import { commonFunct } from '@/assets/script/common'
import { IPostComments, IPost, IPosts, IPostComment } from '@/assets/script/type'

export const postFunct = {
  methods: {
    async getPosts (params: any): Promise<IPosts> {
      const result = await commonFunct.methods.getMethod('https://jsonplaceholder.typicode.com/posts', params)
      return result.data.map(function (el: IPost) {
        return {
          id: el.id,
          userId: el.userId,
          title: el.title,
          body: el.body
        } as IPost
      })
    },

    async getPostDetails (postId: string): Promise<IPost> {
      const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
      const result = await commonFunct.methods.getMethod(url, {})
      return {
        id: result.data?.id,
        userId: result.data?.userId,
        title: result.data?.title,
        body: result.data?.body
      } as IPost
    },

    async getPostComments (postId: string): Promise<IPostComments> {
      const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      const result = await commonFunct.methods.getMethod(url, {})
      return result.data.map(function (el: IPostComment) {
        return {
          id: el.id,
          name: el.name,
          email: el.email,
          body: el.body
        } as IPostComment
      })
    }
  }
}
