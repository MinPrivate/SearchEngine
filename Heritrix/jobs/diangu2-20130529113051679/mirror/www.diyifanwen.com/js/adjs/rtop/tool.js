/*百度网盟*/
document.writeln("<iframe scrolling='no' frameborder='0' marginheight='0' marginwidth='0' width='300' height='250' src=/js/iframe/Right300X250.html></iframe>");
document.write('<div class="space5"></div>');
/*搜索模块*/
document.writeln("<div class=\"Rtitle\"><span>内容搜索<\/span><\/div>");
document.writeln("<div class=\"Rcontent\">");
function g(formname){var url = "http://www.baidu.com/baidu";if (formname.s[1].checked) {formname.ct.value = "2097152";}else {formname.ct.value = "0";}formname.action = url;return true;}
document.write("<form name=\"f1\" onsubmit=\"return g(this)\" target=\"_blank\">");
document.write("<input name=word size=\"30\" maxlength=\"100\">");
document.write("<input type=\"submit\" value=\"搜索\"><br>");
document.write("<input name=tn type=hidden value=\"bds\">");
document.write("<input name=cl type=hidden value=\"3\">");
document.write("<input name=ct type=hidden>");
document.write("<input name=si type=hidden value=\"www.diyifanwen.com\">");
document.write("<input name=s type=radio style=\"display:none;\">");
document.write("<input name=s type=radio checked  style=\"display:none;\"> ");
document.write("</form>");
document.writeln("<\/div>");
document.writeln("<div class=\"RcontentBot\"><\/div><div class=\"space5\"><\/div>");
/*Alimama*/
document.writeln("<scr"+"ipt type=\"text/javascript\"> ");
document.writeln("alimama_pid=\"mm_10028331_120124_10386835\"; ");
document.writeln("alimama_width=300; ");
document.writeln("alimama_height=250; ");
document.writeln("</scri"+"pt> ");
document.writeln("<scr"+"ipt src=\"http://a.alimama.cn/inf.js\" type=\"text/javascript\"> ");
document.writeln("</sc"+"ript>");

document.writeln("<scr"+"ipt type=\"text\/javascript\" src=\"\/js\/inc\/space5.js\"><\/scri"+"pt>");

/*Google*/
document.writeln("<script type=\"text/javascript\"><!--");
document.writeln("google_ad_client = \"pub-2970068452386351\";");
document.writeln("/* 擎天柱单元格R1 */");
document.writeln("google_ad_slot = \"9458438604\";");
document.writeln("google_ad_width = 300;");
document.writeln("google_ad_height = 250;");
document.writeln("//-->");
document.writeln("</script>");
document.writeln("<script type=\"text/javascript\"");
document.writeln("src=\"http://pagead2.googlesyndication.com/pagead/show_ads.js\">");
document.writeln("</script>");