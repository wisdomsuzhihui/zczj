var dgdAd = $('#newsBanner');
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

  var imgConfig = 'http://pic01.zczj.com/',
    pageList = [],
    categoryList = [],
    domCache = [],
    curIndex = 0,
    btn_tab = document.querySelector('#tabbar'),
    newsList = document.querySelector('#newsList'),
    loading = document.querySelector('.loading'),
    loadBtn = document.querySelector('.button-load-more'),
    iLock = true,
    aBtn = Array.prototype.slice.call(btn_tab.querySelectorAll('a'));

  aBtn.forEach(function (el, i) {
    pageList.push(el.getAttribute('data-page'));
    categoryList.push(el.getAttribute('data-category'));
    domCache.push('');
  });
  // 将当前数据存入缓存 
  domCache[0] = newsList.innerHTML;
  // 获取数据
  function getData(cat, page, loadPage) {
    if (!cat) {
      cat = categoryList[0]
    }
    if (!iLock) {
      return
    }
    page++;
    pageList[curIndex] = page;
    loading.style.display = 'block';
    $.post('/news/NewsList', {
      category: cat,
      page: page
    }, function (data) {
      console.log(data)
    })
  }

  aBtn.forEach(function (el, i) {
    el.addEventListener('click', function () {
      curIndex = i;
      var _this = el;
      aBtn.forEach(function (el) {
        el.classList.remove('cur');
      })
      _this.classList.add('cur');
      if (checkFistLoad(_this, i)) {
        getData(_this.getAttribute('data-category'), _this.getAttribute('data-page'));
      } else {
        newsList.innerHTML = domCache[curIndex];
      }
    }, false)
  });
  // 检测是否是第一次加载数据
  function checkFistLoad(obj, i) {
    return obj.getAttribute('data-page') === pageList[i] && parseInt(obj.getAttribute('data-page')) === 0;
  }
})();


