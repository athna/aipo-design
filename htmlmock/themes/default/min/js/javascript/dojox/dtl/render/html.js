dojo._hasResource["dojox.dtl.render.html"]||(dojo._hasResource["dojox.dtl.render.html"]=!0,dojo.provide("dojox.dtl.render.html"),dojox.dtl.render.html.sensitivity={NODE:1,ATTRIBUTE:2,TEXT:3},dojox.dtl.render.html.Render=function(e,t){this._tpl=t,this._node=e,this._swap=dojo.hitch(this,function(){if(this._node===this._tpl.getRootNode()){var e=this._node;this._node=this._node.cloneNode(!0),e.parentNode.replaceChild(this._node,e)}})},dojo.extend(dojox.dtl.render.html.Render,{sensitivity:dojox.dtl.render.html.sensitivity,setAttachPoint:function(e){this._node=e},render:function(e,t,o){if(!this._node)throw new Error("You cannot use the Render object without specifying where you want to render it");if(o=o||e.getBuffer(),t.getThis()&&t.getThis().buffer==this.sensitivity.NODE)var d=dojo.connect(o,"onAddNode",this,"_swap"),n=dojo.connect(o,"onRemoveNode",this,"_swap");this._tpl&&this._tpl!==e&&this._tpl.unrender(t,o),this._tpl=e;var i=e.render(t,o).getParent();dojo.disconnect(d),dojo.disconnect(n),this._node!==i&&(this._node.parentNode.replaceChild(i,this._node),dojo._destroyElement(this._node),this._node=i)}}));