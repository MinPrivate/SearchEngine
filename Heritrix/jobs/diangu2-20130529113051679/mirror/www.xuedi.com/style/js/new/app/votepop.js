// JavaScript Document
function(id,zIndex){
	//设置cookie
	function cookie(name, value, options) {
		if (typeof value != 'undefined') { // name and value given, set cookie
			options = options || {};
			if (value === null) {
				value = '';
				options.expires = -1;
			}
			var expires = '';
			if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
				var date;
				if (typeof options.expires == 'number') {
					date = new Date();
					date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
				} else {
					date = options.expires;
				}
				expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
			}
			// CAUTION: Needed to parenthesize options.path and options.domain
			// in the following expressions, otherwise they evaluate to undefined
			// in the packed version for some reason...
			var path = options.path ? '; path=' + (options.path) : '';
			var domain = options.domain ? '; domain=' + (options.domain) : '';
			var secure = options.secure ? '; secure' : '';
			document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
		} else { // only name given, get cookie
			var cookieValue = null;
			if (document.cookie && document.cookie != '') {
				var cookies = document.cookie.split(';');
				for (var i = 0; i < cookies.length; i++) {
					var cookie = jQuery.trim(cookies[i]);
					// Does this cookie string begin with the name we want?
					if (cookie.substring(0, name.length + 1) == (name + '=')) {
						cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
						break;
					}
				}
			}
			return cookieValue;
		}
	}
	
	function popvote(){
		var node = document.createElement('div'), nodeOver = document.createElement('div');
		node.setAttribute('id',id);
		node.setAttribute('class','box');
		node.style.padding = '5px';
		node.style.position = 'absolute';
		node.style.width = '388px';
		node.style.zIndex = zIndex+1;
		
		nodeOver.setAttribute('id','overlay');
		nodeOver.style.position = 'absolute';
		nodeOver.style.display = 'block';
		nodeOver.style.background = '#000000';
		nodeOver.style.top = '0';
		nodeOver.style.left = '0';
		nodeOver.style.opacity = '.8';
		nodeOver.style.filter = 'alpha(opacity=80)';
		nodeOver.style.zIndex = zIndex;
	
		var _html = '';
			_html += '<div class="boxBg" style="position:absolute; left:0; top:0; right:0; bottom:0; background:#000000; opacity:.5; filter:alpha(opacity=50);"></div>';
			_html += '<div class="boxCon" style="background:#ffffff; border:1px solid #c6c6c6; position:relative;">';
				_html += '<div class="boxTop" style="background:#414547; padding:0 10px; overflow:hidden; zoom:1;">';
					_html += '<span style="float:left; display:inline; height:31px; line-height:31px; color:#ffffff; font-family:\'Microsoft YaHei\'; font-weight:bold; font-size:14px;">\u8bda\u9080\u60a8\u53c2\u4e0e\u95ee\u5377\u8c03\u67e5</span>';
					_html += '<a id="closeBtn" class="close" href="javascript:;" style="float:right; display:inline; margin:9px 0; width:13px; height:13px; text-align:center; line-height:13px; color:#bbbbbb; text-decoration:none; font-weight:bold;">&times;</a>';
				_html += '</div>';
				_html += '<div class="boxMid" style="padding:15px 10px 14px; line-height:22px; color:#333333; font-size:12px;">';
					_html += '<p>\u60a8\u7684\u610f\u89c1\u5bf9\u6211\u4eec\u975e\u5e38\u91cd\u8981\uff01\u6211\u4eec\u975e\u5e38\u5e0c\u671b\u4e86\u89e3\u60a8\u5bf9\u4e8e\u5b69\u5b50\u65e9\u671f\u6559\u80b2\u65b9\u9762\u7684\u60f3\u6cd5\uff0c\u4ee5\u4fbf\u4eca\u540e\u4e3a\u60a8\u63d0\u4f9b\u66f4\u597d\u7684\u6559\u80b2\u670d\u52a1\u3002</p>';
					_html += '<p style="text-align:center;"><a id="link" href="https://jinshuju.net/f/x9vs2I" style="color:#0055a2;" target="_blank">\u70b9\u6b64\u53c2\u4e0e\u95ee\u5377\u8c03\u67e5&nbsp;&gt;&gt;</a></p>';
				_html += '</div>';
			_html += '</div>';
		node.innerHTML = _html;
		document.body.appendChild(nodeOver);
		document.body.appendChild(node);
		
		var _ww = document.documentElement.clientWidth,
			_wh = document.documentElement.clientHeight,
			_dh = document.body.clientHeight > _wh ? document.body.clientHeight : _wh,
			_st = document.body.scrollTop,
			_obj = document.getElementById(id),
			_overlay = document.getElementById('overlay'),
			_bw = _obj.clientWidth,
			_bh = _obj.clientHeight;
		
		var _left = (_ww - _bw)/2,
			_top = Math.abs((_wh - _bh)/2+_st);
		
		_overlay.style.width = _ww+'px';
		_overlay.style.height = _dh+'px';
		_obj.style.top = _top+'px';
		_obj.style.left = _left+'px';
		
		document.getElementById('closeBtn').onclick = function(){
			_obj.style.display = 'none';
			_overlay.style.display = 'none';	
			document.body.removeChild(_overlay);
			document.body.removeChild(_obj);
			cookie('popvote','1',{expires:30,domain:location.host,path:'\/'});
		}
		
		document.getElementById('link').onclick = function(){
			_obj.style.display = 'none';
			_overlay.style.display = 'none';	
			document.body.removeChild(_overlay);
			document.body.removeChild(_obj);
			cookie('popvote','1',{expires:30,domain:location.host,path:'\/'});
		}
	}
	
	if(!cookie('popvote')){
		popvote();
	}	
};
//()('pp',10000)