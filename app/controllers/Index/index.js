'use strict';
var sequelize = require('../../../config/db'),
  ChannelContent = sequelize.import('../../models/ChannelContent'),
  Channel = sequelize.import('../../models/Channel');
Channel.hasOne(ChannelContent, {
  foreignKey: 'ChannelCode'
})
exports.index = function (req, res) {
  Channel.findAll({
    where: {
      ChannelCode: '64'
    },
    include: [ChannelContent],

  }).then(function (banners) {
    res.render('index/index', {
      title: '首页',
      banners: banners
    })
  })
}