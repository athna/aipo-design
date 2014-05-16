dojo._hasResource["dijit._editor.range"]||(dojo._hasResource["dijit._editor.range"]=!0,dojo.provide("dijit._editor.range"),dijit.range={},dijit.range.getIndex=function(e,t){for(var n=[],i=[],o=t,r=e;e!=o;){for(var a,s=0,d=e.parentNode;a=d.childNodes[s++];)if(a===e){--s;break}s>=d.childNodes.length&&dojo.debug("Error finding index of a node in dijit.range.getIndex"),n.unshift(s),i.unshift(s-d.childNodes.length),e=d}if(n.length>0&&3==r.nodeType){for(var a=r.previousSibling;a&&3==a.nodeType;)n[n.length-1]--,a=a.previousSibling;for(a=r.nextSibling;a&&3==a.nodeType;)i[i.length-1]++,a=a.nextSibling}return{o:n,r:i}},dijit.range.getNode=function(e,t){if(!dojo.isArray(e)||0==e.length)return t;var n=t;return dojo.every(e,function(i){return i>=0&&i<n.childNodes.length?(n=n.childNodes[i],!0):(n=null,console.debug("Error: can not find node with index",e,"under parent node",t),!1)}),n},dijit.range.getCommonAncestor=function(e,t,n){for(var i=function(e,t){for(var n=[];e&&(n.unshift(e),e!=t&&"BODY"!=e.tagName);)e=e.parentNode;return n},o=i(e,n),r=i(t,n),a=Math.min(o.length,r.length),s=o[0],d=1;a>d&&o[d]===r[d];d++)s=o[d];return s},dijit.range.getAncestor=function(e,t,n){for(n=n||e.ownerDocument.body;e&&e!==n;){var i=e.nodeName.toUpperCase();if(t.test(i))return e;e=e.parentNode}return null},dijit.range.BlockTagNames=/^(?:P|DIV|H1|H2|H3|H4|H5|H6|ADDRESS|PRE|OL|UL|LI|DT|DE)$/,dijit.range.getBlockAncestor=function(e,t,n){n=n||e.ownerDocument.body,t=t||dijit.range.BlockTagNames;for(var i,o=null;e&&e!==n;){var r=e.nodeName.toUpperCase();!o&&t.test(r)&&(o=e),!i&&/^(?:BODY|TD|TH|CAPTION)$/.test(r)&&(i=e),e=e.parentNode}return{blockNode:o,blockContainer:i||e.ownerDocument.body}},dijit.range.atBeginningOfContainer=function(e,t,n){var i=!1,o=0==n;if(o||3!=t.nodeType||0==dojo.trim(t.nodeValue.substr(0,n))&&(o=!0),o){var r=t;for(i=!0;r&&r!==e;){if(r.previousSibling){i=!1;break}r=r.parentNode}}return i},dijit.range.atEndOfContainer=function(e,t,n){var i=!1,o=n==(t.length||t.childNodes.length);if(o||3!=t.nodeType||0==dojo.trim(t.nodeValue.substr(n))&&(o=!0),o){var r=t;for(i=!0;r&&r!==e;){if(r.nextSibling){i=!1;break}r=r.parentNode}}return i},dijit.range.adjacentNoneTextNode=function(e,t){for(var n=e,i=0-e.length||0,o=t?"nextSibling":"previousSibling";n&&3==n.nodeType;)i+=n.length,n=n[o];return[n,i]},dijit.range._w3c=Boolean(window.getSelection),dijit.range.create=function(){return dijit.range._w3c?document.createRange():new dijit.range.W3CRange},dijit.range.getSelection=function(e,t){if(dijit.range._w3c)return e.getSelection();var n=e.__W3CRange;if(n&&dijit.range.ie.cachedSelection[n])var i=dijit.range.ie.cachedSelection[n];else{var i=new dijit.range.ie.selection(e);for(n=(new Date).getTime();n in dijit.range.ie.cachedSelection;)n+=1;n=String(n),dijit.range.ie.cachedSelection[n]=i}return t||i._getCurrentSelection(),i},dijit.range._w3c||(dijit.range.ie={cachedSelection:{},selection:function(e){this._ranges=[],this.addRange=function(e,t){this._ranges.push(e),t||e._select(),this.rangeCount=this._ranges.length},this.removeAllRanges=function(){this._ranges=[],this.rangeCount=0};var t=function(){var t=e.document.selection.createRange(),n=e.document.selection.type.toUpperCase();return"CONTROL"==n?new dijit.range.W3CRange(dijit.range.ie.decomposeControlRange(t)):new dijit.range.W3CRange(dijit.range.ie.decomposeTextRange(t))};this.getRangeAt=function(e){return this._ranges[e]},this._getCurrentSelection=function(){this.removeAllRanges();var e=t();e&&this.addRange(e,!0)}},decomposeControlRange:function(e){var t=e.item(0),n=e.item(e.length-1),i=t.parentNode,o=n.parentNode,r=dijit.range.getIndex(t,i).o,a=dijit.range.getIndex(n,o).o+1;return[[i,r],[o,a]]},getEndPoint:function(e,t){var n=e.duplicate();n.collapse(!t);var i,o,r,a="EndTo"+(t?"End":"Start"),s=n.parentElement();return s.childNodes.length>0?dojo.every(s.childNodes,function(t,d){var l;if(3!=t.nodeType){if(n.moveToElementText(t),n.compareEndPoints(a,e)>0){if(i=t.previousSibling,!r||3!=r.nodeType)return i=s,o=d,!1;i=r,l=!0}else if(d==s.childNodes.length-1)return i=s,o=s.childNodes.length,!1}else d==s.childNodes.length-1&&(i=t,l=!0);if(l&&i){var g=dijit.range.adjacentNoneTextNode(i)[0];i=g?g.nextSibling:s.firstChild;var c=dijit.range.adjacentNoneTextNode(i);g=c[0];var h=c[1];return g?(n.moveToElementText(g),n.collapse(!1)):n.moveToElementText(s),n.setEndPoint(a,e),o=n.text.length-h,!1}return r=t,!0}):(i=s,o=0),t||3==i.nodeType||o!=i.childNodes.length||i.nextSibling&&3==i.nextSibling.nodeType&&(i=i.nextSibling,o=0),[i,o]},setEndPoint:function(e,t,n){var i=e.duplicate();if(3!=t.nodeType)if(i.moveToElementText(t),i.collapse(!0),n==t.childNodes.length)if(n>0){for(var o=t.lastChild,r=0;o&&3==o.nodeType;)r+=o.length,t=o,o=o.previousSibling;o&&i.moveToElementText(o),i.collapse(!1),n=r}else i.moveToElementText(t),i.collapse(!0);else if(n>0){var o=t.childNodes[n-1];3==o.nodeType?(t=o,n=o.length):(i.moveToElementText(o),i.collapse(!1))}if(3==t.nodeType){var a=dijit.range.adjacentNoneTextNode(t),s=a[0],r=a[1];s?(i.moveToElementText(s),i.collapse(!1),"inherit"!=s.contentEditable&&r++):(i.moveToElementText(t.parentNode),i.collapse(!0)),n+=r,n>0&&(i.moveEnd("character",n)!=n&&alert("Error when moving!"),i.collapse(!1))}return i},decomposeTextRange:function(e){var t=dijit.range.ie.getEndPoint(e),n=t[0],i=t[1],o=t[0],r=t[1];return e.htmlText.length&&(e.htmlText==e.text?r=i+e.text.length:(t=dijit.range.ie.getEndPoint(e,!0),o=t[0],r=t[1])),[[n,i],[o,r],e.parentElement()]},setRange:function(e,t,n,i,o){var r=dijit.range.ie.setEndPoint(e,t,n);if(e.setEndPoint("StartToStart",r),!this.collapsed){var a=dijit.range.ie.setEndPoint(e,i,o);e.setEndPoint("EndToEnd",a)}return e}},dojo.declare("dijit.range.W3CRange",null,{constructor:function(){arguments.length>0?(this.setStart(arguments[0][0][0],arguments[0][0][1]),this.setEnd(arguments[0][1][0],arguments[0][1][1],arguments[0][2])):(this.commonAncestorContainer=null,this.startContainer=null,this.startOffset=0,this.endContainer=null,this.endOffset=0,this.collapsed=!0)},_simpleSetEndPoint:function(e,t,n){var i=(this._body||e.ownerDocument.body).createTextRange();1!=e.nodeType?i.moveToElementText(e.parentNode):i.moveToElementText(e),i.collapse(!0),t.setEndPoint(n?"EndToEnd":"StartToStart",i)},_updateInternal:function(e){if(this.startContainer!==this.endContainer){if(!e){var t=(this._body||this.startContainer.ownerDocument.body).createTextRange();this._simpleSetEndPoint(this.startContainer,t),this._simpleSetEndPoint(this.endContainer,t,!0),e=t.parentElement()}this.commonAncestorContainer=dijit.range.getCommonAncestor(this.startContainer,this.endContainer,e)}else this.commonAncestorContainer=this.startContainer;this.collapsed=this.startContainer===this.endContainer&&this.startOffset==this.endOffset},setStart:function(e,t,n){(this.startContainer!==e||this.startOffset!=t)&&(delete this._cachedBookmark,this.startContainer=e,this.startOffset=t,this.endContainer?this._updateInternal(n):this.setEnd(e,t,n))},setEnd:function(e,t,n){(this.endContainer!==e||this.endOffset!=t)&&(delete this._cachedBookmark,this.endContainer=e,this.endOffset=t,this.startContainer?this._updateInternal(n):this.setStart(e,t,n))},setStartAfter:function(e,t){this._setPoint("setStart",e,t,1)},setStartBefore:function(e,t){this._setPoint("setStart",e,t,0)},setEndAfter:function(e,t){this._setPoint("setEnd",e,t,1)},setEndBefore:function(e,t){this._setPoint("setEnd",e,t,0)},_setPoint:function(e,t,n,i){var o=dijit.range.getIndex(t,t.parentNode).o;this[e](t.parentNode,o.pop()+i)},_getIERange:function(){var e=(this._body||this.endContainer.ownerDocument.body).createTextRange();return dijit.range.ie.setRange(e,this.startContainer,this.startOffset,this.endContainer,this.endOffset),e},getBookmark:function(){return this._getIERange(),this._cachedBookmark},_select:function(){var e=this._getIERange();e.select()},deleteContents:function(){var e=this._getIERange();e.pasteHTML(""),this.endContainer=this.startContainer,this.endOffset=this.startOffset,this.collapsed=!0},cloneRange:function(){var e=new dijit.range.W3CRange([[this.startContainer,this.startOffset],[this.endContainer,this.endOffset]]);return e._body=this._body,e},detach:function(){this._body=null,this.commonAncestorContainer=null,this.startContainer=null,this.startOffset=0,this.endContainer=null,this.endOffset=0,this.collapsed=!0}})));