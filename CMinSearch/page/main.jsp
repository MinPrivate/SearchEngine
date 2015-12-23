<html xmlns=http://www.w3.org/1999/xhtml>
<head>
<meta http-equiv=Content-Type content="text/html; charset=gb2312">
<meta http-equiv=X-UA-Compatible content=IE=EmulateIE7>
<title>MinSearch</title>
<script type='text/javascript' src="${pageContext.request.contextPath}/dwr/engine.js"></script>
<script type='text/javascript' src="${pageContext.request.contextPath}/dwr/util.js"></script>
<script type='text/javascript' src="${pageContext.request.contextPath}/dwr/interface/searchService.js"></script>
<script language="javascript">

var request;
var minPage;
var maxPage;
var startIndex;
var hasNext;

function doSearch(type){

	var result = document.getElementById("result");
	var pagingdiv = document.getElementById('paging');
	result.innerHTML="";
	pagingdiv.innerHTML = "";

	if (type != 'paging') {
		var startindexinput = document.getElementById('startIndex');
		startindexinput.value = "1";
	}	
	
	request = {startIndex:1, query:""};
	DWRUtil.getValues(request);
	
	searchService.getSearchResults(request, fillPage);
}

function fillPage(data){

	var list = data.results;
	var resultdiv = document.getElementById('result');
	var pagingdiv = document.getElementById('paging');

	resultdiv.innerHTML = "";
	pagingdiv.innerHTML = "";

	if (list.length == 0) {
		resultdiv.innerHTML = "<div align='center'>Sorry, we can't find what you want...</div>";
		return;
	}
	
	for(var i=0; i<list.length; i++) {
		var ele = document.createElement('div');
		ele.setAttribute('id','info' + list[i]);
		ele.innerHTML = "<div align='center'>loading..</div>";
		resultdiv.appendChild(ele);
		searchService.getSearchResultById(list[i], fillDetailResult);
	}
	
	minPage = data.minPage;
	maxPage = data.maxPage;
	startIndex = data.startIndex;
	hasNext = data.hasNext;
	
	if (minPage != 1) {
		var link = document.createElement('a');
		link.setAttribute("href","javascript:paging('" + ((minPage-11)*10+1) + "')");
		link.innerHTML = "前10页<<";
		pagingdiv.appendChild(link);
	}
	
	for (var j=minPage; j <=maxPage; j++)
	{
		if ((j-1)*10+1 != startIndex)
		{
			var link = document.createElement('a');
			link.setAttribute("href","javascript:paging('" + ((j-1)*10+1) + "')");
			link.innerHTML = "第" + j + "页";
			pagingdiv.appendChild(link);
		}
		else {
			pagingdiv.innerHTML += ("第" + j + "页");
		}
	}
	
	if (hasNext == 1) {
		var link = document.createElement('a');
		link.setAttribute("href","javascript:paging('" + (maxPage*10+1) + "')");
		link.innerHTML = ">>后10页";
		pagingdiv.appendChild(link);
	}
	
}

function fillDetailResult(record) {
	var result = document.getElementById('info' + record.id);
	result.innerHTML="<table align='center' border='0' cellpadding='0' cellspacing='0' width=500 ><tr><td><a href='" + record.url + "'target='_blank'>" + "<font color=#C60A00 size='2'>"
	                  + "<font size='2'></font>" + record.name + 
	                  "</font></a><br>" +"<font color=#000000 size='2'>"
	                  + record.abstractContent + "......" + "</font><br><a href='detail.jsp?id="
	                  + record.id + 
	                  "' target='_blank'>"
	                  + "<font size=2>" + record.url + "</font>" + "</a>" + "<br><br>"
	                  + "</td></tr></table>";
}

function paging(newIndex) {
	document.getElementById('startIndex').value = newIndex;
	doSearch('paging');
}

function handlekey(){
	if (document.getElementById('query').value == '')
		return;
	var intkey = -1;
	if(window.event) {
		intKey = event.keyCode;
		if(intKey == 13){
			doSearch('');
		}
	}
}

</script>

</head>
<body>
<input type="hidden" name="startIndex" id="startIndex" value="1">
<!-- 这是搜索栏 -->
<div id="searchbar">
	<table align="center">
		<tr align="center">
			<td>
				<img src="../image/logo.gif" />
			</td>
		</tr>
		<tr align="center">
			<td><input size="65" type="text" name="query" id="query" value=""  onkeyup="handlekey()">
			<input type="button" value="Search"  id="search" onclick="javascript:doSearch('')"></td>
		</tr>
	</table>
</div>



<!-- 这是结果栏 -->
<div id="result">
</div>



<!-- 这是分页栏 -->
<div id="paging">

</div>


<!-- 这是Footer 
<div id="footer">
	<table align="center">
		<tr align="center">
			<td>
				<img src="../image/footer.jpg" />
			</td>
		</tr>
	</table>
</div>
-->
</body>
</html>
