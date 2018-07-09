export class News {
  id: string
  title: string
  content: string
  tags: NewsTag[]
  authorId: string
}

export enum NewsTag {}
