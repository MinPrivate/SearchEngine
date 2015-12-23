/*
 * Writen by RICK <tagsworld@gmail.com>
 * 2009-11-17
 */
var Agent={ie:/MSIE/i.test(navigator.userAgent),ie7:/MSIE 7/i.test(navigator.userAgent),opera:/Opera/i.test(navigator.userAgent),ff:/Firefox/i.test(navigator.userAgent)};function ClickCov($){return encodeURIComponent($)}function hits(A,B){var _=window.event?window.event.srcElement:hits.caller.arguments[0].target,$="http://stats.eduuu.com/empty.gif";document.createElement("img").src=$+"?site="+ClickCov(window.location.hostname||"-")+"&h="+ClickCov(_.href||"-")+"&t="+ClickCov(_.innerHTML||"-")+"&i="+ClickCov(A)+"&p="+ClickCov(B||"")+"&r="+(Math.random()+"").substring(2,10)}function mbind(A,$,_){if(Agent.ie)A.attachEvent("on"+$,_,false);else A.addEventListener($,_,false)}function bindlog(){var $=document.getElementsByTagName("a"),C="http://stats.eduuu.com/click.gif?site="+ClickCov(window.location.hostname||"-");function _(){document.createElement("img").src=C+"&r="+(Math.random()+"").substring(2,10)}for(var B=0,A=$.length;B<A;B++)mbind($[B],"mousedown",_)}mbind(window,"load",bindlog)
document.write(unescape("%3Cscript src='http://files.eduu.com/chkLogin.js'  type='text/javascript'%3E%3C/script%3E"));
