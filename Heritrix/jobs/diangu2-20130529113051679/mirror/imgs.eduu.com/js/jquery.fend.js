/* v1.0 Gimoohr@gmail.com 2009-7-31 22:30:08 QQ: 36147437 Gimoo */
var FD = {};
//公共方法提供检测、取值、设置等方法
FD.ut = {
    ecu:encodeURIComponent,
    /**
     * 检测变量是否存在
     * @param  string A 需要检测的变量
     * @return bool
    **/
    isVar: function(A){
        return (typeof A == 'undefined' || A==='' || A===null) ? false : true; 
    },

    /**
     * 弹出确认窗口
     * @param  string A 需要检测的变量
     * @return bool
    **/
    isDel: function(A){
        if(!this.isVar(A)) {
            A='您确定要删除吗?';
        }
        return confirm(A);
    },

    /**
     * 取得Query的Uri
     * @param  string A 需要检测的变量
     * @return bool
    **/
    getPars: function(A){
        new RegExp("(^|&)"+A+"=([^&]*)").exec(window.location.search.substr(1));
        return RegExp.$2 || null;
    },
    
    /**
     * 跳转页面
     * @param  string A 需要检测的变量
     * @return bool
    **/
    goBack: function(A){
        if(this.isVar(A)) {
            history.go(A);
        }else{
            history.back();
        }
    },

    /**
     * 跳转页面
     * @param  string v 需要检测的变量
     * @return bool
    **/
    goUrl: function(A,B,T){
        B=this.isVar(B) ? B : 0;
        if(this.isVar(T)){
            setTimeout(function(){ FD.ut.goUrl(A,B) },T);
        }else{
            if(B){
                window.open(A);
            }else{
                self.location=A;
            }
        }
    },

    /**
     * 复制txt
     * @param  string v 需要检测的变量
     * @return bool
    **/
    setCopy: function(A){
        var userAgent = navigator.userAgent.toLowerCase();
        var is_opera = userAgent.indexOf('opera') != -1 && opera.version();
        var is_ie = (userAgent.indexOf('msie') != -1 && !is_opera) && userAgent.substr(userAgent.indexOf('msie') + 5, 3);
        if(is_ie) {
            if(clipboardData.setData('Text',A)) {
                alert ("网址“"+A+"”\n已经复制到您的剪贴板中\n您可以使用Ctrl+V快捷键粘贴到需要的地方");
            }
        } else {
            prompt("请复制网站地址:",A);
        }
    },

    /**
     * 计算字符串的实际长度
     * @param  string A 字符串
     * @return bool
    **/
    strLen: function(A){
        return A.replace(/[^\x00-\xff]/g, 'xx').length;
    },

    /**
     * 计算字符串的实际长度
     * @param  string A 字符串
     * @param  string B 变量
     * @return bool
    **/
    enUrl: function(A,B){
        var U=location.href;
        if (!this.isVar(A)) {
            return this.ecu(U);
        }
        B=this.isVar(B) ? B : 'wstr';
        U=U.indexOf('?')>0 ? (U+'&'+B+'=') : (U+'?'+B+'=');
        return this.ecu(U+this.ecu(A));
    },

    /**
     * 按指定长度截取字符串
     * @param  string A 文本框内容
     * @param  string B 要截取的字符长度
     * @return str
    **/
    subStr: function(A,B){
        var r=/[^\x00-\xff]/g;
        var len=this.strLen(A);
        if(len<=B) return A;

        var m=Math.floor(B/2);
        for(var i=m;i<len;i++){
            if(A.substr(0,i).replace(r,'mm').length>=B){
                return A.substr(0,i);
            }
        }
        return A;
    },

    /**
     * 控制截取字符 并回显字符数
     * @param  string A dom对象|当前对象this
     * @param  int    B 最大字符数
     * @param  string C 回显目标ID
     * @return void
    **/
    msgSubStr: function(A,B,C){
        var _B=B*2;
        if(typeof C == 'undefined') C=null;
        //实例化一下判断字符长度的函数strlen  直接用this.strLen不行
        var T=this.strLen;
        $(A).keydown(function(){
            var _L=T(this.value);
            if (_L>B){
                var L=this.value.length;
                for (var i=B;i<=L;++i){
                    var _P=this.value.substr(0,i);
                    if (T(_P)<_B) continue;
                    this.value=_P;
                    break;
                }
            }
            if (null!==C){ _L=Math.floor(_L/2); $(C).html((_L>B ? B : _L)+"/"+B); }
        }).keyup(function(){
            var _L=T(this.value);
            if (_L>B){
                var L=this.value.length;
                for (var i=B;i<=L;++i){
                    var _P=this.value.substr(0,i);
                    if (T(_P)<_B) continue;
                    this.value=_P;
                    break;
                }
            }
            if (null!==C){ _L=Math.floor(_L/2); $(C).html((_L>B ? B : _L)+"/"+B); }
        });
        if (null!==C) $(C).html("0/"+B);
    }

}

