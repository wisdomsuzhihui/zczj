var Index = require('../app/controllers/Index/index'),
  Passport = require('../app/controllers/passport/passport'),



  multipart = require('connect-multiparty'), // 处理文件上传中间件
  multipartMiddleware = multipart();

module.exports = function (app) {
  // 用户登录处理
  app.use(function (req, res, next) {
    app.locals.user = req.session.user; // 将session中保存的用户名存储到本地变量中
    console.log(JSON.stringify(app.locals.user))

    next();
  });

  /*============== 公共路由 ==============*/
  app.get('/', Index.index);

  // 用户登陆路由
  app.get('/signin', Passport.showSignin)
  app.get('/passport/signin', Passport.signin)
};