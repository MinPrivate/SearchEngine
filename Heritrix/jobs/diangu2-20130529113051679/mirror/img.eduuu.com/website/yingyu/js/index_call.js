// JavaScript Document
//����ͼ
Focus('.focusBox','.focusPic','.focusTxt','.focusNum','on');
//�����˵�
dropDown('.bcSelect','bcSelectOn');
//�༭�Ƽ�
dropDown('.on1','ppNavOn');
//ѧ��˼��ʦ
tabs('.tabTitMs','.tabConMs','onMs');
//��ѡר������ѧ��˼��������
//����
tabs('.jxTit','.jxCon','jxOn');
//���
tabsC('.changeTit','.changeCon','changeOn');
//�ر�
jQuery(function(){
	jQuery('.pyTel').click(function(){
		jQuery(this).parents('.jxPy').addClass('jxPyOn');
	});
	jQuery('.jxClose').click(function(){
		jQuery(this).parents('.jxPy').removeClass('jxPyOn');
	});
});
//�μ�����
$(function(){
$(".zlMenu dd").hover(
function(){
	$(this).addClass("on");
},function(){
	$(this).removeClass("on");
})
});
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
		$('body,html').animate({scrollTop:0},100);
		return false;
	});
});
