(function(e){function t(t){for(var a,r,i=t[0],c=t[1],u=t[2],l=0,h=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},s={app:0},o=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5d382cca"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"c7143710"}[e]+".css",s=c.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return t()}var h=document.getElementsByTagName("style");for(i=0;i<h.length;i++){u=h[i],l=u.getAttribute("data-href");if(l===a||l===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],d.parentNode.removeChild(d),n(o)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var h=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",h.name="ChunkLoadError",h.type=a,h.request=r,n[1](h)}s[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var a=n("8a23"),r=n.n(a);r.a},"0786":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-alert",{staticClass:"ml-3 mr-3",attrs:{dismissible:"",value:e.show,type:e.type}},[e._v(" "+e._s(e.text)+" ")])},r=[],s=n("2b0e"),o=s["a"].extend({name:"CommonNotification",computed:{show:{get:function(){return this.$store.getters.isShown()},set:function(e){this.$store.dispatch("setCommonNotificationValue",e)}},text:function(){return this.$store.getters.notificationText()},type:function(){return this.$store.getters.notificationType()}}}),i=o,c=n("2877"),u=n("6544"),l=n.n(u),h=n("0798"),d=Object(c["a"])(i,a,r,!1,null,"40ea026c",null);t["a"]=d.exports;l()(d,{VAlert:h["a"]})},"8a23":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},s=[],o=a["a"].extend({name:"App",components:{},data:function(){return{}}}),i=o,c=(n("034f"),n("2877")),u=n("6544"),l=n.n(u),h=n("7496"),d=Object(c["a"])(i,r,s,!1,null,null,null),m=d.exports;l()(d,{VApp:h["a"]});var p=n("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var f=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"default-dark-db fill-height"},[n("LoginAppBar"),n("v-main",{staticClass:"default-dark-db fill-height"},[n("v-row",{staticClass:"fill-height",attrs:{"align-content":"center"}},[n("v-col",{staticClass:"d-flex fill-height flex-column justify-space-between align-center",attrs:{"align-self":"center"}},[n("v-card",{staticClass:"w-auto h-100 default-dark-db",attrs:{color:"#f6f6f6",elevation:"0"}},[n("CommonNotification"),n("v-card-title",{staticClass:"mt-4 d-flex flex-row justify-center"},[n("h2",[e._v(" Welcome back! ")])]),n("v-card-text",[n("transition",{attrs:{"enter-active-class":"animate__bounceInLeft"}},[e.shownFields?n("v-text-field",{attrs:{placeholder:"Login",color:"green"},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}}):e._e()],1),n("transition",{attrs:{"enter-active-class":"animate__bounceInRight"}},[e.shownFields?n("v-text-field",{attrs:{placeholder:"Password",color:"green",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}):e._e()],1),n("transition",{attrs:{"enter-active-class":"animate__bounceInLeft"}},[!e.isLogin&&e.shownFields?n("v-text-field",{attrs:{placeholder:"Verify password",type:"password",color:"green"},model:{value:e.verifyPassword,callback:function(t){e.verifyPassword=t},expression:"verifyPassword"}}):e._e()],1)],1),n("v-card-actions",{staticClass:"d-flex flex-row justify-center"},[n("v-btn",{attrs:{large:"",disabled:!e.isInputValid,color:e.isInputValid?"green":"black"},on:{click:function(t){return e.passThrough()}}},[e._v(" "+e._s(e.isLogin?"Sign in":"Sign up")+" ")])],1)],1),n("v-banner",{staticClass:"mb-12"},[e._v(" "+e._s(e.isLogin?"Don't have an account yet?":"Already have an account?")+" "),n("v-btn",{attrs:{text:""},on:{click:function(t){e.isLogin=!e.isLogin}}},[e._v(" "+e._s(e.isLogin?"Sign up":"Sign in")+" ")])],1)],1)],1)],1)],1)},v=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{color:"accent-4",dark:""}},[n("v-toolbar-title",[e._v("Sign in to Enchat")]),n("v-spacer")],1)},y=[],w=a["a"].extend({name:"LoginAppBar"}),k=w,C=n("40dc"),x=n("2fa4"),O=n("2a7f"),j=Object(c["a"])(k,b,y,!1,null,"449afc5d",null),S=j.exports;l()(j,{VAppBar:C["a"],VSpacer:x["a"],VToolbarTitle:O["a"]});var N=n("0786"),I=a["a"].extend({name:"Login",components:{LoginAppBar:S,CommonNotification:N["a"]},data:function(){return{login:"",password:"",verifyPassword:"",isLogin:!0,shownFields:!1}},created:function(){this.$store.dispatch("findLocalKeys").then((function(e){!0===e&&B.push("/home")}))},mounted:function(){this.shownFields=!0},methods:{passThrough:function(){this.isLogin?this.$store.dispatch("signIn",{login:this.login,password:this.password}).then((function(e){!0===e&&B.push("/home")})):this.$store.dispatch("signUp",{login:this.login,password:this.password}).then((function(e){!0===e&&B.push("/home")}))}},computed:{isInputValid:function(){return this.isLogin?""!==this.login&&""!==this.password:""!==this.login&&""!==this.password&&this.password===this.verifyPassword}}}),T=I,E=(n("eeb1"),n("e4e5")),R=n("8336"),P=n("b0af"),_=n("99d9"),L=n("62ad"),A=n("f6c4"),F=n("0fd9"),U=n("8654"),V=Object(c["a"])(T,g,v,!1,null,null,null),D=V.exports;l()(V,{VBanner:E["a"],VBtn:R["a"],VCard:P["a"],VCardActions:_["a"],VCardText:_["c"],VCardTitle:_["d"],VCol:L["a"],VMain:A["a"],VRow:F["a"],VTextField:U["a"]}),a["a"].use(f["a"]);var M=[{path:"/",name:"Login",component:D},{path:"/home",name:"Home",component:function(){return n.e("about").then(n.bind(null,"cbe8"))}},{path:"/users",name:"All users",component:function(){return n.e("about").then(n.bind(null,"4ca1"))}},{path:"/chat/:id",name:"Chat here",component:function(){return n.e("about").then(n.bind(null,"5c2b"))}}],K=new f["a"]({routes:M}),B=K,$=n("2f62"),q=n("675f"),J=(n("96cf"),n("1da1")),W=n("bee2"),Y=n("262e"),z=n("2caf"),H=n("d4ec"),G=n("bc3a"),Q=n.n(G);function X(e,t){return t?"/api/media/"+e:"/api/v1/"+e}var Z=function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=X(t,!1),e.prev=1,e.next=4,Q.a.get(n,{headers:{mobile:"true"}});case 4:a=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e["catch"](1),console.log("Request get error: ",e.t0),e.abrupt("return",{status:!1,data:null});case 11:return r=a.data.status,!0!==r&&console.log(a),e.abrupt("return",a.data);case 14:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,s,o,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=i.length>3&&void 0!==i[3]&&i[3],s=X(t,r),e.prev=2,r){e.next=9;break}return e.next=6,Q.a.post(s,n,{headers:{mobile:"true","Event-date":a}});case 6:o=e.sent,e.next=12;break;case 9:return e.next=11,Q.a.post(s,n,{headers:{"Content-Type":"multipart/form-data",mobile:"true","Event-date":a}});case 11:o=e.sent;case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e["catch"](2),console.log("Request post error: ",e.t0),e.abrupt("return",{status:!1,data:null});case 18:return!0!==o.data.status&&console.log("failed response: ",o),e.abrupt("return",o.data);case 20:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n,a){return e.apply(this,arguments)}}(),te=function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=X(t,!1),e.prev=1,e.next=4,Q.a.put(r,n,{headers:{mobile:"true","Event-date":a}});case 4:s=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e["catch"](1),console.log("Request put error: ",e.t0),e.abrupt("return",{status:!1,data:null});case 11:return!0!==s.data.status&&console.log("failed response: ",s),e.abrupt("return",s.data);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n,a){return e.apply(this,arguments)}}(),ne={get:Z,put:te,post:ee},ae=(n("a15b"),n("25f0"),n("6c27")),re=function(e){return Object(ae["sha256"])([e.username,e.password,e.username].join("&-")).toString()},se=function(e){return Object(ae["sha256"])([e.username,e.timeStamp,e.sessionKey,e.userSecret].join("")).toString()},oe=function(e){return Object(ae["sha224"])(e)},ie={generateToken:se,generateUserSecret:re,getSha224:oe},ce=function e(){Object(H["a"])(this,e),this.isLogged=!1},ue=function(e){Object(Y["a"])(n,e);var t=Object(z["a"])(n);function n(){return Object(H["a"])(this,n),t.apply(this,arguments)}return Object(W["a"])(n,[{key:"isLogged",get:function(){return this.state.isLogged}}]),n}(q["b"]),le=function(e){Object(Y["a"])(n,e);var t=Object(z["a"])(n);function n(){return Object(H["a"])(this,n),t.apply(this,arguments)}return Object(W["a"])(n,[{key:"setLoginState",value:function(e){this.state.isLogged=e}}]),n}(q["d"]),he=function(e){Object(Y["a"])(n,e);var t=Object(z["a"])(n);function n(){return Object(H["a"])(this,n),t.apply(this,arguments)}return Object(W["a"])(n,[{key:"signUp",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.password=ie.getSha224(t.password),e.next=3,ne.post("signup",{data:{username:t.login,password:t.password},auth:null},"");case 3:if(n=e.sent,!0!==n.status){e.next=11;break}return localStorage.setItem("username",t.login),localStorage.setItem("sessionKey",n.data.token),localStorage.setItem("userSecret",ie.generateUserSecret({username:t.login,password:t.password})),this.commit("setLoginState",!0),console.log("Signed up successfully: ",localStorage.getItem("sessionKey"),localStorage.getItem("userSecret")),e.abrupt("return",!0);case 11:return De.dispatch("showCommonNotification",{text:"Sign up failed. Please, try again.",type:"error"}).catch(console.error),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"signIn",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.password=ie.getSha224(t.password),e.next=3,ne.post("signin",{data:{username:t.login,password:t.password},auth:null},"");case 3:if(n=e.sent,!0!==n.status){e.next=11;break}return localStorage.setItem("username",t.login),localStorage.setItem("sessionKey",n.data.token),localStorage.setItem("userSecret",ie.generateUserSecret({username:t.login,password:t.password})),this.commit("setLoginState",!0),console.log("Signed in successfully: ",localStorage.getItem("sessionKey"),localStorage.getItem("userSecret")),e.abrupt("return",!0);case 11:return De.dispatch("showCommonNotification",{text:"Sign in failed. Please, try again.",type:"error"}).catch(console.error),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"findLocalKeys",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("sessionKey"),n=localStorage.getItem("userSecret"),!t||!n||""===n||""===t){e.next=6;break}return console.log("Keys found in storage"),this.commit("setLoginState",!0),e.abrupt("return",!0);case 6:return console.log("Keys not found in storage"),e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(q["a"]),de=new q["c"]({namespaced:!1,state:ce,getters:ue,mutations:le,actions:he}),me=(n("4160"),n("a434"),n("159b"),function e(){Object(H["a"])(this,e),this.id="",this.username="",this.email="",this.pool="",this.token="",this.userSecret="",this.allUsers=[]}),pe=function(e){Object(Y["a"])(n,e);var t=Object(z["a"])(n);function n(){return Object(H["a"])(this,n),t.apply(this,arguments)}return Object(W["a"])(n,[{key:"username",value:function(){return this.state.username}},{key:"email",value:function(){return this.state.email}},{key:"pool",value:function(){return this.state.pool}},{key:"allUsers",value:function(){return this.state.allUsers}},{key:"getNewToken",value:function(e){return ie.generateToken({username:this.state.username,timeStamp:e,sessionKey:this.state.token,userSecret:this.state.userSecret})}}]),n}(q["b"]),fe=function(e){Object(Y["a"])(n,e);var t=Object(z["a"])(n);function n(){return Object(H["a"])(this,n),t.apply(this,arguments)}return Object(W["a"])(n,[{key:"setToken",value:function(e){null!==e?this.state.token=e:(console.log("Error!!! Token not found!"),De.dispatch("showCommonNotification",{text:"Your authorization is not valid. Please, try to logout and login again.",type:"error"}).catch(console.error))}},{key:"setUserSecret",value:function(e){null!==e?this.state.userSecret=e:(De.dispatch("showCommonNotification",{text:"Your authorization is not valid. Please, try to logout and login again.",type:"error"}).catch(console.error),console.log("Error!!! User Secret not found!"))}},{key:"setUsername",value:function(e){null!==e&&(this.state.username=e)}},{key:"setEmail",value:function(e){this.state.email=e}},{key:"setPool",value:function(e){this.state.pool=e}},{key:"setAllUsers",value:function(e){var t=this;this.state.allUsers.splice(0,this.state.allUsers.length),e.forEach((function(e){t.state.allUsers.push(e)}))}}]),n}(q["d"]),ge=function(e){Object(Y["a"])(n,e);var t=Object(z["a"])(n);function n(){return Object(H["a"])(this,n),t.apply(this,arguments)}return Object(W["a"])(n,[{key:"loadDataLocalStorage",value:function(){this.commit("setUsername",localStorage.getItem("username")),this.commit("setToken",localStorage.getItem("sessionKey")),this.commit("setUserSecret",localStorage.getItem("userSecret"))}},{key:"initUserState",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.dispatch("loadDataLocalStorage"),t=Date.now().toString(),e.next=4,ne.post("user",{data:null,auth:{username:this.state.username,token:ie.generateToken({username:this.state.username,timeStamp:t,sessionKey:this.state.token,userSecret:this.state.userSecret})}},t);case 4:if(n=e.sent,!0===n.status){e.next=9;break}return console.log("Failed to get user data!"),De.dispatch("showCommonNotification",{text:"Error loading your data. Please, try to login again.",type:"error"}).catch(console.error),e.abrupt("return");case 9:return this.commit("setEmail",n.data.email),this.commit("setPool",n.data.poolId),this.dispatch("loadAllUsers"),e.next=14,De.dispatch("setAllChats",n.data.chats);case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"loadAllUsers",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.dispatch("loadDataLocalStorage"),t=Date.now().toString(),e.next=4,ne.post("all_users",{data:null,auth:{username:this.state.username,token:ie.generateToken({username:this.state.username,timeStamp:t,sessionKey:this.state.token,userSecret:this.state.userSecret})}},t);case 4:if(n=e.sent,!0===n.status){e.next=9;break}return console.log("Failed to get users!"),De.dispatch("showCommonNotification",{text:"Error loading users",type:"error"}).catch(console.error),e.abrupt("return");case 9:this.commit("setAllUsers",n.data);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"logInToPool",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Date.now().toString(),e.next=3,ne.post("pool",{data:t,auth:{username:this.state.username,token:ie.generateToken({username:this.state.username,timeStamp:n,sessionKey:this.state.token,userSecret:this.state.userSecret})}},n);case 3:if(a=e.sent,!0===a.status){e.next=8;break}return console.log("Failed to log in to pool"),De.dispatch("showCommonNotification",{text:"Error logging to pool.",type:"error"}).catch(console.error),e.abrupt("return");case 8:this.commit("setPool",t.poolId);case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"createPool",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Date.now().toString(),e.next=3,ne.put("pool",{data:t,auth:{username:this.state.username,token:ie.generateToken({username:this.state.username,timeStamp:n,sessionKey:this.state.token,userSecret:this.state.userSecret})}},n);case 3:if(a=e.sent,!0===a.status){e.next=8;break}return console.log("Failed to log in to pool"),De.dispatch("showCommonNotification",{text:"Error logging to pool.",type:"error"}).catch(console.error),e.abrupt("return");case 8:this.commit("setPool",t.poolId);case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),n}(q["a"]),ve=new q["c"]({namespaced:!1,state:me,getters:pe,mutations:fe,actions:ge}),be=(n("7db0"),n("c740"),n("d81d"),n("b0c0"),n("3ca3"),n("ddb0"),n("6821")),ye=n.n(be),we=function e(){Object(H["a"])(this,e),this.isNew=!1,this.chats=[],this.currentChat={id:"",admin:"",name:"",usernames:[],messages:[],storePeriod:24},this.generateMessageId=function(){return ye()(Date.now()+Math.random())}},ke=function(e){Object(Y["a"])(n,e);var t=Object(z["a"])(n);function n(){return Object(H["a"])(this,n),t.apply(this,arguments)}return Object(W["a"])(n,[{key:"getCurrentChat",value:function(){var e=this;return this.state.isNew?this.state.currentChat:this.state.chats.find((function(t){return t.id===e.state.currentChat.id}))}},{key:"getAllChats",value:function(){return this.state.chats}},{key:"isNew",value:function(){return this.state.isNew}},{key:"getChatById",value:function(e){var t=this.state.chats.find((function(t){return t.id===e}));return void 0===t?{id:"",name:"Chat",messages:[],usernames:[De.getters.username()],admin:De.getters.username(),storePeriod:24}:t}}]),n}(q["b"]),Ce=function(e){Object(Y["a"])(n,e);var t=Object(z["a"])(n);function n(){return Object(H["a"])(this,n),t.apply(this,arguments)}return Object(W["a"])(n,[{key:"sortChats",value:function(){this.state.chats.sort((function(e,t){return e.messages.length>0&&t.messages.length>0?t.messages[t.messages.length-1].date-e.messages[e.messages.length-1].date:1}))}},{key:"setChats",value:function(e){var t=this;this.state.chats.splice(0,this.state.chats.length),e.forEach((function(e){t.state.chats.push(e)}))}},{key:"addMessageToItsChat",value:function(e){this.state.chats.forEach((function(t){if(t.id===e.chatId){var n=t.messages.findIndex((function(t){return t.id===e.id}));n<0?t.messages.push(e):(t.messages[n].text=e.text,t.messages[n].state=e.state)}}))}},{key:"addMessageToCurrentChat",value:function(e){try{this.state.currentChat.messages.push(e)}catch(t){console.log("Failed to push to current chat: ",t)}}},{key:"addChat",value:function(e){console.log("Adding chat: ",e),void 0===e.messages&&(e.messages=new Array),void 0===this.state.chats.find((function(t){return t.id===e.id}))&&this.state.chats.push(e)}},{key:"setCurrentChat",value:function(e){this.state.currentChat=e}},{key:"setCurrentChatId",value:function(e){this.state.currentChat.id=e}},{key:"setChatData",value:function(e){var t=this.state.chats.find((function(t){return t.id===e.id}));void 0!==t?(t.name=e.name,t.usernames=e.usernames,t.admin=e.admin):this.state.chats.push(e)}},{key:"setCurrentChatName",value:function(e){var t=this;if(this.state.isNew)this.state.currentChat.name=e;else{var n=this.state.chats.find((function(e){return e.id===t.state.currentChat.id}));void 0!==n&&(n.name=e)}}},{key:"setNewValue",value:function(e){this.state.isNew=e}},{key:"setMessageState",value:function(e){e.message.state=e.state}},{key:"setCurrentChatStorePeriod",value:function(e){this.state.currentChat.storePeriod=e}}]),n}(q["d"]),xe=function(e){Object(Y["a"])(n,e);var t=Object(z["a"])(n);function n(){return Object(H["a"])(this,n),t.apply(this,arguments)}return Object(W["a"])(n,[{key:"sendMessageInChat",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var n,a,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n={id:this.state.generateMessageId(),sender:De.getters.username(),chatId:this.state.currentChat.id,date:Date.now(),state:1,text:t.message,attachedFileIds:[]},!this.state.isNew){e.next=25;break}if(console.log("Chat is new, creating"),this.commit("addMessageToCurrentChat",n),a=this.getters.getCurrentChat(),void 0===a){e.next=21;break}return e.prev=6,e.next=9,this.dispatch("createChat",a);case 9:a=e.sent,e.next=17;break;case 12:return e.prev=12,e.t0=e["catch"](6),console.log("Error creating chat: ",e.t0),De.dispatch("showCommonNotification",{text:"Error creating chat.",type:"error"}).catch(console.error),e.abrupt("return");case 17:this.commit("setCurrentChat",a),this.commit("setNewValue",!1),e.next=23;break;case 21:console.log("Current chat not found, wtf?"),De.dispatch("showCommonNotification",{text:"Error creating chat.",type:"error"}).catch(console.error);case 23:e.next=36;break;case 25:return console.log("Sending files: ",t.files),Array.isArray(t.files)&&t.files.length>0&&t.files.forEach((function(e){r.dispatch("uploadFile",{file:e,chatId:n.chatId}).then((function(e){""!==e?n.attachedFileIds.push(e):console.log("Error! File id is empty")})).catch(console.warn)})),e.prev=27,e.next=30,De.dispatch("sendSocketMessage",{type:1,message:n});case 30:e.next=36;break;case 32:e.prev=32,e.t1=e["catch"](27),console.log("Error sending message: ",e.t1),De.dispatch("showCommonNotification",{text:"Error sending message.",type:"error"}).catch(console.error);case 36:this.commit("addMessageToItsChat",n);case 37:case"end":return e.stop()}}),e,this,[[6,12],[27,32]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"uploadFile",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Date.now().toString(),e.next=3,ne.post("upload",{data:t.chatId,auth:{username:De.getters.username(),token:De.getters.getNewToken(n)}},n);case 3:if(a=e.sent,console.log("Lot request: ",a),!(!0!==a.status||a.data<0)){e.next=9;break}return console.log("Failed request to upload"),De.dispatch("showCommonNotification",{text:"Error loading file.",type:"error"}).catch(console.error),e.abrupt("return","");case 9:return r=new FormData,r.append("save_key",a.data),r.append("file",t.file),e.next=14,ne.post("upload",{data:r,auth:{username:De.getters.username(),token:De.getters.getNewToken(n)}},n,!0);case 14:if(s=e.sent,console.log("Upload request: ",s),!0===s.status){e.next=20;break}return console.log("Failed to upload file"),De.dispatch("showCommonNotification",{text:"Error uploading file.",type:"error"}).catch(console.error),e.abrupt("return","");case 20:return e.abrupt("return",s.data.toString());case 21:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"createChat",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Date.now().toString(),e.next=3,ne.post("chat",{data:t,auth:{username:De.getters.username(),token:De.getters.getNewToken(n)}},n);case 3:if(a=e.sent,!0===a.status){e.next=8;break}return console.log("Failed to send init message! Failed to create chat!"),De.dispatch("showCommonNotification",{text:"Chat is not created, please, try again.",type:"error"}).catch(console.error),e.abrupt("return",t);case 8:return r={id:a.data.id,admin:a.data.admin,name:a.data.name,usernames:a.data.usernames,messages:t.messages,storePeriod:24},this.commit("addChat",r),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"setCurrentChat",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.isNew?(n=t.data,a={id:"",name:De.getters.username()+" and "+n.username,usernames:[De.getters.username(),n.username],admin:De.getters.username(),messages:[],storePeriod:24},this.commit("setNewValue",!0),this.commit("setCurrentChat",a)):(r=t.data,this.commit("setCurrentChat",r),this.commit("setNewValue",!1),r.messages.forEach((function(e){e.sender!==De.getters.username()&&e.state<3&&(s.commit("setMessageState",{message:e,state:3}),De.dispatch("sendSocketMessage",{type:2,message:e}))})));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"setAllChats",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Date.now().toString(),e.next=3,ne.post("messages",{data:t,auth:{username:De.getters.username(),token:De.getters.getNewToken(n)}},n);case 3:if(a=e.sent,!0===a.status){e.next=7;break}return console.log("Error loading messages"),e.abrupt("return");case 7:t.messages=a.data?a.data:[],t.messages.forEach((function(e){return e.chatId=t.id}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:this.commit("setChats",t),this.commit("sortChats");case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"saveCurrentChatName",value:function(e){this.commit("setCurrentChatName",e);var t=this.getters.getCurrentChat();if(void 0!==t){var n=Date.now().toString();ne.post("name",{data:{id:t.id,name:t.name},auth:{username:De.getters.username(),token:De.getters.getNewToken(n)}},n).catch(console.warn)}}},{key:"addUserToCurrentChat",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Date.now().toString(),e.next=3,ne.post("add",{auth:{username:De.getters.username(),token:De.getters.getNewToken(n)},data:{user:{username:t},chat:this.getters.getCurrentChat()}},n);case 3:if(a=e.sent,!0===a.status){e.next=7;break}return console.log("Error add to chat: ",a.data),e.abrupt("return",!1);case 7:return e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"setCurrentChatId",value:function(e){this.commit("setCurrentChatId",e)}},{key:"setCurrentChatStorePeriod",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=Date.now().toString(),a=this.getters.getCurrentChat(),void 0!==a){e.next=5;break}return console.log("Modifying undef chat"),e.abrupt("return");case 5:return e.next=7,ne.post("period",{auth:{username:De.getters.username(),token:De.getters.getNewToken(n)},data:{id:a.id,name:a.name,storePeriod:t}},n);case 7:if(r=e.sent,!0===r.status){e.next=11;break}return console.log("Error save period: ",r.data),e.abrupt("return",!1);case 11:this.commit("setCurrentChatStorePeriod",t);case 12:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),n}(q["a"]),Oe=new q["c"]({namespaced:!1,state:we,getters:ke,mutations:Ce,actions:xe}),je=n("7e3c").w3cwebsocket,Se=1,Ne=2,Ie=function e(){Object(H["a"])(this,e),this.isConnected=!1},Te=function(e){Object(Y["a"])(n,e);var t=Object(z["a"])(n);function n(){return Object(H["a"])(this,n),t.apply(this,arguments)}return Object(W["a"])(n,[{key:"isConnected",value:function(){return this.state.isConnected}}]),n}(q["b"]),Ee=function(e){Object(Y["a"])(n,e);var t=Object(z["a"])(n);function n(){return Object(H["a"])(this,n),t.apply(this,arguments)}return Object(W["a"])(n,[{key:"setClient",value:function(e){this.state.client=e}},{key:"setConnected",value:function(e){this.state.isConnected=e}}]),n}(q["d"]),Re=function(e){Object(Y["a"])(n,e);var t=Object(z["a"])(n);function n(){return Object(H["a"])(this,n),t.apply(this,arguments)}return Object(W["a"])(n,[{key:"sendSocketMessage",value:function(e){void 0!==this.state.client&&this.state.isConnected?this.state.client.send(JSON.stringify(e)):(console.log("Error! IsConnected: ",this.state.isConnected," Client: ",this.state.client),De.dispatch("showCommonNotification",{text:"Connection error",type:"error"}).catch(console.error))}},{key:"initWebSocket",value:function(){var e=this;if(!this.state.isConnected){var t=Date.now().toString(),n=De.getters.username(),a=De.getters.getNewToken(t),r=new je("ws://localhost:8080/ws/connect?user="+n+"&token="+a+"&time="+t,"chat");r.onopen=function(){e.dispatch("onOpen")},r.onclose=function(){e.dispatch("onClose")},r.onmessage=function(t){e.dispatch("onMessage",t.data)},r.onerror=function(){console.log("Connection Error"),De.dispatch("showCommonNotification",{text:"Connection error",type:"error"}).catch(console.error)},this.commit("setClient",r)}}},{key:"onOpen",value:function(){console.log("Opened ws"),this.commit("setConnected",!0)}},{key:"onClose",value:function(){console.log("Closed ws"),this.commit("setConnected",!1)}},{key:"onMessage",value:function(e){console.log("Got message in ws: ",e);var t=JSON.parse(e);if(t.type===Se){var n=t.data;De.commit("addMessageToItsChat",n),n.sender!==De.getters.username()&&n.state<3&&this.dispatch("notifyUser",t)}else if(t.type===Ne){var a=Date.now().toString(),r=t.data;if(""!==De.getters.getChatById(r.id).id)return De.commit("setChatData",r),void console.log("Found and updated chat "+r.name);r.admin!==De.getters.username()&&(this.dispatch("notifyUser",t),ne.post("messages",{data:r,auth:{username:De.getters.username(),token:De.getters.getNewToken(a)}},a).then((function(e){!0===e.status?(Array.isArray(e.data)&&(r.messages=e.data),De.commit("addChat",r)):console.log("Error loading messages")})))}De.commit("sortChats")}},{key:"notifyUser",value:function(e){var t="",n="",a=[];if(e.type===Se){var r=e.data,s=De.getters.getChatById(r.chatId);t="New message in "+s.name,n=r.sender+": "+r.text,a=[{action:"open",title:"Open "+s.name}]}else if(e.type===Ne){var o=e.data;t="You've been added to chat "+o.name,n="Chat members: "+o.usernames.join(", "),a=[{action:"open",title:"Open "+o.name}]}"granted"===Notification.permission?navigator.serviceWorker.getRegistration().then((function(e){if(void 0!=e){var r={body:n,vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1},actions:a};e.showNotification(t,r).catch(console.warn)}else console.log("only works online")})):Notification.requestPermission((function(e){console.log("Notification permission status:",e)})).catch(console.warn)}}]),n}(q["a"]),Pe=new q["c"]({namespaced:!1,state:Ie,getters:Te,mutations:Ee,actions:Re}),_e=function e(){Object(H["a"])(this,e),this.show=!1,this.type="success",this.text=""},Le=function(e){Object(Y["a"])(n,e);var t=Object(z["a"])(n);function n(){return Object(H["a"])(this,n),t.apply(this,arguments)}return Object(W["a"])(n,[{key:"isShown",value:function(){return this.state.show}},{key:"notificationText",value:function(){return this.state.text}},{key:"notificationType",value:function(){return this.state.type}}]),n}(q["b"]),Ae=function(e){Object(Y["a"])(n,e);var t=Object(z["a"])(n);function n(){return Object(H["a"])(this,n),t.apply(this,arguments)}return Object(W["a"])(n,[{key:"setCommonNotificationValue",value:function(e){this.state.show=e}},{key:"setCommonNotificationText",value:function(e){this.state.text=e}},{key:"setCommonNotificationType",value:function(e){this.state.type=e}}]),n}(q["d"]),Fe=function(e){Object(Y["a"])(n,e);var t=Object(z["a"])(n);function n(){return Object(H["a"])(this,n),t.apply(this,arguments)}return Object(W["a"])(n,[{key:"showCommonNotification",value:function(e){this.commit("setCommonNotificationText",e.text),this.commit("setCommonNotificationType",e.type),this.commit("setCommonNotificationValue",!0)}},{key:"setCommonNotificationValue",value:function(e){this.commit("setCommonNotificationValue",e)}}]),n}(q["a"]),Ue=new q["c"]({namespaced:!1,state:_e,getters:Le,mutations:Ae,actions:Fe});a["a"].use($);var Ve=new q["c"]({modules:{Login:de,UserData:ve,Chats:Oe,WebSocket:Pe,CommonNotification:Ue}}),De=Object(q["e"])(Ve,{strict:!1}),Me=(n("d1e78"),n("f309")),Ke=n("0879");a["a"].use(Me["a"]);var Be=new Me["a"]({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{ru:Ke["a"]},current:"ru"}});a["a"].config.productionTip=!1,new a["a"]({router:B,store:De,vuetify:Be,render:function(e){return e(m)}}).$mount("#app")},e118:function(e,t,n){},eeb1:function(e,t,n){"use strict";var a=n("e118"),r=n.n(a);r.a}});
//# sourceMappingURL=app.3afe6555.js.map