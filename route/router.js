var Index = require('../app/controllers/Index/index'),
  Passport = require('../app/controllers/passport/passport'),



  multipart = require('connect-multiparty'), // 处理文件上传中间件
  multipartMiddleware = multipart();

module.exports = function (app) {
  // 用户登录处理
  app.use(function (req, res, next) {
    console.log(req.session + '==============')
    app.locals.user = req.session.user; // 将session中保存的用户名存储到本地变量中
    next();
  });
  app.get('/', Index.index);
};