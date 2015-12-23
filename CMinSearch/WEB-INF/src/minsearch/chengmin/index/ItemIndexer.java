package minsearch.chengmin.index;

import java.io.*;

import jeasy.analysis.MMAnalyzer;

import org.apache.lucene.analysis.*;
import org.apache.lucene.document.Document;
import org.apache.lucene.index.*;

import minsearch.chengmin.database.Item;
import minsearch.chengmin.searchengine.config.PropertyConfiguration;

public class ItemIndexer {

private String indexPath = "";
	
	private IndexWriter writer = null;
	//Lucene��Analyzer
	private Analyzer analyzer = null;
	//�ʿ��ļ�
	private String dictionary_file = PropertyConfiguration.getWordDictionary();

	//���캯��������һ���������λ�õĲ���
	public ItemIndexer(String indexPath) throws Exception {
		this.indexPath = indexPath;
		initialize();
	}

	/**
	 * ��ʼ��������ʵ������һ��JE�ִʵ�Analyzer
	 * Ȼ��Ѵʿ������ִ����Ĵʿ���
	 * @throws Exception
	 */
	private void initialize() throws Exception {
		analyzer = new MMAnalyzer();
		FileReader reader = new FileReader(dictionary_file);
		MMAnalyzer.addDictionary(reader);
		writer = new IndexWriter(indexPath, analyzer, true);
	}
	
	//�ر�IndexWriter
	public void close() {
		try{
			writer.close();
		} catch(Exception e) {
			e.printStackTrace();
			writer = null;
		}
	}
	
	//�������м����ĵ�����������һ��Item�����һ��int�͵�ID
	public void addItem(Item item, int id) throws Exception {
		
		Document doc = ItemDocument.buildItemDocument(item, id);
		writer.addDocument(doc);
	}
	
	//�Ż�����
	public void optimizeIndex() throws Exception {
		writer.optimize();
	}
}
