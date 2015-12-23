/* 475-17-4  2009-09-25 16:43:44 */

/***编辑区 begin***/
var SinaDotMEReporterJason = {
  "t":["2009-08-01","2009-10-03"],//投放开始日期，投放结束日期[格式:2009-01-01，不限制为空，包含所填日期当日]
  "c":"http://news.sina.com.cn/iframe/news/sinareporter_v2.html",//内容地址 http://news.sina.com.cn/iframe/news/sinareporter.html
  "m":[9,11,2],//早快报设置[开始时间(点)/结束时间(点)/ip限制数(次)]
  "e":[14,17,2],//早快报设置[开始时间(点)/结束时间(点)/ip限制数(次)]
  "mt":"http://840.adsina.allyes.com/main/adfshow?user=AFP6_for_SINA|CPMAD2|2009_guoqing_zaobao&db=sina",//早快报曝光监测
  "et":"http://841.adsina.allyes.com/main/adfshow?user=AFP6_for_SINA|CPMAD2|2009_guoqing_wanbao&db=sina",//晚快报曝光监测
  "b":[//背景图[地址/曝光监测]
       ["http://d4.sina.com.cn/200908/25/186892_csair_bg.swf","http://865.adsina.allyes.com/main/adfshow?user=AFP6_for_SINA|guoqingxibao|nanhang_beijing&db=sina"],//第一轮背景广告[南航]
	   ["http://d3.sina.com.cn/200908/25/186895_wanglaoji_bg.swf","http://867.adsina.allyes.com/main/adfshow?user=AFP6_for_SINA|guoqingxibao|wanglaoji_beijing&db=sina"],//第二轮背景广告[王老吉]
	   ["http://d2.sina.com.cn/200908/28/187459_meidi_bg.swf","http://869.adsina.allyes.com/main/adfshow?user=AFP6_for_SINA|guoqingxibao|meidi_beijing&db=sina"],//第三轮背景广告[美的]
	   ["http://d2.sina.com.cn/200909/15/190403_background.swf","http://871.adsina.allyes.com/main/adfshow?user=AFP6_for_SINA|guoqingxibao|xingye_beijing&db=sina"],//第四轮背景广告[兴业]
  ],
  "p":[//左侧按钮链接
       ["http://sina.allyes.com/main/adfclick?db=sina&bid=164830,207797,212809&cid=0,0,0&sid=200890&advid=4982&camid=29167&show=ignore&url=http://cs.sina.com.cn/minisite/csair/index.html"],//第一轮按钮链接[南航]
	   ["http://sina.allyes.com/main/adfclick?db=sina&bid=165558,207827,212839&cid=0,0,0&sid=200920&advid=6177&camid=29340&show=ignore&url=http://ad.cn.doubleclick.net/clk;216942880;40032847;h?http://www.wlj-jqsf.com"],//第二轮按钮链接[王老吉]
	   ["http://sina.allyes.com/main/adfclick?db=sina&bid=167948,210837,215850&cid=0,0,0&sid=203973&advid=5604&camid=29857&show=ignore&url=http://www.midea.com.cn/midea2008/60.html"],//第三轮按钮链接[美的]
	   ["http://sina.allyes.com/main/adfclick?db=sina&bid=170713,213711,218727&cid=0,0,0&sid=206873&advid=4213&camid=30476&show=ignore&url=http://afp.adpolestar.net/adpolestar/wayl/;ad=0C78ED8E_C479_98D6_5AB9_DC9824975A0D;ap=0;pu=csadbj;/?http://www.cib.com.cn/netbank/cn/index.html"],//第四轮按钮链接[兴业]
  ],
  "s":[//关闭广告[地址/链接(仅图片)/曝光监测]
       ["http://d3.sina.com.cn/200908/25/186893_csair_close.swf","","http://866.adsina.allyes.com/main/adfshow?user=AFP6_for_SINA|guoqingxibao|nanhang_guanbi&db=sina"],//第一轮关闭广告[南航]
	   ["http://d2.sina.com.cn/200908/25/186896_wanglaoji_close.swf","","http://868.adsina.allyes.com/main/adfshow?user=AFP6_for_SINA|guoqingxibao|wanglaoji_guanbi&db=sina"],//第二轮关闭广告[王老吉]
	   ["http://d2.sina.com.cn/200909/15/190358_meidi_closea-0914.swf","","http://870.adsina.allyes.com/main/adfshow?user=AFP6_for_SINA|guoqingxibao|meidi_guanbi&db=sina"],//第三轮关闭广告[美的]
	   ["http://d3.sina.com.cn/200909/15/190406_close.swf","","http://872.adsina.allyes.com/main/adfshow?user=AFP6_for_SINA|guoqingxibao|xingye_guanbi&db=sina"],//第四轮关闭广告[兴业]
  ]
};
/***编辑区 end***/
document.write('<script type="text/javascript" language="javascript" src="http://d3.sina.com.cn/shh/tianyi/mer/js/SinaDotMEReporterInit_v2.js"></script>');