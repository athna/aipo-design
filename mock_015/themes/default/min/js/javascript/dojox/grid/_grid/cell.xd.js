dojo._xdResourceLoaded({depends:[["provide","dojox.grid._grid.cell"]],defineResource:function(i){i._hasResource["dojox.grid._grid.cell"]||(i._hasResource["dojox.grid._grid.cell"]=!0,i.provide("dojox.grid._grid.cell"),i.declare("dojox.grid.cell",null,{styles:"",constructor:function(t){i.mixin(this,t),this.editor&&(this.editor=new this.editor(this))},format:function(i){var t,e=this.grid.edit.info,d=this.get?this.get(i):this.value;return this.editor&&(this.editor.alwaysOn||e.rowIndex==i&&e.cell==this)?this.editor.format(d,i):(t=this.formatter)?t.call(this,d,i):d},getNode:function(i){return this.view.getCellNode(i,this.index)},isFlex:function(){var i=this.unitWidth;return i&&("auto"==i||"%"==i.slice(-1))},applyEdit:function(i,t){this.grid.edit.applyCellEdit(i,this,t)},cancelEdit:function(i){this.grid.doCancelEdit(i)},_onEditBlur:function(i){this.grid.edit.isEditCell(i,this.index)&&this.grid.edit.apply()},registerOnBlur:function(t,e){this.commitOnBlur&&i.connect(t,"onblur",function(){setTimeout(i.hitch(this,"_onEditBlur",e),250)})}}))}});