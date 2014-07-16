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
function onloadFunction() {
	fitMessage();
	fitTimeline();
	document.onmouseover = function(e) {
		if(e.srcElement.nodeName.toLowerCase() == 'a') {
			e.srcElement.className = e.srcElement.className + ' hover';
		}
	}
	document.onmouseout = function(e) {
		if(e.srcElement.nodeName.toLowerCase() == 'a') {
			e.srcElement.className = e.srcElement.className.replace(' hover', '');
		}
	}
	document.onmousedown = function(e) {
		console.log(e);
		console.log(e.srcElement.nodeName);
	}
	//var closeElms = document.getElementsByClassName("open");
	//for (var i = 0; i < closeElms.length; i++) {
	//	closeElms[i].className = closeElms[i].className.replace(' open', '');
	//}
	//var unactiveElms =  document.getElementsByClassName("active");
	//for (var i = 0; i < unactiveElms.length; i++) {
	//	unactiveElms[i].className = unactiveElms[i].className.replace(' active', '');
	//}

}
function resize() {
	fitMessage();
	fitTimeline();
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

// placeholder
function phFocus($this) {
	$this.nextSibling.style.display = "none";
}
function phBlur($this) {
	if(!$this.value) {
		$this.nextSibling.style.display = "block";
	}
}


window.onload=function(){
	f0=document.getElementById("f0");
	f0deleteflg=false;
	selectedOject=new Object();
	document.onmousedown=function(){
		if(f0deleteflg) f0.style.display="none";
	}
}
function hoge(obj){
	selectedOject=obj;
	f0.style.display="block";
	f0.style.top=obj.offsetTop + 20;
	f0.style.left=obj.offsetLeft;
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