dojo._xdResourceLoaded({depends:[["provide","dojox.dtl.tag.event"],["require","dojox.dtl._base"]],defineResource:function(e){e._hasResource["dojox.dtl.tag.event"]||(e._hasResource["dojox.dtl.tag.event"]=!0,e.provide("dojox.dtl.tag.event"),e.require("dojox.dtl._base"),dojox.dtl.tag.event.EventNode=function(e,t){this._type=e,this.contents=t},e.extend(dojox.dtl.tag.event.EventNode,{render:function(t,n){if(this._clear||(n.getParent()[this._type]=null,this._clear=!0),this.contents&&!this._rendered){if(!t.getThis())throw new Error("You must use Context.setObject(instance)");this._rendered=e.connect(n.getParent(),this._type,t.getThis(),this.contents)}return n},unrender:function(t,n){return this._rendered&&(e.disconnect(this._rendered),this._rendered=!1),n},clone:function(){return new dojox.dtl.tag.event.EventNode(this._type,this.contents)},toString:function(){return"dojox.dtl.tag.event."+this._type}}),dojox.dtl.tag.event.on=function(e,t){var n=t.split(" ");return new dojox.dtl.tag.event.EventNode(n[0],n[1])})}});