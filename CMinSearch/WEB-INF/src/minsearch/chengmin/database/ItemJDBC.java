package minsearch.chengmin.database;

import java.sql.*;

public class ItemJDBC {

	private Connection con = null;

	private Statement stmt = null;

	private ResultSet rs = null;

	private PreparedStatement pstmt = null;

	private boolean autoCommit = true;

	public ItemJDBC(String url, String usr, String pwd) throws Exception {
		//标准的JDBC获取数据库连接的方式
		Class.forName("com.mysql.jdbc.Driver").newInstance();
		con = DriverManager.getConnection(url, usr, pwd);
		//设置自动提交为true
		con.setAutoCommit(autoCommit);
	}

	//参数为Item对象
	public int addItem(Item p) throws Exception {

		//首先取得当前要插入的记录的ID号，以便返回给索引
		int nextid = getNextId();

		if (nextid < 0) {
			throw new Exception("Can't get next id.");
		}

		// since we get the next id, add the info to db
		//将各属性取出
		String category = p.getCategory();
		String name = p.getName();
		String content = p.getContent();
		String abstractContent = p.getAbstractContent();
		String originalUrl = p.getOriginalUrl();
		String imageUrl = p.getImageUrl();
		//String type = p.getType();
		String updatedTime = p.getUpdatedTime();

		//用PreParedStatement向数据库插入数据
		String expr = "insert into Item (category, name, content, abstractcontent, url, imageUrl,  updatedTime) values(?,?,?,?,?,?,?)";
		pstmt = con.prepareStatement(expr);

		System.out.println("======================="+content);

		pstmt.setString(1, category);
		pstmt.setString(2, name);
		pstmt.setString(3, content);
		pstmt.setString(4, abstractContent);
		pstmt.setString(5, originalUrl);
		pstmt.setString(6, imageUrl);
		//pstmt.setString(7, type);
		pstmt.setString(7, updatedTime);
		
		pstmt.execute();

		//把当前插入的新记录的ID值返回
		return nextid;
	}

	//取得要插入的新记录的ID号
	private int getNextId() throws Exception {

		int result = -1;
		//用max()方法取得ID这个列的最大值，加上1后就是下一个要插入的记录的ID值
		String sql = "select max(id)+1 from Item";

		stmt = con.createStatement();
		rs = stmt.executeQuery(sql);

		while (rs.next()) {
			result = rs.getInt(1);
		}

		return result;
	}

	//关闭连接
	public void close() {
		if (con != null) {
			try {
				con.close();
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				con = null;
			}
		}
	}
}
