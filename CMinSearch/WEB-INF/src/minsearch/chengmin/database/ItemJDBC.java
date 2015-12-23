package minsearch.chengmin.database;

import java.sql.*;

public class ItemJDBC {

	private Connection con = null;

	private Statement stmt = null;

	private ResultSet rs = null;

	private PreparedStatement pstmt = null;

	private boolean autoCommit = true;

	public ItemJDBC(String url, String usr, String pwd) throws Exception {
		//��׼��JDBC��ȡ���ݿ����ӵķ�ʽ
		Class.forName("com.mysql.jdbc.Driver").newInstance();
		con = DriverManager.getConnection(url, usr, pwd);
		//�����Զ��ύΪtrue
		con.setAutoCommit(autoCommit);
	}

	//����ΪItem����
	public int addItem(Item p) throws Exception {

		//����ȡ�õ�ǰҪ����ļ�¼��ID�ţ��Ա㷵�ظ�����
		int nextid = getNextId();

		if (nextid < 0) {
			throw new Exception("Can't get next id.");
		}

		// since we get the next id, add the info to db
		//��������ȡ��
		String category = p.getCategory();
		String name = p.getName();
		String content = p.getContent();
		String abstractContent = p.getAbstractContent();
		String originalUrl = p.getOriginalUrl();
		String imageUrl = p.getImageUrl();
		//String type = p.getType();
		String updatedTime = p.getUpdatedTime();

		//��PreParedStatement�����ݿ��������
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

		//�ѵ�ǰ������¼�¼��IDֵ����
		return nextid;
	}

	//ȡ��Ҫ������¼�¼��ID��
	private int getNextId() throws Exception {

		int result = -1;
		//��max()����ȡ��ID����е����ֵ������1�������һ��Ҫ����ļ�¼��IDֵ
		String sql = "select max(id)+1 from Item";

		stmt = con.createStatement();
		rs = stmt.executeQuery(sql);

		while (rs.next()) {
			result = rs.getInt(1);
		}

		return result;
	}

	//�ر�����
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
