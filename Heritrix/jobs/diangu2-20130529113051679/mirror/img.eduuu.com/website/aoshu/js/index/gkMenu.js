/**
 * @author Jay
 */
function asMenu(){
	var _box=jQuery('.navbox_new'),	// �����˵�
		_menu=jQuery('#tag_nav'),		// һ����Ŀ
		_sub=jQuery('#nav_con'),		// ������Ŀ
		_url=window.location.href,		// url��ַ
		_index,_parent,_child,
		_data=[
			/* id:����
			 * sid:����������
			 * tid:Ŀ������
			 * url:��Ŀurl��ַ
			 * title:��Ŀ����
			 */
			 
			{id:1,sid:0,tid:2,title:'��ѧ����',url:'http://www.gaokao.com/dxpm/'},
			{id:2,sid:0,tid:2,title:'רҵ��ȫ',url:'http://www.gaokao.com/baokao/zydq/'},
			{id:3,sid:0,tid:2,title:'־Ը�',url:'http://www.gaokao.com/baokao/zytb/'},
			{id:4,sid:0,tid:4,title:'һģ',url:'http://www.gaokao.com/ym/'},
			{id:5,sid:0,tid:4,title:'��ģ',url:'http://www.gaokao.com/e/20110507/4dc4afe8e1e0b.shtml'},
			{id:6,sid:0,tid:4,title:'�߿�����',url:'http://www.gaokao.com/zyk/gkst/'},
			{id:7,sid:0,tid:4,title:'��������',url:'http://www.gaokao.com/gkzw/'},
			{id:8,sid:0,tid:1,title:'������Ѷ',url:'http://www.gaokao.com/gdgkkx/'},
			{id:8,sid:0,tid:2,title:'�ɼ���ѯ',url:'http://www.gaokao.com/2011cjcx/'}			
		];
		
	// ��ǰ��Ŀ
	var _current=_box.find('a[href="'+_url+'"]');
	
	/*
	 * �ж��Ƿ�Ϊ�Ӽ�
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
	 * ������ӵ�ַ�����ڲ˵��������Ӧ��Ŀ������������ҳ����
	 */
	if(_url=='http://www.aoshu.com/aosai/'){
	 _index=3;
	 }else if(_current.length){ 
		//�Ƿ���������Ŀ
		if(isChild(_current)){
			//�Ƿ������ָ����Ŀ�б���		
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
