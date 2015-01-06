dojo._hasResource["dijit._editor.plugins.EnterKeyHandling"]||(dojo._hasResource["dijit._editor.plugins.EnterKeyHandling"]=!0,dojo.provide("dijit._editor.plugins.EnterKeyHandling"),dojo.declare("dijit._editor.plugins.EnterKeyHandling",null,{blockNodeForEnter:"P",constructor:function(e){e&&dojo.mixin(this,e)},setEditor:function(e){if(this.editor=e,"BR"==this.blockNodeForEnter)dojo.isIE?(e.contentDomPreFilters.push(dojo.hitch(this,"regularPsToSingleLinePs")),e.contentDomPostFilters.push(dojo.hitch(this,"singleLinePsToRegularPs")),e.onLoadDeferred.addCallback(dojo.hitch(this,"_fixNewLineBehaviorForIE"))):e.onLoadDeferred.addCallback(dojo.hitch(this,function(e){try{this.editor.document.execCommand("insertBrOnReturn",!1,!0)}catch(t){}return e}));else if(this.blockNodeForEnter){dojo.require("dijit._editor.range");var t=dojo.hitch(this,this.handleEnterKey);e.addKeyHandler(13,0,t),e.addKeyHandler(13,2,t),this.connect(this.editor,"onKeyPressed","onKeyPressed")}},connect:function(e,t,o){this._connects||(this._connects=[]),this._connects.push(dojo.connect(e,t,this,o))},destroy:function(){dojo.forEach(this._connects,dojo.disconnect),this._connects=[]},onKeyPressed:function(){if(this._checkListLater){if(dojo.withGlobal(this.editor.window,"isCollapsed",dijit._editor.selection)&&!dojo.withGlobal(this.editor.window,"hasAncestorElement",dijit._editor.selection,["LI"])){dijit._editor.RichText.prototype.execCommand.apply(this.editor,["formatblock",this.blockNodeForEnter]);var e=dojo.withGlobal(this.editor.window,"getAncestorElement",dijit._editor.selection,[this.blockNodeForEnter]);if(e){if(e.innerHTML=this.bogusHtmlContent,dojo.isIE){var t=this.editor.document.selection.createRange();t.move("character",-1),t.select()}}else alert("onKeyPressed: Can not find the new block node")}this._checkListLater=!1}else this._pressedEnterInBlock&&(this.removeTrailingBr(this._pressedEnterInBlock.previousSibling),delete this._pressedEnterInBlock)},bogusHtmlContent:"&nbsp;",blockNodes:/^(?:H1|H2|H3|H4|H5|H6|LI)$/,handleEnterKey:function(e){if(!this.blockNodeForEnter)return!0;if(e.shiftKey||"BR"==this.blockNodeForEnter){var t=dojo.withGlobal(this.editor.window,"getParentElement",dijit._editor.selection),o=dijit.range.getAncestor(t,this.editor.blockNodes);if(o){if("LI"==o.tagName)return!0;var i=dijit.range.getSelection(this.editor.window),n=i.getRangeAt(0);if(n.collapsed||n.deleteContents(),dijit.range.atBeginningOfContainer(o,n.startContainer,n.startOffset))dojo.place(this.editor.document.createElement("br"),o,"before");else{if(!dijit.range.atEndOfContainer(o,n.startContainer,n.startOffset))return!0;dojo.place(this.editor.document.createElement("br"),o,"after");var r=dijit.range.create();r.setStartAfter(o),i.removeAllRanges(),i.addRange(r)}}else dijit._editor.RichText.prototype.execCommand.call(this.editor,"inserthtml","<br>");return!1}var d=!0,i=dijit.range.getSelection(this.editor.window),n=i.getRangeAt(0);n.collapsed||n.deleteContents();var l=dijit.range.getBlockAncestor(n.endContainer,null,this.editor.editNode);if(l.blockNode&&"LI"==l.blockNode.tagName)return this._checkListLater=!0,!0;if(this._checkListLater=!1,!l.blockNode){if(this.editor.document.execCommand("formatblock",!1,this.blockNodeForEnter),l={blockNode:dojo.withGlobal(this.editor.window,"getAncestorElement",dijit._editor.selection,[this.blockNodeForEnter]),blockContainer:this.editor.editNode},l.blockNode){if(0==(l.blockNode.textContent||l.blockNode.innerHTML).replace(/^\s+|\s+$/g,"").length)return this.removeTrailingBr(l.blockNode),!1}else l.blockNode=this.editor.editNode;i=dijit.range.getSelection(this.editor.window),n=i.getRangeAt(0)}var s=this.editor.document.createElement(this.blockNodeForEnter);if(s.innerHTML=this.bogusHtmlContent,this.removeTrailingBr(l.blockNode),dijit.range.atEndOfContainer(l.blockNode,n.endContainer,n.endOffset)){l.blockNode===l.blockContainer?l.blockNode.appendChild(s):dojo.place(s,l.blockNode,"after"),d=!1;var r=dijit.range.create();r.setStart(s,0),i.removeAllRanges(),i.addRange(r),this.editor.height&&s.scrollIntoView(!1)}else dijit.range.atBeginningOfContainer(l.blockNode,n.startContainer,n.startOffset)?(l.blockNode===l.blockContainer?dojo.place(s,l.blockNode,"first"):dojo.place(s,l.blockNode,"before"),this.editor.height&&s.scrollIntoView(!1),d=!1):dojo.isMoz&&(this._pressedEnterInBlock=l.blockNode);return d},removeTrailingBr:function(e){if(/P|DIV|LI/i.test(e.tagName))var t=e;else var t=dijit._editor.selection.getParentOfType(e,["P","DIV","LI"]);t&&(t.lastChild&&(t.childNodes.length>1&&3==t.lastChild.nodeType&&/^[\s\xAD]*$/.test(t.lastChild.nodeValue)&&dojo._destroyElement(t.lastChild),t.lastChild&&"BR"==t.lastChild.tagName&&dojo._destroyElement(t.lastChild)),0==t.childNodes.length&&(t.innerHTML=this.bogusHtmlContent))},_fixNewLineBehaviorForIE:function(e){if("undefined"==typeof this.editor.document.__INSERTED_EDITIOR_NEWLINE_CSS){var t="p{margin:0 !important;}",o=function(e,t){if(e){t||(t=document);var o=t.createElement("style");o.setAttribute("type","text/css");var i=t.getElementsByTagName("head")[0];if(!i)return console.debug("No head tag in document, aborting styles"),void 0;if(i.appendChild(o),o.styleSheet){var n=function(){try{o.styleSheet.cssText=e}catch(t){dojo.debug(t)}};o.styleSheet.disabled?setTimeout(n,10):n()}else{var r=t.createTextNode(e);o.appendChild(r)}return o}};return o(t,this.editor.document),this.editor.document.__INSERTED_EDITIOR_NEWLINE_CSS=!0,e}},regularPsToSingleLinePs:function(e,t){function o(e){function t(e){var t=e[0].ownerDocument.createElement("p");e[0].parentNode.insertBefore(t,e[0]);for(var o=0;o<e.length;o++)t.appendChild(e[o])}for(var o,i=0,n=[];i<e.childNodes.length;){if(o=e.childNodes[i],"BR"!=o.nodeName&&1==o.nodeType&&"block"!=dojo.style(o,"display"))n.push(o);else{{o.nextSibling}n.length&&(t(n),i=i+1-n.length,"BR"==o.nodeName&&dojo._destroyElement(o)),n=[]}i++}n.length&&t(n)}function i(e){for(var t=null,o=[],i=e.childNodes.length-1,n=i;n>=0;n--)if(t=e.childNodes[n],"BR"==t.nodeName){var r=t.ownerDocument.createElement("p");dojo.place(r,e,"after"),0==o.length&&n!=i&&(r.innerHTML="&nbsp;"),dojo.forEach(o,function(e){r.appendChild(e)}),dojo._destroyElement(t),o=[]}else o.unshift(t)}var n=[],r=e.getElementsByTagName("p");return dojo.forEach(r,function(e){n.push(e)}),dojo.forEach(n,function(e){if(e.previousSibling&&("P"==e.previousSibling.nodeName||"block"!=dojo.style(e.previousSibling,"display"))){var o=e.parentNode.insertBefore(this.document.createElement("p"),e);o.innerHTML=t?"":"&nbsp;"}i(e)},this.editor),o(e),e},singleLinePsToRegularPs:function(e){function t(e){for(var t=e.getElementsByTagName("p"),o=[],i=0;i<t.length;i++){for(var n=t[i],r=!1,d=0;d<o.length;d++)if(o[d]===n.parentNode){r=!0;break}r||o.push(n.parentNode)}return o}function o(e){return 1!=e.nodeType||"P"!=e.tagName?"block"==dojo.style(e,"display"):e.childNodes.length&&"&nbsp;"!=e.innerHTML?void 0:!0}for(var i=t(e),n=0;n<i.length;n++)for(var r=i[n],d=null,l=r.firstChild,s=null;l;){if("1"!=l.nodeType||"P"!=l.tagName)d=null;else if(o(l))s=l,d=null;else if(null==d)d=l;else{for(d.lastChild&&"BR"==d.lastChild.nodeName||!l.firstChild||"BR"==l.firstChild.nodeName||d.appendChild(this.editor.document.createElement("br"));l.firstChild;)d.appendChild(l.firstChild);s=l}l=l.nextSibling,s&&(dojo._destroyElement(s),s=null)}return e}}));