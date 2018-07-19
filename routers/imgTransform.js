// 图片格式转换
const router = require('koa-router')();
const {
  getUrlName
} = require('../utils/index');

const {
  findData,
  saveData
} = require('../control/dbAction');

const getRequest = require('../control/getRequest');

module.exports = router.get('/', async (ctx) => {
  let request = ctx.request.query;
  let url = request.url;
  let body = '';
  let name = getUrlName(url);
  let exists = await findData(name);
  if (exists) {
    body = exists.url;
  } else {
    body = await getRequest(url);
    await saveData(name, body);
  }
  ctx.body = body;
});