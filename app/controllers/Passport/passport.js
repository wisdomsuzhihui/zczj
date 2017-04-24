var sequelize = require('../../../config/db'),
  path = require('path'),
  crypto = require('crypto'),
  md5 = crypto.getHashes('md5'),
  UserInfo = sequelize.import('../../models/UserInfo'),
  UserMoreInfo = sequelize.import('../../models/UserMoreInfo'),
  FriendLinks = sequelize.import('../../models/FriendLink')
sequelize.import(path.join(__dirname, '../../models/ZC_Session'))
// 建立模型之间的关系
UserInfo.hasOne(UserMoreInfo, {
  foreignKey: 'UserID'
})
/**
 * md5加密
 * 
 * @param {any} password 密码
 * @returns 返回加密后的密码
 */
function cryptPwd(password) {
  var md5 = crypto.createHash('md5');
  return md5.update(password).digest('hex');
}
/* 用户登录页面渲染控制器 */
exports.showSignin = function (req, res) {
  FriendLinks.findAll({}).then(function (links) {
    res.render('passport/login', {
      title: '登录页面',
      links: links
    })
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
    attributes: ["UserID", "Account", "Email", "Password", "UserType", "Phone"],
    where: {
      Phone: _name
    },
    include: [{
      model: UserMoreInfo,
      attributes: ['RealName', 'Avatar']
    }],
  }).then(function (users) {

    if (!users.length) {

      return res.json({
        resultId: -1,
        message: '用户不存在'
      });
    }


    if (users[0].dataValues.Password.toLowerCase() !== cryptPwd(cryptPwd(_password))) {
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
/**
 * 检查是否登录
 */
exports.isLogin = function (req, res) {
  console.log(req.session.user)
  if (req.session.user) {
    var str = '',
      user = req.session.user,
      avatar = 'http://pic01.zczj.com//avatar/' + user.UserMoreInfo.Avatar
    str += '<a href="#"><img src="' + avatar + '"></a>' +
      '<div class="menu-wrap pop-up">' +
      '<a href="#" class="brief"><img src="' + avatar + '"><span>' + user.Account + '</span></a>' +
      '<div class="menu"> ' +
      '<a href ="javascript:; LoginOutMon();">退出</a>' +
      '</div></div>'
    return res.json({
      resultId: 200,
      message: '已登录',
      str: str
    })
  } else {
    return res.json({
      resultId: -1,
      message: '未登录'
    })
  }
}


exports.logout = function (req, res) {
  delete req.session.user;

  res.redirect('/')
}
//- https://github.com/sequelize/sequelize/blob/master/test/integration/model/create/include.test.js