// JavaScript Document
//免费短信
 function isVar(A){
	return (typeof A == 'undefined' || A==='' || A===null) ? false : true; 
}

 function strLen(A){
	return A.replace(/[^x00-xff]/g, 'xx').length;
 }

function setImg(g,v){
	v=isVar(v) ? v : $(g).attr('src');
	if(typeof(v)=='undefined') return false;
	var po=v.indexOf('?');
	if (po>0){
		v=v.substring(0,po);
	}
	$(g).get(0).src= v + '?t='+Math.random();
	return false;
}
$('#sendsms').bind("click",function(){
	var n_len = strLen($.trim($("#uname").val()));
	var a_len = strLen($("#area").val());
	var c_len = strLen($("#locheck").val());
	var m_len = strLen($("#mobile").val());

	if(n_len==0) {
		art.dialog({ title: '提示', content: "请输入用户名!",time: 1 });
		return false;
	}
	if(m_len == 11) {
		var re=/^1[358]{1}\d{9}$/;
						var m=$("#mobile").val();
		if(re.exec(m)==null){
			art.dialog({ title: '提示', content: "请输入正确的手机号码!",time: 1 });
			return false;
		}
	}else{
		art.dialog({ title: '提示', content: "请输入正确的手机号码!!",time: 1 });
		return false;
	}
	if(a_len==0) {
		art.dialog({ title: '提示', content: "请输入校区名称!",time: 1 });
		return false; 
	}
	if(c_len==0) { 
		art.dialog({ title: '提示', content: "请输入验证码!",time: 1 });
		return false;
	}

	if (c_len<8){
		art.dialog({ title: '提示', content: "验证码输入错误，请重试!",time: 1 });
		return false;
	}
   var locheck = encodeURIComponent($("#locheck").val());
   var name = encodeURIComponent($("#uname").val());
   var area = encodeURIComponent($("#area").val());
   url2="http://applib.eduu.com/sms/index/sendsms?tp=10000&code="+locheck+'&name='+name+'&mobile='+$("#mobile").val()+'&area='+area+'&t='+Math.random()+"&callback=?";
   $.getJSON(url2,function(data){
			var json = eval( "("+data+")" );
			if(json.status == '1'){
				art.dialog({ title: '提示', content: "地址已发送到手机，请注意查收!",time: 1 });
				$('.zkArea').removeClass('jxPyOn2');
				setImg('#ckcode');
				$('#locheck').val('');
				$('#area').val('');
			}else if(json.status == -1){
				art.dialog({ title: '提示', content: "请输入正确手机号码!",time: 1 });
			}else if(json.status == -2){
				art.dialog({ title: '提示', content: "校区名称不能为空!",time: 1 });
			}else if(json.status == -3){
				art.dialog({ title: '提示', content: "校区地址没有查到!",time: 1 });
			}else if(json.status == -4){
				art.dialog({ title: '提示', content: "验证码输入错误，请重试!!",time: 1 });
			}
	});
});
