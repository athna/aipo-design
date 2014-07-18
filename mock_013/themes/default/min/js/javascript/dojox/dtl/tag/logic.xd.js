dojo._xdResourceLoaded({depends:[["provide","dojox.dtl.tag.logic"],["require","dojox.dtl._base"]],defineResource:function(e){e._hasResource["dojox.dtl.tag.logic"]||(e._hasResource["dojox.dtl.tag.logic"]=!0,e.provide("dojox.dtl.tag.logic"),e.require("dojox.dtl._base"),dojox.dtl.tag.logic.IfNode=function(e,t,o,r){this.bools=e,this.trues=t,this.falses=o,this.type=r},e.extend(dojox.dtl.tag.logic.IfNode,{render:function(e,t){if("or"==this.type)for(var o,r=0;o=this.bools[r];r++){var s=o[0],n=o[1],i=n.resolve(e);if(i&&!s||s&&!i)return this.falses&&(t=this.falses.unrender(e,t)),this.trues.render(e,t,this);if(t=this.trues.unrender(e,t),this.falses)return this.falses.render(e,t,this)}else for(var o,r=0;o=this.bools[r];r++){var s=o[0],n=o[1],i=n.resolve(e);if(!(i&&!s||s&&!i))return this.trues&&(t=this.trues.unrender(e,t)),this.falses.render(e,t,this);if(t=this.falses.unrender(e,t),this.falses)return this.trues.render(e,t,this)}return t},unrender:function(e,t){return this.trues&&(t=this.trues.unrender(e,t)),this.falses&&(t=this.falses.unrender(e,t)),t},clone:function(e){var t=this.trues,o=this.falses;return t&&(t=t.clone(e)),o&&(o=o.clone(e)),new this.constructor(this.bools,t,o,this.type)},toString:function(){return"dojox.dtl.tag.logic.IfNode"}}),dojox.dtl.tag.logic.ForNode=function(e,t,o,r){this.assign=e,this.loop=t,this.reversed=o,this.nodelist=r,this.pool=[]},e.extend(dojox.dtl.tag.logic.ForNode,{render:function(e,t){var o={};e.forloop&&(o=e.forloop);var r=dojox.dtl.resolveVariable(this.loop,e);e.push();for(var s=r.length;s<this.pool.length;s++)this.pool[s].unrender(e,t);this.reversed&&(r=r.reversed());var n=0;for(var s in r){var i=r[s];e.forloop={key:s,counter0:n,counter:n+1,revcounter0:r.length-n-1,revcounter:r.length-n,first:0==n,parentloop:o},e[this.assign]=i,n+1>this.pool.length&&this.pool.push(this.nodelist.clone(t)),t=this.pool[n].render(e,t,this),++n}return e.pop(),t},unrender:function(e,t){for(var o,r=0;o=this.pool[r];r++)t=o.unrender(e,t);return t},clone:function(e){return new this.constructor(this.assign,this.loop,this.reversed,this.nodelist.clone(e))},toString:function(){return"dojox.dtl.tag.logic.ForNode"}}),dojox.dtl.tag.logic.if_=function(e,t){var o,r=t.split(/\s+/g),s=[];if(r.shift(),t=r.join(" "),r=t.split(" and "),1==r.length)o="or",r=t.split(" or ");else{o="and";for(var n=0;n<r.length;n++)if("or"==r[n])throw new Error("'if' tags can't mix 'and' and 'or'")}for(var i,n=0;i=r[n];n++){var l=!1;0==i.indexOf("not ")&&(i=i.substring(4),l=!0),s.push([l,new dojox.dtl.Filter(i)])}var d=e.parse(["else","endif"]),h=!1,a=e.next();if("else"==a.text){var h=e.parse(["endif"]);e.next()}return new dojox.dtl.tag.logic.IfNode(s,d,h,o)},dojox.dtl.tag.logic.for_=function(e,t){var o=t.split(/\s+/g),r=5==o.length,s=e.parse(["endfor"]);return e.next(),new dojox.dtl.tag.logic.ForNode(o[1],o[3],r,s)})}});