var adv01 = new Array(
/*   ['http://p4p.sina.com.cn','我也要在这里发布','1111111111111111111111111111111111'],
   ['http://edu.sina.com.cn/','爱学习上新浪教育','1111111111111111111111111111111111'],
   ['http://edu.sina.com.cn/studyabroad/index.html','金融危机如何留学','1111111111111111111111111111111111'],
   ['http://edu.sina.com.cn/official/','听，就听值得相信的','1111111111111111111111111111111111'],
   ['http://city.finance.sina.com.cn/city_dialogue.html','改革30年图片展','1111111111111111111111111111111111'],
   ['http://p4p.sina.com.cn','智投助力企业广告营销','1111111111111111111111111111111111']
*/

['http://pfpif.sina.net/click/click.php?ad=JXhP0XGnbooldi+QCkQuoJ3Kd7P27QspZj7ahiZ+14JzDeXvBVC/KO8L9CB3yS5q3ZVluC5uBPdGFetShDvmmV5EYMeGH4e0','品牌提升的最佳选择','1111111111111111111111111111111111'],
['http://pfpif.sina.net/click/click.php?ad=Zy6BB4e0UuVZwdO5xrvqgelW5COt96tXAF/cLvNxodh6HrIcB0j3tgD0iD5JA67KxqwJvhoZJxKFykqgLLDWfD1oVgYA3x0w+3vOn6F0CDo4OOIgLHMnyA==','新浪拍客训练营','1111111111111111111111111111111111'],
['http://pfpif.sina.net/click/click.php?ad=VzCFOAqjWHjfWlwtj6aqXQ1t+TzbWiFH1K25rPrrmCJoVBWkQ1L7Sre53/DPLGXxEuAyfo4Obk5ZrGb1GACQN2XAJwQp3dG0ToMLnG2hWRrtc2/y1JRQf0bMew7eexuN0n6svRCOwF8=','手机电子书免费阅读下载','1111111111111111111111111111111111'],
['http://pfpif.sina.net/click/click.php?ad=rq87trvTPp6k4/oP67pYF70fxO1HfmNm+uxFbw+kJkrUi60oi+ja4R3sAb5rzLSn/PDnztk41dk1KOqKF2KIIUYV61KEO+aZXkRgx4Yfh7Q=','让草根推举草根','1111111111111111111111111111111111'],
['http://pfpif.sina.net/click/click.php?ad=pRD7fAcZPeak4/oP67pYF70fxO1HfmNm+uxFbw+kJkrUi60oi+ja4QDm/AMdj6ZnLQGoq7IXloEtut+pmBTaUkiU2+m2sMTtEhxRv2NGY9g=','新浪草根名博','1111111111111111111111111111111111'],
['http://pfpif.sina.net/click/click.php?ad=/P8te1xC8ESwhwfQm48pMrrOPF85muqs7Oy+CDFMBl0xURJIfw+ykJAEqt3ygEotK8V1PfX2aOBKUbdkEtGALUYX+i7nsyKY7XNv8tSUUH9GzHsO3nsbjdJ+rL0QjsBf','创意贺卡个性祝福','1111111111111111111111111111111111']


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
		v_html += "<td >&nbsp;·<a style=\"text-decoration:none; color:black;\"href=" + furl + " target=_blank>" + title + "</a></td>\n";
		j++;
	}

	v_html += "\n</tr>\n</table>\n";
	
	document.getElementById("ghc_edu2").innerHTML = v_html;
}

gen_adv1();

