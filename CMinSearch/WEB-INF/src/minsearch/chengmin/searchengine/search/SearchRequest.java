package minsearch.chengmin.searchengine.search;

public class SearchRequest {

	
	private int page;
	//��ҳ��
	private int numOfPage;
	
	//��ҳ�����ʼ������
	private int startIndex;
	//�û�����Ĳ�ѯ�ؼ���
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
