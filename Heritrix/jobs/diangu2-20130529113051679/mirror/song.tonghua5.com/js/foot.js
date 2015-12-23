document.writeln('<div id="gotop"><span id="position_fav" title="收藏此页"></span><span id="position_top" title="返回顶部"></span></div>');
document.writeln("<!-- Baidu Button BEGIN -->");
document.writeln("<script type=\"text\/javascript\" id=\"bdshare_js\" data=\"type=slide&amp;img=2\" ><\/script>");
document.writeln("<script type=\"text\/javascript\" id=\"bdshell_js\"><\/script>");
document.writeln("<script type=\"text\/javascript\">");
document.writeln("	document.getElementById(\"bdshell_js\").src = \"http:\/\/bdimg.share.baidu.com\/static\/js\/shell_v2.js?t=\" + new Date().getHours();");
document.writeln("<\/script>");
document.writeln("<!-- Baidu Button END -->");
function GO(o){
	return document.getElementById(o);
}
GO('position_top').onclick=function(){
	window.scroll('0','0');
}

$(window).scroll( function() {
	var doc=document,
		s_top=doc.body.scrollTop||(doc.documentElement&&doc.documentElement.scrollTop);
	s_top==0?GO('gotop').style.display='none':GO('gotop').style.display='block';
} );
