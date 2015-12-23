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

	//数据源，用以获取数据库连接
	private DataSource dataSource;

	public DataSource getDataSource() {
		return dataSource;
	}

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	//用于获得封装了条目详细信息的SearchResult对象
	public SearchResult getSearchResultById(int id) {
		
		//使用一个final类型的变量，以使匿名内部类使用
		final int id_db = id;
		//定义一个SearchResult对象
		final SearchResult sr = new SearchResult();
		//初始化一个JDBCTemplate
		JdbcTemplate template = new JdbcTemplate(dataSource);
		//查询
		template.query("select * from Item where id=?",
				//为PreparedStatement设定参数
				new PreparedStatementSetter() {

					public void setValues(PreparedStatement ps)
							throws SQLException {
						ps.setInt(1, id_db);

					}
				}, new RowCallbackHandler() {

					//处理查询结果
					public void processRow(ResultSet rs) throws SQLException {
						try{
							//装在各个参数
							sr.setAbstractContent(rs.getString("abstractContent"));
							sr.setContent(rs.getString("content"));
							sr.setImageUrl(rs.getString("imageUrl"));
							sr.setUrl(rs.getString("url"));
							sr.setName(rs.getString("name"));
							//sr.setType(rs.getString("type"));
							sr.setId(rs.getInt("id"));
							
							//把日期格式化进行格式化输出
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
