dojo._xdResourceLoaded({depends:[["provide","dojo._base.fx"],["require","dojo._base.Color"],["require","dojo._base.connect"],["require","dojo._base.declare"],["require","dojo._base.lang"],["require","dojo._base.html"]],defineResource:function(e){e._hasResource["dojo._base.fx"]||(e._hasResource["dojo._base.fx"]=!0,e.provide("dojo._base.fx"),e.require("dojo._base.Color"),e.require("dojo._base.connect"),e.require("dojo._base.declare"),e.require("dojo._base.lang"),e.require("dojo._base.html"),e._Line=function(e,t){this.start=e,this.end=t,this.getValue=function(e){return(this.end-this.start)*e+this.start}},e.declare("dojo._Animation",null,{constructor:function(t){e.mixin(this,t),e.isArray(this.curve)&&(this.curve=new e._Line(this.curve[0],this.curve[1]))},duration:1e3,repeat:0,rate:10,_percent:0,_startRepeatCount:0,fire:function(e,t){return this[e]&&this[e].apply(this,t||[]),this},play:function(t,r){var i=this;if(r)i._stopTimer(),i._active=i._paused=!1,i._percent=0;else if(i._active&&!i._paused)return i;i.fire("beforeBegin");var n=t||i.delay,o=e.hitch(i,"_play",r);return n>0?(setTimeout(o,n),i):(o(),i)},_play:function(){var e=this;e._startTime=(new Date).valueOf(),e._paused&&(e._startTime-=e.duration*e._percent),e._endTime=e._startTime+e.duration,e._active=!0,e._paused=!1;var t=e.curve.getValue(e._percent);return e._percent||(e._startRepeatCount||(e._startRepeatCount=e.repeat),e.fire("onBegin",[t])),e.fire("onPlay",[t]),e._cycle(),e},pause:function(){return this._stopTimer(),this._active?(this._paused=!0,this.fire("onPause",[this.curve.getValue(this._percent)]),this):this},gotoPercent:function(e,t){return this._stopTimer(),this._active=this._paused=!0,this._percent=e,t&&this.play(),this},stop:function(e){return this._timer?(this._stopTimer(),e&&(this._percent=1),this.fire("onStop",[this.curve.getValue(this._percent)]),this._active=this._paused=!1,this):void 0},status:function(){return this._active?this._paused?"paused":"playing":"stopped"},_cycle:function(){var e=this;if(e._active){var t=(new Date).valueOf(),r=(t-e._startTime)/(e._endTime-e._startTime);r>=1&&(r=1),e._percent=r,e.easing&&(r=e.easing(r)),e.fire("onAnimate",[e.curve.getValue(r)]),1>r?e._startTimer():(e._active=!1,e.repeat>0?(e.repeat--,e.play(null,!0)):-1==e.repeat?e.play(null,!0):e._startRepeatCount&&(e.repeat=e._startRepeatCount,e._startRepeatCount=0),e._percent=0,e.fire("onEnd"))}return e}}),function(){var t=e,r=0,i={run:function(){}},n=null;e._Animation.prototype._startTimer=function(){this._timer||(this._timer=e.connect(i,"run",this,"_cycle"),r++),n||(n=setInterval(e.hitch(i,"run"),this.rate))},e._Animation.prototype._stopTimer=function(){e.disconnect(this._timer),this._timer=null,r--,r||(clearInterval(n),n=null)};var o=t.isIE?function(e){var r=e.style;r.zoom.length||"normal"!=t.style(e,"zoom")||(r.zoom="1"),r.width.length||"auto"!=t.style(e,"width")||(r.width="auto")}:function(){};e._fade=function(e){e.node=t.byId(e.node);var r=t.mixin({properties:{}},e),i=r.properties.opacity={};i.start="start"in r?r.start:function(){return Number(t.style(r.node,"opacity"))},i.end=r.end;var n=t.animateProperty(r);return t.connect(n,"beforeBegin",t.partial(o,r.node)),n},e.fadeIn=function(e){return t._fade(t.mixin({end:1},e))},e.fadeOut=function(e){return t._fade(t.mixin({end:0},e))},e._defaultEasing=function(e){return.5+Math.sin((e+1.5)*Math.PI)/2};var a=function(e){this._properties=e;for(var r in e){var i=e[r];i.start instanceof t.Color&&(i.tempColor=new t.Color)}this.getValue=function(e){var r={};for(var i in this._properties){var n=this._properties[i],o=n.start;o instanceof t.Color?r[i]=t.blendColors(o,n.end,e,n.tempColor).toCss():t.isArray(o)||(r[i]=(n.end-o)*e+o+("opacity"!=i?n.units||"px":""))}return r}};e.animateProperty=function(e){e.node=t.byId(e.node),e.easing||(e.easing=t._defaultEasing);var r=new t._Animation(e);return t.connect(r,"beforeBegin",r,function(){function e(e,r){var i={height:e.offsetHeight,width:e.offsetWidth}[r];return void 0!==i?i:(i=t.style(e,r),"opacity"==r?Number(i):parseFloat(i))}var r={};for(var i in this.properties){var n=r[i]=t.mixin({},this.properties[i]);t.isFunction(n.start)&&(n.start=n.start()),t.isFunction(n.end)&&(n.end=n.end());var o=i.toLowerCase().indexOf("color")>=0;"end"in n?"start"in n||(n.start=e(this.node,i)):n.end=e(this.node,i),o?(n.start=new t.Color(n.start),n.end=new t.Color(n.end)):n.start="opacity"==i?Number(n.start):parseFloat(n.start)}this.curve=new a(r)}),t.connect(r,"onAnimate",r,function(e){for(var r in e)t.style(this.node,r,e[r])}),r}}())}});