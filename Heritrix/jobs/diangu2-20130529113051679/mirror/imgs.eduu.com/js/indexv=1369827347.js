// 大首页和子页面相关的js函数
// Main jQuery for eduu.com
// Author Lihaihong,20110319

//hover 延时方法
(function($){
    $.fn.hoverDelay = function(options){
       var defaults = {
            hoverDuring: 200,
            outDuring: 200,
            hoverEvent: function(){
                $.noop();
            },
            outEvent: function(){
                $.noop();
            }
        };
        var sets = $.extend(defaults,options || {});
        var hoverTimer, outTimer;
        return $(this).each(function(){
            $(this).hover(function(){
                clearTimeout(outTimer);
                hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
            },function(){
                clearTimeout(hoverTimer);
                outTimer = setTimeout(sets.outEvent, sets.outDuring);
            });
        });
    }
})(jQuery);

//日志广场选项卡
$(function(){
    $(".tab-tit li").each(function(){
        var H=this;
        $(H).hoverDelay({
            hoverEvent: function(){
                $(H).children("a").addClass("selected").end().siblings().children("a").removeClass("selected");
                var $tabTit=$(H).parents(".tab-tit");
                var index=$tabTit.find("li").index(H);
                $tabTit.siblings(".tab-con").children().eq(index).show().siblings().hide();
            }
        });
    })
})

//最后一个无右间距
$(function(){
    $(".pic-tit li:last").addClass("noMar");
})

//活动专区最后一个无下划线
$(function(){
    $(".actlist dl").each(function(){
        $(this).find("dd:last").css("background","none");
    })
})

//输入关键词时鼠标焦点事件
$(function(){
    $(".focus").focus(function(){
        if($(this).val()==this.defaultValue){
            $(this).val("");
        }
    })
    $(".focus").blur(function(){
        if($(this).val()==""){
            $(this).val(this.defaultValue);
        }
    })
})

