(function(){var t={4047:function(t,o,s){"use strict";var e=s(2856),r=s(1501),n=s(7673),i=(s(9313),function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"app"}},[o("router-view")],1)}),a=[],l=s(1656),c={},u=(0,l.A)(c,i,a,!1,null,null,null),p=u.exports,h=s(1594),d=function(){var t=this,o=t._self._c;return o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},[o("div",{staticClass:"fixed-left"},[o("div",{staticClass:"date-weather"},[o("span",{staticClass:"date"},[t._v(" "+t._s(t.date.year)),o("br"),t._v(" 年"),o("br"),t._v(" "+t._s(t.date.month)),o("br"),t._v(" 月"),o("br"),t._v(" "+t._s(t.date.day)),o("br"),t._v("日 ")]),o("img",{attrs:{src:t.weather.icon,alt:"weather"}}),o("span",{staticClass:"temperature"},[t._v(t._s(t.weather.temp)+"°")])]),t._m(0)]),o("div",{staticClass:"main-content ml-auto"},[o("div",{staticClass:"row"},t._l(t.sections,(function(s,e){return o("div",{key:e,staticClass:"col-md-2"},t._l(s,(function(s,r){return o("div",{key:`${e}${r}`,staticClass:"group-card"},[o("div",{staticClass:"group-icon"},[s.logo.length>0?[o("div",{staticClass:"group-icon-bak"},[o("img",{attrs:{src:s.logo,alt:s.title}})])]:[o("div",{staticClass:"group-icon-empty"})]],2),o("div",{staticClass:"group-content"},[-1!=s.totalPeople?o("div",{staticClass:"group-header",style:{borderColor:s.color,backgroundColor:s.color}},[o("div",{staticClass:"group-title"},[s.subTitle.length>0?[o("h4",[t._v(t._s(s.subTitle))])]:[o("h4",{staticStyle:{visibility:"hidden"}},[t._v("02")])],o("h4",{staticClass:"group-v-title"},[t._v(t._s(s.title))])],2),s.totalPeople>=0?o("div",{staticClass:"group-end"},[o("span",[t._v(t._s(s.totalPeople))]),o("p",[t._v("人")])]):t._e()]):t._e(),o("div",{staticClass:"group-body",style:{borderColor:s.color,minHeight:s.minHeight}},[o("table",{attrs:{width:"80%"}},[t._l(s.items,(function(n,i){return[t._l(n.workshops,(function(a,l,c){return[o("tr",{key:`${e}${r}${i}${c}`,style:{borderBottom:c+1==Object.keys(n.workshops).length&&s.items.length>1&&i+1!=s.items.length?`1px solid ${s.color}`:"0"}},[0==c&&n.title.length>0?[o("td",{staticClass:"group-body-title",style:{paddingTop:"10px",color:s.color},attrs:{valign:"top",rowspan:Object.keys(n.workshops).length}},[t._l(t.cutStr(n.title),(function(s,e){return o("div",{key:e,staticStyle:{padding:"0px",margin:"0px","line-height":"1"}},[t._v(" "+t._s(s)+" ")])})),o("br"),o("span",{staticClass:"group-h-title"},[t._v(t._s(n.total))]),o("br"),o("span",{staticClass:"group-v-title"},[t._v("人")])],2)]:t._e(),o("td",{staticClass:"group-body-text text-left"},[t._v(t._s(a.workshop))]),o("td",{staticClass:"group-body-text text-right"},[t._v(" "+t._s(a.count)+"人 ")])],2)]}))]}))],2)])])])})),0)})),0)])])])},j=[function(){var t=this,o=t._self._c;return o("div",{staticClass:"icon-comp"},[o("img",{attrs:{src:s(3153),alt:"title"}})])}],m=s(9412),g=s.n(m),k=s.p+"img/01.93265e24.png",f=s.p+"img/02.07d95643.png",w=s.p+"img/03.326bbac8.png",b=s.p+"img/04.1a0fc94c.png",v=s.p+"img/05.dc16de8b.png",y=s.p+"img/06.b6fe87c6.png",C=s.p+"img/07.0c8f0148.png",A=s.p+"img/08.51d1f48d.png",E=s.p+"img/09.f260252f.png",S=s.p+"img/10.5776bcf3.png",T=s(2257);const O=T.A.create({baseURL:"https://scout12-backend.69939.work",timeout:3e5});O.interceptors.request.use((t=>(t.headers["Content-Type"]="application/json",t)),(t=>(console.log(t),Promise.reject(t)))),O.interceptors.response.use((t=>{const o=t.data;return o}),(t=>"Error: Network Error"===t.toString()?void(window.location.href=BASE_URL):t.response?(console.error(t.response),console.error(t),t.response):{data:{status_code:5e4,msg:"No response"}}));var B=O;function _(t){return B({url:"/api/getWorkShops",method:"post",data:t})}function I(){return B({url:"/api/getWeater",method:"post"})}var M={data(){const t="44vh",o="22vh";return{sections:{"01四海文化村":{1:{id:1,subTitle:"01",minHeight:t,title:"四海文化村",logo:k,color:"#D82E1C",totalPeople:0,items:[{title:"",workshops:{},total:0}]}},"02生命教育中心":{1:{id:1,subTitle:"02",minHeight:t,title:"生命教育中心",logo:f,color:"#F3AAC1",totalPeople:0,items:[{title:"",workshops:{},total:0}]}},"03領導力發展中心":{1:{id:1,subTitle:"03",minHeight:t,title:"領導力發展中心",logo:w,color:"#257E51",totalPeople:0,items:[{title:"",workshops:{},total:0}]}},"04探索教育中心":{1:{id:1,subTitle:"04",minHeight:t,title:"探索教育中心",logo:b,color:"#6B6D2F",totalPeople:-2,items:[{title:"斥候工程組",workshops:{120411:{workshop:"",count:0},120412:{workshop:"",count:0},120413:{workshop:"",count:0},120414:{workshop:"",count:0},120415:{workshop:"",count:0},120416:{workshop:"",count:0},120417:{workshop:"",count:0}},total:0},{title:"繩索挑戰組",workshops:{120421:{workshop:"",count:0},120422:{workshop:"",count:0},120423:{workshop:"",count:0},120424:{workshop:"",count:0},120425:{workshop:"",count:0}},total:0}]}},"05童軍魔法學院":{1:{id:1,subTitle:"05",minHeight:t,title:"童軍魔法學院",logo:v,color:"#1B2C76",totalPeople:0,items:[{title:"",workshops:{},total:0}]}},"06科技城":{1:{id:1,subTitle:"06",minHeight:t,title:"科技城",logo:y,color:"#85C0DB",totalPeople:0,items:[{title:"",workshops:{},total:0}]}},"07宗教村":{1:{id:1,subTitle:"07",minHeight:o,title:"宗教村",logo:C,color:"#E5E141",totalPeople:0,items:[{title:"",workshops:{},total:0}]},2:{id:1,subTitle:"",minHeight:o,title:"展覽組",logo:"",color:"#00A0E9",totalPeople:0,items:[{title:"",workshops:{121101:{workshop:"",count:0},121111:{workshop:"",count:0},121121:{workshop:"",count:0}},total:0}]}},"08地球發展村":{1:{id:1,subTitle:"08",minHeight:t,title:"地球發展村",logo:A,color:"#118484",totalPeople:0,items:[{title:"",workshops:{},total:0}]}},"09特別活動中心":{1:{id:1,subTitle:"09",minHeight:t,title:"特別活動中心",logo:E,color:"#EB6100",totalPeople:0,items:[{title:"",workshops:{},total:0}]}},"09特別活動中心1":{1:{id:1,subTitle:"",minHeight:t,title:"",logo:"",color:"#EB6100",totalPeople:-1,items:[{title:"",workshops:{120911:{workshop:"",count:0},120912:{workshop:"",count:0},120913:{workshop:"",count:0},120914:{workshop:"",count:0}},total:0}]}},"10參觀旅行中心":{1:{id:1,subTitle:"10",minHeight:t,title:"參觀旅行中心",logo:S,color:"#F8B62D",totalPeople:0,items:[{title:"紅線",workshops:{121011:{workshop:"",count:0},121012:{workshop:"",count:0},121013:{workshop:"",count:0}},total:0},{title:"橙線",workshops:{121021:{workshop:"",count:0},121022:{workshop:"",count:0},121023:{workshop:"",count:0},121024:{workshop:"",count:0}},total:0},{title:"黃線",workshops:{121031:{workshop:"",count:0},121032:{workshop:"",count:0},121033:{workshop:"",count:0}},total:0},{title:"綠線",workshops:{121041:{workshop:"",count:0},121042:{workshop:"",count:0}},total:0}]}},"12d":{1:{id:1,minHeight:t,subTitle:"",title:"",logo:"",color:"#F8B62D",totalPeople:-1,items:[{title:"藍線",workshops:{121051:{workshop:"",count:0},121052:{workshop:"",count:0},121053:{workshop:"",count:0},121054:{workshop:"",count:0},121055:{workshop:"",count:0},121056:{workshop:"",count:0}},total:0},{title:"紫線",workshops:{121061:{workshop:"",count:0},121062:{workshop:"",count:0},121063:{workshop:"",count:0},121064:{workshop:"",count:0},121065:{workshop:"",count:0},121066:{workshop:"",count:0}},total:0},{title:"灰線",workshops:{121071:{workshop:"",count:0},121072:{workshop:"",count:0},121073:{workshop:"",count:0},121074:{workshop:"",count:0},121075:{workshop:"",count:0},121076:{workshop:"",count:0}},total:0}]}}},date:{year:parseInt(g()().format("YYYY"),10)-1911,month:g()().format("M"),day:g()().format("D")},weather:{temp:30,icon:"https://openweathermap.org/img/wn/10d@2x.png"},intervalId:null}},mounted(){this.fetchData(),this.fetchWeather(),this.intervalId=setInterval(this.fetchData,3e3)},beforeDestroy(){clearInterval(this.intervalId)},methods:{async fetchWeather(){try{const t=await I(),{date:o,weater:s}=t.data,e=g()(o);this.date.month=e.format("M"),this.date.day=e.format("D"),this.date.year=parseInt(e.format("YYYY"),10)-1911,this.weather.temp=Math.round(t.data.source.main.temp),this.weather.icon=`https://openweathermap.org/img/wn/${s[0].icon}@2x.png`}catch(t){console.error(t)}},async fetchData(){try{const t=await _({time:g()().format("YYYY-MM-DD HH:mm:ss")}),o=t.data.workshops;Object.keys(this.sections).forEach((t=>{Object.keys(this.sections[t]).forEach((s=>{const{items:e}=this.sections[t][s];e.forEach((t=>{const s=t;Object.keys(t.workshops).forEach((t=>{Object.prototype.hasOwnProperty.call(o,t)?(s.workshops[t].workshop=o[t].workshop_name,s.workshops[t].count=o[t].count,delete o[t]):delete s.workshops[t]}))}))}))})),Object.keys(o).forEach((t=>{const s=o[t],e=s.workshop_area.replaceAll(/\s+/g,""),{items:r}=this.sections[e]["1"];r[0].workshops[s.workshop_username]={workshop:s.workshop_name,count:s.count}})),Object.keys(this.sections).forEach((t=>{Object.keys(this.sections[t]).forEach((o=>{const s=this.sections[t][o],{items:e,totalPeople:r}=s;e.forEach((t=>{const o=t;let e=0;Object.keys(t.workshops).forEach((t=>{e+=o.workshops[t].count})),o.total=e,r>=0&&(s.totalPeople=o.total)}))}))}))}catch(t){console.error(t)}},cutStr(t){return t.split("")}}},P=M,z=(0,l.A)(P,d,j,!1,null,null,null),x=z.exports;e["default"].use(h.Ay);const N=[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:()=>s.e(594).then(s.bind(s,9220))}],D=new h.Ay({mode:"history",base:"/myproject/",routes:N});var U=D;e["default"].use(r.vGs),e["default"].use(n.YS),e["default"].config.productionTip=!1,new e["default"]({router:U,render:t=>t(p)}).$mount("#app")},5358:function(t,o,s){var e={"./af":54,"./af.js":54,"./ar":8650,"./ar-dz":3137,"./ar-dz.js":3137,"./ar-kw":9825,"./ar-kw.js":9825,"./ar-ly":4800,"./ar-ly.js":4800,"./ar-ma":7521,"./ar-ma.js":7521,"./ar-ps":1854,"./ar-ps.js":1854,"./ar-sa":9747,"./ar-sa.js":9747,"./ar-tn":6093,"./ar-tn.js":6093,"./ar.js":8650,"./az":3506,"./az.js":3506,"./be":1844,"./be.js":1844,"./bg":4238,"./bg.js":4238,"./bm":5452,"./bm.js":5452,"./bn":9877,"./bn-bd":4728,"./bn-bd.js":4728,"./bn.js":9877,"./bo":9158,"./bo.js":9158,"./br":3601,"./br.js":3601,"./bs":9698,"./bs.js":9698,"./ca":4225,"./ca.js":4225,"./cs":5247,"./cs.js":5247,"./cv":3508,"./cv.js":3508,"./cy":7065,"./cy.js":7065,"./da":3002,"./da.js":3002,"./de":7046,"./de-at":2662,"./de-at.js":2662,"./de-ch":640,"./de-ch.js":640,"./de.js":7046,"./dv":3155,"./dv.js":3155,"./el":9296,"./el.js":9296,"./en-au":9441,"./en-au.js":9441,"./en-ca":2659,"./en-ca.js":2659,"./en-gb":1106,"./en-gb.js":1106,"./en-ie":7625,"./en-ie.js":7625,"./en-il":7794,"./en-il.js":7794,"./en-in":5176,"./en-in.js":5176,"./en-nz":2379,"./en-nz.js":2379,"./en-sg":3625,"./en-sg.js":3625,"./eo":297,"./eo.js":297,"./es":653,"./es-do":763,"./es-do.js":763,"./es-mx":7975,"./es-mx.js":7975,"./es-us":5082,"./es-us.js":5082,"./es.js":653,"./et":8216,"./et.js":8216,"./eu":1375,"./eu.js":1375,"./fa":1132,"./fa.js":1132,"./fi":1460,"./fi.js":1460,"./fil":6074,"./fil.js":6074,"./fo":5602,"./fo.js":5602,"./fr":7957,"./fr-ca":3786,"./fr-ca.js":3786,"./fr-ch":273,"./fr-ch.js":273,"./fr.js":7957,"./fy":4100,"./fy.js":4100,"./ga":1205,"./ga.js":1205,"./gd":4730,"./gd.js":4730,"./gl":5938,"./gl.js":5938,"./gom-deva":2523,"./gom-deva.js":2523,"./gom-latn":9676,"./gom-latn.js":9676,"./gu":8697,"./gu.js":8697,"./he":9426,"./he.js":9426,"./hi":1830,"./hi.js":1830,"./hr":5611,"./hr.js":5611,"./hu":2178,"./hu.js":2178,"./hy-am":3117,"./hy-am.js":3117,"./id":9588,"./id.js":9588,"./is":305,"./is.js":305,"./it":5236,"./it-ch":9854,"./it-ch.js":9854,"./it.js":5236,"./ja":1296,"./ja.js":1296,"./jv":7669,"./jv.js":7669,"./ka":2729,"./ka.js":2729,"./kk":911,"./kk.js":911,"./km":6509,"./km.js":6509,"./kn":5092,"./kn.js":5092,"./ko":2091,"./ko.js":2091,"./ku":2709,"./ku-kmr":9294,"./ku-kmr.js":9294,"./ku.js":2709,"./ky":5329,"./ky.js":5329,"./lb":6255,"./lb.js":6255,"./lo":7084,"./lo.js":7084,"./lt":2013,"./lt.js":2013,"./lv":3419,"./lv.js":3419,"./me":4759,"./me.js":4759,"./mi":4331,"./mi.js":4331,"./mk":8237,"./mk.js":8237,"./ml":8888,"./ml.js":8888,"./mn":6706,"./mn.js":6706,"./mr":2518,"./mr.js":2518,"./ms":261,"./ms-my":7144,"./ms-my.js":7144,"./ms.js":261,"./mt":8048,"./mt.js":8048,"./my":2539,"./my.js":2539,"./nb":7005,"./nb.js":7005,"./ne":6152,"./ne.js":6152,"./nl":999,"./nl-be":2185,"./nl-be.js":2185,"./nl.js":999,"./nn":2329,"./nn.js":2329,"./oc-lnc":5673,"./oc-lnc.js":5673,"./pa-in":7820,"./pa-in.js":7820,"./pl":9265,"./pl.js":9265,"./pt":9577,"./pt-br":9202,"./pt-br.js":9202,"./pt.js":9577,"./ro":2710,"./ro.js":2710,"./ru":3924,"./ru.js":3924,"./sd":7406,"./sd.js":7406,"./se":8109,"./se.js":8109,"./si":7081,"./si.js":7081,"./sk":8279,"./sk.js":8279,"./sl":8598,"./sl.js":8598,"./sq":65,"./sq.js":65,"./sr":1320,"./sr-cyrl":9591,"./sr-cyrl.js":9591,"./sr.js":1320,"./ss":5935,"./ss.js":5935,"./sv":2468,"./sv.js":2468,"./sw":411,"./sw.js":411,"./ta":3354,"./ta.js":3354,"./te":9926,"./te.js":9926,"./tet":4424,"./tet.js":4424,"./tg":2108,"./tg.js":2108,"./th":8577,"./th.js":8577,"./tk":2232,"./tk.js":2232,"./tl-ph":1494,"./tl-ph.js":1494,"./tlh":7353,"./tlh.js":7353,"./tr":8871,"./tr.js":8871,"./tzl":8363,"./tzl.js":8363,"./tzm":1364,"./tzm-latn":2268,"./tzm-latn.js":2268,"./tzm.js":1364,"./ug-cn":7279,"./ug-cn.js":7279,"./uk":6869,"./uk.js":6869,"./ur":4926,"./ur.js":4926,"./uz":8150,"./uz-latn":2670,"./uz-latn.js":2670,"./uz.js":8150,"./vi":9940,"./vi.js":9940,"./x-pseudo":6507,"./x-pseudo.js":6507,"./yo":7893,"./yo.js":7893,"./zh-cn":7849,"./zh-cn.js":7849,"./zh-hk":1381,"./zh-hk.js":1381,"./zh-mo":6440,"./zh-mo.js":6440,"./zh-tw":9613,"./zh-tw.js":9613};function r(t){var o=n(t);return s(o)}function n(t){if(!s.o(e,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return e[t]}r.keys=function(){return Object.keys(e)},r.resolve=n,t.exports=r,r.id=5358},3153:function(t){"use strict";t.exports="data:image/png;base64,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"}},o={};function s(e){var r=o[e];if(void 0!==r)return r.exports;var n=o[e]={id:e,loaded:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=t,function(){var t=[];s.O=function(o,e,r,n){if(!e){var i=1/0;for(u=0;u<t.length;u++){e=t[u][0],r=t[u][1],n=t[u][2];for(var a=!0,l=0;l<e.length;l++)(!1&n||i>=n)&&Object.keys(s.O).every((function(t){return s.O[t](e[l])}))?e.splice(l--,1):(a=!1,n<i&&(i=n));if(a){t.splice(u--,1);var c=r();void 0!==c&&(o=c)}}return o}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[e,r,n]}}(),function(){s.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(o,{a:o}),o}}(),function(){s.d=function(t,o){for(var e in o)s.o(o,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(o,e){return s.f[e](t,o),o}),[]))}}(),function(){s.u=function(t){return"js/about.84a65906.js"}}(),function(){s.miniCssF=function(t){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={},o="project:";s.l=function(e,r,n,i){if(t[e])t[e].push(r);else{var a,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==o+n){a=p;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",o+n),a.src=e),t[e]=[r];var h=function(o,s){a.onerror=a.onload=null,clearTimeout(d);var r=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(t){return t(s)})),o)return o(s)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){s.p="/myproject/"}(),function(){var t={524:0};s.f.j=function(o,e){var r=s.o(t,o)?t[o]:void 0;if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(s,e){r=t[o]=[s,e]}));e.push(r[2]=n);var i=s.p+s.u(o),a=new Error,l=function(e){if(s.o(t,o)&&(r=t[o],0!==r&&(t[o]=void 0),r)){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;a.message="Loading chunk "+o+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,r[1](a)}};s.l(i,l,"chunk-"+o,o)}},s.O.j=function(o){return 0===t[o]};var o=function(o,e){var r,n,i=e[0],a=e[1],l=e[2],c=0;if(i.some((function(o){return 0!==t[o]}))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(l)var u=l(s)}for(o&&o(e);c<i.length;c++)n=i[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},e=self["webpackChunkproject"]=self["webpackChunkproject"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=s.O(void 0,[504],(function(){return s(4047)}));e=s.O(e)})();
//# sourceMappingURL=app.3ab83bf9.js.map