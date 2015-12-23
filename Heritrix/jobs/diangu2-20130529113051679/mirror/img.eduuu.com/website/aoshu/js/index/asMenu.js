/**
 * @author Jay
 */
function asMenu(){
	var _box=jQuery('.navbox_new'),	// 顶部菜单
		_menu=jQuery('#tag_nav'),		// 一级栏目
		_sub=jQuery('#nav_con'),		// 二级栏目
		_url=window.location.href,		// url地址
		_index,_parent,_child,
		_data=[
			/* id:本身
			 * sid:本身父级索引
			 * tid:目标索引
			 * url:栏目url地址
			 * title:栏目名称
			 */
			 
			{id:1,sid:0,tid:4,title:'行程问题',	url:'http://www.aoshu.com/tiku/xingcheng/'},
			{id:2,sid:0,tid:4,title:'数论问题',	url:'http://www.aoshu.com/tiku/shulun/'},
			{id:3,sid:0,tid:4,title:'几何问题',	url:'http://www.aoshu.com/tiku/jihe/'},
			{id:4,sid:0,tid:4,title:'计数问题',	url:'http://www.aoshu.com/tiku/jishu/'},
			{id:5,sid:0,tid:4,title:'应用题',	url:'http://www.aoshu.com/tiku/yingyongti/'},
			{id:6,sid:0,tid:4,title:'计算问题',	url:'http://www.aoshu.com/tiku/jisuan/'},
			{id:7,sid:0,tid:4,title:'杂题',	url:'http://www.aoshu.com/tiku/zati/'},
			{id:8,sid:0,tid:0,title:'最新专题',	url:'http://www.aoshu.com/zhuanti/'},
			{id:9,sid:0,tid:6,title:'课外读物',	url:'http://www.aoshu.com/ziliao/fudao/shuji/'},
			{id:10,sid:0,tid:6,title:'书籍',	url:'http://www.aoshu.com/ziliao/fudao/shuji/'},
			{id:11,sid:0,tid:3,title:'题库',	url:'http://www.aoshu.com/tiku/'},
			{id:12,sid:0,tid:3,title:'华杯赛',	url:'http://www.aoshu.com/aosai/hbs/'},
			{id:13,sid:0,tid:3,title:'希望杯',	url:'http://www.aoshu.com/aosai/xwb/'},
			{id:14,sid:0,tid:3,title:'走美杯',	url:'http://www.aoshu.com/aosai/zmb/'},
			{id:15,sid:0,tid:3,title:'迎春杯',	url:'http://www.aoshu.com/aosai/ycb/'},
			{id:16,sid:0,tid:3,title:'学而思杯',	url:'http://www.aoshu.com/aosai/xesb/'},
			{id:17,sid:0,tid:8,title:'小学试题',	url:'http://www.aoshu.com/xxst/'},
			{id:18,sid:0,tid:8,title:'语文试题',	url:'http://www.aoshu.com/ziliao/ywst/'},
			{id:19,sid:0,tid:8,title:'英语试题',	url:'http://www.aoshu.com/ziliao/yyst/'},
			{id:20,sid:0,tid:8,title:'数学试题',	url:'http://www.aoshu.com/ziliao/sxst/'},
			{id:21,sid:0,tid:5,title:'语文课件',	url:'http://www.aoshu.com/ziliao/yuwenkejian/'},
			{id:22,sid:0,tid:5,title:'语文教案',	url:'http://www.aoshu.com/ziliao/yuwenjiaoan/'},
			
			//北京奥数导航
			{id:23,sid:0,tid:3,title:'华杯赛',	url:'http://bj.aoshu.com/aosai/hbs/'},
			{id:24,sid:0,tid:3,title:'希望杯',	url:'http://bj.aoshu.com/aosai/xwb/'},
			{id:25,sid:0,tid:3,title:'走美杯',	url:'http://bj.aoshu.com/aosai/zmb/'},
			{id:26,sid:0,tid:3,title:'迎春杯',	url:'http://bj.aoshu.com/aosai/ycb/'},
			{id:27,sid:0,tid:3,title:'学而思杯',	url:'http://bj.aoshu.com/aosai/xesb/'}
			
		];
		
	// 当前栏目
	var _current=_box.find('a[href="'+_url+'"]');
	
	/*
	 * 判断是否为子集
	 * @param {Object} _node
	 * @return Boolean
	 */
	var isChild=function(_node){
		if(_node.parents('div[id="nav_con"]').length){
			return true;
		}else{
			return false;
		}
	};
	
	function getIndex(d){
		var _i;
		for(var i=0,len=d.length;i<len;i++){
			if(_data[i].url==_url){
				_i=_data[i].tid;
				break;
			}else{
				_i=0;
			}
		}
		return _i;
	}
	/*
	 * 如果链接地址存在于菜单当中则对应栏目高亮，否则首页高亮
	 */
	if(_url=='http://www.aoshu.com/aosai/'){
	 _index=3;
	 }else if(_current.length){ 
		//是否属于子栏目
		if(isChild(_current)){
			//是否存在于指定栏目列表中		
			_parent = jQuery(_current[0]).parent().parent().parent();
			_index=(getIndex(_data)>0)?getIndex(_data):(_sub.find('div').index(_parent[0]));
		}else{
			if(jQuery(_current[0]).parent('em').length>0){
								_parent = jQuery(_current[0]).parent().parent();
							}else{
		_parent = jQuery(_current[0]).parent();
							}
				_index = _menu.find('span').index(_parent[0]);
			}
	}else{
		_index=0;
	}
	
	_menu.find('span').eq(_index).attr('class', 'tag_nav_2 current').siblings('span').attr('class', 'tag_nav_1');
	_sub.find('div').eq(_index).show().siblings('div').hide();
	

/*	_menu.find('span').hover(
		function(){
			if (!jQuery(this).hasClass('current')) {
				jQuery(this).attr('class', 'tag_nav_2');
			}
		},
		function(){
			if(!jQuery(this).hasClass('current')){
				jQuery(this).attr('class','tag_nav_1');
			}
		}
	);*/
/*	_menu.find('span').hover(
		function(){
			if (!jQuery(this).hasClass('current')) {
				jQuery(this).attr('class', 'tag_nav_3');
			}
		},
		function(){
			if(!jQuery(this).hasClass('current')){
				jQuery(this).attr('class','tag_nav_1');
			}
		}
	);*/
}
(function(){
jQuery('#nav_con div').hide();
asMenu();
})();
