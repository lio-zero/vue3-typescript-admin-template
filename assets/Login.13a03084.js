var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,i=(e,l)=>{for(var a in l||(l={}))o.call(l,a)&&s(e,a,l[a]);if(t)for(var a of t(l))n.call(l,a)&&s(e,a,l[a]);return e},u=(e,t)=>l(e,a(t)),d=(e,l,a)=>new Promise(((t,o)=>{var n=e=>{try{i(a.next(e))}catch(l){o(l)}},s=e=>{try{i(a.throw(e))}catch(l){o(l)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,s);i((a=a.apply(e,l)).next())}));import{u as r,i as c,a as b,b as m,c as v,d as p,e as h,f,w as x,n as g,g as k,r as y,h as L,t as C,j as w,k as B,l as S,m as E,o as _,p as V,q as I,s as F,v as O,x as j,y as z,z as D,A as N,B as P,C as U,F as G,D as $,E as R,G as M,H as q,_ as A,I as K,J as H,K as J,L as Q,M as T,N as W,O as X,P as Y,Q as Z,R as ee,S as le,T as ae,U as te,V as oe,W as ne,X as se,Y as ie}from"./index.13804650.js";import{E as ue,a as de,b as re,c as ce}from"./el-input.0ffd6499.js";import{_ as be,E as me}from"./el-divider.68244146.js";import{u as ve,a as pe,E as he}from"./el-button.2773165c.js";import{U as fe,d as xe}from"./event.e664c4c7.js";const ge=Symbol("checkboxGroupContextKey"),ke={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:r,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ye={[fe]:e=>c(e)||b(e)||m(e),change:e=>c(e)||b(e)||m(e)},Le=(e,{model:l,isLimitExceeded:a,hasOwnLabel:t,isDisabled:o,isLabeledByFormItem:n})=>{const s=v(ge,void 0),{formItem:i}=ve(),{emit:u}=k();function r(l){var a,t;return l===e.trueLabel||!0===l?null==(a=e.trueLabel)||a:null!=(t=e.falseLabel)&&t}const c=p((()=>(null==s?void 0:s.validateEvent)||e.validateEvent));return x((()=>e.modelValue),(()=>{c.value&&(null==i||i.validate("change").catch((e=>xe())))})),{handleChange:function(e){if(a.value)return;const l=e.target;u("change",r(l.checked),e)},onClickRoot:function(s){return d(this,null,(function*(){if(!a.value&&!t.value&&!o.value&&n.value){s.composedPath().some((e=>"LABEL"===e.tagName))||(l.value=r([!1,e.falseLabel].includes(l.value)),yield g(),function(e,l){u("change",r(e),l)}(l.value,s))}}))}}},Ce=(e,l)=>{const{formItem:a}=ve(),{model:t,isGroup:o,isLimitExceeded:n}=(e=>{const l=y(!1),{emit:a}=k(),t=v(ge,void 0),o=p((()=>!1===h(t))),n=y(!1);return{model:p({get(){var a,n;return o.value?null==(a=null==t?void 0:t.modelValue)?void 0:a.value:null!=(n=e.modelValue)?n:l.value},set(e){var s,i;o.value&&L(e)?(n.value=void 0!==(null==(s=null==t?void 0:t.max)?void 0:s.value)&&e.length>(null==t?void 0:t.max.value),!1===n.value&&(null==(i=null==t?void 0:t.changeEvent)||i.call(t,e))):(a(fe,e),l.value=e)}}),isGroup:o,isLimitExceeded:n}})(e),{isFocused:s,isChecked:i,checkboxButtonSize:u,checkboxSize:d,hasOwnLabel:r}=((e,l,{model:a})=>{const t=v(ge,void 0),o=y(!1),n=p((()=>{const l=a.value;return m(l)?l:L(l)?l.map(C).includes(e.label):null!=l?l===e.trueLabel:!!l}));return{checkboxButtonSize:w(p((()=>{var e;return null==(e=null==t?void 0:t.size)?void 0:e.value})),{prop:!0}),isChecked:n,isFocused:o,checkboxSize:w(p((()=>{var e;return null==(e=null==t?void 0:t.size)?void 0:e.value}))),hasOwnLabel:p((()=>!(!l.default&&!e.label)))}})(e,l,{model:t}),{isDisabled:c}=(({model:e,isChecked:l})=>{const a=v(ge,void 0),t=p((()=>{var t,o;const n=null==(t=null==a?void 0:a.max)?void 0:t.value,s=null==(o=null==a?void 0:a.min)?void 0:o.value;return!h(n)&&e.value.length>=n&&!l.value||!h(s)&&e.value.length<=s&&l.value}));return{isDisabled:f(p((()=>(null==a?void 0:a.disabled.value)||t.value))),isLimitDisabled:t}})({model:t,isChecked:i}),{inputId:b,isLabeledByFormItem:x}=pe(e,{formItemContext:a,disableIdGeneration:r,disableIdManagement:o}),{handleChange:g,onClickRoot:B}=Le(e,{model:t,isLimitExceeded:n,hasOwnLabel:r,isDisabled:c,isLabeledByFormItem:x});return((e,{model:l})=>{e.checked&&(L(l.value)&&!l.value.includes(e.label)?l.value.push(e.label):l.value=e.trueLabel||!0)})(e,{model:t}),{inputId:b,isLabeledByFormItem:x,isChecked:i,isDisabled:c,isFocused:s,checkboxButtonSize:u,checkboxSize:d,hasOwnLabel:r,model:t,handleChange:g,onClickRoot:B}},we=["tabindex","role","aria-checked"],Be=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],Se=["id","aria-hidden","disabled","value","name","tabindex"],Ee=B({name:"ElCheckbox"});var _e=A(B(u(i({},Ee),{props:ke,emits:ye,setup(e){const l=e,a=S(),{inputId:t,isLabeledByFormItem:o,isChecked:n,isDisabled:s,isFocused:i,checkboxSize:u,hasOwnLabel:d,model:r,handleChange:c,onClickRoot:b}=Ce(l,a),m=E("checkbox");return(e,l)=>(_(),V(q(!j(d)&&j(o)?"span":"label"),{class:O([j(m).b(),j(m).m(j(u)),j(m).is("disabled",j(s)),j(m).is("bordered",e.border),j(m).is("checked",j(n))]),"aria-controls":e.indeterminate?e.controls:null,onClick:j(b)},{default:I((()=>[F("span",{class:O([j(m).e("input"),j(m).is("disabled",j(s)),j(m).is("checked",j(n)),j(m).is("indeterminate",e.indeterminate),j(m).is("focus",j(i))]),tabindex:e.indeterminate?0:void 0,role:e.indeterminate?"checkbox":void 0,"aria-checked":e.indeterminate?"mixed":void 0},[e.trueLabel||e.falseLabel?z((_(),D("input",{key:0,id:j(t),"onUpdate:modelValue":l[0]||(l[0]=e=>N(r)?r.value=e:null),class:O(j(m).e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,tabindex:e.tabindex,disabled:j(s),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:l[1]||(l[1]=(...e)=>j(c)&&j(c)(...e)),onFocus:l[2]||(l[2]=e=>i.value=!0),onBlur:l[3]||(l[3]=e=>i.value=!1)},null,42,Be)),[[P,j(r)]]):z((_(),D("input",{key:1,id:j(t),"onUpdate:modelValue":l[4]||(l[4]=e=>N(r)?r.value=e:null),class:O(j(m).e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:j(s),value:e.label,name:e.name,tabindex:e.tabindex,onChange:l[5]||(l[5]=(...e)=>j(c)&&j(c)(...e)),onFocus:l[6]||(l[6]=e=>i.value=!0),onBlur:l[7]||(l[7]=e=>i.value=!1)},null,42,Se)),[[P,j(r)]]),F("span",{class:O(j(m).e("inner"))},null,2)],10,we),j(d)?(_(),D("span",{key:0,class:O(j(m).e("label"))},[U(e.$slots,"default"),e.$slots.default?M("v-if",!0):(_(),D(G,{key:0},[$(R(e.label),1)],64))],2)):M("v-if",!0)])),_:3},8,["class","aria-controls","onClick"]))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const Ve=["name","tabindex","disabled","true-value","false-value"],Ie=["name","tabindex","disabled","value"],Fe=B({name:"ElCheckboxButton"});var Oe=A(B(u(i({},Fe),{props:ke,emits:ye,setup(e){const l=e,a=S(),{isFocused:t,isChecked:o,isDisabled:n,checkboxButtonSize:s,model:i,handleChange:u}=Ce(l,a),d=v(ge,void 0),r=E("checkbox"),c=p((()=>{var e,l,a,t;const o=null!=(l=null==(e=null==d?void 0:d.fill)?void 0:e.value)?l:"";return{backgroundColor:o,borderColor:o,color:null!=(t=null==(a=null==d?void 0:d.textColor)?void 0:a.value)?t:"",boxShadow:o?`-1px 0 0 0 ${o}`:void 0}}));return(e,l)=>(_(),D("label",{class:O([j(r).b("button"),j(r).bm("button",j(s)),j(r).is("disabled",j(n)),j(r).is("checked",j(o)),j(r).is("focus",j(t))])},[e.trueLabel||e.falseLabel?z((_(),D("input",{key:0,"onUpdate:modelValue":l[0]||(l[0]=e=>N(i)?i.value=e:null),class:O(j(r).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:j(n),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:l[1]||(l[1]=(...e)=>j(u)&&j(u)(...e)),onFocus:l[2]||(l[2]=e=>t.value=!0),onBlur:l[3]||(l[3]=e=>t.value=!1)},null,42,Ve)),[[P,j(i)]]):z((_(),D("input",{key:1,"onUpdate:modelValue":l[4]||(l[4]=e=>N(i)?i.value=e:null),class:O(j(r).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:j(n),value:e.label,onChange:l[5]||(l[5]=(...e)=>j(u)&&j(u)(...e)),onFocus:l[6]||(l[6]=e=>t.value=!0),onBlur:l[7]||(l[7]=e=>t.value=!1)},null,42,Ie)),[[P,j(i)]]),e.$slots.default||e.label?(_(),D("span",{key:2,class:O(j(r).be("button","inner")),style:K(j(o)?j(c):void 0)},[U(e.$slots,"default",{},(()=>[$(R(e.label),1)]))],6)):M("v-if",!0)],2))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const je=H({modelValue:{type:J(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:r,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),ze={[fe]:e=>L(e),change:e=>L(e)},De=B({name:"ElCheckboxGroup"});var Ne=A(B(u(i({},De),{props:je,emits:ze,setup(e,{emit:l}){const a=e,t=E("checkbox"),{formItem:o}=ve(),{inputId:n,isLabeledByFormItem:s}=pe(a,{formItemContext:o}),r=e=>d(this,null,(function*(){l(fe,e),yield g(),l("change",e)})),c=p({get:()=>a.modelValue,set(e){r(e)}});return Q(ge,u(i({},T(W(a),["size","min","max","disabled","validateEvent","fill","textColor"])),{modelValue:c,changeEvent:r})),x((()=>a.modelValue),(()=>{a.validateEvent&&(null==o||o.validate("change").catch((e=>xe())))})),(e,l)=>{var a;return _(),V(q(e.tag),{id:j(n),class:O(j(t).b("group")),role:"group","aria-label":j(s)?void 0:e.label||"checkbox-group","aria-labelledby":j(s)?null==(a=j(o))?void 0:a.labelId:void 0},{default:I((()=>[U(e.$slots,"default")])),_:3},8,["id","class","aria-label","aria-labelledby"])}}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const Pe=X(_e,{CheckboxButton:Oe,CheckboxGroup:Ne});Y(Oe),Y(Ne);const Ue=Z({username:"admin",password:"123456"});const Ge=e=>(ne("data-v-9bf7b3e6"),e=e(),se(),e),$e={class:"flex items-center justify-center h-screen login"},Re=Ge((()=>F("p",{class:"mb-2 font-bold"}," 你好! ",-1))),Me=Ge((()=>F("p",{class:"mb-1 color-808080 text-13px"}," 请登录您的帐户 ",-1))),qe={class:"flex justify-around mt-1 text-13px"},Ae=B({name:"Login"}),Ke=ie(B(u(i({},Ae),{setup(e){const l=y(!1),a=y(),t=ee(),o=le(),n=Z({username:[{required:!0,trigger:"blur",validator:(e,l,a)=>{["admin","editor","lio"].includes(l.trim())?a():a(new Error("请输入正确的用户名"))}}],password:[{required:!0,trigger:"blur",validator:(e,l,a)=>{l.length<6?a(new Error("密码不能少于6位")):a()}}]}),s=e=>d(this,null,(function*(){e&&(yield e.validate(((e,l)=>d(this,null,(function*(){e?(yield o.login(Ue),oe.success("登录成功"),t.push({path:"/"})):oe.error("用户名、密码错误")})))))}));return(e,t)=>{const o=be,i=ue,u=de,d=Pe,r=he,c=me,b=ae("router-link"),m=re,v=ce;return _(),D(G,null,[F("div",null,[te(o,{class:"absolute top-4 right-4"})]),F("div",$e,[te(v,{class:"w-380px"},{default:I((()=>[te(m,{ref_key:"loginForm",ref:a,"label-width":"60px",model:j(Ue),rules:n,"label-position":"top"},{default:I((()=>[Re,Me,te(u,{label:"用户名",prop:"username"},{default:I((()=>[te(i,{modelValue:j(Ue).username,"onUpdate:modelValue":t[0]||(t[0]=e=>j(Ue).username=e)},null,8,["modelValue"])])),_:1}),te(u,{label:"密码",prop:"password"},{default:I((()=>[te(i,{modelValue:j(Ue).password,"onUpdate:modelValue":t[1]||(t[1]=e=>j(Ue).password=e),type:"password"},null,8,["modelValue"])])),_:1}),te(u,null,{default:I((()=>[te(r,{class:"btn-half"},{default:I((()=>[te(d,{modelValue:j(Ue).rememberMe,"onUpdate:modelValue":t[2]||(t[2]=e=>j(Ue).rememberMe=e)},{default:I((()=>[$(" 记住我 ")])),_:1},8,["modelValue"])])),_:1}),te(r,{class:"btn-half",type:"primary",icon:"Lock",loading:l.value,onClick:t[3]||(t[3]=e=>s(a.value))},{default:I((()=>[$(" 登录 ")])),_:1},8,["loading"])])),_:1}),te(c),F("div",qe,[te(b,{class:"forgot-password",to:"/login"},{default:I((()=>[$(" 忘记密码了？ ")])),_:1}),te(b,{class:"create-account",to:"/signup"},{default:I((()=>[$(" 创建一个帐户 ")])),_:1})])])),_:1},8,["model","rules"])])),_:1})])],64)}}})),[["__scopeId","data-v-9bf7b3e6"]]);export{Ke as default};
