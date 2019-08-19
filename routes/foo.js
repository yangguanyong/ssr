var router = require('koa-router')();
var util = require('../util/util')
var http = require('../util/http')

router.get('/foo', function *(next) {
  let {path, option} = util.getRenderLocals(this, 'foo/foo', { // 第二个参数为模板路径
    tid: 'M',
    tdk: ['server test'],
    vm: yield * require('./../vm/foo')(),
  })
  yield this.render(path, option) // 第一个参数是view模板的路径，第二个是传入模板中的参数，this.render是由koa-views注入的方法
});

module.exports = router;