// JavaScript Document
document.writeln("<link href='http://img.eduuu.com/aoshu/css/public_topnav.css?2012-3-24' type='text/css' rel='stylesheet' />");
document.writeln("<div id='eduuTopNav' class='topnavI'>");
document.writeln("	<div class='wrapper'>");
document.writeln("        <div class='topNavL'>");
document.writeln("        	<ul>");
document.writeln("               <li id='eduuTopIndex'><a href='http://www.aoshu.com/'>e度教育网</a></li>");
document.writeln("               <li class='noPa' style='_width:73px;'>");
document.writeln("                   <dl class='tarBox otherWebsite' xd='navOn'>");
document.writeln("                        <dt>旗下网站<i></i></dt>");
document.writeln("                        <dd>");
document.writeln("                        	<a href='http://www.yuer.com/'><s class='w1'></s>育儿网</a><a href='http://www.youjiao.com/'><s class='w2'></s>幼教网</a><a href='http://www.aoshu.com/'><s class='w3'></s>奥数网</a><a href='http://www.zhongkao.com/'><s class='w4'></s>中考网</a><a href='http://www.gaokao.com/'><s class='w5'></s>高考网</a><a href='http://www.liuxue.com/'><s class='w6'></s>留学网</a><a href='http://www.zuowen.com/'><s class='w7'></s>作文网</a><a href='http://www.yingyu.com/'><s class='w8'></s>英语网</a><a href='http://v.eduuu.com/'><s class='w9'></s>e度视频</a>");
document.writeln("                        </dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");
document.writeln("                <li><a href='http://bbs.eduu.com/'>论坛</a></li>");
document.writeln("                <li><a href='http://home.eduu.com/'>空间</a></li>");
document.writeln("                <li class='noPa' style='_width:49px;'>");
document.writeln("                   <dl class='tarBox apply' xd='navOn'>");
document.writeln("                        <dt>应用<i></i></dt>");
document.writeln("                        <dd>");
document.writeln("                            <a href='http://www.aoshu.com/tiku/'><s class='w10'></s>题库</a><a href='http://zidian.eduu.com/'><s class='w11'></s>字典</a><a href='http://cidian.eduu.com/'><s class='w12'></s>词典</a><a href='http://chengyu.eduu.com/'><s class='w13'></s>成语</a>");
document.writeln("                        </dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");
document.writeln("                <li class='noPa' style='_width:73px;'>");
document.writeln("                   <dl class='tarBox coach' xd='navOn'>");
document.writeln("                        <dt>辅导报班<i></i></dt>");
document.writeln("                        <dd>");
document.writeln("                        	<a href='http://www.speiyou.com/' target='_blank'><s class='w15'></s>学而思培优</a><a href='http://www.jiajiaoban.com/' target='_blank'><s class='w16'></s>智康1对1</a><a href='http://www.xueersi.com/' target='_blank'><s class='w17'></s>学而思网校</a><a href='http://www.mobby.cn/' target='_blank'><s class='w18'></s>摩比思维馆</a>");
document.writeln("                        </dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");
document.writeln("                <li class='navSrh'><form method=get action='http://s.eduu.com/qs' target='_blank'><input type='hidden' id='eduTG' name='tg' value='0' /><input name='wd' id='eduuwd' type=text size='20' class='topInput' onfocus=\"this.value='';this.style.color='#000000';\" onblur=\"if(!this.value){this.value='请输入您要查询的关键字';this.style.color='#BBBBBB';}\" value='请输入您要查询的关键字' /><input name='' type='image' src='http://img.eduuu.com/website/public_images/topmenu/nav_btn_srh.gif' onclick='if(document.getElementById(\"eduuwd\").value==\"请输入您要查询的关键字\"){ document.getElementById(\"eduuwd\").value=\"\"}'/></form></li>");
document.writeln("            </ul>");
document.writeln("        </div>");
document.writeln("        <div class='topNavR' id='eduuLogin'>");
document.writeln("            <ul>");
document.writeln("                <!--未登录状态显示-->");
document.writeln("                <li class='pa'><a href='http://reg.eduu.com/register/'>注册</a></li>");
document.writeln("                <li class='pa'><span class='topLogin' style='display:none;'><a href='http://reg.eduu.com/login/' class='lg'>登录</a></span>");
document.writeln("                     <dl class='tarBox New_logbox' xd='navOn'>");
document.writeln("                          <dt style=' _width:24px;'>登录<i></i></dt>");
document.writeln("                          <dd class='New_topLogin'>");
document.writeln("                              <p id='tiplogin'>e度通行证用户可直接登录</p>");
document.writeln("                              <p><input type='text' autocomplete=\"off\" class='topUserName onIput' value='邮箱/用户名'></p>");
document.writeln("                              <p><input type='text' id='showpassword' class='topPassWord onIput' value='请输入密码'><input type='password' id='password' class='topPassWord' style='display:none'></p>");
document.writeln("                              <p>");
document.writeln("                                  <label class='left'><input type='checkbox' id='islogin' value='1'>自动登录</label>");
document.writeln("                                  <span class='right'><a href='http://reg.eduu.com/getpwd' target='_blank'>忘记密码？</a></span>");
document.writeln("                              </p>");
document.writeln("                              <p><button type='button' class='topMenuBtn' onclick='subLogin()'><!--登录--></button></p>");
document.writeln("                          </dd>");
document.writeln("                     </dl>");
document.writeln("                </li>");
document.writeln("                <li>");
document.writeln("                    <a class='top_q_Login' href='#' onclick=\"javascript:apiLogin(4,'http://reg.eduu.com/');_gaq.push(['_trackEvent' ,'login', 'qq', 'step-1']);\"></a>");
document.writeln("                    <a class='top_w_Login' href='#' onclick=\"javascript:apiLogin(1,'http://reg.eduu.com/');_gaq.push(['_trackEvent' ,'login', 'sina', 'step-1']);\"></a>");
document.writeln("                </li>");
document.writeln("            </ul>");
document.writeln("        </div>");
document.writeln("        <div class='topNavR' style='display:none;'>");
document.writeln("        	<ul>");
document.writeln("            	<li class='noPa' style='_width:69px;'>");
document.writeln("                   <dl class='tarBox launch' xd='launchOn'>");
document.writeln("                        <dt>发布<i></i></dt>");
document.writeln("                        <dd>");
document.writeln("                        	<a href='http://my.eduu.com/blog/add/'>写日记</a><a href='http://my.eduu.com/album/upload/'>传照片</a><a href='http://bbs.eduu.com/home.php?mod=space&do=thread&view=me'>发帖子</a><a href='http://my.eduu.com/tougao/add/'>投作文</a>");
document.writeln("                            <iframe width='110' height='92' style='position:absolute; right:0px; top:28px; z-index:-1; filter:alpha(opacity=0); background:transparent;border:0pt none;' frameborder='0'></iframe>");
document.writeln("                        </dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");
document.writeln("                <li class='noPa' style='_width:69px;'>");
document.writeln("                   <dl class='tarBox set' xd='setOn'>");
document.writeln("                        <dt>设置<i></i></dt>");
document.writeln("                        <dd>");
document.writeln("                        	<a href='http://my.eduu.com/profile/index/'>个人资料</a><a href='http://my.eduu.com/account/passwd/'>账号安全</a><a href='http://my.eduu.com/help/index/'>空间设置</a><a href='http://my.eduu.com/bbs/usersign/'>论坛设置</a><a href='http://reg.eduu.com/logout'>退出</a>");
document.writeln("                            <iframe width='110' height='92' style='position:absolute; left:0px; top:28px; z-index:-1; filter:alpha(opacity=0); background:transparent;border:0pt none;' frameborder='0'></iframe>");
document.writeln("                        </dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");
document.writeln("                <li class='noPa' style='_width:73px;'>");
document.writeln("                    <dl class='tarBox message' xd='messageOn' id='eduuMsg'>");
document.writeln("                        <dt><em>0</em>消息<i></i></dt><!--有消息时em上添加class='hasMes'-->");
document.writeln("                        <dd>");
document.writeln("                            <a href='http://my.eduu.com/msg'>站内信<em></em><a href='http://my.eduu.com/notice/interaction'>互动请求<em></em></a><a href='http://my.eduu.com/notice/friends'>新增粉丝<em></em></a><a href='http://my.eduu.com/notice/system'>系统通知<em></em></a><a href='http://my.eduu.com/'>好友新鲜事<em class='hasOrg'>new!</em></a>");
document.writeln("                            <iframe width='110' height='92' style='position:absolute; left:0px; top:28px; z-index:-1; filter:alpha(opacity=0); background:transparent;border:0pt none;' frameborder='0'></iframe>");
document.writeln("                        </dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");
document.writeln("                <li class='noPa' style='_width:100px;'>");
document.writeln("                    <dl class='tarBox user' xd='userOn' id='m006'>");
document.writeln("                        <dt id='tarUname'><i></i></dt>");
document.writeln("                        <dd>");
document.writeln("                            <div class='userInfo' id='eduuUser'>");
document.writeln("                                <img src='http://atth.eduu.com/avatar/avatar_small.jpg' width='50' height='50' alt='用户名' class='' />");
document.writeln("                                <div>");
document.writeln("                                <p><a href='http://home.eduu.com/' class='level'>小牛妈妈521</a></p><!--等级增加时变换class='levelIcon1-22'-->");
document.writeln("                                <p class='n_gzfs'><a class='rm10 follnum' href='#'><span id='follnum'>121345</span>关注</a><a class='fansnum' href='#'><span id='fansnum'>9999999</span>粉丝</a></p>");
document.writeln("                                </div>");
document.writeln("                            </div>");
document.writeln("                            <div class='userItem'>");
document.writeln("                                <p><a href='http://my.eduu.com/' class='enterHome'>进入个人中心</a></p>");
document.writeln("                                <ul class='n_menubox'>");
document.writeln("                                    <li><a href='http://my.eduu.com/blog'>我的日志</a></li>");
document.writeln("                                    <li><a href='http://my.eduu.com/album'>我的相册</a></li>");
document.writeln("                                    <li>");
document.writeln("                                        <a href='http://my.eduu.com/forum/all'>我的帖子</a>");
document.writeln("                                        <p class='n_gary'><a href='http://my.eduu.com/forum/thread'>我的主题</a><a href='http://my.eduu.com/forum/post'>我的回复</a><a href='http://bbs.eduu.com/home.php?mod=space&do=thread&view=me&type=postcomment'>我的点评</a><a href='http://bbs.eduu.com/home.php?mod=space&do=thread&view=digest'>我的精华</a></p>");
document.writeln("                                    </li>");
document.writeln("                                    <li><a href='http://my.eduu.com/share/listyou'>我的分享</a></li>");
document.writeln("                                    <li><a href='http://my.eduu.com/share/listme'>我的收藏</a></li>");
document.writeln("                                    <li><a href='http://my.eduu.com/tougao'>我的投稿</a></li>");
document.writeln("                                </ul>");
document.writeln("                            </div>");
document.writeln("<iframe width=\"260\" frameborder=\"0\" scrolling=\"no\" height=\"400\" style=\"position:absolute; left:0; top:28px; z-index:-1; filter:alpha(opacity=0); background:transparent;\"></iframe>");
document.writeln("                        </dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");
document.writeln("            </ul>");
document.writeln("        </div>");
document.writeln("    </div>");
document.writeln("</div>");
(function($){
    var _gcc =[{domain:'eduu.com',name:'<i>e</i>度教育网',sid:'0'},{domain:'aoshu.com',name:'奥数网首页',sid:'1'},{domain:'zuowen.com',name:'作文网首页',sid:'98'},{domain:'yingyu.com',name:'英语网首页',sid:'4'},{domain:'gaokao.com',name:'高考网首页',sid:'3'},{domain:'youjiao.com',name:'幼教网首页',sid:'5'},{domain:'liuxue.com',name:'留学网首页',sid:'99'},{domain:'zhongkao.com',name:'中考网首页',sid:'2'},{domain:'jiajiaoban.com',name:'家教网首页',sid:'0'},{domain:'yuer.com',name:'育儿网首页',sid:'0'}],gccHost;

    function getDomain(){var match = window.location.href.match(/.*\:\/\/([^\/]*).*/);if(typeof match != "undefined" && null != match){return match[1];}return null;}gccHost=!document.domain ? getDomain() : document.domain;if (null!==gccHost){var p = gccHost.indexOf('.');gccHost=p > 0 ? gccHost.substr(p+1) : gccHost;}for (var _k in _gcc ){if (_gcc[_k].domain==gccHost){gccHost=_gcc[_k];break;}};if(typeof gccHost !='object'){gccHost=_gcc[0];}
    $('#eduuTopIndex').html("<a href='http://www."+gccHost.domain+"/'>"+gccHost.name+"</a>");
    $('#eduTG').val(gccHost.sid);

    $(".topUserName").focus(function(){
        if($(this).val()=="邮箱/用户名"){
            $(this).val('').removeClass('onIput');
        }
    });
    $(".topUserName").blur(function(){
        if($(this).val()==""){
            $(this).val('邮箱/用户名').addClass('onIput');
        }
    });
    $(".topPassWord").focus(function(){
        if($(this).val()=="请输入密码"){
            $("#showpassword").hide();
            $("#password").show().focus();
        }
    });
    $(".topPassWord").blur(function(){
        if($(this).val()==""){
            $("#showpassword").show();
            $("#password").hide();
        }
    });
})(jQuery);

