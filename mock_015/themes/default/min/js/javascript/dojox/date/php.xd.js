dojo._xdResourceLoaded({depends:[["provide","dojox.date.php"],["require","dojo.date"]],defineResource:function(t){t._hasResource["dojox.date.php"]||(t._hasResource["dojox.date.php"]=!0,t.provide("dojox.date.php"),t.require("dojo.date"),dojox.date.php.format=function(t,e,n){var r=new dojox.date.php.DateFormat(t);return r.format(e,n)},dojox.date.php.DateFormat=function(t){this.date=t},t.extend(dojox.date.php.DateFormat,{weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdays_3:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],months_3:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],monthdays:[31,28,31,30,31,30,31,31,30,31,30,31],format:function(t,e){for(var n=[],r=0;r<t.length;r++){var a=t.charAt(r);e&&"function"==typeof e[a]?n.push(e[a].call(this)):"function"==typeof this[a]?n.push(this[a]()):n.push(a)}return n.join("")},d:function(){var t=this.j();return 1==t.length?"0"+t:t},D:function(){return this.weekdays_3[this.date.getDay()]},j:function(){return this.date.getDate()+""},l:function(){return this.weekdays[this.date.getDay()]},N:function(){var t=this.w();return t?t:7},S:function(){switch(this.date.getDate()){case 11:case 12:case 13:return"th";case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}},w:function(){return this.date.getDay()+""},z:function(){var t=this.date.getTime()-new Date(this.date.getFullYear(),0,1).getTime();return Math.floor(t/864e5)+""},W:function(){var e,n=new Date(this.date.getFullYear(),0,1).getDay()+1,r=this.date.getDay()+1,a=parseInt(this.z());if(8-n>=a&&n>4){var i=new Date(this.date.getFullYear()-1,this.date.getMonth(),this.date.getDate());e=5==n||6==n&&t.date.isLeapYear(i)?53:52}else{var s;if(s=Boolean(this.L())?366:365,4-r>s-a)e=1;else{var o=a+(7-r)+(n-1);e=Math.ceil(o/7),n>4&&--e}}return e},F:function(){return this.months[this.date.getMonth()]},m:function(){var t=this.n();return 1==t.length?"0"+t:t},M:function(){return months_3[this.date.getMonth()]},n:function(){return this.date.getMonth()+"1"},t:function(){return Boolean(this.L())&&1==this.date.getMonth()?29:this.monthdays[this.getMonth()]},L:function(){return t.date.isLeapYear(this.date)?"1":"0"},o:function(){},Y:function(){return this.date.getFullYear()+""},y:function(){return this.date.getFullYear.substsring(2,4)},a:function(){return this.date.getHours()>=12?"pm":"am"},b:function(){return this.a().toUpperCase()},B:function(){for(var t=this.date.getTimezoneOffset()+60,e=3600*this.date.getHours()+60*this.date.getMinutes()+this.getSeconds()+60*t,n=Math.abs(Math.floor(e/86.4)%1e3)+"";n.length<2;)n="0"+n;return n},g:function(){return this.date.getHours()>12?this.date.getHours()-12+"":this.date.getHours()+""},G:function(){return this.date.getHours()+""},h:function(){var t=this.g();return 1==t.length?"0"+t:t},H:function(){var t=this.G();return 1==t.length?"0"+t:t},i:function(){var t=this.date.getMinutes()+"";return 1==t.length?"0"+t:t},s:function(){var t=this.date.getSeconds()+"";return 1==t.length?"0"+t:t},e:function(){return t.date.getTimezoneName(this.date)},I:function(){},O:function(){var t=Math.abs(this.date.getTimezoneOffset()),e=Math.floor(t/60)+"",n=t%60+"";return 1==e.length&&(e="0"+e),1==n.length&&(e="0"+n),(this.date.getTimezoneOffset()<0?"+":"-")+e+n},P:function(){var t=this.O();return t.substring(0,2)+":"+t.substring(2,4)},T:function(){return this.e().substring(0,3)},Z:function(){return-60*this.date.getTimezoneOffset()},c:function(){return this.Y()+"-"+this.m()+"-"+this.d()+"T"+this.h()+":"+this.i()+":"+this.s()+this.P()},r:function(){return this.D()+", "+this.d()+" "+this.M()+" "+this.Y()+" "+this.H()+":"+this.i()+":"+this.s()+" "+this.O()},U:function(){return Math.floor(this.date.getTime()/1e3)}}))}});