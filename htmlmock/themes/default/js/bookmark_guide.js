// iPhone/iPad/iPod、Androidの場合のみ実行
var ua = navigator.userAgent;
if ( (ua.indexOf('iPhone') > 0 && ua.indexOf('CriOS') < 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) ) {
	//iOS Chrome ではホームに追加が行えないため「CriOS」は除外する

	var guideBox = document.createElement('div');
	guideBox.id = 'bookmarkGuide';
	guideBox.className = 'bookmarkGuide';
	guideBox.style.minHeight = '48px';
	guideBox.style.padding = '0 10px';
	guideBox.style.background = 'inherit';

	var inner = document.createElement('div');
	inner.className = 'bookmarkGuideInner';
	inner.style.position = 'relative';
	inner.style.padding = '10px 0 10px 60px';
	guideBox.appendChild(inner);

	//remove
	var remove = '<a href="javascript:void(0);" onclick="javascript:document.getElementById(\'bookmarkGuide\').style.display=\'none\'" style="display:block;float:right;color:#999999"><i class="icon-remove" style="display:block;width:18px;height:18px;font-size:18px;text-align:center;"></i></a>';

	//本文
	inner.innerHTML = remove;
	if ( ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0) { //iOS
		inner.innerHTML = inner.innerHTML + '<p>Aipoをホーム画面に配置できます。</p><p>ブラウザ下中央のボタンより「ホーム画面に追加」をタップしてください。</p>';
	}

	if (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) { //Android
		if(ua.indexOf('Chrome') > 0) {
			inner.innerHTML = inner.innerHTML + '<p>Aipoをホーム画面に配置できます。</p><p>オプションメニューより「ホーム画面に追加」をタップしてください。</p>';
		} else {
			var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8));
			console.log(androidversion);
			if(androidversion >= 4) {
				inner.innerHTML = inner.innerHTML + '<p>Aipoをホーム画面に配置できます。</p><p>このページをブックマークに追加される際、「追加先」に「ホーム画面」をタップしてください。</p>';
			} else {
				inner.innerHTML = inner.innerHTML + '<p>Aipoをホーム画面に配置できます。</p><p>このページをブックマークに追加し、ブックマーク一覧より長押ししてショートカットを作成」をタップしてください。</p>';
			}
		}
	}

	//icon
	var links = new Array();
	links = document.getElementsByTagName("link");	//head内linkタグ取得
	for(i=0; links.length > i ; i++) {
		if(links[i].rel == 'apple-touch-icon-precomposed') { //アプリアイコン取得
			var iconHref = links[i].href;
		}
	}
	var icon = document.createElement('i');
	icon.className = 'icon';
	icon.style.position = 'absolute';
	icon.style.top = '10px';
	icon.style.left = '0';
	icon.style.display = 'block';
	icon.style.width = '48px';
	icon.style.height = '48px';
	icon.style.backgroundImage = 'url('+ iconHref +')';
	icon.style.backgroundSize = '48px';
	icon.style.backgroundRepeat = 'no-repeat';
	icon.style.border = 'solid 1px #d2d2d2';
	icon.style.borderRadius = '10px';
	inner.appendChild(icon);

	//配置
	if(document.getElementById("contents")) {//Cloud
		var objBody = document.getElementById("contents");
		inner.style.paddingTop = '0';
		icon.style.top = '0';
	}
	if(!objBody) {
		var objBody = document.getElementById("wrapper"); //OSS
		guideBox.style.paddingTop = '20px';
		inner.style.borderTop = 'solid 1px #d2d2d2';
	}
	if(!objBody) {
		var objBody = document.getElementsByTagName("body").item(0); //Nothing
	}
	objBody.appendChild(guideBox);
	console.log(ua);
}