//登录提交
function subLogin(){
    var uname=$.trim($(".topUserName").val());
    var passwd=$.trim($("#password").val());
    var islogin=$("#islogin").attr("checked")==true ? 1 : 0;
    var logtype=0;
    var urow=uname.split("");
    for(var i=0; i<uname.length;i++){
        if(urow[i] == '@'){
            logtype=2;break;
        }
    }

    if(uname=="邮箱/用户名" || uname==""){
        $("#tiplogin").html("<font color='red'>请输入邮箱/用户名</font>");
        return false;
    }
    if(passwd==""){
        $("#tiplogin").html("<font color='red'>请输入密码</font>");
        return false;
    }
    //getJSON实现跨域
    $.getJSON("http://reg.eduu.com/login/loginpost?uname="+encodeURIComponent(uname)+"&passwd="+passwd+"&logtype="+logtype+"&islogin="+islogin+"&callback=?", function(data){
        data=eval('('+data+')');
        if(data.status==1){
            location.reload(true);
        }
        $("#tiplogin").html("<font color='red'>"+data.msg+"</font>");
        return false;
    });
}


//站群的导航js应该需要加这两个函数
//API登录 延时
function apiLogin(A,B){
    window.location.href=B+'apilogin/goApi?type='+A;
    return false;
}