//首页图片滚动第一个和最后一个时按钮变灰
$(function(){
    $(".roll-wrap:eq(0)").data("licur", 1);
    $(".roll-wrap:eq(1)").data("licur", 1);
    var licur = 0;
    $(".roll-next").each(function() {
        $(this).click(function() {
            var licur = $(this).parent().data("licur");
            var $v_content = $(this).siblings(".rollbox");
            var $v_show = $v_content.children("ul");
            var v_width = $v_show.children("li").width()+30;
            var limove = $v_show.children("li").length;
            $(this).siblings(".roll-prev").removeClass("roll-prev-end").addClass("roll-prev-default");
            if (licur != limove - 4) {
                if (licur == limove - 5){
                    $(this).removeClass("roll-next-default").addClass("roll-next-end");
                }else{
                    $(this).removeClass("roll-next-end").addClass("roll-next-default");
                }
                $v_show.animate({ left: '-=' + v_width }, "slow");
                $(this).parent().data("licur", ++licur);
            }
        });
    })
    $(".roll-prev").each(function() {
        $(this).click(function() {
            var licur = $(this).parent().data("licur");
            var $v_content = $(this).siblings(".rollbox");
            var $v_show = $v_content.children("ul");
            var v_width = $v_show.children("li").width()+30;
            var limove = $v_show.children("li").length;
            $(this).siblings(".roll-next").removeClass("roll-next-end").addClass("roll-next-default");
            if (!$v_show.is(":animated")) {
                if (licur != 1) {
                    if (licur == 2) {
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

//首页-刚刚发生的动态
$(function(){
    var toup=false;
    var margintop=0;
    if(!toup){
        margintop=$(".dynamic ul").height()-$(".dynamic").height();
        $(".dynamic ul").css("margin-top","-"+margintop+"px");
    }
    var $this = $(".dynamic");
    var scrollTimer;
    $this.hover(function(){
          clearInterval(scrollTimer);
     },function(){
       scrollTimer = setInterval(function(){
         scrollNews($this,toup,margintop);
       }, 3000 );
    }).trigger("mouseleave");
});
function scrollNews(obj,toup,margintop){
    var $self=obj.find("ul"),$li="",lineHeight="";
    if(toup){
       $li=$self.find("li:first");
       lineHeight = $li.height()+parseInt($li.css("padding-top"))+parseInt($li.css("padding-bottom")); 
       $self.animate({ "marginTop" : -lineHeight +"px"}, 600 , function(){
             $self.css({marginTop:0}).find("li:first").appendTo($self); 
       })
   }else{
      $li=$self.find("li:last");
      lineHeight = $li.height()+parseInt($li.css("padding-top"))+parseInt($li.css("padding-bottom")); //获取行高
       $self.animate({ "marginTop" : (lineHeight-margintop) +"px"}, 600 , function(){
             $self.css({marginTop:"-"+margintop+"px"}).find("li:last").prependTo($self); 
       })
   }
}

//用于大首页关注按钮的切换
 function indexFollow(O,A,U){ 
    art.dialog({
        id: 'follow',
        title:'提示',
        content: '您确定要关注“'+U+'”吗？',
        button: [{
            name: '确定',
            callback: function () {
                $.getJSON(ecfg.url+"jsonp/addFollow?uid="+A+"&callback=?", function(data){
                    if (data=='1'){
                        $(O).replaceWith("<span class=\"ygz\" >已关注</span>");
                    }else if(data=='-1'){
                        FDtip("提示","请先登录");
                    }else if(data=='-2'){
                        FDtip("提示","由于用户设置，暂不能进行关注");
                    }else if(data=='-3'){
                        FDtip("提示","你已关注对方了");
                        $(O).replaceWith("<span class=\"ygz\" >已关注</span>");
                    }else{
                        FDtip("提示","关注失败");
                    }
                });
            },
            focus: true
        },{name: '取消'}
        ]
    });
}
//二级页面-热门日志最后一个无下划线20100416
$(function(){
    $(".log-box dl dd:last").css("background","none");
})

//二级页面- 洗牌20120416
$(function(){
    $(".luck-btn").click(function(){ 
        if(checkLogin()!=true){
            return;
        }

        var rnums=Number($("#rnums").html());
        if(rnums<1){
            art.dialog({ title: '提示', content: '今天的免费抽奖机会已经用完了，明天再来吧！',time:3 });
            return false;
        }

        $(".luck-popupbg").addClass("luck-popup").show();
        var T=$(this).siblings("ul").children("li");
        T.addClass("luckIcon5").removeClass("luckIconClick luckIconbg");

        T.hover(function(){
            $(this).removeClass("luckIcon").addClass("luckIconHover");
        },function(){
            $(this).removeClass("luckIconHover").addClass("luckIcon");
        }).click(function(){
            $.get(ecfg.homeurl+'reward/gosward/?r='+Math.random()+'&lid='+$(this).attr('id'),function(data){
                $("#sicon").html(data);
                setTimeout(function(){
                    art.dialog({
                        title: '恭喜获奖',
                        content: "恭喜获奖，去“<a href='"+ecfg.homeurl+"reward/log' class='blue'>我的奖品</a>”页面查看奖品吧！",
                        icon: 'succeed',
                        button:[{name: '确定',focus: true}]
                    })
                },1500);
                if(rnums>1){
                    $("#rnums").html(rnums-1);
                }else{
                    $("#rnums").html(0);
                }
            });
        });
        setTimeout(function(){
            $(".luck-popup").hide();
        },3000)
    })
})

//检测登陆 跳转
function checkLogin(url){
    if(ecfg.reguid==0){
        var url=encodeURIComponent(ecfg.homeurl+"reward");
        var msg=encodeURIComponent("您需要登录才能继续操作");
        FD.ut.goUrl(ecfg.regurl+'login?url='+url+'&&msg='+msg,1);
        return;
    }
    if(url){
        FD.ut.goUrl(url);
        return;
    }

    return true;
}