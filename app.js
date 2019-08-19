/*
1, 开一个服务器
2，对应相应页面路由
3，不同路由可以获取接口，然后渲染模板，
4，模板里面可以引入样式文件，能引入页面交互js
5，能适应pc 和 m
6，返回html
*/
var app = require('koa')()
  , logger = require('koa-logger')
  , json = require('koa-json')
  , views = require('koa-views')
  , onerror = require('koa-onerror')
  , fs = require('fs')
  , path = require('path')
  , co = require('co');

// error handler
onerror(app);

// config
// npm run dev: 'set NODE_ENV=production && nodemon bin/www' cannot hot reset

process.conf = require('./config/global')(process.env.NODE_ENV || 'development')

const util = require('./util/util.js');

// global middlewares
app.use(views('views', {
  root: __dirname + '/views',
  default: 'jade',
}));

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
co(function*(next) {
  const routerPath = './routes/'
  const files = yield util.readdir(path.join(__dirname, routerPath))
  files.forEach(val => {
    const router = require(path.join(__dirname, routerPath, val))
    app.use(router.routes(), router.allowedMethods());
  })
})
// var index = require('./routes/index');
// var users = require('./routes/users');
// var foo = require('./routes/foo');
// app.use(index.routes(), index.allowedMethods());
// app.use(users.routes(), users.allowedMethods());
// app.use(foo.routes(), foo.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;
