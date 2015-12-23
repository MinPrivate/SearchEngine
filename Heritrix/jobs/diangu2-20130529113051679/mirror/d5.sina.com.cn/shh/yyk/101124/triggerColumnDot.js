(function() {
		
		window.columnDot = {};	
		function copen(twrap,delay){
				var elem = $(twrap);
				//alert(elem);
				//��Ԫ�ص���ʾ��ʽ���õ����״̬
				elem.style.display = elem.$display || 'block';
				if(!twrap) return;
				return delayClose(twrap,delay);
		}			
		function close2(id) {
				var elem = $(id);
				//��סԪ��ԭ������ʾ����
				elem.$display = elem.style.display;
				elem.style.display = 'none';
		}
		//��ʱ�ر�	
		function delayClose(id,delay){
					return setTimeout(function(){
						close2($(id));
					},delay);
	  }				
		//˽�еĸ�������
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
		//��ȡcookie
		function getCookie (n) {				
				var cs = document.cookie.split(';');
					for(var i=0;i<cs.length;i++) {			
						if(trim(cs[i]).indexOf(n) == -1) continue; 
						var c = cs[i].split('=');						
						if(trim(c[0]) == n) return unescape(trim(c[1]));
				}
		}	  
		//д��cookie
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
				//Ĭ������¼�Ϊ mouseover
				eventType = eventType || 'mouseover';
				var timer = null;
				delay = delay || 5000;
				
				//alert($(closeID));
				$(closeID).onclick = function() {
					close2(awrap);
				}				
				//Ĭ�ϴ���һ��,5����Զ��ر�
				if(curCkNum == 1) {	
					timer = copen(awrap,delay);
					setCookie(cookieName,curCkNum+=1,24*60);
				}
				
				//�������������¼�
			  main['on'+eventType] = function() {					
					if(curCkNum > num) return;
					if(timer) clearTimeout(timer);
					timer = copen(awrap,delay);
					setCookie(cookieName,curCkNum+=1,24*60);
				}				
		}		
		window['columnDot']['triggerColumnDot'] = triggerColumnDot;		
		
})();