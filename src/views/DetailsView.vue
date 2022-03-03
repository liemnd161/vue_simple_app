<template>
  <div class="">
    <div class="row col-12 justify-content-center">
      <div class="col-sm-8 border-bottom mb-3">
        <AppTextLabel title="Posted by User Id" :text="'' + postDetails.userId"></AppTextLabel>
        <AppTextLabel title="Title" :text="postDetails.title"></AppTextLabel>
        <AppTextLabel title="Content" :text="postDetails.body"></AppTextLabel>
      </div>
      <!--Post Comments-->
      <div class="col-sm-7 mb-3" v-if="postDetails.id">
        <div class="row">
          <b-button v-b-toggle.post-comment-collapse variant="primary" class="float-left">Show Comment(s)</b-button>
        </div>
        <b-collapse class="col-sm-12 mt-2" id="post-comment-collapse" @shown="getPostComments">
          <!--Searching-->
          <b-form-input v-model.trim="searchingKeyWord" placeholder="Search...."></b-form-input>
          <!--Comments-->
          <div v-for="(comment, index) in postComments" :key="'comment_' + comment.id + '_' + index" class="border-bottom">
            <AppTextLabel title="Comment Id" :text="'' + comment.id"></AppTextLabel>
            <AppTextLabel title="Comment By" :text="comment.email"></AppTextLabel>
            <AppTextLabel title="Comment Title" :text="comment.name"></AppTextLabel>
            <AppTextLabel title="Comment Body" :text="comment.body"></AppTextLabel>
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { postFunct } from '@/assets/script/post/post'
import { IPostComments, IPost, IPostComment } from '@/assets/script/type'
import Vue from 'vue'
import AppTextLabel from '@/components/layout/AppTextLabel.vue'
import _lodash from 'lodash'

export default Vue.extend({
  name: 'DetailsView',
  mixins: [postFunct],
  components: {
    AppTextLabel
  },
  props: ['post_id'],
  data () {
    return {
      searchingKeyWord: '',
      postDetails: {} as IPost,
      postComments: [] as IPostComments
    }
  },
  watch: {
    searchingKeyWord: function (this: any, newValue, oldValue) {
      this.debouncedSearchingComments()
    }
  },
  created: function (this: any) {
    this.debouncedSearchingComments = _lodash.debounce(this.searchingComments, 1000)
  },
  async mounted () {
    await this.getPostDetails()
  },
  methods: {
    async getPostDetails (this: any): Promise<void> {
      this.postDetails = await postFunct.methods.getPostDetails(this.post_id)
    },

    async getPostComments (this: any): Promise<void> {
      this.postComments = [] as IPostComments
      this.postComments = await postFunct.methods.getPostComments(this.post_id)
    },

    async searchingComments (this: any): Promise<void> {
      const keyWord = this.searchingKeyWord.toLowerCase()
      await this.getPostComments()
      if (this.searchingKeyWord) {
        this.postComments = _lodash.filter(this.postComments, function (el: IPostComment) {
          if (el.name.toLowerCase().includes(keyWord) || el.body.toLowerCase().includes(keyWord) || el.email.toLowerCase().includes(keyWord)) {
            return el
          }
        })
      }
    }
  }
})
</script>
