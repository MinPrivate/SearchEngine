//20130131--baidu tongji code
var _gaq = _gaq || [],_gcc =[{domain:'none',key:'UA-15078816-1',baidu:''},{domain:'eduu.com',key:'UA-25393064-1',baidu:'0cfa71e057214ba5958c4a66fb67ef0c'},{domain:'aoshu.com',key:'UA-25434559-1',baidu:'097b4d986b1bd8a9bffe2dd3212a9975'},{domain:'youjiao.com',key:'UA-25435844-1',baidu:'e4ac2777566a27d6799c9c53047c4ea5'},{domain:'zhongkao.com',key:'UA-25437150-1',baidu:'6ee9ac718f06597da50c6f2290c89d86'},{domain:'gaokao.com',key:'UA-25437151-1',baidu:'aa27487f630124a75eaf9c8ac900811c'},{domain:'yingyu.com',key:'UA-25432568-1',baidu:'c2f205de388aa277b06fa54aff6dbe82'},{domain:'zuowen.com',key:'UA-25432568-2',baidu:'05d39f4d0b6d45b03bf3bb358aba968a'},{domain:'yuer.com',key:'UA-25435844-2',baidu:'709e127c0fcb0536c9e195b12c55dc3d'},{domain:'liuxue.com',key:'UA-25432568-3',baidu:'7678fbba9e2d1080665e0811f7d68b2d'},{domain:'eduuu.com',key:'UA-25432568-4',baidu:'a45844418622204e04ccc883c5ff1741'}],gccHost;
function getDomain(){var match = window.location.href.match(/.*\:\/\/([^\/]*).*/);if(typeof match != "undefined" && null != match){return match[1];}return null;}gccHost=!document.domain ? getDomain() : document.domain;if (null!==gccHost){var p = gccHost.indexOf('.');gccHost=p > 0 ? gccHost.substr(p+1) : gccHost;}for (var _k in _gcc ){if (_gcc[_k].domain==gccHost){gccHost=_gcc[_k];break;}};if(typeof gccHost !='object'){gccHost=_gcc[0];}

_gaq.push(['_setAccount', gccHost.key]);
_gaq.push(['_setDomainName', '.'+gccHost.domain]);
_gaq.push(['_addOrganic', 'baidu', 'word']);
_gaq.push(['_addOrganic', 'google', 'q']);
_gaq.push(['_addOrganic', 'soso', 'w']);
_gaq.push(['_addOrganic', '3721', 'name']);
_gaq.push(['_addOrganic', 'youdao', 'q']);
_gaq.push(['_addOrganic', '118114', 'kw']);
_gaq.push(['_addOrganic', 'vnet', 'kw']);
_gaq.push(['_addOrganic', 'so.360', 'q']);
_gaq.push(['_addOrganic', 'sogou', 'query']);
var preg = '/e/([0-9]+)/';
var dstr = document.URL.toLowerCase().match(preg);
if(dstr!=null){
	_gaq.push(['_setCustomVar',5,'Time',dstr[1],3]);
}
if(document.URL.toLowerCase().search('/e/') >0) {var List='_page';}else{var List='';};
if(typeof(EDUU_GRADE) != 'undefined') { _gaq.push(['_setCustomVar',4,'UserType',EDUU_GRADE,1]); }
if(typeof(EDUU_UIN) != 'undefined') { _gaq.push(['_setCustomVar',3,UIN,EDUU_UIN,2]); }
if(typeof(EDUU_PAGE) != 'undefined') { _gaq.push(['_setCustomVar',5,'BBSPAGE',EDUU_PAGE,3]); }
_gaq.push(['_trackPageview', (typeof EDUU_GKEY == 'undefined' ? '' : EDUU_GKEY+List)]);
_gaq.push(['_trackPageLoadTime']);

//all
if (gccHost.domain!='none'){
	_gaq.push(['a._setAccount', 'UA-15078816-1']);
	_gaq.push(['a._setDomainName', 'none']);
	_gaq.push(['a._addOrganic', 'baidu', 'word']);
	_gaq.push(['a._addOrganic', 'google', 'q']);
	_gaq.push(['a._addOrganic', 'soso', 'w']);
	_gaq.push(['a._addOrganic', '3721', 'name']);
	_gaq.push(['a._addOrganic', 'youdao', 'q']);
	_gaq.push(['a._addOrganic', '118114', 'kw']);
	_gaq.push(['a._addOrganic', 'vnet', 'kw']);
	_gaq.push(['a._addOrganic', 'so.360', 'q']);
	_gaq.push(['a._addOrganic', 'sogou', 'query']);
	_gaq.push(['a._setVar', (typeof EDUU_GRADE == 'undefined' ? '' : EDUU_GRADE)]);
	_gaq.push(['a._setAllowLinker', true]);
	_gaq.push(['a._trackPageview', (typeof EDUU_GKEY == 'undefined' ? '' : EDUU_GKEY)]);

	var pname=window.location.pathname || '';
	if (pname.indexOf('404.html')>=0 && document.referrer.length>=0){
		_gaq.push(['a._trackEvent','404',document.referrer]);
	}

	_gaq.push(['a._trackPageLoadTime']);
}

jQuery(function(){
	jQuery('#eduuTopNav a').click(function(){ _gaq.push(['_trackEvent', 'nav', $(this).text() , document.domain],['a._trackEvent', 'nav', $(this).text() , document.domain]); });
    jQuery('.other-tj a').click(function(){ _gaq.push(['_trackEvent', 'seo-related', document.domain],['a._trackEvent', 'seo-related', document.domain]); });
    
	jQuery('a').bind("click", function(){baiduAD(this);});
	jQuery("iframe").each(function(){
		if(this.id.indexOf('baidu_clb_slot_iframe') >= 0){
			try{
				jQuery(this).dcontents().find('a').bind("click", function(){
					baiduAD(this);
				});
			}catch(e){}
		}
	});

	//Track Events
	jQuery('[xga]').click( function(){ _gaq.push(['_trackEvent', 'BBS_User ',jQuery(this).attr('xga')]); } );

	function baiduAD(o){
		if(o.href.indexOf('http://www.baidu.com/cb.php') >= 0){
			var _gkey = (typeof EDUU_GKEY == 'undefined' ? '/empty' : EDUU_GKEY);
			_gkey = (_gkey.indexOf('/') == 0) ? '/AD'+_gkey : '/AD/'+_gkey;
			_gaq.push(['_trackEvent','AD','adm',_gkey ],['a._trackPageview', _gkey]);
		}else if (o.href.indexOf('http://www.baidu.com/cpro.php') >= 0){
			var _gkey = (typeof EDUU_GKEY == 'undefined' ? '/empty' : EDUU_GKEY);
			_gkey = (_gkey.indexOf('/') == 0) ? '/AD'+_gkey : '/AD/'+_gkey;
			_gaq.push(['_trackEvent','AD','union',_gkey ],['a._trackPageview', _gkey]);
		}
	}
});

(function(){var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src='http://www.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();

//Baidu JScode
if (gccHost.baidu.length==32){
	var _hmt = _hmt || [];
	(function() {
	var hm = document.createElement("script");
	hm.src = "//hm.baidu.com/hm.js?"+gccHost.baidu;
	var s = document.getElementsByTagName("script")[0]; 
	s.parentNode.insertBefore(hm, s);
	})();
}