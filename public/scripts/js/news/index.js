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