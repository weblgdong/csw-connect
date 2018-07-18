const router = require('koa-router')();
const imgTransform = require('./imgTransform');

router.use('/',imgTransform.routes(),imgTransform.allowedMethods())

module.exports = router;