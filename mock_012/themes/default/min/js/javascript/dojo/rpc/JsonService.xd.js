dojo._xdResourceLoaded({depends:[["provide","dojo.rpc.JsonService"],["require","dojo.rpc.RpcService"]],defineResource:function(e){e._hasResource["dojo.rpc.JsonService"]||(e._hasResource["dojo.rpc.JsonService"]=!0,e.provide("dojo.rpc.JsonService"),e.require("dojo.rpc.RpcService"),e.declare("dojo.rpc.JsonService",e.rpc.RpcService,{bustCache:!1,contentType:"application/json-rpc",lastSubmissionId:0,callRemote:function(r,t){var o=new e.Deferred;return this.bind(r,t,o),o},bind:function(r,t,o,s){var i=e.rawXhrPost({url:s||this.serviceUrl,postData:this.createRequest(r,t),contentType:this.contentType,timeout:this.timeout,handleAs:"json-comment-optional"});i.addCallbacks(this.resultCallback(o),this.errorCallback(o))},createRequest:function(r,t){var o={params:t,method:r,id:++this.lastSubmissionId},s=e.toJson(o);return s},parseResults:function(r){if(e.isObject(r)){if("result"in r)return r.result;if("Result"in r)return r.Result;if("ResultSet"in r)return r.ResultSet}return r}}))}});