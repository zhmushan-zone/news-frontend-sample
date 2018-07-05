## Login
```
POST /api/user/login
```

参数
```
{
  "username": "username",
  "password": "password"
}
```

返回
```
{
  "code": "1",
  "msg": "SUCCESS",
  "data": {
    "username": "username",
    "role": 0,
    "token": "token"
  }
}
```
```
{
  "code": 100,
  "msg": "LOGIN_FAILED"
}
```
---
## Register
```
POST /api/user/register
```

参数
```
{
  "username": "username",
  "password": "password"
}
```

返回
```
{
  "code": "1",
  "msg": "SUCCESS",
  "data": {
    "username": "username",
    "role": 0,
    "token": "token"
  }
}
```
```
{
  "code": 101,
  "msg": "EXISIT"
}
```
