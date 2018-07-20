$(function(){
	 addressinit();
	 $('.tipclassnming').hide();
	 $('#addstart_time').change(function(){
        if($(this).val() != ''){
        	$('#shiduanxi').val('');
        	$("input[name='nshiduan_timer']").val('');
            $('.dateacd').hide();
            dotimesh();
            if($('#shiduanxi').val() != ''){
            	checkholiday_price();
            }
            
        }
	});
	 $('select[name="bonusidname"]').change(function(){
			var isbouns = $('select[name="bonusidname"]').val();
			if(isbouns != '0'){
				var txt =  $('select[name="bonusidname"]').find("option:selected").attr('rprice');
				var price = parseFloat(txt);
				$('#order_total_amount').text('¥'+(DTOTALPRICE - price).toFixed(2));
				$('#reduce_bouns_id').text('-￥'+(price.toFixed(2)));
		     }else{
		    	 $('#order_total_amount').text('¥'+(DTOTALPRICE).toFixed(2));
		    	 $('#reduce_bouns_id').text('￥0.00');
		     }
		});
		
	    var lengs = $('.select_hongbao').find('option').size();
	    if(lengs > 1){
	    	   var hb =  $('.select_hongbao').find('option').eq(1).attr('value');
	           $('.select_hongbao').val(hb);
		      	var txt =  $('select[name="bonusidname"]').find("option:selected").attr('rprice');
				var price = parseFloat(txt);
				$('#order_total_amount').text((DTOTALPRICE - price).toFixed(2));
				$('#reduce_bouns_id').text('-￥'+(price.toFixed(2)));
	    }else{
	    	if($('#reduce_bouns_id').length > 0){
	    		$('#reduce_bouns_id').text('-￥0.00');
	    	}
	    };
	    
	    $('.complaint_type ul li').each(function(index, element) {
			$(this).click(function(){
	           $('.complaint_type ul li').removeClass('cur');
	           $('.complaint_type ul li').eq(index).addClass('cur');
	        });
		});
	    $('#remark').click(function(){
	        if($('#remark_box').is(":visible")){
	            $('#remark_box').hide();
	            $('.remark_status').show();
	            $('.remark_status1').hide();
	        }else{
	            $('#remark_box').show();
	            $('.remark_status').hide();
	            $('.remark_status1').show();
	        }
	    });
	    $('#adress_info ul li').each(function(index, element) {
			$(this).click(function(){
	           $('#adress_info ul li').removeClass('cur');
	           $('#adress_info ul li').eq(index).addClass('cur');
	        });
		});
	    $('.pay_list ul li').each(function(index, element) {
			$(this).click(function(){
	            if($(this).attr('data')==1){
	            	common_info("您的余额不足，请选择其他支付方式");
	                return false;   
	            }
	           $('.pay_list ul li').removeClass('cur');
	           $('.pay_list ul li').eq(index).addClass('cur');
	           $('#paymethodcode').val($(element).attr('attrpay_code'));
	        });
		});
		
        init_card_select();
	    $('#complaint').click(function(){
	        $('#bg').show();
	        $('#complaint_div1').show();
	    });
	    $('#complaint_div1_close').click(function(){
	        $('#bg').hide();
	        $('#complaint_div1').hide();
	    })
	    $('#complaint_div2_close').click(function(){
	        $('#bg').hide();
	        $('#complaint_div2').hide();
	    })
	    
	    
        $('#select_store').change(function(){
        	doconsole_price();
            if($(this).val()==1){
            	show_map_divframe();
                showarea_rg();
            }else{
            	hide_map_divframe();
                $('.areacltt').hide();
            }
            
        });
        
        $('#userinfo_div_close').click(function(){
            $('#bg').hide();
            $('#userinfo').hide();
        });
        $('#checkbox').click(function(){
            if($('#checkbox-input').is(':checked')){
                $('#checked_img').show();
                $('#checkbox-input').hide();
            }else{
               $('#checked_img').hide();
                $('#checkbox-input').show();
            }
        });

        $('#invoice_div_close').click(function(){
            $('#bg').hide();
            $('#invoice').hide();
         });
        
	   $('#isniming').hover(
			   function(){
				   $('.tipclassnming').fadeIn();
			   },function(){
				   $('.tipclassnming').hide();
	   }); 
	   
	   $('#isniming').click(function(){
		   if($(this).attr('checked') == 'checked'){
			   $('input[name="isnisong"]').attr('checked','checked');
		   }else{
			   $('input[name="isnisong"]').attr('checked',false);
		   }
	   });
	   
	   $('#register_div_close').click(function(){
		   $('#register').hide();
		   $('#bg').hide();
	   });
	   
	   
	   $('.card_last1').click(function(e){
           $(this).parent().hide();
           var l = parseInt($(this).parent().attr("attcard"));
           $('#card_default_d').find('.card_box[attcard="'+l+'"]').hide();
           if(l==1){
                l++;
            }else{
         	   l--;
            }
           $('#card_default_d').find('.cardmsgcontent[attcard="'+l+'"]').show();
           $('#card_default_d').find('.card_box[attcard="'+l+'"]').show();
           if($.trim($('#card_default_d').find('.card_box[attcard="'+l+'"]').html())==""){
         	  $('#card_default_d').find('.card_box[attcard="'+l+'"]').html($("#card_more_list").find('.card_box').html());
         	  init_card_select();
             }
            $('#card_default_d').find('.card_box[attcard="'+l+'"]').find("ul").show();
            $('#card_default_d').find('.card_box[attcard="'+l+'"]').find("ul:gt(0)").hide();
            $('#card_default_d').find('.cardmsgcontent[attcard="'+l+'"]').find("li:gt(0)").removeClass('cur');
            $('#card_default_d').find('.cardmsgcontent[attcard="'+l+'"]').find("li:eq(0)").addClass('cur');
        });
	   
	   $("#curtimemshiduan").change(function(){
		   var hour = $(this).val();
		   var date = $.trim($('#addstart_time').val());
		   if(parseInt(hour) == minite_cur_global && date==DATE_CUR_GLOBAL){
			   check_minite_state(sinite_cur_global);
		   }else{
			   $('#curtimeminit').find('option').each(function(){
                   $(this).show();
           	   });
		   }
	   });
	   
	   if($('.discount-tabs').size()){
		   $('.discount-tabs li').on("click",function(){
			   var t = $(this).attr("attr-pro-type");
			   $('.discount-wrap').find('.pro').hide();
			   $('.discount-wrap').find('.pro[data-value="'+t+'"]').show();
			   $(this).siblings().removeClass("cur");
			   $(this).addClass("cur");
		   });
	   }
});

