function popupToggle($this, $target) {
	var elm = document.getElementById($target);
	var style = elm.currentStyle || document.defaultView.getComputedStyle(elm, '');
	if (style.display == 'none') {
		elm.style.display = 'block'
	} else {
		elm.style.display = 'none'
	}
	if ($this.className.indexOf('active') > 0) {
		$this.className = $this.className.replace(' active', '');
	} else {
		$this.className += ' active';
	}
}
function floatPortletToggle($this, $target) {
	var t = document.getElementById($target);
	var i = t.className.indexOf(" open");
	if (i > 0) {
		t.className = t.className.replace(" open","")
	} else {
		t.className += " open";
	}
}

function dropdownToggle($this, $target) {
	var elms = document.getElementsByTagName("div");
	for (var i = 0; i < elms.length; i++) {
		if(elms[i].className.indexOf('open') > 0) {
			if(elms[i].id != $target) {
				elms[i].className = elms[i].className.replace(' open', '');
			}
		}
	}
	var elms = document.getElementsByTagName("a");
	for (var i = 0; i < elms.length; i++) {
		if(elms[i].className.indexOf('active') > 0) {
			if(elms[i] != $this) {
				elms[i].className = elms[i].className.replace(' active', '');
			}
		}
	}
	elms = void 0;

	var elm = document.getElementById($target);
	var style = elm.currentStyle || document.defaultView.getComputedStyle(elm, '');
	if (style.display == 'none') {
		elm.className += ' open'
	} else {
		elm.className = elm.className.replace(' open', '');
	}
	if ($this.className.indexOf('active') > 0) {
		$this.className = $this.className.replace(' active', '');
	} else {
		$this.className += ' active';
	}
}

function launcherToggle($this, $target) {
	var elm = document.getElementById($target);
	if(elm.className.indexOf("launcherOpen") > 0) {
		elm.className = elm.className.replace(' launcherOpen', '');
		document.getElementById('roundMainWrapper').style.paddingRight = '5px';
	} else {
		elm.className += ' launcherOpen';
		document.getElementById('roundMainWrapper').style.paddingRight = '50px';
	}
	if ($this.className.indexOf('launcherActive') > 0) {
		$this.className = $this.className.replace(' launcherActive', '');
	} else {
		$this.className += ' launcherActive';
	}
}

function fitMessage() {
	if(document.getElementById("dd_message") != null) {
		var minusH = document.getElementById("auiHeader").clientHeight + 45;
		var w = document.documentElement.clientWidth - 20;
		var h = document.documentElement.clientHeight - minusH;
		document.getElementById("dd_message").style.width = w + "px";
		//document.getElementById("messageSummary").style.height = h + "px";
		document.getElementById("messageSideBlock").style.height = h + "px";
	}
	if(document.getElementById("messageTimeline") != null) {
		//var minusH = document.getElementById("auiHeader").clientHeight + 45 + 10 + 29 + 42 + 105;
		var minusH = document.getElementById("auiHeader").clientHeight + 45 + 10 + 29 + 105;
		var h = document.documentElement.clientHeight - minusH;
		document.getElementById("messageTimeline").style.height = h + "px";
	}
	if(document.getElementById("messageFavorites") != null) {
		var minusH = document.getElementById("auiHeader").clientHeight + 45 + 10 + 29 + 42;
		var h = document.documentElement.clientHeight - minusH;
		document.getElementById("messageFavorites").style.height = h + "px";
		document.getElementById("messageFiles").style.height = h + "px";
	}
}

function scrollToggle() {
	if(document.body.style.overflow != "hidden") {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}

}

