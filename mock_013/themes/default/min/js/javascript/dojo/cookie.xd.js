dojo._xdResourceLoaded({depends:[["provide","dojo.cookie"]],defineResource:function(e){e._hasResource["dojo.cookie"]||(e._hasResource["dojo.cookie"]=!0,e.provide("dojo.cookie"),e.cookie=function(e,o,n){var i=document.cookie;if(1==arguments.length){var r=i.lastIndexOf(e+"=");if(-1==r)return null;var t=r+e.length+1,d=i.indexOf(";",r+e.length+1);return-1==d&&(d=i.length),decodeURIComponent(i.substring(t,d))}if(n=n||{},o=encodeURIComponent(o),"number"==typeof n.expires){var s=new Date;s.setTime(s.getTime()+24*n.expires*60*60*1e3),n.expires=s}return document.cookie=e+"="+o+(n.expires?"; expires="+n.expires.toUTCString():"")+(n.path?"; path="+n.path:"")+(n.domain?"; domain="+n.domain:"")+(n.secure?"; secure":""),null})}});