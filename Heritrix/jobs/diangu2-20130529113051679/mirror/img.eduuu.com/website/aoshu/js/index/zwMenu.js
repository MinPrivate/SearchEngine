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
			 
			{id:1,sid:0,tid:11,title:'考场素材',	url:'http://www.zuowen.com/sucai/'},
			{id:2,sid:0,tid:10,title:'名言警句',	url:'http://www.zuowen.com/sucai/mingyan/'},
			{id:3,sid:0,tid:10,title:'优美段落',	url:'http://www.zuowen.com/sucai/duanluo/'},
			{id:4,sid:0,tid:9,title:'写作指导',	url:'http://www.zuowen.com/xiezuozd/'},
			{id:5,sid:0,tid:9,title:'写作基础',	url:'http://www.zuowen.com/xiezuozd/xiezuojichu/'},
			{id:6,sid:0,tid:9,title:'经验交流',	url:'http://www.zuowen.com/xiezuozd/jingyan/'},
			{id:7,sid:0,tid:8,title:'单元作文',	url:'http://www.zuowen.com/danyuanzw/'},
			{id:8,sid:0,tid:9,title:'英语作文',	url:'http://www.zuowen.com/yingyuzw/'},
			{id:9,sid:0,tid:10,title:'写作素材',	url:'http://www.zuowen.com/sucai/'},
			{id:10,sid:0,tid:4,title:'小升初满分作文',	url:'http://www.zuowen.com/xsczw/fanwen/'},
			{id:11,sid:0,tid:4,title:'小升初写作指导',	url:'http://www.zuowen.com/xsczw/xiaoshengchu/'},
			{id:12,sid:0,tid:5,title:'中考满分作文',	url:'http://www.zuowen.com/zhongkaozw/youxiu/'},
			{id:13,sid:0,tid:5,title:'中考作文指导',	url:'http://www.zuowen.com/zhongkaozw/zhongkao/'},
			{id:14,sid:0,tid:6,title:'高考满分作文',	url:'http://www.zuowen.com/gaokaozw/manfen/'},
			{id:15,sid:0,tid:6,title:'高考作文指导',	url:'http://www.zuowen.com/gaokaozw/gaokao/'},
			{id:16,sid:0,tid:2,title:'初一年级作文',	url:'http://www.zuowen.com/chuzhong/chuyi/'},
			{id:17,sid:0,tid:2,title:'初二年级作文',	url:'http://www.zuowen.com/chuzhong/chuer/'},
			{id:18,sid:0,tid:2,title:'初三年级作文',	url:'http://www.zuowen.com/chuzhong/chusan/'},
			{id:19,sid:0,tid:3,title:'高一年级作文',	url:'http://www.zuowen.com/gaozhong/gaoyi/'},
			{id:20,sid:0,tid:3,title:'高二年级作文',	url:'http://www.zuowen.com/gaozhong/gaoer/'},
			{id:21,sid:0,tid:3,title:'高三年级作文',	url:'http://www.zuowen.com/gaozhong/gaosan/'}			
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
