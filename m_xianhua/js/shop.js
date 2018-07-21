$(function(){

  var jNum = 0;
  var jNumOut = 0;

  $('.collect ul li').each(function(index,ele){

    var that = $(this).find('.collect-box');
    //获得文本框对象
    var t = that.find(".text_box");
    //初始化数量为1,并失效减
    that.find('.min').attr('disabled', true);
    //数量增加操作
    that.find(".add").click(function () {
      t.val(parseInt(t.val()) + 1)
      if (parseInt(t.val()) != 1) {
        that.find('.min').attr('disabled', false);
      }
      if(that.hasClass('active') == true){
        jNum += parseFloat(that.find('.collect-box-r p e b').text()) * 1;
      }else{
        return;
      }
      $('.settle .settle-r span e').text('￥' + parseFloat(jNum).toFixed(2) );
      return jNum;
    })
    //数量减少操作
    that.find(".min").click(function () {
      t.val(parseInt(t.val()) - 1);
      if (parseInt(t.val()) == 1) {
        that.find('.min').attr('disabled', true);
      }
      if(that.hasClass('active') == true){
        jNum -= parseFloat(that.find('.collect-box-r p e b').text()) * 1;
      }else{
        return;
      }
      $('.settle .settle-r span e').text('￥' + parseFloat(jNum).toFixed(2) );
      return jNum;
    })

    var chooseNum = 0;
    var chooseNums = 0;
    that.find('.choose-up i').click(function(){
      if(chooseNum == 0){
        that.addClass('active');
        jNum += parseFloat(that.find('.collect-box-r p e b').text()) * parseFloat(that.find('.text_box').val());
        $('.settle .settle-r span e').text('￥' + parseFloat(jNum).toFixed(2) );
        chooseNum = 1;
      }else{
        that.removeClass('active');
        jNum -= parseFloat(that.find('.collect-box-r p e b').text()) * parseFloat(that.find('.text_box').val());
        $('.settle .settle-r span e').text('￥' + parseFloat(jNum).toFixed(2) );
        chooseNum = 0;
      }
    })

    var settleNum = 0;
    $('.settle .settle-l').click(function(){

      if(settleNum == 0){
        $('.settle .settle-l i').addClass(' active');
        that.addClass(' active');
        jNumOut += parseFloat(that.find('.collect-box-r p e b').text()) * parseFloat(that.find('.text_box').val());
        jNum = jNumOut;
        $('.settle .settle-r span e').text('￥' + parseFloat(jNumOut).toFixed(2) );
        settleNum = 1;
        chooseNum = 1;
      }else{
        $('.settle .settle-l i').removeClass(' active');
        that.removeClass(' active');
        jNum = jNumOut = 0.00;
        $('.settle .settle-r span e').text('￥' + parseFloat(jNumOut).toFixed(2) );
        settleNum = 0;
        chooseNum = 0;
      }
    })


  })


  
  // var settleNum = 0;
  // $('.settle .settle-l').click(function(){

  //   $('.collect ul li.cleckAll').each(function(){

  //     var that = $(this).find('.collect-box');

  //     if(settleNum == 0){

  //       $('.settle .settle-l i').addClass(' active');

  //       $('.collect ul li .collect-box').addClass(' active');

  //       jNum += parseInt(that.find('.collect-box-r p e b').text()) * parseInt(that.find('.text_box').val());

  //       console.log(jNum)

  //       $('.settle .settle-r span e').text('￥' + jNum);
  //       settleNum = 1;
  //       chooseNum = 1;
  //     }else{
  //       $('.settle .settle-l i').removeClass(' active');
  //       $('.collect ul li .collect-box').removeClass(' active');
  //       jNum = 0;
  //       $('.settle .settle-r span e').text('￥' + jNum);
  //       settleNum = 0;
  //       chooseNum = 0;
  //     }

  //   })
  // })

  

})