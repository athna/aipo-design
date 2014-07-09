dojo._hasResource["dojox.wire.ml.Service"]||(dojo._hasResource["dojox.wire.ml.Service"]=!0,dojo.provide("dojox.wire.ml.Service"),dojo.provide("dojox.wire.ml.RestHandler"),dojo.provide("dojox.wire.ml.XmlHandler"),dojo.provide("dojox.wire.ml.JsonHandler"),dojo.require("dijit._Widget"),dojo.require("dojox.data.dom"),dojo.require("dojox.wire._base"),dojo.require("dojox.wire.ml.util"),dojo.declare("dojox.wire.ml.Service",dijit._Widget,{url:"",serviceUrl:"",serviceType:"",handlerClass:"",preventCache:!0,postCreate:function(){this.handler=this._createHandler()},_handlerClasses:{TEXT:"dojox.wire.ml.RestHandler",XML:"dojox.wire.ml.XmlHandler",JSON:"dojox.wire.ml.JsonHandler","JSON-RPC":"dojo.rpc.JsonService"},_createHandler:function(){if(this.url){var e=this,o=dojo.xhrGet({url:this.url,handleAs:"json",sync:!0});o.addCallback(function(o){e.smd=o}),this.smd&&!this.serviceUrl&&(this.serviceUrl=this.smd.serviceUrl||this.smd.serviceURL)}var r=void 0;return this.handlerClass?r=dojox.wire._getClass(this.handlerClass):this.serviceType?(r=this._handlerClasses[this.serviceType],r&&dojo.isString(r)&&(r=dojox.wire._getClass(r),this._handlerClasses[this.serviceType]=r)):this.smd&&this.smd.serviceType&&(r=this._handlerClasses[this.smd.serviceType],r&&dojo.isString(r)&&(r=dojox.wire._getClass(r),this._handlerClasses[this.smd.serviceType]=r)),r?new r:null},callMethod:function(e,o){var r=new dojo.Deferred;return this.handler.bind(e,o,r,this.serviceUrl),r}}),dojo.declare("dojox.wire.ml.RestHandler",null,{contentType:"text/plain",handleAs:"text",bind:function(e,o,r,t){e=e.toUpperCase();var n=this,s={url:this._getUrl(e,o,t),contentType:this.contentType,handleAs:this.handleAs,headers:this.headers,preventCache:this.preventCache},i=null;"POST"==e?(s.postData=this._getContent(e,o),i=dojo.rawXhrPost(s)):"PUT"==e?(s.putData=this._getContent(e,o),i=dojo.rawXhrPut(s)):i="DELETE"==e?dojo.xhrDelete(s):dojo.xhrGet(s),i.addCallbacks(function(e){r.callback(n._getResult(e))},function(e){r.errback(e)})},_getUrl:function(e,o,r){if("GET"==e||"DELETE"==e){var t=o[0],n="";for(var s in t){var i=t[s];if(i){i=encodeURIComponent(i);var d="{"+s+"}",l=r.indexOf(d);l>=0?r=r.substring(0,l)+i+r.substring(l+d.length):(n&&(n+="&"),n+=s+"="+i)}}n&&(r+="?"+n)}return r},_getContent:function(e,o){return"POST"==e||"PUT"==e?o?o[0]:null:null},_getResult:function(e){return e}}),dojo.declare("dojox.wire.ml.XmlHandler",dojox.wire.ml.RestHandler,{contentType:"text/xml",handleAs:"xml",_getContent:function(e,o){var r=null;if("POST"==e||"PUT"==e){var t=o[0];if(t)if(dojo.isString(t))r=t;else{var n=t;n instanceof dojox.wire.ml.XmlElement?n=n.element:9===n.nodeType&&(n=n.documentElement);var s='<?xml version="1.0"?>';r=s+dojox.data.dom.innerXML(n)}}return r},_getResult:function(e){return e&&(e=new dojox.wire.ml.XmlElement(e)),e}}),dojo.declare("dojox.wire.ml.JsonHandler",dojox.wire.ml.RestHandler,{contentType:"text/json",handleAs:"json",headers:{Accept:"*/json"},_getContent:function(e,o){var r=null;if("POST"==e||"PUT"==e){var t=o?o[0]:void 0;t&&(r=dojo.isString(t)?t:dojo.toJson(t))}return r}}));