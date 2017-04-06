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
  Channel.findAll({
    where: {
      ChannelCode: '64'
    },
    include: [ChannelContent],

  }).then(function (banners) {

    New.findAndCountAll({
      'where': {
        'CategoryID': '53'
      },
      limit: 10,
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