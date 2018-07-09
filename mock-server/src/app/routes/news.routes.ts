import * as koaRouter from 'koa-router'
import { NewsController } from '../controllers'

export const newsRouter = new koaRouter({prefix: '/news'})
newsRouter
  .get('/:id', NewsController.findOne)
  .get('/', NewsController.findAll)
