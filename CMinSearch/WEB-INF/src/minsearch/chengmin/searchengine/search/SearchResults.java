package minsearch.chengmin.searchengine.search;

import java.util.ArrayList;

public class SearchResults {

	//�������н����ID��
	private ArrayList results = new ArrayList();
	//��ǰҳ��ʼ������
	private int startIndex;
	//��ǰҳ������Ҫ��ʾ����Сҳ
	private int minPage;
	//��ǰҳ������Ҫ��ʾ�����ҳ
	private int maxPage;
	//���б�maxPage�����ҳ����
	private int hasNext;
	
	
	public int getHasNext() {
		return hasNext;
	}

	public void setHasNext(int hasNext) {
		this.hasNext = hasNext;
	}

	public int getMaxPpage() {
		return maxPage;
	}

	public void setMaxPage(int maxPage) {
		this.maxPage = maxPage;
	}

	public int getMinPage() {
		return minPage;
	}

	public void setMinPage(int minPage) {
		this.minPage = minPage;
	}

	public ArrayList getResults() {
		return results;
	}

	public void setResults(ArrayList results) {
		this.results = results;
	}

	public int getStartIndex() {
		return startIndex;
	}

	public void setStartIndex(int startIndex) {
		this.startIndex = startIndex;
	}
}
