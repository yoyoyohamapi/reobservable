(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{165:function(t,s,a){t.exports=a.p+"assets/img/error.6611f047.png"},170:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"errorstate-state"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#errorstate-state","aria-hidden":"true"}},[t._v("#")]),t._v(" ErrorState State")]),t._v(" "),n("p",[t._v("Sometimes, you may want know if a service or flow failed. If so, you may display a error message on your web page:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(165),alt:""}})]),t._v(" "),n("p",[t._v("In reobservable, there is a built-in sub-state called "),n("code",[t._v("error")]),t._v(" in the root state:")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  error"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    services"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      fetchUser"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'bad request'")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    flows"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v("'user/fetch'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'cannot read id of undefined'")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("As you can see, there are two type of error state in reobservable.")]),t._v(" "),n("h2",{attrs:{id:"service-error"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#service-error","aria-hidden":"true"}},[t._v("#")]),t._v(" Service Error")]),t._v(" "),n("p",[t._v("Service error indicates if a service is failed. You call a service inside a flow like:")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" model "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'user'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// ....")]),t._v("\n  flows"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("fetch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flow$"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action$"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload$"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dependencies"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" api "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" dependencies"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("services\n      \n      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" flow$"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("pipe")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("switchMap")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("success$"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error$"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("api")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// service name")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v("'fetchUser'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            service"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("fetchUser")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Because we named the service "),n("code",[t._v("fetchUser")]),t._v(", then we can inspect service error by:")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("mapStateToProps")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IState"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" userFetchError "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" state"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("services"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'fetchUser'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"flow-error"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flow-error","aria-hidden":"true"}},[t._v("#")]),t._v(" Flow Error")]),t._v(" "),n("p",[t._v("Flow error indicates if a flow is failed. Like service error, you can access flow error by:")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("mapStateToProps")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IState"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nameChangingError "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" state"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flows"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'user/changeName'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],e=a(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);r.options.__file="error-state.md";s.default=r.exports}}]);