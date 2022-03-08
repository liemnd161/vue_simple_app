export interface IApiResponse {
  data: any,
  status: number
}

export interface IPost {
  userId: number,
  id: number,
  title: string,
  body: string,
  isChecked: boolean
}

export interface IPostComment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

export interface IPosts extends Array<IPost> { }
export interface IPostComments extends Array<IPostComment> { }

export interface IPagination {
  pageIndex: number,
  pageSize: number,
  sortBy: string,
  sortOrder: string
}

export interface ITable {
  items: Array,
  fields: Array<ITableField>,
  pageIndex: number,
  pageSize: number,
  sortBy: string,
  sortOrder: string
}

export interface ITableField {
  key: string,
  label: string,
  sortable: boolean
}

export interface ITableFields extends Array<ITableField> { }

export interface ISearchingTable extends IPagination {
  byId: string,
  byUserId: string,
  byTitle: string,
  byBody: string
}


