// JavaScript Document
$(function(){
	var $listLi = $('.text_list1 li');
	$listLi.each(function(i){
		if(((i+1)%5==0)){
			$(this).addClass('listLi')
		}
	});
	$(".control").bind("click",function(){
		var $content = $(this).parent().parent().find(".intro");
		var $titleIcon = $(this);
		if($content.is(":visible")){
			$content.fadeOut();
			$titleIcon.removeClass("controlIcon");
			$titleIcon.text('标题形式');
			$listLi.each(function(i){
				if(((i+1)%5==0)){
					$(this).addClass('listLi')
				}
			});
		}else{
			$content.fadeIn();
			$titleIcon.addClass("controlIcon");	
			$titleIcon.text('标题描述形式');
			$listLi.each(function(i){
				if(((i+1)%5==0)){
					$(this).removeClass('listLi')
				}
			});
		}
	});
});