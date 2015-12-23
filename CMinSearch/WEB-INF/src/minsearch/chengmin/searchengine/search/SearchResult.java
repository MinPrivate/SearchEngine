package minsearch.chengmin.searchengine.search;

public class SearchResult {

	//产品在数据库中的ID
	private int id;
	//条目分类
	private String category;
	//条目名称
	private String name;
	//详细信息
	private String content;
	//摘要信息
	private String abstractContent;
	//原始URL
	private String url;
	//图片文件名
	private String imageUrl;
	//索引时间
	private String indexCreateTime;
	
	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public SearchResult() {

	}

	public String getAbstractContent() {
		return abstractContent;
	}

	public void setAbstractContent(String abstractContent) {
		this.abstractContent = abstractContent;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getIndexCreateTime() {
		return indexCreateTime;
	}

	public void setIndexCreateTime(String indexCreateTime) {
		this.indexCreateTime = indexCreateTime;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
}
