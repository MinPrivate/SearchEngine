<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk">
<script src="${pageContext.request.contextPath}/dwr/engine.js"></script>
<script src="${pageContext.request.contextPath}/dwr/util.js"></script>
<script src="${pageContext.request.contextPath}/dwr/interface/searchService.js"></script>
<script language="javascript">

var _id = '${param.id}';

searchService.getSearchResultById(_id, fillDetailResult);

function fillDetailResult(record)
{
	var image = document.getElementById("image");
	image.innerHTML+="<table><tr><td><img src='../showpic?id="+record.imageUrl+"'></td>" + 
                   "<td>"
				   + "<table><tr><td>" + record.name + "</td></tr></table>"
                   +"</td></tr></table>";

	var contentdiv = document.getElementById("detail");
	var table;

	var content = record.content;
	var lines = content.split("\r\n");

	if (lines.length > 0) {
		table = document.createElement('table');
		table.setAttribute("border","1");
		contentdiv.appendChild(table);
	}
	else {
		return;
	}
	
	for(var i=0;i<lines.length;i++){
	
		var tr = document.createElement('tr');
		tr.setAttribute('bgcolor','#eeeeee');
		
		
		var td1;
		var td2;
		
		var line = lines[i];

		var data1 = line.substring(0, line.indexOf(":"));
		var data2 = line.substring(line.indexOf(":") + 1);

		td1 = document.createElement('td');
		td1.innerHTML = "<font size=2px>" + data1 + "</font>";
		tr.appendChild(td1);
			
		td2 = document.createElement('td');
		td2.innerHTML = "<font size=2px>" + data2 + "</font>";
		tr.appendChild(td2);
			
		table.appendChild(tr);
	}

	contentdiv.innerHTML = contentdiv.innerHTML;
	
	
	var original = document.getElementById("original");
	original.innerHTML = "<a href='" + record.url + "' target='_blank'>" + record.url + "</a>";
}
</script>
</head>
<body>

<!-- 这是用于显示图片的位置 -->
<div id="image">
</div>

<!-- 用于显示原URL -->
<div id="original">
</div>

<!-- 这是用于显示详细信息的位置 -->
<div id="detail" >
</div>



</body>
</html>
