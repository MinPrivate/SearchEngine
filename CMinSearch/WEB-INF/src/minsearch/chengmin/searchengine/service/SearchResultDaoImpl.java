package minsearch.chengmin.searchengine.service;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.RowCallbackHandler;

import minsearch.chengmin.searchengine.search.SearchResult;

public class SearchResultDaoImpl implements SearchResultDao{

	//����Դ�����Ի�ȡ���ݿ�����
	private DataSource dataSource;

	public DataSource getDataSource() {
		return dataSource;
	}

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	//���ڻ�÷�װ����Ŀ��ϸ��Ϣ��SearchResult����
	public SearchResult getSearchResultById(int id) {
		
		//ʹ��һ��final���͵ı�������ʹ�����ڲ���ʹ��
		final int id_db = id;
		//����һ��SearchResult����
		final SearchResult sr = new SearchResult();
		//��ʼ��һ��JDBCTemplate
		JdbcTemplate template = new JdbcTemplate(dataSource);
		//��ѯ
		template.query("select * from Item where id=?",
				//ΪPreparedStatement�趨����
				new PreparedStatementSetter() {

					public void setValues(PreparedStatement ps)
							throws SQLException {
						ps.setInt(1, id_db);

					}
				}, new RowCallbackHandler() {

					//�����ѯ���
					public void processRow(ResultSet rs) throws SQLException {
						try{
							//װ�ڸ�������
							sr.setAbstractContent(rs.getString("abstractContent"));
							sr.setContent(rs.getString("content"));
							sr.setImageUrl(rs.getString("imageUrl"));
							sr.setUrl(rs.getString("url"));
							sr.setName(rs.getString("name"));
							//sr.setType(rs.getString("type"));
							sr.setId(rs.getInt("id"));
							
							//�����ڸ�ʽ�����и�ʽ�����
							SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
							String time = rs.getString("updatedTime");
							
							if (time != null && !time.trim().equals("")) {
								Date d = new Date(Long.parseLong(time));
								String timestr = sf.format(d);
								sr.setIndexCreateTime(timestr);
							}
							else {
								sr.setIndexCreateTime("undefined");
							}
							
						}catch(Exception e){
							e.printStackTrace();
						}
					}
				});
		return sr;
	}
}
