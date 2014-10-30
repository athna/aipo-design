dojo._hasResource["dojox.charting.Theme"]||(dojo._hasResource["dojox.charting.Theme"]=!0,dojo.provide("dojox.charting.Theme"),dojo.require("dojox.charting._color"),function(){var o=dojox.charting;o.Theme=function(r){r=r||{},this.chart=dojo.mixin(dojo.clone(o.Theme._def.chart),r.chart||{}),this.plotarea=dojo.mixin(dojo.clone(o.Theme._def.plotarea),r.plotarea||{}),this.axis=dojo.mixin(dojo.clone(o.Theme._def.axis),r.axis||{}),this.series=dojo.mixin(dojo.clone(o.Theme._def.series),r.series||{}),this.marker=dojo.mixin(dojo.clone(o.Theme._def.marker),r.marker||{}),this.markers=dojo.mixin(dojo.clone(o.Theme.Markers),r.markers||{}),this.colors=[],this.antiAlias="antiAlias"in r?r.antiAlias:!0,this.assignColors="assignColors"in r?r.assignColors:!0,this.assignMarkers="assignMarkers"in r?r.assignMarkers:!0,this._colorCache=null,r.colors=r.colors||o.Theme._def.colors,dojo.forEach(r.colors,function(o){this.colors.push(o)},this),this._current={color:0,marker:0},this._markers=[],this._buildMarkerArray()},o.Theme.Markers={CIRCLE:"m-3,0 c0,-4 6,-4 6,0 m-6,0 c0,4 6,4 6,0",SQUARE:"m-3,-3 l0,6 6,0 0,-6 z",DIAMOND:"m0,-3 l3,3 -3,3 -3,-3 z",CROSS:"m0,-3 l0,6 m-3,-3 l6,0",X:"m-3,-3 l6,6 m0,-6 l-6,6",TRIANGLE:"m-3,3 l3,-6 3,6 z",TRIANGLE_INVERTED:"m-3,-3 l3,6 3,-6 z"},o.Theme._def={chart:{stroke:null,fill:"white"},plotarea:{stroke:null,fill:"white"},axis:{stroke:{color:"#333",width:1},line:{color:"#ccc",width:1,style:"Dot",cap:"round"},majorTick:{color:"#666",width:1,length:6,position:"center"},minorTick:{color:"#666",width:.8,length:3,position:"center"},font:"normal normal normal 7pt Tahoma",fontColor:"#333"},series:{outline:{width:2,color:"#ccc"},stroke:{width:2,color:"#333"},fill:"#ccc",font:"normal normal normal 7pt Tahoma",fontColor:"#000"},marker:{stroke:{width:1},fill:"#333",font:"normal normal normal 7pt Tahoma",fontColor:"#000"},colors:["#000","#111","#222","#333","#444","#555","#666","#777","#888","#999","#aaa","#bbb","#ccc"]},dojo.extend(o.Theme,{defineColors:function(r){var e=r||{},s=!1;if(void 0===e.cache&&(s=!0),1==e.cache&&(s=!0),s)this._colorCache=e;else{var t=this._colorCache||{};e=dojo.mixin(dojo.clone(t),e)}var i=[],a=e.num||32;if(e.colors){for(var l=e.colors.length,n=0;a>n;n++)i.push(e.colors[n%l]);this.colors=i}else if(e.hue){for(var h=e.saturation||100,c=e.low||30,m=e.high||90,f=(m-c)/a,n=0;a>n;n++)i.push(o._color.fromHsb(e.hue,h,c+f*n).toHex());this.colors=i}else if(e.stops){var l=e.stops.length;if(2>l)throw new Error("dojox.charting.Theme::defineColors: when using stops to define a color range, you MUST specify at least 2 colors.");if("undefined"==typeof e.stops[0].offset)for(var d=1/(l-1),n=0;l>n;n++)e.stops[n]={color:e.stops[n],offset:d*n};e.stops[0].offset=0,e.stops[l-1].offset=1,e.stops.sort(function(o,r){return o.offset-r.offset}),i.push(e.stops[0].color.toHex()),i.push(e.stops[l-1].color.toHex()),this.colors=i}},_buildMarkerArray:function(){this._markers=[];for(var o in this.markers)this._markers.push(this.markers[o]);this._current.marker=0},addMarker:function(o,r){this.markers[o]=r,this._buildMarkerArray()},setMarkers:function(o){this.markers=o,this._buildMarkerArray()},next:function(o){return o||(o="color"),"color"==o?this.colors[this._current.color++%this.colors.length]:"marker"==o?this._markers[this._current.marker++%this._markers.length]:void 0},clear:function(){this._current={color:0,marker:0}}})}());