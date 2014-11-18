dojo._xdResourceLoaded({depends:[["provide","dojox._cometd.cometd"],["require","dojo.AdapterRegistry"],["require","dojo.io.script"]],defineResource:function(t){t._hasResource["dojox._cometd.cometd"]||(t._hasResource["dojox._cometd.cometd"]=!0,t.provide("dojox._cometd.cometd"),t.require("dojo.AdapterRegistry"),t.require("dojo.io.script"),dojox.cometd=new function(){this._initialized=!1,this._connected=!1,this._polling=!1,this.connectionTypes=new t.AdapterRegistry(!0),this.version="1.0",this.minimumVersion="0.9",this.clientId=null,this.messageId=0,this.batch=0,this._isXD=!1,this.handshakeReturn=null,this.currentTransport=null,this.url=null,this.lastMessage=null,this.topics={},this._messageQ=[],this.handleAs="json-comment-optional",this.advice,this.pendingSubscriptions={},this.pendingUnsubscriptions={},this._subscriptions=[],this.tunnelInit=function(){},this.tunnelCollapse=function(){console.debug("tunnel collapsed!")},this.init=function(i,e,n){if(e=e||{},e.version=this.version,e.minimumVersion=this.minimumVersion,e.channel="/meta/handshake",e.id=""+this.messageId++,this.url=i||djConfig.cometdRoot,!this.url)return console.debug("no cometd root specified in djConfig and no root passed"),void 0;var s="^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$",o=(""+window.location).match(new RegExp(s));if(o[4]){var c=o[4].split(":"),r=c[0],d=c[1]||"80";if(o=this.url.match(new RegExp(s)),o[4]){c=o[4].split(":");var h=c[0],l=c[1]||"80";this._isXD=h!=r||l!=d}}this._isXD||(e.ext?e.ext["json-comment-filtered"]!==!0&&e.ext["json-comment-filtered"]!==!1&&(e.ext["json-comment-filtered"]=!0):e.ext={"json-comment-filtered":!0});var a={url:this.url,handleAs:this.handleAs,content:{message:t.toJson([e])},load:t.hitch(this,"finishInit"),error:function(t){console.debug("handshake error!:",t)}};return n&&t.mixin(a,n),this._props=e,this._initialized=!0,this.batch=0,this.startBatch(),this._isXD?(a.callbackParamName="jsonp",t.io.script.get(a)):t.xhrPost(a)},this.finishInit=function(i){if(i=i[0],this.handshakeReturn=i,i.advice&&(this.advice=i.advice),i.successful){if(i.version<this.minimumVersion)return console.debug("cometd protocol version mismatch. We wanted",this.minimumVersion,"but got",i.version),void 0;this.currentTransport=this.connectionTypes.match(i.supportedConnectionTypes,i.version,this._isXD),this.currentTransport._cometd=this,this.currentTransport.version=i.version,this.clientId=i.clientId,this.tunnelInit=t.hitch(this.currentTransport,"tunnelInit"),this.tunnelCollapse=t.hitch(this.currentTransport,"tunnelCollapse"),this.currentTransport.startup(i)}else{if(console.debug("cometd init failed"),this.advice&&"none"==this.advice.reconnect)return;if(this.advice&&this.advice.interval&&this.advice.interval>0){var e=this;setTimeout(function(){e.init(e.url,e._props)},this.advice.interval)}else this.init(this.url,this._props)}},this.deliver=function(i){return t.forEach(i,this._deliver,this),i},this._deliver=function(i){if(!i.channel&&i.success!==!0)return console.debug("cometd error: no channel for message!",i),void 0;if(this.lastMessage=i,i.advice&&(this.advice=i.advice),i.channel&&i.channel.length>5&&"/meta"==i.channel.substr(0,5))switch(i.channel){case"/meta/connect":i.successful&&!this._connected?(this._connected=this._initialized,this.endBatch()):this._initialized||(this._connected=!1);break;case"/meta/subscribe":var e=this.pendingSubscriptions[i.subscription];if(!i.successful)return e&&(e.errback(new Error(i.error)),delete this.pendingSubscriptions[i.subscription]),void 0;dojox.cometd.subscribed(i.subscription,i),e&&(e.callback(!0),delete this.pendingSubscriptions[i.subscription]);break;case"/meta/unsubscribe":var e=this.pendingUnsubscriptions[i.subscription];if(!i.successful)return e&&(e.errback(new Error(i.error)),delete this.pendingUnsubscriptions[i.subscription]),void 0;this.unsubscribed(i.subscription,i),e&&(e.callback(!0),delete this.pendingUnsubscriptions[i.subscription])}if(this.currentTransport.deliver(i),i.data){var n="/cometd"+i.channel;t.publish(n,[i])}},this.disconnect=function(){t.forEach(this._subscriptions,t.unsubscribe),this._subscriptions=[],this._messageQ=[],this._initialized&&this.currentTransport&&(this._initialized=!1,this.currentTransport.disconnect()),this._initialized=!1,this._polling||(this._connected=!1)},this.publish=function(i,e,n){var s={data:e,channel:i};n&&t.mixin(s,n),this._sendMessage(s)},this._sendMessage=function(t){return this.currentTransport&&this._connected&&0==this.batch?this.currentTransport.sendMessages([t]):(this._messageQ.push(t),void 0)},this.subscribe=function(i,e,n){if(this.pendingSubscriptions[i]){var s=this.pendingSubscriptions[i];s.cancel(),delete this.pendingSubscriptions[i]}var o=new t.Deferred;if(this.pendingSubscriptions[i]=o,e){var c="/cometd"+i;this.topics[c]&&t.unsubscribe(this.topics[c]);var r=t.subscribe(c,e,n);this.topics[c]=r}return this._sendMessage({channel:"/meta/subscribe",subscription:i}),o},this.subscribed=function(){},this.unsubscribe=function(i){if(this.pendingUnsubscriptions[i]){var e=this.pendingUnsubscriptions[i];e.cancel(),delete this.pendingUnsubscriptions[i]}var n=new t.Deferred;this.pendingUnsubscriptions[i]=n;var s="/cometd"+i;return this.topics[s]&&t.unsubscribe(this.topics[s]),this._sendMessage({channel:"/meta/unsubscribe",subscription:i}),n},this.unsubscribed=function(){},this.startBatch=function(){this.batch++},this.endBatch=function(){if(--this.batch<=0&&this.currentTransport&&this._connected){this.batch=0;var t=this._messageQ;this._messageQ=[],t.length>0&&this.currentTransport.sendMessages(t)}},this._onUnload=function(){t.addOnUnload(dojox.cometd,"disconnect")}},dojox.cometd.longPollTransport=new function(){this._connectionType="long-polling",this._cometd=null,this.lastTimestamp=null,this.check=function(i,e,n){return!n&&t.indexOf(i,"long-polling")>=0},this.tunnelInit=function(){this._cometd._polling||this.openTunnelWith({message:t.toJson([{channel:"/meta/connect",clientId:this._cometd.clientId,connectionType:this._connectionType,id:""+this._cometd.messageId++}])})},this.tunnelCollapse=function(){if(!this._cometd._polling)if(this._cometd._polling=!1,this._cometd.advice){if("none"==this._cometd.advice.reconnect)return;if(this._cometd.advice.interval&&this._cometd.advice.interval>0){var t=this;setTimeout(function(){t._connect()},this._cometd.advice.interval)}else this._connect()}else this._connect()},this._connect=function(){this._cometd.advice&&"handshake"==this._cometd.advice.reconnect?this._cometd.init(this._cometd.url,this._cometd._props):this._cometd._connected&&this.openTunnelWith({message:t.toJson([{channel:"/meta/connect",connectionType:this._connectionType,clientId:this._cometd.clientId,timestamp:this.lastTimestamp,id:""+this._cometd.messageId++}])})},this.deliver=function(t){t.timestamp&&(this.lastTimestamp=t.timestamp)},this.openTunnelWith=function(i,e){t.xhrPost({url:e||this._cometd.url,content:i,handleAs:this._cometd.handleAs,load:t.hitch(this,function(t){this._cometd._polling=!1,this._cometd.deliver(t),this.tunnelCollapse()}),error:function(i){console.debug("tunnel opening failed:",i),t.cometd._polling=!1}});this._cometd._polling=!0},this.sendMessages=function(i){for(var e=0;e<i.length;e++)i[e].clientId=this._cometd.clientId,i[e].id=""+this._cometd.messageId++;return t.xhrPost({url:this._cometd.url||djConfig.cometdRoot,handleAs:this._cometd.handleAs,load:t.hitch(this._cometd,"deliver"),content:{message:t.toJson(i)}})},this.startup=function(){this._cometd._connected||this.tunnelInit()},this.disconnect=function(){t.xhrPost({url:this._cometd.url||djConfig.cometdRoot,handleAs:this._cometd.handleAs,content:{message:t.toJson([{channel:"/meta/disconnect",clientId:this._cometd.clientId,id:""+this._cometd.messageId++}])}})}},dojox.cometd.callbackPollTransport=new function(){this._connectionType="callback-polling",this._cometd=null,this.lastTimestamp=null,this.check=function(i){return t.indexOf(i,"callback-polling")>=0},this.tunnelInit=function(){this._cometd._polling||this.openTunnelWith({message:t.toJson([{channel:"/meta/connect",clientId:this._cometd.clientId,connectionType:this._connectionType,id:""+this._cometd.messageId++}])})},this.tunnelCollapse=dojox.cometd.longPollTransport.tunnelCollapse,this._connect=dojox.cometd.longPollTransport._connect,this.deliver=dojox.cometd.longPollTransport.deliver,this.openTunnelWith=function(i,e){t.io.script.get({load:t.hitch(this,function(t){this._cometd._polling=!1,this._cometd.deliver(t),this.tunnelCollapse()}),error:function(){this._cometd._polling=!1,console.debug("tunnel opening failed")},url:e||this._cometd.url,content:i,callbackParamName:"jsonp"}),this._cometd._polling=!0},this.sendMessages=function(i){for(var e=0;e<i.length;e++)i[e].clientId=this._cometd.clientId,i[e].id=""+this._cometd.messageId++;var n={url:this._cometd.url||djConfig.cometdRoot,load:t.hitch(this._cometd,"deliver"),callbackParamName:"jsonp",content:{message:t.toJson(i)}};return t.io.script.get(n)},this.startup=function(){this._cometd._connected||this.tunnelInit()},this.disconnect=dojox.cometd.longPollTransport.disconnect,this.disconnect=function(){t.io.script.get({url:this._cometd.url||djConfig.cometdRoot,callbackParamName:"jsonp",content:{message:t.toJson([{channel:"/meta/disconnect",clientId:this._cometd.clientId,id:""+this._cometd.messageId++}])}})}},dojox.cometd.connectionTypes.register("long-polling",dojox.cometd.longPollTransport.check,dojox.cometd.longPollTransport),dojox.cometd.connectionTypes.register("callback-polling",dojox.cometd.callbackPollTransport.check,dojox.cometd.callbackPollTransport),t.addOnUnload(dojox.cometd,"_onUnload"))}});