// JavaScript Document
document.writeln("<link href='http://img.eduuu.com/aoshu/css/public_topnav.css?2012-3-24' type='text/css' rel='stylesheet' />");
document.writeln("<div id='eduuTopNav' class='topnavI'>");
document.writeln("	<div class='wrapper'>");
document.writeln("        <div class='topNavL'>");
document.writeln("        	<ul>");
document.writeln("               <li id='eduuTopIndex'><a href='http://www.aoshu.com/'>e�Ƚ�����</a></li>");
document.writeln("               <li class='noPa' style='_width:73px;'>");
document.writeln("                   <dl class='tarBox otherWebsite' xd='navOn'>");
document.writeln("                        <dt>������վ<i></i></dt>");
document.writeln("                        <dd>");
document.writeln("                        	<a href='http://www.yuer.com/'><s class='w1'></s>������</a><a href='http://www.youjiao.com/'><s class='w2'></s>�׽���</a><a href='http://www.aoshu.com/'><s class='w3'></s>������</a><a href='http://www.zhongkao.com/'><s class='w4'></s>�п���</a><a href='http://www.gaokao.com/'><s class='w5'></s>�߿���</a><a href='http://www.liuxue.com/'><s class='w6'></s>��ѧ��</a><a href='http://www.zuowen.com/'><s class='w7'></s>������</a><a href='http://www.yingyu.com/'><s class='w8'></s>Ӣ����</a><a href='http://v.eduuu.com/'><s class='w9'></s>e����Ƶ</a>");
document.writeln("                        </dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");
document.writeln("                <li><a href='http://bbs.eduu.com/'>��̳</a></li>");
document.writeln("                <li><a href='http://home.eduu.com/'>�ռ�</a></li>");
document.writeln("                <li class='noPa' style='_width:49px;'>");
document.writeln("                   <dl class='tarBox apply' xd='navOn'>");
document.writeln("                        <dt>Ӧ��<i></i></dt>");
document.writeln("                        <dd>");
document.writeln("                            <a href='http://www.aoshu.com/tiku/'><s class='w10'></s>���</a><a href='http://zidian.eduu.com/'><s class='w11'></s>�ֵ�</a><a href='http://cidian.eduu.com/'><s class='w12'></s>�ʵ�</a><a href='http://chengyu.eduu.com/'><s class='w13'></s>����</a>");
document.writeln("                        </dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");
document.writeln("                <li class='noPa' style='_width:73px;'>");
document.writeln("                   <dl class='tarBox coach' xd='navOn'>");
document.writeln("                        <dt>��������<i></i></dt>");
document.writeln("                        <dd>");
document.writeln("                        	<a href='http://www.speiyou.com/' target='_blank'><s class='w15'></s>ѧ��˼����</a><a href='http://www.jiajiaoban.com/' target='_blank'><s class='w16'></s>�ǿ�1��1</a><a href='http://www.xueersi.com/' target='_blank'><s class='w17'></s>ѧ��˼��У</a><a href='http://www.mobby.cn/' target='_blank'><s class='w18'></s>Ħ��˼ά��</a>");
document.writeln("                        </dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");
document.writeln("                <li class='navSrh'><form method=get action='http://s.eduu.com/qs' target='_blank'><input type='hidden' id='eduTG' name='tg' value='0' /><input name='wd' id='eduuwd' type=text size='20' class='topInput' onfocus=\"this.value='';this.style.color='#000000';\" onblur=\"if(!this.value){this.value='��������Ҫ��ѯ�Ĺؼ���';this.style.color='#BBBBBB';}\" value='��������Ҫ��ѯ�Ĺؼ���' /><input name='' type='image' src='http://img.eduuu.com/website/public_images/topmenu/nav_btn_srh.gif' onclick='if(document.getElementById(\"eduuwd\").value==\"��������Ҫ��ѯ�Ĺؼ���\"){ document.getElementById(\"eduuwd\").value=\"\"}'/></form></li>");
document.writeln("            </ul>");
document.writeln("        </div>");
document.writeln("        <div class='topNavR' id='eduuLogin'>");
document.writeln("            <ul>");
document.writeln("                <!--δ��¼״̬��ʾ-->");
document.writeln("                <li class='pa'><a href='http://reg.eduu.com/register/'>ע��</a></li>");
document.writeln("                <li class='pa'><span class='topLogin' style='display:none;'><a href='http://reg.eduu.com/login/' class='lg'>��¼</a></span>");
document.writeln("                     <dl class='tarBox New_logbox' xd='navOn'>");
document.writeln("                          <dt style=' _width:24px;'>��¼<i></i></dt>");
document.writeln("                          <dd class='New_topLogin'>");
document.writeln("                              <p id='tiplogin'>e��ͨ��֤�û���ֱ�ӵ�¼</p>");
document.writeln("                              <p><input type='text' autocomplete=\"off\" class='topUserName onIput' value='����/�û���'></p>");
document.writeln("                              <p><input type='text' id='showpassword' class='topPassWord onIput' value='����������'><input type='password' id='password' class='topPassWord' style='display:none'></p>");
document.writeln("                              <p>");
document.writeln("                                  <label class='left'><input type='checkbox' id='islogin' value='1'>�Զ���¼</label>");
document.writeln("                                  <span class='right'><a href='http://reg.eduu.com/getpwd' target='_blank'>�������룿</a></span>");
document.writeln("                              </p>");
document.writeln("                              <p><button type='button' class='topMenuBtn' onclick='subLogin()'><!--��¼--></button></p>");
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
document.writeln("                        <dt>����<i></i></dt>");
document.writeln("                        <dd>");
document.writeln("                        	<a href='http://my.eduu.com/blog/add/'>д�ռ�</a><a href='http://my.eduu.com/album/upload/'>����Ƭ</a><a href='http://bbs.eduu.com/home.php?mod=space&do=thread&view=me'>������</a><a href='http://my.eduu.com/tougao/add/'>Ͷ����</a>");
document.writeln("                            <iframe width='110' height='92' style='position:absolute; right:0px; top:28px; z-index:-1; filter:alpha(opacity=0); background:transparent;border:0pt none;' frameborder='0'></iframe>");
document.writeln("                        </dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");
document.writeln("                <li class='noPa' style='_width:69px;'>");
document.writeln("                   <dl class='tarBox set' xd='setOn'>");
document.writeln("                        <dt>����<i></i></dt>");
document.writeln("                        <dd>");
document.writeln("                        	<a href='http://my.eduu.com/profile/index/'>��������</a><a href='http://my.eduu.com/account/passwd/'>�˺Ű�ȫ</a><a href='http://my.eduu.com/help/index/'>�ռ�����</a><a href='http://my.eduu.com/bbs/usersign/'>��̳����</a><a href='http://reg.eduu.com/logout'>�˳�</a>");
document.writeln("                            <iframe width='110' height='92' style='position:absolute; left:0px; top:28px; z-index:-1; filter:alpha(opacity=0); background:transparent;border:0pt none;' frameborder='0'></iframe>");
document.writeln("                        </dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");
document.writeln("                <li class='noPa' style='_width:73px;'>");
document.writeln("                    <dl class='tarBox message' xd='messageOn' id='eduuMsg'>");
document.writeln("                        <dt><em>0</em>��Ϣ<i></i></dt><!--����Ϣʱem�����class='hasMes'-->");
document.writeln("                        <dd>");
document.writeln("                            <a href='http://my.eduu.com/msg'>վ����<em></em><a href='http://my.eduu.com/notice/interaction'>��������<em></em></a><a href='http://my.eduu.com/notice/friends'>������˿<em></em></a><a href='http://my.eduu.com/notice/system'>ϵͳ֪ͨ<em></em></a><a href='http://my.eduu.com/'>����������<em class='hasOrg'>new!</em></a>");
document.writeln("                            <iframe width='110' height='92' style='position:absolute; left:0px; top:28px; z-index:-1; filter:alpha(opacity=0); background:transparent;border:0pt none;' frameborder='0'></iframe>");
document.writeln("                        </dd>");
document.writeln("                    </dl>");
document.writeln("                </li>");
document.writeln("                <li class='noPa' style='_width:100px;'>");
document.writeln("                    <dl class='tarBox user' xd='userOn' id='m006'>");
document.writeln("                        <dt id='tarUname'><i></i></dt>");
document.writeln("                        <dd>");
document.writeln("                            <div class='userInfo' id='eduuUser'>");
document.writeln("                                <img src='http://atth.eduu.com/avatar/avatar_small.jpg' width='50' height='50' alt='�û���' class='' />");
document.writeln("                                <div>");
document.writeln("                                <p><a href='http://home.eduu.com/' class='level'>Сţ����521</a></p><!--�ȼ�����ʱ�任class='levelIcon1-22'-->");
document.writeln("                                <p class='n_gzfs'><a class='rm10 follnum' href='#'><span id='follnum'>121345</span>��ע</a><a class='fansnum' href='#'><span id='fansnum'>9999999</span>��˿</a></p>");
document.writeln("                                </div>");
document.writeln("                            </div>");
document.writeln("                            <div class='userItem'>");
document.writeln("                                <p><a href='http://my.eduu.com/' class='enterHome'>�����������</a></p>");
document.writeln("                                <ul class='n_menubox'>");
document.writeln("                                    <li><a href='http://my.eduu.com/blog'>�ҵ���־</a></li>");
document.writeln("                                    <li><a href='http://my.eduu.com/album'>�ҵ����</a></li>");
document.writeln("                                    <li>");
document.writeln("                                        <a href='http://my.eduu.com/forum/all'>�ҵ�����</a>");
document.writeln("                                        <p class='n_gary'><a href='http://my.eduu.com/forum/thread'>�ҵ�����</a><a href='http://my.eduu.com/forum/post'>�ҵĻظ�</a><a href='http://bbs.eduu.com/home.php?mod=space&do=thread&view=me&type=postcomment'>�ҵĵ���</a><a href='http://bbs.eduu.com/home.php?mod=space&do=thread&view=digest'>�ҵľ���</a></p>");
document.writeln("                                    </li>");
document.writeln("                                    <li><a href='http://my.eduu.com/share/listyou'>�ҵķ���</a></li>");
document.writeln("                                    <li><a href='http://my.eduu.com/share/listme'>�ҵ��ղ�</a></li>");
document.writeln("                                    <li><a href='http://my.eduu.com/tougao'>�ҵ�Ͷ��</a></li>");
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
    var _gcc =[{domain:'eduu.com',name:'<i>e</i>�Ƚ�����',sid:'0'},{domain:'aoshu.com',name:'��������ҳ',sid:'1'},{domain:'zuowen.com',name:'��������ҳ',sid:'98'},{domain:'yingyu.com',name:'Ӣ������ҳ',sid:'4'},{domain:'gaokao.com',name:'�߿�����ҳ',sid:'3'},{domain:'youjiao.com',name:'�׽�����ҳ',sid:'5'},{domain:'liuxue.com',name:'��ѧ����ҳ',sid:'99'},{domain:'zhongkao.com',name:'�п�����ҳ',sid:'2'},{domain:'jiajiaoban.com',name:'�ҽ�����ҳ',sid:'0'},{domain:'yuer.com',name:'��������ҳ',sid:'0'}],gccHost;

    function getDomain(){var match = window.location.href.match(/.*\:\/\/([^\/]*).*/);if(typeof match != "undefined" && null != match){return match[1];}return null;}gccHost=!document.domain ? getDomain() : document.domain;if (null!==gccHost){var p = gccHost.indexOf('.');gccHost=p > 0 ? gccHost.substr(p+1) : gccHost;}for (var _k in _gcc ){if (_gcc[_k].domain==gccHost){gccHost=_gcc[_k];break;}};if(typeof gccHost !='object'){gccHost=_gcc[0];}
    $('#eduuTopIndex').html("<a href='http://www."+gccHost.domain+"/'>"+gccHost.name+"</a>");
    $('#eduTG').val(gccHost.sid);

    $(".topUserName").focus(function(){
        if($(this).val()=="����/�û���"){
            $(this).val('').removeClass('onIput');
        }
    });
    $(".topUserName").blur(function(){
        if($(this).val()==""){
            $(this).val('����/�û���').addClass('onIput');
        }
    });
    $(".topPassWord").focus(function(){
        if($(this).val()=="����������"){
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

//��¼�ύ
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

    if(uname=="����/�û���" || uname==""){
        $("#tiplogin").html("<font color='red'>����������/�û���</font>");
        return false;
    }
    if(passwd==""){
        $("#tiplogin").html("<font color='red'>����������</font>");
        return false;
    }
    //getJSONʵ�ֿ���
    $.getJSON("http://reg.eduu.com/login/loginpost?uname="+encodeURIComponent(uname)+"&passwd="+passwd+"&logtype="+logtype+"&islogin="+islogin+"&callback=?", function(data){
        data=eval('('+data+')');
        if(data.status==1){
            location.reload(true);
        }
        $("#tiplogin").html("<font color='red'>"+data.msg+"</font>");
        return false;
    });
}


//վȺ�ĵ���jsӦ����Ҫ������������
//API��¼ ��ʱ
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
	//ͨ����ʾ�˵�
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
        //��������ͳ��
        $('#onlineUser').html('[��ǰ'+O.uonline+'�ҳ���������]');
    });

    //��֤��½
    if (O.login!='1') return false;
    $('#eduuLogin').hide().next().show();//��¼�л�
    jQuery(function($){
        $('.logoReg').hide();$('.loginInAd').show();//LOGO�¹���л�
    });

    $('#tarUname').append(O.uname);
    $('#eduuUser').find('img').attr('src',O.upic).attr('alt',O.uname);
    $('#eduuUser').find('p:eq(0) > a').addClass('levelIcon'+O.ugid).text(O.uname).attr('href','http://home.eduu.com/'+O.uid+'/');
    if(O.msgsum>0) $('#eduuMsg > dt > em').text(O.msgsum>99 ? '99+' : O.msgsum).addClass('hasMes');
    if(O.msg>0) $('#eduuMsg > dd em:eq(0)').text(O.msg>0 ? '+'+O.msg : '').addClass('hasOrg');
    if(O.ntcrqt>0) $('#eduuMsg > dd em:eq(1)').text(O.ntcrqt>0 ? '+'+O.ntcrqt : '').addClass('hasOrg');
    if(O.ntcfns>0) $('#eduuMsg > dd em:eq(2)').text(O.ntcfns>0 ? '+'+O.ntcfns : '').addClass('hasOrg');
    if(O.ntcsys>0) $('#eduuMsg > dd em:eq(3)').text(O.ntcsys>0 ? '+'+O.ntcsys : '').addClass('hasOrg');
	$("#fansnum").html(O.fansnum);//��˿��
    $("#follnum").html(O.follnum);//��ע��
    $(".fansnum").attr("href",'http://home.eduu.com/'+O.uid+"/friend/fans/");
    $(".follnum").attr("href",'http://home.eduu.com/'+O.uid+"/friend/");
}

//��¼����ַ c=����&a=api����(Ĭ��ΪAPI_loging)
document.write(unescape("%3Cscript src='http://reg.eduu.com/js/login.js?c=gbk&rd="+Math.random()+"' type='text/javascript'%3E%3C/script%3E"));
