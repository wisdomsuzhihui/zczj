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
    var url = '/?page=' + curpage + '&category=' + cat,
      listWarp = document.querySelector('.news-list');
    funAjax(url, 'GET', function (results) {
      // console.log(results)
      listWarp.innerHTML += rendHtml(results.rows);
    })
  }

  // 拼接字符串
  function rendHtml(data) {
    var str = '';
    Array.prototype.forEach.call(data, function (item) {
      // console.log(item)
      str += '<div class="item"><a class="img">' +
        '<img src="http://pic01.zczj.com//counseling/' + item.newimages + '@1e_1c_0o_0l_136h_220w_90q.src" /></a>' +
        '<div class="con"><div class="titel">' +
        '<div class="title">' + item.newtitle + '</div>' +
        '<div class="txt">' + item.newsynopsis + '</div>' +
        '</div></div></div>'
    })
    return str;
  }
})();