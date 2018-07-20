$(function(){

  // 是否使用积分
  var jifen = 0;
  $('.user .user-bot ul li.jifen div.user-bot-list i').click(function(){
    if(jifen == 0){
      $(this).addClass(' active');
      jifen = 1;
    }else{
      $(this).removeClass(' active');
      jifen = 0;
    }
  })

  // 匿名购买
  var niming = 0;
  $('.user .user-bot ul li.niming div.user-bot-list i').click(function(){
    if(niming == 0){
      $(this).addClass(' active');
      niming = 1;
    }else{
      $(this).removeClass(' active');
      niming = 0;
    }
  })

  // 送达时间
  var serDateNum = 0;
  $('.serDate,.cover02,.serDate-box .am-btn-danger').click(function(){
    if(serDateNum == 0){
      $('.serDate-box').stop().animate({ bottom : 0 },200);
      $('.cover02').stop().animate({ opacity : 1 }).css({ 'display' : 'block' });
      serDateNum = 1;
    }else{
      $('.serDate-box').stop().animate({ bottom : -260 },200);
      $('.cover02').stop().animate({ opacity : 0 }).css({ 'display' : 'none' });
      serDateNum = 0;
    }
  })
  $('.serDate-box .am-btn-danger').click(function(){
    var addstart_time = $('.login .login-box div.am-form-group #addstart_time').val();
    var shiduanxi = $('.login .login-box div.am-form-group #shiduanxi').val();
    var addstart_times = $('.serDate-box .login .login-box .am-form-group select#doc-select-1').val();

    if( addstart_time != null && shiduanxi != null && addstart_times != null ){
      $('.user .user-bot ul li.serDate div.user-bot-list b strong').eq(0).text(addstart_time)
      if($('.login .am-u-sm-12 .am-u-sm-3 p span').hasClass('active') == true){
        $('.user .user-bot ul li.serDate div.user-bot-list b strong').eq(1).text(shiduanxi + ' 送达')
      }else if($('.login .am-u-sm-12 .am-u-sm-3 p span').hasClass('active') == false){
        $('.user .user-bot ul li.serDate div.user-bot-list b strong').eq(1).text(addstart_times + ' 送达')
      }
    }else{
      alert('日期或时间不能为空');
    }
    $('.serDate-box ul li').removeClass(' active');
  })


  // 支付方式
  $('.serPay,.cover03,.serPay-box .user .user-bot ul li').click(function(){
    if(serDateNum == 0){
      $('.serPay-box').stop().animate({ bottom : 0 },200);
      $('.cover03').stop().animate({ opacity : 1 }).css({ 'display' : 'block' });
      serDateNum = 1;
    }else{
      $('.serPay-box').stop().animate({ bottom : -260 },200);
      $('.cover03').stop().animate({ opacity : 0 }).css({ 'display' : 'none' });
      serDateNum = 0;
    }
  })

  $('.serPay-box .user .user-bot ul li').each(function(){
    var that = $(this);
    that.click(function(){
      $('.serPay-box .user .user-bot ul li div.user-bot-list i').removeClass(' active');
      that.find('div.user-bot-list i').addClass(' active');

      $('.user .user-bot ul li.serPay div.user-bot-list b').text(that.find('div.user-bot-list span').text());
      
    })
  })


  // 选中定时
  var dingshiRun = 0;
  $('.login .am-u-sm-12 .am-u-sm-3 p span').click(function(){
    if(dingshiRun == 0){
      $(this).addClass(' active');
      dingshiRun = 1;
    }else{
      $(this).removeClass(' active');
      dingshiRun = 0;
    }
  })
  
})