var sequelize = require('../../../config/db'),
  FriendLinks = sequelize.import('../../models/FriendLink');
/**
 * 数据
 */
'use strict';
exports.index = function (req, res) {
  // body
  FriendLinks.findAll({}).then(function (links) {
    // body
    res.render('data/index', {
      title: '数据',
      links: links
    })
  })
}

var data = {
  "plat": {
    "name": "plat",
    "legend": ["新增平台数量", "累计平台数量"],
    "xAxis": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    "series": [{
      "name": "新增平台数量",
      "type": "bar",
      "data": [44, 54, 64, 34, 24, 46, 74, 43, 55, 27, 35, 25]
    }, {
      "name": "累计平台数量",
      "type": "line",
      "data": [40, 50, 44, 100, 55, 122, 111, 55, 105, 70, 31, 59]
    }]
  },
  "quota": {
    "name": "quota",
    "xAxis": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    "series": [{
      "name": "融资额度",
      "type": "bar",
      "data": [44, 54, 64, 34, 24, 46, 74, 43, 55, 27, 35, 25]
    }]
  },
  "hottest": {
    "name": "hottest",
    "xAxis": ["企业服务", "医疗健康", "电子商务", "文化传媒"],
    "series": [{
      "name": "",
      "type": "line",
      "data": [5, 10, 20, 15]
    }]
  },
  "map": [{
    "name": "iphone3",
    "data": [{
        "name": "北京",
        "value": 1234
      },
      {
        "name": "天津",
        "value": 1234
      },
      {
        "name": "上海",
        "value": 1234
      },
      {
        "name": "重庆",
        "value": 1234
      },
      {
        "name": "河北",
        "value": 1234
      },
      {
        "name": "河南",
        "value": 1234
      },
      {
        "name": "云南",
        "value": 1234
      },
      {
        "name": "辽宁",
        "value": 1234
      },
      {
        "name": "黑龙江",
        "value": 1234
      },
      {
        "name": "湖南",
        "value": 1234
      },
      {
        "name": "安徽",
        "value": 1234
      },
      {
        "name": "山东",
        "value": 1234
      },
      {
        "name": "新疆",
        "value": 1234
      },
      {
        "name": "江苏",
        "value": 1234
      },
      {
        "name": "浙江",
        "value": 1234
      },
      {
        "name": "江西",
        "value": 1234
      },
      {
        "name": "湖北",
        "value": 1234
      },
      {
        "name": "广西",
        "value": 1234
      },
      {
        "name": "甘肃",
        "value": 1234
      },
      {
        "name": "山西",
        "value": 1234
      },
      {
        "name": "内蒙古",
        "value": 1234
      },
      {
        "name": "陕西",
        "value": 1234
      },
      {
        "name": "吉林",
        "value": 1234
      },
      {
        "name": "福建",
        "value": 1234
      },
      {
        "name": "贵州",
        "value": 1234
      },
      {
        "name": "广东",
        "value": 1234
      },
      {
        "name": "青海",
        "value": 1234
      },
      {
        "name": "西藏",
        "value": 1234
      },
      {
        "name": "四川",
        "value": 1234
      },
      {
        "name": "宁夏",
        "value": 1234
      },
      {
        "name": "海南",
        "value": 1234
      },
      {
        "name": "台湾",
        "value": 1234
      },
      {
        "name": "香港",
        "value": 1234
      },
      {
        "name": "澳门",
        "value": 1234
      }
    ]
  }, {
    "name": "iphone4",
    "data": [{
        "name": "北京",
        "value": 1234
      },
      {
        "name": "天津",
        "value": 1234
      },
      {
        "name": "上海",
        "value": 1234
      },
      {
        "name": "重庆",
        "value": 1234
      },
      {
        "name": "河北",
        "value": 1234
      },
      {
        "name": "安徽",
        "value": 1234
      },
      {
        "name": "新疆",
        "value": 1234
      },
      {
        "name": "浙江",
        "value": 1234
      },
      {
        "name": "江西",
        "value": 1234
      },
      {
        "name": "山西",
        "value": 1234
      },
      {
        "name": "内蒙古",
        "value": 1234
      },
      {
        "name": "吉林",
        "value": 1234
      },
      {
        "name": "福建",
        "value": 1234
      },
      {
        "name": "广东",
        "value": 1234
      },
      {
        "name": "西藏",
        "value": 1234
      },
      {
        "name": "四川",
        "value": 1234
      },
      {
        "name": "宁夏",
        "value": 1234
      },
      {
        "name": "香港",
        "value": 1234
      },
      {
        "name": "澳门",
        "value": 1234
      }
    ]
  }, {
    "name": "iphone5",
    "data": [{
        "name": "北京",
        "value": 1234
      },
      {
        "name": "天津",
        "value": 1234
      },
      {
        "name": "上海",
        "value": 1234
      },
      {
        "name": "广东",
        "value": 1234
      },
      {
        "name": "台湾",
        "value": 1234
      },
      {
        "name": "香港",
        "value": 1234
      },
      {
        "name": "澳门",
        "value": 1234
      }
    ]
  }]
};

exports.getJson = function (req, res) {
  return res.json({
    data: data
  })
}