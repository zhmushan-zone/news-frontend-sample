import { User } from '../models'
import { UserService } from '../services'
import { Context } from 'koa'

export const createToken = (user: User) => user.username

export const validateToken = (token: string) => UserService.findByUsername(token)

export const validateTokenMiddleware = (ctx: Context, next) => {
  const { token } = ctx.headers

  const user = validateToken(token)
  ctx.state.user = user
  next()
}
