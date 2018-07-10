import newsData = require('../../../data/news.json')
import { News, NewsTag } from '../models'
const newses: News[] = newsData

export class NewsService {

  static find() {
    return newses || []
  }

  static findById(id: string) {
    for (const news of newses) {
      if (news.id === id) {
        return news
      }
    }
    return
  }

  static save(news: News) {
    newses.push(news)
  }

  static deleteById(id: string) {
    for (const key in newses) {
      if (newses.hasOwnProperty(key)) {
        const news = newses[key]
        if (news.id === id) {
          newses.splice(Number.parseInt(key), 1)
          return true
        }
      }
    }
    return false
  }

  static updateById(id: string, news: News) {
    for (const key in newses) {
      if (newses.hasOwnProperty(key)) {
        if (newses[key].id === id) {
          newses[key] = { ...newses[key], ...news }
          return newses[key]
        }
      }
    }
    return
  }

  static findByTag(tag: number) {
    return newses.filter(n => (n.tags.length - new Set([...n.tags, tag]).size) === 0)
  }
}
