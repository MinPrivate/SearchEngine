package minsearch.chengmin.searchengine.search;

import java.util.ArrayList;

public class SearchResults {

	//保存所有结果的ID号
	private ArrayList results = new ArrayList();
	//当前页起始索引号
	private int startIndex;
	//当前页面中所要显示的最小页
	private int minPage;
	//当前页面中所要显示的最大页
	private int maxPage;
	//还有比maxPage更大的页数吗
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
