package minsearch.chengmin.searchengine.service;

import minsearch.chengmin.searchengine.search.SearchRequest;
import minsearch.chengmin.searchengine.search.SearchResult;
import minsearch.chengmin.searchengine.search.SearchResults;

public interface SearchService {

	public abstract SearchResults getSearchResults(SearchRequest request);

	public abstract SearchResult getSearchResultById(int id);
}
