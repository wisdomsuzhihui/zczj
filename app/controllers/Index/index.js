'use strict';
var sequelize = require('../../../config/db'),
  ChannelContent = sequelize.import('../../models/ChannelContent'),
  Channel = sequelize.import('../../models/Channel'),
  Special = sequelize.import('../../models/Special')

Channel.hasOne(ChannelContent, {
  foreignKey: 'ChannelCode'
})
exports.index = function (req, res) {
  //
  Channel.findAll({
    where: {
      ChannelCode: '64'
    },
    include: [ChannelContent],
  }).then(function (banners) {
    Channel.findAll({
      where: {
        ChannelCode: '66'
      },
      include: [ChannelContent],
    }).then(function (btList) {
      // console.log(JSON.stringify(btList))
      // body
      Special.findAll({
        limit: 3,
        offset: 0,
        order: [
          ['SpecialID', 'DESC']
        ]
      }).then(function (special) {
        // body
        res.render('index/index', {
          title: '首页',
          banners: banners,
          sp: special,
          btlist: btList
        })
      })
    })
  })
}