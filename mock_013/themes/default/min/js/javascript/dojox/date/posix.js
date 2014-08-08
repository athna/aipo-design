dojo._hasResource["dojox.date.posix"]||(dojo._hasResource["dojox.date.posix"]=!0,dojo.provide("dojox.date.posix"),dojo.require("dojo.date"),dojo.require("dojo.date.locale"),dojo.require("dojo.string"),dojox.date.posix.strftime=function(e,t,a){for(var r=null,o=function(e,t){return dojo.string.pad(e,t||2,r||"0")},s=dojo.date.locale._getGregorianBundle(a),n=function(t){switch(t){case"a":return dojo.date.locale.getNames("days","abbr","format",a)[e.getDay()];case"A":return dojo.date.locale.getNames("days","wide","format",a)[e.getDay()];case"b":case"h":return dojo.date.locale.getNames("months","abbr","format",a)[e.getMonth()];case"B":return dojo.date.locale.getNames("months","wide","format",a)[e.getMonth()];case"c":return dojo.date.locale.format(e,{formatLength:"full",locale:a});case"C":return o(Math.floor(e.getFullYear()/100));case"d":return o(e.getDate());case"D":return n("m")+"/"+n("d")+"/"+n("y");case"e":return null==r&&(r=" "),o(e.getDate());case"f":return null==r&&(r=" "),o(e.getMonth()+1);case"g":break;case"G":dojo.unimplemented("unimplemented modifier 'G'");break;case"F":return n("Y")+"-"+n("m")+"-"+n("d");case"H":return o(e.getHours());case"I":return o(e.getHours()%12||12);case"j":return o(dojo.date.locale._getDayOfYear(e),3);case"k":return null==r&&(r=" "),o(e.getHours());case"l":return null==r&&(r=" "),o(e.getHours()%12||12);case"m":return o(e.getMonth()+1);case"M":return o(e.getMinutes());case"n":return"\n";case"p":return s[e.getHours()<12?"am":"pm"];case"r":return n("I")+":"+n("M")+":"+n("S")+" "+n("p");case"R":return n("H")+":"+n("M");case"S":return o(e.getSeconds());case"t":return"	";case"T":return n("H")+":"+n("M")+":"+n("S");case"u":return String(e.getDay()||7);case"U":return o(dojo.date.locale._getWeekOfYear(e));case"V":return o(dojox.date.posix.getIsoWeekOfYear(e));case"W":return o(dojo.date.locale._getWeekOfYear(e,1));case"w":return String(e.getDay());case"x":return dojo.date.locale.format(e,{selector:"date",formatLength:"full",locale:a});case"X":return dojo.date.locale.format(e,{selector:"time",formatLength:"full",locale:a});case"y":return o(e.getFullYear()%100);case"Y":return String(e.getFullYear());case"z":var d=e.getTimezoneOffset();return(d>0?"-":"+")+o(Math.floor(Math.abs(d)/60))+":"+o(Math.abs(d)%60);case"Z":return dojo.date.getTimezoneName(e);case"%":return"%"}},d="",u=0,c=0,l=null;-1!=(c=t.indexOf("%",u));){switch(d+=t.substring(u,c++),t.charAt(c++)){case"_":r=" ";break;case"-":r="";break;case"0":r="0";break;case"^":l="upper";break;case"*":l="lower";break;case"#":l="swap";break;default:r=null,c--}var g=n(t.charAt(c++));switch(l){case"upper":g=g.toUpperCase();break;case"lower":g=g.toLowerCase();break;case"swap":for(var i=g.toLowerCase(),f="",j="",m=0;m<g.length;m++)j=g.charAt(m),f+=j==i.charAt(m)?j.toUpperCase():j.toLowerCase();g=f}l=null,d+=g,u=c}return d+=t.substring(u)},dojox.date.posix.getStartOfWeek=function(e,t){isNaN(t)&&(t=dojo.cldr.supplemental.getFirstDayOfWeek?dojo.cldr.supplemental.getFirstDayOfWeek():0);var a=t;a-=e.getDay()>=t?e.getDay():7-e.getDay();var r=new Date(e);return r.setHours(0,0,0,0),dojo.date.add(r,"day",a)},dojox.date.posix.setIsoWeekOfYear=function(e,t){if(!t)return e;var a=dojox.date.posix.getIsoWeekOfYear(e),r=t-a;if(0>t){var o=dojox.date.posix.getIsoWeeksInYear(e);r=o+t+1-a}return dojo.date.add(e,"week",r)},dojox.date.posix.getIsoWeekOfYear=function(e){var t=dojox.date.posix.getStartOfWeek(e,1),a=new Date(e.getFullYear(),0,4);a=dojox.date.posix.getStartOfWeek(a,1);var r=t.getTime()-a.getTime();return 0>r?dojox.date.posix.getIsoWeeksInYear(t):Math.ceil(r/6048e5)+1},dojox.date.posix.getIsoWeeksInYear=function(e){function t(e){return e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400)}var a=e.getFullYear();return t(a)%7==4||t(a-1)%7==3?53:52});