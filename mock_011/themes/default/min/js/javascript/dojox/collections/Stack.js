dojo._hasResource["dojox.collections.Stack"]||(dojo._hasResource["dojox.collections.Stack"]=!0,dojo.provide("dojox.collections.Stack"),dojo.require("dojox.collections._base"),dojox.collections.Stack=function(o){var t=[];o&&(t=t.concat(o)),this.count=t.length,this.clear=function(){t=[],this.count=t.length},this.clone=function(){return new dojox.collections.Stack(t)},this.contains=function(o){for(var n=0;n<t.length;n++)if(t[n]==o)return!0;return!1},this.copyTo=function(o,n){o.splice(n,0,t)},this.forEach=function(o,n){dojo.forEach(t,o,n)},this.getIterator=function(){return new dojox.collections.Iterator(t)},this.peek=function(){return t[t.length-1]},this.pop=function(){var o=t.pop();return this.count=t.length,o},this.push=function(o){this.count=t.push(o)},this.toArray=function(){return[].concat(t)}});