try {

var mtLabs = [{"country":"中国", "province":"广西", "city":"", "district":"", "isp":"", "type":"", "desc":"", "data":{"lab01":"<a class=\"linkRed\" target=\"_blank\" href=\"http://weibo.com/\">[微博]</a> <a class=\"linkRed\" target=\"_blank\" href=\"http://edu.sina.com.cn/tblog/2011-03-29/43.html\">广西重要媒体</a> <a class=\"linkRed\" target=\"_blank\" href=\"http://edu.sina.com.cn/tblog/2011-03-24/41.html\">柳州晚报</a> <a class=\"linkRed\" target=\"_blank\" href=\"http://edu.sina.com.cn/tblog/2011-03-29/42.html\">广西综艺频道</a>"}},	{"country":"中国", "province":"安徽", "city":"", "district":"", "isp":"", "type":"", "desc":"", "data":{"lab01":"<a class=\"linkRed\" target=\"_blank\" href=\"http://weibo.com/\">[微博]</a> <a class=\"linkRed\" target=\"_blank\" href=\"http://weibo.com/ahsjyt\">安徽省教育厅</a> <a class=\"linkRed\" target=\"_blank\" href=\"http://weibo.com/xinanwanbao\">新安晚报</a> <a class=\"linkRed\" target=\"_blank\" href=\"http://weibo.com/pub/star/g/jhcb\">江淮晨报</a>"}},{"country":"", "province":"", "city":"", "district":"", "isp":"", "type":"", "desc":"", "data":{"lab01":""}}];
if (remote_ip_info.ret==1) {
	for (var i in mtLabs) {
		if (mtLabs[i].province == remote_ip_info.province) {
			if (mtLabs[i].data.lab01!='')
				document.getElementById('random_wb_0').innerHTML = mtLabs[i].data.lab01;

		}
	}
}

} catch (e) {};