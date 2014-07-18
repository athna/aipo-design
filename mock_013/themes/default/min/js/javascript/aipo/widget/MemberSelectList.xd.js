dojo._xdResourceLoaded({depends:[["provide","aipo.widget.MemberSelectList"],["require","dijit._Widget"],["require","dijit._Templated"]],defineResource:function(e){if(!e._hasResource["aipo.widget.MemberSelectList"]){e._hasResource["aipo.widget.MemberSelectList"]=!0,e.provide("aipo.widget.MemberSelectList"),e.require("dijit._Widget"),e.require("dijit._Templated"),e.requireLocalization("aipo","locale");var t=e.i18n.getLocalization("aipo","locale");e.declare("aipo.widget.MemberSelectList",[dijit._Widget,dijit._Templated],{widgetId:"",inputWidth:"95%",hiddenId:"",hiddenValue:"",inputId:"",inputValue:"",selectId:"",memberFromId:"",memberFromUrl:"",memberFromOptionKey:"",memberFromOptionValue:"",memberToTitle:"",memberToId:"",buttonAddId:"",buttonRemoveId:"",memberLimit:0,groupSelectId:"",groupSelectPreOptionKey:"",groupSelectPreOptionValue:"",groupSelectOptionKey:"",groupSelectOptionValue:"",memberGroupUrl:"",changeGroupUrl:"",templateString:'<div id="${widgetId}" widgetId="${widgetId}"><table class="none"><tr><td><div id="memberPopupDiv"><div class="outer"><div class="popup"><div class="clearfix"><div class="memberlistToTop" >${memberToTitle}</div><div class="memberlistFromTop"><select size="1" style="width:100%" name="${groupSelectId}" id="${groupSelectId}" dojoAttachEvent="onchange:changeGroup"></select></div></div><div class="clearfix mb5"><div class="memberlistToBody"><select size="10" multiple="multiple" style="width:100%" name="${memberToId}" id="${memberToId}"></select></div><div class="memberlistFromBody"><select size="10" multiple="multiple" style="width:100%" name="${memberFromId}" id="${memberFromId}"></select></div></div><div class="clearfix"><div class="memberlistToBottom"><div class="alignright"><input id="${buttonRemoveId}" name="${buttonRemoveId}" type="button" class="button" value="'+t.DELETEBTN_STR+'"/ dojoAttachEvent="onclick:onMemberRemoveClick"></div></div><div class="memberlistFromBottom"><div class="alignright"><input id="${buttonAddId}" name="${buttonAddId}" type="button" class="button" value="'+t.ADDBTN_STR+'"/ dojoAttachEvent="onclick:onMemberAddClick"></div></div></div></div></div></div></td></tr></table></div>\n',postCreate:function(){this.id=this.widgetId,params={url:this.memberFromUrl,key:this.memberFromOptionKey,value:this.memberFromOptionValue},aimluck.io.createOptions(this.memberFromId,params),params={url:this.memberGroupUrl,key:this.groupSelectOptionKey,value:this.groupSelectOptionValue,preOptions:{key:this.groupSelectPreOptionKey,value:this.groupSelectPreOptionValue}},aimluck.io.createOptions(this.groupSelectId,params)},addOption:function(e,i,t,o){aimluck.io.addOption(e,i,t,o)},addOptionSync:function(i,t,o){var r=e.byId(this.memberToId),l=e.byId(this.selectId);if(!(0!=this.memberLimit&&r.options.length>=this.memberLimit)){if(document.all){var d=document.createElement("OPTION");d.value=i,d.text=t,d.selected=o;var n=document.createElement("OPTION");n.value=i,n.text=t,n.selected=o,1==r.options.length&&""==r.options[0].value&&(r.options.remove(0),l.options.remove(0)),r.add(d,r.options.length),l.add(n,l.options.length)}else{var d=document.createElement("OPTION");d.value=i,d.text=t,d.selected=o;var n=document.createElement("OPTION");n.value=i,n.text=t,n.selected=o,1==r.options.length&&""==r.options[0].value&&(r.removeChild(r.options[0]),l.removeChild(r.options[0])),r.insertBefore(d,r.options[r.options.length]),l.insertBefore(n,l.options[l.options.length])}this.inputMemberSync()}},addMember:function(e,t){if(document.all){var o=e.options,r=t.options;if(1==o.length&&""==o[0].value)return;for(i=0;i<o.length;i++)if(o[i].selected){var l=!1;for(j=0;j<r.length;j++)if(r[j].value==o[i].value){l=!0;break}if(!l){var d=document.createElement("OPTION");if(d.value=o[i].value,d.text=o[i].text,d.selected=!0,1==r.length&&""==r[0].value&&r.remove(0),0!=this.memberLimit&&t.options.length>=this.memberLimit)return;r.add(d,r.length)}}}else{var o=e.options,r=t.options;if(1==o.length&&""==o[0].value)return;for(i=0;i<o.length;i++)if(o[i].selected){var l=!1;for(j=0;j<r.length;j++)if(r[j].value==o[i].value){l=!0;break}if(!l){var d=document.createElement("OPTION");if(d.value=o[i].value,d.text=o[i].text,d.selected=!0,1==t.options.length&&""==t.options[0].value&&t.removeChild(t.options[0]),0!=this.memberLimit&&t.options.length>=this.memberLimit)return;t.insertBefore(d,r[r.length])}}}},removeAllMember:function(e){if(document.all){var t=e.options;for(i=0;i<t.length;i++)t[i].selected&&(t.remove(i),i-=1)}else{var t=e.options;for(i=0;i<t.length;i++)t[i].selected&&(e.removeChild(t[i]),i-=1)}},removeMember:function(e){if(document.all){var t=e.options;for(i=0;i<t.length;i++)t[i].selected&&(t.remove(i),i-=1)}else{var t=e.options;for(i=0;i<t.length;i++)t[i].selected&&(e.removeChild(t[i]),i-=1)}},removeMemberSync:function(){var t=e.byId(this.memberToId),o=e.byId(this.selectId);if(document.all){var r=t.options,l=o.options;for(i=0;i<r.length;i++)r[i].selected&&(r.remove(i),l.remove(i),i-=1)}else{var r=t.options,l=o.options;for(i=0;i<r.length;i++)r[i].selected&&(t.removeChild(r[i]),o.removeChild(l[i]),i-=1)}},inputMemberSync:function(){var t=e.byId(this.selectId),o=e.byId(this.inputId),r="",l=t.options;for(i=0;i<l.length;i++)0!=i&&(r+=", "),r+=l[i].text;o.innerHTML=r},changeGroup:function(e){var i=e.target.options[e.target.selectedIndex].value,t=this.changeGroupUrl+"&groupname="+i,o={url:t,key:this.memberFromOptionKey,value:this.memberFromOptionValue};aimluck.io.createOptions(this.memberFromId,o)},onMemberAddClick:function(){this.addMember(e.byId(this.memberFromId),e.byId(this.memberToId)),this.addMember(e.byId(this.memberFromId),e.byId(this.selectId)),this.inputMemberSync()},onMemberRemoveClick:function(){this.removeMemberSync(),this.inputMemberSync()}})}}});