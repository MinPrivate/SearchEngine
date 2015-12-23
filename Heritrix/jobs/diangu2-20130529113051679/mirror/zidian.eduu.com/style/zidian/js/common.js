 function checkURL(URL){//检查汉字与数字
	var str=URL;
	//下面的代码中应用了转义字符"\"输出一个字符"/"
	var Expression=/[0-9]|[\u4e00-\u9fa5]/g;
	var objExp=new RegExp(Expression);
	if(objExp.test(str)==true){
	   return true;
	}else{
	   return false;
     }
}

function isDigit(URL){//检查是否为数字
	var str=URL;
	//下面的代码中应用了转义字符"\"输出一个字符"/"
	var Expression=/^\d+$/;
	var objExp=new RegExp(Expression);
	if(objExp.test(str)==true){
	   return true;
	}else{
	   return false;
     }
}

function ischeckt(URL){//检查是否为1~5的数字
	var str=URL;
	//下面的代码中应用了转义字符"\"输出一个字符"/"
	 var Expression=/^[1-5]+$/;
	//!/[06-9\D]/
	var objExp=new RegExp(Expression);
	if(objExp.test(str)==true){
	   return true;
	}else{
	   return false;
     }
}
 function checkWORD(URL){//检查是否为汉字
	var str=URL;
	//下面的代码中应用了转义字符"\"输出一个字符"/"
	var Expression=/[\u4e00-\u9fa5]/g;
	var objExp=new RegExp(Expression);
	if(objExp.test(str)==true){
	   return true;
	}else{
	   return false;
     }
}
function checkName()
{
	var name = $('#name').val();
	if(name == ''){
		alert('搜索内容不能为空！');
		return false;
	}

	/*else{
	  if(!checkURL(name) || (checkWORD(name) && name.length >1)){
	    alert('请你输入一个汉字或汉字的笔顺编号搜索！');
            document.getElementById('name').value='';
	    document.getElementById('name').focus();
	    return false;
        }
           if(isDigit(name) && !ischeckt(name)){

	     alert('你输入的笔顺编号有误，请重新输入！！');
             document.getElementById('name').value='';
	     document.getElementById('name').focus();
	     return false;
	  }
	}*/
	return true;
}
//收藏
	function addFav(url, title){
		if (window.sidebar/* FF */) {
			window.sidebar.addPanel(title, url, "");

		}
		else
			if (document.all/* IEs */) {
				var external = window.external;
				external.AddFavorite(url, title);
			}
			else
				if (window.opera && window.print) {
					return true;
				}
	}
function scroll(a,b,c,d,e,f){
   var EACH = function(o,fn){for(var i=0;i<o.length;i++){fn.call(o[i],i,o)}}
   var GF = function(o,t){var s=o.getElementsByTagName(t),R=[];EACH(s,function(i,v){s[i].parentNode == o && R.push(s[i]);}); return R;}
   var G = function(x,y){return GF(document.getElementById(x),y);}
   var T = G(a,b), S=G(c,d);_show(0);
   EACH(T,function(i,o){T[i].onmouseover=(function(n){return function(){_show(n);}})(i);});
   function _show(n){EACH(T,function(i,o){S[i].style.display="none";T[i].className=f});T[n].className=e; S[n].style.display="block";}
}

$(function(){
	$('#bihua li.active .layercent').css({
		top:$('#bihua li.active .layertit').offset().top
	});
	setPosition($('#bihua li.active')[0]);
	$('#bihua li').hover(
		function(){
			$(this).addClass('active').siblings('li').removeClass('active');
			setPosition($(this));
		},
		function(){
			$(this).removeClass('active');
		}
	);
});
function setPosition(d){
	var _i=navigator.userAgent.toLowerCase().indexOf("msie 7")>-1?25:26
	var _top=$(d).find('.layertit').offset().top+_i,
		_left=$('.bihua').offset().left+16,
		_box=$(d).find('.layercent');
	_box.css({
		top:_top,
		left:_left
	});
}

    $(function(){
        $("a[disabled]").addClass("disable");//添加新的class 注意这里不会覆盖标签原有的class
    });

function clickEvent(oEvent){
    var oEvent = oEvent ? oEvent : window.event;
    oEvent.preventDefault();//阻止超链接
    var tar;
    if(navigator.appName=="Microsoft Internet Explorer"){
      tar = oEvent.srcElement;
    }else{
      tar=oEvent.target;
    }
    if(tar.getAttribute("disabled")){
      return false;
    }
}

function isVar(A){
	return (typeof A == 'undefined' || A==='' || A===null) ? false : true; 
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