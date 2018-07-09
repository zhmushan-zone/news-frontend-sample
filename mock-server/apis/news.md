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
    "tags": ["html", "css"],
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
## FindByTags
```
GET /api/news/tags/:tags
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
    "tags": ["html", "css"],
    "authorId": "authorId"
  }]
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
    "tags": ["html", "css"],
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
  "tags": ["html", "css"]
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
    "tags": ["html", "css"],
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
  "tags": ["html", "css"]
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
    "tags": ["html", "css"],
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

