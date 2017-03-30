"use strict";

var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  fs = require('fs'),
  cookieParser = require('cookie-parser'),
  Sequelize = require('sequelize'),
  session = require('express-session'),
  SequelizeStore = require('connect-session-sequelize')(session.Store),
  db = require('./config/db'),
  port = process.env.PORT || 3000,
  app = express();


app.set('views', './app/views/pages');
app.set('view engine', 'jade');


db.import(path.join(__dirname, './app/models/ZC_Session'))
app.use(cookieParser());
app.use(session({
  secret: 'zczj',
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: db,
    table: 'ZC_Session'
  })
}))


var env = process.env.NODE_ENV || 'development'; // 获取当前环境

// 如果是开发环境
if (env === 'development') {
  app.set('showStackError', true); // 在屏幕上将错误信息打印出来
  app.use(logger(':method :url :status')); // 显示请求的类型、路径和状态
  app.locals.pretty = true; // 源码格式化，不要压缩
  // mongoose.set('debug',true);                    // 显示数据库查询信息
}


require('./route/router')(app);
app.use(express.static(path.join(__dirname, 'public')));
app.locals.moment = require('moment');
app.listen(port);

console.log('douban started on port:' + port);