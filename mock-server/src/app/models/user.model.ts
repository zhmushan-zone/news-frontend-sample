export class User {
  username: string
  password: string
  role: UserRole
}

export class UserVO extends User {
  username: string
  role: UserRole
  token: string
  constructor(user: User, token?: string) {
    super()
    this.username = user.username
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

export const enum UserRole {
  USER,
  ADMIN
}
