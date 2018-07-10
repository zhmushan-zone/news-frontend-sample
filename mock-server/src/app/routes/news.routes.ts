import * as koaRouter from 'koa-router'
import { NewsController } from '../controllers'
import { validateTokenMiddleware } from '../utils'

export const newsRouter = new koaRouter({prefix: '/news'})
newsRouter
  .get('/tag/:tag', NewsController.findByTags)
  .get('/:id', NewsController.findOne)
  .get('/', NewsController.findAll)
  .post('/', validateTokenMiddleware, NewsController.create)
  .put('/', validateTokenMiddleware, NewsController.update)
  .del('/:id', validateTokenMiddleware, NewsController.delete)
