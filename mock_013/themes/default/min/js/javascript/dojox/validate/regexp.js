dojo._hasResource["dojox.validate.regexp"]||(dojo._hasResource["dojox.validate.regexp"]=!0,dojo.provide("dojox.validate.regexp"),dojo.require("dojo.regexp"),dojox.regexp={ca:{},us:{}},dojox.regexp.tld=function(o){o="object"==typeof o?o:{},"boolean"!=typeof o.allowCC&&(o.allowCC=!0),"boolean"!=typeof o.allowInfra&&(o.allowInfra=!0),"boolean"!=typeof o.allowGeneric&&(o.allowGeneric=!0);var e="arpa",a="aero|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|xxx|jobs|mobi|post",l="ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|eu|es|et|fi|fj|fk|fm|fo|fr|ga|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sk|sl|sm|sn|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw",t=[];o.allowInfra&&t.push(e),o.allowGeneric&&t.push(a),o.allowCC&&t.push(l);var r="";return t.length>0&&(r="("+t.join("|")+")"),r},dojox.regexp.ipAddress=function(o){o="object"==typeof o?o:{},"boolean"!=typeof o.allowDottedDecimal&&(o.allowDottedDecimal=!0),"boolean"!=typeof o.allowDottedHex&&(o.allowDottedHex=!0),"boolean"!=typeof o.allowDottedOctal&&(o.allowDottedOctal=!0),"boolean"!=typeof o.allowDecimal&&(o.allowDecimal=!0),"boolean"!=typeof o.allowHex&&(o.allowHex=!0),"boolean"!=typeof o.allowIPv6&&(o.allowIPv6=!0),"boolean"!=typeof o.allowHybrid&&(o.allowHybrid=!0);var e="((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])",a="(0[xX]0*[\\da-fA-F]?[\\da-fA-F]\\.){3}0[xX]0*[\\da-fA-F]?[\\da-fA-F]",l="(0+[0-3][0-7][0-7]\\.){3}0+[0-3][0-7][0-7]",t="(0|[1-9]\\d{0,8}|[1-3]\\d{9}|4[01]\\d{8}|42[0-8]\\d{7}|429[0-3]\\d{6}|4294[0-8]\\d{5}|42949[0-5]\\d{4}|429496[0-6]\\d{3}|4294967[01]\\d{2}|42949672[0-8]\\d|429496729[0-5])",r="0[xX]0*[\\da-fA-F]{1,8}",d="([\\da-fA-F]{1,4}\\:){7}[\\da-fA-F]{1,4}",n="([\\da-fA-F]{1,4}\\:){6}((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])",p=[];o.allowDottedDecimal&&p.push(e),o.allowDottedHex&&p.push(a),o.allowDottedOctal&&p.push(l),o.allowDecimal&&p.push(t),o.allowHex&&p.push(r),o.allowIPv6&&p.push(d),o.allowHybrid&&p.push(n);var s="";return p.length>0&&(s="("+p.join("|")+")"),s},dojox.regexp.host=function(o){o="object"==typeof o?o:{},"boolean"!=typeof o.allowIP&&(o.allowIP=!0),"boolean"!=typeof o.allowLocal&&(o.allowLocal=!1),"boolean"!=typeof o.allowPort&&(o.allowPort=!0);var e="([0-9a-zA-Z]([-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?\\.)+"+dojox.regexp.tld(o),a=o.allowPort?"(\\:"+dojox.regexp.integer({signed:!1})+")?":"",l=e;return o.allowIP&&(l+="|"+dojox.regexp.ipAddress(o)),o.allowLocal&&(l+="|localhost"),"("+l+")"+a},dojox.regexp.url=function(o){o="object"==typeof o?o:{},"undefined"==typeof o.scheme&&(o.scheme=[!0,!1]);var e=dojo.regexp.buildGroupRE(o.scheme,function(o){return o?"(https?|ftps?)\\://":""}),a="(/([^?#\\s/]+/)*)?([^?#\\s/]+(\\?[^?#\\s/]*)?(#[A-Za-z][\\w.:-]*)?)?";return e+dojox.regexp.host(o)+a},dojox.regexp.emailAddress=function(o){o="object"==typeof o?o:{},"boolean"!=typeof o.allowCruft&&(o.allowCruft=!1),o.allowPort=!1;var e="([\\da-zA-Z]+[-._+&'])*[\\da-zA-Z]+",a=e+"@"+dojox.regexp.host(o);return o.allowCruft&&(a="<?(mailto\\:)?"+a+">?"),a},dojox.regexp.emailAddressList=function(o){o="object"==typeof o?o:{},"string"!=typeof o.listSeparator&&(o.listSeparator="\\s;,");var e=dojox.regexp.emailAddress(o),a="("+e+"\\s*["+o.listSeparator+"]\\s*)*"+e+"\\s*["+o.listSeparator+"]?\\s*";return a},dojox.regexp.us.state=function(o){o="object"==typeof o?o:{},"boolean"!=typeof o.allowTerritories&&(o.allowTerritories=!0),"boolean"!=typeof o.allowMilitary&&(o.allowMilitary=!0);var e="AL|AK|AZ|AR|CA|CO|CT|DE|DC|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY",a="AS|FM|GU|MH|MP|PW|PR|VI",l="AA|AE|AP";return o.allowTerritories&&(e+="|"+a),o.allowMilitary&&(e+="|"+l),"("+e+")"},dojox.regexp.ca.postalCode=function(){var o="[A-Z][0-9][A-Z] [0-9][A-Z][0-9]";return"("+o+")"},dojox.regexp.ca.province=function(){return"("+statesRE+")"},dojox.regexp.numberFormat=function(o){o="object"==typeof o?o:{},"undefined"==typeof o.format&&(o.format="###-###-####");var e=function(o){return o=dojo.regexp.escapeString(o,"?"),o=o.replace(/\?/g,"\\d?"),o=o.replace(/#/g,"\\d")};return dojo.regexp.buildGroupRE(o.format,e)});