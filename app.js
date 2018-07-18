const http = require('http');
const Koa = require('koa');
const mongoose = require('mongoose');
const cors = require('koa2-cors');
const app = new Koa();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/csw-web',{ useNewUrlParser: true });
const db = mongoose.connection;
// 数据库连接成功
db.once('open',()=>{
  console.log('cws-web db open');
});
// 数据库连接失败
db.on('error',console.error.bind(console,'connection error'));

//路由
const router = require('./routers/index');

app.use(router.routes(),router.allowedMethods());

app.listen(4001);
