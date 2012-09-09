(function(e,t){function i(e,i){n.addType(e,function(s,o,u){var a,f,l,c,h=o,p=(new Date).getTime();if(!s){h={},c=[],l=0;try{s=i.length;while(s=i.key(l++))r.test(s)&&(f=JSON.parse(i.getItem(s)),f.expires&&f.expires<=p?c.push(s):h[s.replace(r,"")]=f.data);while(s=c.pop())i.removeItem(s)}catch(d){}return h}s="__amplify__"+s;if(o===t){a=i.getItem(s),f=a?JSON.parse(a):{expires:-1};if(!(f.expires&&f.expires<=p))return f.data;i.removeItem(s)}else if(o===null)i.removeItem(s);else{f=JSON.stringify({data:o,expires:u.expires?p+u.expires:null});try{i.setItem(s,f)}catch(d){n[e]();try{i.setItem(s,f)}catch(d){throw n.error()}}}return h})}var n=e.store=function(e,t,r){var i=n.type;return r&&r.type&&r.type in n.types&&(i=r.type),n.types[i](e,t,r||{})};n.types={},n.type=null,n.addType=function(e,t){n.type||(n.type=e),n.types[e]=t,n[e]=function(t,r,i){return i=i||{},i.type=e,n(t,r,i)}},n.error=function(){return"amplify.store quota exceeded"};var r=/^__amplify__/;for(var s in{localStorage:1,sessionStorage:1})try{window[s].setItem("__amplify__","x"),window[s].removeItem("__amplify__"),i(s,window[s])}catch(o){}if(!n.types.localStorage&&window.globalStorage)try{i("globalStorage",window.globalStorage[window.location.hostname]),n.type==="sessionStorage"&&(n.type="globalStorage")}catch(o){}(function(){if(n.types.localStorage)return;var e=document.createElement("div"),r="amplify";e.style.display="none",document.getElementsByTagName("head")[0].appendChild(e);try{e.addBehavior("#default#userdata"),e.load(r)}catch(i){e.parentNode.removeChild(e);return}n.addType("userData",function(i,s,o){e.load(r);var u,a,f,l,c,h=s,p=(new Date).getTime();if(!i){h={},c=[],l=0;while(u=e.XMLDocument.documentElement.attributes[l++])a=JSON.parse(u.value),a.expires&&a.expires<=p?c.push(u.name):h[u.name]=a.data;while(i=c.pop())e.removeAttribute(i);return e.save(r),h}i=i.replace(/[^\-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,"-"),i=i.replace(/^-/,"_-");if(s===t){u=e.getAttribute(i),a=u?JSON.parse(u):{expires:-1};if(!(a.expires&&a.expires<=p))return a.data;e.removeAttribute(i)}else s===null?e.removeAttribute(i):(f=e.getAttribute(i),a=JSON.stringify({data:s,expires:o.expires?p+o.expires:null}),e.setAttribute(i,a));try{e.save(r)}catch(d){f===null?e.removeAttribute(i):e.setAttribute(i,f),n.userData();try{e.setAttribute(i,a),e.save(r)}catch(d){throw f===null?e.removeAttribute(i):e.setAttribute(i,f),n.error()}}return h})})(),function(){function i(e){return e===t?t:JSON.parse(JSON.stringify(e))}var e={},r={};n.addType("memory",function(n,s,o){return n?s===t?i(e[n]):(r[n]&&(clearTimeout(r[n]),delete r[n]),s===null?(delete e[n],null):(e[n]=s,o.expires&&(r[n]=setTimeout(function(){delete e[n],delete r[n]},o.expires)),s)):i(e)})}()})(this.amplify=this.amplify||{}),function(e){function i(e,t){for(var n=0;n<e.length;n+=1)if(t(e[n],n,e)===!1)return}function o(e){var t=[];for(var n=0,r=e.length;n<r;n++)t=t.concat(e[n]);return t}function u(e,t,n){if(!e.length)return n();var r=0;(function i(){t(e[r],function(t){t||t===!1?(n(t),n=function(){}):(r+=1,r===e.length?n():i())})})()}function a(e,t,n){n=e;for(var r in t)if(t.hasOwnProperty(r)){n=t[r](e);if(n!==e)break}return n===e?"([._a-zA-Z0-9-]+)":n}function f(e,t){~e.indexOf("*")&&(e=e.replace(/\*/g,"([_.()!\\ %@&a-zA-Z0-9-]+)"));var n=e.match(/:([^\/]+)/ig),r;if(n){r=n.length;for(var i=0;i<r;i++)e=e.replace(n[i],a(n[i],t))}return e}Array.prototype.filter||(Array.prototype.filter=function(e,t){var n=[],r;for(var i=0,s=this.length;i<s;i++)i in this&&e.call(t,r=this[i],i,this)&&n.push(r);return n}),Array.isArray||(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});var t=document.location,n={mode:"modern",hash:location.hash,check:function(){var e=location.hash;e!=this.hash&&(this.hash=e,this.onHashChanged())},fire:function(){this.mode==="modern"?window.onhashchange():this.onHashChanged()},init:function(e){function n(){for(var e=0,t=window.Router.listeners.length;e<t;e++)window.Router.listeners[e]()}var t=this;window.Router.listeners||(window.Router.listeners=[]);if("onhashchange"in window&&(document.documentMode===undefined||document.documentMode>7))window.onhashchange=n,this.mode="modern";else{var r=document.createElement("iframe");r.id="state-frame",r.style.display="none",document.body.appendChild(r),this.writeFrame(""),"onpropertychange"in document&&"attachEvent"in document&&document.attachEvent("onpropertychange",function(){event.propertyName==="location"&&t.check()}),window.setInterval(function(){t.check()},50),this.onHashChanged=n,this.mode="legacy"}return window.Router.listeners.push(e),this.mode},destroy:function(e){if(!window.Router||!window.Router.listeners)return;var t=window.Router.listeners;for(var n=t.length-1;n>=0;n--)t[n]===e&&t.splice(n,1)},setHash:function(e){return this.mode==="legacy"&&this.writeFrame(e),location.hash=e[0]==="/"?e:"/"+e,this},writeFrame:function(e){var t=document.getElementById("state-frame"),n=t.contentDocument||t.contentWindow.document;n.open(),n.write("<script>_hash = '"+e+"'; onload = parent.listener.syncHash;<script>"),n.close()},syncHash:function(){var e=this._hash;return e!=location.hash&&(location.hash=e),this},onHashChanged:function(){}},r=e.Router=function(e){if(!(this instanceof r))return new r(e);this.params={},this.routes={},this.methods=["on","once","after","before"],this._methods={},this._insert=this.insert,this.insert=this.insertEx,this.configure(),this.mount(e||{})};r.prototype.init=function(e){var t=this;return this.handler=function(){var e=location.hash.replace(/^#/,"");t.dispatch("on",e)},location.hash===""&&e&&(location.hash=e),location.hash.length>0&&this.handler(),n.init(this.handler),this},r.prototype.explode=function(){var e=location.hash;return e[1]==="/"&&(e=e.slice(1)),e.slice(1,e.length).split("/")},r.prototype.setRoute=function(e,t,r){var i=this.explode();return typeof e=="number"&&typeof t=="string"?i[e]=t:typeof r=="string"?i.splice(e,t,s):i=[e],n.setHash(i.join("/")),i},r.prototype.insertEx=function(e,t,n,r){return e==="once"&&(e="on",n=function(e){var t=!1;return function(){if(t)return;return t=!0,e.apply(this,arguments)}}(n)),this._insert(e,t,n,r)},r.prototype.getState=function(){return this.state},r.prototype.getRoute=function(e){var t=e;if(typeof e=="number")t=this.explode()[e];else if(typeof e=="string"){var n=this.explode();t=n.indexOf(e)}else t=this.explode();return t},r.prototype.destroy=function(){return n.destroy(this.handler),this},r.prototype.configure=function(e){e=e||{};for(var t=0;t<this.methods.length;t++)this._methods[this.methods[t]]=!0;return this.recurse=e.recurse||this.recurse||!1,this.async=e.async||!1,this.delimiter=e.delimiter||"/",this.strict=typeof e.strict=="undefined"?!0:e.strict,this.notfound=e.notfound,this.resource=e.resource,this.parseBody=typeof e.parseBody=="undefined"?!0:e.parseBody,this.every={after:e.after||null,before:e.before||null,on:e.on||null},this},r.prototype.param=function(e,t){e[0]!==":"&&(e=":"+e);var n=new RegExp(e,"g");this.params[e]=function(e){return e.replace(n,t.source||t)}},r.prototype.on=r.prototype.route=function(e,t,n){var r=this;!n&&typeof t=="function"&&(n=t,t=e,e="on");if(Array.isArray(t))return t.forEach(function(t){r.on(e,t,n)});t.source&&(t=t.source.replace(/\\\//ig,"/"));if(Array.isArray(e))return e.forEach(function(e){r.on(e.toLowerCase(),t,n)});this.insert(e,this.scope.concat(t.split(new RegExp(this.delimiter))),n)},r.prototype.dispatch=function(e,t,n){function u(){r.last=i.after,r.invoke(r.runlist(i),r,n)}var r=this,i=this.traverse(e,t,this.routes,""),s=this._invoked,o;return this._invoked=!0,!i||i.length===0?(this.last=[],typeof this.notfound=="function"&&this.invoke([this.notfound],{method:e,path:t},n),!1):(this.recurse==="forward"&&(i=i.reverse()),o=this.every&&this.every.after?[this.every.after].concat(this.last):[this.last],o&&o.length>0&&s?(this.async?this.invoke(o,this,u):(this.invoke(o,this),u()),!0):(u(),!0))},r.prototype.invoke=function(e,t,n){var r=this;this.async?u(e,function s(n,r){if(Array.isArray(n))return u(n,s,r);typeof n=="function"&&n.apply(t,e.captures.concat(r))},function(){n&&n.apply(t,arguments)}):i(e,function o(n){if(Array.isArray(n))return i(n,o);if(typeof n=="function")return n.apply(t,e.captures||null);typeof n=="string"&&r.resource&&r.resource[n].apply(t,e.captures||null)})},r.prototype.traverse=function(e,t,n,r){var i=[],s,o,u,a,f;if(t===this.delimiter&&n[e])return a=[[n.before,n[e]].filter(Boolean)],a.after=[n.after].filter(Boolean),a.matched=!0,a.captures=[],a;for(var l in n)if(n.hasOwnProperty(l)&&(!this._methods[l]||this._methods[l]&&typeof n[l]=="object"&&!Array.isArray(n[l]))){s=o=r+this.delimiter+l,this.strict||(o+="["+this.delimiter+"]?"),u=t.match(new RegExp("^"+o));if(!u)continue;if(u[0]&&u[0]==t&&n[l][e])return a=[[n[l].before,n[l][e]].filter(Boolean)],a.after=[n[l].after].filter(Boolean),a.matched=!0,a.captures=u.slice(1),this.recurse&&n===this.routes&&(a.push([n.before,n.on].filter(Boolean)),a.after=a.after.concat([n.after].filter(Boolean))),a;a=this.traverse(e,t,n[l],s);if(a.matched)return a.length>0&&(i=i.concat(a)),this.recurse&&(i.push([n[l].before,n[l].on].filter(Boolean)),a.after=a.after.concat([n[l].after].filter(Boolean)),n===this.routes&&(i.push([n.before,n.on].filter(Boolean)),a.after=a.after.concat([n.after].filter(Boolean)))),i.matched=!0,i.captures=a.captures,i.after=a.after,i}return!1},r.prototype.insert=function(e,t,n,r){var i,s,o,u,a;t=t.filter(function(e){return e&&e.length>0}),r=r||this.routes,a=t.shift(),/\:|\*/.test(a)&&!/\\d|\\w/.test(a)&&(a=f(a,this.params));if(t.length>0)return r[a]=r[a]||{},this.insert(e,t,n,r[a]);if(!a&&!t.length&&r===this.routes){i=typeof r[e];switch(i){case"function":r[e]=[r[e],n];return;case"object":r[e].push(n);return;case"undefined":r[e]=n;return}return}s=typeof r[a],o=Array.isArray(r[a]);if(r[a]&&!o&&s=="object"){i=typeof r[a][e];switch(i){case"function":r[a][e]=[r[a][e],n];return;case"object":r[a][e].push(n);return;case"undefined":r[a][e]=n;return}}else if(s=="undefined"){u={},u[e]=n,r[a]=u;return}throw new Error("Invalid route context: "+s)},r.prototype.extend=function(e){var t=this,n=e.length,r;for(r=0;r<n;r++)(function(e){t._methods[e]=!0,t[e]=function(){var n=arguments.length===1?[e,""]:[e];t.on.apply(t,n.concat(Array.prototype.slice.call(arguments)))}})(e[r])},r.prototype.runlist=function(e){var t=this.every&&this.every.before?[this.every.before].concat(o(e)):o(e);return this.every&&this.every.on&&t.push(this.every.on),t.captures=e.captures,t.source=e.source,t},r.prototype.mount=function(e,t){function r(t,r){var i=t,s=t.split(n.delimiter),o=typeof e[t],u=s[0]===""||!n._methods[s[0]],a=u?"on":i;u&&(i=i.slice((i.match(new RegExp(n.delimiter))||[""])[0].length),s.shift());if(u&&o==="object"&&!Array.isArray(e[t])){r=r.concat(s),n.mount(e[t],r);return}u&&(r=r.concat(i.split(n.delimiter))),n.insert(a,r,e[t])}if(!e||typeof e!="object"||Array.isArray(e))return;var n=this;t=t||[];for(var i in e)e.hasOwnProperty(i)&&r(i,t.slice(0))}}(window),function(e){var t=function(){return+(new Date)},n="withCredentials"in new XMLHttpRequest,r={},i=function(e,i,s){i||(i=function(){}),s||(s=function(){});if(!n){s(new Error("CORS not supported."));return}var o=r[e]||new XMLHttpRequest;o._timeout&&clearTimeout(o._timeout),o._timeout=setTimeout(function(){o.abort()},15e3),o.onload=function(){clearTimeout(this._timeout),delete r[e];try{i(JSON.parse(this.responseText))}catch(t){s(t)}},o.onerror=o.onabort=o.ontimeout=function(t){clearTimeout(this._timeout),delete r[e],s(t)},o.readyState<=1&&(o.open("GET",e+"?"+t(),!0),o.send()),r[e]=o},s={url:"http://node-hnapi.herokuapp.com/",url2:"http://node-hnapi.nodester.com/",news:function(e,t){var n="news";i(s.url+n,e,function(){i(s.url2+n,e,t)})},news2:function(e,t){var n="news2";i(s.url+n,e,function(){i(s.url2+n,e,t)})},item:function(e,t,n){var r="item/"+e;i(s.url+r,t,function(){i(s.url2+r,t,n)})},comments:function(e,t,n){var r="comments/"+e;i(s.url+r,t,function(){i(s.url2+r,t,n)})}};e.hnapi=s}(window);var Hogan={};(function(e,t){function n(e,t,n){function r(){}function i(){}r.prototype=e,i.prototype=e.subs;var s,o=new r;o.subs=new i,o.ib();for(s in t)o.subs[s]=t[s];for(s in n)o.partials[s]=n[s];return o}function f(e){return String(e===null||e===undefined?"":e)}function l(e){return e=f(e),a.test(e)?e.replace(r,"&amp;").replace(i,"&lt;").replace(s,"&gt;").replace(o,"&#39;").replace(u,"&quot;"):e}e.Template=function(e,t,n,r){e=e||{},this.r=e.code||this.r,this.c=n,this.options=r,this.text=t||"",this.partials=e.partials||{},this.subs=e.subs||{},this.ib()},e.Template.prototype={r:function(e,t,n){return""},v:l,t:f,render:function(t,n,r){return this.ri([t],n||{},r)},ri:function(e,t,n){return this.r(e,t,n)},ep:function(e,t){var r=this.partials[e],i=t[r.name];if(r.instance&&r.base==i)return r.instance;if(typeof i=="string"){if(!this.c)throw new Error("No compiler available.");i=this.c.compile(i,this.options)}return i?(this.partials[e].base=i,r.subs&&(i=n(i,r.subs,r.partials)),this.partials[e].instance=i,i):null},rp:function(e,t,n,r){var i=this.ep(e,n);return i?i.ri(t,n,r):""},rs:function(e,t,n){var r=e[e.length-1];if(!c(r)){n(e,t,this);return}for(var i=0;i<r.length;i++)e.push(r[i]),n(e,t,this),e.pop()},s:function(e,t,n,r,i,s,o){var u;return c(e)&&e.length===0?!1:(typeof e=="function"&&(e=this.ms(e,t,n,r,i,s,o)),u=e===""||!!e,!r&&u&&t&&t.push(typeof e=="object"?e:t[t.length-1]),u)},d:function(e,t,n,r){var i=e.split("."),s=this.f(i[0],t,n,r),o=null;if(e==="."&&c(t[t.length-2]))return t[t.length-1];for(var u=1;u<i.length;u++)s&&typeof s=="object"&&s[i[u]]!=null?(o=s,s=s[i[u]]):s="";return r&&!s?!1:(!r&&typeof s=="function"&&(t.push(o),s=this.mv(s,t,n),t.pop()),s)},f:function(e,t,n,r){var i=!1,s=null,o=!1;for(var u=t.length-1;u>=0;u--){s=t[u];if(s&&typeof s=="object"&&s[e]!=null){i=s[e],o=!0;break}}return o?(!r&&typeof i=="function"&&(i=this.mv(i,t,n)),i):r?!1:""},ls:function(e,t,n,r,i){var s=this.options.delimiters;return this.options.delimiters=i,this.b(this.ct(f(e.call(t,r)),t,n)),this.options.delimiters=s,!1},ct:function(e,t,n){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(e,this.options).render(t,n)},b:t?function(e){this.buf.push(e)}:function(e){this.buf+=e},fl:t?function(){var e=this.buf.join("");return this.buf=[],e}:function(){var e=this.buf;return this.buf="",e},ib:function(){this.buf=t?[]:""},ms:function(e,t,n,r,i,s,o){var u=t[t.length-1],a=e.call(u);return typeof a=="function"?r?!0:this.ls(a,u,n,this.text.substring(i,s),o):a},mv:function(e,t,n){var r=t[t.length-1],i=e.call(r);return typeof i=="function"?this.ct(f(i.call(r)),r,n):i},sub:function(e,t,n){var r=this.subs[e];r&&r(t,n,this)}};var r=/&/g,i=/</g,s=/>/g,o=/\'/g,u=/\"/g,a=/[&<>\"\']/,c=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"}})(typeof exports!="undefined"?exports:Hogan),function(e){"use strict";function i(e,t,r){function i(){var r=n[e],i=function(e){return function(){throw e}},s,o;for(s=0,o=r.length;s<o;s++)try{r[s].func(e,t)}catch(u){setTimeout(i(u),0)}}return n.hasOwnProperty(e)?(r===!0?i():setTimeout(i,0),!0):!1}var t={version:"1.0.4-dev"},n={},r=-1;typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(module.exports=t),exports.PubSub=t):e.PubSub=t,t.publish=function(e,t){return i(e,t,!1)},t.publishSync=function(e,t){return i(e,t,!0)},t.subscribe=function(e,t){n.hasOwnProperty(e)||(n[e]=[]);var i=(++r).toString();return n[e].push({token:i,func:t}),i},t.unsubscribe=function(e){var t,r,i;for(t in n)if(n.hasOwnProperty(t))for(r=0,i=n[t].length;r<i;r++)if(n[t][r].token===e)return n[t].splice(r,1),e;return!1},typeof define=="function"&&define.amd&&define("pubsub",function(){return t})}(this),function(e,t){typeof define=="function"&&define.amd?define("tappable",[],function(){return t(e,window.document),e.tappable}):t(e,window.document)}(this,function(e,t){var n=Math.abs,r=function(){},i={noScroll:!1,activeClass:"tappable-active",onTap:r,onStart:r,onMove:r,onMoveOut:r,onMoveIn:r,onEnd:r,onCancel:r,allowClick:!1,boundMargin:50,noScrollDelay:0,activeClassDelay:0,inactiveClassDelay:0},s="ontouchend"in document,o={start:s?"touchstart":"mousedown",move:s?"touchmove":"mousemove",end:s?"touchend":"mouseup"},u=function(e,n){var r=t.elementFromPoint(e,n);return r.nodeType==3&&(r=r.parentNode),r},a=function(e){var t=e.target;if(t)return t;var n=e.targetTouches[0];return u(n.clientX,n.clientY)},f=function(e){return e.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")},l=function(e,t){if(!t)return;if(e.classList){e.classList.add(t);return}if(f(e.className).indexOf(t)>-1)return;e.className=f(e.className+" "+t)},c=function(e,t){if(!t)return;if(e.classList){e.classList.remove(t);return}e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)"),"$1")},h=function(e,n){var r=t.documentElement,i=r.matchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||r.msMatchesSelector;return i.call(e,n)},p=function(e,t){var n=!1;do n=h(e,t);while(!n&&(e=e.parentNode)&&e.ownerDocument);return n?e:!1};e.tappable=function(e,n){typeof n=="function"&&(n={onTap:n});var r={};for(var s in i)r[s]=n[s]||i[s];var f=r.containerElement||t.body,h,v,m,g,y,b=!1,w=!1,E=r.activeClass,S=r.activeClassDelay,x,T=r.inactiveClassDelay,N,C=r.noScroll,k=r.noScrollDelay,L,A=r.boundMargin;f.addEventListener(o.start,function(t){var n=p(a(t),e);if(!n)return;S?(clearTimeout(x),x=setTimeout(function(){l(n,E)},S)):l(n,E),T&&n==v&&clearTimeout(N),m=t.clientX,g=t.clientY;if(!m||!g){var i=t.targetTouches[0];m=i.clientX,g=i.clientY}h=n,b=!1,w=!1,y=C?n.getBoundingClientRect():null,k&&(clearTimeout(L),C=!1,L=setTimeout(function(){C=!0},k)),r.onStart.call(f,t,n)},!1),f.addEventListener(o.move,function(e){if(!h)return;C?e.preventDefault():clearTimeout(x);var t=e.target,n=e.clientX,i=e.clientY;if(!t||!n||!i){var s=e.changedTouches[0];n||(n=s.clientX),i||(i=s.clientY),t||(t=u(n,i))}C?n>y.left-A&&n<y.right+A&&i>y.top-A&&i<y.bottom+A?(w=!1,l(h,E),r.onMoveIn.call(f,e,t)):(w=!0,c(h,E),r.onMoveOut.call(f,e,t)):!b&&Math.abs(i-g)>10&&(b=!0,c(h,E),r.onCancel.call(t,e)),r.onMove.call(f,e,t)},!1),f.addEventListener(o.end,function(e){if(!h)return;clearTimeout(x);if(T){S&&!b&&l(h,E);var t=h;N=setTimeout(function(){c(t,E)},T)}else c(h,E);r.onEnd.call(f,e,h);var n=e.which==3||e.button==2;!b&&!w&&!n&&r.onTap.call(f,e,h),v=h,h=null,setTimeout(function(){m=g=null},400)},!1),f.addEventListener("touchcancel",function(e){if(!h)return;c(h,E),h=m=g=null,r.onCancel.call(f,e)},!1),r.allowClick||f.addEventListener("click",function(t){var n=p(t.target,e);n?t.preventDefault():m&&g&&Math.abs(t.clientX-m)<25&&Math.abs(t.clientY-g)<25&&(t.stopPropagation(),t.preventDefault())},!1)}}),function(e,t){function n(e,t){e.push.apply(e,t?{}.toString.call(t)=="[object Array]"?t:[t]:[])}function r(e,t,n){for(var r=0,i=e.length;r<i;++r)e[r].call(t,n)}function i(e){if(!(this instanceof i))return new i(e);this.object=e.object,this.property=e.property,this.from=this._from=e.from||this.object[this.property],this.to={}.toString.call(e.to)=="[object Array]"?e.to:[e.to],this.target=0,this.parser=e.parser||function(e){var t=i.Parsers,n,r=[],s,o;for(s in t)t.hasOwnProperty(s)&&r.push(t[s]);r.sort(function(e,t){return(t.priority||0)-(e.priority||0)});for(s=0,o=r.length;s<o;++s){n=new r[s];if(n.parse(e)!=null)return n}return n=new t.Number,n.parse(e),n}(this.from),this.transition=e.transition||i.Transitions.linear,this.duration=e.duration||500,this.fps=e.fps||40,this.frameInterval=1e3/this.fps,this.frames=e.frames||~~(this.duration/this.frameInterval+.5),this.frame=e.frame==t?-1:0,this.running=!1,this.startHandlers=[],this.updateHandlers=[],this.finishHandlers=[],n(this.startHandlers,e.start),n(this.updateHandlers,e.update),n(this.finishHandlers,e.finish)}function f(e,t,n){return(t-e)*n+e}var s=i.prototype,o,u,a=e.Viper;s.start=function(){return this.running||(this.resume(),r(this.startHandlers,this,this.object)),this},s.stop=function(){return this.running&&(this.pause(),r(this.finishHandlers,this,this.object)),this},s.pause=function(e){if(this.running){this.running=this.time=!1,clearInterval(this.timer);var n=this;e!=t&&setTimeout(function(){n.resume()},e)}return this},s.resume=function(){if(!this.running&&this.frame<this.frames){var e=this;this.timer=setInterval(function(){e.step(+(new Date))},this.frameInterval),this.running=!0}return this},s.step=function(e){this.frame+=(e-(this.time||e))/this.frameInterval,this.time=e,this.object[this.property]=this.parser.compute(this.from,this.to[this.target],this.frame<this.frames?this.transition(this.frame/this.frames):1),r(this.updateHandlers,this,this.object),this.frame>=this.frames&&(this.frame=this.time=0,this.parser.parse(this.from=this.to[this.target++]),this.to[this.target]==t&&(this.parser.parse(this.from=this._from),this.target=0,this.stop()))},i.Transitions={linear:function(e){return e},sine:function(e){return 1-Math.cos(e*Math.PI/2)},elastic:function(e){return Math.pow(2,10*--e)*Math.cos(20*e*Math.PI/3)},bounce:function(e){var t=0,n=1,r;while(e<(7-4*t)/11)t+=n,n/=2;return r=(11-6*t-11*e)/4,n*n-r*r}};for(u in i.Transitions)i.Transitions.hasOwnProperty(u)&&(o=i.Transitions[u],o.out=function(e){return function(t){return 1-e(1-t)}}(o),o.inOut=function(e){return function(t){return(t>.5?2-e(2*(1-t)):e(2*t))/2}}(o));i.Parsers={Number:function(){this.parse=function(e,n){e+="";var r=/(\D*)(\d+)(.*)?/.exec(e)||[,,0/0],i=parseFloat(r[2]);return n||(this.prefix=r[1]||"",this.suffix=r[3]||"",this.value=i),isNaN(i)?t:i},this.compute=function(e,t,n){return this.prefix+f(this.value,this.parse(t,!0),n)+this.suffix}},Color:function(){this.parse=function(e,t){var n=parseInt,r;if(/^#[\da-f]{6}$/i.test(e))r=[n(e.substring(1,3),16),n(e.substring(3,5),16),n(e.substring(5,7),16)];else if(r=/^(rgb\()?(\d+),\s*(\d+),\s*(\d+)\)?$/.exec(e))r=[n(r[2]),n(r[3]),n(r[4])];return t||(this.value=r),r},this.compute=function(e,t,n){for(var r=[],i=this.parse(t,!0),s=0,o=this.value.length;s<o;++s)r.push(~~(f(this.value[s],i[s],n)+.5));return"rgb("+r+")"}},String:function(){this.parse=function(e){return""+e},this.compute=function(e,t,n){e+="",t+="";var r=~~(t.length*n+.5);return t.substr(0,r)+e.substr(r,e.length-r-~~((e.length-t.length)*n+.5))}}},i.Parsers.Color.priority=1,i.Parsers.String.priority=-9,i.noConflict=function(){return e.Viper=a,i},e.Viper=i}(this)