import{b,aH as h,d as S,ai as T,e as w,G as $,f as d,o as a,k as l,w as f,D as I,E as N,h as C,j as e,n as o,X as V,p as i,g as c,r as F,a0 as B,F as m,l as q,R as M,T as P,s as R,_ as j}from"./index.9923ee33.js";import{T as g,E as k,k as z}from"./index.2fab78f2.js";import{_ as G}from"./index.6e306d48.js";const H=["light","dark"],O=b({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:h(g),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:H,default:"light"}}),X={close:n=>n instanceof MouseEvent},J={name:"ElAlert"},K=S({...J,props:O,emits:X,setup(n,{emit:_}){const u=n,{Close:E}=z,p=T(),s=w("alert"),r=$(!0),y=d(()=>g[u.type]),A=d(()=>[s.e("icon"),{[s.is("big")]:!!u.description||!!p.default}]),D=d(()=>u.description||{[s.is("bold")]:p.default}),v=t=>{r.value=!1,_("close",t)};return(t,Y)=>(a(),l(P,{name:e(s).b("fade"),persisted:""},{default:f(()=>[I(C("div",{class:o([e(s).b(),e(s).m(t.type),e(s).is("center",t.center),e(s).is(t.effect)]),role:"alert"},[t.showIcon&&e(y)?(a(),l(e(k),{key:0,class:o(e(A))},{default:f(()=>[(a(),l(V(e(y))))]),_:1},8,["class"])):i("v-if",!0),C("div",{class:o(e(s).e("content"))},[t.title||t.$slots.title?(a(),c("span",{key:0,class:o([e(s).e("title"),e(D)])},[F(t.$slots,"title",{},()=>[B(m(t.title),1)])],2)):i("v-if",!0),t.$slots.default||t.description?(a(),c("p",{key:1,class:o(e(s).e("description"))},[F(t.$slots,"default",{},()=>[B(m(t.description),1)])],2)):i("v-if",!0),t.closable?(a(),c(M,{key:2},[t.closeText?(a(),c("div",{key:0,class:o([e(s).e("close-btn"),e(s).is("customed")]),onClick:v},m(t.closeText),3)):(a(),l(e(k),{key:1,class:o(e(s).e("close-btn")),onClick:v},{default:f(()=>[q(e(E))]),_:1},8,["class"]))],64)):i("v-if",!0)],2)],2),[[N,r.value]])]),_:3},8,["name"]))}});var L=G(K,[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]);const Q=R(L);const U={props:{title:{type:String,default:"\u4E0D\u8981\u5FD8\u8BB0\u5728\u7FA4\u91CC\u622A\u56FE\u6253\u5361\u54E6~",required:!1},description:{type:String,default:"\u672C\u5468\u5185\u505A\u9898\u8D85\u8FC7 14 \u9898\u5E76\u4E14\u6CA1\u6709\u5728\u5FAE\u4FE1\u7FA4\u622A\u56FE\u6253\u5361\u7684\u540C\u5B66\u5C06\u4F1A\u83B7\u5F97\u300E\u5077\u5B66\u5927\u5E08\u300F\u7684\u79F0\u53F7\uFF1B\u8FDE\u7EED\u4E24\u5468\u83B7\u53D6\u6B64\u79F0\u53F7\u7684\u540C\u5B66\u5C06\u4E0D\u518D\u53C2\u4E0E\u6392\u540D\u7EDF\u8BA1",required:!1}}};function W(n,_,u,E,p,s){const r=Q;return a(),l(r,{class:"alert",title:u.title,description:u.description,type:"error",closable:!1},null,8,["title","description"])}var te=j(U,[["render",W],["__scopeId","data-v-7ccf3f91"]]);export{te as _};
