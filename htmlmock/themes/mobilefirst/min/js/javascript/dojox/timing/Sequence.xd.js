dojo._xdResourceLoaded({depends:[["provide","dojox.timing.Sequence"]],defineResource:function(e){e._hasResource["dojox.timing.Sequence"]||(e._hasResource["dojox.timing.Sequence"]=!0,e.provide("dojox.timing.Sequence"),e.experimental("dojox.timing.Sequence"),e.declare("dojox.timing.Sequence",null,{_defsResolved:[],_goOnPause:0,_running:!1,go:function(n,s){this._running=!0;var i=this;e.forEach(n,function(e){if(e.repeat>1)for(var n=e.repeat,s=0;n>s;s++)e.repeat=1,i._defsResolved.push(e);else i._defsResolved.push(e)});n[n.length-1];s&&i._defsResolved.push({func:s}),i._defsResolved.push({func:[this.stop,this]}),this._curId=0,this._go()},_go:function(){function n(n){var s=null;return s=e.isArray(n)?n.length>2?n[0].apply(n[1],n.slice(2)):n[0].apply(n[1]):n()}if(this._running){var s=this._defsResolved[this._curId];if(this._curId+=1,this._curId>=this._defsResolved.length)return n(s.func),void 0;var i=this;if(s.pauseAfter)n(s.func)!==!1?window.setTimeout(function(){i._go()},s.pauseAfter):this._goOnPause=s.pauseAfter;else if(s.pauseBefore){var o=function(){n(s.func)!==!1&&i._go()};window.setTimeout(o,s.pauseBefore)}else n(s.func)!==!1&&this._go()}},goOn:function(){if(this._goOnPause){var e=this;setTimeout(function(){e._go()},this._goOnPause),this._goOnPause=0}else this._go()},stop:function(){this._running=!1}}))}});