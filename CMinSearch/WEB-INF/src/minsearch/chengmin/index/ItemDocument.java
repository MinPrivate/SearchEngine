package minsearch.chengmin.index;

import org.apache.lucene.document.*;

import minsearch.chengmin.database.Item;

public class ItemDocument {

	//Field名称，当前条目在数据库中的ID
		private static final String ITEM_ID = "itemId";
		//Field名称，条目被建立索引的时间
		private static final String INDEX_TIME = "indexTime";
		//Field名称，条目原始页面URL
		private static final String ITEM_URL = "itemUrl";
		//Field名称，条目的分类
		private static final String CATEGORY = "category";
		//Field名称，条目的名字
		private static final String ITEM_NAME = "name";

		//private static final String PRODUCT_TYPE = "type";

		public static Document buildItemDocument(Item item, int id) {

			Document doc = new Document();
			
			//构建Field
			Field identifier = new Field(ITEM_ID, id + "", Field.Store.YES,
					Field.Index.UN_TOKENIZED);

			long mills = System.currentTimeMillis();
			Field indexTime = new Field(INDEX_TIME, mills + "", Field.Store.YES,
					Field.Index.UN_TOKENIZED);

			Field itemUrl = new Field(ITEM_URL, item.getOriginalUrl(),
					Field.Store.YES, Field.Index.UN_TOKENIZED);

			Field category = new Field(CATEGORY, item.getCategory(),
					Field.Store.YES, Field.Index.TOKENIZED);

			Field name = new Field(ITEM_NAME, item.getName(),
					Field.Store.YES, Field.Index.TOKENIZED);

			//Field type = new Field(PRODUCT_TYPE, item.getType(),
			//		Field.Store.YES, Field.Index.TOKENIZED);
			
			//最后一个Field将category、name的信息综合起来
			//用户查找时，默认是在Field内进行检索
			String text = item.getCategory();
			text += " " + item.getName();
			//text += " " + item.getType();
			Field all = new Field("all", text, Field.Store.YES, Field.Index.TOKENIZED);

			// add all
			doc.add(identifier);
			doc.add(indexTime);
			doc.add(itemUrl);
			doc.add(category);
			doc.add(name);
			//doc.add(type);
			doc.add(all);

			return doc;
		}
}
