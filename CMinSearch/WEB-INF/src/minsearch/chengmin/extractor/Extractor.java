package minsearch.chengmin.extractor;

import java.io.*;
import java.util.regex.*;

import org.htmlparser.*;

public abstract class Extractor {

	protected static final String NEWLINE = "\r\n";
	
	/*	表示所有结果的输出路径	*/
	private String outputPath = "";
	
	/*	表示当前正在被处理的文件	*/
	private String inputFilePath;
	
	/*	表示当前所有被抓取的网页的镜像根目录	在Heritrix用mirror目录表示	*/
	private String mirrorDir = "";
	
	/*	用于存放被处理后的图片目录	*/
	private String imageDir = "";
	
	/*	HTMLParser的实例	*/
	private Parser parser;
	
	/*	对图片路径进行哈希的算法，这里采用MD5算法	*/
	protected static final String HASH_ALGORITHM = "md5";
	
	/*	分隔符		*/
	public static final String SEPARATOR = "===============================";
	
	/*	装载需要处理的网页文件	*/
	public void loadFile(String path){
		try{
			parser = new Parser(path);
			inputFilePath = path;
			parser.setEncoding("GBK");
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	
	/*	获取输出路径	*/
	public String getOutputPath(){
		return outputPath;
	}
	
	/*	设置输出的路径，通常在初始化Extractor时就应该做	*/
	public void setOutputPath(String outputPath){
		this.outputPath = outputPath;
	}
	
	public Parser getParser(){
		return parser;
	}
	
	/*	使用正则来匹配并获得网页中的字符串	*/
	protected String getProp(String pattern, String match, int index){
		Pattern sp = Pattern.compile(pattern);
		Matcher matcher = sp.matcher(match);
		while(matcher.find()){
			return matcher.group(index);
		}
		return null;
	}
	
	/*	抽象方法，用于供子类实现，其功能主要是解释网页文件	*/
	public abstract void extract();
	
	/*	获取正在处理的文件的路径	*/
	public String getInputFilePath(){
		return inputFilePath;
	}
	
	/**
	 * 从mirror目录下拷贝文件至所设定的图片目录
	 * 该方法可能需要被改变
	 */
	protected boolean copyImage(String image_url, String new_image_file){
		String dirs = image_url.substring(7);
		try{
			File file_in = new File(new File(mirrorDir), dirs);
			//如果图片不存在，则使用一张替代图片
			if(file_in == null || !file_in.exists()){
				file_in = new File("D:\\Test\\image\\image11.bmp");            ////////根据自己机器改变
			}
			File file_out = new File(new File(imageDir), new_image_file);
			FileInputStream inl = new FileInputStream(file_in);
			FileOutputStream outl = new FileOutputStream(file_out);
			byte[] bytes = new byte[1024];
			int c;
			while((c = inl.read(bytes)) != -1){
				outl.write(bytes, 0, c);
				}
			//关闭
			inl.close();
			outl.close();
			return true;		//成功返回true
			} catch(Exception e){
				e.printStackTrace();
				return false;		//失败返回false
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
	
	//计数器，显示当前已经处理了多少个网页
	public static int count = 0;
	
	//遍历一个目录下所有网页，使用传入的Extractor
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