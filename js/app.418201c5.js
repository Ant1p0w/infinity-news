(function(e){function n(n){for(var r,o,c=n[0],u=n[1],s=n[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(n);while(f.length)f.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==a[c]&&(r=!1)}r&&(i.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-7b7d6b8c":"4e7dc056"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-7b7d6b8c":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-7b7d6b8c":"abf9df1a"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return n()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var r=n&&n.target&&n.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),t(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var f=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(p);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var p=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},a=[],i={name:"App",components:{},data:function(){return{}}},c=i,u=t("2877"),s=Object(u["a"])(c,o,a,!1,null,null,null),l=s.exports,f=t("2f62");r["a"].use(f["a"]);var p=new f["a"].Store({state:{},mutations:{},actions:{},modules:{}}),d=(t("d3b7"),t("8c4f")),h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",{attrs:{dark:""}},[t("v-content",[t("v-container",{attrs:{fluid:""}},[t("app-main")],1)],1)],1)},v=[],m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"app-main"},[t("router-view",{key:e.key})],1)},g=[],b={name:"AppMain",computed:{key:function(){return this.$route.path}}},y=b,w=Object(u["a"])(y,m,g,!1,null,"471a74d4",null),k=w.exports,j={name:"Layout",created:function(){this.$vuetify.theme.dark=!0},components:{AppMain:k}},O=j,_=t("6544"),A=t.n(_),E=t("7496"),x=t("a523"),C=t("a75b"),S=Object(u["a"])(O,h,v,!1,null,"413febbd",null),P=S.exports;A()(S,{VApp:E["a"],VContainer:x["a"],VContent:C["a"]}),r["a"].use(d["a"]);var N=[{path:"/",component:P,redirect:"/news",children:[{path:"news",component:function(){return t.e("chunk-7b7d6b8c").then(t.bind(null,"7c64"))},name:"Новости",meta:{title:"Список новостей",icon:"news",affix:!0}}]}],T=function(){return new d["a"]({scrollBehavior:function(){return{y:0}},routes:N})},L=T(),M=L,$=t("f309");r["a"].use($["a"]);var B=new $["a"]({}),q=t("9483");Object(q["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:M,store:p,vuetify:B,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.418201c5.js.map