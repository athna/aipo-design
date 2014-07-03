dojo._hasResource["dojox.crypto.MD5"]||(dojo._hasResource["dojox.crypto.MD5"]=!0,dojo.provide("dojox.crypto.MD5"),dojo.require("dojox.crypto._base"),dojox.crypto.MD5=new function(){function t(t){for(var r=[],o=0;o<t.length*d;o+=d)r[o>>5]|=(t.charCodeAt(o/d)&j)<<o%32;return r}function r(t){for(var r=[],o=0;o<32*t.length;o+=d)r.push(String.fromCharCode(t[o>>5]>>>o%32&j));return r.join("")}function o(t){for(var r="0123456789abcdef",o=[],n=0;n<4*t.length;n++)o.push(r.charAt(t[n>>2]>>n%4*8+4&15)+r.charAt(t[n>>2]>>n%4*8&15));return o.join("")}function n(t){for(var r="=",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=[],e=0;e<4*t.length;e+=3)for(var u=(t[e>>2]>>8*(e%4)&255)<<16|(t[e+1>>2]>>8*((e+1)%4)&255)<<8|t[e+2>>2]>>8*((e+2)%4)&255,c=0;4>c;c++)8*e+6*c>32*t.length?n.push(r):n.push(o.charAt(u>>6*(3-c)&63));return n.join("")}function e(t,r){var o=(65535&t)+(65535&r),n=(t>>16)+(r>>16)+(o>>16);return n<<16|65535&o}function u(t,r){return t<<r|t>>>32-r}function c(t,r,o,n,c,a){return e(u(e(e(r,t),e(n,a)),c),o)}function a(t,r,o,n,e,u,a){return c(r&o|~r&n,t,r,e,u,a)}function p(t,r,o,n,e,u,a){return c(r&n|o&~n,t,r,e,u,a)}function i(t,r,o,n,e,u,a){return c(r^o^n,t,r,e,u,a)}function f(t,r,o,n,e,u,a){return c(o^(r|~n),t,r,e,u,a)}function h(t,r){t[r>>5]|=128<<r%32,t[(r+64>>>9<<4)+14]=r;for(var o=1732584193,n=-271733879,u=-1732584194,c=271733878,h=0;h<t.length;h+=16){var s=o,d=n,j=u,y=c;o=a(o,n,u,c,t[h+0],7,-680876936),c=a(c,o,n,u,t[h+1],12,-389564586),u=a(u,c,o,n,t[h+2],17,606105819),n=a(n,u,c,o,t[h+3],22,-1044525330),o=a(o,n,u,c,t[h+4],7,-176418897),c=a(c,o,n,u,t[h+5],12,1200080426),u=a(u,c,o,n,t[h+6],17,-1473231341),n=a(n,u,c,o,t[h+7],22,-45705983),o=a(o,n,u,c,t[h+8],7,1770035416),c=a(c,o,n,u,t[h+9],12,-1958414417),u=a(u,c,o,n,t[h+10],17,-42063),n=a(n,u,c,o,t[h+11],22,-1990404162),o=a(o,n,u,c,t[h+12],7,1804603682),c=a(c,o,n,u,t[h+13],12,-40341101),u=a(u,c,o,n,t[h+14],17,-1502002290),n=a(n,u,c,o,t[h+15],22,1236535329),o=p(o,n,u,c,t[h+1],5,-165796510),c=p(c,o,n,u,t[h+6],9,-1069501632),u=p(u,c,o,n,t[h+11],14,643717713),n=p(n,u,c,o,t[h+0],20,-373897302),o=p(o,n,u,c,t[h+5],5,-701558691),c=p(c,o,n,u,t[h+10],9,38016083),u=p(u,c,o,n,t[h+15],14,-660478335),n=p(n,u,c,o,t[h+4],20,-405537848),o=p(o,n,u,c,t[h+9],5,568446438),c=p(c,o,n,u,t[h+14],9,-1019803690),u=p(u,c,o,n,t[h+3],14,-187363961),n=p(n,u,c,o,t[h+8],20,1163531501),o=p(o,n,u,c,t[h+13],5,-1444681467),c=p(c,o,n,u,t[h+2],9,-51403784),u=p(u,c,o,n,t[h+7],14,1735328473),n=p(n,u,c,o,t[h+12],20,-1926607734),o=i(o,n,u,c,t[h+5],4,-378558),c=i(c,o,n,u,t[h+8],11,-2022574463),u=i(u,c,o,n,t[h+11],16,1839030562),n=i(n,u,c,o,t[h+14],23,-35309556),o=i(o,n,u,c,t[h+1],4,-1530992060),c=i(c,o,n,u,t[h+4],11,1272893353),u=i(u,c,o,n,t[h+7],16,-155497632),n=i(n,u,c,o,t[h+10],23,-1094730640),o=i(o,n,u,c,t[h+13],4,681279174),c=i(c,o,n,u,t[h+0],11,-358537222),u=i(u,c,o,n,t[h+3],16,-722521979),n=i(n,u,c,o,t[h+6],23,76029189),o=i(o,n,u,c,t[h+9],4,-640364487),c=i(c,o,n,u,t[h+12],11,-421815835),u=i(u,c,o,n,t[h+15],16,530742520),n=i(n,u,c,o,t[h+2],23,-995338651),o=f(o,n,u,c,t[h+0],6,-198630844),c=f(c,o,n,u,t[h+7],10,1126891415),u=f(u,c,o,n,t[h+14],15,-1416354905),n=f(n,u,c,o,t[h+5],21,-57434055),o=f(o,n,u,c,t[h+12],6,1700485571),c=f(c,o,n,u,t[h+3],10,-1894986606),u=f(u,c,o,n,t[h+10],15,-1051523),n=f(n,u,c,o,t[h+1],21,-2054922799),o=f(o,n,u,c,t[h+8],6,1873313359),c=f(c,o,n,u,t[h+15],10,-30611744),u=f(u,c,o,n,t[h+6],15,-1560198380),n=f(n,u,c,o,t[h+13],21,1309151649),o=f(o,n,u,c,t[h+4],6,-145523070),c=f(c,o,n,u,t[h+11],10,-1120210379),u=f(u,c,o,n,t[h+2],15,718787259),n=f(n,u,c,o,t[h+9],21,-343485551),o=e(o,s),n=e(n,d),u=e(u,j),c=e(c,y)}return[o,n,u,c]}function s(r,o){var n=t(o);n.length>16&&(n=h(n,o.length*d));for(var e=[],u=[],c=0;16>c;c++)e[c]=909522486^n[c],u[c]=1549556828^n[c];var a=h(e.concat(t(r)),512+r.length*d);return h(u.concat(a),640)}var d=8,j=(1<<d)-1;this.compute=function(e,u){var c=u||dojox.crypto.outputTypes.Base64;switch(c){case dojox.crypto.outputTypes.Hex:return o(h(t(e),e.length*d));case dojox.crypto.outputTypes.String:return r(h(t(e),e.length*d));default:return n(h(t(e),e.length*d))}},this.getHMAC=function(t,e,u){var c=u||dojox.crypto.outputTypes.Base64;switch(c){case dojox.crypto.outputTypes.Hex:return o(s(t,e));case dojox.crypto.outputTypes.String:return r(s(t,e));default:return n(s(t,e))}}});