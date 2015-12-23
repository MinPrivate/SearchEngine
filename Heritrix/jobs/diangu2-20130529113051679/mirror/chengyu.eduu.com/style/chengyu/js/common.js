function checkName()
{
	var name = $('#name').val();
	if(name == ''){
		alert('搜索内容不能为空！');
		return false;
	}
	return true;
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