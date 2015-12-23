/*Google 链接单元广告
document.writeln("<script type=\"text\/javascript\"><!--");
document.writeln("google_ad_client = \"ca-pub-2970068452386351\";");
document.writeln("\/* 通栏链接单元 *\/");
document.writeln("google_ad_slot = \"2413403068\";");
document.writeln("google_ad_width = 468;");
document.writeln("google_ad_height = 15;");
document.writeln("\/\/-->");
document.writeln("<\/script>");
document.writeln("<script type=\"text\/javascript\"");
document.writeln("src=\"http:\/\/pagead2.googlesyndication.com\/pagead\/show_ads.js\">");
document.writeln("<\/script>")*/

document.write("<div id=\"bdshare\" class=\"bdshare_t bds_tools get-codes-bdshare\" style=\"float:right;margin-top:-5px;margin-bottom:-5px;width:175px;\">");
document.write("<a class=\"bds_qzone\"></a>");
document.write("<a class=\"bds_tsina\"></a>");
document.write("<a class=\"bds_tqq\"></a>");
document.write("<a class=\"bds_renren\"></a>");
document.write("<a class=\"bds_kaixin001\"></a>");
document.write("<span class=\"bds_more\" style=\"width:30px;margin-top:0px;\">更多</span>");
document.write("</div>");
document.write("<div style=\"float:right;color:#858585; font-size:12px;\">分享到：</div>");


function $(e){return document.getElementById(e)}
function sw(j,str){for(i=1;i<8;i++){$(i).className=''}$(j).className='on';$('ft').value=str;}
function trim(str){return str.replace(/(^\s*)|(\s*$)/g,"");}
function checkform(){if(trim($('k').value)=='' || trim($('k').value)=='请输入关键词...'){$('k').focus();$('k').value='';return false;}else return true;}
reval  = "";
reval += "<form name=\"f1\" id=\"f1\" action=\"http://www.baidu.com/baidu\" target=\"_blank\" onsubmit=\"return checkform()\">";
reval += "<span id=\"gos\"></span>";
reval += "<span id=\"kspan\">";
reval += "<input name=word  id=\"k\" value=\"请输入关键词...\" maxlength=\"50\" onclick=\"javascript:if(this.value=='请输入关键词...') this.value='';\" onblur=\"javascript:if(this.value=='') this.value='请输入关键词...';\"></span>";
reval += "<span id=\"bspan\"><input type=\"submit\" value=\" \" id=\"button\"></span>";
reval += "<input name=tn type=hidden value=\"bds\"><input name=cl type=hidden value=\"3\"><input name=ct type=hidden value=\"2097152\"><input name=si type=hidden value=\"www.diyifanwen.com\"><input name=sts type=hidden value=\"www.diyifanwen.com\">";
reval += "</form>";

var divA=$("ArtTl");
if(divA!=null){
var oDiv=document.createElement("div");
oDiv.id="sdiv";
oDiv.innerHTML=reval;
divA.insertBefore(oDiv,divA.childNodes[0]); 
}