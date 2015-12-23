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
	//Lucene的Analyzer
	private Analyzer analyzer = null;
	//词库文件
	private String dictionary_file = PropertyConfiguration.getWordDictionary();

	//构造函数，传入一个索引存放位置的参数
	public ItemIndexer(String indexPath) throws Exception {
		this.indexPath = indexPath;
		initialize();
	}

	/**
	 * 初始化方法，实例化了一个JE分词的Analyzer
	 * 然后把词库加载入分词器的词库中
	 * @throws Exception
	 */
	private void initialize() throws Exception {
		analyzer = new MMAnalyzer();
		FileReader reader = new FileReader(dictionary_file);
		MMAnalyzer.addDictionary(reader);
		writer = new IndexWriter(indexPath, analyzer, true);
	}
	
	//关闭IndexWriter
	public void close() {
		try{
			writer.close();
		} catch(Exception e) {
			e.printStackTrace();
			writer = null;
		}
	}
	
	//向索引中加入文档，参数传入一个Item对象和一个int型的ID
	public void addItem(Item item, int id) throws Exception {
		
		Document doc = ItemDocument.buildItemDocument(item, id);
		writer.addDocument(doc);
	}
	
	//优化索引
	public void optimizeIndex() throws Exception {
		writer.optimize();
	}
}
