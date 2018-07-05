export class User {
  id: string
  username: string
  password: string
  avatarPath: string
  role: UserRole = UserRole.USER
}

export class UserVO extends User {
  id: string
  username: string
  avatarPath: string
  role: UserRole
  token: string
  constructor(user: User, token?: string) {
    super()
    this.id = user.id
    this.username = user.username
    this.avatarPath = user.avatarPath
    this.role = user.role
    if (token) {
      this.token = token
    }
  }
}

export class UserLoginDTO extends User {
  readonly username: string
  readonly password: string
  constructor(user: User) {
    super()
    this.username = user.username
    this.password = user.password
  }
}

export class UserRegisterDTO extends User {
  readonly username: string
  readonly password: string
  constructor(user: User) {
    super()
    this.username = user.username
    this.password = user.password
  }
}

export class UserUpdateDTO extends User {
  readonly avatarPath: string
  constructor(user: User) {
    super()
    this.avatarPath = user.avatarPath
  }
}

export const enum UserRole {
  USER,
  ADMIN
}
