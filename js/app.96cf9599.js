(function(){"use strict";var e={4204:function(e,n,t){var o=t(9242),r=t(3396);function i(e,n,t,i,a,s){const c=(0,r.up)("Navigation"),u=(0,r.up)("RouterView");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(c),(0,r.Wm)(u,{class:"router-view"},{default:(0,r.w5)((({Component:e})=>[(0,r.Wm)(o.uT,{name:"page-slide",mode:"out-in"},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)((0,r.LL)(e)))])),_:2},1024)])),_:1})],64)}var a=t(7139);const s={class:"main-nav"},c={key:0,class:"nav-hamburger"},u={key:1,class:"nav-menu"},l={key:2,class:"nav-toggle-btn"};function d(e,n,t,o,i,d){const f=(0,r.up)("font-awesome-icon"),m=(0,r.up)("router-link"),p=(0,r.up)("SwitchMode");return(0,r.wg)(),(0,r.iD)("nav",s,[i.mobileView?((0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(f,{icon:"fa-solid fa-bars",class:"icon",onClick:d.toggleNav},null,8,["onClick"])])):(0,r.kq)("",!0),i.showNav?((0,r.wg)(),(0,r.iD)("div",u,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.items,(e=>((0,r.wg)(),(0,r.j4)(m,{to:e.link,class:"nav-text",key:e.id},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.name),1)])),_:2},1032,["to"])))),128))])):(0,r.kq)("",!0),i.showNav?((0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(p)])):(0,r.kq)("",!0)])}const f=e=>((0,r.dD)("data-v-2c6a966f"),e=e(),(0,r.Cn)(),e),m={class:"switch"},p=f((()=>(0,r._)("span",{class:"slider round"},null,-1)));function h(e,n,t,o,i,a){return(0,r.wg)(),(0,r.iD)("label",m,[(0,r._)("input",{type:"checkbox",onClick:n[0]||(n[0]=n=>e.$store.commit("changeMode"))}),p])}var v={},g=t(89);const b=(0,g.Z)(v,[["render",h],["__scopeId","data-v-2c6a966f"]]);var w=b,k={name:"Navigation",components:{SwitchMode:w},data(){return{items:[{id:1,name:"Home",link:"/"},{id:2,name:"About",link:"/about"},{id:3,name:"Projects",link:"/projects"},{id:4,name:"Certifications",link:"/certifications"}],mobileView:!1,showNav:!0,mobileWidth:750}},methods:{handleView(){this.mobileView=window.innerWidth<=this.mobileWidth,window.innerWidth>this.mobileWidth?(this.showNav=!0,this.mobileView=!1):(this.showNav=!1,this.mobileView=!0)},toggleNav(){this.showNav=!this.showNav}},created(){window.addEventListener("resize",this.handleView)},unmounted(){window.removeEventListener("resize",this.handleView)}};const y=(0,g.Z)(k,[["render",d],["__scopeId","data-v-67f9f930"]]);var _=y,C={components:{Navigation:_},data(){return{secondaryColor:""}}};const N=(0,g.Z)(C,[["render",i]]);var j=N,D=t(5431);(0,D.z)("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var O=t(2483),x=t.p+"img/My_Photo1.f177533b.jpg";const A=e=>((0,r.dD)("data-v-57394ae3"),e=e(),(0,r.Cn)(),e),E={class:"main-container"},S={class:"section-left section"},W={class:"inner-con-text"},V=A((()=>(0,r._)("div",{class:"inner-con-text"},[(0,r._)("p",null,[(0,r.Uk)("Welcome to my fortfolio!! I am a Fresh Graduate of the course "),(0,r._)("span",null," Bachelor of Science in Information Technology "),(0,r.Uk)(". Aspiring to become a full stack web developer.")])],-1))),T={class:"inner-con-btn"},z=A((()=>(0,r._)("div",{class:"section-right section"},[(0,r._)("div",{class:"h-shape"}),(0,r._)("img",{src:x,alt:""})],-1)));function L(e,n,t,o,i,s){const c=(0,r.up)("ButtonCV");return(0,r.wg)(),(0,r.iD)("div",E,[(0,r._)("div",S,[(0,r._)("div",W,[(0,r._)("h1",null,[(0,r.Uk)("Hi, I'm "),(0,r._)("span",null,(0,a.zw)(i.name),1)])]),V,(0,r._)("div",T,[(0,r.Wm)(c)])]),z])}const P={class:"btn-con"},B=["href"],I={class:"btn-text"},M={class:"btn-icon"};function F(e,n,t,o,i,s){const c=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",P,[(0,r._)("a",{href:`${i.publicPath}Resume.pdf`,class:"main-btn",target:"_blank"},[(0,r._)("span",I,(0,a.zw)(i.button_text),1),(0,r._)("span",M,[(0,r.Wm)(c,{icon:"fa-solid fa-download",class:"icons"})])],8,B)])}var H={name:"ButtonCV",data(){return{button_text:"Download Resume",publicPath:""}}};const Z=(0,g.Z)(H,[["render",F],["__scopeId","data-v-076ff7a4"]]);var q=Z,R={name:"HomeView",components:{ButtonCV:q},data(){return{name:"Rafael Joseph Zaide",title:"Web developer"}}};const U=(0,g.Z)(R,[["render",L],["__scopeId","data-v-57394ae3"]]);var Y=U;const G=[{path:"/",name:"home",component:Y},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,3748))},{path:"/projects",name:"projects",component:()=>t.e(443).then(t.bind(t,1095))},{path:"/certifications",name:"certifications",component:()=>t.e(443).then(t.bind(t,7565))}],K=(0,O.p7)({history:(0,O.r5)(),routes:G});var $=K,J=t(65),Q=(0,J.MT)({state:{darkmode:!1},getters:{},mutations:{changeMode(e){e.darkmode=!e.darkmode,e.darkmode?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")}},actions:{},modules:{}}),X=t(3494),ee=t(7749),ne=t(8539),te=t(4551);X.vI.add(ne.mRB,te.neY,te.Zzi,te.zhw,te.D9H),(0,o.ri)(j).component("font-awesome-icon",ee.GN).use(Q).use($).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var u=r();void 0!==u&&(n=u)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.76103319.js"}}(),function(){t.miniCssF=function(e){return"css/about.e26425b7.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="zaide-portfolio:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+i),s.src=o),e[o]=[r];var f=function(n,t){s.onerror=s.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)o();else{var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,i.parentNode&&i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),s=t.p+a;if(n(a,s))return r();e(o,s,null,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={443:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),s=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],s=o[1],c=o[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(c)var l=c(t)}for(n&&n(o);u<a.length;u++)i=a[u],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},o=self["webpackChunkzaide_portfolio"]=self["webpackChunkzaide_portfolio"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(4204)}));o=t.O(o)})();
//# sourceMappingURL=app.96cf9599.js.map