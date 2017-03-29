"use strict";

var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),

  logger = require('morgan'),
  fs = require('fs'),
  cookieParser = require('cookie-parser'),
  Sequelize = require('sequelize'),
  config = require('./config/config'),
  session = require('express-session'),
  // Sequelize = require('sequelize'),
  SequelizeStore = require('connect-session-sequelize')(session.Store),
  // sequelize = require('./config/db'),
  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    post: config.port,
    logging: console.log,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }),
  http = require('http'),

  port = process.env.PORT || 3000,

  app = express();


app.set('views', './app/views/pages'); // 视图文件根目录
app.set('view engine', 'jade'); // 设置模板引擎
app.use(express.static(path.join(__dirname, 'public'))); // 设置静态文件目录
app.locals.moment = require('moment'); // 引入moment模块并设置为app.locals属性,用来格式化时间

// models loading
var models_path = __dirname + '/app/models'; // 模型所在路径

// 路径加载函数，加载各模型的路径,所以可以直接通过mongoose.model加载各模型 这样即使模型路径改变也无需更改路径
var walk = function (path) {
  fs
    .readdirSync(path)
    .forEach(function (file) {
      var newPath = path + '/' + file;
      var stat = fs.statSync(newPath);
      // 如果是文件
      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
          require(newPath);
        }
        // 如果是文件夹则继续遍历
      } else if (stat.isDirectory()) {
        walk(newPath);
      }
    });
};
walk(models_path); // 加载模型所在路径

app.use(cookieParser());
app.use(session({
  secret: 'zczj',
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
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


require('./route/router')(app); // 路由控制

app.listen(port); // 服务器监听端口

console.log('douban started on port:' + port);