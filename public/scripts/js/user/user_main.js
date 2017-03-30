'use strict';
$.support.cors = true;

/*
		用户登录及注册对象方法
*/
var signOjbect = {
  // 用户登录方法
  signIn: function (obj) {
    $(obj).validate({
      rules: {
        'name': {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        'password': {
          required: true,
          minlength: 2,
          maxlength: 15
        },
      },
      messages: {
        'name': {
          required: '必须填写用户名',
          minlength: '用户名最小2位',
          maxlength: '用户名最大15位'
        },
        'password': {
          required: '必须填写密码',
          minlength: '密码最小2位',
          maxlength: '密码最大15位'
        },
      },
      submitHandler: function () {
        $.ajax({
            url: '/passport/signin',
            method: 'GET',
            data: {
              'user': $(obj).serialize() // 将发送的数据进行序列化
            }
          })
          .done(function (results) {
            switch (results.data) {
              case 0:
                console.log('用户不存在');
                break;
              case 1:
                console.log('密码填写错误');
                break;
              default:
                alert('登录成功')
            }
          })
      }
    })
  }
};

signOjbect.signIn('#dSigninForm');