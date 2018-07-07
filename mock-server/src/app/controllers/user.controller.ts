import { Context } from 'koa'
import { User, UserLoginDTO, UserRegisterDTO, UserVO, UserUpdateDTO, UserRole } from '../models'
import { success, response, ResponseCode, createToken } from '../utils'
import { UserRepository } from '../repositories'

export class UserController {

  static login(ctx: Context) {
    const userLoginDTO = new UserLoginDTO(ctx.request.body as User)
    const user = UserRepository.findByUsernameAndPassword(userLoginDTO.username, userLoginDTO.password)
    if (user) {
      ctx.body = success(new UserVO(user, createToken(user)))
      return
    }
    ctx.body = response(ResponseCode.LOGIN_FAILED)
  }

  static register(ctx: Context) {
    const userRegisterDTO = new UserRegisterDTO(ctx.request.body as User)

    const user = UserRepository.findByUsername(userRegisterDTO.username)
    if (!user) {
      UserRepository.save(userRegisterDTO)
      ctx.body = success(new UserVO(userRegisterDTO, createToken(userRegisterDTO)))
      return
    }
    ctx.body = response(ResponseCode.EXISIT)
  }

  static findById(ctx: Context) {
    const { id } = ctx.params

    const user = UserRepository.findById(id)
    if (user) {
      ctx.body = success(new UserVO(user))
      return
    }
    ctx.body = response(ResponseCode.NOT_EXISIT)
  }

  static findAll(ctx: Context) {
    ctx.body = success(UserRepository.find().map(user => new UserVO(user)))
  }

  static delete(ctx: Context) {
    const { id } = ctx.params
    const user = ctx.state.user as User

    if (user.role === UserRole.ADMIN && UserRepository.deleteById(id)) {
      ctx.body = success()
      return
    }
    ctx.body = response(ResponseCode.NOT_EXISIT)
  }

  static update(ctx: Context) {
    const userUpdateDTO = new UserUpdateDTO(ctx.request.body as User)
    const user = ctx.state.user as User

    const newUser = UserRepository.updateById(user.id, userUpdateDTO)
    if (newUser) {
      ctx.body = success(new UserVO(newUser))
      return
    }
    ctx.body = response(ResponseCode.NOT_EXISIT)
  }

  static auth(ctx: Context) {
    const user = ctx.state.user as User

    if (user) {
      ctx.body = success(new UserVO(user, createToken(user)))
      return
    }
    ctx.body = response(ResponseCode.TOKEN_EXPIRED)
  }

  static logout(ctx: Context) {
    ctx.body = success()
  }
}
