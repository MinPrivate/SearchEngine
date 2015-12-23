(function() {
		
		window.columnDot = {};	
		function copen(twrap,delay){
				var elem = $(twrap);
				//alert(elem);
				//将元素的显示方式设置到最初状态
				elem.style.display = elem.$display || 'block';
				if(!twrap) return;
				return delayClose(twrap,delay);
		}			
		function close2(id) {
				var elem = $(id);
				//记住元素原来的显示类型
				elem.$display = elem.style.display;
				elem.style.display = 'none';
		}
		//延时关闭	
		function delayClose(id,delay){
					return setTimeout(function(){
						close2($(id));
					},delay);
	  }				
		//私有的辅助函数
		function $(id){
			if(typeof id == 'object' && id) {
					return id;
				} else {
					return document.getElementById(String(id));
				}	
		}		
		function trim(str){
			return str.replace(/^\s+|\s+$/g, '')
		}
		//获取cookie
		function getCookie (n) {				
				var cs = document.cookie.split(';');
					for(var i=0;i<cs.length;i++) {			
						if(trim(cs[i]).indexOf(n) == -1) continue; 
						var c = cs[i].split('=');						
						if(trim(c[0]) == n) return unescape(trim(c[1]));
				}
		}	  
		//写入cookie
		function setCookie (n,v,q,d){
				var c = '';
				var now = new Date();		
				var end = new Date(now.getTime() + (q || 0)*60000);
				var tmpdomain = '';		
				if(typeof d != 'undefined') {
					tmpdomain = 'domain=sina.com.cn;';
				}
				//alert(n+':'+v);
				if(n && v) c += n+'='+escape(v)+';path=/;';
				if(tmpdomain) c += tmpdomain;
				if(end) c += 'expires='+end.toGMTString()+';';				
				document.cookie = c;
		}
		
		function triggerColumnDot(mainID,awrapID,bwrapID,closeID,eventType,cookieName,num,delay) {				
				
				var curCkNum = parseInt(getCookie(cookieName))||1;				
				if(curCkNum > num) return;
				
				var awrap = $(awrapID);
				var main = $(mainID);
				if(!mainID || !awrap) return;
				//默认鼠标事件为 mouseover
				eventType = eventType || 'mouseover';
				var timer = null;
				delay = delay || 5000;
				
				//alert($(closeID));
				$(closeID).onclick = function() {
					close2(awrap);
				}				
				//默认触发一次,5秒后自动关闭
				if(curCkNum == 1) {	
					timer = copen(awrap,delay);
					setCookie(cookieName,curCkNum+=1,24*60);
				}
				
				//绑定主容器触发事件
			  main['on'+eventType] = function() {					
					if(curCkNum > num) return;
					if(timer) clearTimeout(timer);
					timer = copen(awrap,delay);
					setCookie(cookieName,curCkNum+=1,24*60);
				}				
		}		
		window['columnDot']['triggerColumnDot'] = triggerColumnDot;		
		
})();