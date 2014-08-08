dojo._xdResourceLoaded({depends:[["provide","dojo.date.locale"],["require","dojo.date"],["require","dojo.cldr.supplemental"],["require","dojo.regexp"],["require","dojo.string"],["require","dojo.i18n"],["requireLocalization","dojo.cldr","gregorian",null,"de,en,en-au,en-ca,en-gb,es,es-es,fr,ROOT,it,it-it,ja,ko,ko-kr,pt,pt-br,zh,zh-cn","de,en,en-au,en-ca,en-gb,es,es-es,fr,ROOT,it,it-it,ja,ko,ko-kr,pt,pt-br,zh,zh-cn"]],defineResource:function(e){e._hasResource["dojo.date.locale"]||(e._hasResource["dojo.date.locale"]=!0,e.provide("dojo.date.locale"),e.require("dojo.date"),e.require("dojo.cldr.supplemental"),e.require("dojo.regexp"),e.require("dojo.string"),e.require("dojo.i18n"),function(){function a(a,r,t){return t.replace(/([a-z])\1*/gi,function(o){var n,s,c=o.charAt(0),l=o.length,i=["abbr","wide","narrow"];switch(c){case"G":n=r[4>l?"eraAbbr":"eraNames"][a.getFullYear()<0?0:1];break;case"y":switch(n=a.getFullYear(),l){case 1:break;case 2:n=String(n),n=n.substr(n.length-2);break;default:s=!0}break;case"Q":case"q":n=Math.ceil((a.getMonth()+1)/3),s=!0;break;case"M":case"L":var d,u=a.getMonth();switch(l){case 1:case 2:n=u+1,s=!0;break;case 3:case 4:case 5:d=i[l-3]}if(d){var g="L"==c?"standalone":"format",f=["months",g,d].join("-");n=r[f][u]}break;case"w":var h=0;n=e.date.locale._getWeekOfYear(a,h),s=!0;break;case"d":n=a.getDate(),s=!0;break;case"D":n=e.date.locale._getDayOfYear(a),s=!0;break;case"E":case"e":case"c":var d,b=a.getDay();switch(l){case 1:case 2:if("e"==c){var k=e.cldr.supplemental.getFirstDayOfWeek(options.locale);b=(b-k+7)%7}if("c"!=c){n=b+1,s=!0;break}case 3:case 4:case 5:d=i[l-3]}if(d){var g="c"==c?"standalone":"format",f=["days",g,d].join("-");n=r[f][b]}break;case"a":var m=a.getHours()<12?"am":"pm";n=r[m];break;case"h":case"H":case"K":case"k":var p=a.getHours();switch(c){case"h":n=p%12||12;break;case"H":n=p;break;case"K":n=p%12;break;case"k":n=p||24}s=!0;break;case"m":n=a.getMinutes(),s=!0;break;case"s":n=a.getSeconds(),s=!0;break;case"S":n=Math.round(a.getMilliseconds()*Math.pow(10,l-3));break;case"v":case"z":if(n=e.date.getTimezoneName(a))break;l=4;case"Z":var v=a.getTimezoneOffset(),w=[0>=v?"+":"-",e.string.pad(Math.floor(Math.abs(v)/60),2),e.string.pad(Math.abs(v)%60,2)];4==l&&(w.splice(0,0,"GMT"),w.splice(3,0,":")),n=w.join("");break;default:throw new Error("dojo.date.locale.format: invalid pattern char: "+t)}return s&&(n=e.string.pad(n,l)),n})}function r(a,r,t,o){var n=function(e){return e};r=r||n,t=t||n,o=o||n;var s=a.match(/(''|[^'])+/g),c=!1;return e.forEach(s,function(e,a){e?(s[a]=(c?t:r)(e),c=!c):s[a]=""}),o(s.join(""))}function t(a,r,t,o){return o=e.regexp.escapeString(o),t.strict||(o=o.replace(" a"," ?a")),o.replace(/([a-z])\1*/gi,function(e){var o,n=e.charAt(0),s=e.length,c="",l="";switch(t.strict?(s>1&&(c="0{"+(s-1)+"}"),s>2&&(l="0{"+(s-2)+"}")):(c="0?",l="0{0,2}"),n){case"y":o="\\d{2,4}";break;case"M":o=s>2?"\\S+":c+"[1-9]|1[0-2]";break;case"D":o=c+"[1-9]|"+l+"[1-9][0-9]|[12][0-9][0-9]|3[0-5][0-9]|36[0-6]";break;case"d":o=c+"[1-9]|[12]\\d|3[01]";break;case"w":o=c+"[1-9]|[1-4][0-9]|5[0-3]";break;case"E":o="\\S+";break;case"h":o=c+"[1-9]|1[0-2]";break;case"k":o=c+"\\d|1[01]";break;case"H":o=c+"\\d|1\\d|2[0-3]";break;case"K":o=c+"[1-9]|1\\d|2[0-4]";break;case"m":case"s":o="[0-5]\\d";break;case"S":o="\\d{"+s+"}";break;case"a":var i=t.am||r.am||"AM",d=t.pm||r.pm||"PM";t.strict?o=i+"|"+d:(o=i+"|"+d,i!=i.toLowerCase()&&(o+="|"+i.toLowerCase()),d!=d.toLowerCase()&&(o+="|"+d.toLowerCase()));break;default:o=".*"}return a&&a.push(e),"("+o+")"}).replace(/[\xa0 ]/g,"[\\s\\xa0]")}e.date.locale.format=function(t,o){o=o||{};var n=e.i18n.normalizeLocale(o.locale),s=o.formatLength||"short",c=e.date.locale._getGregorianBundle(n),l=[],i=e.hitch(this,a,t,c);if("year"==o.selector){var d=t.getFullYear();return n.match(/^zh|^ja/)&&(d+="年"),d}if("time"!=o.selector){var u=o.datePattern||c["dateFormat-"+s];u&&l.push(r(u,i))}if("date"!=o.selector){var g=o.timePattern||c["timeFormat-"+s];g&&l.push(r(g,i))}var f=l.join(" ");return f},e.date.locale.regexp=function(a){return e.date.locale._parseInfo(a).regexp},e.date.locale._parseInfo=function(a){a=a||{};var o,n=e.i18n.normalizeLocale(a.locale),s=e.date.locale._getGregorianBundle(n),c=a.formatLength||"short",l=a.datePattern||s["dateFormat-"+c],i=a.timePattern||s["timeFormat-"+c];o="date"==a.selector?l:"time"==a.selector?i:l+" "+i;var d=[],u=r(o,e.hitch(this,t,d,s,a));return{regexp:u,tokens:d,bundle:s}},e.date.locale.parse=function(a,r){var t=e.date.locale._parseInfo(r),o=t.tokens,n=t.bundle,s=new RegExp("^"+t.regexp+"$"),c=s.exec(a);if(!c)return null;var l=["abbr","wide","narrow"],i=new Date(1972,0),d={},u="";e.forEach(c,function(a,t){if(t){var s=o[t-1],c=s.length;switch(s.charAt(0)){case"y":if(2!=c)i.setFullYear(a),d.year=a;else if(100>a){a=Number(a);var g=""+(new Date).getFullYear(),f=100*g.substring(0,2),h=Number(g.substring(2,4)),b=Math.min(h+20,99),k=b>a?f+a:f-100+a;i.setFullYear(k),d.year=k}else{if(r.strict)return null;i.setFullYear(a),d.year=a}break;case"M":if(c>2){var m=n["months-format-"+l[c-3]].concat();if(r.strict||(a=a.replace(".","").toLowerCase(),m=e.map(m,function(e){return e.replace(".","").toLowerCase()})),a=e.indexOf(m,a),-1==a)return null}else a--;i.setMonth(a),d.month=a;break;case"E":case"e":var p=n["days-format-"+l[c-3]].concat();if(r.strict||(a=a.toLowerCase(),p=e.map(p,"".toLowerCase)),a=e.indexOf(p,a),-1==a)return null;break;case"d":i.setDate(a),d.date=a;break;case"D":i.setMonth(0),i.setDate(a);break;case"a":var v=r.am||n.am,w=r.pm||n.pm;if(!r.strict){var j=/\./g;a=a.replace(j,"").toLowerCase(),v=v.replace(j,"").toLowerCase(),w=w.replace(j,"").toLowerCase()}if(r.strict&&a!=v&&a!=w)return null;u=a==w?"p":a==v?"a":"";break;case"K":24==a&&(a=0);case"h":case"H":case"k":if(a>23)return null;i.setHours(a);break;case"m":i.setMinutes(a);break;case"s":i.setSeconds(a);break;case"S":i.setMilliseconds(a)}}});var g=i.getHours();return"p"===u&&12>g?i.setHours(g+12):"a"===u&&12==g&&i.setHours(0),d.year&&i.getFullYear()!=d.year?null:d.month&&i.getMonth()!=d.month?null:d.date&&i.getDate()!=d.date?null:i}}(),function(){var a=[];e.date.locale.addCustomFormats=function(e,r){a.push({pkg:e,name:r})},e.date.locale._getGregorianBundle=function(r){var t={};return e.forEach(a,function(a){var o=e.i18n.getLocalization(a.pkg,a.name,r);t=e.mixin(t,o)},this),t}}(),e.date.locale.addCustomFormats("dojo.cldr","gregorian"),e.date.locale.getNames=function(a,r,t,o){var n,s=e.date.locale._getGregorianBundle(o),c=[a,t,r];return"standAlone"==t&&(n=s[c.join("-")]),c[1]="format",(n||s[c.join("-")]).concat()},e.date.locale.isWeekend=function(a,r){var t=e.cldr.supplemental.getWeekend(r),o=(a||new Date).getDay();return t.end<t.start&&(t.end+=7,o<t.start&&(o+=7)),o>=t.start&&o<=t.end},e.date.locale._getDayOfYear=function(a){return e.date.difference(new Date(a.getFullYear(),0,1),a)+1},e.date.locale._getWeekOfYear=function(a,r){1==arguments.length&&(r=0);var t=new Date(a.getFullYear(),0,1).getDay(),o=(t-r+7)%7,n=Math.floor((e.date.locale._getDayOfYear(a)+o-1)/7);return t==r&&n++,n})}});