(function($){
	$.fn.hoverDelay = function(options){
		var defaults = {
			//self:$(this).css("padding"),
			hoverDuring: 200,
			outDuring: 200,
			hoverEvent: function(){
			},
			outEvent: function(){
			}
		};
		var sets = $.extend(defaults,options || {});
		var hoverTimer, outTimer;
		return $(this).each(function(){
			var el = this;
			$(this).hover(function(){
				clearTimeout(outTimer);
				hoverTimer = setTimeout(function(){
					sets.hoverEvent.apply(el);
				}, sets.hoverDuring);
			},function(){
				clearTimeout(hoverTimer);
				outTimer = setTimeout(function(){
					sets.outEvent.apply(el);
				}, sets.outDuring);
			});
		});
	}
	//通用显示菜单
	$(".tarBox").each(function(){
		$(this).hoverDelay({
			hoverDuring: 400,
			outDuring: 400,
			hoverEvent: function(){
				var B=$(this).attr('xd');
				if(B.length>0) $(this).addClass(B);
				$(this).parent().siblings().children().removeClass(B);
			},
			outEvent: function(){
				var B=$(this).attr('xd');
				if(B.length>0) $(this).removeClass(B);
			}
		});
	})
})(jQuery);

function API_loging(O){
    jQuery(function($){
        //在线人数统计
        $('#onlineUser').html('[当前'+O.uonline+'家长在线讨论]');
    });

    //验证登陆
    if (O.login!='1') return false;
    $('#eduuLogin').hide().next().show();//登录切换
    jQuery(function($){
        $('.logoReg').hide();$('.loginInAd').show();//LOGO下广告切换
    });

    $('#tarUname').append(O.uname);
    $('#eduuUser').find('img').attr('src',O.upic).attr('alt',O.uname);
    $('#eduuUser').find('p:eq(0) > a').addClass('levelIcon'+O.ugid).text(O.uname).attr('href','http://home.eduu.com/'+O.uid+'/');
    if(O.msgsum>0) $('#eduuMsg > dt > em').text(O.msgsum>99 ? '99+' : O.msgsum).addClass('hasMes');
    if(O.msg>0) $('#eduuMsg > dd em:eq(0)').text(O.msg>0 ? '+'+O.msg : '').addClass('hasOrg');
    if(O.ntcrqt>0) $('#eduuMsg > dd em:eq(1)').text(O.ntcrqt>0 ? '+'+O.ntcrqt : '').addClass('hasOrg');
    if(O.ntcfns>0) $('#eduuMsg > dd em:eq(2)').text(O.ntcfns>0 ? '+'+O.ntcfns : '').addClass('hasOrg');
    if(O.ntcsys>0) $('#eduuMsg > dd em:eq(3)').text(O.ntcsys>0 ? '+'+O.ntcsys : '').addClass('hasOrg');
	$("#fansnum").html(O.fansnum);//粉丝数
    $("#follnum").html(O.follnum);//关注数
    $(".fansnum").attr("href",'http://home.eduu.com/'+O.uid+"/friend/fans/");
    $(".follnum").attr("href",'http://home.eduu.com/'+O.uid+"/friend/");
}

//登录检测地址 c=编码&a=api函数(默认为API_loging)
document.write(unescape("%3Cscript src='http://reg.eduu.com/js/login.js?c=gbk&rd="+Math.random()+"' type='text/javascript'%3E%3C/script%3E"));
