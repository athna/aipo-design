dojo._hasResource["dijit._tree.dndSelector"]||(dojo._hasResource["dijit._tree.dndSelector"]=!0,dojo.provide("dijit._tree.dndSelector"),dojo.require("dojo.dnd.common"),dojo.require("dijit._tree.dndContainer"),dojo.declare("dijit._tree.dndSelector",dijit._tree.dndContainer,{constructor:function(){this.selection={},this.anchor=null,this.simpleSelection=!1,this.events.push(dojo.connect(this.tree.domNode,"onmousedown",this,"onMouseDown"),dojo.connect(this.tree.domNode,"onmouseup",this,"onMouseUp"))},singular:!1,getSelectedItems:function(){var t=[];for(var e in this.selection)t.push(dijit.getEnclosingWidget(this.selection[e]).item);return t},getSelectedNodes:function(){return this.selection},selectNone:function(){return this._removeSelection()._removeAnchor()},insertItems:function(){},destroy:function(){dojo.dnd.Selector.superclass.destroy.call(this),this.selection=this.anchor=null},onMouseDown:function(t){if(this.current){var e=dijit.getEnclosingWidget(this.current).item,i=this.tree.store.getIdentity(e);if(this.current.id||(this.current.id=i),this.current.type||(this.current.type="data"),!this.singular&&!dojo.dnd.getCopyKeyState(t)&&!t.shiftKey&&this.current.id in this.selection)return this.simpleSelection=!0,dojo.stopEvent(t),void 0;if(this.singular)this.anchor==this.current?dojo.dnd.getCopyKeyState(t)&&this.selectNone():(this.selectNone(),this.anchor=this.current,this._addItemClass(this.anchor,"Anchor"),this.selection[this.current.id]=this.current);else if(!this.singular&&t.shiftKey)dojo.dnd.getCopyKeyState(t);else if(dojo.dnd.getCopyKeyState(t))this.anchor==this.current?(delete this.selection[this.anchor.id],this._removeAnchor()):this.current.id in this.selection?(this._removeItemClass(this.current,"Selected"),delete this.selection[this.current.id]):(this.anchor&&(this._removeItemClass(this.anchor,"Anchor"),this._addItemClass(this.anchor,"Selected")),this.anchor=this.current,this._addItemClass(this.current,"Anchor"),this.selection[this.current.id]=this.current);else{var e=dijit.getEnclosingWidget(this.current).item,i=this.tree.store.getIdentity(e);i in this.selection||(this.selectNone(),this.anchor=this.current,this._addItemClass(this.current,"Anchor"),this.selection[i]=this.current)}dojo.stopEvent(t)}},onMouseMove:function(){},onOverEvent:function(){this.onmousemoveEvent=dojo.connect(this.node,"onmousemove",this,"onMouseMove")},onMouseUp:function(){this.simpleSelection&&(this.simpleSelection=!1,this.selectNone(),this.current&&(this.anchor=this.current,this._addItemClass(this.anchor,"Anchor"),this.selection[this.current.id]=this.current))},_removeSelection:function(){var t=dojo.dnd._empty;for(var e in this.selection)if(!(e in t)){var i=dojo.byId(e);i&&this._removeItemClass(i,"Selected")}return this.selection={},this},_removeAnchor:function(){return this.anchor&&(this._removeItemClass(this.anchor,"Anchor"),this.anchor=null),this}}));