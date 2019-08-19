var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index/index', {
    title: 'Hello World Koa!',
    vm: yield * require('./../vm/foo')(),
  });
});

module.exports = router;
