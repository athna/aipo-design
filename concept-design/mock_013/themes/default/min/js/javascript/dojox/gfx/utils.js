dojo._hasResource["dojox.gfx.utils"]||(dojo._hasResource["dojox.gfx.utils"]=!0,dojo.provide("dojox.gfx.utils"),dojo.require("dojox.gfx"),dojox.gfx.utils.serialize=function(o){var e,r={},t=o instanceof dojox.gfx.Surface;if(t||o instanceof dojox.gfx.Group){r.children=[];for(var i=0;i<o.children.length;++i)r.children.push(dojox.gfx.utils.serialize(o.children[i]));if(t)return r.children}else r.shape=o.getShape();return o.getTransform&&(e=o.getTransform(),e&&(r.transform=e)),o.getStroke&&(e=o.getStroke(),e&&(r.stroke=e)),o.getFill&&(e=o.getFill(),e&&(r.fill=e)),o.getFont&&(e=o.getFont(),e&&(r.font=e)),r},dojox.gfx.utils.toJson=function(o,e){return dojo.toJson(dojox.gfx.utils.serialize(o),e)},dojox.gfx.utils.deserialize=function(o,e){if(e instanceof Array){for(var r=[],t=0;t<e.length;++t)r.push(dojox.gfx.utils.deserialize(o,e[t]));return r}var i="shape"in e?o.createShape(e.shape):o.createGroup();if("transform"in e&&i.setTransform(e.transform),"stroke"in e&&i.setStroke(e.stroke),"fill"in e&&i.setFill(e.fill),"font"in e&&i.setFont(e.font),"children"in e)for(var t=0;t<e.children.length;++t)dojox.gfx.utils.deserialize(i,e.children[t]);return i},dojox.gfx.utils.fromJson=function(o,e){return dojox.gfx.utils.deserialize(o,dojo.fromJson(e))});