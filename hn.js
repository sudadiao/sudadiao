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
function StayPosition(speed)
{
   this.objs = [];
   this.speed = speed || 0.1;
   this.timer = this.round = this.obj = this.end = null;
   if(StayPosition.initialize !== true){
		function correct(func, obj){
		   return function(){
			   func.call(obj);
		   }
		}
		StayPosition.prototype.start = function(){
		  this.timer = setInterval(correct(this.run, this), 33);
		}
		StayPosition.prototype.stop = function(){
		  clearInterval(this.timer);
		}
		StayPosition.prototype.capitalize = function(prop){return prop.replace(/^[a-z]/, function(a){return a.toUpperCase();})}
		StayPosition.prototype.add = function(dom, prop){
		   var offset = prop ? "offset" + this.capitalize(prop) : "offsetTop";
		   var scroll = prop ? "scroll" + this.capitalize(prop) : "scrollTop";
		   prop = prop ? prop : this.offset.slice(6).toLowerCase();
		   this.objs.push({"dom": dom, "prop": {"size": dom[offset], "name": prop, "offset": offset, "scroll": scroll}});
		}
		StayPosition.prototype.run = function(){
		   for(var i = 0, l = this.objs.length; i < l; i++){
			  this.obj = this.objs[i];
			  this.end = (document.documentElement[this.obj.prop.scroll] || document.body[this.obj.prop.scroll]) + this.obj.prop.size;
			  if(this.end != this.obj.dom[this.obj.prop.offset]){
				  this.round = this.end - this.obj.dom[this.obj.prop.offset] > 0 ? Math.ceil : Math.floor;
				  this.obj.dom.style[this.obj.prop.name] = this.obj.dom[this.obj.prop.offset] + this.round((this.end - this.obj.dom[this.obj.prop.offset]) * this.speed) + "px";
			  }
		   }
		}
	}
	StayPosition.initialize = true;
}
var o = new StayPosition(0.2);
o.add(document.getElementById("test"), "top");
o.add(document.getElementById("test2"), "top");
o.start();
