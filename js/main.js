"use strict";var utils=utils||{animationFrames:function(){window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame},hasClass:function(e,t){var n=new RegExp("(?:\\s|^)"+t+"(?:\\s|$)");return!!e.className.match(n)},addClass:function(e,t){e.className+=" "+t},removeClass:function(e,t){var n=new RegExp("(?:\\s|^)"+t+"(?:\\s|$)");e.className=e.className.replace(n," ")},toggleClass:function(e,t){this.hasClass(e,t)?this.removeClass(e,t):this.addClass(e,t)},getNextElementSibling:function(e){if(e.nextElementSibling)return e.nextElementSibling;do e=e.nextSibling;while(e&&1!==e.nodeType);return e},getPreviousElementSibling:function(e){if(e.PreviousElementSibling)return e.PreviousElementSibling;do e=e.previousSibling;while(e&&1!==e.nodeType);return e},elementInViewport:function(e){var t=void 0,n=void 0;return e&&1===e.nodeType?(n=document.documentElement,t=e.getBoundingClientRect(),!!t&&t.bottom>=0&&t.right>=0&&t.top<=n.clientHeight&&t.left<=n.clientWidth):!1},sameHeight:function(e){for(var t=0,n=0;n<e.length;n++){var r=e[n].offsetHeight;r>t&&(t=r)}for(var n=0;n<e.length;n++)e[n].style.height=t+"px"}},app=app||{init:function(){utils.animationFrames(),this.columnsHP(document.documentElement),this.introFade(),this.lazyLoad(),this.gridSameHeight(),this.blurScrollTopLink()},columnsHP:function(e){function t(){if(!("flexWrap"in n||"WebkitFlexWrap"in n||"MozFlexWrap"in n||"msFlexWrap"in n))if(window.matchMedia("(min-width: 68.75em)").matches){for(var e=0;e<r.length;e++)r[e].style.height="auto";utils.sameHeight(r)}else for(var e=0;e<r.length;e++)r[e].style.height="auto"}var n=e.style,r=document.querySelectorAll(".cats-hp li");window.addEventListener("resize",t),window.addEventListener("load",t)},introFade:function(){function e(){if(n){var e=(i/n.offsetHeight).toFixed(5);window.matchMedia("(min-width: 75em)").matches&&i<n.offsetHeight?t.style.opacity=1-e*r:t.style.opacity=1}}var t=document.getElementById("intro__inner"),n=document.getElementById("intro"),r=2,i=window.pageYOffset;document.addEventListener("scroll",function(){n&&(requestAnimationFrame?requestAnimationFrame(e):e(),i=window.pageYOffset)}),window.addEventListener("resize",e),window.addEventListener("load",e)},lazyLoad:function(){function e(){for(var e=function(e){if(utils.elementInViewport(t[e])){var n=t[e].getAttribute("data-src");t[e].src=n,t[e].addEventListener("load",function(){utils.getNextElementSibling(t[e]).style.display="none"}),utils.removeClass(t[e],"lazy")}},n=0;n<t.length;n++)e(n)}var t=document.querySelectorAll(".lazy");e(),window.addEventListener("scroll",function(){requestAnimationFrame?requestAnimationFrame(e):e()})},gridSameHeight:function(){function e(){if(window.matchMedia("(min-width: 31.25em)").matches){for(var e=0;e<t.length;e++)t[e].style.height="auto";utils.sameHeight(t)}else for(var e=0;e<t.length;e++)t[e].style.height="auto"}var t=document.querySelectorAll(".grid-posts__link");window.addEventListener("resize",e,!1),window.addEventListener("load",e,!1)},blurScrollTopLink:function(){var e=document.querySelector(".main-footer__logo");e.addEventListener("click",function(){e.blur()})}};app.init(),function(){function e(e){this.a=s,this.b=void 0,this.d=[];var t=this;try{e(function(e){r(t,e)},function(e){i(t,e)})}catch(n){i(t,n)}}function t(t){return new e(function(e,n){n(t)})}function n(t){return new e(function(e){e(t)})}function r(e,t){if(e.a===s){if(t===e)throw new TypeError("Promise resolved with itself.");var n=!1;try{var a=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof a)return void a.call(t,function(t){n||r(e,t),n=!0},function(t){n||i(e,t),n=!0})}catch(c){return void(n||i(e,c))}e.a=0,e.b=t,o(e)}}function i(e,t){if(e.a===s){if(t===e)throw new TypeError("Promise rejected with itself.");e.a=1,e.b=t,o(e)}}function o(e){setTimeout(function(){if(e.a!==s)for(;e.d.length;){var t=e.d.shift(),n=t[0],r=t[1],i=t[2],t=t[3];try{0===e.a?i("function"==typeof n?n.call(void 0,e.b):e.b):1===e.a&&("function"==typeof r?i(r.call(void 0,e.b)):t(e.b))}catch(o){t(o)}}},0)}function a(t){return new e(function(e,n){function r(n){return function(r){o[n]=r,i+=1,i===t.length&&e(o)}}var i=0,o=[];0===t.length&&e(o);for(var a=0;a<t.length;a+=1)t[a].c(r(a),n)})}function c(t){return new e(function(e,n){for(var r=0;r<t.length;r+=1)t[r].c(e,n)})}var s=2;e.prototype.e=function(e){return this.c(void 0,e)},e.prototype.c=function(t,n){var r=this;return new e(function(e,i){r.d.push([t,n,e,i]),o(r)})},window.Promise||(window.Promise=e,window.Promise.resolve=n,window.Promise.reject=t,window.Promise.race=c,window.Promise.all=a,window.Promise.prototype.then=e.prototype.c,window.Promise.prototype["catch"]=e.prototype.e)}(),function(){function e(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.f=document.createElement("span"),this.e=document.createElement("span"),this.d=-1,this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.e.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.f.style.cssText="display:inline-block;width:200%;height:200%;",this.b.appendChild(this.f),this.c.appendChild(this.e),this.a.appendChild(this.b),this.a.appendChild(this.c)}function t(e,t,n){e.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;visibility:hidden;position:absolute;width:auto;margin:0;padding:0;top:0;white-space:nowrap;font-size:100px;font-family:"+t+";"+n}function n(e){var t=e.a.offsetWidth,n=t+100;return e.e.style.width=n+"px",e.c.scrollLeft=n,e.b.scrollLeft=e.b.scrollWidth+100,e.d!==t?(e.d=t,!0):!1}function r(e,t){e.b.addEventListener("scroll",function(){n(e)&&null!==e.a.parentNode&&t(e.d)},!1),e.c.addEventListener("scroll",function(){n(e)&&null!==e.a.parentNode&&t(e.d)},!1),n(e)}function i(e,t){this.family=e,this.style=t.style||"normal",this.variant=t.variant||"normal",this.weight=t.weight||"normal",this.stretch=t.stretch||"stretch",this.featureSettings=t.featureSettings||"normal"}var o=null;i.prototype.a=function(n){n=n||"BESbswy";var i="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",a=document.createElement("div"),c=new e(n),s=new e(n),l=new e(n),u=-1,d=-1,f=-1,p=-1,h=-1,b=-1,m=this;return t(c,"sans-serif",i),t(s,"serif",i),t(l,"monospace",i),a.appendChild(c.a),a.appendChild(s.a),a.appendChild(l.a),document.body.appendChild(a),p=c.a.offsetWidth,h=s.a.offsetWidth,b=l.a.offsetWidth,new Promise(function(e,n){function g(){null!==a.parentNode&&document.body.removeChild(a)}function v(){if(-1!==u&&-1!==d&&-1!==f&&u===d&&d===f){if(null===o){var t=/AppleWeb[kK]it\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);o=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}o?u===p&&d===p&&f===p||u===h&&d===h&&f===h||u===b&&d===b&&f===b||(g(),e(m)):(g(),e(m))}}setTimeout(function(){g(),n(m)},3e3),r(c,function(e){u=e,v()}),t(c,m.family+",sans-serif",i),r(s,function(e){d=e,v()}),t(s,m.family+",serif",i),r(l,function(e){f=e,v()}),t(l,m.family+",monospace",i)})},window.FontFaceObserver=i,window.FontFaceObserver.prototype.check=i.prototype.a}(),function(e){if(!(e.document.documentElement.className.indexOf("fonts-loaded")>-1)){var t=new e.FontFaceObserver("Source Sans Pro",{weight:400}),n=new e.FontFaceObserver("Source Sans Pro",{weight:900}),r=new e.FontFaceObserver("Gentium Basic",{weight:400}),i=new e.FontFaceObserver("Gentium Basic",{weight:400,style:"italic"}),o=new e.FontFaceObserver("Gentium Basic",{weight:700});e.Promise.all([t.check(),n.check(),r.check(),,i.check(),,o.check()]).then(function(){e.document.documentElement.className+=" fonts-loaded"})}}(this),document.cookie="fonts-loaded=true",!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return window.hljs}))}(function(e){function t(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function n(e){return e.nodeName.toLowerCase()}function r(e,t){var n=e&&e.exec(t);return n&&0==n.index}function i(e){var t=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return t=t.map(function(e){return e.replace(/^lang(uage)?-/,"")}),t.filter(function(e){return w(e)||/no(-?)highlight|plain|text/.test(e)})[0]}function o(e,t){var n,r={};for(n in e)r[n]=e[n];if(t)for(n in t)r[n]=t[n];return r}function a(e){var t=[];return function r(e,i){for(var o=e.firstChild;o;o=o.nextSibling)3==o.nodeType?i+=o.nodeValue.length:1==o.nodeType&&(t.push({event:"start",offset:i,node:o}),i=r(o,i),n(o).match(/br|hr|img|input/)||t.push({event:"stop",offset:i,node:o}));return i}(e,0),t}function c(e,r,i){function o(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function a(e){function r(e){return" "+e.nodeName+'="'+t(e.value)+'"'}u+="<"+n(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function c(e){u+="</"+n(e)+">"}function s(e){("start"==e.event?a:c)(e.node)}for(var l=0,u="",d=[];e.length||r.length;){var f=o();if(u+=t(i.substr(l,f[0].offset-l)),l=f[0].offset,f==e){d.reverse().forEach(c);do s(f.splice(0,1)[0]),f=o();while(f==e&&f.length&&f[0].offset==l);d.reverse().forEach(a)}else"start"==f[0].event?d.push(f[0].node):d.pop(),s(f.splice(0,1)[0])}return u+t(i.substr(l))}function s(e){function t(e){return e&&e.source||e}function n(n,r){return new RegExp(t(n),"m"+(e.cI?"i":"")+(r?"g":""))}function r(i,a){if(!i.compiled){if(i.compiled=!0,i.k=i.k||i.bK,i.k){var c={},s=function(t,n){e.cI&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");c[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof i.k?s("keyword",i.k):Object.keys(i.k).forEach(function(e){s(e,i.k[e])}),i.k=c}i.lR=n(i.l||/\b\w+\b/,!0),a&&(i.bK&&(i.b="\\b("+i.bK.split(" ").join("|")+")\\b"),i.b||(i.b=/\B|\b/),i.bR=n(i.b),i.e||i.eW||(i.e=/\B|\b/),i.e&&(i.eR=n(i.e)),i.tE=t(i.e)||"",i.eW&&a.tE&&(i.tE+=(i.e?"|":"")+a.tE)),i.i&&(i.iR=n(i.i)),void 0===i.r&&(i.r=1),i.c||(i.c=[]);var l=[];i.c.forEach(function(e){e.v?e.v.forEach(function(t){l.push(o(e,t))}):l.push("self"==e?i:e)}),i.c=l,i.c.forEach(function(e){r(e,i)}),i.starts&&r(i.starts,a);var u=i.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([i.tE,i.i]).map(t).filter(Boolean);i.t=u.length?n(u.join("|"),!0):{exec:function(){return null}}}}r(e)}function l(e,n,i,o){function a(e,t){for(var n=0;n<t.c.length;n++)if(r(t.c[n].bR,e))return t.c[n]}function c(e,t){if(r(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?c(e.parent,t):void 0}function d(e,t){return!i&&r(t.iR,e)}function f(e,t){var n=x.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(n)&&e.k[n]}function p(e,t,n,r){var i=r?"":y.classPrefix,o='<span class="'+i,a=n?"":"</span>";return o+=e+'">',o+t+a}function h(){if(!E.k)return t(M);var e="",n=0;E.lR.lastIndex=0;for(var r=E.lR.exec(M);r;){e+=t(M.substr(n,r.index-n));var i=f(E,r);i?(L+=i[1],e+=p(i[0],t(r[0]))):e+=t(r[0]),n=E.lR.lastIndex,r=E.lR.exec(M)}return e+t(M.substr(n))}function b(){if(E.sL&&!N[E.sL])return t(M);var e=E.sL?l(E.sL,M,!0,S[E.sL]):u(M);return E.r>0&&(L+=e.r),"continuous"==E.subLanguageMode&&(S[E.sL]=e.top),p(e.language,e.value,!1,!0)}function m(){return void 0!==E.sL?b():h()}function g(e,n){var r=e.cN?p(e.cN,"",!0):"";e.rB?(C+=r,M=""):e.eB?(C+=t(n)+r,M=""):(C+=r,M=n),E=Object.create(e,{parent:{value:E}})}function v(e,n){if(M+=e,void 0===n)return C+=m(),0;var r=a(n,E);if(r)return C+=m(),g(r,n),r.rB?0:n.length;var i=c(E,n);if(i){var o=E;o.rE||o.eE||(M+=n),C+=m();do E.cN&&(C+="</span>"),L+=E.r,E=E.parent;while(E!=i.parent);return o.eE&&(C+=t(n)),M="",i.starts&&g(i.starts,""),o.rE?0:n.length}if(d(n,E))throw new Error('Illegal lexeme "'+n+'" for mode "'+(E.cN||"<unnamed>")+'"');return M+=n,n.length||1}var x=w(e);if(!x)throw new Error('Unknown language: "'+e+'"');s(x);var k,E=o||x,S={},C="";for(k=E;k!=x;k=k.parent)k.cN&&(C=p(k.cN,"",!0)+C);var M="",L=0;try{for(var _,z,A=0;E.t.lastIndex=A,_=E.t.exec(n),_;)z=v(n.substr(A,_.index-A),_[0]),A=_.index+z;for(v(n.substr(A)),k=E;k.parent;k=k.parent)k.cN&&(C+="</span>");return{r:L,value:C,language:e,top:E}}catch(I){if(-1!=I.message.indexOf("Illegal"))return{r:0,value:t(n)};throw I}}function u(e,n){n=n||y.languages||Object.keys(N);var r={r:0,value:t(e)},i=r;return n.forEach(function(t){if(w(t)){var n=l(t,e,!1);n.language=t,n.r>i.r&&(i=n),n.r>r.r&&(i=r,r=n)}}),i.language&&(r.second_best=i),r}function d(e){return y.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t){return t.replace(/\t/g,y.tabReplace)})),y.useBR&&(e=e.replace(/\n/g,"<br>")),e}function f(e,t,n){var r=t?x[t]:n,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),-1===e.indexOf(r)&&i.push(r),i.join(" ").trim()}function p(e){var t=i(e);if(!/no(-?)highlight|plain|text/.test(t)){var n;y.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e;var r=n.textContent,o=t?l(t,r,!0):u(r),s=a(n);if(s.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=o.value,o.value=c(s,a(p),r)}o.value=d(o.value),e.innerHTML=o.value,e.className=f(e.className,t,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function h(e){y=o(y,e)}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function m(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)}function g(t,n){var r=N[t]=n(e);r.aliases&&r.aliases.forEach(function(e){x[e]=t})}function v(){return Object.keys(N)}function w(e){return N[e]||N[x[e]]}var y={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},N={},x={};return e.highlight=l,e.highlightAuto=u,e.fixMarkup=d,e.highlightBlock=p,e.configure=h,e.initHighlighting=b,e.initHighlightingOnLoad=m,e.registerLanguage=g,e.listLanguages=v,e.getLanguage=w,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},e.C=function(t,n,r){var i=e.inherit({cN:"comment",b:t,e:n,c:[]},r||{});return i.c.push(e.PWM),i},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e}),hljs.registerLanguage("nginx",function(e){var t={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+e.UIR}]},n={eW:!0,l:"[a-z/_]+",k:{built_in:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[e.HCM,{cN:"string",c:[e.BE,t],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{cN:"url",b:"([a-z]+):/",e:"\\s",eW:!0,eE:!0,c:[t]},{cN:"regexp",c:[e.BE,t],v:[{b:"\\s\\^",e:"\\s|{|;",rE:!0},{b:"~\\*?\\s+",e:"\\s|{|;",rE:!0},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},t]};return{aliases:["nginxconf"],c:[e.HCM,{b:e.UIR+"\\s",e:";|{",rB:!0,c:[{cN:"title",b:e.UIR,starts:n}],r:0}],i:"[^\\s\\}]"}}),hljs.registerLanguage("xml",function(e){var t="[A-Za-z0-9\\._:-]+",n={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"},r={eW:!0,i:/</,r:0,c:[n,{cN:"attribute",b:t,r:0},{b:"=",r:0,c:[{cN:"value",c:[n],v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("<!--","-->",{r:10}),{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[r],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[r],starts:{e:"</script>",rE:!0,sL:""}},n,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},r]}]}}),hljs.registerLanguage("php",function(e){var t={cN:"variable",b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},n={cN:"preprocessor",b:/<\?(php)?|\?>/},r={cN:"string",c:[e.BE,n],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},i={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.CLCM,e.HCM,e.C("/\\*","\\*/",{c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"},n]}),e.C("__halt_compiler.+?;",!1,{eW:!0,k:"__halt_compiler",l:e.UIR}),{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[e.BE]},n,t,{b:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",t,e.CBCM,r,i]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},r,i]}}),hljs.registerLanguage("ini",function(e){return{cI:!0,i:/\S/,c:[e.C(";","$"),{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:!0,k:"on off true false yes no",c:[e.QSM,e.NM],r:0}]}]}}),hljs.registerLanguage("json",function(e){var t={literal:"true false null"},n=[e.QSM,e.CNM],r={cN:"value",e:",",eW:!0,eE:!0,c:n,k:t},i={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:!0,eE:!0,c:[e.BE],i:"\\n",starts:r}],i:"\\S"},o={b:"\\[",e:"\\]",c:[e.inherit(r,{cN:null})],i:"\\S"};return n.splice(n.length,0,i,o),{c:n,k:t,i:"\\S"}}),hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},n={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},r={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,e.NM,n,r,t]}}),hljs.registerLanguage("python",function(e){var t={cN:"prompt",b:/^(>>>|\.\.\.) /},n={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[t],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[t],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},e.ASM,e.QSM]},r={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},i={cN:"params",b:/\(/,e:/\)/,c:["self",t,r,n]};return{aliases:["py","gyp"],k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)/,c:[t,r,n,e.HCM,{v:[{cN:"function",bK:"def",r:10},{cN:"class",bK:"class"}],e:/:/,i:/[${=;\n,]/,c:[e.UTM,i]},{cN:"decorator",b:/@/,e:/$/},{b:/\b(print|exec)\(/}]}}),hljs.registerLanguage("apache",function(e){var t={cN:"number",b:"[\\$%]\\d+"};return{aliases:["apacheconf"],cI:!0,c:[e.HCM,{cN:"tag",b:"</?",e:">"},{cN:"keyword",b:/\w+/,r:0,k:{common:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"sqbracket",b:"\\s\\[",e:"\\]$"},{cN:"cbracket",b:"[\\$%]\\{",e:"\\}",c:["self",t]},t,e.QSM]}}],i:/\S/}}),hljs.registerLanguage("http",function(e){return{aliases:["https"],i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:!0}}]}}),hljs.registerLanguage("javascript",function(e){return{aliases:["js"],k:{keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},c:[{cN:"pi",r:10,v:[{b:/^\s*('|")use strict('|")/},{b:/^\s*('|")use asm('|")/}]},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",b:"\\b(0[xXbBoO][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/>\s*[);\]]/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[e.CLCM,e.CBCM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+e.IR,r:0},{bK:"import",e:"[;$]",k:"import from as",c:[e.ASM,e.QSM]},{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]}]}}),hljs.registerLanguage("markdown",function(e){return{aliases:["md","mkdown","mkd"],c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|	)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:"^\\[.+\\]:",rB:!0,c:[{cN:"link_reference",b:"\\[",e:"\\]:",eB:!0,eE:!0,starts:{cN:"link_url",e:"$"}}]}]}}),hljs.registerLanguage("scss",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",n={cN:"variable",b:"(\\$"+t+")\\b"},r={cN:"function",b:t+"\\(",rB:!0,eE:!0,e:"\\("},i={cN:"hexcolor",b:"#[0-9A-Fa-f]+"};return{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{cN:"value",eW:!0,eE:!0,c:[r,i,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"important",b:"!important"}]}},{cI:!0,i:"[=/|']",c:[e.CLCM,e.CBCM,r,{cN:"id",b:"\\#[A-Za-z0-9_-]+",r:0},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"tag",b:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",r:0},{cN:"pseudo",b:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"},{cN:"pseudo",b:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"},n,{cN:"attribute",b:"\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",i:"[^\\s]"},{cN:"value",b:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{cN:"value",b:":",e:";",c:[r,n,i,e.CSSNM,e.QSM,e.ASM,{cN:"important",b:"!important"}]},{cN:"at_rule",b:"@",e:"[{;]",k:"mixin include extend for if else each while charset import debug media page content font-face namespace warn",c:[r,n,e.QSM,e.ASM,i,e.CSSNM,{cN:"preprocessor",b:"\\s[A-Za-z0-9_.-]+",r:0}]}]}}),hljs.registerLanguage("makefile",function(e){var t={cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]};return{aliases:["mk","mak"],c:[e.HCM,{b:/^\w+\s*\W*=/,rB:!0,r:0,starts:{cN:"constant",e:/\s*\W*=/,eE:!0,starts:{e:/$/,r:0,c:[t]}}},{cN:"title",b:/^[\w]+:\s*$/},{cN:"phony",b:/^\.PHONY:/,e:/$/,k:".PHONY",l:/[\.\w]+/},{b:/^\t+/,e:/$/,r:0,c:[e.QSM,t]}]}}),hljs.registerLanguage("css",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",n={cN:"function",b:t+"\\(",rB:!0,eE:!0,e:"\\("},r={cN:"rule",b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{cN:"value",eW:!0,eE:!0,c:[n,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]};return{cI:!0,i:/[=\/|']/,c:[e.CBCM,r,{cN:"id",b:/\#[A-Za-z0-9_-]+/},{cN:"class",b:/\.[A-Za-z0-9_-]+/,r:0},{cN:"attr_selector",b:/\[/,e:/\]/,i:"$"},{cN:"pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[n,e.ASM,e.QSM,e.CSSNM]}]},{cN:"tag",b:t,r:0},{cN:"rules",b:"{",e:"}",i:/\S/,r:0,c:[e.CBCM,r]}]}}),hljs.initHighlightingOnLoad(),!function e(t,n,r){function i(a,c){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return i(n?n:e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i;
}({1:[function(e,t){t.exports=function(){function e(e){return 200==e.status&&4==e.readyState}function t(t,n){t.onreadystatechange=function(){if(e(t))try{n(null,JSON.parse(t.responseText))}catch(r){n(r,null)}}}var n=this;n.load=function(e,n){var r=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");r.open("GET",e,!0),t(r,n),r.send()}}},{}],2:[function(e,t){function n(){function e(e){return new RegExp(e.split("").join(".*?"),"gi")}var t=this;t.matches=function(t,n){return"string"!=typeof t?!1:(t=t.trim(),!!t.match(e(n)))}}t.exports=new n},{}],3:[function(e,t){function n(){function e(e,t){return e.toLowerCase().indexOf(t.toLowerCase())>=0}var t=this;t.matches=function(t,n){return"string"!=typeof t?!1:(t=t.trim(),e(t,n))}}t.exports=new n},{}],4:[function(e,t){t.exports=function(){function t(e,t,r){for(var i=e.get(),a=0;a<i.length&&o.length<c;a++)n(i[a],t,r);return o}function n(e,t,n){for(var r in e)if(n.matches(e[r],t)){o.push(e);break}}function r(){return a?s:l}var i=this,o=[],a=!1,c=10,s=e("./SearchStrategies/fuzzy"),l=e("./SearchStrategies/literal");i.setFuzzy=function(e){a=!!e},i.setLimit=function(e){c=parseInt(e,10)||c},i.search=function(e,n){return n?(o.length=0,t(e,n,r())):[]}}},{"./SearchStrategies/fuzzy":2,"./SearchStrategies/literal":3}],5:[function(e,t){t.exports=function(e){function t(e){return!!e&&"[object Object]"==Object.prototype.toString.call(e)}function n(e){return!!e&&"[object Array]"==Object.prototype.toString.call(e)}function r(e){return a.push(e),e}function i(e){for(var n=[],i=0;i<e.length;i++)t(e[i])&&n.push(r(e[i]));return n}var o=this,a=[];n(e)&&i(e),o.clear=function(){return a.length=0,a},o.get=function(){return a},o.put=function(e){return t(e)?r(e):n(e)?i(e):void 0}}},{}],6:[function(e,t){t.exports=function(){var e=this,t=/\{(.*?)\}/g;e.setTemplatePattern=function(e){t=e},e.render=function(e,n){return e.replace(t,function(e,t){return n[t]||e})}}},{}],7:[function(e){!function(t){function n(){function e(){l.put(m.dataSource),f()}function t(e){u.load(e,function(t,r){t?n("failed to get JSON ("+e+")"):(l.put(r),f())})}function n(e){throw new Error("SimpleJekyllSearch --- "+e)}function r(e){for(var t=0;t<b.length;t++){var r=b[t];e[r]||n("You must specify a "+r)}}function i(e){for(var t in m)m[t]=e[t]||m[t]}function o(e){try{return e instanceof Object&&JSON.parse(JSON.stringify(e))}catch(t){return!1}}function a(){m.resultsContainer.innerHTML=""}function d(e){m.resultsContainer.innerHTML+=e}function f(){m.searchInput.addEventListener("keyup",function(e){return 0==e.target.value.length?void a():void p(c.search(l,e.target.value))})}function p(e){if(a(),0==e.length)return d(m.noResultsText);for(var t=0;t<e.length;t++)d(s.render(m.searchResultTemplate,e[t]))}var h=this,b=["searchInput","resultsContainer","dataSource"],m={searchInput:null,resultsContainer:null,dataSource:[],searchResultTemplate:'<li><a href="{url}" title="{desc}">{title}</a></li>',noResultsText:"No results found",limit:10,fuzzy:!1};h.init=function(n){r(n),i(n),o(m.dataSource)?e(m.dataSource):t(m.dataSource)}}var r=e("./Searcher"),i=e("./Templater"),o=e("./Store"),a=e("./JSONLoader"),c=new r,s=new i,l=new o,u=new a;t.SimpleJekyllSearch=new n}(window,document)},{"./JSONLoader":1,"./Searcher":4,"./Store":5,"./Templater":6}]},{},[7]);var jekyllInput=document.getElementById("search-input");jekyllInput&&SimpleJekyllSearch.init({searchInput:document.getElementById("search-input"),resultsContainer:document.getElementById("results-container"),dataSource:"/articles/search.json",searchResultTemplate:'<li><a href="{url}" title="{desc}">{title}</a></li>',noResultsText:"<li>Aucun résultat trouvé</li>",limit:10,fuzzy:!1}),function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}(this,function(e){var t,n,r,i,o={},a=!!document.querySelector&&!!e.addEventListener,c={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callbackBefore:function(){},callbackAfter:function(){}},s=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(n,e[r],r,e);else for(var i=0,o=e.length;o>i;i++)t.call(n,e[i],i,e)},l=function(e,t){var n={};return s(e,function(t,r){n[r]=e[r]}),s(t,function(e,r){n[r]=t[r]}),n},u=function(e,t){for(var n=t.charAt(0);e&&e!==document;e=e.parentNode)if("."===n){if(e.classList.contains(t.substr(1)))return e}else if("#"===n){if(e.id===t.substr(1))return e}else if("["===n&&e.hasAttribute(t.substr(1,t.length-2)))return e;return!1},d=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e){for(var t,n=String(e),r=n.length,i=-1,o="",a=n.charCodeAt(0);++i<r;){if(t=n.charCodeAt(i),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=t>=1&&31>=t||127==t||0===i&&t>=48&&57>=t||1===i&&t>=48&&57>=t&&45===a?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(i):"\\"+n.charAt(i)}return o},p=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},h=function(e,t,n){var r=0;if(e.offsetParent)do r+=e.offsetTop,e=e.offsetParent;while(e);return r=r-t-n,r>=0?r:0},b=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},m=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},g=function(t,n){history.pushState&&(n||"true"===n)&&history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))},v=function(e){return null===e?0:d(e)+e.offsetTop};o.animateScroll=function(t,n,o){var a=l(a||c,o||{}),s=m(t?t.getAttribute("data-options"):null);a=l(a,s),n="#"+f(n.substr(1));var u="#"===n?document.documentElement:document.querySelector(n),d=e.pageYOffset;r||(r=document.querySelector("[data-scroll-header]")),i||(i=v(r));var w,y,N,x=h(u,i,parseInt(a.offset,10)),k=x-d,E=b(),S=0;g(n,a.updateURL);var C=function(r,i,o){var c=e.pageYOffset;(r==i||c==i||e.innerHeight+c>=E)&&(clearInterval(o),u.focus(),a.callbackAfter(t,n))},M=function(){S+=16,y=S/parseInt(a.speed,10),y=y>1?1:y,N=d+k*p(a.easing,y),e.scrollTo(0,Math.floor(N)),C(N,x,w)},L=function(){a.callbackBefore(t,n),w=setInterval(M,16)};0===e.pageYOffset&&e.scrollTo(0,0),L()};var w=function(e){var n=u(e.target,"[data-scroll]");n&&"a"===n.tagName.toLowerCase()&&(e.preventDefault(),o.animateScroll(n,n.hash,t))},y=function(e){n||(n=setTimeout(function(){n=null,i=v(r)},66))};return o.destroy=function(){t&&(document.removeEventListener("click",w,!1),e.removeEventListener("resize",y,!1),t=null,n=null,r=null,i=null)},o.init=function(n){a&&(o.destroy(),t=l(c,n||{}),r=document.querySelector("[data-scroll-header]"),i=v(r),document.addEventListener("click",w,!1),r&&e.addEventListener("resize",y,!1))},o}),smoothScroll.init();