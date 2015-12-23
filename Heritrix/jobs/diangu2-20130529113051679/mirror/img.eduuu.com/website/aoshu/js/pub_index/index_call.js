// JavaScript Document
//焦点图
Focus('.focusBox','.focusPic','.focusTxt','.focusNum','on');
//首屏滑块1
tabs('.tabTit1','.tabCon1','on1');
tabs('.tabTit2','.tabCon2','on2');

//服务中心滑块
tabs('.tabTitSer','.tabConSer','onSer');

//杯赛竞赛
changeColor('.glassZt','onZt');
//下拉菜单
dropDown('.bcSelect','bcSelectOn');
//品牌专区
dropDown('.on1','ppNavOn');
//精选专区培优学而思服务中心
//滑动
tabs('.jxTit','.jxCon','jxOn');
//点击
tabsC('.changeTit','.changeCon','changeOn');
//学而思名师
tabs('.tabTitMs','.tabConMs','onMs');

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