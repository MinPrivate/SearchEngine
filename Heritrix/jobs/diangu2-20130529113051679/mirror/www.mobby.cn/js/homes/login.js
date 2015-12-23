//验证提交信息
 function login_check(){
        var username = document.getElementById('CasUsername').value;  
        var password = document.getElementById('CasPassword').value;   
        username = Trim(username, 'g');
        password = Trim(password, 'g');
            if (username == '') {
              alert('用户名不能为空！');
              return false;
            }
            if(username=='手机号/邮箱') {
              alert('用户名不能为空！');
              return false;
            }
            if (password == '') {
              alert('密码不能为空！');
              return false;
            }else{//验证用户名密码正确否 
              $.ajax({
                    type:'post',
                    url:'/users/ajaxLogin',
                    data:'username='+username+'&password='+password+"&timer="+new Date().getTime(),
                    dataType:'json',
                    success:function(json){
                         if (json.tip == 'uerror') {
                             alert('用户名或密码错误!');
                             window.location.href='/users/login';
                          }else if(json.tip == 'ok'){  
                              $('#forms').submit();
                               
                        }
                   }
                });
            return false;
         }
}       
//去除空格
function Trim(str,is_global){ 
	var result; 
	result = str.replace(/(^\s+)|(\s+$)/g,""); 
	if(is_global.toLowerCase()=="g") 
	result = result.replace(/\s/g,""); 
	return result; 
}