package minsearch.chengmin.test;

import minsearch.chengmin.processs.ItemTextFileProcessor;

public class ItemTextFileProcessTest {

	public static void main (String [] args) throws Exception {
		ItemTextFileProcessor pro = new ItemTextFileProcessor();
		pro.initialize();
		
		String path1 = "D:\\Eclipse files\\SearchEngine\\Data\\diangu\\";
		pro.setDirectories(new String[]{path1});
		pro.process();
	}
}
