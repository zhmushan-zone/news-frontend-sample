export class User {
  id: string
  username: string
  password: string
  avatarPath: string
  role: UserRole = UserRole.USER
  sex: UserSex = UserSex.MALE
  age: number
  updateAt: Date
  createAt: Date
}

export class UserVO extends User {
  id: string
  username: string
  avatarPath: string
  role: UserRole
  updateAt: Date
  createAt: Date
  token: string
  constructor(user: User, token?: string) {
    super()
    this.id = user.id
    this.username = user.username
    this.avatarPath = user.avatarPath
    this.role = user.role
    this.sex = user.sex
    this.age = user.age
    this.updateAt = user.updateAt
    this.createAt = user.createAt
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
  readonly id: string
  readonly username: string
  readonly password: string
  readonly avatarPath: string
  role: UserRole
  readonly sex: UserSex
  readonly age: number
  constructor(user: User) {
    super()
    this.id = user.id
    this.username = user.username
    this.password = user.password
    this.avatarPath = user.avatarPath
    this.role = user.role
    this.sex = user.sex
    this.age = user.age
  }
}

export const enum UserRole {
  SUPER,
  ADMIN,
  USER
}

export const enum UserSex {
  MALE,
  FEMALE
}
