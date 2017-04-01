var sequelize = require('../../../config/db'),
  path = require('path'),
  UserInfo = sequelize.import('../../models/UserInfo'),
  UserMoreInfo = sequelize.import('../../models/UserMoreInfo'),
  md5 = require('md5')
sequelize.import(path.join(__dirname, '../../models/ZC_Session'))
// 建立模型之间的关系
UserInfo.hasOne(UserMoreInfo, {
  foreignKey: 'UserID'
})
/* 用户登录页面渲染控制器 */
exports.showSignin = function (req, res) {
  res.render('passport/login', {
    title: '登录页面'
  })
}

/* 用户登陆控制器 */
exports.signin = function (req, res) {
  var user = req.query.user || '',
    _user = {};
  user = user.split('&');
  for (var i = 0; i < user.length; i++) {
    var p = user[i].indexOf('='),
      name = user[i].substring(0, p),
      value = user[i].substring(p + 1);
    _user[name] = value;
  }
  var _name = _user.name || '',
    _password = _user.password || '';

  // 使用findOne对数据库中UserInfo进行查找
  UserInfo.findAll({
    where: {
      Phone: _name
    },
    include: [UserMoreInfo]
  }).then(function (users) {
    console.log('==================+++++++++++++++++++++++++')
    console.log(users[0].dataValues.Password)
    console.log(JSON.stringify(users))
    if (!users) {

      return res.json({
        resultId: -1,
        message: '用户不存在'
      });
    }


    if (users[0].dataValues.Password.toLowerCase() !== md5(md5(_password))) {
      return res.json({
        resultId: -1,
        message: '密码错误'
      })
    } else {

      req.session.user = users[0].dataValues;
      return res.json({
        resultId: 200,
        message: '登录成功'
      })
    }
  })


}

exports.logout = function (req, res) {
  delete req.session.user;

  res.redirect('/')
}
//- https://github.com/sequelize/sequelize/blob/master/test/integration/model/create/include.test.js