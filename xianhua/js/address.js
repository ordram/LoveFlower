$(document).ready(function () {

  $(function () {
    $(".add").click(function () {
      var t = $(this).parent().find('input[class*=text_box]');
      t.val(parseInt(t.val()) + 1)
    })
    $(".min").click(function () {
      var t = $(this).parent().find('input[class*=text_box]');
      t.val(parseInt(t.val()) - 1)
      if (parseInt(t.val()) < 0) {
        t.val(0);
      }
    })
  })


  // 兼容IE浏览器
  if (!document.getElementsByClassName) {
    document.getElementsByClassName = function (cls) {
      var ret = [];
      var els = document.getElementsByTagName('*');
      for (var i = 0, len = els.length; i < len; i++) {

        if (els[i].className.indexOf(cls + ' ') >= 0 || els[i].className.indexOf(' ' + cls + ' ') >= 0 || els[i].className.indexOf(' ' + cls) >= 0) {
          ret.push(els[i]);
        }
      }
      return ret;
    }
  }


  //地址选择
  $(function () {
    $(".user-addresslist").click(function () {
      $(this).addClass("defaultAddr").siblings().removeClass("defaultAddr");
    });
    $(".logistics").each(function () {
      var i = $(this);
      var p = i.find(">ul>li");
      p.click(function () {
        if (!!$(this).hasClass("selected")) {
          // $(this).addClass("selected");
        } else {
          $(this).addClass("selected").siblings("li").removeClass("selected");
        }
      })
    })
  });


  // 定时送达
  var timingNum = 0;
  $('.timing').css({'display': 'none'});

  $('.timingplay').click(function () {
    if (timingNum == 0) {
      $('.logistics li.timingplay').addClass(" selected");
      $('.timing').css({'display': 'block'});
      timingNum = 1;
    } else {
      $('.logistics li.timingplay').removeClass(" selected");
      $('.timing').css({'display': 'none'});
      timingNum = 0;
    }
  })


  // 留言贺卡
  $(".logistics .logistics-box-right > ul > li").each(function (index, ele) {
    var that = $(this);
    that.click(function () {

      $('.logistics .logistics-box-right ul li').removeClass(' active');;
      that.addClass(' active');

      $('.logistics .logistics-box-right .logistics-box-content ul').css({'display':'none'});
      $('.logistics .logistics-box-right .logistics-box-content ul').eq(index).css({'display':'block'});

      $('.logistics .logistics-box-right .logistics-box-content ul li').each(function(){
        var that = $(this);
        that.click(function(){
          var thatHtml = that.text();
          $('.logistics-box-left textarea').text(thatHtml);
        })
      })

    })
  })

  $('.logistics .logistics-box-right .logistics-box-content ul li').each(function(){
    var that = $(this);
    that.click(function(){
      var thatHtml = that.text();
      $('.logistics-box-left textarea').text(thatHtml);
    })
  })


  // 发票信息
  var nvoiceNum = 0;
  $('.xh-nvoice-play').click(function(){
    if(nvoiceNum == 0){
      $('.xh-nvoice').css({'display':'block'});
      nvoiceNum = 1;
    }else if(nvoiceNum == 1){      
      $('.xh-nvoice').css({'display':'none'});
      nvoiceNum = 0;
    }
  })

  $('.xh-nvoice .xh-nvoice-title > label').eq(0).click(function(){
    $('.xh-nvoice .xh-nvoice-content .xh-nvoice-qiye').css({'display':'block'});
    $('.xh-nvoice .xh-nvoice-content .xh-nvoice-geren').css({'display':'none'});
  })
  $('.xh-nvoice .xh-nvoice-title > label').eq(1).click(function(){
    $('.xh-nvoice .xh-nvoice-content .xh-nvoice-qiye').css({'display':'none'});
    $('.xh-nvoice .xh-nvoice-content .xh-nvoice-geren').css({'display':'block'});
  })
  



})

// 弹出地址选择

$(document).ready(function ($) {

  var $ww = $(window).width();

  $('.theme-login').click(function () {
    //					禁止遮罩层下面的内容滚动
    $(document.body).css("overflow", "hidden");

    $(this).addClass("selected");
    $(this).parent().addClass("selected");


    $('.theme-popover-mask').show();
    $('.theme-popover-mask').height($(window).height());
    $('.theme-popover').slideDown(200);

  })

  $('.theme-poptit .close,.btn-op .close').click(function () {

    $(document.body).css("overflow", "visible");
    $('.theme-login').removeClass("selected");
    $('.item-props-can').removeClass("selected");
    $('.theme-popover-mask').hide();
    $('.theme-popover').slideUp(200);
  })


});