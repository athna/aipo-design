dojo._hasResource["dojo.behavior"]||(dojo._hasResource["dojo.behavior"]=!0,dojo.provide("dojo.behavior"),dojo.behavior=new function(){function o(o,n){return o[n]||(o[n]=[]),o[n]}function n(o,n,i){var d={};for(var r in o)"undefined"==typeof d[r]&&(i?i.call(n,o[r],r):n(o[r],r))}var i=0;this._behaviors={},this.add=function(d){n(d,this,function(d,r){var t=o(this._behaviors,r);"number"!=typeof t.id&&(t.id=i++);var u=[];t.push(u),(dojo.isString(d)||dojo.isFunction(d))&&(d={found:d}),n(d,function(n,i){o(u,i).push(n)})})};var d=function(o,n,i){dojo.isString(n)?"found"==i?dojo.publish(n,[o]):dojo.connect(o,i,function(){dojo.publish(n,arguments)}):dojo.isFunction(n)&&("found"==i?n(o):dojo.connect(o,i,n))};this.apply=function(){n(this._behaviors,function(o,i){dojo.query(i).forEach(function(i){var r=0,t="_dj_behavior_"+o.id;if("number"!=typeof i[t]||(r=i[t],r!=o.length)){for(var u,a=r;u=o[a];a++)n(u,function(o,n){dojo.isArray(o)&&dojo.forEach(o,function(o){d(i,o,n)})});i[t]=o.length}})})}},dojo.addOnLoad(dojo.behavior,"apply"));