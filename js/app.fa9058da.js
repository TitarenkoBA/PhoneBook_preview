(function(t){function e(e){for(var o,a,s=e[0],c=e[1],u=e[2],d=0,h=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(h.length)h.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),i=n.n(o);i.a},"0b57":function(t,e,n){},"0e5e":function(t,e,n){"use strict";var o=n("9922"),i=n.n(o);i.a},1667:function(t,e,n){"use strict";var o=n("337c"),i=n.n(o);i.a},"1b98":function(t,e,n){"use strict";var o=n("9d45"),i=n.n(o);i.a},"238b":function(t,e,n){},2801:function(t,e,n){},"337c":function(t,e,n){},"346c":function(t,e,n){},"3c45":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"db",(function(){return Gt}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h1",[t._v(t._s(this.$route.name))]),n("p",["Главная"!==this.$route.name?n("router-link",{attrs:{to:"/",exact:""}},[t._v("Главная / ")]):t._e(),n("router-link",{attrs:{to:this.$route.path}},[t._v(t._s(this.$route.name))])],1)])},s=[],c={name:"Header"},u=c,l=(n("7b4a"),n("2877")),d=Object(l["a"])(u,a,s,!1,null,"6ecb2ced",null),h=d.exports,p={name:"App",components:{Header:h}},f=p,m=(n("034f"),Object(l["a"])(f,i,r,!1,null,null,null)),_=m.exports,b=(n("4de4"),n("7db0"),n("c740"),n("caad"),n("fb6a"),n("a434"),n("d3b7"),n("25f0"),n("2532"),n("5530")),v=n("2909"),E=n("2f62"),g=[{phone:79001111111,id:1},{phone:79002222222,id:2},{phone:79003333333,id:3},{phone:79004444444,id:4},{phone:79005555555,id:5},{phone:79006666666,id:6},{phone:79007777777,id:7},{phone:79008888888,id:8},{phone:79009999999,id:9},{phone:79001010101,id:10},{phone:79001212121,id:11},{phone:79001313131,id:12},{phone:79001414141,id:13},{phone:79001515151,id:14},{phone:79001616161,id:15},{phone:79001717171,id:16},{phone:79001818181,id:17},{phone:79001919191,id:18},{phone:79002020202,id:19},{phone:79002121212,id:20},{phone:79002323232,id:21},{phone:79002424242,id:22},{phone:79002525252,id:23},{phone:79002626262,id:24},{phone:79002727272,id:25},{phone:79002828282,id:26},{phone:79002929292,id:27},{phone:79003030303,id:28},{phone:79003131313,id:29},{phone:79003232323,id:30}],N=g;o["a"].use(E["a"]);var P=new E["a"].Store({state:{Numbers:[],FilteredNumbers:[],LinesInPage:5,CurrentPage:1,EditingNumber:null,LoadingPhones:null},mutations:{GET_NUMBERS:function(t){t.Numbers=Object(v["a"])(JSON.parse(localStorage.getItem("PhoneNumbers")))},UPDATE_LOCAL_STORAGE:function(t){t.Numbers=Object(v["a"])(JSON.parse(localStorage.getItem("PhoneNumbers")))},LOAD_PHONES:function(t){t.LoadingPhones=null;var e=t.CurrentPage,n=t.LinesInPage,o=Object(v["a"])(t.Numbers);setTimeout((function(){t.LoadingPhones=Object(v["a"])(o.slice((e-1)*n,n*e)),t.FilteredNumbers=Object(v["a"])(t.LoadingPhones)}),1e3)},SEARCH:function(t,e){var n=Object(v["a"])(t.LoadingPhones),o=n.filter((function(t){return t.phone.toString().includes(e)}));t.FilteredNumbers=e?Object(v["a"])(o):Object(v["a"])(n)},ADD_NUMBER:function(t,e){if(e){var n=Object(v["a"])(t.Numbers),o={phone:+e,id:+(e.toString()+Math.floor(1e3*Math.random()))};n.unshift(o),t.Numbers=Object(v["a"])(n),t.CurrentPage=1}},DELETE_NUMBER:function(t,e){var n=Object(v["a"])(t.Numbers),o=n.findIndex((function(t){return t.id===e}));n.splice(o,1),t.Numbers=Object(v["a"])(n)},EDIT_NUMBER:function(t,e){var n=t.Numbers.find((function(t){return t.id===e}));t.EditingNumber=Object(b["a"])({},n)},CHANGE_NUMBER:function(t,e){if(e.phone){t.EditingNumber=null;var n=Object(v["a"])(t.Numbers),o=n.findIndex((function(t){return t.id===e.id}));n[o].phone=e.phone,t.Numbers=Object(v["a"])(n)}},CHANGE_LINES_PER_PAGE:function(t,e){t.LinesInPage=e,t.CurrentPage=1},PAGE_UP:function(t,e){var n=t.CurrentPage;n<e?n++:n=e,t.CurrentPage=n},PAGE_DOWN:function(t){var e=t.CurrentPage;e>1?e--:e=1,t.CurrentPage=e}},actions:{GET_NUMBERS:function(t){var e=t.commit;localStorage.getItem("LoadNumbersFlag")||(localStorage.setItem("LoadNumbersFlag",1),localStorage.setItem("PhoneNumbers",JSON.stringify(N))),e("GET_NUMBERS")},UPDATE_LOCAL_STORAGE:function(t){var e=t.commit;localStorage.setItem("PhoneNumbers",JSON.stringify(Object(v["a"])(this.state.Numbers))),e("UPDATE_LOCAL_STORAGE")},LOAD_PHONES:function(t){var e=t.commit;e("LOAD_PHONES")},SEARCH:function(t,e){var n=t.commit;n("SEARCH",e)},ADD_NUMBER:function(t,e){var n=t.commit;n("ADD_NUMBER",e)},DELETE_NUMBER:function(t,e){var n=t.commit;n("DELETE_NUMBER",e)},EDIT_NUMBER:function(t,e){var n=t.commit;n("EDIT_NUMBER",e)},CHANGE_NUMBER:function(t,e){var n=t.commit;n("CHANGE_NUMBER",e)},CHANGE_LINES_PER_PAGE:function(t,e){var n=t.commit;n("CHANGE_LINES_PER_PAGE",e)},PAGE_UP:function(t,e){var n=t.commit;n("PAGE_UP",e)},PAGE_DOWN:function(t){var e=t.commit;e("PAGE_DOWN")}},modules:{}}),O=n("8c4f"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Главная страница")]),n("ButtonRound",{attrs:{color:"light_blue",click:t.goStopList}},[n("span",[t._v("Стоп-лист")])])],1)},A=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:this.color,on:{click:this.click}},[t._t("default")],2)},R=[],$={name:"ButtonRound",props:{color:String,click:Function}},C=$,B=(n("77b9"),Object(l["a"])(C,L,R,!1,null,"00d6c072",null)),j=B.exports,D={name:"Main",components:{ButtonRound:j},methods:{goStopList:function(){this.$router.push("/Stop-list")}}},k=D,U=(n("c3e2"),Object(l["a"])(k,S,A,!1,null,"9e4ddf0e",null)),y=U.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stop_list_container"},[n("div",{staticClass:"stop_list_container__buttons_panel"},[n("Search"),n("RightButtonsPanel")],1),null!==this.$store.state.LoadingPhones?n("div",[n("PhoneListHeader"),t._l(t.phones,(function(t){return n("PhoneListItem",{key:t.id,attrs:{number:t.phone,id:t.id}})})),n("PhoneListFooter")],2):n("div",[t._m(0)])])},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-circle"},[n("div")])}],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(t._s(this.number))]),n("p",[n("i",{staticClass:"fas fa-pen",on:{click:this.edit}}),n("i",{staticClass:"fas fa-trash-alt",on:{click:this.delete}})])])},H=[],x={name:"PhoneListItem",props:["number","id"],methods:{edit:function(){this.$store.dispatch("EDIT_NUMBER",this.id),this.$router.push("/EditNumber")},delete:function(){this.$store.dispatch("DELETE_NUMBER",this.id),this.$store.dispatch("UPDATE_LOCAL_STORAGE"),this.$store.dispatch("LOAD_PHONES")}}},I=x,w=(n("d1a3"),Object(l["a"])(I,T,H,!1,null,"7ea20f7b",null)),F=w.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("Телефон")]),n("p",[t._v("Действия")])])}],q={name:"PhoneListHeader"},z=q,K=(n("b9e0"),Object(l["a"])(z,J,W,!1,null,"3ede55d2",null)),Q=K.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("Строк на странице:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.lines,expression:"lines"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.lines=e.target.multiple?n:n[0]},t.changeLines]}},t._l(5,(function(e){return n("option",{key:e,domProps:{value:5*e}},[t._v(t._s(5*e))])})),0),n("p",[t._v(t._s(t.page)+" из "+t._s(t.pages))]),n("p",[n("a",{on:{click:function(e){return e.preventDefault(),t.pageDown(e)}}},[t._v("<")]),n("a",{on:{click:function(e){return e.preventDefault(),t.pageUp(e)}}},[t._v(">")])])])},X=[],Y={name:"PhoneListFooter",data:function(){return{lines:this.$store.state.LinesInPage}},computed:{page:function(){return this.$store.state.CurrentPage},pages:function(){return this.$store.state.Numbers.length%this.lines===0?this.$store.state.Numbers.length/this.lines:Math.floor(this.$store.state.Numbers.length/this.lines+1,0)}},methods:{changeLines:function(){this.$store.dispatch("CHANGE_LINES_PER_PAGE",this.lines),this.$store.dispatch("LOAD_PHONES")},pageUp:function(){this.$store.dispatch("PAGE_UP",this.pages),this.$store.dispatch("LOAD_PHONES")},pageDown:function(){this.$store.dispatch("PAGE_DOWN"),this.$store.dispatch("LOAD_PHONES")}}},Z=Y,tt=(n("bd1e"),Object(l["a"])(Z,V,X,!1,null,"49bd5f40",null)),et=tt.exports,nt=function(){var t=this,e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("ButtonRound",{attrs:{color:"green",click:function(){return t.$router.push("/AddNumber")}}},[o("span",[e._v("Добавить")])]),o("ButtonRound",{attrs:{color:"light_blue",click:function(){return!1}}},[o("i",{staticClass:"fas fa-file"})]),o("ButtonRound",{attrs:{color:"purple",click:function(){return!1}}},[o("i",{staticClass:"fas fa-file"})])],1)},ot=[],it={name:"RightButtonsPanel",components:{ButtonRound:j}},rt=it,at=(n("946a"),Object(l["a"])(rt,nt,ot,!1,null,"3ba96b4c",null)),st=at.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fas fa-search"}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneSearchField,expression:"phoneSearchField"}],attrs:{type:"tel",name:"tel",placeholder:"Искать"},domProps:{value:t.phoneSearchField},on:{keyup:t.validation,input:function(e){e.target.composing||(t.phoneSearchField=e.target.value)}}}),n("ButtonRound",{attrs:{color:"blue",click:t.search}},[n("span",[t._v("Найти")])]),n("ButtonRound",{attrs:{color:"red",click:t.clear}},[n("i",{staticClass:"fas fa-trash-alt"})])],1)},ut=[],lt=(n("ac1f"),n("5319"),n("841c"),{name:"Search",components:{ButtonRound:j},data:function(){return{phoneSearchField:null}},methods:{validation:function(){var t=document.querySelector("input"),e=t.value;this.phoneSearchField=e.replace(/[^\d]/g,"")},search:function(){this.$store.dispatch("SEARCH",this.phoneSearchField)},clear:function(){this.phoneSearchField="",this.search()}}}),dt=lt,ht=(n("0e5e"),Object(l["a"])(dt,ct,ut,!1,null,"75eb28a2",null)),pt=ht.exports,ft={name:"StopListContainer",components:{Search:pt,RightButtonsPanel:st,PhoneListHeader:Q,PhoneListFooter:et,PhoneListItem:F},computed:{phones:function(){return this.$store.state.FilteredNumbers}},methods:{loadPhones:function(){this.$store.dispatch("LOAD_PHONES")}},mounted:function(){this.$store.dispatch("GET_NUMBERS"),this.loadPhones()}},mt=ft,_t=(n("691c"),Object(l["a"])(mt,G,M,!1,null,"062ff355",null)),bt=_t.exports,vt=function(){var t=this,e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("div",{staticClass:"add_number_container"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"tel",name:"tel",placeholder:"Телефон"},domProps:{value:e.phone},on:{keyup:e.validation,input:function(t){t.target.composing||(e.phone=t.target.value)}}}),o("ButtonRound",{attrs:{color:"light_blue",click:e.addNumber}},[o("i",{staticClass:"fas fa-check"})])],1),o("ButtonRound",{staticClass:"add_number_container__button_back",attrs:{color:"light",click:function(){return t.$router.push("/Stop-list")}}},[o("span",[e._v("Назад")])])],1)},Et=[],gt={name:"AddNumber",components:{ButtonRound:j},data:function(){return{phone:null}},methods:{validation:function(){var t=document.querySelector("input"),e=t.value;this.phone=e.replace(/[^\d]/g,"")},addNumber:function(){this.$store.dispatch("ADD_NUMBER",this.phone),this.$store.dispatch("UPDATE_LOCAL_STORAGE"),this.$router.push("/Stop-list")}}},Nt=gt,Pt=(n("1667"),Object(l["a"])(Nt,vt,Et,!1,null,"08dfb17c",null)),Ot=Pt.exports,St=function(){var t=this,e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("div",{staticClass:"edit_number_container"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"tel",name:"tel",placeholder:"Телефон"},domProps:{value:e.phone},on:{keyup:e.validation,input:function(t){t.target.composing||(e.phone=t.target.value)}}}),o("ButtonRound",{attrs:{color:"light_blue",click:e.changeNumber}},[o("i",{staticClass:"fas fa-check"})])],1),o("ButtonRound",{staticClass:"edit_number_container__button_back",attrs:{color:"light",click:function(){return t.$router.push("/Stop-list")}}},[o("span",[e._v("Назад")])])],1)},At=[],Lt={name:"EditNumber",components:{ButtonRound:j},data:function(){return{editingNumber:this.$store.state.EditingNumber,phone:this.$store.state.EditingNumber.phone}},methods:{validation:function(){var t=document.querySelector("input"),e=t.value;this.phone=e.replace(/[^\d]/g,"")},changeNumber:function(){var t=this.editingNumber;t.phone=this.phone,this.$store.dispatch("CHANGE_NUMBER",t),this.$store.dispatch("UPDATE_LOCAL_STORAGE"),this.$router.push("/Stop-list")}}},Rt=Lt,$t=(n("1b98"),Object(l["a"])(Rt,St,At,!1,null,"0641ad62",null)),Ct=$t.exports;o["a"].use(O["a"]);var Bt=[{path:"/",name:"Главная",component:y},{path:"/Stop-list",name:"Стоп-лист",component:bt},{path:"/AddNumber",name:"Добавить номер",component:Ot},{path:"/EditNumber",name:"Редактировать номер",component:Ct}],jt=new O["a"]({mode:"hash",base:"/",routes:Bt}),Dt=jt,kt=n("0ff2"),Ut=n("59ca"),yt=n.n(Ut);n("e71f");o["a"].use(kt["a"]),yt.a.initializeApp({projectId:"phonebook-8baf4",databaseURL:"https://phonebook-8baf4.firebaseio.com"});var Gt=yt.a.firestore();o["a"].config.productionTip=!1,new o["a"]({router:Dt,store:P,render:function(t){return t(_)}}).$mount("#app")},"691c":function(t,e,n){"use strict";var o=n("346c"),i=n.n(o);i.a},"77b9":function(t,e,n){"use strict";var o=n("2801"),i=n.n(o);i.a},"7b4a":function(t,e,n){"use strict";var o=n("a5bc"),i=n.n(o);i.a},"85ec":function(t,e,n){},"946a":function(t,e,n){"use strict";var o=n("238b"),i=n.n(o);i.a},9922:function(t,e,n){},"9d45":function(t,e,n){},a5bc:function(t,e,n){},b9e0:function(t,e,n){"use strict";var o=n("3c45"),i=n.n(o);i.a},bd1e:function(t,e,n){"use strict";var o=n("0b57"),i=n.n(o);i.a},c3e2:function(t,e,n){"use strict";var o=n("d4a0"),i=n.n(o);i.a},c984:function(t,e,n){},d1a3:function(t,e,n){"use strict";var o=n("c984"),i=n.n(o);i.a},d4a0:function(t,e,n){}});
//# sourceMappingURL=app.fa9058da.js.map