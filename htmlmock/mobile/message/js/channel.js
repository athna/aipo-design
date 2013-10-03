var token = "--token--";
var userId = "--userId--";
var socket = "";
var isInitialized = false;
var isConnected = false;
var gettingToken = false;

// 標準出力用の変数
var texts = new Array(10);
for(var i = 0; i < texts.length; i++)
	texts[i] = "";

// 標準出力にtextを追加する
function addText(text){
	blankIndex = -1;
	for(var i = 0; i < texts.length; i++){
		if(texts[i] == ""){
			blankIndex = i;
			break;
		}
	}

	if(blankIndex == -1){
		for(var i = 1; i < texts.length; i++)
			texts[i - 1] = texts[i];
		texts[texts.length - 1] = "";
	}

	for(var i = 0; i < texts.length; i++){
		if(texts[i] == ""){
			texts[i] = text;
			break;
		}
	}

	updateUI();
}

//標準出力にtextを出力する
function printText(text){
	document.getElementById("stdOut").innerHTML = texts.join("\n");
}


// 初期化です。最初にこの関数を実行する必要があります
function initialize(){
	if(isInitialized == true){
		//alert("既に初期化済みです");
		return;
	}
	if(isConnected == true){
		//alert("既に接続済みです");
		return;
	}

	channel = new goog.appengine.Channel(token);
	socket = channel.open();
	socket.onopen = onOpened;
	socket.onmessage = onMessage;
	socket.onerror = onError;
	socket.onclose = onClose;
	isInitialized = true;

	addText("初期化が完了しました。serverからの応答待ちです");
}

// ソケットを閉じた後に別のソケットを開く関数
function reOpen(){
	if(isConnected == true){
		//alert("既に接続済みです");
		return;
	}
	if(isInitialized == true){
		//alert("既に初期化済みです");
		return;
	}
	if(gettingToken == true){
		//alert("Token再取得を要求中です");
		return;
	}
	getNextToken();
}

// 一度閉じたソケットを再度開く時に呼ぶ
function getNextToken(){
	gettingToken = true;

	var http = new XMLHttpRequest();
	http.open('POST', '/channel_api_test?getToken=true', true);

	//Tokenの受信時に呼ばれる関数
	http.onreadystatechange = function(){
		//4で受信完了
		if (http.readyState == 4){
			//Token再取得時のコールバック関数
			comeToken(http);
		}
	}

	http.send();
	addText("Token再取得要求を送信しました");

}

// Tokenが送られてきた時に呼ばれる
function comeToken(http){
	var json = eval("(" + http.responseText + ")");
	token = "" + json.token;
	userId = "" + json.userId;
	addText("serverからトークンを受け取りました");
	gettingToken = false;
	initialize();
}

// ソケットを閉じるときに呼ぶ関数
// 正常に閉じられてもサーバからの応答はなし
// この関数を呼んだ時点で接続は終了したとみなす
function closeSocket(){
	if(socket == "" || isInitialized == false || isConnected == false){
		addText("まだ接続されていません");
		return;
	}

	socket.close();
	socket = "";
	isInitialized = false;
	isConnected = false;
	token = "--token--";
	userId = "--token--";
	bagu_taisaku();
	addText("接続を終了しました");
}

// [2010/12/19]通信を切断した場合に謎のiframeが残ってしまうバグ対策
// 詳細はこちら↓
// http://d.hatena.ne.jp/furyu-tei/20101219
function bagu_taisaku(){
	var iframes = document.getElementsByTagName('iframe'), wcs_iframes = [];
	for (var ci = 0, len = iframes.length; ci < len; ci++) {
		var iframe = iframes[ci];
		if (iframe.id == 'wcs-iframe' || iframe.name == 'wcs-iframe')
			wcs_iframes[wcs_iframes.length] = iframe;
	}
	for (var ci = 0,len = wcs_iframes.length; ci < len; ci++) {
		wcs_iframes[ci].parentNode.removeChild(wcs_iframes[ci]);
	}
}

// serverにmessageを送るときに呼ばれる関数
function sendMessage(path, message) {
	if(isInitialized == false){
		reOpen();
	}
	if(isInitialized == false){
		addText("初期化が終わっていないのでデータを送信できません。数秒後に再度送信してください");
		return;
	}
	if(isConnected == false){
		addText("接続が完了していないのでデータを送信できません。数秒後に再度送信してください");
		return;
	}

	if(token == ("--" + "token--") || userId == ("--" + "userId--")){
		addText("tokenまたはuserIdが不正です");
		return;
	}

	path += '?message=' + message + '&userId=' + userId + '&time=' + new Date().getTime();
	var http = new XMLHttpRequest();
	http.open('POST', path, true);
	http.send();
	addText(message + "を送信しました");
}

// serverからもらったデータを元にUIを更新する関数
function updateUI(){
	printText();
}


// onOpened、onMessage、onError、onCloseはcall back関数です。serverから呼ばれます

// socketがmessageを受け取る準備ができたときに呼ばれる関数
function onOpened(){
	addText("接続が開始されました。データを送信できます");
	isConnected = true;
}

// socketがmessageを受け取ったときに呼ばれる関数
function onMessage(message){
	var json = eval("(" + message.data + ")");
	var receiveTime = (new Date().getTime() - 0) - (json.time - 0);
	var receiveTimeStr = receiveTime / 1000;
	addText("serverから「" + json.text + ", 受信: " + receiveTime + "ミリ秒」を受け取りました");
}

// socketでエラーが起きたときに呼ばれる関数
// tokenは2時間で期限切れになります。期限切れになったtokenで接続しようとするとこの関数が呼ばれます
// その時は、再度新しいtokenを取得して接続します
function onError(error){
	addText("serverでエラーが起きました。description=" + error.description + "。code=" + error.code);
}

// socketが閉じられたときに呼ばれる関数
// クライアントから閉じた時は呼ばれない
// サーバから閉じられた時だけ呼ばれる
function onClose(){
	addText("接続が正常に終了しました");
	isConnected = false;
	isInitialized = false;
}
