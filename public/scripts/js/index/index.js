var dgdAd = $('#banner');
dgdAd.owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true
});

// Ajax请求函数
function funAjax(URL, method, cb) {
  $.ajax({
    url: URL,
    cache: true,
    type: method,
    crossDomain: true
  }).done(cb);
}


;
(function () {
  var loadBtn = document.querySelector('.button-load');
  var curpage = 0,
    cat = 53;
  loadBtn.addEventListener('click', function () {
    // https://github.com/jaredreich/notie
    // notie.alert({
    //   type: 1,
    //   text: '加载中'
    // })
    getData(cat)

  })

  function getData(cat) {
    curpage++;
    var url = '/?page=' + curpage + '&category=' + cat;
    funAjax(url, 'GET', function (results) {
      // console.log(results)

    })
  }

  // 拼接字符串
  function rendHtml() {
    var str = '';
  }
})();