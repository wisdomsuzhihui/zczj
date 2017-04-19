'use strict';
var sequelize = require('../../../config/db'),
  ChannelContent = sequelize.import('../../models/ChannelContent'),
  Channel = sequelize.import('../../models/Channel'),
  Special = sequelize.import('../../models/Special'),
  New = sequelize.import('../../models/News'),
  ExpressNews = sequelize.import('../../models/ExpressNews'),
  PublicNavigation = sequelize.import('../../models/PublicNavigation'),
  FriendLinks = sequelize.import('../../models/FriendLink')
var pgts = [{
    'Title': '曝光天使街平台无投前风控，投后管理，项目逾期6个月未完成，已无下文',
    'PostDate': '2017-04-14T00:04:03.253',
    'TopicID': '13526',
    'ViewCount': '636'
  },
  {
    'Title': '曝光淘娱集平台严重违约不作为',
    'PostDate': '2017-04-14T00:04:03.253',
    'TopicID': '13526',
    'ViewCount': '636'
  },
  {
    'Title': '人人投的宝贝王项目非法诈骗2300万',
    'PostDate': '2017-04-14T00:04:03.253',
    'TopicID': '13526',
    'ViewCount': '636'
  },
  {
    'Title': '车筹撞标真是LOW，看我众开多高明',
    'PostDate': '2017-04-14T00:04:03.253',
    'TopicID': '13526',
    'ViewCount': '636'
  },
  {
    'Title': '济南众开众筹，都是你们的错我是无辜的',
    'PostDate': '2017-04-14T00:04:03.253',
    'TopicID': '13526',
    'ViewCount': '636'
  },
  {
    'Title': '曝光天使街平台无投前风控，投后管理，项目逾期6个月未完成，已无下文',
    'PostDate': '2017-04-14T00:04:03.253',
    'TopicID': '13526',
    'ViewCount': '636'
  },
]
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
      Special.findAll({
        limit: 3,
        offset: 0,
        order: [
          ['SpecialID', 'DESC']
        ]
      }).then(function (special) {
        New.findAll({
          offset: 0,
          limit: 5,
          order: [
            ['NewsID', 'DESC']
          ]
        }).then(function (news) {
          ChannelContent.findAll({
            where: {
              ChannelCode: '90'
            }
          }).then(function (dgd) {
            ExpressNews.findAll({
              offset: 0,
              limit: 8,
              order: [
                ['ExpressNewsID', 'DESC']
              ]
            }).then(function (EpNews) {
              // body
              ChannelContent.findAll({
                where: {
                  Object: '4'
                },
                limit: 6

              }).then(function (plats) {
                FriendLinks.findAll({

                }).then(function (links) {
                  // body
                  res.render('index/index', {
                    title: '首页',
                    banners: banners,
                    sp: special,
                    btlist: btList,
                    news: news,
                    dgd: dgd,
                    epNews: EpNews,
                    pgts: pgts,
                    plats: plats,
                    links: links
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}