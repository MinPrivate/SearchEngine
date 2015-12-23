// JavaScript Document
//����ͼ
Focus('.focusBox','.focusPic','.focusTxt','.focusNum','on');
//�����˵�
dropDown('.bcSelect','bcSelectOn');
//ר�⡢�ռ䡢��̸����
tabs('.ztTit','.ztCon','ztOn');
//����һ��Ҫ������
function month(tabTit,tabCon,on){
	var _on=$(tabTit).find('.'+on);
	var _i=$(tabTit).children('dd').index(_on[0]);
	$(tabCon).each(function(){
		$(this).children().eq(_i).show();
	});
	$(tabTit).children('dd').hover(function(){
		$(this).addClass(on).siblings().removeClass(on);
		var index = $(tabTit).children('dd').index(this);
		$(tabCon).children().eq(index).show().siblings().hide();
	});	
}
month('.monthTit','.monthCon','m1_0');
//У���绰
tabs('.jxTit','.jxCon','jxOn');
//���
tabsC('.changeTit','.changeCon','changeOn');
//�رհ�ť
jQuery(function(){
	jQuery('.pyTel').click(function(){
		jQuery(this).parents('.jxPy').addClass('jxPyOn');
	});
	jQuery('.jxClose').click(function(){
		jQuery(this).parents('.jxPy').removeClass('jxPyOn');
	});
});
//ѧ��˼��ʦ
tabs('.tabTitMs','.tabConMs','onMs');
//Ʒ��ר��
dropDown('.on1','ppNavOn');
//ԺУ�⻬��
var lastTag = 'schlist_div';
tabsC_D('.yxkTit','.yxkCon','yxkOn');
//�߿�ԺУ���ǩ���ε��
function tabsC_D(tabTit,tabCon,on){
	var _on=$(tabTit).find('.'+on);
	var _i=$(tabTit).children().index(_on[0]);
	$(tabCon).each(function(){
		$(this).children().eq(_i).show();
	});
	$(tabTit).children().click(function(){
		if($(this).attr('id') == lastTag){
			var url = "http://college.gaokao.com/"+$(this).attr('id');
			$('#newWindows').attr('action',url.substr(0,url.length-4)+'/');
			$('#newWindows').submit();
		}else{
			$(this).addClass(on).siblings().removeClass(on);
			var index = $(tabTit).children().index(this);
			$(tabCon).children().eq(index).show().siblings().hide();
		}
		lastTag = $(this).attr('id');
	});	
}
//���ض���
$('body').append("<p id='back-to-top'>���ض���</p>");
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
		$(this).animate({bottom:400,opacity:0},300);
		$('body,html').animate({scrollTop:0},300,function(){$("#back-to-top").css('bottom',109);$("#back-to-top").animate({opacity:100})});
		return false;
	});
});

//�´��ڴ�
function gotourl(type,place){

var p1='',p2='',p3='',p4='',p5='';

switch(type)
{
//��У������
case 'schpoint':
	if($("#stuarea_"+place).val()!=''){
		p1 = '/a'+$("#stuarea_"+place).val();
	}
	if($("#stusub_"+place).val()!=''){
		p2 = '/s'+$("#stusub_"+place).val();
	}
	if($("#schid_"+place).val()!=''){
		p3 = '/c'+$("#schid_"+place).val();
	}
	if($("#scharea_"+place).val()!=''){
		p4 = '/b'+$("#scharea_"+place).val();
	}
	break;
//רҵ������
case 'spepoint':
	if($("#stuarea_"+place).val()!=''){
		p1 = '/a'+$("#stuarea_"+place).val();
	}
	if($("#stusub_"+place).val()!=''){
		p2 = '/s'+$("#stusub_"+place).val();
	}
	if($("#year_"+place).val()!=''){
		p3 = '/y'+$("#year_"+place).val();
	}
	if($("#spename_"+place).val()!='' && $("#spename_"+place).val()!='������רҵ����'){
		p4 = '/n'+$("#spename_"+place).val();
	}
	if($("#schname_"+place).val()!='' && $("#schname_"+place).val()!='������ԺУ����'){
		p5 = '/o'+$("#schname_"+place).val();
	}
	break;
//����������
case 'areapoint':
	if($("#stuarea_"+place).val()!=''){
		p1 = '/a'+$("#stuarea_"+place).val();
	}
	if($("#stusub_"+place).val()!=''){
		p2 = '/s'+$("#stusub_"+place).val();
	}
	if($("#year_"+place).val()!=''){
		p3 = '/y'+$("#year_"+place).val();
	}
	break;
//��У����
case 'schlist':
	if($("#scharea_"+place).val()!=''){
		p1 = '/a'+$("#scharea_"+place).val();
	}
	if($("#schcat_"+place).val()!=''){
		p2 = '/c'+$("#schcat_"+place).val();
	}
	if($("#schsty_"+place).val()!=''){
		p3 = '/s'+$("#schsty_"+place).val();
	}
	if($("#schname_"+place).val()!='' && $("#schname_"+place).val()!='������ԺУ����'){
		p4 = '/n'+$("#schname_"+place).val();
	}
	break;
//רҵ����
case 'spelist':
	if($("#spebig_"+place).val()!=''){
		p1 = '/b'+$("#spebig_"+place).val();
	}
	if($("#spesma_"+place).val()!=''){
		p2 = '/s'+$("#spesma_"+place).val();
	}
	if($("#spename_"+place).val()!='' && $("#spename_"+place).val()!='������רҵ����'){
		p3 = '/n'+$("#spename_"+place).val();
	}
	break;
}

var url = "http://college.gaokao.com/"+type+p1+p2+p3+p4+p5;
$('#newWindows').attr('action',url);
$('#newWindows').submit();
}


