// JavaScript Document

var aa=[
    {name:'北京',sub: [{name:'人大校区',url:'http://www.jiajiaoban.com/e/20100524/4bfa33ae4d902.shtml'},{name:'大钟寺校区',url:'http://www.jiajiaoban.com/e/20100524/4bfa3aef598a2.shtml'},{name:'天行建校区',url:'http://www.jiajiaoban.com/e/20100524/4bfa39a771ad3.shtml'},{name:'公主坟校区',url:'http://www.jiajiaoban.com/e/20100524/4bfa371faf25d.shtml'},{name:'北大校区',url:'http://www.jiajiaoban.com/e/20100524/4bfa3b7b9a390.shtml'},
{name:'远大路校区',url:'http://www.jiajiaoban.com/e/20110907/4e670992d87f7.shtml'},{name:'中关村校区',url:'http://www.jiajiaoban.com/e/20100518/4bf27c7abe99f.shtml'},{name:'公主坟南校区',url:'http://www.jiajiaoban.com/e/20100524/4bfa34f3434a8.shtml'},{name:'世纪城校区',url:'http://www.jiajiaoban.com/e/20100524/4bfa37e4eafaa.shtml'},{name:'志新桥校区',url:'http://www.jiajiaoban.com/e/20110218/4d5e2cd6d98ea.shtml'},
{name:'六道口校区',url:'http://www.jiajiaoban.com/e/20111111/4ebc79fdcfcd0.shtml'},
{name:'白石桥校区',url:'http://www.jiajiaoban.com/e/20110218/4d5e612011d91.shtml'},{name:'上地校区',url:'http://www.jiajiaoban.com/e/20110218/4d5e349fd1d71.shtml'},
{name:'航天桥校区',url:'http://www.jiajiaoban.com/e/20110704/4e11ba9262fe5.shtml'},
{name:'清河校区',url:'http://www.jiajiaoban.com/e/20110708/4e1696449612f.shtml'},
{name:'西直门北校区',url:'http://www.jiajiaoban.com/e/20111220/4ef0410f4103e.shtml'},
{name:'万柳校区',url:'http://www.jiajiaoban.com/e/20110723/4e2a619355074.shtml'},
{name:'阜成门校区',url:'http://www.jiajiaoban.com/e/20101012/4cb3cf51d3713.shtml'},
{name:'平安里校区',url:'http://www.jiajiaoban.com/e/20110218/4d5e383c5c427.shtml'},
{name:'牛街校区',url:'http://www.jiajiaoban.com/e/20110921/4e79476f00869.shtml'},
{name:'白纸坊校区',url:'http://www.jiajiaoban.com/e/20110704/4e11c14104b53.shtml'},
{name:'和平门校区',url:'http://www.jiajiaoban.com/e/20110218/4d5e3a5550792.shtml'},
{name:'广安门校区',url:'http://www.jiajiaoban.com/e/20110314/4d7d7d76e02a1.shtml'},
{name:'回龙观校区',url:'http://www.jiajiaoban.com/e/20100524/4bfa351253f5f.shtml'},
{name:'昌平校区',url:'http://www.jiajiaoban.com/e/20110218/4d5e62c7460cd.shtml'},
{name:'团结湖校区',url:'http://www.jiajiaoban.com/e/20100524/4bfa32d111754.shtml'},
{name:'劲松校区',url:'http://www.jiajiaoban.com/e/20100524/4bfa24ef48fbf.shtml'},
{name:'和平里校区',url:'http://www.jiajiaoban.com/e/20100524/4bfa3441a2857.shtml'},
{name:'望京校区',url:'http://www.jiajiaoban.com/e/20100524/4bfa33977f86d.shtml'},
{name:'亚运村校区',url:'http://www.jiajiaoban.com/e/20100524/4bfa31fe85f1b.shtml'},
{name:'大屯校区',url:'http://www.jiajiaoban.com/e/20110218/4d5e28aa15c39.shtml'},
{name:'十里堡校区',url:'http://www.jiajiaoban.com/e/20111021/4ea0d706a76cc.shtml'},
{name:'广渠门校区',url:'http://www.jiajiaoban.com/e/20100524/4bfa316a840dd.shtml'},{name:'东四十条校区',url:'http://www.jiajiaoban.com/e/20100524/4bfa2f1467b22.shtml'},{name:'灯市口校区',url:'http://www.jiajiaoban.com/e/20110914/4e70264dcd061.shtml'},{name:'通州校区',url:'http://www.jiajiaoban.com/e/20110618/4dfb822edfaf5.shtml'},{name:'大兴校区',url:'http://www.jiajiaoban.com/e/20110708/4e16ab6e1e6fb.shtml'},
{name:'方庄校区',url:'http://www.jiajiaoban.com/e/20100524/4bfa3050f3244.shtml'},
{name:'东高地校区',url:'http://www.jiajiaoban.com/e/20110614/4df721a0ef2e0.shtml'},
{name:'马家堡校区',url:'http://www.jiajiaoban.com/e/20110808/4e3f5b71557bb.shtml'},
{name:'玉泉路校区',url:'http://www.jiajiaoban.com/e/20110218/4d5e0bc44a1af.shtml'},
{name:'石景山校区',url:'http://www.jiajiaoban.com/e/20110218/4d5e2b0f2a7e8.shtml'},{name:'永定路校区',url:'http://www.jiajiaoban.com/e/20110610/4df1f86c16934.shtml'},
{name:'金顶街校区',url:'http://www.jiajiaoban.com/e/20110921/4e799c82e7954.shtml'},
{name:'顺义校区',url:'http://www.jiajiaoban.com/e/20110723/4e2a65037e57d.shtml'},
{name:'良乡校区',url:'http://www.jiajiaoban.com/e/20111205/4edc5d5526af8.shtml'}]},
    {name:'上海',sub: [{name:'天山路学习中心',url:'http://sh.jiajiaoban.com/e/20111024/4ea53b165d9d1.shtml'},{name:'人民广场学习中心',url:'http://sh.jiajiaoban.com/e/20101010/4cb159390658b.shtml'},{name:'大连路学习中心',url:'http://sh.jiajiaoban.com/e/20100622/4c20138365107.shtml'},{name:'五角场学习中心',url:'http://sh.jiajiaoban.com/e/20110808/4e3f477f9130b.shtml'},{name:'长阳路学习中心',url:'http://sh.jiajiaoban.com/e/20120117/4f14ffe250967.shtml'},{name:'平阳路学习中心',url:'http://sh.jiajiaoban.com/e/20110119/4d36478267617.shtml'},{name:'莲花学习中心',url:'http://sh.jiajiaoban.com/e/20110808/4e3f4a82453a5.shtml'},{name:'四川北路学习中心',url:'http://sh.jiajiaoban.com/e/20110328/4d902292122f1.shtml'},{name:'大木桥路学习中心',url:'http://sh.jiajiaoban.com/e/20110509/4dc7984d0378c.shtml'},{name:'江场西路学习中心',url:'http://sh.jiajiaoban.com/e/20110509/4dc79f659ebb8.shtml'},{name:'八佰伴学习中心',url:'http://sh.jiajiaoban.com/e/20110719/4e25366c19e78.shtml'}]},
	{name:'广州',sub: [{name:'区庄校区',url:'http://gz.jiajiaoban.com/e/20110127/4d412df94aab4.shtml'},{name:'农讲所校区',url:'http://gz.jiajiaoban.com/e/20110223/4d64fe983ee6f.shtml'},{name:'杨箕校区',url:'http://gz.jiajiaoban.com/e/20110528/4ddfe1655ddd5.shtml'},{name:'华晟校区',url:'http://gz.jiajiaoban.com/e/20110514/4dce2b4fdae5b.shtml'},{name:'岗顶校区',url:'http://gz.jiajiaoban.com/e/20110621/4e003b827cce9.shtml'},{name:'机场路校区',url:'http://gz.jiajiaoban.com/e/20110608/4deed313553ce.shtml'},{name:'宝岗校区',url:'http://gz.jiajiaoban.com/e/20110616/4df99b4879276.shtml'},{name:'动物园校区',url:'http://gz.jiajiaoban.com/e/20110810/4e42053af0616.shtml'}]},
	{name:'深圳',sub: [{name:'红荔上步校区',url:'http://sz.jiajiaoban.com/e/20110802/4e379b1945ba0.shtml'},{name:'景田银座校区',url:'http://sz.jiajiaoban.com/e/20111009/4e916e686cc6a.shtml'},{name:'香蜜湖校区',url:'http://sz.jiajiaoban.com/e/20120911/504ea84b35967.shtml'},{name:'南海花园城校区',url:'http://sz.jiajiaoban.com/e/20110802/4e37b6941ee98.shtml'},{name:'东乐花园校区',url:'http://sz.jiajiaoban.com/e/20110803/4e38bd9db0848.shtml'}]},
	{name:'天津',sub: [{name:'海光寺河川校区',url:'http://tj.jiajiaoban.com/e/20110110/4d2a7d328ae58.shtml'},{name:'小白楼校区',url:'http://tj.jiajiaoban.com/e/20110330/4d92dbd23eacb.shtml'},{name:'长江道校区',url:'http://tj.jiajiaoban.com/e/20110128/4d4231437b148.shtml'},{name:'南楼校区',url:'http://tj.jiajiaoban.com/e/20110222/4d631dbf6134d.shtml'},{name:'华苑校区',url:'http://tj.jiajiaoban.com/e/20110128/4d427c47be76a.shtml'},{name:'海光寺新都校区',url:'http://tj.jiajiaoban.com/e/20110630/4e0c50436e13d.shtml'}]},
	{name:'南京',sub: [{name:'山西路校区',url:'http://nj.jiajiaoban.com/e/20110421/4dafd5fc4e4a7.shtml'},{name:'鼓楼校区',url:'http://nj.jiajiaoban.com/e/20120719/5007c2e0df203.shtml'},{name:'河西龙江校区',url:'http://nj.jiajiaoban.com/e/20110927/4e813640ec508.shtml'},{name:'龙蟠中路校区',url:'http://nj.jiajiaoban.com/e/20110927/4e81329e7689c.shtml'}]},
	{name:'成都',sub: [{name:'国栋校区',url:'http://cd.jiajiaoban.com/e/20110328/4d8ffe7519526.shtml'},{name:'金沙校区',url:'http://cd.jiajiaoban.com/e/20121017/507e6f482d0dd.shtml'},
{name:'西门校区',url:'http://cd.jiajiaoban.com/e/20111011/4e93e38de1331.shtml'},{name:'川大校区',url:'http://cd.jiajiaoban.com/e/20110804/4e3a4b9da78fc.shtml'},{name:'双楠校区',url:'http://cd.jiajiaoban.com/e/20111011/4e93e357b453a.shtml'}]},
	{name:'杭州',sub: [{name:'解放路校区',url:'http://hz.jiajiaoban.com/e/20130124/5100c9cb05db2.shtml'},{name:'文二路校区',url:'http://hz.jiajiaoban.com/e/20130124/5100c70264c8e.shtml'},{name:'新华路校区',url:'http://hz.jiajiaoban.com/e/20121221/50d419f614de4.shtml'}]},
	{name:'西安',sub: [{name:'科技路校区',url:'http://xa.jiajiaoban.com/e/20110428/4db9151562e8c.shtml'},{name:'糜家桥校区',url:'http://xa.jiajiaoban.com/e/20110428/4db91f4a9e4dc.shtml'},{name:'交大校区',url:'http://xa.jiajiaoban.com/e/20110719/4e25336dc7ccf.shtml'},{name:'经开校区',url:'http://xa.jiajiaoban.com/e/20110526/4dde1f3b0c562.shtml'}]},
	{name:'武汉',sub: [{name:'花桥校区',url:'http://wh.jiajiaoban.com/e/20111021/4ea0da8669d46.shtml'},{name:'取水楼校区',url:'http://wh.jiajiaoban.com/e/20111021/4ea10ba320767.shtml'},{name:'杨汊湖校区',url:'http://wh.jiajiaoban.com/e/20111021/4ea0e944a5b96.shtml'},{name:'丁字桥校区',url:'http://wh.jiajiaoban.com/e/20111021/4ea11e3c03b3b.shtml'},{name:'十五中咨询点',url:'http://wh.jiajiaoban.com/e/20111021/4ea0dcabcfe71.shtml'}]}
];

function arae(){   
    var tmp='';
    for ( var k in  aa ) {
        tmp+="<li onclick=\"ccc('"+k+"')\">"+aa[k].name+"</li>";
    }
    $('#ttt').html(tmp);
}

function ccc(A)
{
    var tmp='';
    $('#uuuuu').text(aa[A].name);

    for ( var k in  aa[A].sub )
    {
        tmp+="<a href='"+aa[A].sub[k].url+"' target=_blank>"+aa[A].sub[k].name+"</a>";
    }

    $('#mmmm').html(tmp);
}