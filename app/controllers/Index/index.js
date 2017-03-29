'use strict';

exports.index = function (req, res) {
  res.render('/', {
    title: '首页'
  })
}