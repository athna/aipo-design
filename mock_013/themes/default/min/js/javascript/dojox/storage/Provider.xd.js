dojo._xdResourceLoaded({depends:[["provide","dojox.storage.Provider"]],defineResource:function(e){e._hasResource["dojox.storage.Provider"]||(e._hasResource["dojox.storage.Provider"]=!0,e.provide("dojox.storage.Provider"),e.declare("dojox.storage.Provider",null,{constructor:function(){},SUCCESS:"success",FAILED:"failed",PENDING:"pending",SIZE_NOT_AVAILABLE:"Size not available",SIZE_NO_LIMIT:"No size limit",DEFAULT_NAMESPACE:"default",onHideSettingsUI:null,initialize:function(){console.warn("dojox.storage.initialize not implemented")},isAvailable:function(){console.warn("dojox.storage.isAvailable not implemented")},put:function(){console.warn("dojox.storage.put not implemented")},get:function(){console.warn("dojox.storage.get not implemented")},hasKey:function(e){return null!=this.get(e)},getKeys:function(){console.warn("dojox.storage.getKeys not implemented")},clear:function(){console.warn("dojox.storage.clear not implemented")},remove:function(){console.warn("dojox.storage.remove not implemented")},getNamespaces:function(){console.warn("dojox.storage.getNamespaces not implemented")},isPermanent:function(){console.warn("dojox.storage.isPermanent not implemented")},getMaximumSize:function(){console.warn("dojox.storage.getMaximumSize not implemented")},putMultiple:function(){console.warn("dojox.storage.putMultiple not implemented")},getMultiple:function(){console.warn("dojox.storage.getMultiple not implemented")},removeMultiple:function(){console.warn("dojox.storage.remove not implemented")},isValidKeyArray:function(e){if(null===e||"undefined"==typeof e||!e instanceof Array)return!1;for(var o=0;o<e.length;o++)if(!this.isValidKey(e[o]))return!1;return!0},hasSettingsUI:function(){return!1},showSettingsUI:function(){console.warn("dojox.storage.showSettingsUI not implemented")},hideSettingsUI:function(){console.warn("dojox.storage.hideSettingsUI not implemented")},isValidKey:function(e){return null==e||"undefined"==typeof e?!1:/^[0-9A-Za-z_]*$/.test(e)},getResourceList:function(){return[]}}))}});