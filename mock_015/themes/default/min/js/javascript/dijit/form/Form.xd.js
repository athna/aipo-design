dojo._xdResourceLoaded({depends:[["provide","dijit.form.Form"],["require","dijit._Widget"],["require","dijit._Templated"]],defineResource:function(e){e._hasResource["dijit.form.Form"]||(e._hasResource["dijit.form.Form"]=!0,e.provide("dijit.form.Form"),e.require("dijit._Widget"),e.require("dijit._Templated"),e.declare("dijit.form._FormMixin",null,{action:"",method:"",enctype:"",name:"","accept-charset":"",accept:"",target:"",attributeMap:e.mixin(e.clone(dijit._Widget.prototype.attributeMap),{action:"",method:"",enctype:"","accept-charset":"",accept:"",target:""}),execute:function(){},onCancel:function(){},onExecute:function(){},templateString:"<form dojoAttachPoint='containerNode' dojoAttachEvent='onsubmit:_onSubmit' name='${name}' enctype='multipart/form-data'></form>",_onSubmit:function(t){e.stopEvent(t),this.onExecute(),this.execute(this.getValues())},submit:function(){this.containerNode.submit()},setValues:function(t){var i={};e.forEach(this.getDescendants(),function(e){if(e.name){var t=i[e.name]||(i[e.name]=[]);t.push(e)}});for(var n in i){var o=i[n],a=e.getObject(n,!1,t);e.isArray(a)||(a=[a]),o[0].setChecked?e.forEach(o,function(t){t.setChecked(-1!=e.indexOf(a,t.value))}):e.forEach(o,function(e,t){e.setValue(a[t])})}},getValues:function(){var t={};return e.forEach(this.getDescendants(),function(i){var n=i.getValue?i.getValue():i.value,o=i.name;if(o)if(i.setChecked)if(/Radio/.test(i.declaredClass))i.checked&&e.setObject(o,n,t);else{var a=e.getObject(o,!1,t);a||(a=[],e.setObject(o,a,t)),i.checked&&a.push(n)}else e.setObject(o,n,t)}),t},isValid:function(){return e.every(this.getDescendants(),function(e){return!e.isValid||e.isValid()})}}),e.declare("dijit.form.Form",[dijit._Widget,dijit._Templated,dijit.form._FormMixin],null))}});