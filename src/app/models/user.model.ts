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

export const enum UserRole {
  SUPER,
  ADMIN,
  USER
}

export const enum UserSex {
  MALE,
  FEMALE
}
