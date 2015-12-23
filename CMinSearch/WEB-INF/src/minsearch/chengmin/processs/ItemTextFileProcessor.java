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
	 *  ���������ʾ�洢�Ų�Ʒ��ϸ��Ϣ��txt�ļ���Ŀ¼
	 */
	private String[] directories;
	
	//���ݿ�URL
	private static final String dbUrl = PropertyConfiguration.getDBUrl();
	
	//���ݿ��û���
	private static final String dbUsr = PropertyConfiguration.getDBUsr();
	
	//���ݿ�����
	private static final String dbPwd = PropertyConfiguration.getDBPwd();
	
	//ItemJDBC��ʵ���������������ݿ����
	private ItemJDBC itemJDBC = null;
	
	//ItemIndexer
	private ItemIndexer indexer = null;
	
	//��ƷժҪ�ĳ���
	public final static int ABSTRACTCONTENT_LENGTH = 80;
	
	//�����Ĵ��·�����������ļ��л��
	private static final String indexPath = PropertyConfiguration.getIndexStorePath();
	

	/**
	 * Default constructor
	 * 
	 */
	public ItemTextFileProcessor() {
		initialize();
	}
	
	//��ʼ��������������ItemJDBCʵ����ItemIndexerʵ��
	public void initialize() {
		try {
			itemJDBC = new ItemJDBC(dbUrl,dbUsr,dbPwd);
			indexer = new ItemIndexer(indexPath);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

	//����Ҫ������ļ���Ŀ¼
	//����Ϊ�������ͣ���ʾ����ͬʱ������Ŀ¼�ڵ��ļ�
	public void setDirectories(String[] directories) {
		this.directories = directories;
	}

	//�����߼�
	public void process() throws Exception {

		//���ItemJDBCʵ��û�б��ɹ�ʵ���������׳��쳣
		if (itemJDBC == null) {
			throw new Exception("Database connection failed, pls retry!!");
		}
		
		//���Indexerʵ��û�гɹ�����ʼ�������׳��쳣
		if(indexer == null){
			throw new Exception("Lucene index failed, pls retry!!");
		}
		
		//���directories����û�гɹ�ʵ���������׳��쳣
		if (directories == null || directories.length == 0) {
			return;
		}

		try {
			//��������Ŀ¼
			for (int i = 0; i < directories.length; i++) {
				File f = new File(directories[i]);
				//����ÿ��Ŀ¼
				traverse(f);
			}
			
			//������Ϻ�ر����ݿ�
			closeDB();
			//������Ϻ�ر�����
			closeIndex();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	//����ÿ��Ŀ¼ ////////////////////////////////����ÿ����Ŀ����������д
	private void traverse(File file) throws Exception {
		
		//��ȡ�����ļ����б�Ȼ�󰤸�����
		String [] files = file.list();
		for (int i = 0; i < files.length; i++) {
			
			File itemfile = new File(file, files[i]);
			//ȡ������Ҫ�ĸ���Item������Ϣ
			String fname = itemfile.getName();
			System.out.println(itemfile);
			
			BufferedReader reader = new BufferedReader(new FileReader(itemfile));
			
			String url = reader.readLine();
			//����һ��
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
			
			
			// ����һ��Product�Ķ���
			Item p = new Item();
			p.setCategory("��ѧ");
			p.setName(name);
			//p.setType(type);
			p.setImageUrl(imageUrl);
			p.setOriginalUrl(url);
			
			//������Ʒ��ϢժҪ
			String contentstr = content.toString();
			p.setContent(contentstr);
			if (contentstr.length() > ABSTRACTCONTENT_LENGTH) {
				p.setAbstractContent(contentstr.substring(0,ABSTRACTCONTENT_LENGTH-1));
			}
			else
				p.setAbstractContent(contentstr);
			
			p.setUpdatedTime(updatedTime);
			
			// �ȴ������ݿ⣬Ȼ���÷��ص�ID
			int nextId = insert2DB(p);
			
			// �øշ��ص�ID���������м���Item����
			buildIndex(p, nextId);
			
			//�� �ر�reader
			reader.close();
		}
		
		//�Ż�����
		optimizeIndex();
	}

	//�������ݿ�
	protected int insert2DB(Item p) throws Exception {
		return itemJDBC.addItem(p);
	}

	//��������
	protected void buildIndex(Item p, int nextid) throws Exception {
		indexer.addItem(p, nextid);
	}
	
	//�Ż�����
	private void optimizeIndex() throws Exception {
		indexer.optimizeIndex();
	}
	
	//�ر�����
	private void closeIndex() throws Exception {
		indexer.close();
	}
	
	//�ر����ݿ�
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