var goods_special_default_num = 30;
var goods_special_nums = ['10090','12253','12254','12255','12256'];
var goods_special_default_num_bak = 15;
var goods_special_nums_bak = ['12254', '12255', '12256'];

var minite_cur_global,sinite_cur_global;

if($('input[name="extragoods"]').length > 0){
	$('input[name="extragoods"]').click(function(){
	   if($(this).attr('checked')){
		     var chk = 1;
		}else{
			 var chk = 0;
	    }
      $.post('/index.php?act=buy&op=addextragoods',{goods_id:$(this).val(),chk:chk},function(data){
          location.reload();
       });
	 });
};


function self_in_array(needle, haystack){
	if(typeof needle == 'string' || typeof needle == 'number') {
		for(var i in haystack) {
			if(haystack[i] == needle) {
					return true;
			}
		}
	}
	return false;
}

function recommend_scroll(){
    $("#scrollstroe").jCarouselLite({
        btnNext: "#nextbtn",
        btnPrev: "#prevbtn",
        visible: 1,
        
    });
}

function recommend_close(){
    $('.recommend_float').hide();
    $('#bg').hide();
}


function ajax_doing(){
	$('<div id="loadingToast">'+
	        '<div class="weui-mask_transparent"></div>'+
	        '<div class="weui-toast">'+
	            '<i class="weui-loading weui-icon_toast"></i>'+
	           '<p class="weui-toast__content">数据加载中</p>'+
	        '</div>'+
	   '</div>').appendTo('body');
}
function ajax_done(){
	$('#loadingToast').remove();
}

