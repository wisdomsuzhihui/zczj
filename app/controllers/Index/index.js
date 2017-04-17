'use strict';
var sequelize = require('../../../config/db'),
  ChannelContent = sequelize.import('../../models/ChannelContent'),
  Channel = sequelize.import('../../models/Channel'),
  Category = sequelize.import('../../models/Category'),
  New = sequelize.import('../../models/News')
Channel.hasOne(ChannelContent, {
  foreignKey: 'ChannelCode'
})
Category.hasMany(New, {
  foreignKey: 'CategoryID'
})
exports.index = function (req, res) {
  var _category = req.query.category,
    page = req.query.page || 0,
    pageSize = 14,
    curPage = page;
  // 1.有分类请求
  if (page) {
    New.findAndCountAll({
      'where': {
        'CategoryID': _category
      },
      offset: curPage - 1 * pageSize,
      limit: pageSize,
      order: [
        ['NewsID', 'DESC']
      ]
    }).then(function (news) {
      console.log(news)
      res.json(news)
    })
  }
  // 2. 无分类请求
  else {
    Channel.findAll({
      where: {
        ChannelCode: '64'
      },
      include: [ChannelContent],

    }).then(function (banners) {

      New.findAndCountAll({
        'where': {
          // 'CategoryID': '53'
        },
        offset: 2,
        limit: 2,
        order: [
          ['NewsID', 'DESC']
        ]
      }).then(function (news) {
        // console.log(JSON.stringify(news.rows))
        console.log(news)
        res.render('index/index', {
          title: '首页',
          banners: banners,
          news: news
        })
      })
    })

  }
}
exports.newsList = function (req, res) {
  var category = req.query.cat || 0,
    page = req.query.page || 0,
    pageSize = 14,
    curPage = page;

  New.findAndCountAll({
    'where': {
      'CategoryID': category
    },
    offset: curPage - 1 * pageSize,
    limit: pageSize,
    order: [
      ['NewsID', 'DESC']
    ]
  }).then(function (news) {
    console.log(news)
    res.json(news)
  })

}