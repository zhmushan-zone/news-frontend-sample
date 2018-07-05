import * as koaRouter from 'koa-router'
import { UserController } from '../controllers'

export const userRouter = new koaRouter({ prefix: '/user' })
userRouter
  .post('/login', UserController.login)
  .post('/register', UserController.register)
