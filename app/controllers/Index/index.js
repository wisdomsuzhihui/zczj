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

    Category.findAndCountAll({
      // where: '',
      include: [{
        model: New,
        where: [{
          'NewsID': {
            '$ne': null
          }
        }],
        limit: 1
      }]
    }).then(function (news) {
      // console.log(JSON.stringify(news.rows[0].News))
      console.log(news)
      res.render('index/index', {
        title: '首页',
        banners: banners,
        news: news
      })
    })
  })

}