var $promotion_1_page = 1,$promotion_2_page=1;
function loadmorepro(obj){
    var that = $(obj);
    var pj   = that.parent().parent();
    var ptype = pj.attr('data-value');
    if(pj.find('li:hidden').size()>=3){
    	pj.find('li:hidden').show();
    	return;
    }else{
    	pj.find('li:hidden').show();
    }
    if(ptype == 2){
        $promotion_1_page++;
        var urlparam = "act=buy&op=g1protiom&ajaxdo=1&curpage="+$promotion_1_page;
    }else if(ptype == 1){
        $promotion_2_page++;
        var urlparam = "act=buy&op=get_discount_goods&ajaxdo=1&curpage="+$promotion_2_page;
    }
    if(!urlparam) return false;
	ajax_doing();
	get_ajax('./index.php',urlparam,function(data){
		$json=$.parseJSON(data);
		if($json.length==0){
            that.remove();
            common_info("没有更多了！");
            if(ptype == 2){
                $promotion_1_page--;
            }else if(ptype == 1){
                $promotion_2_page--;
            }
	    }else{
		    var html = "";
		    for(var i in $json){
			    if(typeof $json[i]['goods_name'] == 'undefined') continue;
			    if(ptype == 2){
			    	html+='<li attr-goods-id="'+$json[i]['goods_id']+'">'+
			          '<i><img src="'+$json[i]['image']+'" style="width:90px;height:90px"/></i>'+
			          '<div class="msg">'+
			            '<p class="bold">'+$json[i]['goods_name']+'</p>'+
			            '<p class="size" style="height:45px;">'+$json[i]['goods_material']+'</p>'+
			            '<p class="sale" style="width:85px;margin-left:5px;"><span>满'+$json[i]['price']+'立减'+parseInt($json[i]['ygoods_price']-$json[i]['goods_price'])+'元</span></p>'+
			            '<p><span class="price">￥'+$json[i]['goods_price']+'</span><span class="orig-price">￥'+$json[i]['ygoods_price']+'</span>'+
			            '<a class="adg" href="javascript:;" onclick="add1goods(\'1g\',this,'+$json[i]['goods_id']+');"><i><span>+添加</span></i></a>'+
			            '<a class="deg" style="display:none" href="javascript:;" onclick="del1goods(\'1g\',this,'+$json[i]['goods_id']+');"><i class="color"><span>+添加</span></i></a></p>'+
			          '</div>'+
			        '</li>';
                }else if(ptype == 1){
                	html+='<li attr-goods-id="'+$json[i]['goods_id']+'">'+
			          '<i><img src="'+$json[i]['goods_image']+'" style="width:90px;height:90px"/></i>'+
			          '<div class="msg">'+
			            '<p class="bold">'+$json[i]['goods_name']+'</p>'+
			            '<p class="size" style="height:45px;">'+$json[i]['goods_material']+'</p>'+
			            '<p class="sale"><span>立减'+parseInt($json[i]['discount_rmb'])+'元</span></p>'+
			            '<p><span class="price">￥'+$json[i]['goods_promotion_price']+'</span><span class="orig-price">￥'+$json[i]['goods_price']+'</span>'+
			            '<a class="adg" href="javascript:;" onclick="add1goods(\'recommend\',this,'+$json[i]['goods_id']+');"><i><span>+添加</span></i></a>'+
			            '<a class="deg" style="display:none" href="javascript:;" onclick="del1goods(\'recommend\',this,'+$json[i]['goods_id']+');"><i class="color"><span>+添加</span></i></a></p>'+
			          '</div>'+
			        '</li>';
                }
			 }
            that.parent().parent().find('ul').append(html);
            if($json.length < 3){
	    		 that.remove();
	    	}
		}
		ajax_done();
	});
}

