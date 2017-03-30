var sequelize = require('../../../config/db')
var path = require('path')
sequelize.import(path.join(__dirname, '../../models/ZC_Session'))
var User = sequelize.import('../../models/UserInfo')
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

  User.findAll({
    where: {
      Phone: _name
    }
  }).then(function (users) {

    console.log('======')
    console.log(users)
    return res.json({
      data: 0
    })
  })


}