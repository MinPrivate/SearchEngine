document.write("<iframe id='diFangEduIframe' style='display:none;' width='950' height='441' frameborder='0' scrolling='no'></iframe>");

//remote_ip_info.province	= '�Ĵ�';
if (remote_ip_info.province!='undefined') {
	if(remote_ip_info.province == '�Ĵ�'){
		document.getElementById('diFangEduIframe').src	= "http://sc.sina.com.cn/iframe/285/2011/0426/1.html";
		document.getElementById('diFangEduIframe').style.display	= 'block';
	}
	if(remote_ip_info.province == '����'){
		document.getElementById('diFangEduIframe').src	= "http://fj.sina.com.cn/iframe/edu/fj.html";
		document.getElementById('diFangEduIframe').style.display	= 'block';
	}
	if(remote_ip_info.province == '����'){
		document.getElementById('diFangEduIframe').src	= "http://henan.sina.com.cn/iframe/827/2011/0429/1.html";
		document.getElementById('diFangEduIframe').style.display	= 'block';
	}
	if(remote_ip_info.province == '����'){
		document.getElementById('diFangEduIframe').src	= "http://ah.sina.com.cn/iframe/827/2011/0429/1.html";
		document.getElementById('diFangEduIframe').style.display	= 'block';
	}
	if(remote_ip_info.province == '�ӱ�'){
		document.getElementById('diFangEduIframe').src	= "http://hebei.sina.com.cn/iframe/458/2012/1107/1.html";
		document.getElementById('diFangEduIframe').style.display	= 'block';
	}
	if(remote_ip_info.province == '����'){
		document.getElementById('diFangEduIframe').src	= "http://sx.sina.com.cn/iframe/232/2012/1105/1.html";
		document.getElementById('diFangEduIframe').style.display	= 'block';
	}
	if(remote_ip_info.province == '����'){
		document.getElementById('diFangEduIframe').src	= "http://ln.sina.com.cn/iframe/320/2012/1105/5.html";
		document.getElementById('diFangEduIframe').style.display	= 'block';
	}
	if(remote_ip_info.province == '�㽭'){
		document.getElementById('diFangEduIframe').src	= "http://zj.sina.com.cn/iframe/eduip/index.html";
		document.getElementById('diFangEduIframe').style.display	= 'block';
	}
//	if(remote_ip_info.province == '�Ϻ�'){
//		document.getElementById('diFangEduIframe').src	= "http://sh.sina.com.cn/iframe/377/2011/0825/1.html";
//		document.getElementById('diFangEduIframe').style.display	= 'block';
//	}
}