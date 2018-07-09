import { Context } from 'koa'
import { User, UserLoginDTO, UserRegisterDTO, UserVO, UserUpdateDTO, UserRole } from '../models'
import { success, response, ResponseCode, createToken } from '../utils'
import { UserService } from '../services'

export class UserController {

  static login(ctx: Context) {
    const userLoginDTO = new UserLoginDTO(ctx.request.body as User)
    const user = UserService.findByUsernameAndPassword(userLoginDTO.username, userLoginDTO.password)
    if (user) {
      ctx.body = success(new UserVO(user, createToken(user)))
      return
    }
    ctx.body = response(ResponseCode.LOGIN_FAILED)
  }

  static register(ctx: Context) {
    const userRegisterDTO = new UserRegisterDTO(ctx.request.body as User)

    const user = UserService.findByUsername(userRegisterDTO.username)
    if (!user) {
      userRegisterDTO.id = userRegisterDTO.username
      userRegisterDTO.createAt = new Date()
      userRegisterDTO.updateAt = new Date()
      UserService.save(userRegisterDTO)
      ctx.body = success(new UserVO(userRegisterDTO, createToken(userRegisterDTO)))
      return
    }
    ctx.body = response(ResponseCode.EXISIT)
  }

  static findById(ctx: Context) {
    const { id } = ctx.params

    const user = UserService.findById(id)
    if (user) {
      ctx.body = success(new UserVO(user))
      return
    }
    ctx.body = response(ResponseCode.NOT_EXISIT)
  }

  static findAll(ctx: Context) {
    const user = ctx.state.user as User

    if (user.role === UserRole.ADMIN || user.role === UserRole.SUPER) {
      ctx.body = success(UserService.find().map(u => new UserVO(u)))
      return
    }
    ctx.body = response(ResponseCode.NO_PERMISSION)
  }

  static delete(ctx: Context) {
    const { id } = ctx.params
    const user = ctx.state.user as User
    const targetUser = UserService.findById(id)

    if (user.role < targetUser.role && UserService.deleteById(id)) {
      ctx.body = success()
      return
    }
    ctx.body = response(ResponseCode.NOT_EXISIT)
  }

  static update(ctx: Context) {
    const userUpdateDTO = new UserUpdateDTO(ctx.request.body as User)
    const user = ctx.state.user as User

    const targetUser = UserService.findById(userUpdateDTO.id)
    if (user.id === userUpdateDTO.id || user.role < targetUser.role) {
      if (user.role !== UserRole.SUPER) {
        userUpdateDTO.role = targetUser.role
      }
      const newUser = UserService.updateById(userUpdateDTO.id, userUpdateDTO)
      if (newUser) {
        ctx.body = success(new UserVO(newUser, createToken(newUser)))
        return
      }
      ctx.body = response(ResponseCode.NOT_EXISIT)
      return
    }
    ctx.body = response(ResponseCode.NO_PERMISSION)
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
