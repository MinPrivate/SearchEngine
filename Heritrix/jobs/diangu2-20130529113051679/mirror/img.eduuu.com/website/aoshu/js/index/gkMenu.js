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
			 
			{id:1,sid:0,tid:2,title:'大学排名',url:'http://www.gaokao.com/dxpm/'},
			{id:2,sid:0,tid:2,title:'专业大全',url:'http://www.gaokao.com/baokao/zydq/'},
			{id:3,sid:0,tid:2,title:'志愿填报',url:'http://www.gaokao.com/baokao/zytb/'},
			{id:4,sid:0,tid:4,title:'一模',url:'http://www.gaokao.com/ym/'},
			{id:5,sid:0,tid:4,title:'二模',url:'http://www.gaokao.com/e/20110507/4dc4afe8e1e0b.shtml'},
			{id:6,sid:0,tid:4,title:'高考真题',url:'http://www.gaokao.com/zyk/gkst/'},
			{id:7,sid:0,tid:4,title:'满分作文',url:'http://www.gaokao.com/gkzw/'},
			{id:8,sid:0,tid:1,title:'各地资讯',url:'http://www.gaokao.com/gdgkkx/'},
			{id:8,sid:0,tid:2,title:'成绩查询',url:'http://www.gaokao.com/2011cjcx/'}			
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
