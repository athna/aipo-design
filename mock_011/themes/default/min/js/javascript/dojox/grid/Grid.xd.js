dojo._xdResourceLoaded({depends:[["provide","dojox.grid.Grid"],["require","dojox.grid.VirtualGrid"],["require","dojox.grid._data.model"],["require","dojox.grid._data.editors"]],defineResource:function(e){e._hasResource["dojox.grid.Grid"]||(e._hasResource["dojox.grid.Grid"]=!0,e.provide("dojox.grid.Grid"),e.require("dojox.grid.VirtualGrid"),e.require("dojox.grid._data.model"),e.require("dojox.grid._data.editors"),e.declare("dojox.Grid",dojox.VirtualGrid,{model:"dojox.grid.data.Table",postCreate:function(){if(this.model){var t=this.model;e.isString(t)&&(t=e.getObject(t)),this.model=e.isFunction(t)?new t:t,this._setModel(this.model)}this.inherited(arguments)},destroy:function(){this.setModel(null),this.inherited(arguments)},_structureChanged:function(){this.indexCellFields(),this.inherited(arguments)},_setModel:function(e){this.model=e,this.model&&(this.model.observer(this),this.model.measure(),this.indexCellFields())},setModel:function(e){this.model&&this.model.notObserver(this),this._setModel(e)},get:function(e){return this.grid.model.getDatum(e,this.fieldIndex)},modelAllChange:function(){this.rowCount=this.model?this.model.getRowCount():0,this.updateRowCount(this.rowCount)},modelRowChange:function(e,t){this.updateRow(t)},modelDatumChange:function(e,t){this.updateRow(t)},modelFieldsChange:function(){this.indexCellFields(),this.render()},modelInsertion:function(){this.updateRowCount(this.model.getRowCount())},modelRemoval:function(){this.updateRowCount(this.model.getRowCount())},getCellName:function(e){var t=this.model.fields.values,i=e.fieldIndex;return i>=0&&i<t.length&&t[i].name||this.inherited(arguments)},indexCellFields:function(){for(var t,i=this.layout.cells,o=0;i&&(t=i[o]);o++)e.isString(t.field)&&(t.fieldIndex=this.model.fields.indexOf(t.field))},refresh:function(){this.edit.cancel(),this.model.measure()},canSort:function(e){var t=this.getSortField(e);return t&&this.model.canSort(t)},getSortField:function(e){var t=this.getCell(this.getSortIndex(e));return(t.fieldIndex+1)*(this.sortInfo>0?1:-1)},sort:function(){this.edit.apply(),this.model.sort(this.getSortField())},addRow:function(e,t){this.edit.apply();var i=t||-1;0>i&&(i=this.selection.getFirstSelected()||0),0>i&&(i=0),this.model.insert(e,i),this.model.beginModifyRow(i);for(var o,d=0;(o=this.getCell(d))&&!o.editor;d++);o&&o.editor&&this.edit.setEditCell(o,i)},removeSelectedRows:function(){this.edit.apply();var e=this.selection.getSelected();e.length&&(this.model.remove(e),this.selection.clear())},canEdit:function(e,t){return this.model.canModify?this.model.canModify(t):!0},doStartEdit:function(e,t){var i=this.canEdit(e,t);return i&&(this.model.beginModifyRow(t),this.onStartEdit(e,t)),i},doApplyCellEdit:function(e,t,i){this.model.setDatum(e,t,i),this.onApplyCellEdit(e,t,i)},doCancelEdit:function(e){this.model.cancelModifyRow(e),this.onCancelEdit.apply(this,arguments)},doApplyEdit:function(e){this.model.endModifyRow(e),this.onApplyEdit(e)},styleRowState:function(e){if(this.model.getState){for(var t,i=this.model.getState(e.index),o="",d=0,n=["inflight","error","inserting"];t=n[d];d++)if(i[t]){o=" dojoxGrid-row-"+t;break}e.customClasses+=o}},onStyleRow:function(e){this.styleRowState(e),this.inherited(arguments)},junk:0}))}});