dojo._hasResource["dijit._base.popup"]||(dojo._hasResource["dijit._base.popup"]=!0,dojo.provide("dijit._base.popup"),dojo.require("dijit._base.focus"),dojo.require("dijit._base.place"),dojo.require("dijit._base.window"),dijit.popup=new function(){var o=[],e=1e3,i=1;this.open=function(n){function d(){for(var e=o.length-1;e>0&&o[e].parent===o[e-1].widget;e--);return o[e]}var t=n.popup,s=n.orient||{BL:"TL",TL:"BL"},r=n.around,a=n.around&&n.around.id?n.around.id+"_dropdown":"popup_"+i++,p=dojo.doc.createElement("div");p.id=a,p.className="dijitPopup",p.style.zIndex=e+o.length,p.style.visibility="hidden",n.parent&&(p.dijitPopupParent=n.parent.id),dojo.body().appendChild(p),t.domNode.style.display="",p.appendChild(t.domNode);var l=new dijit.BackgroundIframe(p),c=r?dijit.placeOnScreenAroundElement(p,r,s,t.orient?dojo.hitch(t,"orient"):null):dijit.placeOnScreen(p,n,"R"==s?["TR","BR","TL","BL"]:["TL","BL","TR","BR"]);p.style.visibility="visible";var u=[];return u.push(dojo.connect(p,"onkeypress",this,function(o){if(o.keyCode==dojo.keys.ESCAPE&&n.onCancel)n.onCancel();else if(o.keyCode==dojo.keys.TAB){dojo.stopEvent(o);var e=d();e&&e.onCancel&&e.onCancel()}})),t.onCancel&&u.push(dojo.connect(t,"onCancel",null,n.onCancel)),u.push(dojo.connect(t,t.onExecute?"onExecute":"onChange",null,function(){var o=d();o&&o.onExecute&&o.onExecute()})),o.push({wrapper:p,iframe:l,widget:t,parent:n.parent,onExecute:n.onExecute,onCancel:n.onCancel,onClose:n.onClose,handlers:u}),t.onOpen&&t.onOpen(c),c},this.close=function(e){for(;dojo.some(o,function(o){return o.widget==e});){var i=o.pop(),n=i.wrapper,d=i.iframe,t=i.widget,s=i.onClose;if(t.onClose&&t.onClose(),dojo.forEach(i.handlers,dojo.disconnect),!t||!t.domNode)return;dojo.style(t.domNode,"display","none"),dojo.body().appendChild(t.domNode),d.destroy(),dojo._destroyElement(n),s&&s()}}},dijit._frames=new function(){var o=[];this.pop=function(){var e;if(o.length)e=o.pop(),e.style.display="";else{if(dojo.isIE){var i="<iframe src='javascript:\"\"' style='position: absolute; left: 0px; top: 0px;z-index: -1; filter:Alpha(Opacity=\"0\");'>";e=dojo.doc.createElement(i)}else{var e=dojo.doc.createElement("iframe");e.src='javascript:""',e.className="dijitBackgroundIframe"}e.tabIndex=-1,dojo.body().appendChild(e)}return e},this.push=function(e){e.style.display="",dojo.isIE&&(e.style.removeExpression("width"),e.style.removeExpression("height")),o.push(e)}},dojo.isIE&&dojo.isIE<7&&dojo.addOnLoad(function(){var o=dijit._frames;dojo.forEach([o.pop()],o.push)}),dijit.BackgroundIframe=function(o){if(!o.id)throw new Error("no id");if(dojo.isIE&&dojo.isIE<7||dojo.isFF&&dojo.isFF<3&&dojo.hasClass(dojo.body(),"dijit_a11y")){var e=dijit._frames.pop();o.appendChild(e),dojo.isIE&&(e.style.setExpression("width","document.getElementById('"+o.id+"').offsetWidth"),e.style.setExpression("height","document.getElementById('"+o.id+"').offsetHeight")),this.iframe=e}},dojo.extend(dijit.BackgroundIframe,{destroy:function(){this.iframe&&(dijit._frames.push(this.iframe),delete this.iframe)}}));