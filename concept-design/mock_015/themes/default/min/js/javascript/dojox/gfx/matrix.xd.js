dojo._xdResourceLoaded({depends:[["provide","dojox.gfx.matrix"]],defineResource:function(n){n._hasResource["dojox.gfx.matrix"]||(n._hasResource["dojox.gfx.matrix"]=!0,n.provide("dojox.gfx.matrix"),function(){var t=dojox.gfx.matrix;t._degToRad=function(n){return Math.PI*n/180},t._radToDeg=function(n){return n/Math.PI*180},t.Matrix2D=function(x){if(x)if("number"==typeof x)this.xx=this.yy=x;else if(x instanceof Array){if(x.length>0){for(var e=t.normalize(x[0]),r=1;r<x.length;++r){var y=e,a=dojox.gfx.matrix.normalize(x[r]);e=new t.Matrix2D,e.xx=y.xx*a.xx+y.xy*a.yx,e.xy=y.xx*a.xy+y.xy*a.yy,e.yx=y.yx*a.xx+y.yy*a.yx,e.yy=y.yx*a.xy+y.yy*a.yy,e.dx=y.xx*a.dx+y.xy*a.dy+y.dx,e.dy=y.yx*a.dx+y.yy*a.dy+y.dy}n.mixin(this,e)}}else n.mixin(this,x)},n.extend(t.Matrix2D,{xx:1,xy:0,yx:0,yy:1,dx:0,dy:0}),n.mixin(t,{identity:new t.Matrix2D,flipX:new t.Matrix2D({xx:-1}),flipY:new t.Matrix2D({yy:-1}),flipXY:new t.Matrix2D({xx:-1,yy:-1}),translate:function(n,x){return arguments.length>1?new t.Matrix2D({dx:n,dy:x}):new t.Matrix2D({dx:n.x,dy:n.y})},scale:function(n,x){return arguments.length>1?new t.Matrix2D({xx:n,yy:x}):"number"==typeof n?new t.Matrix2D({xx:n,yy:n}):new t.Matrix2D({xx:n.x,yy:n.y})},rotate:function(n){var x=Math.cos(n),e=Math.sin(n);return new t.Matrix2D({xx:x,xy:-e,yx:e,yy:x})},rotateg:function(n){return t.rotate(t._degToRad(n))},skewX:function(n){return new t.Matrix2D({xy:-Math.tan(n)})},skewXg:function(n){return t.skewX(t._degToRad(n))},skewY:function(n){return new t.Matrix2D({yx:Math.tan(n)})},skewYg:function(n){return t.skewY(t._degToRad(n))},reflect:function(n,x){1==arguments.length&&(x=n.y,n=n.x);var e=n*n,r=x*x,y=e+r,a=2*n*x/y;return new t.Matrix2D({xx:2*e/y-1,xy:a,yx:a,yy:2*r/y-1})},project:function(n,x){1==arguments.length&&(x=n.y,n=n.x);var e=n*n,r=x*x,y=e+r,a=n*x/y;return new t.Matrix2D({xx:e/y,xy:a,yx:a,yy:r/y})},normalize:function(n){return n instanceof t.Matrix2D?n:new t.Matrix2D(n)},clone:function(n){var x=new t.Matrix2D;for(var e in n)"number"==typeof n[e]&&"number"==typeof x[e]&&x[e]!=n[e]&&(x[e]=n[e]);return x},invert:function(n){var x=t.normalize(n),e=x.xx*x.yy-x.xy*x.yx,x=new t.Matrix2D({xx:x.yy/e,xy:-x.xy/e,yx:-x.yx/e,yy:x.xx/e,dx:(x.xy*x.dy-x.yy*x.dx)/e,dy:(x.yx*x.dx-x.xx*x.dy)/e});return x},_multiplyPoint:function(n,t,x){return{x:n.xx*t+n.xy*x+n.dx,y:n.yx*t+n.yy*x+n.dy}},multiplyPoint:function(n,x,e){var r=t.normalize(n);return"number"==typeof x&&"number"==typeof e?t._multiplyPoint(r,x,e):t._multiplyPoint(r,x.x,x.y)},multiply:function(n){for(var x=t.normalize(n),e=1;e<arguments.length;++e){var r=x,y=t.normalize(arguments[e]);x=new t.Matrix2D,x.xx=r.xx*y.xx+r.xy*y.yx,x.xy=r.xx*y.xy+r.xy*y.yy,x.yx=r.yx*y.xx+r.yy*y.yx,x.yy=r.yx*y.xy+r.yy*y.yy,x.dx=r.xx*y.dx+r.xy*y.dy+r.dx,x.dy=r.yx*y.dx+r.yy*y.dy+r.dy}return x},_sandwich:function(n,x,e){return t.multiply(t.translate(x,e),n,t.translate(-x,-e))},scaleAt:function(n,x,e,r){switch(arguments.length){case 4:return t._sandwich(t.scale(n,x),e,r);case 3:return"number"==typeof e?t._sandwich(t.scale(n),x,e):t._sandwich(t.scale(n,x),e.x,e.y)}return t._sandwich(t.scale(n),x.x,x.y)},rotateAt:function(n,x,e){return arguments.length>2?t._sandwich(t.rotate(n),x,e):t._sandwich(t.rotate(n),x.x,x.y)},rotategAt:function(n,x,e){return arguments.length>2?t._sandwich(t.rotateg(n),x,e):t._sandwich(t.rotateg(n),x.x,x.y)},skewXAt:function(n,x,e){return arguments.length>2?t._sandwich(t.skewX(n),x,e):t._sandwich(t.skewX(n),x.x,x.y)},skewXgAt:function(n,x,e){return arguments.length>2?t._sandwich(t.skewXg(n),x,e):t._sandwich(t.skewXg(n),x.x,x.y)},skewYAt:function(n,x,e){return arguments.length>2?t._sandwich(t.skewY(n),x,e):t._sandwich(t.skewY(n),x.x,x.y)},skewYgAt:function(n,x,e){return arguments.length>2?t._sandwich(t.skewYg(n),x,e):t._sandwich(t.skewYg(n),x.x,x.y)}})}(),dojox.gfx.Matrix2D=dojox.gfx.matrix.Matrix2D)}});