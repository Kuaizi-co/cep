(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{263:function(e,t,l){},264:function(e,t,l){"use strict";
/*!
 * nano-assign v1.0.1
 * (c) 2018-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */e.exports=function(e){for(var t=arguments,l=1;l<arguments.length;l++)for(var s in arguments[l])e[s]=t[l][s];return e}},267:function(e,t,l){"use strict";l.r(t);l(263);var s=l(264),r=l.n(s),o={window:"style-module_window__283Ok",body:"style-module_body__14MV-",shadow:"style-module_shadow__3RfWD",dark:"style-module_dark__fHT4T",safe:"style-module_safe__202Ig"},n={header:"style-module_header__2fZK7",title:"style-module_title__3cIVr",bullets:"style-module_bullets__79QN2",bullet:"style-module_bullet__Ce0rQ","bullet-red":"style-module_bullet-red__3UfbN","bullet-yellow":"style-module_bullet-yellow__2GzZ-","bullet-green":"style-module_bullet-green__1JY6W",isUrl:"style-module_isUrl__2Iqlr",dark:"style-module_dark__2yIKV"},i={functional:!0,props:{title:{type:String,required:!0},isURL:{type:Boolean,default:!1},theme:{type:String}},render:function(e,t){var l=t.props,s=l.title,r=l.isURL,o=l.theme;return e("div",{class:[n.header,r&&n.isUrl,n[o]]},[e("div",{class:n.bullets},[e("span",{class:[n.bullet,n["bullet-red"]]}),e("span",{class:[n.bullet,n["bullet-yellow"]]}),e("span",{class:[n.bullet,n["bullet-green"]]})]),e("span",{class:n.title,domProps:{innerHTML:s}})])}},u={name:"editor-window",props:{title:{required:!0,type:String},browser:Boolean,height:[Number,String],width:[Number,String],theme:{type:String,validator:function(e){return["default","dark"].indexOf(e)>-1}},shadow:{type:Boolean,default:!1}},render:function(e){var t=this.$props,l=t.browser,s=t.title,r=t.height,n=t.width,u=t.theme,a=t.shadow;return e("div",{class:[o.window,u&&o[u],a&&o.shadow],style:{height:Boolean(r)&&("number"==typeof r?"".concat(r,"px"):r),width:Boolean(n)&&("number"==typeof n?"".concat(n,"px"):n)}},[e(i,{props:{title:s,isURL:l,theme:u}}),e("div",{class:o.body},this.$slots.default)])}},a={props:{title:{required:!0,type:String}},components:{bw:{name:"browser-window",props:u.props,render:function(e){var t=r()({browser:!0},this.$props);return"https://"===t.title.substr(0,8)&&(t.title='<span class="'.concat([o.safe,t.theme&&o[t.theme]].join(" "),'">https</span>').concat(t.title.substr(5))),e(u,{props:t},this.$slots.default)}}}},d=l(38),p=Object(d.a)(a,function(){var e=this.$createElement;return(this._self._c||e)("bw",{attrs:{title:this.title}},[this._t("default")],2)},[],!1,null,null,null);t.default=p.exports}}]);