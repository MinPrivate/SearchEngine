package minsearch.chengmin.database;

public class Item {

		//��Ŀ����
		private String category = null;
		//��Ŀ����
		private String name = null;
		//
		//private String type = null;
		//��Ŀ��������
		private String content = null;
		//������ʾ����������б��е���ϢժҪ
		private String abstractContent = null;
		//ԭʼURL
		private String originalUrl = null;
		//ͼƬUrl
		private String imageUrl = null;
		//������ʱ��
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
