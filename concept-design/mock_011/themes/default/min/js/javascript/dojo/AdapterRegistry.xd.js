dojo._xdResourceLoaded({depends:[["provide","dojo.AdapterRegistry"]],defineResource:function(r){r._hasResource["dojo.AdapterRegistry"]||(r._hasResource["dojo.AdapterRegistry"]=!0,r.provide("dojo.AdapterRegistry"),r.AdapterRegistry=function(r){this.pairs=[],this.returnWrappers=r||!1},r.extend(r.AdapterRegistry,{register:function(r,e,t,s,i){this.pairs[i?"unshift":"push"]([r,e,t,s])},match:function(){for(var r=0;r<this.pairs.length;r++){var e=this.pairs[r];if(e[1].apply(this,arguments))return e[3]||this.returnWrappers?e[2]:e[2].apply(this,arguments)}throw new Error("No match found")},unregister:function(r){for(var e=0;e<this.pairs.length;e++){var t=this.pairs[e];if(t[0]==r)return this.pairs.splice(e,1),!0}return!1}}))}});