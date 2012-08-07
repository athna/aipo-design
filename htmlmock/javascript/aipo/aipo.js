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

window.aipo = window.aipo || {};

aipo.namespace = function(ns) {

    if (!ns || !ns.length) {
        return null;
    }

    var levels = ns.split(".");
    var nsobj = aipo;


    for (var i=(levels[0] == "aipo") ? 1 : 0; i<levels.length; ++i) {
        nsobj[levels[i]] = nsobj[levels[i]] || {};
        nsobj = nsobj[levels[i]];
    }

    return nsobj;
};

djConfig = { isDebug: false };

var ptConfig = [];

aipo.onReceiveMessage = function(msg, group){
    if(!msg) {
        var arrDialog = dijit.byId("modalDialog");
        arrDialog.hide();
        aipo.portletReload(group);
    }
    if (dojo.byId('messageDiv')) {
        dojo.byId('messageDiv').innerHTML = msg;
    }
}
aipo.getCookie=function (strName) {
  var strReturn = "";
  var nLoop = 0;
  var nLength = 0;
  var strNameEx = strName + "=";
  var strTemp = "";
  while (nLoop < document.cookie.length) {
    nLength = nLoop + strNameEx.length;
    if (document.cookie.substring(nLoop, nLength) == strNameEx) {
      strTemp = document.cookie.indexOf(";", nLength);
      if (strTemp == -1) {
        strReturn = document.cookie.substring(nLength, document.cookie.length);
      } else {
        strReturn = document.cookie.substring(nLength, strTemp);
      }
      break;
   }
   nLoop = document.cookie.indexOf(" ", nLoop) + 1;
   if (nLoop == 0) {
     break;
    }
  }
  return strReturn;
}

aipo.setCookie =function(strName, strValue,path) {
  var dtExpire = new Date();
  dtExpire.setTime(dtExpire.getTime() + 10*24*60*60*1000);
  if(typeof path =='undefined')
	  document.cookie = strName + "=" + strValue + "; expires=" + dtExpire.toGMTString() + "; path=${context_path}/";
  else
	  document.cookie = strName + "=" + strValue + "; expires=" + dtExpire.toGMTString() + "; path="+path;
}

aipo.removeCookie =function remove_cookie(strName,path) {
	  var strValue;
	  var dtExpire = new Date();
	  dtExpire.setTime(dtExpire.getTime() - 1);
	  strValue = get_cookie(strName);
	  if(typeof path =='undefined')
		  document.cookie = strName + "=" + strValue + "; expires=" + dtExpire.toGMTString() + "; path=${context_path}/";
	  else
		  document.cookie = strName + "=" + strValue + "; expires=" + dtExpire.toGMTString() + "; path="+path;
}

aipo.portletReload = function(group, portletId) {
    for(var index in ptConfig) {
        if (index != portletId) {
            if(ptConfig[index].group == group) {
                ptConfig[index].reloadFunction.call(ptConfig[index].reloadFunction, index);
            }
        }
    }
};

aipo.reloadPage = function(portletId) {
    if( typeof ptConfig[portletId].reloadUrl == "undefined") {
      aipo.viewPage(ptConfig[portletId].initUrl, portletId);
    } else {
      aipo.viewPage(ptConfig[portletId].reloadUrl, portletId);
    }
};

var setMouseListener=function(){
    dojo.query('.customizeMenuIcon').forEach(function(element) {
        dojo.connect(element, 'onmouseenter', null, function(){
            dojo.addClass(this, 'customizeMenuIconMouseenter');
        });
        dojo.connect(element, 'onmouseleave', null, function(){
            dojo.removeClass(this, 'customizeMenuIconMouseenter');
        });
    });

    var handle = dojo.connect(dojo.query('body')[0], 'onclick', null, function(){
        if (dojo.query('.customizeMenuIconMouseenter').length == 0) {
        	dojo.query('div.menubar').style('display', 'none');
        }
    });
}

aipo.viewPage = function(url, portletId, params) {
     var portlet = dijit.byId('portlet_' + portletId);
     if(! portlet){
       portlet = new aimluck.widget.Contentpane({},'portlet_' + portletId);
     }

     if(portlet){
       ptConfig[portletId].reloadUrl= url;

       if(params){
       	 for(i = 0 ; i < params.length; i++ ) {
       		portlet.setParam(params[i][0], params[i][1]);
       	 }
       }

       portlet.onLoad=dojo.hitch(portlet.onLoad, setMouseListener);
       portlet.viewPage(url);
     }
};

aipo.errorTreatment = function(jsondata, url) {
    if (jsondata["error"]) {
        if(jsondata["error"]== 1) {
           window.location.href = url;
        } else {
            return true;
        }
        return false;
    } else {
        return true;
    }
};

var favicon = {

		change: function(iconURL) {
		  this.addLink(iconURL, "icon");
		  this.addLink(iconURL, "shortcut icon");
		},

		addLink: function(iconURL, relValue) {
		  var link = document.createElement("link");
		  link.type = "image/x-icon";
		  link.rel = relValue;
		  link.href = iconURL;
		  this.removeLinkIfExists(relValue);
		  this.docHead.appendChild(link);
		},

		removeLinkIfExists: function(relValue) {
		  var links = this.docHead.getElementsByTagName("link");
		  for (var i=0; i<links.length; i++) {
		    var link = links[i];
		    if (link.type=="image/x-icon" && link.rel==relValue) {
		      this.docHead.removeChild(link);
		      return; // Assuming only one match at most.
		    }
		  }
		},

		docHead:document.getElementsByTagName("head")[0]

};

function CronTask(task, interval, isDecay) {
	this.task = task;
	this.isDecay = isDecay;
	this.interval = interval;
	this.decayRate = 1;
	this.decayMultiplier = 1.5;
	this.maxDecayTime = 5 * 60 * 1000; // 3 minutes
}

CronTask.prototype = {

		start: function() {
			this.stop().run();
			return this;
		},

		stop: function() {
			if (this.worker) {
				window.clearTimeout(this.worker);
			}
			return this;
		},

		run: function() {
			var cronTask = this;
			this.task(function() {
				cronTask.decayRate = cronTask.isDecay ? Math.max(1, cronTask.decayRate / cronTask.decayMultiplier) : cronTask.decayRate * cronTask.decayMultiplier;
				var expire = cronTask.interval * cronTask.decayRate;
				if(!cronTask.isDecay) {
					expire = (expire >= cronTask.maxDecayTime) ? cronTask.maxDecayTime : expire;
				}
				expire = Math.floor(expire);
				cronTask.worker = window.setTimeout(
						function () {
							cronTask.run.call(cronTask);
						},
						expire);
			});
		},

		reset: function() {
			this.destroy().run();
			return this;
		},

		destroy: function() {
			this.stop();
			this.decayRate = 1;
			return this;
		}
};

aipo.escapeHTML = function(value) {
    var replaceChars = function(ch) {
        switch (ch) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "'":
                return "&#39;";
            case '"':
                return "&quot;";
        }
        return "?";
    };

    return String(value).replace(/[<>&"']/g, replaceChars);
};
