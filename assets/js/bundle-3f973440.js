!function e(t,n,r){function i(a,l){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!l&&c)return c(a,!0);if(o)return o(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return i(n||e)},u,u.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){!function(){function e(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function n(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t),e()}):document.attachEvent("onreadystatechange",function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),e())})}function r(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function i(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";"}function o(e){var t=e.a.offsetWidth,n=t+100;return e.f.style.width=n+"px",e.c.scrollLeft=n,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t&&(e.g=t,!0)}function a(t,n){function r(){var e=i;o(e)&&e.a.parentNode&&n(e.g)}var i=t;e(t.b,r),e(t.c,r),o(t)}function l(e,t){var n=t||{};this.family=e,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}function c(){if(null===p)if(s()&&/Apple/.test(window.navigator.vendor)){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);p=!!e&&603>parseInt(e[1],10)}else p=!1;return p}function s(){return null===h&&(h=!!document.fonts),h}function u(){if(null===b){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(e){}b=""!==e.style.font}return b}function d(e,t){return[e.style,e.weight,u()?e.stretch:"","100px",t].join(" ")}var f=null,p=null,b=null,h=null;l.prototype.load=function(e,t){var o=this,l=e||"BESbswy",u=0,p=t||3e3,b=(new Date).getTime();return new Promise(function(e,t){if(s()&&!c()){var h=new Promise(function(e,t){function n(){(new Date).getTime()-b>=p?t():document.fonts.load(d(o,'"'+o.family+'"'),l).then(function(t){1<=t.length?e():setTimeout(n,25)},function(){t()})}n()}),m=new Promise(function(e,t){u=setTimeout(t,p)});Promise.race([m,h]).then(function(){clearTimeout(u),e(o)},function(){t(o)})}else n(function(){function n(){var t;(t=-1!=g&&-1!=v||-1!=g&&-1!=w||-1!=v&&-1!=w)&&((t=g!=v&&g!=w&&v!=w)||(null===f&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),f=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=f&&(g==y&&v==y&&w==y||g==N&&v==N&&w==N||g==x&&v==x&&w==x)),t=!t),t&&(_.parentNode&&_.parentNode.removeChild(_),clearTimeout(u),e(o))}function c(){if((new Date).getTime()-b>=p)_.parentNode&&_.parentNode.removeChild(_),t(o);else{var e=document.hidden;!0!==e&&void 0!==e||(g=s.a.offsetWidth,v=h.a.offsetWidth,w=m.a.offsetWidth,n()),u=setTimeout(c,50)}}var s=new r(l),h=new r(l),m=new r(l),g=-1,v=-1,w=-1,y=-1,N=-1,x=-1,_=document.createElement("div");_.dir="ltr",i(s,d(o,"sans-serif")),i(h,d(o,"serif")),i(m,d(o,"monospace")),_.appendChild(s.a),_.appendChild(h.a),_.appendChild(m.a),document.body.appendChild(_),y=s.a.offsetWidth,N=h.a.offsetWidth,x=m.a.offsetWidth,c(),a(s,function(e){g=e,n()}),i(s,d(o,'"'+o.family+'",sans-serif')),a(h,function(e){v=e,n()}),i(h,d(o,'"'+o.family+'",serif')),a(m,function(e){w=e,n()}),i(m,d(o,'"'+o.family+'",monospace'))})})},"object"==typeof t?t.exports=l:(window.FontFaceObserver=l,window.FontFaceObserver.prototype.load=l.prototype.load)}()},{}],2:[function(e,t,n){!function(e){function n(){}function r(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],u(e,this)}function o(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,i._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void l(t.promise,e)}a(t.promise,r)}else(1===e._state?a:l)(t.promise,e._value)})):e._deferreds.push(t)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void u(r(n,t),e)}e._state=1,e._value=t,c(e)}catch(t){l(e,t)}}function l(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t]);e._deferreds=null}function s(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function u(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,l(t,e))})}catch(e){if(n)return;n=!0,l(t,e)}}var d=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var r=new this.constructor(n);return o(this,new s(e,t,r)),r},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,n){function r(o,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var l=a.then;if("function"==typeof l)return void l.call(a,function(e){r(o,e)},n)}t[o]=a,0==--i&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var i=t.length,o=0;o<t.length;o++)r(o,t[o])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,i=e.length;r<i;r++)e[r].then(t,n)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){d(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},void 0!==t&&t.exports?t.exports=i:e.Promise||(e.Promise=i)}(this)},{}],3:[function(e,t,n){"use strict";e("./modules/polyfills"),e("./modules/canvas"),e("./modules/fontface"),e("./vendor/highlight")},{"./modules/canvas":4,"./modules/fontface":5,"./modules/polyfills":6,"./vendor/highlight":7}],4:[function(e,t,n){"use strict";function r(){function e(){if(++a>=o)for(a=0,I=0;I<l;I++){T=2*Math.random()*Math.PI,$=Math.acos(2*Math.random()-1),P=v*Math.sin($)*Math.cos(T),W=v*Math.sin($)*Math.sin(T),F=v*Math.cos($);var e=t(P,w+W,y+F,.002*P,.002*W,.002*F);e.attack=50,e.hold=50,e.decay=160,e.initValue=0,e.holdValue=u,e.lastValue=0,e.stuckTime=80+20*Math.random(),e.accelX=0,e.accelY=E,e.accelZ=0}for(m=(m+g)%(2*Math.PI),S=Math.sin(m),j=Math.cos(m),Z.fillStyle="#0D2C54",Z.fillRect(0,0,r,i),e=c.first;null!=e;)L=e.next,e.age++,e.age>e.stuckTime&&(e.velX+=e.accelX+_*(2*Math.random()-1),e.velY+=e.accelY+k*(2*Math.random()-1),e.velZ+=e.accelZ+M*(2*Math.random()-1),e.x+=e.velX,e.y+=e.velY,e.z+=e.velZ),A=j*e.x+S*(e.z-y),R=-S*e.x+j*(e.z-y)+y,f=d/(d-R),e.projX=A*f+p,e.projY=e.y*f+b,e.age<e.attack+e.hold+e.decay?e.age<e.attack?e.alpha=(e.holdValue-e.initValue)/e.attack*e.age+e.initValue:e.age<e.attack+e.hold?e.alpha=e.holdValue:e.age<e.attack+e.hold+e.decay&&(e.alpha=(e.lastValue-e.holdValue)/e.decay*(e.age-e.attack-e.hold)+e.holdValue):e.dead=!0,(z=e.projX>r||e.projX<0||e.projY<0||e.projY>i||R>h)||e.dead?n(e):(B=(B=1-R/x)>1?1:B<0?0:B,Z.fillStyle=C+B*e.alpha+")",Z.beginPath(),Z.arc(e.projX,e.projY,f*N,0,2*Math.PI,!1),Z.closePath(),Z.fill()),e=L}function t(e,t,n,r,i,o){var a;return null!=s.first?null!=(a=s.first).next?(s.first=a.next,a.next.prev=null):s.first=null:a={},null==c.first?(c.first=a,a.prev=null,a.next=null):(a.next=c.first,c.first.prev=a,c.first=a,a.prev=null),a.x=e,a.y=t,a.z=n,a.velX=r,a.velY=i,a.velZ=o,a.age=0,a.dead=!1,Math.random()<.5?a.right=!0:a.right=!1,a}function n(e){c.first==e?null!=e.next?(e.next.prev=null,c.first=e.next):c.first=null:null==e.next?e.prev.next=null:(e.prev.next=e.next,e.next.prev=e.prev),null==s.first?(s.first=e,e.prev=null,e.next=null):(e.next=s.first,s.first.prev=e,s.first=e,e.prev=null)}var r,i,o,a,l,c,s,u,d,f,p,b,h,m,g,v,w,y,N,x,_,k,M,E,C,z,L,S,j,A,R,B,I,T,$,P,W,F,U=document.getElementById("js-sphere"),Z=U.getContext("2d");a=(o=1)-1,l=8,C="rgba("+255+","+255+","+255+",",u=1,r=U.width,i=U.height,p=r/2,b=i/2,h=(d=320)-2,c={},s={},_=.1,k=.1,M=.1,E=0,N=2.5,w=0,y=-3-(v=280),x=-750,g=2*Math.PI/1600,m=0,setInterval(e,1e3/24)}window.addEventListener("load",function(){document.getElementById("js-sphere")&&r()},!1);(function(){}).log=function(e){try{console.log(e)}catch(e){return}}},{}],5:[function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(e("fontfaceobserver"));!function(){if(!(document.documentElement.className.indexOf("fonts-loaded")>-1)){var e=new r.default("Dosis"),t=new r.default("Roboto");new r.default("Roboto Mono"),Promise.all([e.load(),t.load()]).then(function(){document.documentElement.className+=" fonts-loaded",localStorage.setItem("fontsLoaded",!0)})}}()},{fontfaceobserver:1}],6:[function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(e("promise-polyfill"));window.Promise||(window.Promise=r.default)},{"promise-polyfill":2}],7:[function(e,t,n){"use strict";!function(e){window.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return window.hljs})}(function(e){function t(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function n(e){return e.nodeName.toLowerCase()}function r(e,t){var n=e&&e.exec(t);return n&&0==n.index}function i(e){var t=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return(t=t.map(function(e){return e.replace(/^lang(uage)?-/,"")})).filter(function(e){return h(e)||/no(-?)highlight|plain|text/.test(e)})[0]}function o(e,t){var n,r={};for(n in e)r[n]=e[n];if(t)for(n in t)r[n]=t[n];return r}function a(e){var t=[];return function e(r,i){for(var o=r.firstChild;o;o=o.nextSibling)3==o.nodeType?i+=o.nodeValue.length:1==o.nodeType&&(t.push({event:"start",offset:i,node:o}),i=e(o,i),n(o).match(/br|hr|img|input/)||t.push({event:"stop",offset:i,node:o}));return i}(e,0),t}function l(e,r,i){function o(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function a(e){u+="<"+n(e)+Array.prototype.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+t(e.value)+'"'}).join("")+">"}function l(e){u+="</"+n(e)+">"}function c(e){("start"==e.event?a:l)(e.node)}for(var s=0,u="",d=[];e.length||r.length;){var f=o();if(u+=t(i.substr(s,f[0].offset-s)),s=f[0].offset,f==e){d.reverse().forEach(l);do{c(f.splice(0,1)[0]),f=o()}while(f==e&&f.length&&f[0].offset==s);d.reverse().forEach(a)}else"start"==f[0].event?d.push(f[0].node):d.pop(),c(f.splice(0,1)[0])}return u+t(i.substr(s))}function c(e){function t(e){return e&&e.source||e}function n(n,r){return new RegExp(t(n),"m"+(e.cI?"i":"")+(r?"g":""))}function r(i,a){if(!i.compiled){if(i.compiled=!0,i.k=i.k||i.bK,i.k){var l={},c=function(t,n){e.cI&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");l[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof i.k?c("keyword",i.k):Object.keys(i.k).forEach(function(e){c(e,i.k[e])}),i.k=l}i.lR=n(i.l||/\b\w+\b/,!0),a&&(i.bK&&(i.b="\\b("+i.bK.split(" ").join("|")+")\\b"),i.b||(i.b=/\B|\b/),i.bR=n(i.b),i.e||i.eW||(i.e=/\B|\b/),i.e&&(i.eR=n(i.e)),i.tE=t(i.e)||"",i.eW&&a.tE&&(i.tE+=(i.e?"|":"")+a.tE)),i.i&&(i.iR=n(i.i)),void 0===i.r&&(i.r=1),i.c||(i.c=[]);var s=[];i.c.forEach(function(e){e.v?e.v.forEach(function(t){s.push(o(e,t))}):s.push("self"==e?i:e)}),i.c=s,i.c.forEach(function(e){r(e,i)}),i.starts&&r(i.starts,a);var u=i.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([i.tE,i.i]).map(t).filter(Boolean);i.t=u.length?n(u.join("|"),!0):{exec:function(){return null}}}}r(e)}function s(e,n,i,o){function a(e,t){for(var n=0;n<t.c.length;n++)if(r(t.c[n].bR,e))return t.c[n]}function l(e,t){if(r(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?l(e.parent,t):void 0}function d(e,t){return!i&&r(t.iR,e)}function f(e,t){var n=x.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(n)&&e.k[n]}function p(e,t,n,r){var i='<span class="'+(r?"":m.classPrefix);return(i+=e+'">')+t+(n?"":"</span>")}function b(){if(!k.k)return t(C);var e="",n=0;k.lR.lastIndex=0;for(var r=k.lR.exec(C);r;){e+=t(C.substr(n,r.index-n));var i=f(k,r);i?(z+=i[1],e+=p(i[0],t(r[0]))):e+=t(r[0]),n=k.lR.lastIndex,r=k.lR.exec(C)}return e+t(C.substr(n))}function v(){if(k.sL&&!g[k.sL])return t(C);var e=k.sL?s(k.sL,C,!0,M[k.sL]):u(C);return k.r>0&&(z+=e.r),"continuous"==k.subLanguageMode&&(M[k.sL]=e.top),p(e.language,e.value,!1,!0)}function w(){return void 0!==k.sL?v():b()}function y(e,n){var r=e.cN?p(e.cN,"",!0):"";e.rB?(E+=r,C=""):e.eB?(E+=t(n)+r,C=""):(E+=r,C=n),k=Object.create(e,{parent:{value:k}})}function N(e,n){if(C+=e,void 0===n)return E+=w(),0;var r=a(n,k);if(r)return E+=w(),y(r,n),r.rB?0:n.length;var i=l(k,n);if(i){var o=k;o.rE||o.eE||(C+=n),E+=w();do{k.cN&&(E+="</span>"),z+=k.r,k=k.parent}while(k!=i.parent);return o.eE&&(E+=t(n)),C="",i.starts&&y(i.starts,""),o.rE?0:n.length}if(d(n,k))throw new Error('Illegal lexeme "'+n+'" for mode "'+(k.cN||"<unnamed>")+'"');return C+=n,n.length||1}var x=h(e);if(!x)throw new Error('Unknown language: "'+e+'"');c(x);var _,k=o||x,M={},E="";for(_=k;_!=x;_=_.parent)_.cN&&(E=p(_.cN,"",!0)+E);var C="",z=0;try{for(var L,S,j=0;k.t.lastIndex=j,L=k.t.exec(n);)S=N(n.substr(j,L.index-j),L[0]),j=L.index+S;for(N(n.substr(j)),_=k;_.parent;_=_.parent)_.cN&&(E+="</span>");return{r:z,value:E,language:e,top:k}}catch(e){if(-1!=e.message.indexOf("Illegal"))return{r:0,value:t(n)};throw e}}function u(e,n){n=n||m.languages||Object.keys(g);var r={r:0,value:t(e)},i=r;return n.forEach(function(t){if(h(t)){var n=s(t,e,!1);n.language=t,n.r>i.r&&(i=n),n.r>r.r&&(i=r,r=n)}}),i.language&&(r.second_best=i),r}function d(e){return m.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t){return t.replace(/\t/g,m.tabReplace)})),m.useBR&&(e=e.replace(/\n/g,"<br>")),e}function f(e,t,n){var r=t?v[t]:n,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),-1===e.indexOf(r)&&i.push(r),i.join(" ").trim()}function p(e){var t=i(e);if(!/no(-?)highlight|plain|text/.test(t)){var n;m.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e;var r=n.textContent,o=t?s(t,r,!0):u(r),c=a(n);if(c.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=o.value,o.value=l(c,a(p),r)}o.value=d(o.value),e.innerHTML=o.value,e.className=f(e.className,t,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function h(e){return g[e]||g[v[e]]}var m={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},g={},v={};return e.highlight=s,e.highlightAuto=u,e.fixMarkup=d,e.highlightBlock=p,e.configure=function(e){m=o(m,e)},e.initHighlighting=b,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)},e.registerLanguage=function(t,n){var r=g[t]=n(e);r.aliases&&r.aliases.forEach(function(e){v[e]=t})},e.listLanguages=function(){return Object.keys(g)},e.getLanguage=h,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},e.C=function(t,n,r){var i=e.inherit({cN:"comment",b:t,e:n,c:[]},r||{});return i.c.push(e.PWM),i},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e}),hljs.registerLanguage("nginx",function(e){var t={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+e.UIR}]},n={eW:!0,l:"[a-z/_]+",k:{built_in:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[e.HCM,{cN:"string",c:[e.BE,t],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{cN:"url",b:"([a-z]+):/",e:"\\s",eW:!0,eE:!0,c:[t]},{cN:"regexp",c:[e.BE,t],v:[{b:"\\s\\^",e:"\\s|{|;",rE:!0},{b:"~\\*?\\s+",e:"\\s|{|;",rE:!0},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},t]};return{aliases:["nginxconf"],c:[e.HCM,{b:e.UIR+"\\s",e:";|{",rB:!0,c:[{cN:"title",b:e.UIR,starts:n}],r:0}],i:"[^\\s\\}]"}}),hljs.registerLanguage("xml",function(e){var t={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"},n={eW:!0,i:/</,r:0,c:[t,{cN:"attribute",b:"[A-Za-z0-9\\._:-]+",r:0},{b:"=",r:0,c:[{cN:"value",c:[t],v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("\x3c!--","--\x3e",{r:10}),{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[n],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[n],starts:{e:"<\/script>",rE:!0,sL:""}},t,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},n]}]}}),hljs.registerLanguage("php",function(e){var t={cN:"variable",b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},n={cN:"preprocessor",b:/<\?(php)?|\?>/},r={cN:"string",c:[e.BE,n],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},i={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.CLCM,e.HCM,e.C("/\\*","\\*/",{c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"},n]}),e.C("__halt_compiler.+?;",!1,{eW:!0,k:"__halt_compiler",l:e.UIR}),{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[e.BE]},n,t,{b:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",t,e.CBCM,r,i]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},r,i]}}),hljs.registerLanguage("ini",function(e){return{cI:!0,i:/\S/,c:[e.C(";","$"),{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:!0,k:"on off true false yes no",c:[e.QSM,e.NM],r:0}]}]}}),hljs.registerLanguage("json",function(e){var t={literal:"true false null"},n=[e.QSM,e.CNM],r={cN:"value",e:",",eW:!0,eE:!0,c:n,k:t},i={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:!0,eE:!0,c:[e.BE],i:"\\n",starts:r}],i:"\\S"},o={b:"\\[",e:"\\]",c:[e.inherit(r,{cN:null})],i:"\\S"};return n.splice(n.length,0,i,o),{c:n,k:t,i:"\\S"}}),hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},n={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},r={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,e.NM,n,r,t]}}),hljs.registerLanguage("python",function(e){var t={cN:"prompt",b:/^(>>>|\.\.\.) /},n={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[t],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[t],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},e.ASM,e.QSM]},r={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},i={cN:"params",b:/\(/,e:/\)/,c:["self",t,r,n]};return{aliases:["py","gyp"],k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)/,c:[t,r,n,e.HCM,{v:[{cN:"function",bK:"def",r:10},{cN:"class",bK:"class"}],e:/:/,i:/[${=;\n,]/,c:[e.UTM,i]},{cN:"decorator",b:/@/,e:/$/},{b:/\b(print|exec)\(/}]}}),hljs.registerLanguage("apache",function(e){var t={cN:"number",b:"[\\$%]\\d+"};return{aliases:["apacheconf"],cI:!0,c:[e.HCM,{cN:"tag",b:"</?",e:">"},{cN:"keyword",b:/\w+/,r:0,k:{common:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"sqbracket",b:"\\s\\[",e:"\\]$"},{cN:"cbracket",b:"[\\$%]\\{",e:"\\}",c:["self",t]},t,e.QSM]}}],i:/\S/}}),hljs.registerLanguage("http",function(e){return{aliases:["https"],i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:!0}}]}}),hljs.registerLanguage("javascript",function(e){return{aliases:["js"],k:{keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},c:[{cN:"pi",r:10,v:[{b:/^\s*('|")use strict('|")/},{b:/^\s*('|")use asm('|")/}]},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",b:"\\b(0[xXbBoO][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/>\s*[);\]]/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[e.CLCM,e.CBCM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+e.IR,r:0},{bK:"import",e:"[;$]",k:"import from as",c:[e.ASM,e.QSM]},{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]}]}}),hljs.registerLanguage("markdown",function(e){return{aliases:["md","mkdown","mkd"],c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|\t)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:"^\\[.+\\]:",rB:!0,c:[{cN:"link_reference",b:"\\[",e:"\\]:",eB:!0,eE:!0,starts:{cN:"link_url",e:"$"}}]}]}}),hljs.registerLanguage("scss",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",n={cN:"variable",b:"(\\$"+t+")\\b"},r={cN:"function",b:t+"\\(",rB:!0,eE:!0,e:"\\("},i={cN:"hexcolor",b:"#[0-9A-Fa-f]+"};return e.CSSNM,e.QSM,e.ASM,e.CBCM,{cI:!0,i:"[=/|']",c:[e.CLCM,e.CBCM,r,{cN:"id",b:"\\#[A-Za-z0-9_-]+",r:0},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"tag",b:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",r:0},{cN:"pseudo",b:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"},{cN:"pseudo",b:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"},n,{cN:"attribute",b:"\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",i:"[^\\s]"},{cN:"value",b:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{cN:"value",b:":",e:";",c:[r,n,i,e.CSSNM,e.QSM,e.ASM,{cN:"important",b:"!important"}]},{cN:"at_rule",b:"@",e:"[{;]",k:"mixin include extend for if else each while charset import debug media page content font-face namespace warn",c:[r,n,e.QSM,e.ASM,i,e.CSSNM,{cN:"preprocessor",b:"\\s[A-Za-z0-9_.-]+",r:0}]}]}}),hljs.registerLanguage("makefile",function(e){var t={cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]};return{aliases:["mk","mak"],c:[e.HCM,{b:/^\w+\s*\W*=/,rB:!0,r:0,starts:{cN:"constant",e:/\s*\W*=/,eE:!0,starts:{e:/$/,r:0,c:[t]}}},{cN:"title",b:/^[\w]+:\s*$/},{cN:"phony",b:/^\.PHONY:/,e:/$/,k:".PHONY",l:/[\.\w]+/},{b:/^\t+/,e:/$/,r:0,c:[e.QSM,t]}]}}),hljs.registerLanguage("css",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",n={cN:"function",b:t+"\\(",rB:!0,eE:!0,e:"\\("},r={cN:"rule",b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{cN:"value",eW:!0,eE:!0,c:[n,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]};return{cI:!0,i:/[=\/|']/,c:[e.CBCM,r,{cN:"id",b:/\#[A-Za-z0-9_-]+/},{cN:"class",b:/\.[A-Za-z0-9_-]+/,r:0},{cN:"attr_selector",b:/\[/,e:/\]/,i:"$"},{cN:"pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[n,e.ASM,e.QSM,e.CSSNM]}]},{cN:"tag",b:t,r:0},{cN:"rules",b:"{",e:"}",i:/\S/,r:0,c:[e.CBCM,r]}]}}),hljs.initHighlightingOnLoad()},{}]},{},[3]);
//# sourceMappingURL=bundle-3f973440.js.map
