package minsearch.chengmin.searchengine.service;

import java.util.ArrayList;

import org.apache.lucene.document.Document;
import org.apache.lucene.index.Term;
import org.apache.lucene.search.Hits;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.TermQuery;

import minsearch.chengmin.searchengine.config.PropertyConfiguration;
import minsearch.chengmin.searchengine.search.SearchRequest;
import minsearch.chengmin.searchengine.search.SearchResult;
import minsearch.chengmin.searchengine.search.SearchResults;

public class SearchServiceImpl implements SearchService{

	private static final String ITEM_ID = "itemId";

	private static final String INDEX_TIME = "indexTime";

	private static final String ITEM_URL = "itemUrl";

	private static final String CATEGORY = "category";

	private static final String ITEM_NAME = "name";

	//private static final String PRODUCT_TYPE = "type";

	private static final String ABSTRACTCONTENT = "abstractContent";

	private static final String INDEX_STORE_PATH = PropertyConfiguration.getIndexStorePath();

	//DAO�������������ݿ���ȡ����Ŀ��ϸ��Ϣ
	private SearchResultDao searchResultDao;

	/**
	 * ִ�м�������Ҫ�ӿ�
	 */
	public SearchResults getSearchResults(SearchRequest request) {

		//��ʼ��һ��SearchResults����
		SearchResults results = new SearchResults();

		//��SearchRequest��ȡ���û������ؼ���
		//����makeQuery�����У�����һ��Lucene��Queryʵ��
		Query query = makeQuery(request.getQuery());

		ArrayList<String> list = new ArrayList<String>();

		try {
			IndexSearcher searcher = new IndexSearcher(INDEX_STORE_PATH);
			//���������������õ����
			Hits hits = searcher.search(query);

			//ȡ�ý������
			int length = hits.length();
			//��SearchRequest��ȡ������Ҫ�ļ�¼����ʼλ��
			int startIndex = request.getStartIndex();
			int endIndex;

			if (startIndex > length)
			{
				// TODO should be impossible
			}
			else
			{
				//ÿҳ��ʾ10����¼�����԰ѵ�ǰҳ�����һ����¼��ΪstartIndex + 9
				endIndex = startIndex + 9;
				//���endIndex������length�ķ�Χ����endIndex��length���
				if (endIndex >= length) {
					endIndex = length;
				}

				//ѭ������ǰҪ��ʾ�Ĳ�Ʒ��ID�ż��뵽һ��ArrayList��
				for (int i = startIndex; i <= endIndex; i++) {
					Document doc = hits.doc(i-1);
					String id = doc.get("itemId");
					list.add(id);
				}
			}

			//���뵽SearchResults��
			results.setResults(list);
			
			//��ʼ���㵱ǰҳ����Ҫ��ʾ�ķ�ҳ��ǩ�е���ʼҳ����ֹҳ
			int startPage;
			int endPage;
			
			//������ʼҳ
			if (startIndex % 100 == 0) {
				startPage = (startIndex / 100 - 1) * 10 + 1;
			}
			else {
				startPage = (startIndex/100) * 10 + 1;
			}
			
			int span;
			int hasNext;
			
			float temp = ((float)(length - (startPage-1) * 10 ))/10;
			if (temp > 10 )
			{
				span = 9;
				hasNext = 1;
			}
			else if (temp == 10) {
				span = 9;
				hasNext = 0;
			}
			else {
				hasNext = 0;
				if ((int)temp < temp) {
					span = (int)temp;
				}
				else {
					span = (int)temp -1;
				}
				
			}
			
			//������ֹҳ
			endPage = startPage + span;
			
			//�������ֱ���SearchResults��
			results.setMinPage(startPage);
			results.setMaxPage(endPage);
			results.setHasNext(hasNext);
			results.setStartIndex(startIndex);

		} catch (Exception e) {
			e.printStackTrace();
		}

		return results;
	}

	/**
	 * ��DAO��ȡ����Ŀ����ϸ��Ϣ
	 */
	public SearchResult getSearchResultById(int id) {
		return searchResultDao.getSearchResultById(id);
	}

	/**
	 * ȡ��SearchResultDao����
	 * @return
	 */
	public SearchResultDao getSearchResultDao() {
		return searchResultDao;
	}

	/**
	 * ����һ��Dao����
	 * @param searchResultDao
	 */
	public void setSearchResultDao(SearchResultDao searchResultDao) {
		this.searchResultDao = searchResultDao;
	}

	/**
	 * makeQuery�������������û�����Ĺؼ���
	 * ����һ��Lucene��Queryʵ�����ڴ˴��������һ���򵥵�TermQueryʵ��
	 * @param query
	 * @return
	 */
	private Query makeQuery(String query) {
		TermQuery qu = new TermQuery(new Term("all", query.toLowerCase()));
		return qu;
	}
}
