// JavaScript Document
function isEmail(strEmail) {
	if(strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1){
		document.form1.submit();
	}else{
		alert('填写的邮件地址不正确！');
		return false;
	}
}