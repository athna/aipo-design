dojo._hasResource["dojox.dtl.tag.misc"]||(dojo._hasResource["dojox.dtl.tag.misc"]=!0,dojo.provide("dojox.dtl.tag.misc"),dojo.require("dojox.dtl._base"),dojox.dtl.tag.misc.commentNode=new function(){this.render=this.unrender=function(t,o){return o},this.clone=function(){return this},this.toString=function(){return"dojox.dtl.tag.misc.CommentNode"}},dojox.dtl.tag.misc.DebugNode=function(t){this._TextNode=t},dojo.extend(dojox.dtl.tag.misc.DebugNode,{render:function(t,o){for(var e,n=t.getKeys(),d="",r=0;e=n[r];r++)console.debug("DEBUG",e,":",t[e]),d+=e+": "+dojo.toJson(t[e])+"\n\n";return new this._TextNode(d).render(t,o,this)},unrender:function(t,o){return o},clone:function(){return new this.constructor(this._TextNode)},toString:function(){return"dojox.dtl.tag.misc.DebugNode"}}),dojox.dtl.tag.misc.FilterNode=function(t,o){this._varnode=t,this._nodelist=o},dojo.extend(dojox.dtl.tag.misc.FilterNode,{render:function(t,o){var e=this._nodelist.render(t,new dojox.string.Builder);t.update({"var":e.toString()});this._varnode.render(t,o);return t.pop(),o},unrender:function(t,o){return o},clone:function(t){return new this.constructor(this._expression,this._nodelist.clone(t))}}),dojox.dtl.tag.misc.comment=function(t){return t.skipPast("endcomment"),dojox.dtl.tag.misc.commentNode},dojox.dtl.tag.misc.debug=function(t){return new dojox.dtl.tag.misc.DebugNode(t.getTextNode())},dojox.dtl.tag.misc.filter=function(t,o){var e=o.split(" ",2),n=new(t.getVarNode())("var|"+e[1]),d=t.parse(["endfilter"]);return t.next(),new dojox.dtl.tag.misc.FilterNode(n,d)});