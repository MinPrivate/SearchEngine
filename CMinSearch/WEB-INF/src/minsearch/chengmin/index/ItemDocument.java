package minsearch.chengmin.index;

import org.apache.lucene.document.*;

import minsearch.chengmin.database.Item;

public class ItemDocument {

	//Field���ƣ���ǰ��Ŀ�����ݿ��е�ID
		private static final String ITEM_ID = "itemId";
		//Field���ƣ���Ŀ������������ʱ��
		private static final String INDEX_TIME = "indexTime";
		//Field���ƣ���Ŀԭʼҳ��URL
		private static final String ITEM_URL = "itemUrl";
		//Field���ƣ���Ŀ�ķ���
		private static final String CATEGORY = "category";
		//Field���ƣ���Ŀ������
		private static final String ITEM_NAME = "name";

		//private static final String PRODUCT_TYPE = "type";

		public static Document buildItemDocument(Item item, int id) {

			Document doc = new Document();
			
			//����Field
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
			
			//���һ��Field��category��name����Ϣ�ۺ�����
			//�û�����ʱ��Ĭ������Field�ڽ��м���
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
