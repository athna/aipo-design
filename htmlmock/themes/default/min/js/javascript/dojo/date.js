dojo._hasResource["dojo.date"]||(dojo._hasResource["dojo.date"]=!0,dojo.provide("dojo.date"),dojo.date.getDaysInMonth=function(e){var a=e.getMonth(),t=[31,28,31,30,31,30,31,31,30,31,30,31];return 1==a&&dojo.date.isLeapYear(e)?29:t[a]},dojo.date.isLeapYear=function(e){var a=e.getFullYear();return!(a%400&&(a%4||!(a%100)))},dojo.date.getTimezoneName=function(e){var a,t=e.toString(),r="",o=t.indexOf("(");if(o>-1)r=t.substring(++o,t.indexOf(")"));else{var s=/([A-Z\/]+) \d{4}$/;(a=t.match(s))?r=a[1]:(t=e.toLocaleString(),s=/ ([A-Z\/]+)$/,(a=t.match(s))&&(r=a[1]))}return"AM"==r||"PM"==r?"":r},dojo.date.compare=function(e,a,t){return e=new Date(Number(e)),a=new Date(Number(a||new Date)),"undefined"!=typeof t&&("date"==t?(e.setHours(0,0,0,0),a.setHours(0,0,0,0)):"time"==t&&(e.setFullYear(0,0,0),a.setFullYear(0,0,0))),e>a?1:a>e?-1:0},dojo.date.add=function(e,a,t){var r=new Date(Number(e)),o=!1,s="Date";switch(a){case"day":break;case"weekday":var n,c,d=0,i=t%5;i?(n=i,c=parseInt(t/5)):(n=t>0?5:-5,c=t>0?(t-5)/5:(t+5)/5);var u=e.getDay();6==u&&t>0?d=1:0==u&&0>t&&(d=-1);var f=u+n;(0==f||6==f)&&(d=t>0?2:-2),t=7*c+n+d;break;case"year":s="FullYear",o=!0;break;case"week":t*=7;break;case"quarter":t*=3;case"month":o=!0,s="Month";break;case"hour":case"minute":case"second":case"millisecond":s="UTC"+a.charAt(0).toUpperCase()+a.substring(1)+"s"}return s&&r["set"+s](r["get"+s]()+t),o&&r.getDate()<e.getDate()&&r.setDate(0),r},dojo.date.difference=function(e,a,t){a=a||new Date,t=t||"day";var r=a.getFullYear()-e.getFullYear(),o=1;switch(t){case"quarter":var s=e.getMonth(),n=a.getMonth(),c=Math.floor(s/3)+1,d=Math.floor(n/3)+1;d+=4*r,o=d-c;break;case"weekday":var i=Math.round(dojo.date.difference(e,a,"day")),u=parseInt(dojo.date.difference(e,a,"week")),f=i%7;if(0==f)i=5*u;else{var g=0,h=e.getDay(),b=a.getDay();u=parseInt(i/7),f=i%7;var k=new Date(e);k.setDate(k.getDate()+7*u);var l=k.getDay();if(i>0)switch(!0){case 6==h:g=-1;break;case 0==h:g=0;break;case 6==b:g=-1;break;case 0==b:g=-2;break;case l+f>5:g=-2}else if(0>i)switch(!0){case 6==h:g=0;break;case 0==h:g=1;break;case 6==b:g=2;break;case 0==b:g=1;break;case 0>l+f:g=2}i+=g,i-=2*u}o=i;break;case"year":o=r;break;case"month":o=a.getMonth()-e.getMonth()+12*r;break;case"week":o=parseInt(dojo.date.difference(e,a,"day")/7);break;case"day":o/=24;case"hour":o/=60;case"minute":o/=60;case"second":o/=1e3;case"millisecond":o*=a.getTime()-e.getTime()}return Math.round(o)});