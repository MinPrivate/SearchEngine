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
		
		//�������ݹ�����
		NodeFilter allContext_filter = new AndFilter(new TagNameFilter("td"),
						new HasAttributeFilter("class", "wenzhan") );
		
		//�������������
		NodeFilter title_filter = new TagNameFilter("title");
		
		//����ͼƬ������
		NodeFilter image_filter = new AndFilter( new TagNameFilter("img"),
					new HasAttributeFilter("class", "bigimg"));
				
		//��ȡ������Ϣ
		try {
			//Parser���ݹ�������������������������Ľڵ�
			NodeList title_nodes = this.getParser().parse(title_filter);
			//�������нڵ�
			//long num = title_nodes.size();
			for (int i = 0; i < title_nodes.size(); i++) {

				Node node_title=title_nodes.elementAt(i);
		         //��ȡ������Ϣ
				//�ÿո�ָ�ڵ��ڲ�html�ı�
				String[] names = node_title.toPlainTextString().split(" ");
				StringBuffer title = new StringBuffer();
				//����Ҫ���ɵ��ı��ļ���
				for (int k = 0; k < names.length; k++) {
					title.append(names[k]);//.append("-");
				}
				//title.append((new Date()).getTime());
				//����Ҫ���ɵ��ļ�
				String path = this.getOutputPath();
				//��title�С�\���滻Ϊ������//////////////////////////////////
				int start = title.indexOf("/");
				if(start != -1){
					title.replace(start, start + 1, "-");
				}
				////////////////////////////////////////////////////////
				bw = new BufferedWriter(new FileWriter(new File(path + "\\" + title + ".txt")));
				//��ȡ��ǰ��ȡҳ������URL��ַ
				int startPos = getInputFilePath().indexOf("mirror") + 6;
				String url_seg = getInputFilePath().substring(startPos);
				url_seg = url_seg.replaceAll("\\\\", "/");
				String url = "http:/" + url_seg;
				System.out.println(url);
				//д�뵱ǰ��ȡҳ������URL��ַ
				bw.write(url + NEWLINE);
				for (int k = 0; k < names.length; k++) {
					bw.write(names[k] + NEWLINE);
				}				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		//������ȡ
		//����Parser
		this.getParser().reset();
		try {
			//Parser���ݹ�������������������������Ľڵ�
			NodeList allContext_nodes = this.getParser().parse(allContext_filter);
			for (int i = 0; i < allContext_nodes.size(); i++) {
				//Parser���ݹ�������������������������Ľڵ�		
				Node node = allContext_nodes.elementAt(i);
				
				//String name = node.getTagName();
				//��ȡ��������Ϣ
				String result = node.toPlainTextString();
				
				//if( name.equals( new String("span") ))
				//{
					bw.write(StringUtils.trim(result) );	
					bw.newLine();					
				//}
				//��ȡ����ֵ��Ϣ
				continue;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		
		//		����Parser
		this.getParser().reset();
		try {
			//Parser���ݹ�������������������������Ľڵ�
				NodeList image_nodes = this.getParser().parse(image_filter);
			for (int i = 0; i < image_nodes.size(); i++) {
				ImageTag node = (ImageTag) image_nodes.elementAt(i);
				//��ȡ��ǰ�ڵ��SRC����ֵ
					String image_url = node.getAttribute("src");
					//��ȡ�ļ�����
					String fileType = image_url.substring(image_url
							.lastIndexOf(".") + 1);
					//�����µ�ͼƬ���ļ���
					String new_iamge_file = StringUtils.encodePassword(
							image_url, HASH_ALGORITHM)
							+ "." + fileType;
					image_url = StringUtils.replace(image_url, "+", " ");
					//����mirrorĿ¼�µ�ͼƬ���ɵ��µ�ͼƬ
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