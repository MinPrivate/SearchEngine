package minsearch.chengmin.extractor;

import java.io.*;
//import java.text.Collator;
import java.util.*;

public class BuildWordVacabulary {

	private String wordVacabularyPath = null;

	private ArrayList<String> wordList = new ArrayList<String>();
	
	//遍历目录分析条目名称
	public void loadItemFromDirectory(String[] dirs) throws IOException {
		String fullname = null;
		try {
			if (wordVacabularyPath == null) {
				throw new IOException("词库存放的文件没有指定，无法生成！");
			}

			for (int i = 0; i < dirs.length; i++) {

				String folder = dirs[i];
				File foo = new File(folder);
				String[] files = foo.list();

				for (int j = 0; j < files.length; j++) {
					File f = new File(foo, files[j]);

					 fullname = f.getName();
					 
					// 第一步取得条目的名称
					// 第二步取得产品的型号
					System.out.println(fullname);
					
					//if (fullname.indexOf("-") == fullname.lastIndexOf("-")) {
					//	continue;
					//}

					//String type = fullname.substring(fullname.indexOf("-") + 1,
					//		fullname.lastIndexOf("-"));
					String name = fullname.substring(fullname.indexOf("-") + 2, 
														fullname.length() - 4);

					//if (!wordList.contains(type)) {
					//	wordList.add(type);
					//}
					//去掉name中的符号
					//System.out.println(name);
					name = name.replace("“", "");
					name = name.replace("”", "");
					name = name.replace("・", "");
					//System.out.println(name);
					
					if (!wordList.contains(name)) {
						wordList.add(name);
					}
					//if (!wordList.contains(name+type)) {
					//	wordList.add(name+type);
					//}
				}

			}

			Collections.sort(wordList);
			writeToFile();
		} catch (Exception e) {
			System.out.println(fullname);
			e.printStackTrace();
		}
	}

	private void writeToFile() throws IOException {

		BufferedWriter writer = new BufferedWriter(new FileWriter(
				wordVacabularyPath));

		for (int i = 0; i < wordList.size(); i++) {
			writer.write((String) wordList.get(i));
			writer.newLine();
		}

		writer.close();
	}

	public void setWordvacabularyPath(String wordvacabularypath) {
		
		this.wordVacabularyPath = wordvacabularypath;
	}
	
	private static String replace(String line) {

		HashMap<String, String> map = new HashMap<String, String>();
		map.put("，", "");
		map.put(",", "");
		map.put("。", "");
		//map.put(".", "");
		map.put("〈", "");
		map.put("<", "");
		map.put("〉", "");
		map.put(">", "");
		map.put("‖", "");
		map.put("|", "");
		map.put("《", "");
		map.put("<", "");
		map.put("》", "");
		map.put(">", "");
		map.put("〔", "");
		map.put("[", "");
		map.put("〕", "");
		map.put("]", "");
		map.put("﹖", "");
		map.put("?", "");
		map.put("？", "");
		map.put("?", "");
		map.put("“", "");
		map.put("\"", "");
		map.put("”", "");
		map.put("\"", "");
		map.put("：", "");
		map.put(":", "");
		map.put("、", "");
		map.put(",", "");
		map.put("（", "");
		map.put("(", "");
		map.put("）", "");
		map.put(")", "");
		map.put("【", "");
		map.put("[", "");
		map.put("】", "");
		map.put("]", "");
		map.put("—", "");
		map.put("-", "");
		map.put("～", "");
		map.put("~", "");
		map.put("！", "");
		map.put("!", "");
		map.put("‵", "");
		map.put("'", "");
		map.put("①", "1");
		map.put("②", "2");
		map.put("③", "3");
		map.put("④", "4");
		map.put("⑤", "5");
		map.put("⑥", "6");
		map.put("⑦", "7");
		map.put("⑧", "8");
		map.put("⑨", "9");

		int length = line.length();
		for (int i = 0; i < length - 2; i++) {
			String charat = line.substring(i, i + 1);
			if (map.get(charat) != null) {
				line = line.replace(charat, (String) map.get(charat));
			}
		}

		return line;
	}
}