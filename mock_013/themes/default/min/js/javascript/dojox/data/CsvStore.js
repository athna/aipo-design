dojo._hasResource["dojox.data.CsvStore"]||(dojo._hasResource["dojox.data.CsvStore"]=!0,dojo.provide("dojox.data.CsvStore"),dojo.require("dojo.data.util.filter"),dojo.require("dojo.data.util.simpleFetch"),dojo.declare("dojox.data.CsvStore",null,{constructor:function(t){this._attributes=[],this._attributeIndexes={},this._dataArray=[],this._arrayOfAllItems=[],this._loadFinished=!1,t.url&&(this.url=t.url),this._csvData=t.data,t.label?this.label=t.label:""===this.label&&(this.label=void 0),this._storeProp="_csvStore",this._idProp="_csvId",this._features={"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0},this._loadInProgress=!1,this._queuedFetches=[]},url:"",label:"",_assertIsItem:function(t){if(!this.isItem(t))throw new Error("dojox.data.CsvStore: a function was passed an item argument that was not an item")},_assertIsAttribute:function(t){if(!dojo.isString(t))throw new Error("dojox.data.CsvStore: a function was passed an attribute argument that was not an attribute object nor an attribute name string")},getValue:function(t,e,r){this._assertIsItem(t),this._assertIsAttribute(e);var s=r;if(this.hasAttribute(t,e)){var a=this._dataArray[this.getIdentity(t)];s=a[this._attributeIndexes[e]]}return s},getValues:function(t,e){var r=this.getValue(t,e);return r?[r]:[]},getAttributes:function(t){this._assertIsItem(t);for(var e=[],r=this._dataArray[this.getIdentity(t)],s=0;s<r.length;s++)""!=r[s]&&e.push(this._attributes[s]);return e},hasAttribute:function(t,e){this._assertIsItem(t),this._assertIsAttribute(e);var r=this._attributeIndexes[e],s=this._dataArray[this.getIdentity(t)];return"undefined"!=typeof r&&r<s.length&&""!=s[r]},containsValue:function(t,e,r){var s=void 0;return"string"==typeof r&&(s=dojo.data.util.filter.patternToRegExp(r,!1)),this._containsValue(t,e,r,s)},_containsValue:function(t,e,r,s){for(var a=this.getValues(t,e),i=0;i<a.length;++i){var o=a[i];if("string"==typeof o&&s)return null!==o.match(s);if(r===o)return!0}return!1},isItem:function(t){if(t&&t[this._storeProp]===this){var e=t[this._idProp];if(e>=0&&e<this._dataArray.length)return!0}return!1},isItemLoaded:function(t){return this.isItem(t)},loadItem:function(){},getFeatures:function(){return this._features},getLabel:function(t){return this.label&&this.isItem(t)?this.getValue(t,this.label):void 0},getLabelAttributes:function(){return this.label?[this.label]:null},_fetchItems:function(t,e){var r=this,s=function(t,s){var a=null;if(t.query){a=[];var i=t.queryOptions?t.queryOptions.ignoreCase:!1,o={};for(var n in t.query){var l=t.query[n];"string"==typeof l&&(o[n]=dojo.data.util.filter.patternToRegExp(l,i))}for(var h=0;h<s.length;++h){var u=!0,d=s[h];for(var n in t.query){var l=t.query[n];r._containsValue(d,n,l,o[n])||(u=!1)}u&&a.push(d)}}else s.length>0&&(a=s.slice(0,s.length));e(a,t)};if(this._loadFinished)s(t,this._arrayOfAllItems);else if(""!==this.url)if(this._loadInProgress)this._queuedFetches.push({args:t,filter:s});else{this._loadInProgress=!0;var a={url:r.url,handleAs:"text"},i=dojo.xhrGet(a);i.addCallback(function(e){r._processData(e),s(t,r._arrayOfAllItems),r._handleQueuedFetches()}),i.addErrback(function(t){throw r._loadInProgress=!1,t})}else{if(!this._csvData)throw new Error("dojox.data.CsvStore: No CSV source data was provided as either URL or String data input.");this._processData(this._csvData),this._csvData=null,s(t,this._arrayOfAllItems)}},close:function(){},_getArrayOfArraysFromCsvFileContents:function(t){if(dojo.isString(t)){for(var e=new RegExp("\r\n|\n|\r"),r=new RegExp("^\\s+","g"),s=new RegExp("\\s+$","g"),a=new RegExp('""',"g"),i=[],o=t.split(e),n=0;n<o.length;++n){var l=o[n];if(l.length>0){for(var h=l.split(","),u=0;u<h.length;){var d=h[u],c=d.replace(r,""),f=c.replace(s,""),_=f.charAt(0),g=f.charAt(f.length-1),I=f.charAt(f.length-2),v=f.charAt(f.length-3);if(2===f.length&&'""'==f)h[u]="";else if('"'==_&&('"'!=g||'"'==g&&'"'==I&&'"'!=v)){if(u+1===h.length)return null;var p=h[u+1];h[u]=c+","+p,h.splice(u+1,1)}else'"'==_&&'"'==g&&(f=f.slice(1,f.length-1),f=f.replace(a,'"')),h[u]=f,u+=1}i.push(h)}}this._attributes=i.shift();for(var n=0;n<this._attributes.length;n++)this._attributeIndexes[this._attributes[n]]=n;this._dataArray=i}},_processData:function(t){this._getArrayOfArraysFromCsvFileContents(t),this._arrayOfAllItems=[];for(var e=0;e<this._dataArray.length;e++)this._arrayOfAllItems.push(this._createItemFromIdentity(e));this._loadFinished=!0,this._loadInProgress=!1},_createItemFromIdentity:function(t){var e={};return e[this._storeProp]=this,e[this._idProp]=t,e},getIdentity:function(t){return this.isItem(t)?t[this._idProp]:null},fetchItemByIdentity:function(t){if(this._loadFinished){var e=this._createItemFromIdentity(t.identity);if(this.isItem(e)||(e=null),t.onItem){var r=t.scope?t.scope:dojo.global;t.onItem.call(r,e)}}else{var s=this;if(""!==this.url)if(this._loadInProgress)this._queuedFetches.push({args:t});else{this._loadInProgress=!0;var a={url:s.url,handleAs:"text"},i=dojo.xhrGet(a);i.addCallback(function(e){var r=t.scope?t.scope:dojo.global;try{s._processData(e);var a=s._createItemFromIdentity(t.identity);s.isItem(a)||(a=null),t.onItem&&t.onItem.call(r,a),s._handleQueuedFetches()}catch(i){t.onError&&t.onError.call(r,i)}}),i.addErrback(function(e){if(this._loadInProgress=!1,t.onError){var r=t.scope?t.scope:dojo.global;t.onError.call(r,e)}})}else if(this._csvData){s._processData(s._csvData),s._csvData=null;var e=s._createItemFromIdentity(t.identity);if(s.isItem(e)||(e=null),t.onItem){var r=t.scope?t.scope:dojo.global;t.onItem.call(r,e)}}}},getIdentityAttributes:function(){return null},_handleQueuedFetches:function(){if(this._queuedFetches.length>0){for(var t=0;t<this._queuedFetches.length;t++){var e=this._queuedFetches[t],r=e.filter,s=e.args;r?r(s,this._arrayOfAllItems):this.fetchItemByIdentity(e.args)}this._queuedFetches=[]}}}),dojo.extend(dojox.data.CsvStore,dojo.data.util.simpleFetch));