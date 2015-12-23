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
			 
			{id:1,sid:0,tid:4,title:'�г�����',	url:'http://www.aoshu.com/tiku/xingcheng/'},
			{id:2,sid:0,tid:4,title:'��������',	url:'http://www.aoshu.com/tiku/shulun/'},
			{id:3,sid:0,tid:4,title:'��������',	url:'http://www.aoshu.com/tiku/jihe/'},
			{id:4,sid:0,tid:4,title:'��������',	url:'http://www.aoshu.com/tiku/jishu/'},
			{id:5,sid:0,tid:4,title:'Ӧ����',	url:'http://www.aoshu.com/tiku/yingyongti/'},
			{id:6,sid:0,tid:4,title:'��������',	url:'http://www.aoshu.com/tiku/jisuan/'},
			{id:7,sid:0,tid:4,title:'����',	url:'http://www.aoshu.com/tiku/zati/'},
			{id:8,sid:0,tid:0,title:'����ר��',	url:'http://www.aoshu.com/zhuanti/'},
			{id:9,sid:0,tid:6,title:'�������',	url:'http://www.aoshu.com/ziliao/fudao/shuji/'},
			{id:10,sid:0,tid:6,title:'�鼮',	url:'http://www.aoshu.com/ziliao/fudao/shuji/'},
			{id:11,sid:0,tid:3,title:'���',	url:'http://www.aoshu.com/tiku/'},
			{id:12,sid:0,tid:3,title:'������',	url:'http://www.aoshu.com/aosai/hbs/'},
			{id:13,sid:0,tid:3,title:'ϣ����',	url:'http://www.aoshu.com/aosai/xwb/'},
			{id:14,sid:0,tid:3,title:'������',	url:'http://www.aoshu.com/aosai/zmb/'},
			{id:15,sid:0,tid:3,title:'ӭ����',	url:'http://www.aoshu.com/aosai/ycb/'},
			{id:16,sid:0,tid:3,title:'ѧ��˼��',	url:'http://www.aoshu.com/aosai/xesb/'},
			{id:17,sid:0,tid:8,title:'Сѧ����',	url:'http://www.aoshu.com/xxst/'},
			{id:18,sid:0,tid:8,title:'��������',	url:'http://www.aoshu.com/ziliao/ywst/'},
			{id:19,sid:0,tid:8,title:'Ӣ������',	url:'http://www.aoshu.com/ziliao/yyst/'},
			{id:20,sid:0,tid:8,title:'��ѧ����',	url:'http://www.aoshu.com/ziliao/sxst/'},
			{id:21,sid:0,tid:5,title:'���Ŀμ�',	url:'http://www.aoshu.com/ziliao/yuwenkejian/'},
			{id:22,sid:0,tid:5,title:'���Ľ̰�',	url:'http://www.aoshu.com/ziliao/yuwenjiaoan/'},
			
			//������������
			{id:23,sid:0,tid:3,title:'������',	url:'http://bj.aoshu.com/aosai/hbs/'},
			{id:24,sid:0,tid:3,title:'ϣ����',	url:'http://bj.aoshu.com/aosai/xwb/'},
			{id:25,sid:0,tid:3,title:'������',	url:'http://bj.aoshu.com/aosai/zmb/'},
			{id:26,sid:0,tid:3,title:'ӭ����',	url:'http://bj.aoshu.com/aosai/ycb/'},
			{id:27,sid:0,tid:3,title:'ѧ��˼��',	url:'http://bj.aoshu.com/aosai/xesb/'}
			
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
