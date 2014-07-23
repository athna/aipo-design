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
		//document.getElementById($target).className += " open";
	} else {
		t.className += " open";
	}
}

function dropdownToggle($this, $target) {
	/* IE8でgetElementsByClassNameが使えないため直下の処理に変更
	var closeElms = document.getElementsByClassName("open");
	for (var i = 0; i < closeElms.length; i++) {
		if(closeElms[i].id != $target) {
			closeElms[i].className = closeElms[i].className.replace(' open', '');
		}
	}
	var unactiveElms =  document.getElementsByClassName("active");
	for (var i = 0; i < unactiveElms.length; i++) {
		if(unactiveElms[i] != $this) {
			unactiveElms[i].className = unactiveElms[i].className.replace(' active', '');
		}
	}
	*/
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
		var minusH = document.getElementById("auiHeader").clientHeight + 45 + 51;
		var w = document.documentElement.clientWidth - 20;
		var h = document.documentElement.clientHeight - minusH;
		document.getElementById("dd_message").style.width = w + "px";
		document.getElementById("messageRooms").style.height = h + "px";
	}
}
function fitTimeline() {
	if(document.getElementById("timeline") != null) {
		var minusH = document.getElementById("auiHeader").clientHeight + 45 + 10 + 29 + 105;
		var h = document.documentElement.clientHeight - minusH;
		document.getElementById("timeline").style.height = h + "px";
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
	fitTimeline();
	/*
	document.onmouseover = function(e) {	//オンマウスしたAタグにhover付与
	}
	document.onmouseout = function(e) {
	}
	*/
	document.onmousedown = function(e) {
		console.log(e);
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
	fitTimeline();
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