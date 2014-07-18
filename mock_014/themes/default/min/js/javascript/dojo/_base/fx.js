dojo._hasResource["dojo._base.fx"]||(dojo._hasResource["dojo._base.fx"]=!0,dojo.provide("dojo._base.fx"),dojo.require("dojo._base.Color"),dojo.require("dojo._base.connect"),dojo.require("dojo._base.declare"),dojo.require("dojo._base.lang"),dojo.require("dojo._base.html"),dojo._Line=function(t,e){this.start=t,this.end=e,this.getValue=function(t){return(this.end-this.start)*t+this.start}},dojo.declare("dojo._Animation",null,{constructor:function(t){dojo.mixin(this,t),dojo.isArray(this.curve)&&(this.curve=new dojo._Line(this.curve[0],this.curve[1]))},duration:1e3,repeat:0,rate:10,_percent:0,_startRepeatCount:0,fire:function(t,e){return this[t]&&this[t].apply(this,e||[]),this},play:function(t,e){var i=this;if(e)i._stopTimer(),i._active=i._paused=!1,i._percent=0;else if(i._active&&!i._paused)return i;i.fire("beforeBegin");var n=t||i.delay,r=dojo.hitch(i,"_play",e);return n>0?(setTimeout(r,n),i):(r(),i)},_play:function(){var t=this;t._startTime=(new Date).valueOf(),t._paused&&(t._startTime-=t.duration*t._percent),t._endTime=t._startTime+t.duration,t._active=!0,t._paused=!1;var e=t.curve.getValue(t._percent);return t._percent||(t._startRepeatCount||(t._startRepeatCount=t.repeat),t.fire("onBegin",[e])),t.fire("onPlay",[e]),t._cycle(),t},pause:function(){return this._stopTimer(),this._active?(this._paused=!0,this.fire("onPause",[this.curve.getValue(this._percent)]),this):this},gotoPercent:function(t,e){return this._stopTimer(),this._active=this._paused=!0,this._percent=t,e&&this.play(),this},stop:function(t){return this._timer?(this._stopTimer(),t&&(this._percent=1),this.fire("onStop",[this.curve.getValue(this._percent)]),this._active=this._paused=!1,this):void 0},status:function(){return this._active?this._paused?"paused":"playing":"stopped"},_cycle:function(){var t=this;if(t._active){var e=(new Date).valueOf(),i=(e-t._startTime)/(t._endTime-t._startTime);i>=1&&(i=1),t._percent=i,t.easing&&(i=t.easing(i)),t.fire("onAnimate",[t.curve.getValue(i)]),1>i?t._startTimer():(t._active=!1,t.repeat>0?(t.repeat--,t.play(null,!0)):-1==t.repeat?t.play(null,!0):t._startRepeatCount&&(t.repeat=t._startRepeatCount,t._startRepeatCount=0),t._percent=0,t.fire("onEnd"))}return t}}),function(){var t=dojo,e=0,i={run:function(){}},n=null;dojo._Animation.prototype._startTimer=function(){this._timer||(this._timer=dojo.connect(i,"run",this,"_cycle"),e++),n||(n=setInterval(dojo.hitch(i,"run"),this.rate))},dojo._Animation.prototype._stopTimer=function(){dojo.disconnect(this._timer),this._timer=null,e--,e||(clearInterval(n),n=null)};var r=t.isIE?function(e){var i=e.style;i.zoom.length||"normal"!=t.style(e,"zoom")||(i.zoom="1"),i.width.length||"auto"!=t.style(e,"width")||(i.width="auto")}:function(){};dojo._fade=function(e){e.node=t.byId(e.node);var i=t.mixin({properties:{}},e),n=i.properties.opacity={};n.start="start"in i?i.start:function(){return Number(t.style(i.node,"opacity"))},n.end=i.end;var o=t.animateProperty(i);return t.connect(o,"beforeBegin",t.partial(r,i.node)),o},dojo.fadeIn=function(e){return t._fade(t.mixin({end:1},e))},dojo.fadeOut=function(e){return t._fade(t.mixin({end:0},e))},dojo._defaultEasing=function(t){return.5+Math.sin((t+1.5)*Math.PI)/2};var o=function(e){this._properties=e;for(var i in e){var n=e[i];n.start instanceof t.Color&&(n.tempColor=new t.Color)}this.getValue=function(e){var i={};for(var n in this._properties){var r=this._properties[n],o=r.start;o instanceof t.Color?i[n]=t.blendColors(o,r.end,e,r.tempColor).toCss():t.isArray(o)||(i[n]=(r.end-o)*e+o+("opacity"!=n?r.units||"px":""))}return i}};dojo.animateProperty=function(e){e.node=t.byId(e.node),e.easing||(e.easing=t._defaultEasing);var i=new t._Animation(e);return t.connect(i,"beforeBegin",i,function(){function e(e,i){var n={height:e.offsetHeight,width:e.offsetWidth}[i];return void 0!==n?n:(n=t.style(e,i),"opacity"==i?Number(n):parseFloat(n))}var i={};for(var n in this.properties){var r=i[n]=t.mixin({},this.properties[n]);t.isFunction(r.start)&&(r.start=r.start()),t.isFunction(r.end)&&(r.end=r.end());var a=n.toLowerCase().indexOf("color")>=0;"end"in r?"start"in r||(r.start=e(this.node,n)):r.end=e(this.node,n),a?(r.start=new t.Color(r.start),r.end=new t.Color(r.end)):r.start="opacity"==n?Number(r.start):parseFloat(r.start)}this.curve=new o(i)}),t.connect(i,"onAnimate",i,function(e){for(var i in e)t.style(this.node,i,e[i])}),i}}());