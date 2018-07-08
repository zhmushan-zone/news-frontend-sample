export class User {
  id: string;
  username: string;
  password: string;
  avatarPath: string;
  role: UserRole;
  sex: UserSex;
  age: number;
  updateAt: Date;
  createAt: Date;
  token: string;
  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.password = user.password;
    this.avatarPath = user.avatarPath;
    this.role = user.role;
    this.sex = user.sex;
    this.age = user.age;
    this.updateAt = user.updateAt;
    this.createAt = user.createAt;
    this.token = user.token;
  }
}

export enum UserRole {
  SUPER,
  ADMIN,
  USER
}

export enum UserSex {
  MALE,
  FEMALE
}
