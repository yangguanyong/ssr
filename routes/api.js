var router = require('koa-router')();
const got = require('got');
const qs = require('querystring');
const http = require('./../util/http')
const dao = require('./../util/dao').dao

for (const i in dao) {
  const item = dao[i]
  const key = i
  const type = item.type // get or post
  const path = item.path
  const query = item.param || {}
  router.get(`/${key}`, function * (next) {
    this.body = yield * http[type](path, query)
  })
}

router.get('/testGet', function *(next) { // get 示例
  this.body = yield * http.get('/api/getComment', this.query) // todo: query & body, 接收的是ajax的query
})

router.get('/testPost', function *(next) { // post 示例
  this.body = yield * http.post('/api/addComment', this.query) // todo: query & body, 接收的是ajax的data
})

module.exports = router;