(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{LP2m:function(t,e,s){"use strict";var a=s("l1hy"),i=s.n(a);i.a},"c8+F":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"register-form"},[t.errors?s("div",[s("pre",[t._v(t._s(t.errors))])]):t._e(),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Name:")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Email:")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Password:")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),s("div",{staticClass:"field is-grouped"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-link",on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Register")])])])])},i=[],r=(s("f3/d"),s("N4Yp")),n={name:"Register",data:function(){return{name:"",email:"",password:"",errors:null}},methods:{submit:function(){var t=this,e={user:{username:this.name,email:this.email,password:this.password}};this.errors=null,r["a"].register(e).then(function(){t.$router.push({name:"HomeFeeds"})}).catch(function(e){t.errors=e.response.data.errors})}}},l=n,o=(s("LP2m"),s("KHd+")),c=Object(o["a"])(l,a,i,!1,null,null,null);e["default"]=c.exports},"f3/d":function(t,e,s){var a=s("hswa").f,i=Function.prototype,r=/^\s*function ([^ (]*)/,n="name";n in i||s("nh4g")&&a(i,n,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},l1hy:function(t,e,s){}}]);
//# sourceMappingURL=9.a85b6856.js.map