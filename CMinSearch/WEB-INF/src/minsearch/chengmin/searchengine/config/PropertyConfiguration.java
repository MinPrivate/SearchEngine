package minsearch.chengmin.searchengine.config;

import java.util.MissingResourceException;
import java.util.ResourceBundle;

public class PropertyConfiguration {

	/* property file identifier */
	private static String CONFIG_FILE = "app";
	//所使用的ResourceBundle
	private static ResourceBundle bundle;
	
	//静态初始化段，用于加载属性文件
	static {
		try {
			bundle = ResourceBundle.getBundle(CONFIG_FILE);
		} catch (MissingResourceException e) {
			e.printStackTrace();
		}
	}

	//静态私有方法，用于从属性文件中取得属性值
	private static String getValue(String key) {
		return bundle.getString(key);
	}

	//获取数据库的URL
	public static String getDBUrl() {
		String val = getValue("jdbc.url");
		return val;
	}

	//获取数据库的用户名
	public static String getDBUsr() {
		String val = getValue("jdbc.username");
		return val;
	}

	//获取数据库的密码
	public static String getDBPwd() {
		String val = getValue("jdbc.password");
		return val;
	}

	//获取条目信息的目录
	public static String getItemDir() {
		String val = getValue("item.directory");
		return val;
	}

	//获取存放搜索引擎索引的目录
	public static String getIndexStorePath() {
		String val = getValue("item.index.directory");
		return val;
	}

	//获取条目信息文件的存放目录
	//public static String getProductMobileDir() {
	//	String val = getValue("product.mobile.directory");
	//	return val;
	//}

	//获取条目图片存放目录
	public static String getItemImageDir() {
		String val = getValue("item.image.directory");
		return val;
	}

	//获取词库目录
	public static String getWordDictionary() {
		String val = getValue("word.dictionary.file");
		return val;
	}
}
