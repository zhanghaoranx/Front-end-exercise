# 前端面试知识库
## axios常用的请求方法有哪些
### 1.GET
#### 用于从服务器获取数据，常用于请求数据而不提交数据。
```javascript
axios.get('/url', { params: { key: 'value' } })
```

### 2.POST
#### 用于向服务器提交数据，通常用于创建资源。
```javascript
axios.post('/url', { key: 'value' })
```

### 3.PUT
#### 用于更新服务器上的资源，通常用于完全替换资源。
```javascript
axios.put('/url', { key: 'value' })
```

### 4.DELETE
#### 用于删除服务器上的资源。
```javascript
axios.delete('/url', { data: { key: 'value' } })
```

### 5.PATCH
#### 用于部分更新服务器上的资源。
```javascript
axios.patch('/url', { key: 'value' })
```

### 其他配置选项
#### 除了这些请求方法，axios 还支持多种配置选项，比如：
- headers：自定义请求头。
- timeout：设置请求超时时间。
- responseType：指定响应数据类型（如 json、blob、text）。