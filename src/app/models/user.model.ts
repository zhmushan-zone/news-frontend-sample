export interface User {
  id: string;
  username: string;
  password: string;
  avatarPath: string;
  role: UserRole;
  token: string;
}

export const enum UserRole {
  USER,
  ADMIN,
  SUPER
}
