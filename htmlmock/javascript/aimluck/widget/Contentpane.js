if(!dojo._hasResource["aimluck.widget.Contentpane"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["aimluck.widget.Contentpane"] = true;
/*
 * Aipo is a groupware program developed by Aimluck,Inc.
 * Copyright (C) 2004-2011 Aimluck,Inc.
 * http://www.aipo.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

dojo.provide("aimluck.widget.Contentpane");

dojo.require("dijit.layout.ContentPane");

dojo.declare(
	"aimluck.widget.Contentpane",
	[dijit.layout.ContentPane],
	{
        loadingMessage:"<div class='indicator'>\u8aad\u307f\u8fbc\u307f\u4e2d...</div>",
        errorMessage:"",
        extractContent: false,
        parseOnLoad: true,
        refreshOnShow: true,
        params: new Array(),
        reloadIds: new Array(),
		viewPage: function(href){
			this.href = href;
		    return this._prepareLoad(true);
		},
        setParam: function(key, value) {
            this.params[key] = value;
        },
        setReloadIds: function(values) {
            this.reloadIds = values;
        },
        clearParams: function() {
            this.params = new Array();
        },
        clearReloadIds: function() {
            this.reloadIds = new Array();
        },
		_downloadExternalContent: function(){
			this._onUnloadHandler();
	
			// display loading message
			// TODO: maybe we should just set a css class with a loading image as background?
			/*
			this._setContent(
				this.onDownloadStart.call(this)
			);
	        */
			var self = this;
			var getArgs = {
				preventCache: (this.preventCache || this.refreshOnShow),
				url: this.href,
				handleAs: "text",
                content: this.params,
			    headers: { X_REQUESTED_WITH: "XMLHttpRequest" }
			};
	
			if(dojo.isObject(this.ioArgs)){
				dojo.mixin(getArgs, this.ioArgs);
			}
	
			var hand = this._xhrDfd = (this.ioMethod || dojo.xhrPost)(getArgs);

			hand.addCallback(function(html){
                self.clearParams();
                self.clearReloadIds();
				try{
					self.onDownloadEnd.call(self);
					self._isDownloaded = true;
					self.setContent.call(self, html); // onload event is called from here
				}catch(err){
					self._onError.call(self, 'Content', err); // onContentError
				}
				delete self._xhrDfd;
				return html;
			});
	
			hand.addErrback(function(err){
				if(!hand.cancelled){
					// show error message in the pane
					self._onError.call(self, 'Download', err); // onDownloadError
				}
				delete self._xhrDfd;
				return err;
			});
		}
    }	
);

}
