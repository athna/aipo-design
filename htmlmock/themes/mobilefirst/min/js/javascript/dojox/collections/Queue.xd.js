dojo._xdResourceLoaded({depends:[["provide","dojox.collections.Queue"],["require","dojox.collections._base"]],defineResource:function(o){o._hasResource["dojox.collections.Queue"]||(o._hasResource["dojox.collections.Queue"]=!0,o.provide("dojox.collections.Queue"),o.require("dojox.collections._base"),dojox.collections.Queue=function(e){var t=[];e&&(t=t.concat(e)),this.count=t.length,this.clear=function(){t=[],this.count=t.length},this.clone=function(){return new dojox.collections.Queue(t)},this.contains=function(o){for(var e=0;e<t.length;e++)if(t[e]==o)return!0;return!1},this.copyTo=function(o,e){o.splice(e,0,t)},this.dequeue=function(){var o=t.shift();return this.count=t.length,o},this.enqueue=function(o){this.count=t.push(o)},this.forEach=function(e,n){o.forEach(t,e,n)},this.getIterator=function(){return new dojox.collections.Iterator(t)},this.peek=function(){return t[0]},this.toArray=function(){return[].concat(t)}})}});