'use strict';

exports.index = function (req, res) {
  res.render('index/index', {
    title: '首页'
  })
}