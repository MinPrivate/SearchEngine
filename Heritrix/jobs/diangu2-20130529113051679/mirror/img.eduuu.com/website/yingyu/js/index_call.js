// JavaScript Document
//焦点图
Focus('.focusBox','.focusPic','.focusTxt','.focusNum','on');
//下拉菜单
dropDown('.bcSelect','bcSelectOn');
//编辑推荐
dropDown('.on1','ppNavOn');
//学而思名师
tabs('.tabTitMs','.tabConMs','onMs');
//精选专区培优学而思服务中心
//滑动
tabs('.jxTit','.jxCon','jxOn');
//点击
tabsC('.changeTit','.changeCon','changeOn');
//关闭
jQuery(function(){
	jQuery('.pyTel').click(function(){
		jQuery(this).parents('.jxPy').addClass('jxPyOn');
	});
	jQuery('.jxClose').click(function(){
		jQuery(this).parents('.jxPy').removeClass('jxPyOn');
	});
});
//课件资料
$(function(){
$(".zlMenu dd").hover(
function(){
	$(this).addClass("on");
},function(){
	$(this).removeClass("on");
})
});
//返回顶部
$('body').append("<p id='back-to-top'>返回顶部</p>");
$("#back-to-top").hide();
$(function(){
	$(window).scroll(function(){
		if ($(window).scrollTop()>500){
		$("#back-to-top").fadeIn();
		}
		else
		{
		$("#back-to-top").fadeOut();
		}
	});
	$("#back-to-top").click(function(){
		$('body,html').animate({scrollTop:0},100);
		return false;
	});
});
