//更新默认显示提示语
function sChange(C){
    if(C==1) { 
        if($.trim($("#message"+C).html())=='请输入收藏理由......') {
            $("#message"+C).html('');
        }
    }
    if(C==2) { 
        if($.trim($("#message"+C).html())=='请输入分享理由......') {
            $("#message"+C).html('');
        }
    }
    $("textarea[name='message"+C+"']").removeClass();
}

//切换收藏和分享
function tabs(tabTit,tabCon,on,C){
    $(tabCon).each(function(){
        $(this).children().eq(0).show();
    });
    $(tabTit).children().click(function(){
        $(this).addClass(on).siblings().removeClass(on);
        var index = $(tabTit).children().index(this);
        $(tabCon).children().eq(index).show().siblings().hide();
    });
    $("#finfo").attr('fauth',C);
    if(C==1 && $.trim($("#message"+C).html())=='') { 
        $("#message"+C).html('请输入收藏理由......');
        $("textarea[name='message1']").addClass('hui');
    }
    if(C==2 && $.trim($("#message"+C).html())=='') { 
        $("#message"+C).html('请输入分享理由......');
        $("textarea[name='message2']").addClass('hui');
    }
}

//添加分享的弹窗 A:源id B:源类型
function shareAdd(A,B){ 
    if(ecfg.reguid == 0) {
        FDlogin();
        return;
    }
    art.dialog({
        id:'_dlg', title:'加载中',padding:'10px', lock: true,background:'#F3F3F3',
        initFn: function(){
            $.getJSON(ecfg.url+'share/add?r='+Math.random()+'&fid='+A+'&ftype='+B+'&jsoncallback=?',function(data){
                if(data.check==0) {
                    art.dialog.list['_dlg'].title('分享&收藏').size('450','310');
                    art.dialog.list['_dlg'].button([
                            {
                                name: '提交',
                                callback: function () {
                                    shareAddpro(B);
                                    return false;
                                },
                                focus: true
                            },
                            {
                                name: '取消'
                            }
                    ]);
                    shareHtml(data,B);//输出页面
                }else {
                    if(data.check=='-1') {
                        art.dialog.list['_dlg'].title('提示').content('您要分享的内容已经不在了！').time(2);
                        return false;
                    }
                    if(data.check=='-2') {
                        art.dialog.list['_dlg'].title('提示').content('只有设置所有人可见的内容才能被分享！').time(2);
                        return false;
                    }
                    if(data.check=='-3') {
                        art.dialog.list['_dlg'].title('提示').content('待审核日志禁止分享！').time(2);
                        return false;
                    }
                }
            })
        }
    });
}

//定制分享弹窗页面
function shareHtml(A,B) {
    var sHtml = "<div class='favTc'><ul class='tabTit'><li class='fxOn' onclick=\"tabs('.tabTit','.tabCon','fxOn','2')\">发送到新鲜事</li><li onclick=\"tabs('.tabTit','.tabCon','fxOn','1')\">自己收藏</li></ul><div class='tabCon'><div><dl><dt><img src='"+A.upic+"' width='44' height='44' alt='头像' /></dt><dd><textarea id='message2' name='message2' cols='' rows='' onfocus='sChange(2)'></textarea></dd></dl><div class='hr_10'></div><input type='hidden' id='finfo' fuid='"+A.uid+"' funame='"+A.uname+"'  fid='"+A.fid+"' fauth='2'>";

    var hideHtml = "</div><div class='none'><dl><dt><img src='"+A.upic+"' width='44' height='44' alt='头像' /></dt><dd><textarea id='message1' name='message1' cols='' rows='' onfocus='sChange(1)'></textarea></dd></dl><div class='hr_10'></div>";

    if(B==1) {//日志
        var blogHtml = "<div class='favInfo'><strong><span id='stitle'>"+A.title+"</span></strong><p class='hui'>来自："+A.uname+"</p><p id='sintro'>"+A.intro+"</p></div><div class='hr_10'></div>";
        sHtml += blogHtml+hideHtml+blogHtml;

    }else if(B==2) {//照片
        var picHtml = "<div class='favInfo'><img src='"+A.filepath+"' width='110' id='filepath' /><span id='stitle'>"+A.title+"</span><p class='hui'>所属相册："+A.albumname+"</p><p>来自："+A.uname+"</p></div><span id='sintro' style='display:none'><a href='"+A.ahref+"' class='blue falbum' target='_blank'>"+A.albumname+"</a></span><div class='hr_10'></div>";
        sHtml += picHtml+hideHtml+picHtml;

    }else if(B==3){//帖子
        var bbsHtml = "<div class='favInfo'><strong><span id='stitle'>"+A.title+"</span></strong><p class='hui'>来自："+A.uname+"</p><p id='sintro'>"+A.intro+"</p></div><div class='hr_10'></div>";
        sHtml += bbsHtml+hideHtml+bbsHtml;

    }else if(B==5){//投稿
        A.intro=FD.ut.subStr(A.content,300);
        var tougaoHtml = "<div class='favInfo'><strong><span id='stitle'>"+A.title+"</span></strong><p class='hui'>来自："+A.uname+"</p><p id='sintro'>"+A.intro+"</p></div><div class='hr_10'></div>";
        sHtml += tougaoHtml+hideHtml+tougaoHtml;
    }

    art.dialog.list['_dlg'].content(sHtml).position();
    tabs('.tabTit','.tabCon','fxOn','2');
}

