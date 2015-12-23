$(function(){
	

	function clicktabs(tit_id,box_id,cur){
		var g_tags=$(tit_id),
			g_conts=$(box_id),
			g_current=cur;
		g_tags.click(function(){
			var g_index=g_tags.index(this);
			$(this).addClass(g_current).siblings().removeClass(g_current);
			g_conts.eq(g_index).show().siblings().hide();
		});
	}

	clicktabs("#gameCategory li","#labels_con>div","current");
	clicktabs("#labels_id li","#labels_con>div","current");

	$("#sible").hover(
	
		function(){
			$(this).addClass("hover");
		},
		function(){
			$(this).removeClass("hover");
		}
	);
	

	/*default input font*/
	var onfocuid=document.getElementById("search_content");
	onfocuid.onfocus=function(){
		var txt_value=this.value;
		if(txt_value==this.defaultValue){this.value='';}
	}
	onfocuid.onblur=function(){
		var txt_value=this.value;
		if(txt_value==''){this.value=this.defaultValue}
	}
	/*ranking js*/
	$("#rank_ids h2").click(function(){
			var g_index=$("#rank_ids h2").index(this),
				g_id=$("#rank_ids"),
				g_cur='rank_cur',
				g_conts=$("#rank_con>ul");
			g_index==1?g_id.addClass(g_cur):g_id.removeClass(g_cur);
			g_conts.eq(g_index).show().siblings().hide();
	});
	
	//tips
	var rankid=$("#rank_con li").not($(".tops"));
	rankid.hover(function(){
			item_tips();
			var hanle=$("#item_tips"),
				that=$(this);
			hanle.find("h5").text(that.find('h5').text());
			hanle.find("img").attr("src",that.attr("a"));
			hanle.find("i i").attr("style",'width:'+that.attr("b"));
			hanle.find("em").text(that.attr("c"));
			var p = that,
				offset = p.offset();
			$("#item_tips").css({left:offset.left+215,top:offset.top-170});
		
	},

		function(){
			
			$("#item_tips").hide();
		
		}
	
	
	);
	



	
	$("#bottom_id a").hover(function(){
			item_tips();
			var hanle=$("#item_tips"),
				that=$(this);
			hanle.find("h5").text(that.text());
			hanle.find("img").attr("src",that.attr("a"));
			hanle.find("i i").attr("style",'width:'+that.attr("b"));
			hanle.find("em").text(that.attr("c"));
			var p = that,
				offset = p.offset();
			$("#item_tips").css({left:offset.left+105,top:offset.top-168});
		
	},

		function(){
			
			$("#item_tips").hide();
		
		}
	
	
	);
	
	function item_tips(){
		if(!$("#item_tips").text()){
		$("body").append('<div id="item_tips"><img src="temp/20120222104353295329.jpg"><h5>中国地图拼图</h5><p>评分：<i class="i_math"><i style="width:100%"></i></i>人气：<em>2343242</em></p></div>');
		}else{
			$("#item_tips").show();
		}
	}
	

	
});

//收藏本页
$("#play_fav,#position_fav").live('click',function(){
		var url = window.location.href,
			sitename = document.title;
			var vctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL'; 
			if (document.all){ 
			  window.external.addFavorite(url,sitename); 
			  }else if (window.sidebar){ 
			 window.sidebar.addPanel(sitename,url, ""); 
		   }else { 
				 alert('您可以尝试通过快捷键' + vctrl + ' + D 加入到收藏夹!'); 
		   } 
});