<template>
  <div class="about">
    <b-table striped hover
             :fields="postTable.fields"
             :items="postTable.items">
      <template #cell(actions)="row">
        <b-button variant="primary" @click="goViewPostDetails(row.item.id)">Post {{row.item.id}}</b-button>
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">
import { postFunct } from '@/assets/script/post/post'
import { ITableFields, IPosts, ITable, ISearchingTable } from '@/assets/script/type'
import Vue from 'vue'

export default Vue.extend({
  name: 'PostsView',
  mixins: [postFunct],
  components: {
  },
  data () {
    return {
      postTable: {
        fields: [
          { key: 'id', label: 'Post Id' },
          { key: 'userId', label: 'User Id' },
          { key: 'title', label: 'Title' },
          { key: 'id', label: 'Post Id' },
          { key: 'body', label: 'Content' },
          { key: 'actions', label: '-' }
        ] as ITableFields,
        items: [] as IPosts,
        pageIndex: 1,
        pageSize: 10,
        sortBy: 'id',
        sortOrder: 'desc'
      } as ITable
    }
  },
  async mounted () {
    await this.getPosts()
  },
  methods: {
    async getPosts (this: any): Promise<void> {
      const searchingTableParams = {
        byId: '',
        byTitle: '',
        byUserId: '',
        byBody: '',

        pageIndex: this.postTable.pageIndex,
        pageSize: this.postTable.pageSize,
        sortBy: this.postTable.sortBy,
        sortOrder: this.postTable.sortOrder
      } as ISearchingTable

      this.postTable.items = await postFunct.methods.getPosts(searchingTableParams)
    },

    goViewPostDetails (this: any, postId: string): void {
      this.$router.push(`/details/${postId}`)
    }
  }
})
</script>
