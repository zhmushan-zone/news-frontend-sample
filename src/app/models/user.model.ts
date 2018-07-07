export interface User {
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