//表单处理
FD.fm={

    /**
     * 设置表单值
     * @param  string g dom对象|ID|元素
     * @param  string v 需要设置的值
     * @return void
    **/
    setVar: function(g,v){
        var obj=$(g);
        if(obj.attr('type')=='checkbox'){
            v=','+v+',';
            obj.each(function(i){
                this.checked=v.search(','+this.value+',')<0 ? false : true;
            });
        }else if(obj.attr('type')=='radio'){
            obj.each(function(i){
                if(v==this.value){this.checked=true;return;}
            });
        }else{
            obj.val(v);
        }
    },

    /**
     * 设置img的src
     * @param  string g dom对象|ID|元素
     * @param  string v 需要设置的值
     * @return void
    **/
    setImg: function(g,v){
        v=FD.ut.isVar(v) ? v : $(g).attr('src');
        if(typeof(v)=='undefined') return false;
        var po=v.indexOf('?');
        if (po>0){
            v=v.substring(0,po);
        }
        $(g).get(0).src= v + '?t='+Math.random();
        return false;
    },

    /**
     * 复选框集合收集
     * @param  string g dom对象|ID|元素
     * @param  string v false为全不选,true为全选,为空时收集所有ID到隐藏域
     * @return void
    **/
    setBox: function(g,v){
        var tem='0';
        if ( typeof(v) == 'undefined' ) {
            //载入到TEXT
            $(g+':checkbox:checked').each(function(){
                tem+=','+this.value;
            });
        }else{
            $(g+':checkbox').each(function(){
                this.checked=v;
                if(this.checked){
                    tem+=','+this.value;
                }
            });
        }

        //保存选择
        if (tem.length>1) {
            tem=tem.substr(2,tem.length);
        }
        $(g+':hidden').val(tem);
    },

    /**
     * 设置表单的默认值
     * @param  string g dom对象|ID|元素
     * @param  string v 为空或默认显示的数据
     * @return void
    **/
    setInputDef: function(g,v){
        var corbg='#D8D8D8';
        $(g).blur(function(){ 
            if (!this.value){
                $(this).css("color",corbg).val(v);
            }
        }).focus(function(){
            if (this.value==v) $(this).css("color",'').val('');;
        }).each(function(){
            if (this.value==''){
                $(this).val(v).css("color",corbg);
            }else if(this.value==v){
                $(this).css("color",corbg);
            }
        });

    }

}

