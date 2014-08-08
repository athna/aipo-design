dojo._hasResource["dojo.date.stamp"]||(dojo._hasResource["dojo.date.stamp"]=!0,dojo.provide("dojo.date.stamp"),dojo.date.stamp.fromISOString=function(e,o){dojo.date.stamp._isoRegExp||(dojo.date.stamp._isoRegExp=/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/);var t=dojo.date.stamp._isoRegExp.exec(e),s=null;if(t){t.shift(),t[1]&&t[1]--,t[6]&&(t[6]*=1e3),o&&(o=new Date(o),dojo.map(["FullYear","Month","Date","Hours","Minutes","Seconds","Milliseconds"],function(e){return o["get"+e]()}).forEach(function(e,o){void 0===t[o]&&(t[o]=e)})),s=new Date(t[0]||1970,t[1]||0,t[2]||0,t[3]||0,t[4]||0,t[5]||0,t[6]||0);var a=0,d=t[7]&&t[7].charAt(0);"Z"!=d&&(a=60*(t[8]||0)+(Number(t[9])||0),"-"!=d&&(a*=-1)),d&&(a-=s.getTimezoneOffset()),a&&s.setTime(s.getTime()+6e4*a)}return s},dojo.date.stamp.toISOString=function(e,o){var t=function(e){return 10>e?"0"+e:e};o=o||{};var s=[],a=o.zulu?"getUTC":"get",d="";if("time"!=o.selector&&(d=[e[a+"FullYear"](),t(e[a+"Month"]()+1),t(e[a+"Date"]())].join("-")),s.push(d),"date"!=o.selector){var i=[t(e[a+"Hours"]()),t(e[a+"Minutes"]()),t(e[a+"Seconds"]())].join(":"),n=e[a+"Milliseconds"]();if(o.milliseconds&&(i+="."+(100>n?"0":"")+t(n)),o.zulu)i+="Z";else if("time"!=o.selector){var r=e.getTimezoneOffset(),u=Math.abs(r);i+=(r>0?"-":"+")+t(Math.floor(u/60))+":"+t(u%60)}s.push(i)}return s.join("T")});