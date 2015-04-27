function elementInViewport(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)}function sameHeight(e){for(var t=0,r=0;r<e.length;r++)thisHeight=e[r].offsetHeight,thisHeight>t&&(t=thisHeight);for(var r=0;r<e.length;r++)e[r].style.height=t+"px"}function resizeWindow(){if(window.matchMedia("(min-width: 31.25em)").matches){for(var e=0;e<grid.length;e++)grid[e].style.height="auto";sameHeight(grid)}else for(var e=0;e<grid.length;e++)grid[e].style.height="auto"}function navPages(){function e(){return u?u.offsetHeight:d.offsetHeight}function t(){var e;return e="undefined"!=typeof window.innerWidth?window.innerHeight:document.getElementsByTagName("body")[0].clientHeight,Math.round(e/2)}function r(){for(var e=0;e<f.length;e++)f[e].style.opacity="1",f[e].style.pointerEvents="auto"}function n(){for(var e=0;e<f.length;e++)f[e].style.opacity="0",f[e].style.pointerEvents="none"}function i(){clearTimeout(a),a=setTimeout(function(){g=window.pageYOffset+h,g>m&&v>g?r():n()},75)}var a,o=document.querySelector(".header").offsetHeight,l=document.querySelector(".page-header").offsetHeight,c=document.querySelector(".footer").offsetHeight,s=document.querySelector(".article-footer").offsetHeight,u=document.querySelector(".previous-post"),d=document.querySelector(".next-post"),f=document.querySelectorAll(".article-nav"),p=e(),b=void 0!==document.height?document.height:document.body.offsetHeight,h=t(),g=window.pageYOffset+h,m=o+l+1.5*p,v=b-c-s-1.5*p;i(),window.addEventListener("scroll",function(){i()}),window.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(function(){o=document.querySelector(".header").offsetHeight,l=document.querySelector(".page-header").offsetHeight,c=document.querySelector(".footer").offsetHeight,s=document.querySelector(".article-footer").offsetHeight,u=document.querySelector(".previous-post"),d=document.querySelector(".next-post"),f=document.querySelectorAll(".article-nav"),vprevNext=e(),b=b=void 0!==document.height?document.height:document.body.offsetHeight,h=t(),g=window.pageYOffset+h,m=o+l+1.5*p,v=b-c-s-1.5*p,g>m&&v>g?r():n()},75)})}function fadeFromBottomScroll(){for(var e=document.querySelectorAll(".fadeFromBottom"),t=0;t<e.length;t++)elementInViewport(e[t])&&(addClass(e[t],"fadedFromBottom"),removeClass(e[t],"fadeFromBottom"))}function canvasApp(){function e(){s=1,u=s-1,d=8,h=62,g=77,m=95,I="rgba("+h+","+g+","+m+",",b=1,o=i,l=a,v=320,w=o/2,N=l/2,x=v-2,f={},p={},L=.1,A=.1,B=.1,R=-0,_=2.5,E=0,M=0,C=-3-V,z=-750,k=2*Math.PI/1500,S=0,c=setInterval(t,10/24)}function t(){if(u++,u>=s)for(u=0,Z=0;d>Z;Z++){P=2*Math.random()*Math.PI,U=Math.acos(2*Math.random()-1),F=V*Math.sin(U)*Math.cos(P),K=V*Math.sin(U)*Math.sin(P),Y=V*Math.cos(U);var e=r(F,M+K,C+Y,.002*F,.002*K,.002*Y);e.attack=50,e.hold=50,e.decay=100,e.initValue=0,e.holdValue=b,e.lastValue=0,e.stuckTime=90+20*Math.random(),e.accelX=0,e.accelY=R,e.accelZ=0}for(S=(S+k)%(2*Math.PI),T=Math.sin(S),$=Math.cos(S),Q.fillStyle="#222a34",Q.fillRect(0,0,o,l),e=f.first;null!=e;)H=e.next,e.age++,e.age>e.stuckTime&&(e.velX+=e.accelX+L*(2*Math.random()-1),e.velY+=e.accelY+A*(2*Math.random()-1),e.velZ+=e.accelZ+B*(2*Math.random()-1),e.x+=e.velX,e.y+=e.velY,e.z+=e.velZ),q=$*e.x+T*(e.z-C),O=-T*e.x+$*(e.z-C)+C,y=X*v/(v-O),e.projX=q*y+w,e.projY=e.y*y+N,e.age<e.attack+e.hold+e.decay?e.age<e.attack?e.alpha=(e.holdValue-e.initValue)/e.attack*e.age+e.initValue:e.age<e.attack+e.hold?e.alpha=e.holdValue:e.age<e.attack+e.hold+e.decay&&(e.alpha=(e.lastValue-e.holdValue)/e.decay*(e.age-e.attack-e.hold)+e.holdValue):e.dead=!0,j=e.projX>o||e.projX<0||e.projY<0||e.projY>l||O>x?!0:!1,j||e.dead?n(e):(W=1-O/z,W=W>1?1:0>W?0:W,Q.fillStyle=I+W*e.alpha+")",Q.beginPath(),Q.arc(e.projX,e.projY,y*_,0,2*Math.PI,!1),Q.closePath(),Q.fill()),e=H}function r(e,t,r,n,i,a){var o;return null!=p.first?(o=p.first,null!=o.next?(p.first=o.next,o.next.prev=null):p.first=null):o={},null==f.first?(f.first=o,o.prev=null,o.next=null):(o.next=f.first,f.first.prev=o,f.first=o,o.prev=null),o.x=e,o.y=t,o.z=r,o.velX=n,o.velY=i,o.velZ=a,o.age=0,o.dead=!1,o.right=Math.random()<.5?!0:!1,o}function n(e){f.first==e?null!=e.next?(e.next.prev=null,f.first=e.next):f.first=null:null==e.next?e.prev.next=null:(e.prev.next=e.next,e.next.prev=e.prev),null==p.first?(p.first=e,e.prev=null,e.next=null):(e.next=p.first,p.first.prev=e,p.first=e,e.prev=null)}var i=container.offsetWidth,a=container.offsetHeight;canvas.width=i,canvas.height=a;var o,l,c,s,u,d,f,p,b,h,g,m,v,y,w,N,x,S,k,E,M,C,_,z,L,A,B,R,I,j,H,T,$,q,O,W,Z,P,U,F,K,Y,V=a/1.5,X=1,Q=canvas.getContext("2d");e(),window.addEventListener("resize",function(){i=container.offsetWidth,a=container.offsetHeight,canvas.width=i,canvas.height=a,console.log(a),V=a/1.5,o=i,l=a,w=o/2,N=l/2})}var hasClass=function(e,t){var r=new RegExp("(?:\\s|^)"+t+"(?:\\s|$)");return!!e.className.match(r)},addClass=function(e,t){e.className+=" "+t},removeClass=function(e,t){var r=new RegExp("(?:\\s|^)"+t+"(?:\\s|$)");e.className=e.className.replace(r," ")},toggleClass=function(e,t){hasClass(e,t)?removeClass(e,t):addClass(e,t)},getNextElementSibling=function(e){if(e.nextElementSibling)return e.nextElementSibling;do e=e.nextSibling;while(e&&1!==e.nodeType);return e};!function(){var e=document.querySelector(".mobile-nav__open"),t=document.querySelector(".mobile-nav__close"),r=document.querySelector(".nav");r&&(e.addEventListener("click",function(){this.style.display="none",t.style.display="inline",toggleClass(r,"nav--open")}),t.addEventListener("click",function(){this.style.display="none",e.style.display="inline",toggleClass(r,"nav--open")}))}();var grid=document.querySelectorAll(".grid-posts__link");window.addEventListener("resize",resizeWindow,!1),window.addEventListener("load",resizeWindow,!1),function(e){function t(){if(window.matchMedia("(min-width: 68.75em)").matches){for(var e=0;e<n.length;e++)n[e].style.height="auto";sameHeight(n)}else for(var e=0;e<n.length;e++)n[e].style.height="auto"}var r=e.style;if(!("flexWrap"in r||"WebkitFlexWrap"in r||"MozFlexWrap"in r||"msFlexWrap"in r)){var n=document.querySelectorAll(".cats-hp li");window.addEventListener("resize",t,!1),window.addEventListener("load",t,!1)}}(document.documentElement),window.addEventListener("load",function(){var e=document.querySelector(".article-footer");e&&navPages()});for(var timelineEl=document.querySelectorAll(".timeline__item-inner"),i=0;i<timelineEl.length;i++)timelineEl[i].className+=" fadeFromBottom";fadeFromBottomScroll(),window.addEventListener("scroll",fadeFromBottomScroll);var canvas=document.getElementById("canvas");if(canvas){var container=document.querySelector(".canvas-container");window.addEventListener("load",function(){window.setTimeout(canvasApp,1700)})}!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return window.hljs}))}(function(e){function t(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function r(e){return e.nodeName.toLowerCase()}function n(e,t){var r=e&&e.exec(t);return r&&0==r.index}function i(e){var t=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return t=t.map(function(e){return e.replace(/^lang(uage)?-/,"")}),t.filter(function(e){return y(e)||/no(-?)highlight|plain|text/.test(e)})[0]}function a(e,t){var r,n={};for(r in e)n[r]=e[r];if(t)for(r in t)n[r]=t[r];return n}function o(e){var t=[];return function n(e,i){for(var a=e.firstChild;a;a=a.nextSibling)3==a.nodeType?i+=a.nodeValue.length:1==a.nodeType&&(t.push({event:"start",offset:i,node:a}),i=n(a,i),r(a).match(/br|hr|img|input/)||t.push({event:"stop",offset:i,node:a}));return i}(e,0),t}function l(e,n,i){function a(){return e.length&&n.length?e[0].offset!=n[0].offset?e[0].offset<n[0].offset?e:n:"start"==n[0].event?e:n:e.length?e:n}function o(e){function n(e){return" "+e.nodeName+'="'+t(e.value)+'"'}u+="<"+r(e)+Array.prototype.map.call(e.attributes,n).join("")+">"}function l(e){u+="</"+r(e)+">"}function c(e){("start"==e.event?o:l)(e.node)}for(var s=0,u="",d=[];e.length||n.length;){var f=a();if(u+=t(i.substr(s,f[0].offset-s)),s=f[0].offset,f==e){d.reverse().forEach(l);do c(f.splice(0,1)[0]),f=a();while(f==e&&f.length&&f[0].offset==s);d.reverse().forEach(o)}else"start"==f[0].event?d.push(f[0].node):d.pop(),c(f.splice(0,1)[0])}return u+t(i.substr(s))}function c(e){function t(e){return e&&e.source||e}function r(r,n){return new RegExp(t(r),"m"+(e.cI?"i":"")+(n?"g":""))}function n(i,o){if(!i.compiled){if(i.compiled=!0,i.k=i.k||i.bK,i.k){var l={},c=function(t,r){e.cI&&(r=r.toLowerCase()),r.split(" ").forEach(function(e){var r=e.split("|");l[r[0]]=[t,r[1]?Number(r[1]):1]})};"string"==typeof i.k?c("keyword",i.k):Object.keys(i.k).forEach(function(e){c(e,i.k[e])}),i.k=l}i.lR=r(i.l||/\b\w+\b/,!0),o&&(i.bK&&(i.b="\\b("+i.bK.split(" ").join("|")+")\\b"),i.b||(i.b=/\B|\b/),i.bR=r(i.b),i.e||i.eW||(i.e=/\B|\b/),i.e&&(i.eR=r(i.e)),i.tE=t(i.e)||"",i.eW&&o.tE&&(i.tE+=(i.e?"|":"")+o.tE)),i.i&&(i.iR=r(i.i)),void 0===i.r&&(i.r=1),i.c||(i.c=[]);var s=[];i.c.forEach(function(e){e.v?e.v.forEach(function(t){s.push(a(e,t))}):s.push("self"==e?i:e)}),i.c=s,i.c.forEach(function(e){n(e,i)}),i.starts&&n(i.starts,o);var u=i.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([i.tE,i.i]).map(t).filter(Boolean);i.t=u.length?r(u.join("|"),!0):{exec:function(){return null}}}}n(e)}function s(e,r,i,a){function o(e,t){for(var r=0;r<t.c.length;r++)if(n(t.c[r].bR,e))return t.c[r]}function l(e,t){if(n(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?l(e.parent,t):void 0}function d(e,t){return!i&&n(t.iR,e)}function f(e,t){var r=x.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(r)&&e.k[r]}function p(e,t,r,n){var i=n?"":w.classPrefix,a='<span class="'+i,o=r?"":"</span>";return a+=e+'">',a+t+o}function b(){if(!k.k)return t(C);var e="",r=0;k.lR.lastIndex=0;for(var n=k.lR.exec(C);n;){e+=t(C.substr(r,n.index-r));var i=f(k,n);i?(_+=i[1],e+=p(i[0],t(n[0]))):e+=t(n[0]),r=k.lR.lastIndex,n=k.lR.exec(C)}return e+t(C.substr(r))}function h(){if(k.sL&&!N[k.sL])return t(C);var e=k.sL?s(k.sL,C,!0,E[k.sL]):u(C);return k.r>0&&(_+=e.r),"continuous"==k.subLanguageMode&&(E[k.sL]=e.top),p(e.language,e.value,!1,!0)}function g(){return void 0!==k.sL?h():b()}function m(e,r){var n=e.cN?p(e.cN,"",!0):"";e.rB?(M+=n,C=""):e.eB?(M+=t(r)+n,C=""):(M+=n,C=r),k=Object.create(e,{parent:{value:k}})}function v(e,r){if(C+=e,void 0===r)return M+=g(),0;var n=o(r,k);if(n)return M+=g(),m(n,r),n.rB?0:r.length;var i=l(k,r);if(i){var a=k;a.rE||a.eE||(C+=r),M+=g();do k.cN&&(M+="</span>"),_+=k.r,k=k.parent;while(k!=i.parent);return a.eE&&(M+=t(r)),C="",i.starts&&m(i.starts,""),a.rE?0:r.length}if(d(r,k))throw new Error('Illegal lexeme "'+r+'" for mode "'+(k.cN||"<unnamed>")+'"');return C+=r,r.length||1}var x=y(e);if(!x)throw new Error('Unknown language: "'+e+'"');c(x);var S,k=a||x,E={},M="";for(S=k;S!=x;S=S.parent)S.cN&&(M=p(S.cN,"",!0)+M);var C="",_=0;try{for(var z,L,A=0;k.t.lastIndex=A,z=k.t.exec(r),z;)L=v(r.substr(A,z.index-A),z[0]),A=z.index+L;for(v(r.substr(A)),S=k;S.parent;S=S.parent)S.cN&&(M+="</span>");return{r:_,value:M,language:e,top:k}}catch(B){if(-1!=B.message.indexOf("Illegal"))return{r:0,value:t(r)};throw B}}function u(e,r){r=r||w.languages||Object.keys(N);var n={r:0,value:t(e)},i=n;return r.forEach(function(t){if(y(t)){var r=s(t,e,!1);r.language=t,r.r>i.r&&(i=r),r.r>n.r&&(i=n,n=r)}}),i.language&&(n.second_best=i),n}function d(e){return w.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t){return t.replace(/\t/g,w.tabReplace)})),w.useBR&&(e=e.replace(/\n/g,"<br>")),e}function f(e,t,r){var n=t?x[t]:r,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),-1===e.indexOf(n)&&i.push(n),i.join(" ").trim()}function p(e){var t=i(e);if(!/no(-?)highlight|plain|text/.test(t)){var r;w.useBR?(r=document.createElementNS("http://www.w3.org/1999/xhtml","div"),r.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):r=e;var n=r.textContent,a=t?s(t,n,!0):u(n),c=o(r);if(c.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=a.value,a.value=l(c,o(p),n)}a.value=d(a.value),e.innerHTML=a.value,e.className=f(e.className,t,a.language),e.result={language:a.language,re:a.r},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.r})}}function b(e){w=a(w,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function g(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function m(t,r){var n=N[t]=r(e);n.aliases&&n.aliases.forEach(function(e){x[e]=t})}function v(){return Object.keys(N)}function y(e){return N[e]||N[x[e]]}var w={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},N={},x={};return e.highlight=s,e.highlightAuto=u,e.fixMarkup=d,e.highlightBlock=p,e.configure=b,e.initHighlighting=h,e.initHighlightingOnLoad=g,e.registerLanguage=m,e.listLanguages=v,e.getLanguage=y,e.inherit=a,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},e.C=function(t,r,n){var i=e.inherit({cN:"comment",b:t,e:r,c:[]},n||{});return i.c.push(e.PWM),i},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e}),hljs.registerLanguage("nginx",function(e){var t={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+e.UIR}]},r={eW:!0,l:"[a-z/_]+",k:{built_in:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[e.HCM,{cN:"string",c:[e.BE,t],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{cN:"url",b:"([a-z]+):/",e:"\\s",eW:!0,eE:!0,c:[t]},{cN:"regexp",c:[e.BE,t],v:[{b:"\\s\\^",e:"\\s|{|;",rE:!0},{b:"~\\*?\\s+",e:"\\s|{|;",rE:!0},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},t]};return{aliases:["nginxconf"],c:[e.HCM,{b:e.UIR+"\\s",e:";|{",rB:!0,c:[{cN:"title",b:e.UIR,starts:r}],r:0}],i:"[^\\s\\}]"}}),hljs.registerLanguage("xml",function(e){var t="[A-Za-z0-9\\._:-]+",r={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"},n={eW:!0,i:/</,r:0,c:[r,{cN:"attribute",b:t,r:0},{b:"=",r:0,c:[{cN:"value",c:[r],v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("<!--","-->",{r:10}),{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[n],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[n],starts:{e:"</script>",rE:!0,sL:""}},r,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},n]}]}}),hljs.registerLanguage("php",function(e){var t={cN:"variable",b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},r={cN:"preprocessor",b:/<\?(php)?|\?>/},n={cN:"string",c:[e.BE,r],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},i={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.CLCM,e.HCM,e.C("/\\*","\\*/",{c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"},r]}),e.C("__halt_compiler.+?;",!1,{eW:!0,k:"__halt_compiler",l:e.UIR}),{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[e.BE]},r,t,{b:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",t,e.CBCM,n,i]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},n,i]}}),hljs.registerLanguage("ini",function(e){return{cI:!0,i:/\S/,c:[e.C(";","$"),{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:!0,k:"on off true false yes no",c:[e.QSM,e.NM],r:0}]}]}}),hljs.registerLanguage("json",function(e){var t={literal:"true false null"},r=[e.QSM,e.CNM],n={cN:"value",e:",",eW:!0,eE:!0,c:r,k:t},i={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:!0,eE:!0,c:[e.BE],i:"\\n",starts:n}],i:"\\S"},a={b:"\\[",e:"\\]",c:[e.inherit(n,{cN:null})],i:"\\S"};return r.splice(r.length,0,i,a),{c:r,k:t,i:"\\S"}}),hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},r={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},n={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,e.NM,r,n,t]}}),hljs.registerLanguage("python",function(e){var t={cN:"prompt",b:/^(>>>|\.\.\.) /},r={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[t],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[t],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},e.ASM,e.QSM]},n={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},i={cN:"params",b:/\(/,e:/\)/,c:["self",t,n,r]};return{aliases:["py","gyp"],k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)/,c:[t,n,r,e.HCM,{v:[{cN:"function",bK:"def",r:10},{cN:"class",bK:"class"}],e:/:/,i:/[${=;\n,]/,c:[e.UTM,i]},{cN:"decorator",b:/@/,e:/$/},{b:/\b(print|exec)\(/}]}}),hljs.registerLanguage("apache",function(e){var t={cN:"number",b:"[\\$%]\\d+"};return{aliases:["apacheconf"],cI:!0,c:[e.HCM,{cN:"tag",b:"</?",e:">"},{cN:"keyword",b:/\w+/,r:0,k:{common:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"sqbracket",b:"\\s\\[",e:"\\]$"},{cN:"cbracket",b:"[\\$%]\\{",e:"\\}",c:["self",t]},t,e.QSM]}}],i:/\S/}}),hljs.registerLanguage("http",function(){return{aliases:["https"],i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:!0}}]}}),hljs.registerLanguage("javascript",function(e){return{aliases:["js"],k:{keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},c:[{cN:"pi",r:10,v:[{b:/^\s*('|")use strict('|")/},{b:/^\s*('|")use asm('|")/}]},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",b:"\\b(0[xXbBoO][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{b:/</,e:/>\s*[);\]]/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[e.CLCM,e.CBCM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+e.IR,r:0},{bK:"import",e:"[;$]",k:"import from as",c:[e.ASM,e.QSM]},{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]}]}}),hljs.registerLanguage("markdown",function(){return{aliases:["md","mkdown","mkd"],c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|	)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:"^\\[.+\\]:",rB:!0,c:[{cN:"link_reference",b:"\\[",e:"\\]:",eB:!0,eE:!0,starts:{cN:"link_url",e:"$"}}]}]}}),hljs.registerLanguage("scss",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",r={cN:"variable",b:"(\\$"+t+")\\b"},n={cN:"function",b:t+"\\(",rB:!0,eE:!0,e:"\\("},i={cN:"hexcolor",b:"#[0-9A-Fa-f]+"};return{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{cN:"value",eW:!0,eE:!0,c:[n,i,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"important",b:"!important"}]}},{cI:!0,i:"[=/|']",c:[e.CLCM,e.CBCM,n,{cN:"id",b:"\\#[A-Za-z0-9_-]+",r:0},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"tag",b:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",r:0},{cN:"pseudo",b:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"},{cN:"pseudo",b:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"},r,{cN:"attribute",b:"\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",i:"[^\\s]"},{cN:"value",b:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{cN:"value",b:":",e:";",c:[n,r,i,e.CSSNM,e.QSM,e.ASM,{cN:"important",b:"!important"}]},{cN:"at_rule",b:"@",e:"[{;]",k:"mixin include extend for if else each while charset import debug media page content font-face namespace warn",c:[n,r,e.QSM,e.ASM,i,e.CSSNM,{cN:"preprocessor",b:"\\s[A-Za-z0-9_.-]+",r:0}]}]}}),hljs.registerLanguage("makefile",function(e){var t={cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]};return{aliases:["mk","mak"],c:[e.HCM,{b:/^\w+\s*\W*=/,rB:!0,r:0,starts:{cN:"constant",e:/\s*\W*=/,eE:!0,starts:{e:/$/,r:0,c:[t]}}},{cN:"title",b:/^[\w]+:\s*$/},{cN:"phony",b:/^\.PHONY:/,e:/$/,k:".PHONY",l:/[\.\w]+/},{b:/^\t+/,e:/$/,r:0,c:[e.QSM,t]}]}}),hljs.registerLanguage("css",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",r={cN:"function",b:t+"\\(",rB:!0,eE:!0,e:"\\("},n={cN:"rule",b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{cN:"value",eW:!0,eE:!0,c:[r,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]};return{cI:!0,i:/[=\/|']/,c:[e.CBCM,n,{cN:"id",b:/\#[A-Za-z0-9_-]+/},{cN:"class",b:/\.[A-Za-z0-9_-]+/,r:0},{cN:"attr_selector",b:/\[/,e:/\]/,i:"$"},{cN:"pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[r,e.ASM,e.QSM,e.CSSNM]}]},{cN:"tag",b:t,r:0},{cN:"rules",b:"{",e:"}",i:/\S/,r:0,c:[e.CBCM,n]}]}}),hljs.initHighlightingOnLoad(),!function e(t,r,n){function i(o,l){if(!r[o]){if(!t[o]){var c="function"==typeof require&&require;if(!l&&c)return c(o,!0);if(a)return a(o,!0);throw new Error("Cannot find module '"+o+"'")}var s=r[o]={exports:{}};t[o][0].call(s.exports,function(e){var r=t[o][1][e];return i(r?r:e)},s,s.exports,e,t,r,n)}return r[o].exports}for(var a="function"==typeof require&&require,o=0;o<n.length;o++)i(n[o]);return i}({1:[function(e,t){t.exports=function(){function e(e){return 200==e.status&&4==e.readyState}function t(t,r){t.onreadystatechange=function(){if(e(t))try{r(null,JSON.parse(t.responseText))}catch(n){r(n,null)}}}var r=this;r.load=function(e,r){var n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");n.open("GET",e,!0),t(n,r),n.send()}}},{}],2:[function(e,t){function r(){function e(e){return new RegExp(e.split("").join(".*?"),"gi")}var t=this;t.matches=function(t,r){return"string"!=typeof t?!1:(t=t.trim(),!!t.match(e(r)))}}t.exports=new r},{}],3:[function(e,t){function r(){function e(e,t){return e.toLowerCase().indexOf(t.toLowerCase())>=0}var t=this;t.matches=function(t,r){return"string"!=typeof t?!1:(t=t.trim(),e(t,r))}}t.exports=new r},{}],4:[function(e,t){t.exports=function(){function t(e,t,n){for(var i=e.get(),o=0;o<i.length&&a.length<l;o++)r(i[o],t,n);return a}function r(e,t,r){for(var n in e)if(r.matches(e[n],t)){a.push(e);break}}function n(){return o?c:s}var i=this,a=[],o=!1,l=10,c=e("./SearchStrategies/fuzzy"),s=e("./SearchStrategies/literal");i.setFuzzy=function(e){o=!!e},i.setLimit=function(e){l=parseInt(e,10)||l},i.search=function(e,r){return r?(a.length=0,t(e,r,n())):[]}}},{"./SearchStrategies/fuzzy":2,"./SearchStrategies/literal":3}],5:[function(e,t){t.exports=function(e){function t(e){return!!e&&"[object Object]"==Object.prototype.toString.call(e)}function r(e){return!!e&&"[object Array]"==Object.prototype.toString.call(e)
}function n(e){return o.push(e),e}function i(e){for(var r=[],i=0;i<e.length;i++)t(e[i])&&r.push(n(e[i]));return r}var a=this,o=[];r(e)&&i(e),a.clear=function(){return o.length=0,o},a.get=function(){return o},a.put=function(e){return t(e)?n(e):r(e)?i(e):void 0}}},{}],6:[function(e,t){t.exports=function(){var e=this,t=/\{(.*?)\}/g;e.setTemplatePattern=function(e){t=e},e.render=function(e,r){return e.replace(t,function(e,t){return r[t]||e})}}},{}],7:[function(e){!function(t){"use strict";function r(){function e(){s.put(g.dataSource),f()}function t(e){u.load(e,function(t,n){t?r("failed to get JSON ("+e+")"):(s.put(n),f())})}function r(e){throw new Error("SimpleJekyllSearch --- "+e)}function n(e){for(var t=0;t<h.length;t++){var n=h[t];e[n]||r("You must specify a "+n)}}function i(e){for(var t in g)g[t]=e[t]||g[t]}function a(e){try{return e instanceof Object&&JSON.parse(JSON.stringify(e))}catch(t){return!1}}function o(){g.resultsContainer.innerHTML=""}function d(e){g.resultsContainer.innerHTML+=e}function f(){g.searchInput.addEventListener("keyup",function(e){return 0==e.target.value.length?void o():void p(l.search(s,e.target.value))})}function p(e){if(o(),0==e.length)return d(g.noResultsText);for(var t=0;t<e.length;t++)d(c.render(g.searchResultTemplate,e[t]))}var b=this,h=["searchInput","resultsContainer","dataSource"],g={searchInput:null,resultsContainer:null,dataSource:[],searchResultTemplate:'<li><a href="{url}" title="{desc}">{title}</a></li>',noResultsText:"No results found",limit:10,fuzzy:!1};b.init=function(r){n(r),i(r),a(g.dataSource)?e(g.dataSource):t(g.dataSource)}}var n=e("./Searcher"),i=e("./Templater"),a=e("./Store"),o=e("./JSONLoader"),l=new n,c=new i,s=new a,u=new o;t.SimpleJekyllSearch=new r}(window,document)},{"./JSONLoader":1,"./Searcher":4,"./Store":5,"./Templater":6}]},{},[7]);var jekyllInput=document.getElementById("search-input");jekyllInput&&SimpleJekyllSearch.init({searchInput:document.getElementById("search-input"),resultsContainer:document.getElementById("results-container"),dataSource:"/articles/search.json",searchResultTemplate:'<li><a href="{url}" title="{desc}">{title}</a></li>',noResultsText:"<li>Aucun résultat trouvé</li>",limit:10,fuzzy:!1}),!function(e){function t(e,t){var r=new Image,n=e.getAttribute("data-src");r.onload=function(){e.parent?e.parent.replaceChild(r,e):e.src=n,e.className="fadein",t?t():null},r.src=n}for(var r=function(e,t){if(document.querySelectorAll)t=document.querySelectorAll(e);else{var r=document,n=r.styleSheets[0]||r.createStyleSheet();n.addRule(e,"f:b");for(var i=r.all,a=0,o=[],l=i.length;l>a;a++)i[a].currentStyle.f&&o.push(i[a]);n.removeRule(0),t=o}return t},n=new Array,i=r("img.lazy"),a=function(){for(var e=0;e<n.length;e++)elementInViewport(n[e])&&t(n[e],function(){n.splice(e,e)})},o=0;o<i.length;o++)n.push(i[o]);a(),e.addEventListener("scroll",a)}(this);