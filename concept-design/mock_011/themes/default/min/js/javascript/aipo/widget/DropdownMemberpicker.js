dojo._hasResource["aipo.widget.DropdownMemberpicker"]||(dojo._hasResource["aipo.widget.DropdownMemberpicker"]=!0,dojo.provide("aipo.widget.DropdownMemberpicker"),dojo.require("aimluck.widget.Dropdown"),dojo.require("aipo.widget.MemberSelectList"),dojo.declare("aipo.widget.DropdownMemberpicker",[aimluck.widget.Dropdown],{inputWidth:"250px",hiddenId:"",hiddenValue:"",iconURL:"",iconAlt:"",selectId:"",inputId:"",inputValue:"",buttonAddId:"",buttonRemoveId:"",memberFromId:"",memberToTitle:"",memberToId:"",memberFromUrl:"",memberFromOptionKey:"",memberFromOptionValue:"",groupSelectId:"",groupSelectPreOptionKey:"",groupSelectPreOptionValue:"",groupSelectOptionKey:"",groupSelectOptionValue:"",memberGroupUrl:"",changeGroupUrl:"",listWidgetId:"memberlistwidget",templateString:'<div class="dijit dijitLeft dijitInline"\n	dojoAttachEvent="onmouseenter:_onMouse,onmouseleave:_onMouse,onmousedown:_onMouse,onclick:_onDropDownClick,onkeydown:_onDropDownKeydown,onblur:_onDropDownBlur,onkeypress:_onKey"\n	><div class=\'dijitRight\'>\n	<span class="" type="${type}"\n		dojoAttachPoint="focusNode,titleNode" waiRole="button" waiState="haspopup-true,labelledby-${id}_label"\n		><span class="" 	dojoAttachPoint="containerNode,popupStateNode"\n		id="${id}_label"><img src="${iconURL}" alt="${iconAlt}" style="cursor:pointer;cursor:hand;padding-right:2px" align="top" />\n	</span><select name="${selectId}" id="${selectId}" size="10" multiple="multiple" style="display:none" dojoAttachPoint="selectNode"></select><input type="hidden" id="${hiddenId}" name="${hiddenId}" value="${hiddenValue}" dojoAttachPoint="valueNode" /><span name="${inputId}" id="${inputId}" dojoAttachPoint="inputNode">${inputValue}</span>\n</div></div>\n',postCreate:function(){var e={widgetId:this.listWidgetId,selectId:this.selectId,inputId:this.inputId,buttonAddId:this.buttonAddId,buttonRemoveId:this.buttonRemoveId,memberFromId:this.memberFromId,memberToTitle:this.memberToTitle,memberToId:this.memberToId,memberFromUrl:this.memberFromUrl,memberFromOptionKey:this.memberFromOptionKey,memberFromOptionValue:this.memberFromOptionValue,groupSelectId:this.groupSelectId,groupSelectPreOptionKey:this.groupSelectPreOptionKey,groupSelectPreOptionValue:this.groupSelectPreOptionValue,groupSelectOptionKey:this.groupSelectOptionKey,groupSelectOptionValue:this.groupSelectOptionValue,memberGroupUrl:this.memberGroupUrl,changeGroupUrl:this.changeGroupUrl},t=dijit.byId(this.listWidgetId);if(t){this.dropDown=t;var o=dojo.byId(t.selectId);this.removeAllOptions(o),o=dojo.byId(t.memberToId),this.removeAllOptions(o)}else this.dropDown=new aipo.widget.MemberSelectList(e,this.listWidgetId);this.inherited(arguments)},removeAllOptions:function(e){var t;if(document.all){var o=e.options;for(t=0;t<o.length;t++)o.remove(t),t-=1}else{var o=e.options;for(t=0;t<o.length;t++)e.removeChild(o[t]),t-=1}},addOptionSync:function(e,t,o){var i=dojo.byId(this.memberToId),n=dojo.byId(this.selectId);if(!(0!=this.memberLimit&&i.options.length>=this.memberLimit)){if(document.all){var d=document.createElement("OPTION");d.value=e,d.text=t,d.selected=o;var r=document.createElement("OPTION");r.value=e,r.text=t,r.selected=o,1==i.options.length&&""==i.options[0].value&&(i.options.remove(0),n.options.remove(0)),i.add(d,i.options.length),n.add(r,n.options.length)}else{var d=document.createElement("OPTION");d.value=e,d.text=t,d.selected=o;var r=document.createElement("OPTION");r.value=e,r.text=t,r.selected=o,1==i.options.length&&""==i.options[0].value&&(i.removeChild(i.options[0]),n.removeChild(i.options[0])),i.insertBefore(d,i.options[i.options.length]),n.insertBefore(r,n.options[n.options.length])}this.inputMemberSync()}},inputMemberSync:function(){var e=dojo.byId(this.selectId),t=dojo.byId(this.inputId),o="",i=e.options,n=0,d=i.length;if(!(0>=d)){for(n=0;d>n;n++)0!=n&&(o+=", "),o+=i[n].text;t.innerHTML=o}}}));