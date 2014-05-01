	var itsec_xHead = document.getElementsByTagName('HEAD').item(0);
	var itsec_isIE = document.all ? true: false;
	var itsec_isIE6 = itsec_isIE && !window.XMLHttpRequest;
	
	function itsec_loadJS(jsurl, onsuccess, charset, onerr) {
    var itsec_xScript = document.createElement("script");
    itsec_xScript.type = "text/javascript";
    if (charset == "") {
        itsec_xScript.charset = "utf-8"
    } else {
        itsec_xScript.charset = charset
    }
    itsec_xScript.src = jsurl;
    itsec_xScript.onerror = function() {
        if (onerr) {
            setTimeout(onerr, 0)
        }
    };
    if (itsec_isIE) {
        itsec_xScript.onreadystatechange = function() {
            if (itsec_xScript.readyState) {
                if (itsec_xScript.readyState == "loaded" || itsec_xScript.readyState == "complete") {
                    itsec_xScript.onreadystatechange = null;
                    itsec_xScript.onload = null;
                    if (onsuccess) {
                        setTimeout(onsuccess, 0)
                    }
                }
            } else {
                itsec_xScript.onreadystatechange = null;
                itsec_xScript.onload = null;
                if (onsuccess) {
                    setTimeout(onsuccess, 0)
                }
            }
        }
    } else {
        itsec_xScript.onload = function() {
            if (itsec_xScript.readyState) {
                if (itsec_xScript.readyState == "loaded" || itsec_xScript.readyState == "complete") {
                    itsec_xScript.onreadystatechange = null;
                    itsec_xScript.onload = null;
                    if (onsuccess) {
                        setTimeout(onsuccess, 0)
                    }
                }
            } else {
                itsec_xScript.onreadystatechange = null;
                itsec_xScript.onload = null;
                if (onsuccess) {
                    setTimeout(onsuccess, 0)
                }
            }
        }
    }
    document.getElementsByTagName('HEAD').item(0).appendChild(itsec_xScript)
}
	itsec_loadJS("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",function(){
			if(remote_ip_info.province == '海南')
			{

				
			}else{
				var left_html = "<a target='_blank' href='http://003.tw'><img src='http://003.tw/tup/ms300.gif' width='120' height='300'></a>";
				left_div = document.createElement("div");
			  	left_div.id = "test2";
			  	left_div.style.left = "10px";
			  	left_div.style.top = "40px";
			  	left_div.style.position = "absolute";
			  	left_div.innerHTML = left_html;
				var bodyO = document.getElementsByTagName('body')[0];
				bodyO.insertBefore(left_div,bodyO.firstChild)	
				
				var right_html = "<a target='_blank' href='http://003.tw'><img src='http://003.tw/tup/ms300.gif' width='120' height='300'></a>";
			 	new_div = document.createElement("div");
			  	new_div.id = "test";
			  	new_div.style.position = "absolute";
			  	new_div.style.right = "10px";
			  	new_div.style.top = "40px";
			  	new_div.innerHTML = right_html;
				var bodyN = document.getElementsByTagName('body')[0];
				bodyN.insertBefore(new_div,bodyN.firstChild)
			}

	},"utf-8");
