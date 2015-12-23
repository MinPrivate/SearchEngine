package minsearch.chengmin.searchengine.search;

public class SearchResult {

	//��Ʒ�����ݿ��е�ID
	private int id;
	//��Ŀ����
	private String category;
	//��Ŀ����
	private String name;
	//��ϸ��Ϣ
	private String content;
	//ժҪ��Ϣ
	private String abstractContent;
	//ԭʼURL
	private String url;
	//ͼƬ�ļ���
	private String imageUrl;
	//����ʱ��
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