function add1goods(type,obj,goods_id){
	ajax_doing();
	get_ajax("./index.php","act=cart&op=add&goods_id="+goods_id+"&quantity=1&tp="+type,function(data){
		$json=$.parseJSON(data);
		if($json.state == 'true'){
			 $('.shopping_box').load('./index.php?act=buy&op=ajax_load&goods_id='+goods_id+'&type=2&reload=true',function(data){
				 $(obj).parents('.discount-wrap').find('.deg').hide().end().find('.adg').show();
				 $(obj).parent().find('.deg').show().end().find('.adg').hide();
				 reget_ajax_total();
				 ajax_done();
			});
		}else{
			 common_info($json.msg);
			 ajax_done();
		}
	});
}

function del1goods(type,obj,goods_id){
	ajax_doing();
	 $('.shopping_box').load('./index.php?act=buy&op=ajax_load&goods_id_p='+goods_id+'&type=0&del=true',function(data){
		 $(obj).parent().find('.deg').hide().end().find('.adg').show();
		 reget_ajax_total();
		 ajax_done();
	});
}

function show_recommend(goods_id,obj){
    $('.recommend_img_li').html('');
    $('#recommend_txt').html('');
    $.get('/index.php?act=buy&op=getextragoods&goods_id='+goods_id,function (result){
        if(result.error == 0){
            var str = '<div id="scrollstroe"><ul>';
            var img_original = result.goods['images'];
            console.log(img_original);
            for(var i=0;i<img_original.length;i++){
                str += '<li style="width:405px; height:405px;"><img src="'+img_original[i]+'" width="405" height="405"></li>';
            }
            str += '</ul></div>';
            $('.recommend_img_li').html(str);
            var recommend_txt = '';
            recommend_txt = '<p class="goods_title">'+result.goods['goods_name']+'<span>(2.14情人节鲜花伴侣)</span></p>\
              <p>[材料]	'+result.goods['cailiao']+'</p>\
              <p>'+result.goods['goods_memo']+'</p>\
              <div class="recommend_goods_price">￥'+result.goods['shop_price']+'元 <span style="font-size: 14px; color: #555; font-weight: 100;">\
                                           市场价：</span><del>￥'+result.goods['market_price']+'元</del><font>省'+result.goods['chajia']+'元</font>\
              <span style="float: right; cursor: pointer;"><span onClick="recommend_checkbox1('+result.goods['goods_id']+')" class="recommend_buy">点击购买</span></span></div>';
             $('#recommend_txt').html(recommend_txt);
             recommend_scroll();
         }else{
        	recommend_close();
         }
    },'json');
    
	$('.recommend_float').css('left',($(document.body).width() - $('.recommend_float').width())/2);
	$('.recommend_float').css('top',(parseInt($(window).height()/2)-300)+$(window).scrollTop());
	$('.recommend_float').show();
	$('#bg').show();
}
function recommend_checkbox1(goods_id){
	  $.post('/index.php?act=buy&op=addextragoods',{goods_id:goods_id,chk:1},function(data){
          location.reload();
       });
}


function showcard_new(){
    $("#card_new_show").css({top:"-200px"}).show().animate({top:"-50px"},500);
}

