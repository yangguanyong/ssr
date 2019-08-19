var got = require('got')
var http = require('http')

const port = '223' // 本地IP

// vm 中可以直接利用get方法
// jq 中要ajax到router作为中转

function * get (url, query) {
  // let baseUrl = 'http://127.0.0.1:8081' + url
  let baseUrl = 'http://192.168.1.' + port + ':8081' + url
  try {
    const req = got['get'](baseUrl, {
      query: query
    })
    res = (yield Promise.resolve(req)).body; // todo
    return res
  } catch (error) {
    console.log('error')
  }
}

function * post (url, body) {
  // let baseUrl = 'http://127.0.0.1:8081' + url
  let baseUrl = 'http://192.168.1.' + port + ':8081' + url
  try {
    const req = got['post'](baseUrl, {
      json: true,
      body: body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    res = (yield Promise.resolve(req)).body;
    return res
  } catch (error) {
    console.log('error')
  }
}

module.exports = {
  get: get,
  post: post
}