// JavaScript Document
//��ʦ����ͼƬ
marqueeBox('.v_show','.v_content','.v_content_list','.next','.prev',4);
//���߿�������
tabs('.tabTit','.tabCon','on');
//�Ҳ໬��
tabs('.tabTit2','.tabCon2','on2');
//�Ҳ�������
$(function(){
	/*$('.slideAd h2').hoverDelay({
		hoverDuring: 300,
		outDuring: 300,
		hoverEvent: function(){
			$(this).parent().addClass('slideAdOn');
			$(this).siblings().slideDown();
			$(this).parent().siblings().removeClass('slideAdOn');
			$(this).parent().siblings('.slideAd').find('.info').slideUp();
		}
	});*/
	$('.slideAd .info').show();
	$('.slideAd i').css('background','none');
});
//����ԭ������
tabs('.hotTit','.hotCon','hotOn');
//���ض���
/*$('body').append("<p id='back-to-top'>���ض���</p>");
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
});*/
//�����ȫ���߿���Ѷ����
tabs('.zxTit','.zxCon','zxOn');
//�߿�ԺУ��
//�س��¼� �����id
var lastclick = '';
function gotourl(type){
	if(type!=''){
		lastclick = type;
	}

	switch(lastclick){
		case 'schpli':
			schpselect();
			break;
		case 'spepli':
			spepselect();
			break;
	}
}

//�´��ڴ�
function CreateA(url){ 
	$('#newWindows').attr('action',url);
	$('#newWindows').submit();
}

//������ȡ�ø�У
function getschool(){
	$.getJSON("http://college.gaokao.com/json/school?aid="+$('#spscharea').val()+"&callback=?",function(data){ 
		$("#spschid").html(data.json);
	});
}

//������У������
function schpselect(){
	var stuarea = $("#spstuarea").val();
	var subject = $("#spsubject").val();
	var schid = $("#spschid").val();
	var scharea = $("#spscharea").val();

	if(stuarea!=''){
		stuarea = '/a'+stuarea;
	}
	if(subject!=''){
		subject = '/s'+subject;
	}
	if(schid!=''){
		schid = '/c'+schid;
	}
	if(scharea!=''){
		scharea = '/b'+scharea;
	}
	var url = "http://college.gaokao.com/schpoint"+stuarea+subject+schid+scharea+"/";
	CreateA(url);
}

//����רҵ������
function spepselect(){
	if($("#spepname").val() == "������רҵ����"){
		var spename = "";
	}else{
		var spename = $("#spepname").val();
	}
	var stuarea = $("#spestuarea").val();
	var subject = $("#spesubject").val();
	var year = $("#speyear").val();

	if(stuarea!=''){
		stuarea = '/a'+stuarea;
	}
	if(subject!=''){
		subject = '/s'+subject;
	}
	if(year!=''){
		year = '/y'+year;
	}
	if(spename!=''){
		spename = '/n'+spename;
	}
	var url = "http://college.gaokao.com/spepoint"+stuarea+subject+year+spename+"/";
	CreateA(url);
}
//��У������
$.getJSON("http://college.gaokao.com/json/area?str=1&callback=?",function(data){ 
	$("#spstuarea").html(data.json);
});
$.getJSON("http://college.gaokao.com/json/area?str=2&callback=?",function(data){ 
	$("#spscharea").html(data.json);
});
$.getJSON("http://college.gaokao.com/json/subject?callback=?",function(data){ 
	$("#spsubject").html(data.json);
});
$('#spscharea').change(function(){
	getschool();
});
//רҵ������
$.getJSON("http://college.gaokao.com/json/area?str=1&callback=?",function(data){ 
	$("#spestuarea").html(data.json);
});
$.getJSON("http://college.gaokao.com/json/subject?callback=?",function(data){ 
	$("#spesubject").html(data.json);
});

//������У������
$("#schpoint").click(function(){
	_gaq.push(['_trackEvent', 'College', 'search', 'schpli']);
	gotourl('schpli');
});

//����רҵ������
$("#spepselect").click(function(){
	_gaq.push(['_trackEvent', 'College', 'search', 'spepli']);
	gotourl('spepli');
});
//��Ƶ
$(function(){
	$(".roll-wrap").each(function(){
		$(this).eq(0).data("licur", 1);
		$(this).eq(1).data("licur", 1);
	})
	var licur = 0;
	var n=1;
	var i=n-1
	$(".roll-next").each(function(){
		$(this).click(function(){
			var licur = $(this).parent().data("licur");
			var $v_content = $(this).siblings(".rollbox");
			var $v_show = $v_content.children("ul");
			var v_mar=parseInt($(".rollbox ul li").css("margin-left"))+parseInt($(".rollbox ul li").css("margin-right"));
			var v_width = $v_show.children("li").width()+v_mar;
			var limove = $v_show.children("li").length;
			$(this).siblings(".roll-prev").removeClass("roll-prev-end").addClass("roll-prev-default");
			if (licur != limove - i){
					if (licur == limove - n){
						$(this).removeClass("roll-next-default").addClass("roll-next-end");
					}else{
						$(this).removeClass("roll-next-end").addClass("roll-next-default"); 
					}
					$v_show.animate({ left: '-=' + v_width }, "slow");
					$(this).parent().data("licur", ++licur);  
			}
		});
	})
	$(".roll-prev").each(function(){
		$(this).click(function(){
			var licur = $(this).parent().data("licur");
			var $v_content = $(this).siblings(".rollbox");
			var $v_show = $v_content.children("ul");
			var v_mar=parseInt($(".rollbox ul li").css("margin-left"))+parseInt($(".rollbox ul li").css("margin-right"));
			var v_width = $v_show.children("li").width()+v_mar;
			var limove = $v_show.children("li").length;
			$(this).siblings(".roll-next").removeClass("roll-next-end").addClass("roll-next-default");
			if (!$v_show.is(":animated")) {
				if (licur != 1) {
					if (licur == 2){
						$(this).removeClass("roll-prev-default").addClass("roll-prev-end");
					} else {
					$(this).removeClass("roll-prev-end").addClass("roll-prev-default");
					}
					$v_show.animate({ left: '+=' + v_width }, "slow");
					$(this).parent().data("licur", --licur);
				}
			}
		});
	})
})
