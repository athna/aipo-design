dojo._hasResource["dojox.charting.plot2d.StackedColumns"]||(dojo._hasResource["dojox.charting.plot2d.StackedColumns"]=!0,dojo.provide("dojox.charting.plot2d.StackedColumns"),dojo.require("dojox.charting.plot2d.common"),dojo.require("dojox.charting.plot2d.Columns"),dojo.require("dojox.lang.functional"),function(){var t=dojox.lang.functional,o=dojox.charting.plot2d.common,e=t.lambda("item.purgeGroup()");dojo.declare("dojox.charting.plot2d.StackedColumns",dojox.charting.plot2d.Columns,{calculateAxes:function(t){var e=o.collectStackedStats(this.series);return this._maxRunLength=e.hmax,e.hmin-=.5,e.hmax+=.5,this._calc(t,e),this},render:function(r,a){for(var i=t.repeat(this._maxRunLength,"-> 0",0),s=0;s<this.series.length;++s)for(var l=this.series[s],h=0;h<l.data.length;++h){var n=l.data[h];isNaN(n)&&(n=0),i[h]+=n}if(this.dirty){dojo.forEach(this.series,e),this.cleanGroup();var c=this.group;t.forEachReversed(this.series,function(t){t.cleanGroup(c)})}for(var d,u,g,f=this.chart.theme,p=this.opt.gap<this._hScaler.scale/3?this.opt.gap:0,s=this.series.length-1;s>=0;--s){var l=this.series[s];if(this.dirty||l.dirty){l.cleanGroup();var c=l.group;l.fill&&l.stroke||(d=l.dyn.color=new dojo.Color(f.next("color"))),u=l.stroke?l.stroke:o.augmentStroke(f.series.stroke,d),g=l.fill?l.fill:o.augmentFill(f.series.fill,d);for(var h=0;h<i.length;++h){var n=i[h],m=this._hScaler.scale-2*p,v=this._vScaler.scale*(n-this._vScaler.bounds.lower);if(m>=1&&v>=1){var j=c.createRect({x:a.l+this._hScaler.scale*(h+.5-this._hScaler.bounds.lower)+p,y:r.height-a.b-this._vScaler.scale*(n-this._vScaler.bounds.lower),width:m,height:v}).setFill(g).setStroke(u);l.dyn.fill=j.getFill(),l.dyn.stroke=j.getStroke()}}l.dirty=!1;for(var h=0;h<l.data.length;++h){var n=l.data[h];isNaN(n)&&(n=0),i[h]-=n}}}return this.dirty=!1,this}})}());