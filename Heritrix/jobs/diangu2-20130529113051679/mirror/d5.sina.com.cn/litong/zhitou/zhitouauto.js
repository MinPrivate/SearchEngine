var zhitou = {
    autoFill : function (blimg,bltext,hyimg,hytext1,hytext2,hytext3) {
        var arrArg = [blimg,bltext,hyimg,hytext1,hytext2,hytext3];
        var setNum = [2,8,3,4,4,4];
		var csslink = "http://d1.sina.com.cn/litong/zhitou/zhitou.css";
		var css = document.createElement("link");
		css.rel = "stylesheet";
		css.type = "text/css";
		css.href = csslink;
		document.getElementsByTagName("head")[0].appendChild(css);
        try{
        var styles = '<div class="zhitou-block">';
            styles += '<h2 class="title">新浪智投</h2>';
            styles += '<div class="bl" id="res'+ arrArg[0] +'"></div>';
            styles += '<div class="br" id="res'+ arrArg[1] +'"></div>';
            styles += '<div class="clear"></div>';
            styles += '</div>';
            styles += '<div class="divline"></div>';
            styles += '<div class="hangye-block">';
            styles += '<h2 class="title">行业专区</h2>';
            styles += '<div id="res'+ arrArg[2] +'"></div>';
            styles += '<div class="clear"></div><div class="dot"></div>';
            styles += '<span id="res'+ arrArg[3] +'"></span>';
            styles += '<span id="res'+ arrArg[4] +'"></span>';
            styles += '<span id="res'+ arrArg[5] +'"></span>';
			styles += '<div class="clear"></div>';
            styles += '</div>';
            styles += '<div class="divline"></div>';

            document.getElementById("zhitoutemp").innerHTML = styles;	

        }catch(e){
            
        }

        function pfpLoad() {
            var loca = window.location;
            var arrDefault = new Array();
                arrDefault['id']	= '1';
                arrDefault['title'] 	= '我也要在这里发布';
                arrDefault['detail']	= '新浪智投-中小企业网络广告金算盘，助力中小企业网络营销';
                arrDefault['url']	= 'http://p4p.sina.com.cn';
                arrDefault['durl']	= 'p4p.sina.com.cn';
                arrDefault['picpath']	= 'http://d1.sina.com.cn/pfpghc/sina/1217235599_75506058_zhitou.jpg';
            var srcurlQ1 = "http://pfp.sina.com.cn/pfpnew/info/res_"+ arrArg[0] +".js";
            var srcurlQ2 = "http://pfp.sina.com.cn/pfpnew/info/res_"+ arrArg[1] +".js";
            var srcurlQ3 = "http://pfp.sina.com.cn/pfpnew/info/res_"+ arrArg[2] +".js";
            var srcurlQ4 = "http://pfp.sina.com.cn/pfpnew/info/res_"+ arrArg[3] +".js";
            var srcurlQ5 = "http://pfp.sina.com.cn/pfpnew/info/res_"+ arrArg[4] +".js";
            var srcurlQ6 = "http://pfp.sina.com.cn/pfpnew/info/res_"+ arrArg[5] +".js";
			var hostname = document.location.href;
			hostname = hostname.substring(7,hostname.indexOf("."));
			var hostsrc = "http://pfp.sina.com.cn/w/"+ hostname +".js";
			try {
				var hostscript = document.createElement("script");
            	hostscript.type = "text/javascript";
            	hostscript.src = hostsrc;
				document.body.appendChild(hostscript);
			}catch(e){
			}
            // content padding
            var scriptQ1 = document.createElement("script");
            scriptQ1.type = "text/javascript";
            scriptQ1.src = srcurlQ1;
            document.body.appendChild(scriptQ1);
            scriptQ1.onload = scriptQ1.onreadystatechange = function () {
                if(this.readyState == null || this.readyState == "loaded" || this.readyState == "complete") {
                    try {
                        if(typeof pfp_adv == "object") {
                            try{
                                var strArea = local_index;
                            }catch(e){
                                var strArea = 1;
                            }
                            try{
                                    var arrWebExQ1 = eval("arrWeb"+arrArg[0]);
                            }catch(e){
                                    var arrWebExQ1 = new Array();
                            }
                            var areaIndex = strArea;
                            var arrWebQ1 = new Array();
                            var webIndexQ1 = 0;
							
                            for(var i=0;i<arrWebExQ1.length;i++) {
                                if(arrWebExQ1[i]['area'].substr(areaIndex,1) == 1){
                                    arrWebQ1[webIndexQ1++] = arrWebExQ1[i];
                                }
                            }
							
                            diff = setNum[0] - arrWebQ1.length;
                            for(var i=0;i<diff;i++){
                                arrWebQ1[arrWebQ1.length] = arrDefault;
                            }
                            //console.log(arrWebQ1);
                            var html = "";
                            for(var i = 0; i < setNum[0]; i++){
                                html += '<div class="imgad">';
                                html += '<div class="imgad-pic"><a href="'+ arrWebQ1[i].url +'" target="_blank"><img src="'+ arrWebQ1[i].picpath +'" border="0" /></a></div>';
                                html += '<div class="imgad-link"><a href="'+ arrWebQ1[i].url +'" target="_blank">'+ arrWebQ1[i].title +'</a></div>';
                                html += '</div>';
                                html += '<div class="clear"></div>';
                                if(i == 0){
                                    html += '<div class="dot"></div>';
                                }
                            }
                            
                            document.getElementById("res"+arrArg[0]).innerHTML = html;
                            
                        }
                    }catch(e) {
                    
                    }
                }
                
            }

            var scriptQ2 = document.createElement("script");
            scriptQ2.type = "text/javascript";
            scriptQ2.src = srcurlQ2;
            document.body.appendChild(scriptQ2);
            scriptQ2.onload = scriptQ2.onreadystatechange = function () {
                if(this.readyState == null || this.readyState == "loaded" || this.readyState == "complete") {
                    try {
                        if(typeof pfp_adv == "object") {
                            try{
                                var strArea = local_index;
                            }catch(e){
                                var strArea = 1;
                            }
                            try{
                                    var arrWebExQ2 = eval("arrWeb"+arrArg[1]);
                            }catch(e){
                                    var arrWebExQ2 = new Array();
                            }
                            var areaIndex = strArea;
                            var arrWebQ2 = new Array();
                            var webIndexQ2 = 0;
                            for(var i=0;i<arrWebExQ2.length;i++) {
                                if(arrWebExQ2[i]['area'].substr(areaIndex,1) == 1){
                                    arrWebQ2[webIndexQ2++] = arrWebExQ2[i];
                                }
                            }
                            diff = setNum[1] - arrWebQ2.length;
                            for(var i=0;i<diff;i++){
                                arrWebQ2[arrWebQ2.length] = arrDefault;
                            }
                            //console.log(arrWebQ2);
                            var html = "";
                            html += '<div class="textad">';
                            for(var i = 0; i < setNum[1]; i++){
                                html += '<div class="textad-line"> <a href="'+ arrWebQ2[i].url +'" target="_blank">'+ arrWebQ2[i].title +'</a></div>';
                                if(i == 3){
                                    html += '<div class="clear"></div>';
                                    html += '<div class="dot"></div>';
                                }
                            }
                            html += '</div>';
                            document.getElementById("res"+arrArg[1]).innerHTML = html;
                        }
                    }catch(e) {
                    
                    }
                }
            }
                
            var scriptQ3 = document.createElement("script");
            scriptQ3.type = "text/javascript";
            scriptQ3.src = srcurlQ3;
            document.body.appendChild(scriptQ3);    
            scriptQ3.onload = scriptQ3.onreadystatechange = function () {
                if(this.readyState == null || this.readyState == "loaded" || this.readyState == "complete") {
                    try {
                        if(typeof pfp_adv == "object") {
                            try{
                                var strArea = local_index;
                            }catch(e){
                                var strArea = 1;
                            }
                            try{
                                    var arrWebExQ3 = eval("arrWeb"+arrArg[2]);
                            }catch(e){
                                    var arrWebExQ3 = new Array();
                            }
                            var areaIndex = strArea;
                            var arrWebQ3 = new Array();
                            var webIndexQ3 = 0;
                            for(var i=0;i<arrWebExQ3.length;i++) {
                                if(arrWebExQ3[i]['area'].substr(areaIndex,1) == 1){
                                    arrWebQ3[webIndexQ3++] = arrWebExQ3[i];
                                }
                            }
                            diff = setNum[2] - arrWebQ3.length;
                            for(var i=0;i<diff;i++){
                                arrWebQ3[arrWebQ3.length] = arrDefault;
                            }
                            //console.log(arrWebQ3);
                            var html = "";
                            for(var i = 0; i < setNum[2]; i++){
                                html += '<div class="imgad">';
                                html += '<div class="imgad-pic"><a href="'+ arrWebQ3[i].url +'" target="_blank"><img src="'+ arrWebQ3[i].picpath +'" border="0" /></a></div>';
                                html += '<div class="imgad-link"><a href="'+ arrWebQ3[i].url +'" target="_blank">'+ arrWebQ3[i].title +'</a></div>';
                                html += '</div>';
                            }
                            html += '<div class="clear"></div>';
                            document.getElementById("res"+arrArg[2]).innerHTML = html;
                        }
                    }catch(e) {
                    
                    }
                }
            }
            
            var scriptQ4 = document.createElement("script");
            scriptQ4.type = "text/javascript";
            scriptQ4.src = srcurlQ4;
            document.body.appendChild(scriptQ4);
            scriptQ4.onload = scriptQ4.onreadystatechange = function () {
                if(this.readyState == null || this.readyState == "loaded" || this.readyState == "complete") {
                    try {
                        if(typeof pfp_adv == "object") {
                            try{
                                var strArea = local_index;
                            }catch(e){
                                var strArea = 1;
                            }
                            try{
                                    var arrWebExQ4 = eval("arrWeb"+arrArg[3]);
                            }catch(e){
                                    var arrWebExQ4 = new Array();
                            }
                            var areaIndex = strArea;
                            var arrWebQ4 = new Array();
                            var webIndexQ4 = 0;
                            for(var i=0;i<arrWebExQ4.length;i++) {
                                if(arrWebExQ4[i]['area'].substr(areaIndex,1) == 1){
                                    arrWebQ4[webIndexQ4++] = arrWebExQ4[i];
                                }
                            }
                            diff = setNum[3] - arrWebQ4.length;
                            for(var i=0;i<diff;i++){
                                arrWebQ4[arrWebQ4.length] = arrDefault;
                            }
                            //console.log(arrWebQ4);
                            var html = "";
                            html += '<div class="textad">';
                            for(var i = 0; i < setNum[3]; i++){
                                html += '<div class="textad-line"> <a href="'+ arrWebQ4[i].url +'" target="_blank">'+ arrWebQ4[i].title +'</a></div>';
                            }
                            html += '</div>';
                            document.getElementById("res"+arrArg[3]).innerHTML = html;
                        }
                    }catch(e) {
                    
                    }
                }
            }

            var scriptQ5 = document.createElement("script");
            scriptQ5.type = "text/javascript";
            scriptQ5.src = srcurlQ5;
            document.body.appendChild(scriptQ5);
            scriptQ5.onload = scriptQ5.onreadystatechange = function () {
                if(this.readyState == null || this.readyState == "loaded" || this.readyState == "complete") {
                    try {
                        if(typeof pfp_adv == "object") {
                            try{
                                var strArea = local_index;
                            }catch(e){
                                var strArea = 1;
                            }
                            try{
                                    var arrWebExQ5 = eval("arrWeb"+arrArg[4]);
                            }catch(e){
                                    var arrWebExQ5 = new Array();
                            }
                            var areaIndex = strArea;
                            var arrWebQ5 = new Array();
                            var webIndexQ5 = 0;
                            for(var i=0;i<arrWebExQ5.length;i++) {
                                if(arrWebExQ5[i]['area'].substr(areaIndex,1) == 1){
                                    arrWebQ5[webIndexQ5++] = arrWebExQ5[i];
                                }
                            }
                            diff = setNum[4] - arrWebQ5.length;
                            for(var i=0;i<diff;i++){
                                arrWebQ5[arrWebQ5.length] = arrDefault;
                            }
                            //console.log(arrWebQ5);
                            var html = "";
                            html += '<div class="textad">';
                            for(var i = 0; i < setNum[4]; i++){
                                html += '<div class="textad-line"> <a href="'+ arrWebQ5[i].url +'" target="_blank">'+ arrWebQ5[i].title +'</a></div>';
                            }
                            html += '</div>';
                            document.getElementById("res"+arrArg[4]).innerHTML = html;
                        }
                    }catch(e) {
                    
                    }
                }
            }
            
            var scriptQ6 = document.createElement("script");
            scriptQ6.type = "text/javascript";
            scriptQ6.src = srcurlQ6;
            document.body.appendChild(scriptQ6);
            scriptQ6.onload = scriptQ6.onreadystatechange = function () {
                if(this.readyState == null || this.readyState == "loaded" || this.readyState == "complete") {
                    try {
                        if(typeof pfp_adv == "object") {
                            try{
                                var strArea = local_index;
                            }catch(e){
                                var strArea = 1;
                            }
                            try{
                                    var arrWebExQ6 = eval("arrWeb"+arrArg[5]);
                            }catch(e){
                                    var arrWebExQ6 = new Array();
                            }
                            var areaIndex = strArea;
                            var arrWebQ6 = new Array();
                            var webIndexQ6 = 0;
                            for(var i=0;i<arrWebExQ6.length;i++) {
                                if(arrWebExQ6[i]['area'].substr(areaIndex,1) == 1){
                                    arrWebQ6[webIndexQ6++] = arrWebExQ6[i];
                                }
                            }
                            diff = setNum[5] - arrWebQ6.length;
                            for(var i=0;i<diff;i++){
                                arrWebQ6[arrWebQ6.length] = arrDefault;
                            }
                            //console.log(arrWebQ6);
                            var html = "";
                            html += '<div class="textad">';
                            for(var i = 0; i < setNum[5]; i++){
                                html += '<div class="textad-line"> <a href="'+ arrWebQ6[i].url +'" target="_blank">'+ arrWebQ6[i].title +'</a></div>';
                            }
                            html += '</div>';
                            document.getElementById("res"+arrArg[5]).innerHTML = html;
                        }
                    }catch(e) {
                    
                    }
                }
            }
            
        }

        if(navigator.appName == 'Microsoft Internet Explorer') {
            IEContentLoaded(window, pfpLoad);
        }else{
            pfpLoad();
        }

        function IEContentLoaded (w, fn) {
            var d = w.document, done = false,
            // only fire once
            init = function () {
                if (!done) {
                    done = true;
                    fn();
                }
            };
            // polling for no errors
            (function () {
                try {
                    // throws errors until after ondocumentready
                    d.documentElement.doScroll('left');
                } catch (e) {
                    setTimeout(arguments.callee, 50);
                    return;
                }
                // no errors, fire
                init();
            })();
            // trying to always fire before onload
            d.onreadystatechange = function() {
                if (d.readyState == 'complete') {
                    d.onreadystatechange = null;
                    init();
                }
            };
        }
    }
}