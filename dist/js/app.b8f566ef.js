(function(e){function t(t){for(var o,a,i=t[0],u=t[1],b=t[2],f=0,l=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);s&&s(t);while(l.length)l.shift()();return c.push.apply(c,b||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"09ecd9eb"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(e);var b=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",b.name="ChunkLoadError",b.type=o,b.request=c,n[1](b)}r[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],b=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var s=b;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0066":function(e,t){},2245:function(e,t,n){e.exports=n.p+"img/twitter-svgrepo-com.c95cbd88.svg"},2686:function(e,t,n){e.exports=n.p+"img/home-svgrepo-com.8369a2d1.svg"},5687:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=n("2686"),c=n.n(r),a=n("785a"),i=n.n(a),u=n("bbfb"),b=n.n(u),f=n("d284"),s=n.n(f),l=n("2245"),p=n.n(l),d=n("b376"),m=n.n(d),g={id:"nav"},j=Object(o["e"])("img",{src:c.a,width:"12",height:"12"},null,-1),O=Object(o["f"])(" Inicio"),v=Object(o["f"])("Quem sou eu"),h=Object(o["f"])("O que faço"),w=Object(o["f"])("Os meus Hobbies"),y=Object(o["e"])("div",{id:"social"},[Object(o["e"])("a",{href:"https://www.facebook.com/vicente.alves.980"},[Object(o["e"])("img",{src:i.a})]),Object(o["e"])("a",{href:"https://www.instagram.com/vicente.alves.980"},[Object(o["e"])("img",{src:b.a})]),Object(o["e"])("a",{href:"https://www.linkedin.com"},[Object(o["e"])("img",{src:s.a})]),Object(o["e"])("a",{href:"https://www.twitter.com"},[Object(o["e"])("img",{src:p.a})]),Object(o["e"])("a",{href:"https://www.youtube.com"},[Object(o["e"])("img",{src:m.a})])],-1);function P(e,t){var n=Object(o["t"])("router-link"),r=Object(o["t"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",g,[Object(o["g"])(n,{to:"/"},{default:Object(o["x"])((function(){return[j,O]})),_:1}),Object(o["g"])(n,{to:"/sou"},{default:Object(o["x"])((function(){return[v]})),_:1}),Object(o["g"])(n,{to:"/faco"},{default:Object(o["x"])((function(){return[h]})),_:1}),Object(o["g"])(n,{to:"/hobbie"},{default:Object(o["x"])((function(){return[w]})),_:1})]),Object(o["g"])(r),y],64)}n("6925");var x=n("6b0d"),k=n.n(x);const _={},S=k()(_,[["render",P]]);var A=S,M=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),T=n("b53f"),I=[{path:"/",name:"Inicio",component:T["default"],meta:{title:"MiniProj1 - PWA",metaTags:[{name:"description",content:"Inicio da SPA"},{property:"og:description",content:"Inicio da SPA"}]}},{path:"/sou",name:"Sou",component:function(){return n.e("about").then(n.bind(null,"02bf"))}},{path:"/faco",name:"Faco",component:function(){return n.e("about").then(n.bind(null,"44e2"))}},{path:"/hobbie",name:"Hobbie",component:function(){return n.e("about").then(n.bind(null,"a331"))}}],C=Object(M["a"])({history:Object(M["b"])(),routes:I}),E=C,W=n("ecee"),q=n("c074");W["a"].add(q["a"]),Object(o["c"])(A).use(E).mount("#app")},6925:function(e,t,n){"use strict";n("5687")},"785a":function(e,t,n){e.exports=n.p+"img/facebook-svgrepo-com.9d8b1246.svg"},b376:function(e,t,n){e.exports=n.p+"img/youtube-svgrepo-com.9b9cb801.svg"},b53f:function(e,t,n){"use strict";var o=n("da02"),r=n("ecc7"),c=n("6b0d"),a=n.n(c);const i=a()(r["default"],[["render",o["a"]]]);t["default"]=i},bbfb:function(e,t,n){e.exports=n.p+"img/instagram-svgrepo-com.14fb6fc9.svg"},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d284:function(e,t,n){e.exports=n.p+"img/linkedin-svgrepo-com.838f6035.svg"},da02:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var o=n("7a23"),r=n("cf05"),c=n.n(r),a={class:"inicio"},i=Object(o["e"])("h1",null,"MiniProj1 - PWA",-1),u=Object(o["e"])("img",{alt:"Vue logo",src:c.a},null,-1),b=Object(o["e"])("br",null,null,-1),f=Object(o["f"])(" Projeto para a Unidade Curricular: Programação Web Avançada."),s=Object(o["e"])("br",null,null,-1),l=Object(o["f"])(" Uso da framework "),p=Object(o["e"])("b",null,"Vue.js",-1),d=Object(o["f"])(" para uma Single Page Application. "),m=[i,u,b,f,s,l,p,d];function g(e,t,n,r,c,i){return Object(o["p"])(),Object(o["d"])("div",a,m)}},ecc7:function(e,t,n){"use strict";var o=n("0066"),r=n.n(o);n.d(t,"default",(function(){return r.a}))}});
//# sourceMappingURL=app.b8f566ef.js.map