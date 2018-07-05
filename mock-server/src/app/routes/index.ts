import * as koaRouter from 'koa-router'
import { userRouter } from './user.routes'
import { newsRouter } from './news.routes'

export const router = new koaRouter({ prefix: '/api' })
router
  .use(userRouter.routes())
  .use(newsRouter.routes())