$(document).ready(function(){

//ȡ��select��������
$.getJSON("http://college.gaokao.com/json/area?callback=?",function(data){ 
	$("#stuarea_l1").html(data.json);
	$("#scharea_l1").html(data.json);
	$("#stuarea_l2").html(data.json);
	$("#stuarea_l3").html(data.json);
	$("#scharea_b1").html(data.json);
	$("#stuarea_b3").html(data.json);
	$("#scharea_b3").html(data.json);
	$("#stuarea_b4").html(data.json);
	$("#stuarea_b5").html(data.json);
});
$.getJSON("http://college.gaokao.com/json/subject?callback=?",function(data){ 
	$("#stusub_l1").html(data.json);
	$("#stusub_l2").html(data.json);
	$("#stusub_l3").html(data.json);
	$("#stusub_b3").html(data.json);
	$("#stusub_b4").html(data.json);
	$("#stusub_b5").html(data.json);
});
$.getJSON("http://college.gaokao.com/json/category?callback=?",function(data){ 
	$("#schcat_b1").html(data.json);
});
$.getJSON("http://college.gaokao.com/json/style?callback=?",function(data){ 
	$("#schsty_b1").html(data.json);
});
$.getJSON("http://college.gaokao.com/json/speciality?callback=?",function(data){ 
	$("#spebig_b2").html(data.json);
});


//���ݵ���ѡ��ѧУ����
$("#scharea_l1").change(function(){
	$.getJSON("http://college.gaokao.com/json/school?aid="+$("#scharea_l1").val()+"&callback=?",function(data){ 
		$("#schid_l1").html(data.json);
	});
});
$("#scharea_b3").change(function(){
	$.getJSON("http://college.gaokao.com/json/school?aid="+$("#scharea_b3").val()+"&callback=?",function(data){ 
		$("#schid_b3").html(data.json);
	});
});

//����רҵ����ѡ��רҵС��
$("#spebig_b2").change(function(){
	$.getJSON("http://college.gaokao.com/json/speciality?pid="+$("#spebig_b2").val()+"&callback=?",function(data){ 
		$("#spesma_b2").html(data.json);
	});
});

//���������
$("#schpoint_l1").click(function(){
	gotourl('schpoint','l1');
});
$("#spepoint_l2").click(function(){
	gotourl('spepoint','l2');
});
$("#areapoint_l3").click(function(){
	gotourl('areapoint','l3');
});
$("#schlist_b1").click(function(){
	gotourl('schlist','b1');
});
$("#spelist_b2").click(function(){
	gotourl('spelist','b2');
});
$("#schpoint_b3").click(function(){
	gotourl('schpoint','b3');
});
$("#spepoint_b4").click(function(){
	gotourl('spepoint','b4');
});
$("#areapoint_b5").click(function(){
	gotourl('areapoint','b5');
});
//�س��¼� �����
var lastClick = '';
var flagClick = 0;
$("body").click(function(){
	flagClick++;
});
$("#click_b1").click(function(){
	lastClick = 'b1';
	flagClick = -1;
});
$("#click_b2").click(function(){
	lastClick = 'b2';
	flagClick = -1;
});
$("#click_b3").click(function(){
	lastClick = 'b3';
	flagClick = -1;
});
$("#click_b4").click(function(){
	lastClick = 'b4';
	flagClick = -1;
});
$("#click_b5").click(function(){
	lastClick = 'b5';
	flagClick = -1;
});
$("#click_l1").click(function(){
	lastClick = 'l1';
	flagClick = -1;
});
$("#click_l2").click(function(){
	lastClick = 'l2';
	flagClick = -1;
});
$("#click_l3").click(function(){
	lastClick = 'l3';
	flagClick = -1;
});

//�س��¼� �س�����
$('body').bind('keydown', function (e) {
	var key = e.which;
	if(key==13 && flagClick<1){
		switch(lastClick){
			case 'b1':
				gotourl('schlist','b1');
				return false;
				break;
			case 'b2':
				gotourl('spelist','b2');
				return false;
				break;
			case 'b3':
				gotourl('schpoint','b3');
				return false;
				break;
			case 'b4':
				gotourl('spepoint','b4');
				return false;
				break;
			case 'b5':
				gotourl('areapoint','b5');
				return false;
				break;
			case 'l1':
				gotourl('schpoint','l1');
				return false;
				break;
			case 'l2':
				gotourl('spepoint','l2');
				return false;
				break;
			case 'l3':
				gotourl('areapoint','l3');
				return false;
				break;
			default:
				break;
		}
	}
});

});