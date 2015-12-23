package minsearch.chengmin.searchengine.search;

public class SearchRequest {

	
	private int page;
	//总页数
	private int numOfPage;
	
	//新页面的起始索引号
	private int startIndex;
	//用户输入的查询关键字
	private String query;

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getStartIndex() {
		return startIndex;
	}

	public void setStartIndex(int startIndex) {
		this.startIndex = startIndex;
	}

	public int getNumOfPage() {
		return numOfPage;
	}

	public void setNumOfPage(int numOfPage) {
		this.numOfPage = numOfPage;
	}

	public String getQuery() {
		return query;
	}

	public void setQuery(String query) {
		this.query = query;
	}
}
