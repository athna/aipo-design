dojo._hasResource["dojox.gfx.svg"]||(dojo._hasResource["dojox.gfx.svg"]=!0,dojo.provide("dojox.gfx.svg"),dojo.require("dojox.gfx._base"),dojo.require("dojox.gfx.shape"),dojo.require("dojox.gfx.path"),dojox.gfx.svg.xmlns={xlink:"http://www.w3.org/1999/xlink",svg:"http://www.w3.org/2000/svg"},dojox.gfx.svg.getRef=function(t){return t&&"none"!=t?t.match(/^url\(#.+\)$/)?dojo.byId(t.slice(5,-1)):t.match(/^#dojoUnique\d+$/)?dojo.byId(t.slice(1)):null:null},dojox.gfx.svg.dasharray={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},dojo.extend(dojox.gfx.Shape,{setFill:function(t){if(!t)return this.fillStyle=null,this.rawNode.setAttribute("fill","none"),this.rawNode.setAttribute("fill-opacity",0),this;var e,o=function(t){this.setAttribute(t,e[t].toFixed(8))};if("object"==typeof t&&"type"in t){switch(t.type){case"linear":e=dojox.gfx.makeParameters(dojox.gfx.defaultLinearGradient,t);var i=this._setFillObject(e,"linearGradient");dojo.forEach(["x1","y1","x2","y2"],o,i);break;case"radial":e=dojox.gfx.makeParameters(dojox.gfx.defaultRadialGradient,t);var i=this._setFillObject(e,"radialGradient");dojo.forEach(["cx","cy","r"],o,i);break;case"pattern":e=dojox.gfx.makeParameters(dojox.gfx.defaultPattern,t);var r=this._setFillObject(e,"pattern");dojo.forEach(["x","y","width","height"],o,r)}return this.fillStyle=e,this}var e=dojox.gfx.normalizeColor(t);return this.fillStyle=e,this.rawNode.setAttribute("fill",e.toCss()),this.rawNode.setAttribute("fill-opacity",e.a),this.rawNode.setAttribute("fill-rule","evenodd"),this},setStroke:function(t){if(!t)return this.strokeStyle=null,this.rawNode.setAttribute("stroke","none"),this.rawNode.setAttribute("stroke-opacity",0),this;"string"==typeof t&&(t={color:t});var e=this.strokeStyle=dojox.gfx.makeParameters(dojox.gfx.defaultStroke,t);e.color=dojox.gfx.normalizeColor(e.color);var o=this.rawNode;if(e){o.setAttribute("stroke",e.color.toCss()),o.setAttribute("stroke-opacity",e.color.a),o.setAttribute("stroke-width",e.width),o.setAttribute("stroke-linecap",e.cap),"number"==typeof e.join?(o.setAttribute("stroke-linejoin","miter"),o.setAttribute("stroke-miterlimit",e.join)):o.setAttribute("stroke-linejoin",e.join);var i=e.style.toLowerCase();if(i in dojox.gfx.svg.dasharray&&(i=dojox.gfx.svg.dasharray[i]),i instanceof Array){i=dojo.clone(i);for(var r=0;r<i.length;++r)i[r]*=e.width;if("butt"!=e.cap){for(var r=0;r<i.length;r+=2)i[r]-=e.width,i[r]<1&&(i[r]=1);for(var r=1;r<i.length;r+=2)i[r]+=e.width}i=i.join(",")}o.setAttribute("stroke-dasharray",i),o.setAttribute("dojoGfxStrokeStyle",e.style)}return this},_getParentSurface:function(){for(var t=this.parent;t&&!(t instanceof dojox.gfx.Surface);t=t.parent);return t},_setFillObject:function(t,e){var o=dojox.gfx.svg.xmlns.svg;this.fillStyle=t;var i=this._getParentSurface(),r=i.defNode,s=this.rawNode.getAttribute("fill"),a=dojox.gfx.svg.getRef(s);if(a)if(s=a,s.tagName.toLowerCase()!=e.toLowerCase()){var d=s.id;s.parentNode.removeChild(s),s=document.createElementNS(o,e),s.setAttribute("id",d),r.appendChild(s)}else for(;s.childNodes.length;)s.removeChild(s.lastChild);else s=document.createElementNS(o,e),s.setAttribute("id",dojox.gfx._base._getUniqueId()),r.appendChild(s);if("pattern"==e){dojo.isSafari?s.setAttributeNS(null,"patternUnits","userSpaceOnUse"):s.setAttribute("patternUnits","userSpaceOnUse");var n=document.createElementNS(o,"image");n.setAttribute("x",0),n.setAttribute("y",0),n.setAttribute("width",t.width.toFixed(8)),n.setAttribute("height",t.height.toFixed(8)),n.setAttributeNS(dojox.gfx.svg.xmlns.xlink,"href",t.src),s.appendChild(n)}else{dojo.isSafari?s.setAttributeNS(null,"gradientUnits","userSpaceOnUse"):s.setAttribute("gradientUnits","userSpaceOnUse");for(var h=0;h<t.colors.length;++h){var x=t.colors[h],l=document.createElementNS(o,"stop"),f=x.color=dojox.gfx.normalizeColor(x.color);l.setAttribute("offset",x.offset.toFixed(8)),l.setAttribute("stop-color",f.toCss()),l.setAttribute("stop-opacity",f.a),s.appendChild(l)}}return this.rawNode.setAttribute("fill","url(#"+s.getAttribute("id")+")"),this.rawNode.removeAttribute("fill-opacity"),this.rawNode.setAttribute("fill-rule","evenodd"),s},_applyTransform:function(){var t=this.matrix;if(t){var e=this.matrix;this.rawNode.setAttribute("transform","matrix("+e.xx.toFixed(8)+","+e.yx.toFixed(8)+","+e.xy.toFixed(8)+","+e.yy.toFixed(8)+","+e.dx.toFixed(8)+","+e.dy.toFixed(8)+")")}else this.rawNode.removeAttribute("transform");return this},setRawNode:function(t){var e=this.rawNode=t;e.setAttribute("fill","none"),e.setAttribute("fill-opacity",0),e.setAttribute("stroke","none"),e.setAttribute("stroke-opacity",0),e.setAttribute("stroke-width",1),e.setAttribute("stroke-linecap","butt"),e.setAttribute("stroke-linejoin","miter"),e.setAttribute("stroke-miterlimit",4)},setShape:function(t){this.shape=dojox.gfx.makeParameters(this.shape,t);for(var e in this.shape)"type"!=e&&this.rawNode.setAttribute(e,this.shape[e]);return this},_moveToFront:function(){return this.rawNode.parentNode.appendChild(this.rawNode),this},_moveToBack:function(){return this.rawNode.parentNode.insertBefore(this.rawNode,this.rawNode.parentNode.firstChild),this}}),dojo.declare("dojox.gfx.Group",dojox.gfx.Shape,{constructor:function(){dojox.gfx.svg.Container._init.call(this)},setRawNode:function(t){this.rawNode=t}}),dojox.gfx.Group.nodeType="g",dojo.declare("dojox.gfx.Rect",dojox.gfx.shape.Rect,{setShape:function(t){this.shape=dojox.gfx.makeParameters(this.shape,t),this.bbox=null;for(var e in this.shape)"type"!=e&&"r"!=e&&this.rawNode.setAttribute(e,this.shape[e]);return this.shape.r&&(this.rawNode.setAttribute("ry",this.shape.r),this.rawNode.setAttribute("rx",this.shape.r)),this}}),dojox.gfx.Rect.nodeType="rect",dojox.gfx.Ellipse=dojox.gfx.shape.Ellipse,dojox.gfx.Ellipse.nodeType="ellipse",dojox.gfx.Circle=dojox.gfx.shape.Circle,dojox.gfx.Circle.nodeType="circle",dojox.gfx.Line=dojox.gfx.shape.Line,dojox.gfx.Line.nodeType="line",dojo.declare("dojox.gfx.Polyline",dojox.gfx.shape.Polyline,{setShape:function(t,e){t&&t instanceof Array?(this.shape=dojox.gfx.makeParameters(this.shape,{points:t}),e&&this.shape.points.length&&this.shape.points.push(this.shape.points[0])):this.shape=dojox.gfx.makeParameters(this.shape,t),this.box=null;for(var o=[],i=this.shape.points,r=0;r<i.length;++r)"number"==typeof i[r]?o.push(i[r].toFixed(8)):(o.push(i[r].x.toFixed(8)),o.push(i[r].y.toFixed(8)));return this.rawNode.setAttribute("points",o.join(" ")),this}}),dojox.gfx.Polyline.nodeType="polyline",dojo.declare("dojox.gfx.Image",dojox.gfx.shape.Image,{setShape:function(t){this.shape=dojox.gfx.makeParameters(this.shape,t),this.bbox=null;var e=this.rawNode;for(var o in this.shape)"type"!=o&&"src"!=o&&e.setAttribute(o,this.shape[o]);return e.setAttributeNS(dojox.gfx.svg.xmlns.xlink,"href",this.shape.src),this}}),dojox.gfx.Image.nodeType="image",dojo.declare("dojox.gfx.Text",dojox.gfx.shape.Text,{setShape:function(t){this.shape=dojox.gfx.makeParameters(this.shape,t),this.bbox=null;var e=this.rawNode,o=this.shape;return e.setAttribute("x",o.x),e.setAttribute("y",o.y),e.setAttribute("text-anchor",o.align),e.setAttribute("text-decoration",o.decoration),e.setAttribute("rotate",o.rotated?90:0),e.setAttribute("kerning",o.kerning?"auto":0),e.setAttribute("text-rendering","optimizeLegibility"),e.textContent=o.text,this},getTextWidth:function(){var t=this.rawNode,e=t.parentNode,o=t.cloneNode(!0);o.style.visibility="hidden";var i=0,r=o.firstChild.nodeValue;if(e.appendChild(o),""!=r)for(;!i;)i=parseInt(o.getBBox().width);return e.removeChild(o),i}}),dojox.gfx.Text.nodeType="text",dojo.declare("dojox.gfx.Path",dojox.gfx.path.Path,{_updateWithSegment:function(){dojox.gfx.Path.superclass._updateWithSegment.apply(this,arguments),"string"==typeof this.shape.path&&this.rawNode.setAttribute("d",this.shape.path)},setShape:function(){return dojox.gfx.Path.superclass.setShape.apply(this,arguments),this.rawNode.setAttribute("d",this.shape.path),this}}),dojox.gfx.Path.nodeType="path",dojo.declare("dojox.gfx.TextPath",dojox.gfx.path.TextPath,{_updateWithSegment:function(){dojox.gfx.Path.superclass._updateWithSegment.apply(this,arguments),this._setTextPath()},setShape:function(){return dojox.gfx.Path.superclass.setShape.apply(this,arguments),this._setTextPath(),this},_setTextPath:function(){if("string"==typeof this.shape.path){var t=this.rawNode;if(!t.firstChild){var e=document.createElementNS(dojox.gfx.svg.xmlns.svg,"textPath"),o=document.createTextNode("");e.appendChild(o),t.appendChild(e)}var i=t.firstChild.getAttributeNS(dojox.gfx.svg.xmlns.xlink,"href"),r=i&&dojox.gfx.svg.getRef(i);if(!r){var s=this._getParentSurface();if(s){var a=s.defNode;r=document.createElementNS(dojox.gfx.svg.xmlns.svg,"path");var d=dojox.gfx._base._getUniqueId();r.setAttribute("id",d),a.appendChild(r),t.firstChild.setAttributeNS(dojox.gfx.svg.xmlns.xlink,"href","#"+d)}}r&&r.setAttribute("d",this.shape.path)}},_setText:function(){var t=this.rawNode;if(!t.firstChild){var e=document.createElementNS(dojox.gfx.svg.xmlns.svg,"textPath"),o=document.createTextNode("");e.appendChild(o),t.appendChild(e)}t=t.firstChild;var i=this.text;switch(t.setAttribute("alignment-baseline","middle"),i.align){case"middle":t.setAttribute("text-anchor","middle"),t.setAttribute("startOffset","50%");break;case"end":t.setAttribute("text-anchor","end"),t.setAttribute("startOffset","100%");break;default:t.setAttribute("text-anchor","start"),t.setAttribute("startOffset","0%")}t.setAttribute("baseline-shift","0.5ex"),t.setAttribute("text-decoration",i.decoration),t.setAttribute("rotate",i.rotated?90:0),t.setAttribute("kerning",i.kerning?"auto":0),t.firstChild.data=i.text}}),dojox.gfx.TextPath.nodeType="text",dojo.declare("dojox.gfx.Surface",dojox.gfx.shape.Surface,{constructor:function(){dojox.gfx.svg.Container._init.call(this)},setDimensions:function(t,e){return this.rawNode?(this.rawNode.setAttribute("width",t),this.rawNode.setAttribute("height",e),this):this},getDimensions:function(){return this.rawNode?{width:this.rawNode.getAttribute("width"),height:this.rawNode.getAttribute("height")}:null}}),dojox.gfx.createSurface=function(t,e,o){var i=new dojox.gfx.Surface;i.rawNode=document.createElementNS(dojox.gfx.svg.xmlns.svg,"svg"),i.rawNode.setAttribute("width",e),i.rawNode.setAttribute("height",o);var r=document.createElementNS(dojox.gfx.svg.xmlns.svg,"defs");return i.rawNode.appendChild(r),i.defNode=r,dojo.byId(t).appendChild(i.rawNode),i},dojox.gfx.svg.Font={_setFont:function(){var t=this.fontStyle;this.rawNode.setAttribute("font-style",t.style),this.rawNode.setAttribute("font-variant",t.variant),this.rawNode.setAttribute("font-weight",t.weight),this.rawNode.setAttribute("font-size",t.size),this.rawNode.setAttribute("font-family",t.family)}},dojox.gfx.svg.Container={_init:function(){dojox.gfx.shape.Container._init.call(this)},add:function(t){return this!=t.getParent()&&(this.rawNode.appendChild(t.rawNode),dojox.gfx.shape.Container.add.apply(this,arguments)),this},remove:function(t){return this==t.getParent()&&(this.rawNode==t.rawNode.parentNode&&this.rawNode.removeChild(t.rawNode),dojox.gfx.shape.Container.remove.apply(this,arguments)),this},clear:function(){for(var t=this.rawNode;t.lastChild;)t.removeChild(t.lastChild);return dojox.gfx.shape.Container.clear.apply(this,arguments)},_moveChildToFront:dojox.gfx.shape.Container._moveChildToFront,_moveChildToBack:dojox.gfx.shape.Container._moveChildToBack},dojo.mixin(dojox.gfx.shape.Creator,{createObject:function(t,e){if(!this.rawNode)return null;var o=new t,i=document.createElementNS(dojox.gfx.svg.xmlns.svg,t.nodeType);return o.setRawNode(i),this.rawNode.appendChild(i),o.setShape(e),this.add(o),o}}),dojo.extend(dojox.gfx.Text,dojox.gfx.svg.Font),dojo.extend(dojox.gfx.TextPath,dojox.gfx.svg.Font),dojo.extend(dojox.gfx.Group,dojox.gfx.svg.Container),dojo.extend(dojox.gfx.Group,dojox.gfx.shape.Creator),dojo.extend(dojox.gfx.Surface,dojox.gfx.svg.Container),dojo.extend(dojox.gfx.Surface,dojox.gfx.shape.Creator));