function check_delivery_shiduan_timer($h1,$cur_minite){
	minite_cur_global = $h1;
	sinite_cur_global = $cur_minite;
	var remain_timer = DEKIVER_SHIDUAN_REMAINTIMER,i=0;
	if(typeof DEKIVER_SHIDUAN_TIMER == "object"){
		for(i in DEKIVER_SHIDUAN_TIMER){
			if((eval(DEKIVER_SHIDUAN_TIMER[i]) > 0) && (eval(DEKIVER_SHIDUAN_TIMER[i])-eval(remain_timer)<3600)){
				$('.li_shiduan').find('li[atid="'+i+'"]').hide();
			}else{
				$('.li_shiduan').find('li[atid="'+i+'"]').show();
			}
		}
	}
	check_minite_state($cur_minite);
}

function check_minite_state($cur_minite){
	if($cur_minite==0) $cur_minite = 5;
	var _tmp = [0,5,10,15,20,25,30,35,40,45,50,55],i=0,isselect=false;
	$cur_minite=$cur_minite-$cur_minite%5;
	var _d = parseInt($cur_minite/5);
	if(_d>0){
		for(;i<_tmp.length;i++){
			if(String(_tmp[i]).length == 1){
				_tmp[i] = '0'+_tmp[i];
			}
			if(i<(_d-2)){
				$("#curtimeminit").find("option[value='"+_tmp[i]+"']").hide();
			}else{
				if(!isselect){
					 $('#curtimeminit').val(_tmp[i]);
					 isselect = true;
				}
			}
		}
	}
}


function init_card_select(){
    $('#card_default_d .card_default ul li').each(function(index, element) {
		$(this).click(function(){
           if(!$(this).hasClass('card_last1')){
        	   $('#card_default_d .card_default ul li').removeClass('cur');
               $('#card_default_d .card_default ul li').eq(index).addClass('cur');
        	   $('#card_default_d .card_box ul').each(function(index1, element1) {
           		   if(index == index1){
                       $(element1).show();
               		 }else{
               			$(element1).hide();
                   }
           	  });
           }

        });
	});
    
    $('#card_default_d .card_box ul li').each(function(index, element) {
		$(this).click(function(){
           $('.card_txt').html('');
           $('.card_txt').html($(this).attr("title"));
           $('.card_txt').trigger('input');
           $("#card_new_show").hide();
        });
	});
}

function reflech_redpacket(data){
	if(data == "0"){
		$('.select_hongbao').html('<option value="0">没有可用的红包</option>');
		$('#order_total_amount').text((DTOTALPRICE).toFixed(2));
		$('#packred_tr_id').hide();
	    $('input[name="youhui"][value="1"]').removeAttr('checked');
	}else{
		var html = '';
		html+= ' <option value="0" rprice="0">请选择红包</option>';
		for(var x=0;x<data.length;x++){
			html+= '<option value="'+data[x]['rpacket_id']+'" rprice="'+data[x]['rpacket_price']+'">'+data[x]['rpacket_title']+' '+'¥'+data[x]['rpacket_price']+'</option>';
		}
        $('.select_hongbao').html(html);
        $('#packred_tr_id').show();
        $('input[name="youhui"][value="1"]').attr('checked','checked');
        $('input[name="youhui"][value="2"]').removeAttr('checked');
        clearedpt(0);
	}
}
function clearedpt(type){
	if(type == 1){
		var l = $('#reduce_bouns_id').size();
		if(l > 0){
			$('#reduce_bouns_id').text('-￥0.00');
		}
		var lengs = $('.select_hongbao').find('option').size();
	    if(lengs > 1){
		      	var txt =  $('select[name="bonusidname"]').find("option:selected").attr('rprice');
				var price = parseFloat(txt);
				if(price > 0){
					$('#order_total_amount').text('¥'+(DTOTALPRICE).toFixed(2));
				}
	    };
	    
	    if($('#user_juancode').val() != ""){
	    	$('.sub_juan').click();
	    }
	}else{
		var lengs = $('.select_hongbao').find('option').size();
	    if(lengs > 1){
	    	   var hb =  $('.select_hongbao').find('option').eq(1).attr('value');
	           $('.select_hongbao').val(hb);
		      	var txt =  $('select[name="bonusidname"]').find("option:selected").attr('rprice');
				var price = parseFloat(txt);
				$('#order_total_amount').text('¥'+(DTOTALPRICE - price).toFixed(2));
				$('#reduce_bouns_id').text('-￥'+(price.toFixed(2)));
	    }else{
	    	$('#order_total_amount').text('¥'+(DTOTALPRICE).toFixed(2));
	    }
	    
	    if($('#reduce_voucher_id').size()>0){
	    	 $('#reduce_voucher_id').text('￥0.00');
	    }
	}
}

