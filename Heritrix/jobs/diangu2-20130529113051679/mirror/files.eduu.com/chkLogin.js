var chkLogin={
    reg: /(http:\/\/files.eduu.com\/down.php\?id=\d+)/i,
    reg2: /(http:\/\/files.eduuu.com(.*?)(zip|doc|rar|ppt|docx|pdf|xlsx|gz))/i,
    hurl:'',
    //����
    EURC: function(O)
    {
        return encodeURIComponent(O);
    },

    //���¼�
    BD: function(W,A,F)
    {
       $(W).bind(A,F);
    },

    //ָ��������A���Ӱ����¼�
    bindClick:function()
    {
         $("a").map(function(){
           var url=$(this).attr('href');

           match = chkLogin.reg.exec(url);
           if(match!=null){
                if(typeof($(this).attr('hurl'))=='undefined'){
                    $(this).attr('hurl',url);
                    $(this).attr('href','#');
                    $(this).attr('target','_self');
                }
                chkLogin.BD(this,'click',chkLogin.isLogin);
           }

           match = chkLogin.reg2.exec(url);
           if(match!=null){
                if($(this).attr('onclick')==null){
                  if(typeof($(this).attr('hurl'))=='undefined'){
                        $(this).attr('hurl',url);
                        $(this).attr('href','#');
                        $(this).attr('target','_self');
                  }
                 chkLogin.BD(this,'click',chkLogin.isLogin);
                }
           }
        });

    },

    //�ж��Ƿ��ѵ�¼
    isLogin:function()
    {
        chkLogin.hurl = $(this).attr('hurl');
        var ajaxurl = 'http://files.eduu.com/chklogin.php';

        $.getJSON(ajaxurl+"?callback=?",function(data){
               var json = eval( "("+data+")" );
                 if(json.status=='1'){
                    chkLogin.downloadDiv(chkLogin.hurl);
                    //window.location.href=hurl;
                 }else{
                    chkLogin.showDiv();
                 }
         });
    },

    //��¼��֤
    login:function()
    {
        if($('#uname').val()==''){
            alert('�������û�����');
            $('#uname').focus();
            return false;
        }

        if($('#upass').val()==''){
            alert('���������룡');
            $('#upass').focus();
            return false;
        }

        if($('#remember').attr("checked")==true){
            var islogin=1;
            if(($('#uname').val()!="") && ($('#upass').val()!=""))
            {
                document.cookie ="username="+$('#uname').val();
                document.cookie ="passwd="+$('#upass').val();
            }
        }else{
            var islogin=0;
            document.cookie ="username=";
            document.cookie ="passwd=";
        }


        var ajaxurl = "http://reg.eduu.com/login/loginpost?logtype=0&islogin="+islogin+"&uname="+chkLogin.EURC(jQuery("#uname").val())+"&passwd="+chkLogin.EURC(jQuery("#upass").val())+"&callback=?";
        $.getJSON(ajaxurl,function(data){
            var json = eval( "("+data+")" );
                 if(json.status=='1'){
                    $('#logondiv').hide();
                    chkLogin.downloadDiv(chkLogin.hurl);
                 }else{
                    alert(json.msg);
                 }
            });

    },

     //�رյ�¼����
    closeDiv:function()
    {
        $('#logondiv').hide();
    },

     //�رյ�¼����
    downloadDiv:function(url)
    {
        if($('#downloadDiv').length>0){
            $('#downloadDiv').attr('src',url);
        }else{
            var ddiv='<iframe id="downloadDiv" name="downloadDiv" src="'+url+'" style="display:none"></iframe>';
            $(document.body).append(ddiv);
        }
    },

    //������¼����
    showDiv:function(e)
    {
        var loginDiv='';
        if($('#logondiv').length>0){
            $('#logondiv').show();
        }else{
            loginDiv+='<div id="logondiv" style="z-index:1000; background:#999; padding:10px; width:350px;position:fixed;top:200px;left:30%;_position:absolute;_left:30%;_top:expression(eval(document.documentElement.scrollTop)+200);">';
            loginDiv+='    <div>';
            loginDiv+='        <h2 style="background:url(http://img.eduuu.com/website/public_images/login_tc/tc_login_tit.gif) repeat-x; height:34px; line-height:34px; padding:0 15px; font-size:14px; color:#fff;"><a style="float:right; margin-top:12px; cursor:pointer;" onclick="chkLogin.closeDiv()"><img src="http://img.eduuu.com/website/public_images/login_tc/tc_login_close.gif" /></a>���ȵ�¼...</h2>';
            loginDiv+='        <div style="background:#fff;">';
            loginDiv+='            <h3 style="background:#FEFEDD; line-height:29px; height:29px; border-bottom:1px solid #F4E5B8; color:#333; text-indent:1em; font-weight:normal;">���β�����Ҫ��¼�������������������ʺź�������е�¼��</h3>';
            loginDiv+='            <div style="padding:10px 70px 20px;">';
            loginDiv+='            <form action="" method="post" onsubmit="return false;">';
            loginDiv+='                <p style="padding-top:15px;">�û����� <input type="text" id="uname" name="username" style="width:150px; height:18px; line-height:18px; border:1px solid #ABADB3; vertical-align:middle;" /></p>';
            loginDiv+='                <p style="padding-top:15px;">��&nbsp;&nbsp;�룺 <input type="password" id="upass" name="password" style="width:150px; height:18px; line-height:18px; border:1px solid #ABADB3;vertical-align:middle;" /></p>';
            loginDiv+='                <p style="padding:15px 0 0 54px;"><input type="checkbox" value="1" id="remember" style="vertical-align:middle;" /> ��ס����</p>';
            loginDiv+='                <p style="padding:15px 0 0 54px;"><input type="image" src="http://img.eduuu.com/website/public_images/login_tc/logButton_03.gif" id="logButton" onclick="chkLogin.login()" style="vertical-align:middle;" />&nbsp;&nbsp;<span style="font-size:14px;"><a href="http://reg.eduu.com/register" target="_blank" style="color:#ff6600;">���ע��</a></span></p>';
            loginDiv+='            </form>';
            loginDiv+='            </div>';
            loginDiv+='        </div>';
            loginDiv+='    </div>';
            loginDiv+='</div>';

        $(document.body).append(loginDiv);
        }
        if(document.cookie !="")
        {
            $('#uname').val(chkLogin.getCookie('username'));
            $('#upass').val(chkLogin.getCookie('passwd'));
        }
    },
    
    //��ȡָ������COOKIEֵ
    getCookie:function(objName)
    {
        var arrStr = document.cookie.split(";");
        for(var i = 0;i < arrStr.length;i++)
        {
            var temp = arrStr[i].split("=");
            v=chkLogin.trim(temp[0]);
            if(objName==v)
                {return temp[1];}
        }
    },
    //ȥ���ִ���β�ո����ַ�
    trim:function(str){  
        return str.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'');  
    }
}
chkLogin.BD(window,"load",chkLogin.bindClick);