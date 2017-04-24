var News = require('../app/controllers/News/news'),
  Passport = require('../app/controllers/passport/passport'),
  Index = require('../app/controllers/Index/index'),
  Data = require('../app/controllers/Data/data'),



  multipart = require('connect-multiparty'), // 处理文件上传中间件
  multipartMiddleware = multipart();

module.exports = function (app) {
  // 用户登录处理
  app.use(function (req, res, next) {
    app.locals.user = req.session.user || ''; // 将session中保存的用户名存储到本地变量中
    next();
  });

  /*============== 公共路由 ==============*/
  // 首页
  app.get('/', Index.index)
  // 用户登陆路由
  app.get('/signin', Passport.showSignin)
  app.get('/passport/signin', Passport.signin)
  app.get('/isLogin', Passport.isLogin)

  // 用户登出路由
  app.get('/logout', Passport.logout)

  // 新闻
  app.get('/news', News.index);
  app.get('')

  // 数据
  app.get('/data', Data.index);
  app.get('/getJson', Data.getJson)

};