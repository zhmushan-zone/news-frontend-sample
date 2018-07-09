import { Context } from 'koa'
import { NewsService } from '../services'
import { success, response, ResponseCode } from '../utils'
import { NewsVO } from '../models'

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
}
