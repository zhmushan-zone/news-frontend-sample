import { Context } from 'koa'
import { NewsService } from '../services'
import { success, response, ResponseCode } from '../utils'
import { NewsVO, News, NewsCreateDTO, User, NewsUpdateDTO, UserRole } from '../models'

export class NewsController {

  static findOne(ctx: Context) {
    const { id } = ctx.params

    const news = NewsService.findById(id)
    if (news) {
      ctx.body = success(news)
      return
    }
    ctx.body = response(ResponseCode.NOT_EXISIT)
  }

  static findAll(ctx: Context) {
    const newses = NewsService.find()

    ctx.body = success(newses.map(n => new NewsVO(n)))
  }

  static findByTags(ctx: Context) {
    const { tag } = ctx.params

    ctx.body = success(NewsService.findByTag(Number.parseInt(tag)))
  }

  static create(ctx: Context) {
    const newsCreateDTO = new NewsCreateDTO(ctx.request.body as News)
    const user = ctx.state.user as User

    newsCreateDTO.id = (+new Date()).toString()
    newsCreateDTO.createAt = new Date()
    newsCreateDTO.updateAt = new Date()
    newsCreateDTO.authorId = user.id
    NewsService.save(newsCreateDTO)
    ctx.body = success(newsCreateDTO)
  }

  static update(ctx: Context) {
    const newsUpdateDTO = new NewsUpdateDTO(ctx.request.body as News)
    const user = ctx.state.user as User

    if (user.id === newsUpdateDTO.authorId || user.role === UserRole.SUPER) {
      const news = NewsService.updateById(newsUpdateDTO.id, newsUpdateDTO)

      if (news) {
        ctx.body = success(news)
        return
      }
      ctx.body = response(ResponseCode.NOT_EXISIT)
      return
    }
    ctx.body = response(ResponseCode.NO_PERMISSION)
  }

  static delete(ctx: Context) {
    const { id } = ctx.params
    const user = ctx.state.user as User
    const news = NewsService.findById(id)

    if (news) {
      if (news.authorId === user.id || user.role === UserRole.SUPER) {
        if (NewsService.deleteById(id)) {
          ctx.body = success()
          return
        }
        ctx.body = response(ResponseCode.NOT_EXISIT)
        return
      }
      ctx.body = response(ResponseCode.NO_PERMISSION)
      return
    }
    ctx.body = response(ResponseCode.NOT_EXISIT)
  }
}
