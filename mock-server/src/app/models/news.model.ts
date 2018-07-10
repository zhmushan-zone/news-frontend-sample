export class News {
  id: string
  title: string
  content: string
  tags: NewsTag[]
  authorId: string
  createAt: Date
  updateAt: Date
}

export enum NewsTag {
  html,
  css,
  css3,
  html5,
  flash
}

export class NewsVO extends News {
  id: string
  title: string
  content: string
  tags: NewsTag[]
  authorId: string
  createAt: Date
  updateAt: Date
  constructor(news: News) {
    super()
    this.id = news.id
    this.title = news.title
    this.content = news.content
    this.tags = news.tags
    this.authorId = news.authorId
    this.createAt = news.createAt
    this.updateAt = news.updateAt
  }
}

export class NewsCreateDTO extends News {
  readonly title: string
  readonly content: string
  readonly tags: NewsTag[]
  constructor(news: News) {
    super()
    this.title = news.title
    this.content = news.content
    this.tags = news.tags
  }
}

export class NewsUpdateDTO extends News {
  readonly id: string
  readonly title: string
  readonly content: string
  readonly tags: NewsTag[]
  readonly authorId: string
  constructor(news: News) {
    super()
    this.id = news.id
    this.title = news.title
    this.content = news.content
    this.tags = news.tags
    this.authorId = news.authorId
  }
}
