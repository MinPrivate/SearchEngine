try {

var mtLabs = [{"country":"�й�", "province":"����", "city":"", "district":"", "isp":"", "type":"", "desc":"", "data":{"lab01":"<a class=\"linkRed\" target=\"_blank\" href=\"http://weibo.com/\">[΢��]</a> <a class=\"linkRed\" target=\"_blank\" href=\"http://edu.sina.com.cn/tblog/2011-03-29/43.html\">������Ҫý��</a> <a class=\"linkRed\" target=\"_blank\" href=\"http://edu.sina.com.cn/tblog/2011-03-24/41.html\">������</a> <a class=\"linkRed\" target=\"_blank\" href=\"http://edu.sina.com.cn/tblog/2011-03-29/42.html\">��������Ƶ��</a>"}},	{"country":"�й�", "province":"����", "city":"", "district":"", "isp":"", "type":"", "desc":"", "data":{"lab01":"<a class=\"linkRed\" target=\"_blank\" href=\"http://weibo.com/\">[΢��]</a> <a class=\"linkRed\" target=\"_blank\" href=\"http://weibo.com/ahsjyt\">����ʡ������</a> <a class=\"linkRed\" target=\"_blank\" href=\"http://weibo.com/xinanwanbao\">�°���</a> <a class=\"linkRed\" target=\"_blank\" href=\"http://weibo.com/pub/star/g/jhcb\">��������</a>"}},{"country":"", "province":"", "city":"", "district":"", "isp":"", "type":"", "desc":"", "data":{"lab01":""}}];
if (remote_ip_info.ret==1) {
	for (var i in mtLabs) {
		if (mtLabs[i].province == remote_ip_info.province) {
			if (mtLabs[i].data.lab01!='')
				document.getElementById('random_wb_0').innerHTML = mtLabs[i].data.lab01;

		}
	}
}

} catch (e) {};