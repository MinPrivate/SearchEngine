package minsearch.chengmin.searchengine.service;

import minsearch.chengmin.searchengine.search.SearchResult;

public interface SearchResultDao {

	public abstract SearchResult getSearchResultById(int id);
}
