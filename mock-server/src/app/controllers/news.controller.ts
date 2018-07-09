import { Context } from 'koa'
import { NewsRepository } from '../repositories'
import { success, response, ResponseCode } from '../utils'
import { NewsVO } from '../models'

export class NewsController {

  static findOne(ctx: Context) {
    const { id } = ctx.params

    const news = NewsRepository.findById(id)
    if (news) {
      ctx.body = success(news)
      return
    }
    ctx.body = response(ResponseCode.NOT_EXISIT)
  }

  static findAll(ctx: Context) {
    const newses = NewsRepository.find()

    ctx.body = success(newses.map(n => new NewsVO(n)))
  }
}
