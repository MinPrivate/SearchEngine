package minsearch.chengmin.processs;

import java.io.*;
//import java.util.*;

import minsearch.chengmin.database.Item;
import minsearch.chengmin.database.ItemJDBC;
import minsearch.chengmin.extractor.Extractor;
import minsearch.chengmin.index.ItemIndexer;
import minsearch.chengmin.searchengine.config.PropertyConfiguration;

public class ItemTextFileProcessor {

	/**
	 *  这个参数表示存储着产品详细信息的txt文件的目录
	 */
	private String[] directories;
	
	//数据库URL
	private static final String dbUrl = PropertyConfiguration.getDBUrl();
	
	//数据库用户名
	private static final String dbUsr = PropertyConfiguration.getDBUsr();
	
	//数据库密码
	private static final String dbPwd = PropertyConfiguration.getDBPwd();
	
	//ItemJDBC的实例，用来处理数据库操作
	private ItemJDBC itemJDBC = null;
	
	//ItemIndexer
	private ItemIndexer indexer = null;
	
	//产品摘要的长度
	public final static int ABSTRACTCONTENT_LENGTH = 80;
	
	//索引的存放路径，从配置文件中获得
	private static final String indexPath = PropertyConfiguration.getIndexStorePath();
	

	/**
	 * Default constructor
	 * 
	 */
	public ItemTextFileProcessor() {
		initialize();
	}
	
	//初始化方法，创建了ItemJDBC实例和ItemIndexer实例
	public void initialize() {
		try {
			itemJDBC = new ItemJDBC(dbUrl,dbUsr,dbPwd);
			indexer = new ItemIndexer(indexPath);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

	//设置要处理的文件的目录
	//参数为数组类型，表示可以同时处理多个目录内的文件
	public void setDirectories(String[] directories) {
		this.directories = directories;
	}

	//处理逻辑
	public void process() throws Exception {

		//如果ItemJDBC实例没有被成功实例化，则抛出异常
		if (itemJDBC == null) {
			throw new Exception("Database connection failed, pls retry!!");
		}
		
		//如果Indexer实例没有成功被初始化，则抛出异常
		if(indexer == null){
			throw new Exception("Lucene index failed, pls retry!!");
		}
		
		//如果directories对象没有成功实例化，则抛出异常
		if (directories == null || directories.length == 0) {
			return;
		}

		try {
			//遍历所有目录
			for (int i = 0; i < directories.length; i++) {
				File f = new File(directories[i]);
				//处理每个目录
				traverse(f);
			}
			
			//处理完毕后关闭数据库
			closeDB();
			//处理完毕后关闭索引
			closeIndex();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	//处理每个目录 ////////////////////////////////根据每个条目具体内容重写
	private void traverse(File file) throws Exception {
		
		//获取所有文件的列表，然后挨个处理
		String [] files = file.list();
		for (int i = 0; i < files.length; i++) {
			
			File itemfile = new File(file, files[i]);
			//取得所需要的各类Item属性信息
			String fname = itemfile.getName();
			System.out.println(itemfile);
			
			BufferedReader reader = new BufferedReader(new FileReader(itemfile));
			
			String url = reader.readLine();
			//丢弃一行
			reader.readLine();
			String name = reader.readLine();
			//String type = reader.readLine();
			String imageUrl = "";
			String updatedTime = ""; //fname.substring(fname.lastIndexOf("-")+1, fname.lastIndexOf("."));
			
			StringBuffer content = new StringBuffer();
			String line = reader.readLine();
			while (line != null && !line.equals(Extractor.SEPARATOR)){
				content.append(line).append("\r\n");
				line = reader.readLine();
			}
			//imageUrl = reader.readLine();
			
			
			// 生成一个Product的对象
			Item p = new Item();
			p.setCategory("文学");
			p.setName(name);
			//p.setType(type);
			p.setImageUrl(imageUrl);
			p.setOriginalUrl(url);
			
			//制作产品信息摘要
			String contentstr = content.toString();
			p.setContent(contentstr);
			if (contentstr.length() > ABSTRACTCONTENT_LENGTH) {
				p.setAbstractContent(contentstr.substring(0,ABSTRACTCONTENT_LENGTH-1));
			}
			else
				p.setAbstractContent(contentstr);
			
			p.setUpdatedTime(updatedTime);
			
			// 先存入数据库，然后获得返回的ID
			int nextId = insert2DB(p);
			
			// 用刚返回的ID，向索引中加入Item对象
			buildIndex(p, nextId);
			
			//增 关闭reader
			reader.close();
		}
		
		//优化索引
		optimizeIndex();
	}

	//插入数据库
	protected int insert2DB(Item p) throws Exception {
		return itemJDBC.addItem(p);
	}

	//创建索引
	protected void buildIndex(Item p, int nextid) throws Exception {
		indexer.addItem(p, nextid);
	}
	
	//优化索引
	private void optimizeIndex() throws Exception {
		indexer.optimizeIndex();
	}
	
	//关闭索引
	private void closeIndex() throws Exception {
		indexer.close();
	}
	
	//关闭数据库
	private void closeDB() {
		itemJDBC.close();
	}

	public String getDbPwd() {
		return dbPwd;
	}
	
	public String getDbUrl() {
		return dbUrl;
	}

	public String getDbUsr() {
		return dbUsr;
	}

	public String getIndexPath() {
		return indexPath;
	}
}
