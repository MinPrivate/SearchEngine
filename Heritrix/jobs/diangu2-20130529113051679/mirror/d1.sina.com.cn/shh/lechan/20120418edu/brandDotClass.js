(function (){
	if(!window.brandDotClass) {
		window.brandDot = {}
	}

	function brandDotClass(dataArr,cookiePrefix,iplimit,brandWidthArr,brandwrapid) {
		//数据数组
		this.data = dataArr;
		//宽度数据							//6个     //5个   //4个   //8个   //10个   //9个   //7个
		this.brandwidth = brandWidthArr || (['140px','167px','210px','105px','84px','92px','115px']);
		//容器id
		this.wrap = $(brandwrapid) || $('brNav');
	    //cookie前辍
		this.prefix = cookiePrefix;
		//cookie限制次数
		this.limit = iplimit || 2;
		 		
		var w = '',
		    html = '',
			that = this,
		    limitArr = {},
		    logolnkArr = [];		 
		
		switch(this.data.length) {
			case 6:
				w = this.brandwidth[0];
				break;
			case 5:
				w = this.brandwidth[1];
				break;
			case 4:
				w = this.brandwidth[2];
				break;
			case 8:
				w = this.brandwidth[3];
				break;
			case 10:
				w = this.brandwidth[4];
				break;
			case 9:
				w = this.brandwidth[5];
				break;
			case 7:
				w = this.brandwidth[6];
				break;
		}		
		//构造html
		
		for(var i=0;i<this.data.length;i++) {
			var data = this.data[i];
			//构建品牌logo的html;
			if(i == this.data.length -1) {
				html += '<a href="'+data[0]+'" class="brCon '+(cookiePrefix+i)+'" target="_blank" style="width:'+w+';border-right:none;">\r\n';
			} else {
				html += '<a href="'+data[0]+'" class="brCon" target="_blank" style="width:'+w+'">\r\n';
			}
			html += '  <img src="'+data[1]+'" \/>\r\n<\/a>\r\n';
			
			if(data[2]) {
				var cookiename = cookiePrefix+i+'_over_nums';
				limitArr[cookiename] = parseInt(readCookie(cookiename)) || 0;
				if(limitArr[cookiename] < this.limit) {
					html += '<div style="display:none;" id="'+(cookiePrefix+i)+'_over" class="brConOver"><a href="'+(data[3]||data[0])+'" target="_blank">\r\n';
					html += '  <img src="'+data[2]+'" \/><\/a><\/div>';
				}
			}			
		}
		
		this.wrap.innerHTML = html;		
		var lnks = this.wrap.getElementsByTagName('a');
		for(var i=0;i<lnks.length;i++) {
			if(lnks[i].className.indexOf('brCon') != -1) logolnkArr.push(lnks[i]);
		}
		
		//构造触发素材的事件,并限制触发次数
		for(var i=0;i<logolnkArr.length;i++) {
			var id = this.prefix+i+'_over';
			var obrand = $(id);	
			if(!obrand) continue;
			(function(i,obrand){
				var id = this.prefix+i+'_over';	
				logolnkArr[i].onmouseover = function() {					
					var cookiename = that.prefix+i+'_over_nums';					
					if(limitArr[cookiename] >= that.limit) return;	
					obrand.style.display = 'block';
					limitArr[cookiename]++;
					writeCookie(cookiename,limitArr[cookiename]);					
				}

				obrand.onmouseout = function() {
					this.style.display = 'none';
				}
			})(i,obrand);			
		}

	}
	
	
	//读取cookie 操作
	var readCookie = function(l){var i="",I=l+"=";if(document.cookie.length>0){var offset=document.cookie.indexOf(I);if(offset!=-1){offset+=I.length;var end=document.cookie.indexOf(";",offset);if(end==-1)end=document.cookie.length;i=unescape(document.cookie.substring(offset,end))}};return i};
	//写入cookie 操作
	var writeCookie = function(O,o,l,I){var i="",c="";if(l!=null){i=new Date((new Date).getTime()+l*3600000);i="; expires="+i.toGMTString()};if(I!=null){c=";domain="+I};document.cookie=O+"="+escape(o)+i+c};

    function $(id) {
		if(typeof id == 'string') {
			return document.getElementById(id);
		} else if(id){
			return id;
		} else {
			return null;
		}
	}

	window.brandDot['brandDotClass'] = brandDotClass;

})();