'use strict';
var sequelize = require('../../../config/db'),
  ChannelContent = sequelize.import('../../models/ChannelContent'),
  Channel = sequelize.import('../../models/Channel'),
  Category = sequelize.import('../../models/Category'),
  News = sequelize.import('../../models/News'),
  FriendLinks = sequelize.import('../../models/FriendLink')
Channel.hasOne(ChannelContent, {
  foreignKey: 'ChannelCode'
})
// Category.hasMany(New, {
//   foreignKey: 'CategoryID'
// })
News.hasMany(Category, {
  foreignKey: 'CategoryID',
  sourceKey: 'CategoryID'
})
exports.index = function (req, res) {
  Channel.findAll({
    where: {
      ChannelName: '资讯幻灯片'
    },
    include: [ChannelContent]
  }).then(function (bannerList) {
    // console.log(JSON.parse((JSON.stringify(bannerList))))
    Channel.findAll({
      where: {
        ChannelName: '资讯_广告_右'
      },
      include: [ChannelContent],
      offset: 0,
      limit: 4
    }).then(function (bannerR_list) {
      // body
      FriendLinks.findAll({}).then(function (links) {
        News.findAndCountAll({
          // attributes: ['CategoryLevel', 'newdate', 'newman', 'newpoint', 'NewsID', 'newsynopsis', 'newtitle', 'newform', 'DisplayMode', 'newimages', 'commentCount'],
          where: {
            IsPublish: true,
            PlateID: '0',
            CategoryLevel: {
              $like: '0,10' + '%'
            }
          },
          include: [{
            model: Category,
            attributes: ['ClassName', 'CategoryID']
          }],
          order: [
            [
              'newdate', 'DESC'
            ],
            ['NewsID', 'ASC']
          ],
          offset: 0,
          limit: 14
        }).then(function (news) {
          // console.log(JSON.parse((JSON.stringify(news))))
          res.render('news/index', {
            title: '资讯首页',
            bannerList: JSON.parse((JSON.stringify(bannerList))),
            bannerR_list: JSON.parse((JSON.stringify(bannerR_list))),
            links: links,
            news: JSON.parse((JSON.stringify(news)))
          })
        })
      })
    })
  })
}
/**
 * 动态请求分类数据
 */
exports.newsList = function (req, res) {
  // body
  var PageSize = 7,
    CurrentPage = req.body.page,
    category = req.body.category,
    RowCount = 0,
    pagenumbers = '';
  if (!category) {
    News.findAndCountAll({
      where: {
        IsPublish: true,
        PlateID: '0',
        CategoryLevel: {
          $like: '0,10' + '%'
        }
      },
      include: [{
        model: Category,
        attributes: ['ClassName', 'CategoryID']
      }],
      order: [
        ['newdate', 'DESC'],
        ['NewsID', 'ASC']
      ],
      offset: CurrentPage * PageSize,
      limit: 14
    }).then(function (newslist) {
      return res.JSON({
        resultId: 200,
        newslist: newslist
      })
    })
  } else if (category == 99) {
    News.findAndCountAll({
      where: {
        IsPublish: true,
        PlateID: '0',
        CategoryLevel: {
          // $like: '0,64%|0,10,58|0,10,59|0,10,60|0,10,62|0,10,63'
          $like: {
            $any: ['0,64%', '0,10,58', '0,10,59', '0,10,60', '0,10,62', '0,10,63']
          }
        }
      },
      include: [{
        model: Category,
        attributes: ['ClassName', 'CategoryID']
      }],
      order: [
        ['newdate', 'DESC'],
        ['NewsID', 'ASC']
      ],
      offset: CurrentPage * PageSize,
      limit: 14
    }).then(function (newslist) {
      return res.JSON({
        resultId: 200,
        newslist: newslist
      })
    })
  } else {
    Category.findAll({
      where: {
        CategoryID: category
      }
    }).then(function (_category) {
      if (_category != null) {
        News.findAndCount({
          where: {
            IsPublish: true,
            PlateID: '0',
            CategoryLevel: {
              $like: JSON.parse(JSON.stringify(_category)).CategoryLevel
            }
          },
          include: [{
            model: Category,
            attributes: ['ClassName', 'CategoryID']
          }],
          order: [
            ['newdate', 'DESC'],
            ['NewsID', 'ASC']
          ],
          offset: CurrentPage * PageSize,
          limit: 14
        }).then(function (newslist) {
          return res.JSON({
            resultId: 200,
            newslist: newslist
          })
        })
      } else {
        return res.JSON({
          resultId: -1
        })
      }
    })
  }
}


// exports.index = function (req, res) {
//   var _category = req.query.category,
//     page = req.query.page || 0,
//     pageSize = 14,
//     curPage = page;
//   // 1.有分类请求
//   if (page) {
//     New.findAndCountAll({
//       'where': {
//         'CategoryID': _category
//       },
//       offset: curPage * pageSize,
//       limit: pageSize,
//       order: [
//         ['NewsID', 'DESC']
//       ]
//     }).then(function (news) {
//       console.log(news)
//       res.json(news)
//     })
//   }
//   // 2. 无分类请求
//   else {
//     Channel.findAll({
//       where: {
//         ChannelCode: '64'
//       },
//       include: [ChannelContent],

//     }).then(function (banners) {

//       New.findAndCountAll({
//         'where': {
//           'CategoryID': '53'
//         },
//         offset: 0,
//         limit: 14,
//         order: [
//           ['NewsID', 'DESC']
//         ]
//       }).then(function (news) {
//         FriendLinks.findAll({}).then(function (links) {

//           res.render('news/index', {
//             title: 'us',
//             banners: banners,
//             news: news,
//             links: links
//           })
//         })
//       })
//     })

//   }
// }