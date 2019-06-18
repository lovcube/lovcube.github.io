!function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(this).ajaxSubmit(r))}function r(t){var r=t.target,i=e(r);if(!i.is("[type=submit],[type=image]")){var a=i.closest("[type=submit]");if(0===a.length)return;r=a[0]}var n=this;if(n.clk=r,"image"==r.type)if(void 0!==t.offsetX)n.clk_x=t.offsetX,n.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var s=i.offset();n.clk_x=t.pageX-s.left,n.clk_y=t.pageY-s.top}else n.clk_x=t.pageX-r.offsetLeft,n.clk_y=t.pageY-r.offsetTop;setTimeout(function(){n.clk=n.clk_x=n.clk_y=null},100)}function i(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var a={};a.fileapi=void 0!==e("<input type='file'/>").get(0).files,a.formdata=void 0!==window.FormData;var n=!!e.fn.prop;e.fn.attr2=function(){if(!n)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(t){var r,i,a=e.param(t).split("&"),n=a.length,s=[];for(r=0;n>r;r++)a[r]=a[r].replace(/\+/g," "),i=a[r].split("="),s.push([decodeURIComponent(i[0]),decodeURIComponent(i[1])]);return s}function s(i){for(var a=new FormData,n=0;n<i.length;n++)a.append(i[n].name,i[n].value);if(t.extraData){var s=r(t.extraData);for(n=0;n<s.length;n++)s[n]&&a.append(s[n][0],s[n][1])}t.data=null;var o=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(o.xhr=function(){var e=jQuery.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var r=0,i=e.loaded||e.position,a=e.total;e.lengthComputable&&(r=Math.ceil(i/a*100)),t.uploadProgress(e,i,a,r)},!1),e}),o.data=null;var l=o.beforeSend;return o.beforeSend=function(e,t){t.data=a,l&&l.call(this,e,t)},e.ajax(o)}function o(r){function a(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){i("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){i("cannot get iframe.contentDocument: "+r),t=e.document}return t}function s(){function t(){try{var e=a(v).readyState;i("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){i("Server abort: ",r," (",r.name,")"),o(T),w&&clearTimeout(w),w=void 0}}var r=c.attr2("target"),n=c.attr2("action");D.setAttribute("target",f),u||D.setAttribute("method","POST"),n!=h.url&&D.setAttribute("action",h.url),h.skipEncodingOverride||u&&!/post/i.test(u)||c.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),h.timeout&&(w=setTimeout(function(){x=!0,o(S)},h.timeout));var s=[];try{if(h.extraData)for(var l in h.extraData)h.extraData.hasOwnProperty(l)&&(e.isPlainObject(h.extraData[l])&&h.extraData[l].hasOwnProperty("name")&&h.extraData[l].hasOwnProperty("value")?s.push(e('<input type="hidden" name="'+h.extraData[l].name+'">').val(h.extraData[l].value).appendTo(D)[0]):s.push(e('<input type="hidden" name="'+l+'">').val(h.extraData[l]).appendTo(D)[0]));h.iframeTarget||(g.appendTo("body"),v.attachEvent?v.attachEvent("onload",o):v.addEventListener("load",o,!1)),setTimeout(t,15);try{D.submit()}catch(d){var m=document.createElement("form").submit;m.apply(D)}}finally{D.setAttribute("action",n),r?D.setAttribute("target",r):c.removeAttr("target"),e(s).remove()}}function o(t){if(!b.aborted&&!L){if(j=a(v),j||(i("cannot access response document"),t=T),t===S&&b)return b.abort("timeout"),void C.reject(b,"timeout");if(t==T&&b)return b.abort("server abort"),void C.reject(b,"error","server abort");if(j&&j.location.href!=h.iframeSrc||x){v.detachEvent?v.detachEvent("onload",o):v.removeEventListener("load",o,!1);var r,n="success";try{if(x)throw"timeout";var s="xml"==h.dataType||j.XMLDocument||e.isXMLDoc(j);if(i("isXml="+s),!s&&window.opera&&(null===j.body||!j.body.innerHTML)&&--q)return i("requeing onLoad callback, DOM not available"),void setTimeout(o,250);var u=j.body?j.body:j.documentElement;b.responseText=u?u.innerHTML:null,b.responseXML=j.XMLDocument?j.XMLDocument:j,s&&(h.dataType="xml"),b.getResponseHeader=function(e){var t={"content-type":h.dataType};return t[e]},u&&(b.status=Number(u.getAttribute("status"))||b.status,b.statusText=u.getAttribute("statusText")||b.statusText);var l=(h.dataType||"").toLowerCase(),d=/(json|script|text)/.test(l);if(d||h.textarea){var c=j.getElementsByTagName("textarea")[0];if(c)b.responseText=c.value,b.status=Number(c.getAttribute("status"))||b.status,b.statusText=c.getAttribute("statusText")||b.statusText;else if(d){var f=j.getElementsByTagName("pre")[0],p=j.getElementsByTagName("body")[0];f?b.responseText=f.textContent?f.textContent:f.innerText:p&&(b.responseText=p.textContent?p.textContent:p.innerText)}}else"xml"==l&&!b.responseXML&&b.responseText&&(b.responseXML=R(b.responseText));try{E=z(b,l,h)}catch(F){n="parsererror",b.error=r=F||n}}catch(F){i("error caught: ",F),n="error",b.error=r=F||n}b.aborted&&(i("upload aborted"),n=null),b.status&&(n=b.status>=200&&b.status<300||304===b.status?"success":"error"),"success"===n?(h.success&&h.success.call(h.context,E,"success",b),C.resolve(b.responseText,"success",b),m&&e.event.trigger("ajaxSuccess",[b,h])):n&&(void 0===r&&(r=b.statusText),h.error&&h.error.call(h.context,b,n,r),C.reject(b,"error",r),m&&e.event.trigger("ajaxError",[b,h,r])),m&&e.event.trigger("ajaxComplete",[b,h]),m&&!--e.active&&e.event.trigger("ajaxStop"),h.complete&&h.complete.call(h.context,b,n),L=!0,h.timeout&&clearTimeout(w),setTimeout(function(){h.iframeTarget||g.remove(),b.responseXML=null},100)}}}var l,d,h,m,f,g,v,b,F,y,x,w,D=c[0],C=e.Deferred();if(r)for(d=0;d<p.length;d++)l=e(p[d]),n?l.prop("disabled",!1):l.removeAttr("disabled");if(h=e.extend(!0,{},e.ajaxSettings,t),h.context=h.context||h,f="jqFormIO"+(new Date).getTime(),h.iframeTarget?(g=e(h.iframeTarget),y=g.attr2("name"),y?f=y:g.attr2("name",f)):(g=e('<iframe name="'+f+'" src="'+h.iframeSrc+'" />'),g.css({position:"absolute",top:"-1000px",left:"-1000px"})),v=g[0],b={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";i("aborting upload... "+r),this.aborted=1;try{v.contentWindow.document.execCommand&&v.contentWindow.document.execCommand("Stop")}catch(a){}g.attr("src",h.iframeSrc),b.error=r,h.error&&h.error.call(h.context,b,r,t),m&&e.event.trigger("ajaxError",[b,h,r]),h.complete&&h.complete.call(h.context,b,r)}},m=h.global,m&&0===e.active++&&e.event.trigger("ajaxStart"),m&&e.event.trigger("ajaxSend",[b,h]),h.beforeSend&&h.beforeSend.call(h.context,b,h)===!1)return h.global&&e.active--,C.reject(),C;if(b.aborted)return C.reject(),C;F=D.clk,F&&(y=F.name,y&&!F.disabled&&(h.extraData=h.extraData||{},h.extraData[y]=F.value,"image"==F.type&&(h.extraData[y+".x"]=D.clk_x,h.extraData[y+".y"]=D.clk_y)));var S=1,T=2,k=e("meta[name=csrf-token]").attr("content"),A=e("meta[name=csrf-param]").attr("content");A&&k&&(h.extraData=h.extraData||{},h.extraData[A]=k),h.forceSync?s():setTimeout(s,10);var E,j,L,q=50,R=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},M=e.parseJSON||function(e){return window.eval("("+e+")")},z=function(t,r,i){var a=t.getResponseHeader("content-type")||"",n="xml"===r||!r&&a.indexOf("xml")>=0,s=n?t.responseXML:t.responseText;return n&&"parsererror"===s.documentElement.nodeName&&e.error&&e.error("parsererror"),i&&i.dataFilter&&(s=i.dataFilter(s,r)),"string"==typeof s&&("json"===r||!r&&a.indexOf("json")>=0?s=M(s):("script"===r||!r&&a.indexOf("javascript")>=0)&&e.globalEval(s)),s};return C}if(!this.length)return i("ajaxSubmit: skipping submit process - no element selected"),this;var u,l,d,c=this;"function"==typeof t&&(t={success:t}),u=this.attr2("method"),l=this.attr2("action"),d="string"==typeof l?e.trim(l):"",d=d||window.location.href||"",d&&(d=(d.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:d,success:e.ajaxSettings.success,type:u||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var h={};if(this.trigger("form-pre-serialize",[this,t,h]),h.veto)return i("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return i("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var m=t.traditional;void 0===m&&(m=e.ajaxSettings.traditional);var f,p=[],g=this.formToArray(t.semantic,p);if(t.data&&(t.extraData=t.data,f=e.param(t.data,m)),t.beforeSubmit&&t.beforeSubmit(g,this,t)===!1)return i("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[g,this,t,h]),h.veto)return i("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var v=e.param(g,m);f&&(v=v?v+"&"+f:f),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+v,t.data=null):t.data=v;var b=[];if(t.resetForm&&b.push(function(){c.resetForm()}),t.clearForm&&b.push(function(){c.clearForm(t.includeHidden)}),!t.dataType&&t.target){var F=t.success||function(){};b.push(function(r){var i=t.replaceTarget?"replaceWith":"html";e(t.target)[i](r).each(F,arguments)})}else t.success&&b.push(t.success);t.success=function(e,r,i){for(var a=t.context||this,n=0,s=b.length;s>n;n++)b[n].apply(a,[e,r,i||c,c])};var y=e('input[type=file]:enabled[value!=""]',this),x=y.length>0,w="multipart/form-data",D=c.attr("enctype")==w||c.attr("encoding")==w,C=a.fileapi&&a.formdata;i("fileAPI :"+C);var S,T=(x||D)&&!C;t.iframe!==!1&&(t.iframe||T)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){S=o(g)}):S=o(g):S=(x||D)&&C?s(g):e.ajax(t),c.removeData("jqxhr").data("jqxhr",S);for(var k=0;k<p.length;k++)p[k]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(a){if(a=a||{},a.delegation=a.delegation&&e.isFunction(e.fn.on),!a.delegation&&0===this.length){var n={s:this.selector,c:this.context};return!e.isReady&&n.s?(i("DOM not ready, queuing ajaxForm"),e(function(){e(n.s,n.c).ajaxForm(a)}),this):(i("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return a.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,a,t).on("click.form-plugin",this.selector,a,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",a,t).bind("click.form-plugin",a,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var i=[];if(0===this.length)return i;var n=this[0],s=t?n.getElementsByTagName("*"):n.elements;if(!s)return i;var o,u,l,d,c,h,m;for(o=0,h=s.length;h>o;o++)if(c=s[o],l=c.name,l&&!c.disabled)if(t&&n.clk&&"image"==c.type)n.clk==c&&(i.push({name:l,value:e(c).val(),type:c.type}),i.push({name:l+".x",value:n.clk_x},{name:l+".y",value:n.clk_y}));else if(d=e.fieldValue(c,!0),d&&d.constructor==Array)for(r&&r.push(c),u=0,m=d.length;m>u;u++)i.push({name:l,value:d[u]});else if(a.fileapi&&"file"==c.type){r&&r.push(c);var f=c.files;if(f.length)for(u=0;u<f.length;u++)i.push({name:l,value:f[u],type:c.type});else i.push({name:l,value:"",type:c.type})}else null!==d&&"undefined"!=typeof d&&(r&&r.push(c),i.push({name:l,value:d,type:c.type,required:c.required}));if(!t&&n.clk){var p=e(n.clk),g=p[0];l=g.name,l&&!g.disabled&&"image"==g.type&&(i.push({name:l,value:p.val()}),i.push({name:l+".x",value:n.clk_x},{name:l+".y",value:n.clk_y}))}return i},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var i=this.name;if(i){var a=e.fieldValue(this,t);if(a&&a.constructor==Array)for(var n=0,s=a.length;s>n;n++)r.push({name:i,value:a[n]});else null!==a&&"undefined"!=typeof a&&r.push({name:this.name,value:a})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],i=0,a=this.length;a>i;i++){var n=this[i],s=e.fieldValue(n,t);null===s||"undefined"==typeof s||s.constructor==Array&&!s.length||(s.constructor==Array?e.merge(r,s):r.push(s))}return r},e.fieldValue=function(t,r){var i=t.name,a=t.type,n=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!i||t.disabled||"reset"==a||"button"==a||("checkbox"==a||"radio"==a)&&!t.checked||("submit"==a||"image"==a)&&t.form&&t.form.clk!=t||"select"==n&&-1==t.selectedIndex))return null;if("select"==n){var s=t.selectedIndex;if(0>s)return null;for(var o=[],u=t.options,l="select-one"==a,d=l?s+1:u.length,c=l?s:0;d>c;c++){var h=u[c];if(h.selected){var m=h.value;if(m||(m=h.attributes&&h.attributes.value&&!h.attributes.value.specified?h.text:h.value),l)return m;o.push(m)}}return o}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var i=this.type,a=this.tagName.toLowerCase();r.test(i)||"textarea"==a?this.value="":"checkbox"==i||"radio"==i?this.checked=!1:"select"==a?this.selectedIndex=-1:"file"==i?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(i)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var i=e(this).parent("select");t&&i[0]&&"select-one"==i[0].type&&i.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1}(jQuery),function(e){e.extend(e.fn,{validate:function(t){if(!this.length)return void(t&&t.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var r=e.data(this[0],"validator");return r?r:(this.attr("novalidate","novalidate"),r=new e.validator(t,this[0]),e.data(this[0],"validator",r),r.settings.onsubmit&&(this.validateDelegate(":submit","click",function(t){r.settings.submitHandler&&(r.submitButton=t.target),e(t.target).hasClass("cancel")&&(r.cancelSubmit=!0),void 0!==e(t.target).attr("formnovalidate")&&(r.cancelSubmit=!0)}),this.submit(function(t){function i(){var i;return r.settings.submitHandler?(r.submitButton&&(i=e("<input type='hidden'/>").attr("name",r.submitButton.name).val(e(r.submitButton).val()).appendTo(r.currentForm)),r.settings.submitHandler.call(r,r.currentForm,t),r.submitButton&&i.remove(),!1):!0}return r.settings.debug&&t.preventDefault(),r.cancelSubmit?(r.cancelSubmit=!1,i()):r.form()?r.pendingRequest?(r.formSubmitted=!0,!1):i():(r.focusInvalid(),!1)})),r)},valid:function(){var t,r;return e(this[0]).is("form")?t=this.validate().form():(t=!0,r=e(this[0].form).validate(),this.each(function(){t=r.element(this)&&t})),t},removeAttrs:function(t){var r={},i=this;return e.each(t.split(/\s/),function(e,t){r[t]=i.attr(t),i.removeAttr(t)}),r},rules:function(t,r){var i,a,n,s,o,u,l=this[0];if(t)switch(i=e.data(l.form,"validator").settings,a=i.rules,n=e.validator.staticRules(l),t){case"add":e.extend(n,e.validator.normalizeRule(r)),delete n.messages,a[l.name]=n,r.messages&&(i.messages[l.name]=e.extend(i.messages[l.name],r.messages));break;case"remove":return r?(u={},e.each(r.split(/\s/),function(t,r){u[r]=n[r],delete n[r],"required"===r&&e(l).removeAttr("aria-required")}),u):(delete a[l.name],n)}return s=e.validator.normalizeRules(e.extend({},e.validator.classRules(l),e.validator.attributeRules(l),e.validator.dataRules(l),e.validator.staticRules(l)),l),s.required&&(o=s.required,delete s.required,s=e.extend({required:o},s),e(l).attr("aria-required","true")),s.remote&&(o=s.remote,delete s.remote,s=e.extend(s,{remote:o})),s}}),e.extend(e.expr[":"],{blank:function(t){return!e.trim(""+e(t).val())},filled:function(t){return!!e.trim(""+e(t).val())},unchecked:function(t){return!e(t).prop("checked")}}),e.validator=function(t,r){this.settings=e.extend(!0,{},e.validator.defaults,t),this.currentForm=r,this.init()},e.validator.format=function(t,r){return 1===arguments.length?function(){var r=e.makeArray(arguments);return r.unshift(t),e.validator.format.apply(this,r)}:(arguments.length>2&&r.constructor!==Array&&(r=e.makeArray(arguments).slice(1)),r.constructor!==Array&&(r=[r]),e.each(r,function(e,r){t=t.replace(new RegExp("\\{"+e+"\\}","g"),function(){return r})}),t)},e.extend(e.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:e([]),errorLabelContainer:e([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(e){this.lastActive=e,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,e,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(e)).hide())},onfocusout:function(e){this.checkable(e)||!(e.name in this.submitted)&&this.optional(e)||this.element(e)},onkeyup:function(e,t){9===t.which&&""===this.elementValue(e)||(e.name in this.submitted||e===this.lastElement)&&this.element(e)},onclick:function(e){e.name in this.submitted?this.element(e):e.parentNode.name in this.submitted&&this.element(e.parentNode)},highlight:function(t,r,i){"radio"===t.type?this.findByName(t.name).addClass(r).removeClass(i):e(t).addClass(r).removeClass(i)},unhighlight:function(t,r,i){"radio"===t.type?this.findByName(t.name).removeClass(r).addClass(i):e(t).removeClass(r).addClass(i)}},setDefaults:function(t){e.extend(e.validator.defaults,t)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:e.validator.format("Please enter no more than {0} characters."),minlength:e.validator.format("Please enter at least {0} characters."),rangelength:e.validator.format("Please enter a value between {0} and {1} characters long."),range:e.validator.format("Please enter a value between {0} and {1}."),max:e.validator.format("Please enter a value less than or equal to {0}."),min:e.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function t(t){var r=e.data(this[0].form,"validator"),i="on"+t.type.replace(/^validate/,""),a=r.settings;a[i]&&!this.is(a.ignore)&&a[i].call(r,this[0],t)}this.labelContainer=e(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||e(this.currentForm),this.containers=e(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var r,i=this.groups={};e.each(this.settings.groups,function(t,r){"string"==typeof r&&(r=r.split(/\s/)),e.each(r,function(e,r){i[r]=t})}),r=this.settings.rules,e.each(r,function(t,i){r[t]=e.validator.normalizeRule(i)}),e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",t).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",t),this.settings.invalidHandler&&e(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),e.extend(this.submitted,this.errorMap),this.invalid=e.extend({},this.errorMap),this.valid()||e(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var e=0,t=this.currentElements=this.elements();t[e];e++)this.check(t[e]);return this.valid()},element:function(t){var r=this.clean(t),i=this.validationTargetFor(r),a=!0;return this.lastElement=i,void 0===i?delete this.invalid[r.name]:(this.prepareElement(i),this.currentElements=e(i),a=this.check(i)!==!1,a?delete this.invalid[i.name]:this.invalid[i.name]=!0),e(t).attr("aria-invalid",!a),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a},showErrors:function(t){if(t){e.extend(this.errorMap,t),this.errorList=[];for(var r in t)this.errorList.push({message:t[r],element:this.findByName(r)[0]});this.successList=e.grep(this.successList,function(e){return!(e.name in t)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){e.fn.resetForm&&e(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(e){var t,r=0;for(t in e)r++;return r},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{e(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(t){}},findLastActive:function(){var t=this.lastActive;return t&&1===e.grep(this.errorList,function(e){return e.element.name===t.name}).length&&t},elements:function(){var t=this,r={};return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&t.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in r||!t.objectLength(e(this).rules())?!1:(r[this.name]=!0,!0)})},clean:function(t){return e(t)[0]},errors:function(){var t=this.settings.errorClass.split(" ").join(".");return e(this.settings.errorElement+"."+t,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=e([]),this.toHide=e([]),this.currentElements=e([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(e){this.reset(),this.toHide=this.errorsFor(e)},elementValue:function(t){var r,i=e(t),a=i.attr("type");return"radio"===a||"checkbox"===a?e("input[name='"+i.attr("name")+"']:checked").val():(r=i.val(),"string"==typeof r?r.replace(/\r/g,""):r)},check:function(t){t=this.validationTargetFor(this.clean(t));var r,i,a,n=e(t).rules(),s=e.map(n,function(e,t){return t}).length,o=!1,u=this.elementValue(t);for(i in n){a={method:i,parameters:n[i]};try{if(r=e.validator.methods[i].call(this,u,t,a.parameters),"dependency-mismatch"===r&&1===s){o=!0;continue}if(o=!1,"pending"===r)return void(this.toHide=this.toHide.not(this.errorsFor(t)));if(!r)return this.formatAndAdd(t,a),!1}catch(l){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+t.id+", check the '"+a.method+"' method.",l),l}}if(!o)return this.objectLength(n)&&this.successList.push(t),!0},customDataMessage:function(t,r){return e(t).data("msg"+r[0].toUpperCase()+r.substring(1).toLowerCase())||e(t).data("msg")},customMessage:function(e,t){var r=this.settings.messages[e];return r&&(r.constructor===String?r:r[t])},findDefined:function(){for(var e=0;e<arguments.length;e++)if(void 0!==arguments[e])return arguments[e]},defaultMessage:function(t,r){return this.findDefined(this.customMessage(t.name,r),this.customDataMessage(t,r),!this.settings.ignoreTitle&&t.title||void 0,e.validator.messages[r],"<strong>Warning: No message defined for "+t.name+"</strong>")},formatAndAdd:function(t,r){var i=this.defaultMessage(t,r.method),a=/\$?\{(\d+)\}/g;"function"==typeof i?i=i.call(this,r.parameters,t):a.test(i)&&(i=e.validator.format(i.replace(a,"{$1}"),r.parameters)),this.errorList.push({message:i,element:t,method:r.method}),this.errorMap[t.name]=i,this.submitted[t.name]=i},addWrapper:function(e){return this.settings.wrapper&&(e=e.add(e.parent(this.settings.wrapper))),e},defaultShowErrors:function(){var e,t,r;for(e=0;this.errorList[e];e++)r=this.errorList[e],this.settings.highlight&&this.settings.highlight.call(this,r.element,this.settings.errorClass,this.settings.validClass),this.showLabel(r.element,r.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(e=0;this.successList[e];e++)this.showLabel(this.successList[e]);if(this.settings.unhighlight)for(e=0,t=this.validElements();t[e];e++)this.settings.unhighlight.call(this,t[e],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return e(this.errorList).map(function(){return this.element})},showLabel:function(t,r){var i=this.errorsFor(t);i.length?(i.removeClass(this.settings.validClass).addClass(this.settings.errorClass),i.html(r)):(i=e("<"+this.settings.errorElement+">").attr("for",this.idOrName(t)).addClass(this.settings.errorClass).html(r||""),this.settings.wrapper&&(i=i.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(i).length||(this.settings.errorPlacement?this.settings.errorPlacement(i,e(t)):i.insertAfter(t))),!r&&this.settings.success&&(i.text(""),"string"==typeof this.settings.success?i.addClass(this.settings.success):this.settings.success(i,t)),this.toShow=this.toShow.add(i)},errorsFor:function(t){var r=this.idOrName(t);return this.errors().filter(function(){return e(this).attr("for")===r})},idOrName:function(e){return this.groups[e.name]||(this.checkable(e)?e.name:e.id||e.name)},validationTargetFor:function(e){return this.checkable(e)&&(e=this.findByName(e.name).not(this.settings.ignore)[0]),e},checkable:function(e){return/radio|checkbox/i.test(e.type)},findByName:function(t){return e(this.currentForm).find("[name='"+t+"']")},getLength:function(t,r){switch(r.nodeName.toLowerCase()){case"select":return e("option:selected",r).length;case"input":if(this.checkable(r))return this.findByName(r.name).filter(":checked").length}return t.length},depend:function(e,t){return this.dependTypes[typeof e]?this.dependTypes[typeof e](e,t):!0},dependTypes:{"boolean":function(e){return e},string:function(t,r){return!!e(t,r.form).length},"function":function(e,t){return e(t)}},optional:function(t){var r=this.elementValue(t);return!e.validator.methods.required.call(this,r,t)&&"dependency-mismatch"},startRequest:function(e){this.pending[e.name]||(this.pendingRequest++,this.pending[e.name]=!0)},stopRequest:function(t,r){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[t.name],r&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(e(this.currentForm).submit(),this.formSubmitted=!1):!r&&0===this.pendingRequest&&this.formSubmitted&&(e(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(t){return e.data(t,"previousValue")||e.data(t,"previousValue",{old:null,valid:!0,message:this.defaultMessage(t,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(t,r){t.constructor===String?this.classRuleSettings[t]=r:e.extend(this.classRuleSettings,t)},classRules:function(t){var r={},i=e(t).attr("class");return i&&e.each(i.split(" "),function(){this in e.validator.classRuleSettings&&e.extend(r,e.validator.classRuleSettings[this])}),r},attributeRules:function(t){var r,i,a={},n=e(t),s=t.getAttribute("type");for(r in e.validator.methods)"required"===r?(i=t.getAttribute(r),""===i&&(i=!0),i=!!i):i=n.attr(r),/min|max/.test(r)&&(null===s||/number|range|text/.test(s))&&(i=Number(i)),i||0===i?a[r]=i:s===r&&"range"!==s&&(a[r]=!0);return a.maxlength&&/-1|2147483647|524288/.test(a.maxlength)&&delete a.maxlength,a},dataRules:function(t){var r,i,a={},n=e(t);for(r in e.validator.methods)i=n.data("rule"+r[0].toUpperCase()+r.substring(1).toLowerCase()),void 0!==i&&(a[r]=i);return a},staticRules:function(t){var r={},i=e.data(t.form,"validator");return i.settings.rules&&(r=e.validator.normalizeRule(i.settings.rules[t.name])||{}),r},normalizeRules:function(t,r){return e.each(t,function(i,a){if(a===!1)return void delete t[i];if(a.param||a.depends){var n=!0;switch(typeof a.depends){case"string":n=!!e(a.depends,r.form).length;break;case"function":n=a.depends.call(r,r)}n?t[i]=void 0!==a.param?a.param:!0:delete t[i]}}),e.each(t,function(i,a){t[i]=e.isFunction(a)?a(r):a}),e.each(["minlength","maxlength"],function(){t[this]&&(t[this]=Number(t[this]))}),e.each(["rangelength","range"],function(){var r;t[this]&&(e.isArray(t[this])?t[this]=[Number(t[this][0]),Number(t[this][1])]:"string"==typeof t[this]&&(r=t[this].split(/[\s,]+/),t[this]=[Number(r[0]),Number(r[1])]))}),e.validator.autoCreateRanges&&(t.min&&t.max&&(t.range=[t.min,t.max],delete t.min,delete t.max),t.minlength&&t.maxlength&&(t.rangelength=[t.minlength,t.maxlength],delete t.minlength,delete t.maxlength)),t},normalizeRule:function(t){if("string"==typeof t){var r={};e.each(t.split(/\s/),function(){r[this]=!0}),t=r}return t},addMethod:function(t,r,i){e.validator.methods[t]=r,e.validator.messages[t]=void 0!==i?i:e.validator.messages[t],r.length<3&&e.validator.addClassRules(t,e.validator.normalizeRule(t))},methods:{required:function(t,r,i){if(!this.depend(i,r))return"dependency-mismatch";if("select"===r.nodeName.toLowerCase()){var a=e(r).val();return a&&a.length>0}return this.checkable(r)?this.getLength(t,r)>0:e.trim(t).length>0},email:function(e,t){return this.optional(t)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)},url:function(e,t){return this.optional(t)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)},date:function(e,t){return this.optional(t)||!/Invalid|NaN/.test(new Date(e).toString());
},dateISO:function(e,t){return this.optional(t)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)},number:function(e,t){return this.optional(t)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)},digits:function(e,t){return this.optional(t)||/^\d+$/.test(e)},creditcard:function(e,t){if(this.optional(t))return"dependency-mismatch";if(/[^0-9 \-]+/.test(e))return!1;var r,i,a=0,n=0,s=!1;if(e=e.replace(/\D/g,""),e.length<13||e.length>19)return!1;for(r=e.length-1;r>=0;r--)i=e.charAt(r),n=parseInt(i,10),s&&(n*=2)>9&&(n-=9),a+=n,s=!s;return a%10===0},minlength:function(t,r,i){var a=e.isArray(t)?t.length:this.getLength(e.trim(t),r);return this.optional(r)||a>=i},maxlength:function(t,r,i){var a=e.isArray(t)?t.length:this.getLength(e.trim(t),r);return this.optional(r)||i>=a},rangelength:function(t,r,i){var a=e.isArray(t)?t.length:this.getLength(e.trim(t),r);return this.optional(r)||a>=i[0]&&a<=i[1]},min:function(e,t,r){return this.optional(t)||e>=r},max:function(e,t,r){return this.optional(t)||r>=e},range:function(e,t,r){return this.optional(t)||e>=r[0]&&e<=r[1]},equalTo:function(t,r,i){var a=e(i);return this.settings.onfocusout&&a.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){e(r).valid()}),t===a.val()},remote:function(t,r,i){if(this.optional(r))return"dependency-mismatch";var a,n,s=this.previousValue(r);return this.settings.messages[r.name]||(this.settings.messages[r.name]={}),s.originalMessage=this.settings.messages[r.name].remote,this.settings.messages[r.name].remote=s.message,i="string"==typeof i&&{url:i}||i,s.old===t?s.valid:(s.old=t,a=this,this.startRequest(r),n={},n[r.name]=t,e.ajax(e.extend(!0,{url:i,mode:"abort",port:"validate"+r.name,dataType:"json",data:n,context:a.currentForm,success:function(i){var n,o,u,l=i===!0||"true"===i;a.settings.messages[r.name].remote=s.originalMessage,l?(u=a.formSubmitted,a.prepareElement(r),a.formSubmitted=u,a.successList.push(r),delete a.invalid[r.name],a.showErrors()):(n={},o=i||a.defaultMessage(r,"remote"),n[r.name]=s.message=e.isFunction(o)?o(t):o,a.invalid[r.name]=!0,a.showErrors(n)),s.valid=l,a.stopRequest(r,l)}},i)),"pending")}}}),e.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."}}(jQuery),function(e){var t,r={};e.ajaxPrefilter?e.ajaxPrefilter(function(e,t,i){var a=e.port;"abort"===e.mode&&(r[a]&&r[a].abort(),r[a]=i)}):(t=e.ajax,e.ajax=function(i){var a=("mode"in i?i:e.ajaxSettings).mode,n=("port"in i?i:e.ajaxSettings).port;return"abort"===a?(r[n]&&r[n].abort(),r[n]=t.apply(this,arguments),r[n]):t.apply(this,arguments)})}(jQuery),function(e){e.extend(e.fn,{validateDelegate:function(t,r,i){return this.bind(r,function(r){var a=e(r.target);return a.is(t)?i.apply(a,arguments):void 0})}})}(jQuery),$(function(){$("#contact").validate({rules:{name:{required:!0,minlength:2},email:{required:!0,email:!0},message:{required:!0}},messages:{name:{required:"Please, add your name.",minlength:"Your name must consist of at least 2 characters"},email:{required:"Please, add your e-mail address."},message:{required:"Please, add your message.",minlength:"Your message is too short."}},submitHandler:function(e){$(e).ajaxSubmit({type:"POST",data:$(e).serialize(),url:"process.php",success:function(){$("#contact :input").attr("disabled","disabled"),$("#contact").fadeTo("slow",.15,function(){$(this).find(":input").attr("disabled","disabled"),$(this).find("label").css("cursor","default"),$("#success").fadeIn()})},error:function(){$("#contact").fadeTo("slow",.15,function(){$("#error").fadeIn()})}})}})});