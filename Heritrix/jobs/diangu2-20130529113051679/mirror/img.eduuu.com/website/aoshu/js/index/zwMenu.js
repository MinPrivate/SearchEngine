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
			 
			{id:1,sid:0,tid:11,title:'�����ز�',	url:'http://www.zuowen.com/sucai/'},
			{id:2,sid:0,tid:10,title:'���Ծ���',	url:'http://www.zuowen.com/sucai/mingyan/'},
			{id:3,sid:0,tid:10,title:'��������',	url:'http://www.zuowen.com/sucai/duanluo/'},
			{id:4,sid:0,tid:9,title:'д��ָ��',	url:'http://www.zuowen.com/xiezuozd/'},
			{id:5,sid:0,tid:9,title:'д������',	url:'http://www.zuowen.com/xiezuozd/xiezuojichu/'},
			{id:6,sid:0,tid:9,title:'���齻��',	url:'http://www.zuowen.com/xiezuozd/jingyan/'},
			{id:7,sid:0,tid:8,title:'��Ԫ����',	url:'http://www.zuowen.com/danyuanzw/'},
			{id:8,sid:0,tid:9,title:'Ӣ������',	url:'http://www.zuowen.com/yingyuzw/'},
			{id:9,sid:0,tid:10,title:'д���ز�',	url:'http://www.zuowen.com/sucai/'},
			{id:10,sid:0,tid:4,title:'С������������',	url:'http://www.zuowen.com/xsczw/fanwen/'},
			{id:11,sid:0,tid:4,title:'С����д��ָ��',	url:'http://www.zuowen.com/xsczw/xiaoshengchu/'},
			{id:12,sid:0,tid:5,title:'�п���������',	url:'http://www.zuowen.com/zhongkaozw/youxiu/'},
			{id:13,sid:0,tid:5,title:'�п�����ָ��',	url:'http://www.zuowen.com/zhongkaozw/zhongkao/'},
			{id:14,sid:0,tid:6,title:'�߿���������',	url:'http://www.zuowen.com/gaokaozw/manfen/'},
			{id:15,sid:0,tid:6,title:'�߿�����ָ��',	url:'http://www.zuowen.com/gaokaozw/gaokao/'},
			{id:16,sid:0,tid:2,title:'��һ�꼶����',	url:'http://www.zuowen.com/chuzhong/chuyi/'},
			{id:17,sid:0,tid:2,title:'�����꼶����',	url:'http://www.zuowen.com/chuzhong/chuer/'},
			{id:18,sid:0,tid:2,title:'�����꼶����',	url:'http://www.zuowen.com/chuzhong/chusan/'},
			{id:19,sid:0,tid:3,title:'��һ�꼶����',	url:'http://www.zuowen.com/gaozhong/gaoyi/'},
			{id:20,sid:0,tid:3,title:'�߶��꼶����',	url:'http://www.zuowen.com/gaozhong/gaoer/'},
			{id:21,sid:0,tid:3,title:'�����꼶����',	url:'http://www.zuowen.com/gaozhong/gaosan/'}			
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