function add_adress_show(){
	$('#hidaddress_id').val('');
    setclien_top($('#userinfo .userinfo'),$('#userinfo'));
    $('#bg').show();
    $('#userinfo').show();
}

function complaint_succ(){
    $('#bg').show();
    $('#complaint_div1').hide();  
    $('#complaint_div2').show();  
}

function checkholiday_price(){
	 $.post(HOLIDAY_URL,{date:$('#addstart_time').val()},function(dat){
         if(dat == 1){
     	     $('#holiday_tip').html('您选择的配送时间是'+HOLODAY_NAME+'期间<br>购物车的商品将自动按照节日价格计算');
         }else if(dat == 2){
         	 //$('#holiday_tip').html('你选择的是平时送到,购物车的商品将自动按照平日价格计算');
        	 $('#holiday_tip').html('');
        	 $('#holiday_tip').html('您选择的配送时间是平时送达<br>购物车的商品将按照平时价格计算');
        	 $('#holiday_tip').show();
         }else{
         	 $('#holiday_tip').html('');
         }
    });
}
function selectthestore(obj,areaid){
    $(obj).parent().find('li').removeClass('over');
    $(obj).addClass('over');
    var area = $.trim($('#addresstoarea').text());
    $.post(SELECTONEURL,{areaid:areaid,area:area,page:CURPAGE},function(data){
   	     $('.areaclt').text(data).show();
   	     $('.areacltt').html('<a class="xgb" href="javascript:;" onclick="dochangestore(1);">修改</a> / <a class="xgq" href="javascript:;" onclick="dochangestore();">取消</a>配送花店 <font style="color:red;margin-left:5px"> 若所选花店无法配送，将为您安排附近其他花店</font>');
   	     $('.areacltt').show();
   	     $('#select_store').hide();
   	      hide_map_divframe();
        });
 };
 function resshowlist(){
	 $('.areacltt').hide();
	 $('#select_store').show();
	 show_map_divframe();
 }
function checkvoicem(){
   var code  = $.trim($('#user_juancode').val());
   var price = $.trim($('#goods_total_prices').text());
   price = price.replace('¥','');
   if(code != ''){
	   $.post(CHECKVICEURL,{code:code,total_price:price},function(data){
		   var res = data.split('|');
     	   if(res[0] != '1'){
               $('.youhuiqsp').text(res[1]);
               $('.youhuiqsp').css('color','red');
               $('#order_total_amount').text('¥'+(DTOTALPRICE).toFixed(2));
		       $('#reduce_voucher_id').text('￥0.00');
         	 }else{
         		$('.youhuiqsp').text('可以使用该优惠券');
                $('.youhuiqsp').css('color','green');
                $('input[name="youhui"]').removeAttr('checked');
                $('input[name="youhui"][value="2"]').attr('checked','checked');
                var voucher_price = parseFloat(res[1]);
            	$('#order_total_amount').text('¥'+(DTOTALPRICE - voucher_price).toFixed(2));
				$('#reduce_voucher_id').text('-￥'+(voucher_price.toFixed(2)));
				$('#voucher_tr_id').show();
              }
         });
    }
 }