//密码强度检测
FD.pwdstrong={
    //测试某个字符是属于哪一类 
    charMode: function(iN){ 
        if (iN>=48 && iN <=57) //数字 
            return 1; 
        if (iN>=65 && iN <=90) //大写字母 
            return 2; 
        if (iN>=97 && iN <=122) //小写 
            return 4; 
        else 
            return 8; //特殊字符 
    },

    //计算出当前密码当中一共有多少种模式 
    bitTotal: function(num){ 
        modes=0; 
        for (i=0;i<4;i++){ 
            if (num & 1) modes++; 
            num>>>=1; 
        } 
        return modes; 
    },

    //返回密码的强度级别 
    checkStrong: function(sPW){ 
        if (sPW.length<=4) return 0; //密码太短 
        Modes=0; 
        for (i=0;i<sPW.length;i++){ 
            //测试每一个字符的类别并统计一共有多少种模式. 
            Modes|=this.charMode(sPW.charCodeAt(i)); 
        } 
        return this.bitTotal(Modes); 
    }
}


//导航的应用
jQuery(function($){
    $('.topMenuItem').hover(function(){
        $(this).addClass('on');
    },function(){
        $(this).removeClass('on');
    });

    $('#usetPor').hover(function(){
        $(this).find('.btnSet').show();
    },function(){
        $(this).find('.btnSet').hide();
    });

});

//临时增加的积分提示功能
function srcNotice(str,score,credit){
    if($('#FD_tip_jf').length<=0){
        $(document.body).append("<div id='FD_tip_jf' class='tipJf'></div>");
    }
    $('#FD_tip_jf').html("<p>"+str+" 积分<span>+"+score+"</span> 金币<span>+"+credit+"</span></p>");
    $('#FD_tip_jf').fadeIn('slow',function(){
        setTimeout(function(){ $('#FD_tip_jf').fadeOut('slow'); },1000);
    });
}

//加黑名单的操作
function addBlack(uid,buid,buname){
    art.dialog({ title: '提示', content: '<font size="2px" color="#333333">确定将 '+buname+' 加入到你的黑名单中么？</font><br><br><font color="#999999">你和TA将自动解除关注关系，并且TA不能再关注你<br>TA不能再对你发评论、站内信</font>',
        yesFn: function (){
            $.getJSON(ecfg.url+'jsonp/addBlack?r='+Math.random()+'&uid='+uid+'&buid='+buid+'&jsoncallback=?',function(){
                art.dialog({ icon:'succeed',title: '提示', content: '操作成功！',time:3,
                    closeFn: function () {
                        //location.reload(true);
                        $(".personPhotoMes").html("<span class=\"btnJgzNewNog\" onclick=\"fans.toFollow(this,"+buid+",1,'"+buname+"','"+buid+"')\">关注</span> <a href=\"javascript:;\" onclick=\"msgSendReply("+buid+",'"+buname+"')\" class=\"send\">发消息</a>");
                    }
                });
            })
        },
        noFn: true
    })
}

//留言板和评论页面的url自动匹配
function urlAuto(C){
    $(C).each(function(i){ 
        var t=$(this).html();
        if(t.substr(0,4)=='http'){
            t=' '+t;
        }
        var reg=/([^\"\'\>])(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
        //A=t.replace(reg,"$1<a href='$2$3' target='_blank'>$2$3</a>").replace(/\n/g,"<br />");
        A=t.replace(reg,"$1<a href='$2$3' target='_blank'>$2$3</a>");
        $(this).html(A);
    });
}

//API登录 延时
function apiLogin(A,B){
    //暂时去掉登录延时了
    window.location.href=B+'apilogin/goApi?type='+A;
    return false;
    /*
    $("body").append("<div class=\"shadowDiv\"></div><div class=\"tzTip\">页面跳转中<span id=\"dtime\">3</span>...</div>");
    window.setInterval('goApi("'+A+'","'+B+'")', 1000);
    var _height = $(document).height();
    $('.shadowDiv').height(_height);*/
}

function goApi(A,B){
    var s = document.getElementById("dtime");
    if(s.innerHTML == 1){
        window.location.href=B+'apilogin/goApi?type='+A;
        return false;
    }
    s.innerHTML = s.innerHTML * 1 - 1;
}