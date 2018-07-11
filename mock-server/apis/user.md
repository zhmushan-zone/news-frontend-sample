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
  "code": 1,
  "msg": "SUCCESS",
  "data": {
    "id": "id",
    "username": "username",
    "avatarPath": "avatarPath",
    "role": 0,
    "sex": 0,
    "age": 0,
    "updateAt": Date,
    "createAt": Date,
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
  "code": 1,
  "msg": "SUCCESS",
  "data": {
    "id": "id",
    "username": "username",
    "avatarPath": "avatarPath",
    "role": 0,
    "sex": 0,
    "age": 0,
    "updateAt": Date,
    "createAt": Date,
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
---
## Logout
```
GET /api/user/logout
```

headers
```
{
  "token": "token"
}
```

返回
```
{
  "code": 1,
  "msg": "SUCCESS"
}
```
---
## Auth
```
GET /api/user/auth
```

headers
```
{
  "token": "token"
}
```

返回
```
{
  "code": 1,
  "msg": "SUCCESS",
  "data": {
    "id": "id",
    "username": "username",
    "avatarPath": "avatarPath",
    "role": 0,
    "sex": 0,
    "age": 0,
    "updateAt": Date,
    "createAt": Date,
    "token": "token"
  }
}
```
```
{
  "code": 103,
  "msg": "TOKEN_EXPIRED"
}
```
---
## FindById
```
GET /api/user/:id
```

返回
```
{
  "code": 1,
  "msg": "SUCCESS",
  "data": {
    "id": "id",
    "username": "username",
    "avatarPath": "avatarPath",
    "role": 0,
    "sex": 0,
    "age": 0,
    "updateAt": Date,
    "createAt": Date
  }
}
```
```
{
  "code": 102,
  "msg": "NOT_EXISIT"
}
```
---
## FindAll
```
GET /api/user
```

headers
```
{
  "token": "token"
}
```

返回
```
{
  "code": 1,
  "msg": "SUCCESS",
  "data": [{
    "id": "id",
    "username": "username",
    "avatarPath": "avatarPath",
    "role": 0,
    "sex": 0,
    "age": 0,
    "updateAt": Date,
    "createAt": Date
  }]
}
```
```
{
  "code": 104,
  "msg": "NO_PERMISSION"
}
```
---
## Delete
```
DELETE /api/user/:id
```

headers
```
{
  "token": "token"
}
```

返回
```
{
  "code": 1,
  "msg": "SUCCESS"
}
```
```
{
  "code": 102,
  "msg": "NOT_EXISIT"
}
```
---
## Update
```
PUT /api/user
```

headers
```
{
  "token": "token"
}
```

参数
```
{
  "id": "id",
  "username": "username",
  "password": "password",
  "avatarPath": "avatarPath",
  "role": 0,
  "sex": 0,
  "age": 0,
  "token": "token"
}
```

返回
```
{
  "code": 1,
  "msg": "SUCCESS",
  "data": {
    "id": "id",
    "username": "username",
    "avatarPath": "avatarPath",
    "role": 0,
    "sex": 0,
    "age": 0,
    "updateAt": Date,
    "createAt": Date
  }
}
```
```
{
  "code": 102,
  "msg": "NOT_EXISIT"
}
```
```
{
  "code": 104,
  "msg": "NO_PERMISSION"
}
```
```
{
  "code": 101,
  "msg": "EXISIT"
}
```
