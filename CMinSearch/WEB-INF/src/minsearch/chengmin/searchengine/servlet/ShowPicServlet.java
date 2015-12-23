package minsearch.chengmin.searchengine.servlet;

import java.io.*;

import javax.servlet.ServletException;
import javax.servlet.http.*;

import minsearch.chengmin.searchengine.config.PropertyConfiguration;

public class ShowPicServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private static final String path = PropertyConfiguration.getItemImageDir();

	protected void service(HttpServletRequest req, HttpServletResponse rep)
			throws ServletException, IOException {

		String id = req.getParameter("id");
		if (id == null) {
			return;
		}

		OutputStream os = rep.getOutputStream();
		rep.setContentType("image/jpeg");

		File f = new File(new File(path), id);
		InputStream is = new FileInputStream(f);

		byte[] bs = new byte[512];
		int length = 512;
		while ((length = is.read(bs)) != -1) {
			os.write(bs, 0, length);
		}

		os.flush();
		
		is.close();

	}

}
