export interface Response<T> {
  code: ResponseCode;
  msg: string;
  data: T;
}

export enum ResponseCode {
  UNKNOWN = -1,
  SUCCESS = 1,
  LOGIN_FAILED = 100,
  EXISIT = 101,
  NOT_EXISIT = 102
}
