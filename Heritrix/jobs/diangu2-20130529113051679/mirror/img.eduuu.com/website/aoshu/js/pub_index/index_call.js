// JavaScript Document
//����ͼ
Focus('.focusBox','.focusPic','.focusTxt','.focusNum','on');
//��������1
tabs('.tabTit1','.tabCon1','on1');
tabs('.tabTit2','.tabCon2','on2');

//�������Ļ���
tabs('.tabTitSer','.tabConSer','onSer');

//��������
changeColor('.glassZt','onZt');
//�����˵�
dropDown('.bcSelect','bcSelectOn');
//Ʒ��ר��
dropDown('.on1','ppNavOn');
//��ѡר������ѧ��˼��������
//����
tabs('.jxTit','.jxCon','jxOn');
//���
tabsC('.changeTit','.changeCon','changeOn');
//ѧ��˼��ʦ
tabs('.tabTitMs','.tabConMs','onMs');

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