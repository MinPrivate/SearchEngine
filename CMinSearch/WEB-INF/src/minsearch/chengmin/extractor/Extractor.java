package minsearch.chengmin.extractor;

import java.io.*;
import java.util.regex.*;

import org.htmlparser.*;

public abstract class Extractor {

	protected static final String NEWLINE = "\r\n";
	
	/*	��ʾ���н�������·��	*/
	private String outputPath = "";
	
	/*	��ʾ��ǰ���ڱ�������ļ�	*/
	private String inputFilePath;
	
	/*	��ʾ��ǰ���б�ץȡ����ҳ�ľ����Ŀ¼	��Heritrix��mirrorĿ¼��ʾ	*/
	private String mirrorDir = "";
	
	/*	���ڴ�ű�������ͼƬĿ¼	*/
	private String imageDir = "";
	
	/*	HTMLParser��ʵ��	*/
	private Parser parser;
	
	/*	��ͼƬ·�����й�ϣ���㷨���������MD5�㷨	*/
	protected static final String HASH_ALGORITHM = "md5";
	
	/*	�ָ���		*/
	public static final String SEPARATOR = "===============================";
	
	/*	װ����Ҫ�������ҳ�ļ�	*/
	public void loadFile(String path){
		try{
			parser = new Parser(path);
			inputFilePath = path;
			parser.setEncoding("GBK");
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
	/*	��ȡ���·��	*/
	public String getOutputPath(){
		return outputPath;
	}
	
	/*	���������·����ͨ���ڳ�ʼ��Extractorʱ��Ӧ����	*/
	public void setOutputPath(String outputPath){
		this.outputPath = outputPath;
	}
	
	public Parser getParser(){
		return parser;
	}
	
	/*	ʹ��������ƥ�䲢�����ҳ�е��ַ���	*/
	protected String getProp(String pattern, String match, int index){
		Pattern sp = Pattern.compile(pattern);
		Matcher matcher = sp.matcher(match);
		while(matcher.find()){
			return matcher.group(index);
		}
		return null;
	}
	
	/*	���󷽷������ڹ�����ʵ�֣��书����Ҫ�ǽ�����ҳ�ļ�	*/
	public abstract void extract();
	
	/*	��ȡ���ڴ�����ļ���·��	*/
	public String getInputFilePath(){
		return inputFilePath;
	}
	
	/**
	 * ��mirrorĿ¼�¿����ļ������趨��ͼƬĿ¼
	 * �÷���������Ҫ���ı�
	 */
	protected boolean copyImage(String image_url, String new_image_file){
		String dirs = image_url.substring(7);
		try{
			File file_in = new File(new File(mirrorDir), dirs);
			//���ͼƬ�����ڣ���ʹ��һ�����ͼƬ
			if(file_in == null || !file_in.exists()){
				file_in = new File("D:\\Test\\image\\image11.bmp");            ////////�����Լ������ı�
			}
			File file_out = new File(new File(imageDir), new_image_file);
			FileInputStream inl = new FileInputStream(file_in);
			FileOutputStream outl = new FileOutputStream(file_out);
			byte[] bytes = new byte[1024];
			int c;
			while((c = inl.read(bytes)) != -1){
				outl.write(bytes, 0, c);
				}
			//�ر�
			inl.close();
			outl.close();
			return true;		//�ɹ�����true
			} catch(Exception e){
				e.printStackTrace();
				return false;		//ʧ�ܷ���false
			}
	}
	
	public String getImageDir(){
		return imageDir;
	}
	
	public void setImageDir(String imageDir){
		this.imageDir = imageDir;
	}
	
	public String getMirrorDir(){
		return mirrorDir;
	}
	
	public void setMirrorDir(String mirrorDir){
		this.mirrorDir = mirrorDir;
	}
	
	public void setInputFilePath(String inputFilePath){
		this.inputFilePath = inputFilePath;
	}
	
	//����������ʾ��ǰ�Ѿ������˶��ٸ���ҳ
	public static int count = 0;
	
	//����һ��Ŀ¼��������ҳ��ʹ�ô����Extractor
	public static void traverse(Extractor extractor, File path) throws Exception{
		if(path == null){
			return;
		}
		if(path.isDirectory()){
			String[] files = path.list();
			for(int i = 0; i < files.length; i++){
				traverse(extractor, new File(path, files[i]));
			}
		}else{
			if(path.getAbsolutePath().endsWith(".html") 
					&& path.getAbsolutePath().indexOf("_") == -1){
				System.out.println(path);
				count++;
				extractor.loadFile(path.getAbsolutePath());
				extractor.extract();
			}
		}
	}	
}