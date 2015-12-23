package minsearch.chengmin.test;

import java.io.IOException;

import minsearch.chengmin.extractor.BuildWordVacabulary;

public class BuildWordVacabularyTest {

	public static void main(String[] args) throws IOException {
		BuildWordVacabulary builder = new BuildWordVacabulary();
		builder.setWordvacabularyPath("D:\\Eclipse files\\SearchEngine\\data\\word.txt");
		builder.loadItemFromDirectory(new String[] { "D:\\Eclipse files\\SearchEngine\\Data\\diangu\\" });
	}
}