//分享(收藏)的提交
function shareAddpro(B) { 
    var auth=$("#finfo").attr('fauth');
    if(auth==1){
        var message=$.trim($("#message1").val());
        if(message=='请输入收藏理由......') {message='';}
    }else{ 
        var message=$.trim($("#message2").val());
        if(message=='请输入分享理由......') {message='';}
    }
    if(FD.ut.strLen(message) > 80){ 
        if(auth==1) {
            art.dialog({ title: '提示', content: '收藏理由不能超过40汉字！',time:2 });
        }else{
            art.dialog({ title: '提示', content: '分享理由不能超过40汉字！',time:2 });
        }
        return false;
    }
    var title=$("#stitle").html();
    var intro=$("#sintro").html();
    var fuid=$("#finfo").attr('fuid');
    var funame=$("#finfo").attr('funame');
    var fid=$("#finfo").attr('fid');
    var image='';//照片地址
    if(B==2) {
        var image=$('#filepath').attr('src');
    }

    $.post('/share/addpro',{ title:title,intro:intro,message:message,image:image,fuid:fuid,funame:funame,ftype:B,fid:fid,auth:auth },function(res){
        if(auth==1 && res=='-1') {
            art.dialog({ title: '提示', content: '您已经收藏过该内容',time:2 });
        }else if(auth==2 && res=='-1') {
            art.dialog({ title: '提示', content: '您已经分享过该内容',time:2 });
        }else if(res<=0) {
            art.dialog({ title: '提示', content: '发生异常，请稍后重试',time:1 });
        }else {//操作成功
            art.dialog.list['_dlg'].close();
            sucessHtml(auth,res);
        }
    });

    return;
}

//分享的删除
function shareDel(A){ 
    art.dialog({ title: '提示', content: '确定删除该内容吗？',
        yesFn: function () {
            $.get('/share/del?r='+Math.random()+'&id='+A,function(data){ 
                if(data=='-1') {
                    art.dialog({ title: '提示', content: '您没有权限进行操作',time:2 });
                    return false;
                }else{
                    location.reload(true);
                    return false;
                }
            });
        },
        noFn: true
    });
}

//定制分享成功后的页面 A:1分享/2收藏 B分享id
function sucessHtml(A,B) {
    if(A==2) {
        var sHtml="复制分享链接，通过QQ或者MSN发送给你的好友。<br><br> <input type='text' value='"+ecfg.homeurl+""+ecfg.reguid+"/share' size='30' >&nbsp;&nbsp;<a class='blue' href='javascript:void(0)' onclick=\"FD.ut.setCopy('"+ecfg.homeurl+""+ecfg.reguid+"/share')\" >复制</a> <br><br> 查看我的更多分享，<a href='"+ecfg.homeurl+""+ecfg.reguid+"/share' class='blue'>点击这里！</a>";
    }else{
        var sHtml="此内容已添加到你的收藏中，并且仅你自己可见。<br><br> 查看我的更多收藏，<a href='"+ecfg.url+"share/list/1' class='blue'>点击这里！</a>";
    }

    art.dialog({
        title: '操作成功',
        content: sHtml,
        icon: 'succeed',
        button:[
            {
                name: '关闭',
                focus: true
            }
        ]
    })
}