function checkprice_region(){
     var txt =  $.trim($('#addresstoarea1').val());
     if(txt != ''){
         doconsole_price();
      }else{
    	  var isinit = $('#adress_info').attr('attr_init');
    	  if(isinit == '1'){
    		  showarea_rg();
    	  }else{
    		  $('#adress_info').attr('attr_init','1');
    	  }
    	 
      }
  };
  
 function showarea_rg(){
	  var area = $.trim($('#addresstoarea1').text());
	  var area1 = $.trim($('#addresstoarea').text());
	  if(area == ''){
		  $('#saveaddressforid').show(); 
    	  $('#iframeidload').attr('src',SHOWEAREURL+'&area='+area1);
    	  $('.areacls').show();
    	  hide_map_divframe();
	  }else{
		  $('.areacls').hide();
		  show_map_divframe();
	  }
  }
 
 function dochangestore(type){
	  $('.edithuastoreinfo').hide();
	  $('.areacltt').hide();
	  if(type ==1){
		  CHOOSE_FRONT_STORE = 0;
		  show_map_divframe();
          $("#select_store").val("1");
          var addrss = $('#addresstoarea1').val();
          if(addrss != ''){
        	  $('.areacls').hide();
          }
          doconsole_price();
          showarea_rg();
      }else{
    	  $("#select_store").val("0");
    	  hide_map_divframe();
    	  doconsole_price();
      }
     
   }
 
 function clearaddnewaddress(){
 	$('#addresstoname').val('');
 	$('#addresstotel').val('');
 	$('#hidaddress_id').val('');
 	$('#dinghuaname').val('');
 	$('#dinghuatel').val('');
 	$('#addstart_time,#addresstoarea1').val('');
 	$('#addresstoarea1').val();
 	$('.areaclt,.dateacd,.edithuastoreinfo').hide();
 	$('#addresstoarea').text('请选择地址');
 	$('#select_store').val(0);
 	$('#select_store').show();
   };
   
 function seltshiduan(obj,type){
  	 $(obj).parent().find('li').addClass('cur');
       $(obj).removeClass('cur');
       if(type ==1){
	           $('.li_shiduan').show();
	           $('.li_dingshi').hide();
        }else{
      	   $('.li_shiduan').hide();
             $('.li_dingshi').show();
         }
    }
   
   function hideTipmsg(){
		$('#tipstep1div').hide();
		$('html,body').animate({scrollTop:'200px'},400);
		return false; 
	};
   function jiaodate(date1,date2){
       date2 = date2.replace(/\//g,"-");
       var oDate1 = new Date(date1);
       var oDate2 = new Date(date2);
       if(oDate1.getTime() >= oDate2.getTime()){
          return true;
       } else {
          return false;
       }
   };
   
   function invoicechoice(obj){
      var v = $(obj).val();
      if(v == 0){
           $(obj).parent().find('span').hide();
       }else{
       	 $(obj).parent().find('span').show();
         if($.trim($('.invoicetipmsg').html()) == ""){
        	 $('.fapiao_btn').click();
         }
       }
    };
    
    function disabledorder(){
        $('#tipstep1div').show();
      };
    function choosexchange(obj){
    	var ck = $(obj).attr('checked');
    	if(ck=='checked'){
    		if(CART_GOODS_NUM != EXCHANGE_GOODS_NUM){
    			 common_info('积分兑换商品只能单独购买!');
    			 $(obj).attr('checked',false);
    		}
    	}
    }
    
    function get2nums_date(mdate){
    	var arr = mdate.split('-');
    	if(String(arr[1]).length == 1){
    		arr[1] = '0'+arr[1];
    	}
    	if(String(arr[2]).length == 1){
    		arr[2] = '0'+arr[2];
    	}
    	return arr[0]+'-'+arr[1]+'-'+arr[2];
    }
    
    function cover_order_submit(){
    	if($('#zxxBlank').length == 0){
    		var css = '<style type="text/css">#zxxBlank{position:absolute;z-index:80000;left:0;top:0;width:100%;height:100%;background:#fff;}</style>';
    		$("head").append(css);
    		var wrap = '<div id="zxxBlank" onselectstart="return false;"></div>';
    		var wd = $(window).width();
    		var st = $(window).scrollTop();
    		var ph = $("body").height();
    		var wh = $(window).height();
    		if (ph < wh){
				ph = wh;	
			}
    		$("body").append(wrap);	
    		$('#zxxBlank').width(wd).height(ph).show();
    		$('#zxxBlank').css('opacity',0.1);
    	}else{
    		$('#zxxBlank').show();
    	}
    }
    
    function cover_order_hide(){
    	$('#zxxBlank').hide();
    }
    
    function card_more_list(){
    		$('#card_more_list').show();
    		$('#card_default_d').hide();
    		$('#card_more_list .card_default ul li').eq(0).click();
    }
    
    
    function doregister_now(){
    	$('#bg').fadeIn();
    	$('#register').fadeIn();
    }
    $(function(){
    	$('.card_last').click(function(){
    		card_more_list();
    	});

		var css = '<style type="text/css">#card_more_list{position:absolute;z-index:5000;left:0;top:0;width:550px;height:180px;background:#fff;border:0px solid #e6e6e6;} #card_more_list .pix{position:absolute;top:-10px;right:15px;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:10px solid #e6e6e6;z-index:6000}</style>';
		$("head").append(css);
		var wrap = '<div style="display:none" id="card_more_list" onselectstart="return false;"></div>';
		$("body").append(wrap);	
		var t = 0;
		var l = 0;
		$('#card_more_list').css({top:t,left:(l)}).show();
		$('#card_more_list').load(CARD_MORE_URL,function(){
			$('#card_more_list .card_default ul li').each(function(index, element) {
				$(this).click(function(){
		           $('#card_more_list .card_default ul li').removeClass('cur');
		           $('#card_more_list .card_default ul li').eq(index).addClass('cur');
                   
		           $('#card_more_list .card_box ul').each(function(index1, element1) {
		       		   if(index == index1){
		                   $(element1).show();
		           		 }else{
		           			$(element1).hide();
		               }
		       	  });
		          	
		        });
			});
		    $('#card_more_list .card_box ul li').each(function(index, element) {
				$(this).click(function(){
		           $('.card_txt').html('');
		           $('.card_txt').html($(this).attr("title"));
		           $('.card_txt').trigger('input');
		        });
			});
		});
		$('#card_more_list').hide();
    	 //$(document).bind("click",function(e){ 
        		//if($(e.target).closest("#card_more_list").length==0){ 
        			//$('#card_more_list').hide();
        			//$('#card_default_d').show();
        		//}
    	// })
    });
    function nextpages(type){
       var total_page = Math.ceil(TOTAL_STORE_NUM/PERPAGE_NUM);
       if(type == 1){
           //if(CURPAGE < total_page){
       	//   CURPAGE++;
           //}
           //if(total_page == CURPAGE){
       	//   $('.nextpagecl').hide();
            //}
           //if(CURPAGE > 1){
       	//   $('.lastpagecl').show();
           //}
       	 CURPAGE = CURPAGE + 1;
       	 doconsole_price(CURPAGE);
       }else{
       	 if(CURPAGE > 1){
         	   CURPAGE--;
         	   doconsole_price(CURPAGE);
             }else{
               $('#msgprenextstore').text('已经是第一页');
               setTimeout(function(){$('#msgprenextstore').text('')},1500);
               return;
              }
             //if(1 == CURPAGE){
         	  //  $('.lastpagecl').hide();
             // }
             //if(total_page > CURPAGE){
         	  // $('.nextpagecl').show();
             //}
       }
       //var end = CURPAGE*PERPAGE_NUM;
       //var start = (CURPAGE-1)*PERPAGE_NUM;
       /*
       $('.lisinglestore').each(function(index,objj){
            var ss = index + 1;
            if(ss >= start && ss < end){
                 $(objj).show();
             }else{
           	  $(objj).hide();
               }
         }); 
       */
    }
    