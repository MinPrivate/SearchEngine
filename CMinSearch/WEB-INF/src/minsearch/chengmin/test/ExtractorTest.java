package minsearch.chengmin.test;

import java.io.*;

import minsearch.chengmin.extractor.Extractor;
import minsearch.chengmin.extractor.LiteraryQuotationExtract;

public class ExtractorTest {
	
	public static void main(String[] args) throws Exception {
		Extractor extractor = new LiteraryQuotationExtract();
		extractor.setOutputPath("D:\\Eclipse files\\SearchEngine\\Data\\diangu2");
		extractor.setImageDir("D:\\Eclipse files\\SearchEngine\\Data\\image2");
		extractor.setMirrorDir("D:\\Eclipse files\\SearchEngine\\Heritrix\\jobs\\diangu-20130417015303037\\mirror\\");
		
		Extractor.traverse(extractor,
				new File("D:\\Eclipse files\\SearchEngine\\Heritrix\\jobs\\diangu-20130417015303037\\mirror\\www.confucianism.com.cn\\html\\all"));
		System.out.println(Extractor.count);
	}
}