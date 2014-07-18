dojo._hasResource["dojox.widget.FisheyeList"]||(dojo._hasResource["dojox.widget.FisheyeList"]=!0,dojo.provide("dojox.widget.FisheyeList"),dojo.require("dijit._Widget"),dojo.require("dijit._Templated"),dojo.require("dijit._Container"),dojo.declare("dojox.widget.FisheyeList",[dijit._Widget,dijit._Templated,dijit._Container],{constructor:function(){this.pos={x:-1,y:-1},this.timerScale=1},EDGE:{CENTER:0,LEFT:1,RIGHT:2,TOP:3,BOTTOM:4},templateString:'<div class="dojoxFisheyeListBar" dojoAttachPoint="containerNode"></div>',snarfChildDomOutput:!0,itemWidth:40,itemHeight:40,itemMaxWidth:150,itemMaxHeight:150,imgNode:null,orientation:"horizontal",isFixed:!1,conservativeTrigger:!1,effectUnits:2,itemPadding:10,attachEdge:"center",labelEdge:"bottom",postCreate:function(){var i=this.EDGE;dojo.setSelectable(this.domNode,!1);var t=this.isHorizontal="horizontal"==this.orientation;this.selectedNode=-1,this.isOver=!1,this.hitX1=-1,this.hitY1=-1,this.hitX2=-1,this.hitY2=-1,this.anchorEdge=this._toEdge(this.attachEdge,i.CENTER),this.labelEdge=this._toEdge(this.labelEdge,i.TOP),this.labelEdge==i.CENTER&&(this.labelEdge=i.TOP),t?(this.anchorEdge==i.LEFT&&(this.anchorEdge=i.CENTER),this.anchorEdge==i.RIGHT&&(this.anchorEdge=i.CENTER),this.labelEdge==i.LEFT&&(this.labelEdge=i.TOP),this.labelEdge==i.RIGHT&&(this.labelEdge=i.TOP)):(this.anchorEdge==i.TOP&&(this.anchorEdge=i.CENTER),this.anchorEdge==i.BOTTOM&&(this.anchorEdge=i.CENTER),this.labelEdge==i.TOP&&(this.labelEdge=i.LEFT),this.labelEdge==i.BOTTOM&&(this.labelEdge=i.LEFT));var e=this.effectUnits;this.proximityLeft=this.itemWidth*(e-.5),this.proximityRight=this.itemWidth*(e-.5),this.proximityTop=this.itemHeight*(e-.5),this.proximityBottom=this.itemHeight*(e-.5),this.anchorEdge==i.LEFT&&(this.proximityLeft=0),this.anchorEdge==i.RIGHT&&(this.proximityRight=0),this.anchorEdge==i.TOP&&(this.proximityTop=0),this.anchorEdge==i.BOTTOM&&(this.proximityBottom=0),this.anchorEdge==i.CENTER&&(this.proximityLeft/=2,this.proximityRight/=2,this.proximityTop/=2,this.proximityBottom/=2)},startup:function(){this.children=this.getChildren(),this._initializePositioning(),this.conservativeTrigger||(this._onMouseMoveHandle=dojo.connect(document.documentElement,"onmousemove",this,"_onMouseMove")),this.isFixed&&(this._onScrollHandle=dojo.connect(document,"onscroll",this,"_onScroll")),this._onMouseOutHandle=dojo.connect(document.documentElement,"onmouseout",this,"_onBodyOut"),this._addChildHandle=dojo.connect(this,"addChild",this,"_initializePositioning"),this._onResizeHandle=dojo.connect(window,"onresize",this,"_initializePositioning")},_initializePositioning:function(){this.itemCount=this.children.length,this.barWidth=(this.isHorizontal?this.itemCount:1)*this.itemWidth,this.barHeight=(this.isHorizontal?1:this.itemCount)*this.itemHeight,this.totalWidth=this.proximityLeft+this.proximityRight+this.barWidth,this.totalHeight=this.proximityTop+this.proximityBottom+this.barHeight;for(var i=0;i<this.children.length;i++){this.children[i].posX=this.itemWidth*(this.isHorizontal?i:0),this.children[i].posY=this.itemHeight*(this.isHorizontal?0:i),this.children[i].cenX=this.children[i].posX+this.itemWidth/2,this.children[i].cenY=this.children[i].posY+this.itemHeight/2;var t=this.isHorizontal?this.itemWidth:this.itemHeight,e=this.effectUnits*t,h=this.isHorizontal?this.children[i].cenX:this.children[i].cenY,s=this.isHorizontal?this.proximityLeft:this.proximityTop,o=this.isHorizontal?this.proximityRight:this.proximityBottom,n=this.isHorizontal?this.barWidth:this.barHeight,d=e,r=e;d>h+s&&(d=h+s),r>n-h+o&&(r=n-h+o),this.children[i].effectRangeLeft=d/t,this.children[i].effectRangeRght=r/t}this.domNode.style.width=this.barWidth+"px",this.domNode.style.height=this.barHeight+"px";for(var i=0;i<this.children.length;i++){var l=this.children[i],a=l.domNode;a.style.left=l.posX+"px",a.style.top=l.posY+"px",a.style.width=this.itemWidth+"px",a.style.height=this.itemHeight+"px",l.imgNode.style.left=this.itemPadding+"%",l.imgNode.style.top=this.itemPadding+"%",l.imgNode.style.width=100-2*this.itemPadding+"%",l.imgNode.style.height=100-2*this.itemPadding+"%"}this._calcHitGrid()},_overElement:function(i,t){i=dojo.byId(i);var e={x:t.pageX,y:t.pageY},h=dojo._getBorderBox(i),s=dojo.coords(i,!0),o=s.y,n=o+h.h,d=s.x,r=d+h.w;return e.x>=d&&e.x<=r&&e.y>=o&&e.y<=n},_onBodyOut:function(i){this._overElement(dojo.body(),i)||this._setDormant(i)},_setDormant:function(){this.isOver&&(this.isOver=!1,this.conservativeTrigger&&dojo.disconnect(this._onMouseMoveHandle),this._onGridMouseMove(-1,-1))},_setActive:function(i){this.isOver||(this.isOver=!0,this.conservativeTrigger&&(this._onMouseMoveHandle=dojo.connect(document.documentElement,"onmousemove",this,"_onMouseMove"),this.timerScale=0,this._onMouseMove(i),this._expandSlowly()))},_onMouseMove:function(i){i.pageX>=this.hitX1&&i.pageX<=this.hitX2&&i.pageY>=this.hitY1&&i.pageY<=this.hitY2?(this.isOver||this._setActive(i),this._onGridMouseMove(i.pageX-this.hitX1,i.pageY-this.hitY1)):this.isOver&&this._setDormant(i)},_onScroll:function(){this._calcHitGrid()},onResized:function(){this._calcHitGrid()},_onGridMouseMove:function(i,t){this.pos={x:i,y:t},this._paint()},_paint:function(){var i=this.pos.x,t=this.pos.y;if(!(this.itemCount<=0)){var e=this.isHorizontal?i:t,h=this.isHorizontal?this.proximityLeft:this.proximityTop,s=this.isHorizontal?this.itemWidth:this.itemHeight,o=this.isHorizontal?(1-this.timerScale)*this.itemWidth+this.timerScale*this.itemMaxWidth:(1-this.timerScale)*this.itemHeight+this.timerScale*this.itemMaxHeight,n=(e-h)/s-.5,d=o/s-.5;d>this.effectUnits&&(d=this.effectUnits);var r=0;if(this.anchorEdge==this.EDGE.BOTTOM){var l=(t-this.proximityTop)/this.itemHeight;r=l>.5?1:t/(this.proximityTop+this.itemHeight/2)}if(this.anchorEdge==this.EDGE.TOP){var l=(t-this.proximityTop)/this.itemHeight;r=.5>l?1:(this.totalHeight-t)/(this.proximityBottom+this.itemHeight/2)}if(this.anchorEdge==this.EDGE.RIGHT){var l=(i-this.proximityLeft)/this.itemWidth;r=l>.5?1:i/(this.proximityLeft+this.itemWidth/2)}if(this.anchorEdge==this.EDGE.LEFT){var l=(i-this.proximityLeft)/this.itemWidth;r=.5>l?1:(this.totalWidth-i)/(this.proximityRight+this.itemWidth/2)}this.anchorEdge==this.EDGE.CENTER&&(r=this.isHorizontal?t/this.totalHeight:i/this.totalWidth,r>.5&&(r=1-r),r*=2);for(var a=0;a<this.itemCount;a++){var c=this._weighAt(n,a);0>c&&(c=0),this._setItemSize(a,c*r)}var m=Math.round(n),g=0;0>n?m=0:n>this.itemCount-1?m=this.itemCount-1:g=(n-m)*((this.isHorizontal?this.itemWidth:this.itemHeight)-this.children[m].sizeMain),this._positionElementsFrom(m,g)}},_weighAt:function(i,t){var e=Math.abs(i-t),h=i-t>0?this.children[t].effectRangeRght:this.children[t].effectRangeLeft;return e>h?0:1-e/h},_setItemSize:function(i,t){t*=this.timerScale;var e=Math.round(this.itemWidth+(this.itemMaxWidth-this.itemWidth)*t),h=Math.round(this.itemHeight+(this.itemMaxHeight-this.itemHeight)*t);if(this.isHorizontal){this.children[i].sizeW=e,this.children[i].sizeH=h,this.children[i].sizeMain=e,this.children[i].sizeOff=h;var s=0;s=this.anchorEdge==this.EDGE.TOP?this.children[i].cenY-this.itemHeight/2:this.anchorEdge==this.EDGE.BOTTOM?this.children[i].cenY-(h-this.itemHeight/2):this.children[i].cenY-h/2,this.children[i].usualX=Math.round(this.children[i].cenX-e/2),this.children[i].domNode.style.top=s+"px",this.children[i].domNode.style.left=this.children[i].usualX+"px"}else{this.children[i].sizeW=e,this.children[i].sizeH=h,this.children[i].sizeOff=e,this.children[i].sizeMain=h;var o=0;o=this.anchorEdge==this.EDGE.LEFT?this.children[i].cenX-this.itemWidth/2:this.anchorEdge==this.EDGE.RIGHT?this.children[i].cenX-(e-this.itemWidth/2):this.children[i].cenX-e/2,this.children[i].domNode.style.left=o+"px",this.children[i].usualY=Math.round(this.children[i].cenY-h/2),this.children[i].domNode.style.top=this.children[i].usualY+"px"}this.children[i].domNode.style.width=e+"px",this.children[i].domNode.style.height=h+"px",this.children[i].svgNode&&this.children[i].svgNode.setSize(e,h)},_positionElementsFrom:function(i,t){var e=0;this.isHorizontal?(e=Math.round(this.children[i].usualX+t),this.children[i].domNode.style.left=e+"px"):(e=Math.round(this.children[i].usualY+t),this.children[i].domNode.style.top=e+"px"),this._positionLabel(this.children[i]);for(var h=e,s=i-1;s>=0;s--)h-=this.children[s].sizeMain,this.isHorizontal?this.children[s].domNode.style.left=h+"px":this.children[s].domNode.style.top=h+"px",this._positionLabel(this.children[s]);for(var o=e,s=i+1;s<this.itemCount;s++)o+=this.children[s-1].sizeMain,this.isHorizontal?this.children[s].domNode.style.left=o+"px":this.children[s].domNode.style.top=o+"px",this._positionLabel(this.children[s])},_positionLabel:function(i){var t=0,e=0,h=dojo.marginBox(i.lblNode);this.labelEdge==this.EDGE.TOP&&(t=Math.round(i.sizeW/2-h.w/2),e=-h.h),this.labelEdge==this.EDGE.BOTTOM&&(t=Math.round(i.sizeW/2-h.w/2),e=i.sizeH),this.labelEdge==this.EDGE.LEFT&&(t=-h.w,e=Math.round(i.sizeH/2-h.h/2)),this.labelEdge==this.EDGE.RIGHT&&(t=i.sizeW,e=Math.round(i.sizeH/2-h.h/2)),i.lblNode.style.left=t+"px",i.lblNode.style.top=e+"px"},_calcHitGrid:function(){var i=dojo.coords(this.domNode,!0);this.hitX1=i.x-this.proximityLeft,this.hitY1=i.y-this.proximityTop,this.hitX2=this.hitX1+this.totalWidth,this.hitY2=this.hitY1+this.totalHeight},_toEdge:function(i,t){return this.EDGE[i.toUpperCase()]||t},_expandSlowly:function(){this.isOver&&(this.timerScale+=.2,this._paint(),this.timerScale<1&&setTimeout(dojo.hitch(this,"_expandSlowly"),10))},destroyRecursive:function(){dojo.disconnect(this._onMouseOutHandle),dojo.disconnect(this._onMouseMoveHandle),dojo.disconnect(this._addChildHandle),this.isFixed&&dojo.disconnect(this._onScrollHandle),dojo.disconnect(this._onResizeHandle),this.inherited("destroyRecursive",arguments)}}),dojo.declare("dojox.widget.FisheyeListItem",[dijit._Widget,dijit._Templated,dijit._Contained],{iconSrc:"",label:"",id:"",_blankImgPath:dojo.moduleUrl("dojox.widget","FisheyeList/blank.gif"),templateString:'<div class="dojoxFisheyeListItem">  <img class="dojoxFisheyeListItemImage" dojoAttachPoint="imgNode" dojoAttachEvent="onmouseover:onMouseOver,onmouseout:onMouseOut,onclick:onClick">  <div class="dojoxFisheyeListItemLabel" dojoAttachPoint="lblNode"></div></div>',_isNode:function(i){if("function"!=typeof Element)return i&&!isNaN(i.nodeType);try{return i instanceof Element}catch(t){}},_hasParent:function(i){return Boolean(i&&i.parentNode&&this._isNode(i.parentNode))},postCreate:function(){if(".png"==this.iconSrc.toLowerCase().substring(this.iconSrc.length-4)&&dojo.isIE&&dojo.isIE<7){if(this._hasParent(this.imgNode)&&""!=this.id){var i=this.imgNode.parentNode;i.setAttribute("id",this.id)}this.imgNode.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+this.iconSrc+"', sizingMethod='scale')",this.imgNode.src=this._blankImgPath.toString()}else{if(this._hasParent(this.imgNode)&&""!=this.id){var i=this.imgNode.parentNode;i.setAttribute("id",this.id)}this.imgNode.src=this.iconSrc}this.lblNode&&this.lblNode.appendChild(document.createTextNode(this.label)),dojo.setSelectable(this.domNode,!1),this.startup()},startup:function(){this.parent=this.getParent()},onMouseOver:function(i){this.parent.isOver||this.parent._setActive(i),""!=this.label&&(dojo.addClass(this.lblNode,"dojoxFishSelected"),this.parent._positionLabel(this))},onMouseOut:function(){dojo.removeClass(this.lblNode,"dojoxFishSelected")},onClick:function(){}}));