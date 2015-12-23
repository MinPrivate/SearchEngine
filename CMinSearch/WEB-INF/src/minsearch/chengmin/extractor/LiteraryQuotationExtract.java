package minsearch.chengmin.extractor;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import org.htmlparser.Node;
import org.htmlparser.NodeFilter;
import org.htmlparser.filters.AndFilter;
import org.htmlparser.filters.HasAttributeFilter;
import org.htmlparser.filters.TagNameFilter;
import org.htmlparser.tags.ImageTag;
import org.htmlparser.util.NodeList;

//import com.luceneheritrixbook.extractor.Extractor;
//import com.luceneheritrixbook.util.StringUtils;

public class LiteraryQuotationExtract extends Extractor {
	
	public void extract() {
		BufferedWriter bw = null;
		
		//创建内容过滤器
		NodeFilter allContext_filter = new AndFilter(new TagNameFilter("td"),
						new HasAttributeFilter("class", "wenzhan") );
		
		//创建标题过滤器
		NodeFilter title_filter = new TagNameFilter("title");
		
		//创建图片过滤器
		NodeFilter image_filter = new AndFilter( new TagNameFilter("img"),
					new HasAttributeFilter("class", "bigimg"));
				
		//提取标题信息
		try {
			//Parser根据过滤器返回所有满足过滤条件的节点
			NodeList title_nodes = this.getParser().parse(title_filter);
			//遍历所有节点
			//long num = title_nodes.size();
			for (int i = 0; i < title_nodes.size(); i++) {

				Node node_title=title_nodes.elementAt(i);
		         //提取标题信息
				//用空格分割节点内部html文本
				String[] names = node_title.toPlainTextString().split(" ");
				StringBuffer title = new StringBuffer();
				//创建要生成的文本文件名
				for (int k = 0; k < names.length; k++) {
					title.append(names[k]);//.append("-");
				}
				//title.append((new Date()).getTime());
				//创建要生成的文件
				String path = this.getOutputPath();
				//将title中“\”替换为“—”//////////////////////////////////
				int start = title.indexOf("/");
				if(start != -1){
					title.replace(start, start + 1, "-");
				}
				////////////////////////////////////////////////////////
				bw = new BufferedWriter(new FileWriter(new File(path + "\\" + title + ".txt")));
				//获取当前提取页的完整URL地址
				int startPos = getInputFilePath().indexOf("mirror") + 6;
				String url_seg = getInputFilePath().substring(startPos);
				url_seg = url_seg.replaceAll("\\\\", "/");
				String url = "http:/" + url_seg;
				System.out.println(url);
				//写入当前提取页的完整URL地址
				bw.write(url + NEWLINE);
				for (int k = 0; k < names.length; k++) {
					bw.write(names[k] + NEWLINE);
				}				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		//内容提取
		//重置Parser
		this.getParser().reset();
		try {
			//Parser根据过滤器返回所有满足过滤条件的节点
			NodeList allContext_nodes = this.getParser().parse(allContext_filter);
			for (int i = 0; i < allContext_nodes.size(); i++) {
				//Parser根据过滤器返回所有满足过滤条件的节点		
				Node node = allContext_nodes.elementAt(i);
				
				//String name = node.getTagName();
				//提取属性名信息
				String result = node.toPlainTextString();
				
				//if( name.equals( new String("span") ))
				//{
					bw.write(StringUtils.trim(result) );	
					bw.newLine();					
				//}
				//提取属性值信息
				continue;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		
		//		重置Parser
		this.getParser().reset();
		try {
			//Parser根据过滤器返回所有满足过滤条件的节点
				NodeList image_nodes = this.getParser().parse(image_filter);
			for (int i = 0; i < image_nodes.size(); i++) {
				ImageTag node = (ImageTag) image_nodes.elementAt(i);
				//获取当前节点的SRC属性值
					String image_url = node.getAttribute("src");
					//提取文件类型
					String fileType = image_url.substring(image_url
							.lastIndexOf(".") + 1);
					//生成新的图片的文件名
					String new_iamge_file = StringUtils.encodePassword(
							image_url, HASH_ALGORITHM)
							+ "." + fileType;
					image_url = StringUtils.replace(image_url, "+", " ");
					//利用mirror目录下的图片生成的新的图片
					copyImage(image_url, new_iamge_file);
					bw.write(image_url + NEWLINE);
					bw.write(SEPARATOR + NEWLINE);
					bw.write(new_iamge_file + NEWLINE);
					
					System.out.println(image_url);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		try{
			if (bw != null)
				bw.close();
		}catch(IOException e){
			e.printStackTrace();
		}
		
	}	
}