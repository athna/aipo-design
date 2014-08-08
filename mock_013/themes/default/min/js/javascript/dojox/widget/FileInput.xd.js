dojo._xdResourceLoaded({depends:[["provide","dojox.widget.FileInput"],["require","dijit.form._FormWidget"],["require","dijit._Templated"]],defineResource:function(e){e._hasResource["dojox.widget.FileInput"]||(e._hasResource["dojox.widget.FileInput"]=!0,e.provide("dojox.widget.FileInput"),e.experimental("dojox.widget.FileInput"),e.require("dijit.form._FormWidget"),e.require("dijit._Templated"),e.declare("dojox.widget.FileInput",[dijit.form._FormWidget,dijit._Templated],{label:"Browse ...",cancelText:"Cancel",name:"uploadFile",templateString:'<div class="dijitFileInput">\r\n	<input id="${id}" class="dijitFileInputReal" type="file" dojoAttachPoint="fileInput" name="${name}" />\r\n	<div class="dijitFakeInput">\r\n		<input class="dijitFileInputVisible" type="text" dojoAttachPoint="focusNode, inputNode" />\r\n		<span class="dijitFileInputText" dojoAttachPoint="titleNode">${label}</span>\r\n		<span class="dijitFileInputButton" dojoAttachPoint="cancelNode" \r\n			dojoAttachEvent="onclick:_onClick">${cancelText}</span>\r\n	</div>\r\n</div>\r\n',startup:function(){this.inherited("startup",arguments),this._listener=e.connect(this.fileInput,"onchange",this,"_matchValue"),this._keyListener=e.connect(this.fileInput,"onkeyup",this,"_matchValue")},_matchValue:function(){this.inputNode.value=this.fileInput.value,this.inputNode.value&&(this.cancelNode.style.visibility="visible",e.fadeIn({node:this.cancelNode,duration:275}).play())},setLabel:function(e){this.titleNode.innerHTML=e},_onClick:function(){e.disconnect(this._listener),e.disconnect(this._keyListener),this.domNode.removeChild(this.fileInput),e.fadeOut({node:this.cancelNode,duration:275}).play(),this.fileInput=document.createElement("input"),this.fileInput.setAttribute("type","file"),this.fileInput.setAttribute("id",this.id),this.fileInput.setAttribute("name",this.name),e.addClass(this.fileInput,"dijitFileInputReal"),this.domNode.appendChild(this.fileInput),this._keyListener=e.connect(this.fileInput,"onkeyup",this,"_matchValue"),this._listener=e.connect(this.fileInput,"onchange",this,"_matchValue"),this.inputNode.value=""}}))}});