window.onload=function(){
	fitMessage();
	/*
	document.onmouseover = function(e) {	//オンマウスしたAタグにhover付与
	}
	document.onmouseout = function(e) {
	}
	*/
	document.onmousedown = function(e) {
		//console.log(e);
		//console.log(e.srcElement.nodeName);
		var node = new Array();
		node[0] = {nodeName:e.srcElement.nodeName, className:e.srcElement.className};
		var parent = e.srcElement.parentNode;
		for(var i = 1; parent; i++) {
			node[i] = {nodeName:parent.nodeName, className:parent.className};
			parent = parent.parentNode;
		}
		var linkFlag = 0;
		for(var i = 0; i < node.length; i++) {
			if(node[i].nodeName.toLowerCase() == 'a') {
				var linkFlag = 1;
				break;
			} else if(node[i].className) {
				if(node[i].className.indexOf('open') > 0) {
					var linkFlag = 1;
					break;
				}
			}
		}
		node = void 0;
		parent = void 0;
		if(linkFlag <= 0) {
			var elms = document.getElementsByTagName("div");
			for (var i = 0; i < elms.length; i++) {
				if(elms[i].className.indexOf('open') > 0) {
					elms[i].className = elms[i].className.replace(' open', '');
				}
			}
			var elms = document.getElementsByTagName("a");
			for (var i = 0; i < elms.length; i++) {
				if(elms[i].className.indexOf('active') > 0) {
					elms[i].className = elms[i].className.replace(' active', '');
				}
			}
			elms = void 0;
		}
	}
}
window.onresize=function() {
	fitMessage();
}


// placeholder
function phFocus($this) {
	$this.nextSibling.style.display = "none";
}
function phBlur($this) {
	if(!$this.value) {
		$this.nextSibling.style.display = "block";
	}
}

function checkCount($obj, $target) {
	var obj = document.getElementById($obj);
	var inputs = obj.getElementsByTagName("input");
	var chkCount = 0;	//チェックカウンター
	for (var i = 0; i < inputs.length; i++) {
		if(inputs[i].checked == true) {
			chkCount ++;
		}
	}
	if(chkCount > 1) {
		document.getElementById($target).style.display = "block";
	} else {
		document.getElementById($target).style.display = "none";
	}
}

function auiTabs($this, $target) {
	var target = document.getElementById($target);	//タブUIの大本取得
	var childs = target.getElementsByTagName("ul");	//タブUI直下2つのUL取得
	//childsからタブ側のliとコンテンツ側のliを配列として取得
	for(i=0; i<childs.length; i++) {
		if(childs[i].className === "tab") {
			var tab = childs[i].getElementsByTagName("li");
		} else if(childs[i].className === "tabContents") {
			var tabContents = childs[i].getElementsByTagName("li");
		}
	}
	console.log(tab);
	console.log(tabContents);
	//クリックしたタブがアクティブか調べる
	var flag = -1;	//クリックしたタブ番号を兼ねたフラグ
	for(i=0; i<tab.length; i++) {
		if(tab[i] === $this.parentNode) {
			if(tab[i].className.indexOf("active") < 0) {
				var flag = i;
			}
		}
	}
	//アクティブでないタブがクリックされていれば実行
	if(flag >= 0) {
		//タブ番号と等しいタブはactive付与、そうでなければactive除去
		for (i = 0; i < tab.length; i++) {
			if (i === flag) {
				tab[i].className += " active";
			} else {
				tab[i].className = tab[i].className.replace("active", "");
			}
		}
		//タブ番号と等しいコンテンツはactive付与、そうでなければactive除去
		for (i = 0; i < tabContents.length; i++) {
			if (i === flag) {
				tabContents[i].className += " active";
			} else {
				tabContents[i].className = tabContents[i].className.replace("active", "");
			}
		}
	}
}

/*
$(".placeholderCheck").each(function() {
	if ($(this).attr("jq-placeholder")) {
		$(this).after('<span class="placeholder">' + $(this).attr("jq-placeholder") + '</span>');
	}
});
$(".placeholderCheck").focus(function(){
	$(this).next(".placeholder").hide();
});
$(".placeholder").click(function(){
	$(this).prev().focus();
});
$(".placeholderCheck").blur(function(){
	//$(this).next(".placeholder").hide();
	if($(this).val() == "") {
		$(this).next(".placeholder").show();
	}
});
*/