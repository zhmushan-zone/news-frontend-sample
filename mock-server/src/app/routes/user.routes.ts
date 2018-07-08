import * as koaRouter from 'koa-router'
import { UserController } from '../controllers'
import { validateTokenMiddleware } from '../utils'

export const userRouter = new koaRouter({ prefix: '/user' })
userRouter
  .post('/login', UserController.login)
  .post('/register', UserController.register)
  .get('/auth', validateTokenMiddleware, UserController.auth)
  .get('/logout', UserController.logout)
  .get('/:id', UserController.findById)
  .get('/', validateTokenMiddleware, UserController.findAll)
  .del('/:id', validateTokenMiddleware, UserController.delete)
  .put('/', validateTokenMiddleware, UserController.update)
