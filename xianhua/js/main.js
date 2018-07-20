$(document).ready(function () {

  // 个人中心
  $('.userLogin').hover(function(){
    $('.personal').css({'display':'block'});
  },function(){
    $('.personal').css({'display':'none'});
  })

  // 城市选择
  $('.xh-top-head-l').hover(function () {
    $('.city').css({
      'display': 'block'
    });
  }, function () {
    $('.city').css({
      'display': 'none'
    });
  })


  //鼠标悬停信息
  $("#wrap .item").mouseenter(function () {
    $(this).children(".mp_tooltip").animate({
      left: -92,
      queue: true
    });
    $(this).children(".mp_tooltip").css("visibility", "visible");
    $(this).children(".ibar_login_box").css("display", "block");
  });
  $("#wrap .item").mouseleave(function () {
    $(this).children(".mp_tooltip").css("visibility", "hidden");
    $(this).children(".mp_tooltip").animate({
      left: -121,
      queue: true
    });
    $(this).children(".ibar_login_box").css("display", "none");
  });
  $(".quick_toggle li").mouseover(function () {
    $(this).children(".mp_qrcode").show();
    $(this).children(".mp_tooltip").animate({
      left: -92,
      queue: true
    });
    $(this).children(".mp_tooltip").css("visibility", "visible");
  });
  $(".quick_toggle li").mouseleave(function () {
    $(this).children(".mp_qrcode").hide();
    $(this).children(".mp_tooltip").css("visibility", "hidden");
    $(this).children(".mp_tooltip").animate({
      left: -121,
      queue: true
    });
  });
  $(".return_top").click(function () {
    ds.scrollTo(0, 0);
    hideReturnTop();
  })

  // 返回顶部
  $("#funtop").click(function () {
    $("body,html").stop().animate({
      scrollTop: 0
    }, 250);
  })

  $('.am-slider').flexslider();

  $("li.appliance").hover(function () {
    $(".category-content .category-list li.first .menu-in").css("display", "none");
    $(".category-content .category-list li.first").removeClass("hover");
    $(this).addClass("hover");
    $(this).children("div.menu-in").css("display", "block")
  }, function () {
    $(this).removeClass("hover")
    $(this).children("div.menu-in").css("display", "none")
  });

  $('#doc-my-tabs').tabs();

  $(function () {
    $('.marqueen .bd a').hover(function () {
      $(this).stop().animate({
        left: -10
      })
    }, function () {
      $(this).stop().animate({
        left: 0
      })
    })
  })

  $(function () {
    $("#ktjxh").css({
      "z-index": "10"
    });
    $("#khytj").css({
      "z-index": "9"
    });
    $("#kbdtj").css({
      "z-index": "8"
    });
    $("#kjrrm").css({
      "z-index": "7"
    });
    $('.xxktit li').hover(function () {
      var thisId = $(this).attr("id");
      $(".kinfo").not($("#k" + thisId)).animate({
        opacity: 0
      }, 300);
      $(".kinfo").not($("#k" + thisId)).css({
        "z-index": "0"
      });
      $(this).addClass("cur");
      $("#k" + thisId).stop(true, true).animate({
        opacity: 1.0
      }, 300);
      $("#k" + thisId).css({
        "z-index": "10"
      });
    }, function () {
      var thisId = $(this).attr("id");
      $(this).removeClass("cur");
    });
  });

  // 楼层导航
  var _index = 0;
  $("#menu ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    _index = $(this).index() + 1;
    //通过拼接字符串获取元素，再取得相对于文档的高度
    var _top = $("#louti" + _index).offset().top;
    //scrollTop滚动到对应高度
    $("body,html").stop().animate({
      scrollTop: _top
    }, 250);
  });
  var nav = $("#menu"); //得到导航对象
  var win = $(window); //得到窗口对象
  var sc = $(document); //得到document文档对象。
  win.scroll(function () {

    if (sc.scrollTop() >= 1200) {
      $("#menu").show();
      //获取滚动元素对应的索引
      var index = Math.floor(sc.scrollTop() / 600);

      $("#menu ul li").eq(index - 2).addClass("active").siblings().removeClass("active");
    } else {
      $("#menu").hide();
    }
  });


  // 列表页收藏
  $('.xh-list-content ul li').each(function () {
    var that = $(this);
    that.hover(function () {
      that.find('i.icon-collect').stop().animate({
        opacity: 1
      }, 150);
      that.find('.xh-list-content-box h3').stop().animate({
        backgroundColor: '#d71e06',
        color: '#fff'
      }, 150);
    }, function () {
      that.find('i.icon-collect').stop().animate({
        opacity: 0
      }, 150);
      that.find('.xh-list-content-box h3').stop().animate({
        backgroundColor: '#e5e5e5',
        color: '#656565'
      }, 150);
    })
  })

  // var nowTemp = new Date();
  // var nowDay = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0).valueOf();
  // var nowMoth = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), 1, 0, 0, 0, 0).valueOf();
  // var nowYear = new Date(nowTemp.getFullYear(), 0, 1, 0, 0, 0, 0).valueOf();
  // var $myStart2 = $('#my-start-2');

  // var checkin = $myStart2.datepicker({
  //   onRender: function (date, viewMode) {
  //     // 默认 days 视图，与当前日期比较
  //     var viewDate = nowDay;

  //     switch (viewMode) {
  //       // moths 视图，与当前月份比较
  //       case 1:
  //         viewDate = nowMoth;
  //         break;
  //         // years 视图，与当前年份比较
  //       case 2:
  //         viewDate = nowYear;
  //         break;
  //     }

  //     return date.valueOf() < viewDate ? 'am-disabled' : '';
  //   }
  // }).on('changeDate.datepicker.amui', function (ev) {
  //   if (ev.date.valueOf() > checkout.date.valueOf()) {
  //     var newDate = new Date(ev.date)
  //     newDate.setDate(newDate.getDate() + 1);
  //     checkout.setValue(newDate);
  //   }
  //   checkin.close();
  //   $('#my-end-2')[0].focus();
  // }).data('amui.datepicker');

  // var checkout = $('#my-end-2').datepicker({
  //   onRender: function (date, viewMode) {
  //     var inTime = checkin.date;
  //     var inDay = inTime.valueOf();
  //     var inMoth = new Date(inTime.getFullYear(), inTime.getMonth(), 1, 0, 0, 0, 0).valueOf();
  //     var inYear = new Date(inTime.getFullYear(), 0, 1, 0, 0, 0, 0).valueOf();

  //     // 默认 days 视图，与当前日期比较
  //     var viewDate = inDay;

  //     switch (viewMode) {
  //       // moths 视图，与当前月份比较
  //       case 1:
  //         viewDate = inMoth;
  //         break;
  //         // years 视图，与当前年份比较
  //       case 2:
  //         viewDate = inYear;
  //         break;
  //     }

  //     return date.valueOf() <= viewDate ? 'am-disabled' : '';
  //   }
  // }).on('changeDate.datepicker.amui', function (ev) {
  //   checkout.close();
  // }).data('amui.datepicker');


  // 优惠套餐

  // 优惠套餐 初始价格
  var like_list11 = parseFloat($('.like_list.like_list01 li .info-box-price e').text()) + parseFloat($('.like_lists ul.like_list li').eq(0).find('.info-box-price e').text());
  var like_list12 = parseFloat($('.like_list.like_list01 li .info-original-price e').text()) + parseFloat($('.like_lists ul.like_list li').eq(0).find('.info-original-price e').text());
  like_list11 = like_list11.toFixed(2);
  like_list12 = like_list12.toFixed(2);
  $('.like_list.like_list03 li.total_price .combo_price span e').text(like_list11);
  $('.like_list.like_list03 li.total_price .save_all span e').text(like_list12);

  // 获取套餐主商品价格
  var like_list1 = parseFloat($('.like_list.like_list01 li .info-box-price e').text());
  var like_list2 = parseFloat($('.like_list.like_list01 li .info-original-price e').text());
  like_list1 = like_list1.toFixed(2);
  like_list2 = like_list2.toFixed(2);


  // 用户选择商品之后  计算套餐价格
  $('.like_lists ul.like_list li').each(function () {

    like_list1 = parseFloat(like_list1);
    like_list2 = parseFloat(like_list2);

    var that = $(this);
    var like_list21 = parseFloat(that.find('.info-box-price e').text());
    var like_list22 = parseFloat(that.find('.info-original-price e').text());
    that.find('a.txt input').click(function () {
      var like_list01 = like_list1 + like_list21;
      like_list01 = like_list01.toFixed(2);
      var like_list02 = like_list2 + like_list22;
      like_list02 = like_list02.toFixed(2);
      $('.like_list.like_list03 li.total_price .combo_price span e').text(like_list01);
      $('.like_list.like_list03 li.total_price .save_all span e').text(like_list02);
    })
  })

})