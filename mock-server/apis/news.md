## FindOne
```
GET /api/news/:id
```

返回
```
{
  "code": 1,
  "msg": "SUCCESS",
  "data": {
    "id": "id",
    "title": "title",
    "content": "content",
    "tags": [0, 1],
    "authorId": "authorId"
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
GET /api/news
```

返回
```
{
  "code": 1,
  "msg": "SUCCESS",
  "data": [{
    "id": "id",
    "title": "title",
    "content": "content",
    "tags": [0, 1],
    "authorId": "authorId"
  }]
}
```
---
## Create
```
POST /api/news
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
  "title": "title",
  "content": "content",
  "tags": [0, 1]
}
```

返回
```
{
  "code": 1,
  "msg": "SUCCESS",
  "data": [{
    "id": "id",
    "title": "title",
    "content": "content",
    "tags": [0, 1],
    "authorId": "authorId"
  }]
}
```
---
## Update
```
PUT /api/news
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
  "title": "title",
  "content": "content",
  "tags": [0, 1]
}
```
返回
```
{
  "code": 1,
  "msg": "SUCCESS",
  "data": [{
    "id": "id",
    "title": "title",
    "content": "content",
    "tags": [0, 1],
    "authorId": "authorId"
  }]
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
---
## Delete
```
DELETE /api/news/:id
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

