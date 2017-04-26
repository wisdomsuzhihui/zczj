'use strict';
var sequelize = require('../../../config/db'),
  moment = require('moment'),

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
  console.log('=================================== 分类请求：')


  // body
  var PageSize = 14,
    CurrentPage = req.body.page,
    category = req.body.category,
    RowCount = 0,
    pagenumbers = '';
  // 全部
  if (category == 0) {
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
      offset: (CurrentPage - 1) * PageSize,
      limit: PageSize
    }).then(function (list) {
      var _list = JSON.parse(JSON.stringify(list))
      if (_list.rows.length) {
        for (var i = 0; i < _list.rows.length; i++) {
          _list.rows[i].DateForm = moment(_list.rows[i].newdate).fromNow();
        }
      }
      return res.json({
        resultId: 200,
        newslist: _list
      })
    })
  }
  // 专栏
  else if (category == 99) {
    News.findAndCountAll({
      where: {
        IsPublish: true,
        PlateID: '0',
        CategoryLevel: {
          // $like: '0,64%|0,10,58|0,10,59|0,10,60|0,10,62|0,10,63'
          // $like: {
          //   $any: ['0,64%', '0,10,58', '0,10,59', '0,10,60', '0,10,62', '0,10,63']
          // }
          // $like: '0,64%',
          $or: [{
              $like: '0,64%'
            },
            {
              $like: '0,10,58'
            },
            {
              $like: '0,10,59'
            },
            {
              $like: '0,10,60'
            },
            {
              $like: '0,10,62'
            },
            {
              $like: '0,10,63'
            }
          ]
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
      offset: (CurrentPage - 1) * PageSize,
      limit: PageSize
    }).then(function (list) {
      var _list = JSON.parse(JSON.stringify(list))
      if (_list.rows.length) {
        for (var i = 0; i < _list.rows.length; i++) {
          _list.rows[i].DateForm = moment(_list.rows[i].newdate).fromNow();
        }
      }
      return res.json({
        resultId: 200,
        newslist: _list
      })
    })
  }
  // 其它分类
  else {
    console.log('其他分类')
    Category.findOne({
      where: {
        CategoryID: category
      }
    }).then(function (_cat) {
      var _catLeve = JSON.parse(JSON.stringify(_cat)).CategoryLevel
      News.findAndCountAll({
        include: [{
          model: Category,
          attributes: ['ClassName', 'CategoryID']
        }],
        offset: (CurrentPage - 1) * PageSize,
        limit: PageSize,
        where: {
          IsPublish: true,
          PlateID: '0',
          CategoryLevel: {
            $like: _catLeve
          }
        },
        order: [
          ['newdate', 'DESC'],
          ['NewsID', 'ASC']
        ]
      }).then(function (list) {
        var _list = JSON.parse(JSON.stringify(list))
        if (_list.rows.length) {
          for (var i = 0; i < _list.rows.length; i++) {
            _list.rows[i].DateForm = moment(_list.rows[i].newdate).fromNow();
          }
        }
        return res.json({
          resultId: 200,
          newslist: _list
        })
      })
    })

  }
}