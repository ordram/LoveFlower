// JavaScript Document

//商品规格选择
$(function () {

  $(".theme-options").each(function () {
    var i = $(this);
    var p = i.find("ul>li");
    p.click(function () {
      if (!!$(this).hasClass("selected")) {
        // $(this).removeClass("selected");

      } else {
        $(this).addClass("selected").siblings("li").removeClass("selected");

      }

    })

  })

  // 您已选择
  $('.chosens span').eq(0).text($(".theme-optionsLi").eq(0).find('ul li').eq(0).text());
  $('.chosens span').eq(1).text($(".theme-optionsLi").eq(1).find('ul li').eq(0).text());
  $('.chosens span').eq(2).text($(".theme-optionsLi").eq(2).find('ul li').eq(0).text());
  $('.chosens span').eq(3).text($(".theme-optionsLi").eq(3).find('ul li').eq(0).text());
  $('.chosens span').eq(4).text($(".theme-optionsLi").eq(5).find('ul li').eq(0).text());
  $(".theme-optionsLi").each(function(index){
    var that = $(this);
    that.find('ul li').each(function(){
      $(this).click(function(){
        $('.chosens span').eq(index).text($(this).text());
      })
    })
  })

  // 会员折扣
  $('.membership').hover(function(){
    $('.membership_con').css({ 'display' : 'block' });
  },function(){
    $('.membership_con').css({ 'display' : 'none' });
  })


  $(".theme-optionsLi").each(function(){
    var i = $(this);
    var p = i.find("ul>li");
    var price = 0;

    var sys_item_price= $(".sys_item_price").text();
    var sys_item_mktprice= $(".sys_item_mktprice").text();

    i.find('input').val(i.find('ul li').eq(0).attr("rel"));
    i.find('input').attr('price',i.find('ul li').eq(0).attr("price"));

    i.find('input').each(function(){
      price+=parseFloat($(this).attr('price'));
    });

    $(".sys_item_price").text((parseFloat(sys_item_price)+price).toFixed(2))
    $(".sys_item_mktprice").text((parseFloat(sys_item_mktprice)+price).toFixed(2))

    p.each(function(){
      $(this).click(function(){

        price=0;

        i.find('input').val($(this).attr("rel"));
        i.find('input').attr('price',$(this).attr("price"));

        $(".theme-optionsLi").find('input').each(function(){
            price+=parseFloat($(this).attr('price'));
        });

        $(".sys_item_price").text((parseFloat(sys_item_price)+price).toFixed(2))
        $(".sys_item_mktprice").text((parseFloat(sys_item_mktprice)+price).toFixed(2))

      })
    })
  })

})


//弹出规格选择
$(document).ready(function () {
  var $ww = $(window).width();
  if ($ww < 1025) {
    $('.theme-login').click(function () {
      $(document.body).css("position", "fixed");
      $('.theme-popover-mask').show();
      $('.theme-popover').slideDown(200);

    })

    $('.theme-poptit .close,.btn-op .close').click(function () {
      $(document.body).css("position", "static");
      //					滚动条复位
      $('.theme-signin-left').scrollTop(0);

      $('.theme-popover-mask').hide();
      $('.theme-popover').slideUp(200);
    })

  }
})

//导航固定
$(document).ready(function () {
  var $ww = $(window).width();
  var dv = $('ul.am-tabs-nav.am-nav.am-nav-tabs'),
    st;

  if ($ww < 623) {

    var tp = $ww + 363;
    $(window).scroll(function () {
      st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
      if (st >= tp) {
        if (dv.css('position') != 'fixed') dv.css({
          'position': 'fixed',
          top: 53,
          'z-index': 1000009
        });

      } else if (dv.css('position') != 'static') dv.css({
        'position': 'static'
      });
    });
    //滚动条复位（需要减去固定导航的高度）

    $('.introduceMain ul li').click(function () {
      sts = tp;
      $(document).scrollTop(sts);
    });
  } else {

    dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
    var tp = parseInt(dv.attr('otop')) + 36;
    $(window).scroll(function () {
      st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
      if (st >= tp) {

        if (dv.css('position') != 'fixed') dv.css({
          'position': 'fixed',
          top: 0,
          'z-index': 998
        });

        //滚动条复位	
        $('.introduceMain ul li').click(function () {
          sts = tp - 35;
          $(document).scrollTop(sts);
        });

      } else if (dv.css('position') != 'static') dv.css({
        'position': 'static'
      });
    });
    
  }
});


$(document).ready(function () {
  //优惠券
  $(".hot span").click(function () {
    $(".shopPromotion.gold .coupon").toggle();
  })


  //获得文本框对象
  var t = $("#text_box");
  //初始化数量为1,并失效减
  $('#min').attr('disabled', true);
  //数量增加操作
  $("#add").click(function () {
    t.val(parseInt(t.val()) + 1)
    if (parseInt(t.val()) != 1) {
      $('#min').attr('disabled', false);
    }

  })
  //数量减少操作
  $("#min").click(function () {
    t.val(parseInt(t.val()) - 1);
    if (parseInt(t.val()) == 1) {
      $('#min').attr('disabled', true);
    }

  })

})