// 拼字符串
function ChangeDom(data) {
  var datastr = "",
    imgConfig = $('#imgConfig').val(),
    imgA = imgConfig + 'counseling/',
    imgStyle1 = "@1e_1c_0o_0l_136h_220w_90q.src", //一般模式图的尺寸
    imgStyle2 = "@1e_1c_0o_0l_165h_242w_90q.src", //图文模式图的尺寸
    imgStyle3 = "@1e_1c_0o_0l_300h_400w_90q.src"; //单图模式图的尺寸
  for (var i = 0; i < data.NewsList.length; i++) {
    var news = data.NewsList[i];
    var oImg = $('<img />');
    if (news.DisplayMode == 1 || news.DisplayMode == 0) { //一般模式

      datastr += "<div class=\"zx_news_item\"><div class=\"zx_itme_con cf\"><div class=\"l\"><a href=\"/news/" + news.DateStr + "/content_" + news.NewsID + ".html\">" + "<span class=\"tag\">" + news.CategoryName + "</span>"
      var ImgPath1 = "";
      if (news.newimages != null && news.newimages.length > 0) {
        var arr = news.newimages.split('|');
        ImgPath1 = arr[0];
      }
      datastr += "<img src=\"" + imgA + ImgPath1 + imgStyle1 + "\" alt=\"\" onerror='nofind(this)'/></a>" + "</div><div class=\"r\"><a href=\"/news/" + news.DateStr + "/content_" + news.NewsID + ".html\" title=\"" + news.newtitle + "\" target=\"_blank\" class=\"title\">" + news.newtitle + "</a>" + " <div class=\"txt\">" + news.newsynopsis + "</div><div class=\"item_bar cf\"><div class=\"l cf\"><span class=\"f_blue\">"
      var newman = "";
      if (news.newman == null || news.newman.length == 0) { //如果没有作者，就显示来源
        newman = '匿名' //news.newfrom;
      } else {
        newman = news.newman;
      }
      var commentstr = '';
      if (news.CommentCount != 0) {
        commentstr = "<div class=\"r\"><span><a  href=\"/news/" + news.DateStr + "/content_" + news.NewsID + ".html\" target=\"_blank\" class=\"icon icon-msg\">" + news.CommentCount + "</a></span></div>";
      } else {
        commentstr = ''
      }
      datastr += newman + "</span><span>" + news.DateForm + "</span></div>" + commentstr + "</div></div></div></div>";

    } else if (news.DisplayMode == 2) { //图文模式
      datastr += "<dl class=\"lightBox_item\"><a href=\"/news/" + news.DateStr + "/content_" + news.NewsID + ".html\"class=\"title ellipsis\" title=\"" + news.newtitle + "\" target=\"_blank\">" + news.newtitle + "</a>" + "<div class=\"text\">" + news.newsynopsis + "</div><ul class=\"light_img cf\">"
      var ImgPath1 = "",
        ImgPath2 = "",
        ImgPath3 = "";
      if (news.newimages != null && news.newimages.length > 0) {
        var arr = news.newimages.split('|');
        if (arr.length > 0) {
          ImgPath1 = arr[0];
        }
        if (arr.length > 1) {
          ImgPath2 = arr[1];
        }
        if (arr.length > 2) {
          ImgPath3 = arr[2];
        }
      }

      datastr += "<li class=\"ml0\"><span class=\"tag\">" + news.CategoryName + "</span><a href=\"/news/" + news.DateStr + "/content_" + news.NewsID + ".html\" class=\"\" target=\"_blank\"><img src=\"" + imgA + ImgPath1 + imgStyle2 + "\" alt=\"\" onerror='nofind(this)'/></a></li>" + "<li><span class=\"tag\">" + news.CategoryName + "</span><a href=\"/news/" + news.DateStr + "/content_" + news.NewsID + ".html\" class=\"\" target=\"_blank\"><img src=\"" + imgA + ImgPath2 + imgStyle2 + "\" alt=\"\" onerror='nofind(this)'/></a></li>" + "<li><span class=\"tag\">" + news.CategoryName + "</span><a href=\"/news/" + news.DateStr + "/content_" + news.NewsID + ".html\" class=\"\" target=\"_blank\"><img src=\"" + imgA + ImgPath3 + imgStyle2 + "\" alt=\"\" onerror='nofind(this)'/></a></li>" + "</ul><div class=\"item_bar cf\"><div class=\"l cf\"><span class=\"f_blue\">"
      var newman = "";
      if (news.newman == null || news.newman.length == 0) { //如果没有作者，就显示来源
        newman = '匿名' //news.newfrom;
      } else {
        newman = news.newman;
      }

      var commentstr = '';
      if (news.CommentCount != 0) {
        commentstr = "<div class=\"r\"><span><a  href=\"/news/" + news.DateStr + "/content_" + news.NewsID + ".html\" target=\"_blank\" class=\"icon icon-msg\">" + news.CommentCount + "</a></span></div>";
      } else {
        commentstr = ''
      }
      datastr += newman + "</span><span>" + news.DateForm + "</span></div>" + commentstr + "</div></dl>";

    } else if (news.DisplayMode == 3) { //单图模式
      var ImgPath1 = "",
        ImgPath2 = "";
      if (news.newimages != null && news.newimages.length > 0) {
        var arr = news.newimages.split('|');
        if (arr.length > 0) {
          ImgPath1 = arr[0];
        }
        if (arr.length > 1) {
          ImgPath2 = arr[1];
        }
      }


      datastr += "<ul class=\"zx_news_minBrand cf\"><li class=\"ml0\">" + "<a href=\"/news/" + news.DateStr + "/content_" + news.NewsID + ".html\" title=\"" + news.newtitle + "\" target=\"_blank\">" + "<img src=\"" + imgA + ImgPath1 + imgStyle3 + "\" alt=\"\" onerror='nofind(this)' /><span class=\"text\">" + news.newtitle + "</span><spanclass=\"mask_layer\"></span></a></li>" + "<li><a href=\"/news/" + news.DateStr + "/content_" + news.NewsID + ".html\" target=\"_blank\"><img src=\"" + imgA + ImgPath2 + imgStyle3 + "\" alt=\"\" onerror='nofind(this)' /><span class=\"text\">" + news.newtitle + "</span><span class=\"mask_layer\"></span></a></li></ul>";
    }
  }
  return datastr;
}
// 设置默认图
function nofind(img) {
  // body
  img.src = "/skin/images/nothing.png";
  img.onerror = null;
}