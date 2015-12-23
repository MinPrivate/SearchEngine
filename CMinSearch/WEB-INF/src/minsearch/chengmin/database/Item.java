package minsearch.chengmin.database;

public class Item {

		//条目类型
		private String category = null;
		//条目名称
		private String name = null;
		//
		//private String type = null;
		//条目具体内容
		private String content = null;
		//用于显示在搜索结果列表中的信息摘要
		private String abstractContent = null;
		//原始URL
		private String originalUrl = null;
		//图片Url
		private String imageUrl = null;
		//最后更新时间
		private String updatedTime = null;

		public String getUpdatedTime() {
			return updatedTime;
		}

		public void setUpdatedTime(String updatedTime) {
			this.updatedTime = updatedTime;
		}

		public String getContent() {
			return content;
		}

		public void setContent(String content) {
			this.content = content;
		}

		public String getImageUrl() {
			return imageUrl;
		}

		public void setImageUrl(String imageUrl) {
			this.imageUrl = imageUrl;
		}

		public String getOriginalUrl() {
			return originalUrl;
		}

		public void setOriginalUrl(String originalUrl) {
			this.originalUrl = originalUrl;
		}

		public String getAbstractContent() {
			return abstractContent;
		}

		public void setAbstractContent(String abstractContent) {
			this.abstractContent = abstractContent;
		}

		public String getCategory() {
			return category;
		}

		public void setCategory(String category) {
			this.category = category;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		/*public String getType() {
			return type;
		}

		public void setType(String type) {
			this.type = type;
		}
		*/
}
