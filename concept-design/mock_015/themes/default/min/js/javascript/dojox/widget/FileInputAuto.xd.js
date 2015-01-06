dojo._xdResourceLoaded({depends:[["provide","dojox.widget.FileInputAuto"],["require","dojox.widget.FileInput"],["require","dojo.io.iframe"]],defineResource:function(t){t._hasResource["dojox.widget.FileInputAuto"]||(t._hasResource["dojox.widget.FileInputAuto"]=!0,t.provide("dojox.widget.FileInputAuto"),t.require("dojox.widget.FileInput"),t.require("dojo.io.iframe"),t.declare("dojox.widget.FileInputAuto",dojox.widget.FileInput,{url:"",blurDelay:2e3,duration:500,uploadMessage:"Uploading ...",_sent:!1,templateString:'<div class="dijitFileInput">\r\n	<input class="dijitFileInputReal" type="file" dojoAttachPoint="fileInput" />\r\n	<div class="dijitFakeInput" dojoAttachPoint="fakeNodeHolder">\r\n		<input class="dijitFileInputVisible" type="text" dojoAttachPoint="focusNode, inputNode" />\r\n		<span class="dijitInline dijitFileInputText" dojoAttachPoint="titleNode">${label}</span>\r\n		<span class="dijitInline dijitFileInputButton" dojoAttachPoint="cancelNode" dojoAttachEvent="onclick:_onClick">${cancelText}</span>\r\n	</div>\r\n	<div class="dijitProgressOverlay" dojoAttachPoint="overlay">&nbsp;</div>\r\n</div>\r\n',startup:function(){this._blurListener=t.connect(this.fileInput,"onblur",this,"_onBlur"),this._focusListener=t.connect(this.fileInput,"onfocus",this,"_onFocus"),this.inherited("startup",arguments)},_onFocus:function(){this._blurTimer&&clearTimeout(this._blurTimer)},_onBlur:function(){this._blurTimer&&clearTimeout(this._blurTimer),this._sent||(this._blurTimer=setTimeout(t.hitch(this,"_sendFile"),this.blurDelay))},setMessage:function(i){t.isIE||(this.overlay.innerHTML=i)},_sendFile:function(){if(this.fileInput.value&&!this._sent){t.style(this.fakeNodeHolder,"display","none"),t.style(this.overlay,"opacity","0"),t.style(this.overlay,"display","block"),this.setMessage(this.uploadMessage),t.fadeIn({node:this.overlay,duration:this.duration}).play();var i=document.createElement("form");i.setAttribute("enctype","multipart/form-data");{t.clone(this.fileInput)}i.appendChild(this.fileInput),t.body().appendChild(i),t.io.iframe.send({url:this.url+"?name="+this.name,form:i,handleAs:"text",handle:t.hitch(this,"_handleSend")})}},_handleSend:function(i,e){t.isIE||(this.overlay.innerHTML=""),this._sent=!0,t.style(this.overlay,"opacity","0"),t.style(this.overlay,"border","none"),t.style(this.overlay,"background","none"),this.overlay.style.backgroundImage="none",this.fileInput.style.display="none",this.fakeNodeHolder.style.display="none",t.fadeIn({node:this.overlay,duration:this.duration}).play(250),t.disconnect(this._blurListener),t.disconnect(this._focusListener),this.onComplete(i,e,this)},_onClick:function(){this._blurTimer&&clearTimeout(this._blurTimer),t.disconnect(this._blurListener),t.disconnect(this._focusListener),this.inherited("_onClick",arguments),this._blurListener=t.connect(this.fileInput,"onblur",this,"_onBlur"),this._focusListener=t.connect(this.fileInput,"onfocus",this,"_onFocus")},onComplete:function(){}}),t.declare("dojox.widget.FileInputBlind",dojox.widget.FileInputAuto,{startup:function(){this.inherited("startup",arguments),this._off=t.style(this.inputNode,"width"),this.inputNode.style.display="none",this._fixPosition()},_fixPosition:function(){t.isIE?t.style(this.fileInput,"width","1px"):t.style(this.fileInput,"left","-"+this._off+"px")},_onClick:function(){this.inherited("_onClick",arguments),this._fixPosition()}}))}});