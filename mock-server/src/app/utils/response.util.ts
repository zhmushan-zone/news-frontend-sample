export enum ResponseCode {
  UNKNOWN = -1,
  SUCCESS = 1,
  LOGIN_FAILED = 100,
  EXISIT = 101
}

export const response = (code: ResponseCode, data?: any) => ({ code, msg: ResponseCode[code], data })

export const success = (data?: any) => response(ResponseCode.SUCCESS, data)
