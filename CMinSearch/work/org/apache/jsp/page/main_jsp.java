/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.37
 * Generated at: 2013-05-30 02:15:21 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.page;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class main_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<html xmlns=http://www.w3.org/1999/xhtml>\r\n");
      out.write("<head>\r\n");
      out.write("<meta http-equiv=Content-Type content=\"text/html; charset=gb2312\">\r\n");
      out.write("<meta http-equiv=X-UA-Compatible content=IE=EmulateIE7>\r\n");
      out.write("<title>MinSearch</title>\r\n");
      out.write("<script type='text/javascript' src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
      out.write("/dwr/engine.js\"></script>\r\n");
      out.write("<script type='text/javascript' src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
      out.write("/dwr/util.js\"></script>\r\n");
      out.write("<script type='text/javascript' src=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${pageContext.request.contextPath}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
      out.write("/dwr/interface/searchService.js\"></script>\r\n");
      out.write("<script language=\"javascript\">\r\n");
      out.write("\r\n");
      out.write("var request;\r\n");
      out.write("var minPage;\r\n");
      out.write("var maxPage;\r\n");
      out.write("var startIndex;\r\n");
      out.write("var hasNext;\r\n");
      out.write("\r\n");
      out.write("function doSearch(type){\r\n");
      out.write("\r\n");
      out.write("\tvar result = document.getElementById(\"result\");\r\n");
      out.write("\tvar pagingdiv = document.getElementById('paging');\r\n");
      out.write("\tresult.innerHTML=\"\";\r\n");
      out.write("\tpagingdiv.innerHTML = \"\";\r\n");
      out.write("\r\n");
      out.write("\tif (type != 'paging') {\r\n");
      out.write("\t\tvar startindexinput = document.getElementById('startIndex');\r\n");
      out.write("\t\tstartindexinput.value = \"1\";\r\n");
      out.write("\t}\t\r\n");
      out.write("\t\r\n");
      out.write("\trequest = {startIndex:1, query:\"\"};\r\n");
      out.write("\tDWRUtil.getValues(request);\r\n");
      out.write("\t\r\n");
      out.write("\tsearchService.getSearchResults(request, fillPage);\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("function fillPage(data){\r\n");
      out.write("\r\n");
      out.write("\tvar list = data.results;\r\n");
      out.write("\tvar resultdiv = document.getElementById('result');\r\n");
      out.write("\tvar pagingdiv = document.getElementById('paging');\r\n");
      out.write("\r\n");
      out.write("\tresultdiv.innerHTML = \"\";\r\n");
      out.write("\tpagingdiv.innerHTML = \"\";\r\n");
      out.write("\r\n");
      out.write("\tif (list.length == 0) {\r\n");
      out.write("\t\tresultdiv.innerHTML = \"<div align='center'>Sorry, we can't find what you want...</div>\";\r\n");
      out.write("\t\treturn;\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("\tfor(var i=0; i<list.length; i++) {\r\n");
      out.write("\t\tvar ele = document.createElement('div');\r\n");
      out.write("\t\tele.setAttribute('id','info' + list[i]);\r\n");
      out.write("\t\tele.innerHTML = \"<div align='center'>loading..</div>\";\r\n");
      out.write("\t\tresultdiv.appendChild(ele);\r\n");
      out.write("\t\tsearchService.getSearchResultById(list[i], fillDetailResult);\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("\tminPage = data.minPage;\r\n");
      out.write("\tmaxPage = data.maxPage;\r\n");
      out.write("\tstartIndex = data.startIndex;\r\n");
      out.write("\thasNext = data.hasNext;\r\n");
      out.write("\t\r\n");
      out.write("\tif (minPage != 1) {\r\n");
      out.write("\t\tvar link = document.createElement('a');\r\n");
      out.write("\t\tlink.setAttribute(\"href\",\"javascript:paging('\" + ((minPage-11)*10+1) + \"')\");\r\n");
      out.write("\t\tlink.innerHTML = \"å10é¡µ<<\";\r\n");
      out.write("\t\tpagingdiv.appendChild(link);\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("\tfor (var j=minPage; j <=maxPage; j++)\r\n");
      out.write("\t{\r\n");
      out.write("\t\tif ((j-1)*10+1 != startIndex)\r\n");
      out.write("\t\t{\r\n");
      out.write("\t\t\tvar link = document.createElement('a');\r\n");
      out.write("\t\t\tlink.setAttribute(\"href\",\"javascript:paging('\" + ((j-1)*10+1) + \"')\");\r\n");
      out.write("\t\t\tlink.innerHTML = \"ç¬¬\" + j + \"é¡µ\";\r\n");
      out.write("\t\t\tpagingdiv.appendChild(link);\r\n");
      out.write("\t\t}\r\n");
      out.write("\t\telse {\r\n");
      out.write("\t\t\tpagingdiv.innerHTML += (\"ç¬¬\" + j + \"é¡µ\");\r\n");
      out.write("\t\t}\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("\tif (hasNext == 1) {\r\n");
      out.write("\t\tvar link = document.createElement('a');\r\n");
      out.write("\t\tlink.setAttribute(\"href\",\"javascript:paging('\" + (maxPage*10+1) + \"')\");\r\n");
      out.write("\t\tlink.innerHTML = \">>å10é¡µ\";\r\n");
      out.write("\t\tpagingdiv.appendChild(link);\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("function fillDetailResult(record) {\r\n");
      out.write("\tvar result = document.getElementById('info' + record.id);\r\n");
      out.write("\tresult.innerHTML=\"<table align='center' border='0' cellpadding='0' cellspacing='0' width=500 ><tr><td><a href='\" + record.url + \"'target='_blank'>\" + \"<font color=#C60A00 size='2'>\"\r\n");
      out.write("\t                  + \"<font size='2'></font>\" + record.name + \r\n");
      out.write("\t                  \"</font></a><br>\" +\"<font color=#000000 size='2'>\"\r\n");
      out.write("\t                  + record.abstractContent + \"......\" + \"</font><br><a href='detail.jsp?id=\"\r\n");
      out.write("\t                  + record.id + \r\n");
      out.write("\t                  \"' target='_blank'>\"\r\n");
      out.write("\t                  + \"<font size=2>\" + record.url + \"</font>\" + \"</a>\" + \"<br><br>\"\r\n");
      out.write("\t                  + \"</td></tr></table>\";\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("function paging(newIndex) {\r\n");
      out.write("\tdocument.getElementById('startIndex').value = newIndex;\r\n");
      out.write("\tdoSearch('paging');\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("function handlekey(){\r\n");
      out.write("\tif (document.getElementById('query').value == '')\r\n");
      out.write("\t\treturn;\r\n");
      out.write("\tvar intkey = -1;\r\n");
      out.write("\tif(window.event) {\r\n");
      out.write("\t\tintKey = event.keyCode;\r\n");
      out.write("\t\tif(intKey == 13){\r\n");
      out.write("\t\t\tdoSearch('');\r\n");
      out.write("\t\t}\r\n");
      out.write("\t}\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("</script>\r\n");
      out.write("\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("<input type=\"hidden\" name=\"startIndex\" id=\"startIndex\" value=\"1\">\r\n");
      out.write("<!-- è¿æ¯æç´¢æ  -->\r\n");
      out.write("<div id=\"searchbar\">\r\n");
      out.write("\t<table align=\"center\">\r\n");
      out.write("\t\t<tr align=\"center\">\r\n");
      out.write("\t\t\t<td>\r\n");
      out.write("\t\t\t\t<img src=\"../image/logo.gif\" />\r\n");
      out.write("\t\t\t</td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t\t<tr align=\"center\">\r\n");
      out.write("\t\t\t<td><input size=\"65\" type=\"text\" name=\"query\" id=\"query\" value=\"\"  onkeyup=\"handlekey()\">\r\n");
      out.write("\t\t\t<input type=\"button\" value=\"Search\"  id=\"search\" onclick=\"javascript:doSearch('')\"></td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t</table>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!-- è¿æ¯ç»ææ  -->\r\n");
      out.write("<div id=\"result\">\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!-- è¿æ¯åé¡µæ  -->\r\n");
      out.write("<div id=\"paging\">\r\n");
      out.write("\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!-- è¿æ¯Footer \r\n");
      out.write("<div id=\"footer\">\r\n");
      out.write("\t<table align=\"center\">\r\n");
      out.write("\t\t<tr align=\"center\">\r\n");
      out.write("\t\t\t<td>\r\n");
      out.write("\t\t\t\t<img src=\"../image/footer.jpg\" />\r\n");
      out.write("\t\t\t</td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t</table>\r\n");
      out.write("</div>\r\n");
      out.write("-->\r\n");
      out.write("</body>\r\n");
      out.write("</html>\r\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
