$(function(){

  // 首页全部商品
   var shopList = $('.shopList-t ul li').length;
   $('.shopList-t ul').css({ 'width' : shopList * 92 });

  // 返回顶部
  $(".m-top-go").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 300);
  });

  // 首页商品列表tab栏
  $('.shopList-t ul li').each(function(index,ele){
    var that = $(this).find('a');
    that.click(function(){
      $('.shopList-t ul li a').removeClass(' active');
      that.addClass(' active');

      $('.shopList-b div.shopList-b-box').css({'display':'none'});
      $('.shopList-b div.shopList-b-box').eq(index).css({'display':'block'});
    })
  })

  // 列表页  筛选
  $('.filter .filter-box .filter-box-content ul li').each(function(){
    var that = $(this).find('a');
    var filterNum = 0;
    that.click(function(){
      if(filterNum == 0){
        that.addClass('active');
        filterNum = 1;
      }else{
        that.removeClass('active');
        filterNum = 0;
      }
    })
  })


  $('.filter-off').click(function(){
    $('.filter').stop().animate({ right : 0 },200);
    $('.cover').stop().animate({ opacity : 1 }).css({ 'display' : 'block' });
  })
  
  $('.cover,.filter .filter-box .filter-box-content.filter-price button').click(function(){
    $('.filter').stop().animate({ right : -260 },200);
    $('.cover').stop().animate({ opacity : 0 }).css({ 'display' : 'none' });
  })

  var iconDown = 0;
  $('.filter .filter-box .filter-box-title i.am-icon-angle-down').click(function(){
    if(iconDown == 0){
      $(this).removeClass(' am-icon-angle-down').addClass(' am-icon-angle-up');
      $('.filter-box-content.filter-type').stop().animate({ height : 180 },200);
      iconDown = 1;
    }else{
      $(this).removeClass(' am-icon-angle-up').addClass(' am-icon-angle-down');
      $('.filter-box-content.filter-type').stop().animate({ height : 90 },200);
      iconDown = 0;
    }
  })


  // 分类
  var classify = $(window).height() - 94;
  var classifyL = $(window).height() - $('header.header').height() - 30 - 65;
  var classifyR = $(window).height() - $('header.header').height() - 55 - 80;
  $('.classify').css({ 'height' : classify });
  $('.classify .classify-l ul').css({ 'height' : classifyL });
  $('.classify .classify-r .classify-r-box ul').css({ 'height' : classifyR });

  $('.classify .classify-l ul li').each(function(index,ele){
    var that = $(this).find('a');
    that.click(function(){
      $('.classify .classify-l ul li a').removeClass(' active');
      that.addClass(' active');
      $('.classify-r div.classify-r-box').css({ 'display' : 'none' });
      $('.classify-r div.classify-r-box').eq(index).css({ 'display' : 'block' });
    })
  })


  // 我的订单
  $('.order .order-title ul li').each(function(index,ele){
    var that = $(this).find('a');
    that.click(function(){
      $('.order .order-title ul li a').removeClass(' active');
      that.addClass(' active');
      
      $('.order .order-content div.order-content-box').css({ 'display' : 'none' });
      $('.order .order-content div.order-content-box').eq(index).css({ 'display' : 'block' });

    })
  })


  // 收货地址
  $('.address ul li').each(function(){
    var that = $(this);
    that.click(function(){
      $('.address ul li').removeClass(' active');
      that.addClass(' active');
    })
  })

  var addressNum = 0;
  $('.addressAdd,.cover01,.addressAdd-box .am-btn-danger').click(function(){
    if(addressNum == 0){
      $('.addressAdd-box').stop().animate({ bottom : 0 },200);
      $('.cover').stop().animate({ opacity : 1 }).css({ 'display' : 'block' });
      addressNum = 1;
    }else{
      $('.addressAdd-box').stop().animate({ bottom : -260 },200);
      $('.cover').stop().animate({ opacity : 0 }).css({ 'display' : 'none' });
      addressNum = 0;
    }
  })

  $('.addressAdd-box .am-btn-danger').click(function(){
    var name = $('.login .login-box div.am-form-group').eq(0).find('input').val();
    var number = $('.login .login-box div.am-form-group').eq(1).find('input').val();
    var site01 = $('.login .login-box div.am-form-group').eq(2).find('div.am-u-sm-4').eq(0).find('select').val();
    var site02 = $('.login .login-box div.am-form-group').eq(2).find('div.am-u-sm-4').eq(1).find('select').val();
    var site03 = $('.login .login-box div.am-form-group').eq(2).find('div.am-u-sm-4').eq(2).find('select').val();
    var address = $('.login .login-box div.am-form-group').eq(3).find('input').val();

    $('.address ul li').removeClass(' active');
    $('.address ul').append('<li class="active"><div class="address-box"><p>收货人：<e>'+ name +'</e></p><p>所在地区：<e>'+ site01 +' > '+ site02 +' > '+ site03 +'</e></p><p>地址：<e>'+ address +'</e></p><p>手机：<e>'+ number +'</e></p><i></i></div></li>')
  })

  // 发票信息
  $('.bill .am-form-group .am-u-sm-12 .am-u-sm-8 ul li').eq(0).find('a').click(function(){
    $('.bill .am-form-group .am-u-sm-12 .am-u-sm-8 ul li').find('a').removeClass(' active');
    $(this).addClass(' active');
    $('.bill .login-box .am-form div.bill-List').css({ 'display' : 'none' });
    $('.bill .login-box .am-form div.bill-List').eq(0).css({ 'display' : 'block' });
  })
  
  $('.bill .am-form-group .am-u-sm-12 .am-u-sm-8 ul li').eq(1).find('a').click(function(){
    $('.bill .am-form-group .am-u-sm-12 .am-u-sm-8 ul li').find('a').removeClass(' active');
    $(this).addClass(' active');
    $('.bill .login-box .am-form div.bill-List').css({ 'display' : 'none' });
    $('.bill .login-box .am-form div.bill-List').eq(1).css({ 'display' : 'block' });
  })


  // 快捷选择留言
  $('.shortcut .shortcut-title ul li').each(function(index,ele){

    $(this).find('a').click(function(){

      $('.shortcut .shortcut-title ul li a').removeClass(' active');
      $(this).addClass(' active');
      
      $('.shortcut .shortcut-content div.shortcut-box').css({ 'display' : 'none' });
      $('.shortcut .shortcut-content div.shortcut-box').eq(index).css({ 'display' : 'block' });

      $('.shortcut .shortcut-content div.shortcut-box ul li').each(function(){
        var that = $(this);
        var shortcutLi = parseInt(that.find('span').height());
        that.find('i').css({ 'marginTop' : (shortcutLi -25)/2 });
    
        that.click(function(){
          $('.shortcut .shortcut-content div.shortcut-box ul li i').removeClass(' active');
          that.find('i').addClass(' active');
        })
    
      })

    })
  })

  $('.shortcut .shortcut-content div.shortcut-box ul li').each(function(){
    var that = $(this);
    var shortcutLi = parseInt(that.find('span').height());
    that.find('i').css({ 'marginTop' : (shortcutLi -25)/2 });

    that.click(function(){
      $('.shortcut .shortcut-content div.shortcut-box ul li i').removeClass(' active');
      that.find('i').addClass(' active');
    })

  })

  // 商品搭配
  var assort = $('.details .details-assort .details-assort-content ul li').length;
  $('.details .details-assort .details-assort-content ul').css({ 'width' : assort * 115 });
   
})