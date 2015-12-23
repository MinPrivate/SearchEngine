package minsearch.chengmin.searchengine.config;

import java.util.MissingResourceException;
import java.util.ResourceBundle;

public class PropertyConfiguration {

	/* property file identifier */
	private static String CONFIG_FILE = "app";
	//��ʹ�õ�ResourceBundle
	private static ResourceBundle bundle;
	
	//��̬��ʼ���Σ����ڼ��������ļ�
	static {
		try {
			bundle = ResourceBundle.getBundle(CONFIG_FILE);
		} catch (MissingResourceException e) {
			e.printStackTrace();
		}
	}

	//��̬˽�з��������ڴ������ļ���ȡ������ֵ
	private static String getValue(String key) {
		return bundle.getString(key);
	}

	//��ȡ���ݿ��URL
	public static String getDBUrl() {
		String val = getValue("jdbc.url");
		return val;
	}

	//��ȡ���ݿ���û���
	public static String getDBUsr() {
		String val = getValue("jdbc.username");
		return val;
	}

	//��ȡ���ݿ������
	public static String getDBPwd() {
		String val = getValue("jdbc.password");
		return val;
	}

	//��ȡ��Ŀ��Ϣ��Ŀ¼
	public static String getItemDir() {
		String val = getValue("item.directory");
		return val;
	}

	//��ȡ�����������������Ŀ¼
	public static String getIndexStorePath() {
		String val = getValue("item.index.directory");
		return val;
	}

	//��ȡ��Ŀ��Ϣ�ļ��Ĵ��Ŀ¼
	//public static String getProductMobileDir() {
	//	String val = getValue("product.mobile.directory");
	//	return val;
	//}

	//��ȡ��ĿͼƬ���Ŀ¼
	public static String getItemImageDir() {
		String val = getValue("item.image.directory");
		return val;
	}

	//��ȡ�ʿ�Ŀ¼
	public static String getWordDictionary() {
		String val = getValue("word.dictionary.file");
		return val;
	}
}
