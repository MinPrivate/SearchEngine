var adv01 = new Array(
/*   ['http://p4p.sina.com.cn','��ҲҪ�����﷢��','1111111111111111111111111111111111'],
   ['http://edu.sina.com.cn/','��ѧϰ�����˽���','1111111111111111111111111111111111'],
   ['http://edu.sina.com.cn/studyabroad/index.html','����Σ�������ѧ','1111111111111111111111111111111111'],
   ['http://edu.sina.com.cn/official/','��������ֵ�����ŵ�','1111111111111111111111111111111111'],
   ['http://city.finance.sina.com.cn/city_dialogue.html','�ĸ�30��ͼƬչ','1111111111111111111111111111111111'],
   ['http://p4p.sina.com.cn','��Ͷ������ҵ���Ӫ��','1111111111111111111111111111111111']
*/

['http://pfpif.sina.net/click/click.php?ad=JXhP0XGnbooldi+QCkQuoJ3Kd7P27QspZj7ahiZ+14JzDeXvBVC/KO8L9CB3yS5q3ZVluC5uBPdGFetShDvmmV5EYMeGH4e0','Ʒ�����������ѡ��','1111111111111111111111111111111111'],
['http://pfpif.sina.net/click/click.php?ad=Zy6BB4e0UuVZwdO5xrvqgelW5COt96tXAF/cLvNxodh6HrIcB0j3tgD0iD5JA67KxqwJvhoZJxKFykqgLLDWfD1oVgYA3x0w+3vOn6F0CDo4OOIgLHMnyA==','�����Ŀ�ѵ��Ӫ','1111111111111111111111111111111111'],
['http://pfpif.sina.net/click/click.php?ad=VzCFOAqjWHjfWlwtj6aqXQ1t+TzbWiFH1K25rPrrmCJoVBWkQ1L7Sre53/DPLGXxEuAyfo4Obk5ZrGb1GACQN2XAJwQp3dG0ToMLnG2hWRrtc2/y1JRQf0bMew7eexuN0n6svRCOwF8=','�ֻ�����������Ķ�����','1111111111111111111111111111111111'],
['http://pfpif.sina.net/click/click.php?ad=rq87trvTPp6k4/oP67pYF70fxO1HfmNm+uxFbw+kJkrUi60oi+ja4R3sAb5rzLSn/PDnztk41dk1KOqKF2KIIUYV61KEO+aZXkRgx4Yfh7Q=','�òݸ��ƾٲݸ�','1111111111111111111111111111111111'],
['http://pfpif.sina.net/click/click.php?ad=pRD7fAcZPeak4/oP67pYF70fxO1HfmNm+uxFbw+kJkrUi60oi+ja4QDm/AMdj6ZnLQGoq7IXloEtut+pmBTaUkiU2+m2sMTtEhxRv2NGY9g=','���˲ݸ�����','1111111111111111111111111111111111'],
['http://pfpif.sina.net/click/click.php?ad=/P8te1xC8ESwhwfQm48pMrrOPF85muqs7Oy+CDFMBl0xURJIfw+ykJAEqt3ygEotK8V1PfX2aOBKUbdkEtGALUYX+i7nsyKY7XNv8tSUUH9GzHsO3nsbjdJ+rL0QjsBf','����ؿ�����ף��','1111111111111111111111111111111111']


);                                                                                                    



function gen_adv1()
{


	var v_html="";
	ucgi = "";

	v_html = "<table width=950 height=25 cellspacing=0 border=0 cellpadding=0  bgcolor=#F3F3F3 align=center style=\"margin:0em;\">\n<tr>\n";
	for(var i=0, j=0; j<6;i++)
	{
		var adinfo;
		
		adinfo = adv01[i];
		var area = adinfo[2];
		if (area.charAt(local_index) == 0) { j++; continue; }
		
		var adv_url = adinfo[0];
		var title = adinfo[1];

		var furl = '"' + ucgi + adv_url + '"';
		v_html += "<td >&nbsp;��<a style=\"text-decoration:none; color:black;\"href=" + furl + " target=_blank>" + title + "</a></td>\n";
		j++;
	}

	v_html += "\n</tr>\n</table>\n";
	
	document.getElementById("ghc_edu2").innerHTML = v_html;
}

gen_adv1();

