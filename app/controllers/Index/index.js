'use strict';
var sequelize = require('../../../config/db'),
  ChannelContent = sequelize.import('../../models/ChannelContent'),
  Channel = sequelize.import('../../models/Channel'),
  Category = sequelize.import('../../models/Category'),
  New = sequelize.import('../../models/News')
Channel.hasOne(ChannelContent, {
  foreignKey: 'ChannelCode'
})
Category.hasOne(New, {
  foreignKey: 'CategoryID'
})
exports.index = function (req, res) {
  Channel.findAll({
    where: {
      ChannelCode: '64'
    },
    include: [ChannelContent],

  }).then(function (banners) {

    Category.findAndCountAll({
      include: [{
        model: New
      }],
      limit: 5
    }).then(function (news) {
      console.log(news.count)
      res.render('index/index', {
        title: '首页',
        banners: banners,
        news: news
      })
    })
  })

}