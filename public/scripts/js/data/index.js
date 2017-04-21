;
(function ($) {
  $(function () {
    // 轮播图
    (function () {
      $('.JS_slider').owlCarousel({
        item: 1,
        autoplay: true,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            nav: false
          },
          1025: {
            nav: true,
          }
        },
        nav: true,
        navText: ['', '']
      })
    })();

    // 移动端时, 侧边栏图表不渲染
    var data, width = $(document).width(),
      isShow = true;
    $(window).on('resize', function () {
      width = $(document).width();
      sideCharts();
    })
    // 加载数据



    $.ajax({
      url: '/getJson',
      type: 'GET',
      success: function (res) {
        data = res.data
        // 平台数据
        render('.JS_plat', data.plat)
        // 
        sideCharts();
      },
      error: function (err) {
        console.log(err)
      }
    });

    function sideCharts() {
      if (width > 1024 && isShow) {
        // 最热行业
        render('.JS_hottest', data.hottest);
        // 全国分布图
        renderMap('.JS_dis', data.map);
        isShow = false
      } else if (width < 1024) {
        isShow = true
      }
    }

    // tab切换
    (function () {
      var tab = $('.JS_charts_tab').find('li'),
        content = $('.charts-content')
      tab.each(function () {
        $(this).on('click', function () {
          $(this).addClass('cur').siblings().removeClass('cur');
          content.eq($(this).index()).show().siblings().hide();
          var index = $(this).index();
          if (index == 1) {
            render('.JS_quota', data.quota)
          } else if (index == 0) {
            render('.JS_plat', data.plat)
          }
        })
      })
    })();



    // 平台数量统计
    (function () {
      var prev = $('.JS_date_prev'),
        next = $('.JS_date_next'),
        dateTxt = $('.JS_date_txt'),
        sta = $('.JS_statistics'),
        year;

      prev.on('click', function () {
        year = dateTxt.text(dateTxt.text() - 1);
        // getStatisticsData(year);
      })
      next.on('click', function () {
        year = dateTxt.text(dateTxt.text() * 1 + 1);
        // getStatisticsData(year);
      })

      function getStatisticsData(y) {
        $.ajax({
          url: '/src-new/skin/js/data/data2.json?456',
          type: 'GET',
          data: {
            year: y
          },
          success: function (res) {
            console.log(res);
            dateTxt.text(y)
          }
        });
      }



    })();

  })
})(jQuery);

/**
 * echarts主题配置
 */
echarts.registerTheme('zczj', {
  color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3", "#e5cf0d", "#97b552", "#95706d", "#dc69aa", "#07a2a4", "#9a7fd1", "#588dd5", "#f5994e", "#c05050", "#59678c", "#c9ab00", "#7eb00a", "#6f5553", "#c14089"],
  title: {
    textStyle: {
      fontWeight: "normal",
      color: "#008acd"
    }
  },
  dataRange: {
    itemWidth: 15,
    color: ["#5ab1ef", "#e0ffff"]
  },
  toolbox: {
    color: ["#1e90ff", "#1e90ff", "#1e90ff", "#1e90ff"],
    effectiveColor: "#ff4500"
  },
  tooltip: {
    backgroundColor: "rgba(50,50,50,0.5)",
    axisPointer: {
      type: "line",
      lineStyle: {
        color: "#008acd"
      },
      crossStyle: {
        color: "#008acd"
      },
      shadowStyle: {
        color: "rgba(200,200,200,0.2)"
      }
    },
    padding: 10
  },
  dataZoom: {
    dataBackgroundColor: "#efefff",
    fillerColor: "rgba(182,162,222,0.2)",
    handleColor: "#008acd"
  },
  grid: {
    borderColor: "#eee"
  },
  categoryAxis: {
    axisLine: {
      lineStyle: {
        color: "#008acd"
      }
    },
    splitLine: {
      lineStyle: {
        color: ["#eee"]
      }
    }
  },
  valueAxis: {
    axisLine: {
      lineStyle: {
        color: "#008acd"
      }
    },
    splitArea: {
      show: true,
      areaStyle: {
        color: ["rgba(250,250,250,0.1)", "rgba(200,200,200,0.1)"]
      }
    },
    splitLine: {
      lineStyle: {
        color: ["#eee"]
      }
    }
  },
  bar: {
    itemStyle: {
      normal: {
        barBorderRadius: 5
      },
      emphasis: {
        barBorderRadius: 5
      }
    }
  },
  line: {
    smooth: true,
    symbol: "circle",
    symbolSize: 3
  },

  scatter: {
    symbol: "circle",
    symbolSize: 4
  },
  radar: {
    symbol: "emptyCircle",
    symbolSize: 3
  },
  map: {
    itemStyle: {
      normal: {
        areaStyle: {
          color: "#ddd"
        },
        label: {
          textStyle: {
            color: "#d87a80"
          }
        },
        borderColor: '#666'
      },
      emphasis: {
        areaStyle: {
          color: "#fe994e"
        }
      }
    }
  },
  textStyle: {
    fontFamily: "微软雅黑, Arial, Verdana, sans-serif"
  }
});

// 线/柱图
function render(clsName, options) {
  var def, charts;

  def = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    grid: {
      show: true,
      x: '16%'
    },
    legend: {
      data: options.legend || []
    },
    dataZoom: [{
      type: 'slider',
      start: 0,
      end: 100
    }],
    xAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      data: options.xAxis,
      axisLabel: {
        textStyle: {
          fontSize: 10
        }
      }
    },
    yAxis: [{
      name: '',
      type: 'value',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        formatter: "{value} k"
      }
    }],
    series: options.series
  };
  if (options.name == 'hottest') {
    def.dataZoom = [];
    def.xAxis.boundaryGap = false;
    def.xAxis.axisLabel.rotate = 45;
  }

  charts = echarts.init(document.querySelector(clsName), 'zczj');
  charts.setOption(def);

}

// 地图
function renderMap(clsName, datas) {
  var charts, def;
  def = {
    tooltip: {
      trigger: 'item',
      // 提示信息格式化
      formatter: function (a) {
        tip = a.name; //拿到地图省份名称
        for (var i = 0, len = datas.length; i < len; i++) {
          obj = datas[i].data;
          for (var j = 0, length = obj.length; j < length; j++) {
            // 如果数据的名称和地图的名称相同,则给出提示
            if (a.name == obj[j].name) {
              tip += "<br>" + datas[i].name + ": " + obj[j].value;
            }
          }
        }
        return tip ? tip : 'Loading';
      }
    },
    legend: {},
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center'
    },
    series: []
  };

  for (var i = 0, len = datas.length; i < len; i++) {
    def.series[i] = {
      name: datas[i].name,
      type: 'map',
      mapType: 'china',
      roam: false,
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        },
      },
      data: datas[i].data
    };
  }
  charts = echarts.init(document.querySelector(clsName), 'zczj');
  charts.setOption(def);
}