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

	//DAO对象，用来从数据库中取出条目详细信息
	private SearchResultDao searchResultDao;

	/**
	 * 执行检索的主要接口
	 */
	public SearchResults getSearchResults(SearchRequest request) {

		//初始化一个SearchResults对象
		SearchResults results = new SearchResults();

		//从SearchRequest中取出用户检索关键词
		//交到makeQuery方法中，生产一个Lucene的Query实例
		Query query = makeQuery(request.getQuery());

		ArrayList<String> list = new ArrayList<String>();

		try {
			IndexSearcher searcher = new IndexSearcher(INDEX_STORE_PATH);
			//在索引中搜索，得到结果
			Hits hits = searcher.search(query);

			//取得结果长度
			int length = hits.length();
			//从SearchRequest中取得所需要的记录的起始位置
			int startIndex = request.getStartIndex();
			int endIndex;

			if (startIndex > length)
			{
				// TODO should be impossible
			}
			else
			{
				//每页显示10条记录，所以把当前页的最后一条记录设为startIndex + 9
				endIndex = startIndex + 9;
				//如果endIndex超出了length的范围就令endIndex与length相等
				if (endIndex >= length) {
					endIndex = length;
				}

				//循环将当前要显示的产品的ID号加入到一个ArrayList中
				for (int i = startIndex; i <= endIndex; i++) {
					Document doc = hits.doc(i-1);
					String id = doc.get("itemId");
					list.add(id);
				}
			}

			//加入到SearchResults中
			results.setResults(list);
			
			//开始计算当前页中所要显示的分页标签中的起始页和终止页
			int startPage;
			int endPage;
			
			//计算起始页
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
			
			//计算终止页
			endPage = startPage + span;
			
			//将参数分别传入SearchResults中
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
	 * 从DAO中取得条目的详细信息
	 */
	public SearchResult getSearchResultById(int id) {
		return searchResultDao.getSearchResultById(id);
	}

	/**
	 * 取得SearchResultDao对象
	 * @return
	 */
	public SearchResultDao getSearchResultDao() {
		return searchResultDao;
	}

	/**
	 * 传入一个Dao对象
	 * @param searchResultDao
	 */
	public void setSearchResultDao(SearchResultDao searchResultDao) {
		this.searchResultDao = searchResultDao;
	}

	/**
	 * makeQuery方法，用来从用户输入的关键字
	 * 构造一个Lucene的Query实例，在此处构造的是一个简单的TermQuery实例
	 * @param query
	 * @return
	 */
	private Query makeQuery(String query) {
		TermQuery qu = new TermQuery(new Term("all", query.toLowerCase()));
		return qu;
	}
}
