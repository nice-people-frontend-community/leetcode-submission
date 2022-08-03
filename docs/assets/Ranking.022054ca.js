import{C as z,D as w,d as g,a4 as C,c as h,y as b,ai as O,a1 as G,o as c,i as j,g as _,z as v,q as y,u,A as x,ar as J,B as H,am as Q,b as i,aP as V,_ as W,r as X,f as m,a as Y,F,h as A,j as D,s as Z,x as M,l as B,t as E,e as ee}from"./index.69092200.js";import{E as te}from"./el-empty.d3e763df.js";import{r as se,E as ne}from"./el-row.b7afff47.js";import{m as N,_ as k,h as ae}from"./index.bddfb36e.js";const le=z({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:w([Number,Object]),default:()=>N({})},sm:{type:w([Number,Object]),default:()=>N({})},md:{type:w([Number,Object]),default:()=>N({})},lg:{type:w([Number,Object]),default:()=>N({})},xl:{type:w([Number,Object]),default:()=>N({})}}),ce={name:"ElCol"},re=g({...ce,props:le,setup(e){const t=e,{gutter:s}=C(se,{gutter:h(()=>0)}),a=b("col"),r=h(()=>{const n={};return s.value&&(n.paddingLeft=n.paddingRight=`${s.value/2}px`),n}),o=h(()=>{const n=[];return["span","offset","pull","push"].forEach(l=>{const f=t[l];O(f)&&(l==="span"?n.push(a.b(`${t[l]}`)):f>0&&n.push(a.b(`${l}-${t[l]}`)))}),["xs","sm","md","lg","xl"].forEach(l=>{O(t[l])?n.push(a.b(`${l}-${t[l]}`)):G(t[l])&&Object.entries(t[l]).forEach(([f,S])=>{n.push(f!=="span"?a.b(`${l}-${f}-${S}`):a.b(`${l}-${S}`))})}),s.value&&n.push(a.is("guttered")),n});return(n,d)=>(c(),j(J(n.tag),{class:y([u(a).b(),u(o)]),style:x(u(r))},{default:_(()=>[v(n.$slots,"default")]),_:3},8,["class","style"]))}});var oe=k(re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const ue=H(oe),ie={name:"ElContainer"},de=g({...ie,props:{direction:{type:String}},setup(e){const t=e,s=Q(),a=b("container"),r=h(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:s&&s.default?s.default().some(n=>{const d=n.type.name;return d==="ElHeader"||d==="ElFooter"}):!1);return(o,n)=>(c(),i("section",{class:y([u(a).b(),u(a).is("vertical",u(r))])},[v(o.$slots,"default")],2))}});var _e=k(de,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const pe={name:"ElAside"},fe=g({...pe,props:{width:{type:String,default:null}},setup(e){const t=e,s=b("aside"),a=h(()=>t.width?s.cssVarBlock({width:t.width}):{});return(r,o)=>(c(),i("aside",{class:y(u(s).b()),style:x(u(a))},[v(r.$slots,"default")],6))}});var R=k(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const me={name:"ElFooter"},he=g({...me,props:{height:{type:String,default:null}},setup(e){const t=e,s=b("footer"),a=h(()=>t.height?s.cssVarBlock({height:t.height}):{});return(r,o)=>(c(),i("footer",{class:y(u(s).b()),style:x(u(a))},[v(r.$slots,"default")],6))}});var T=k(he,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const ge={name:"ElHeader"},be=g({...ge,props:{height:{type:String,default:null}},setup(e){const t=e,s=b("header"),a=h(()=>t.height?s.cssVarBlock({height:t.height}):{});return(r,o)=>(c(),i("header",{class:y(u(s).b()),style:x(u(a))},[v(r.$slots,"default")],6))}});var L=k(be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const ve={name:"ElMain"},ye=g({...ve,setup(e){const t=b("main");return(s,a)=>(c(),i("main",{class:y(u(t).b())},[v(s.$slots,"default")],2))}});var P=k(ye,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const ke=H(_e,{Aside:R,Footer:T,Header:L,Main:P});V(R);V(T);const $e=V(L),we=V(P);const Ee=e=>(Z("data-v-34d1ba4b"),e=e(),M(),e),Ne={class:"page"},xe=Ee(()=>ee("h2",null,"\u603B\u699C",-1)),Se={key:1,class:"text-ellipsis"};var q=(e=>(e[e["#c2cdf0"]=0]="#c2cdf0",e[e["#fbd3d0"]=1]="#fbd3d0",e[e["#e4f7d2"]=2]="#e4f7d2",e[e["#f7e9bc"]=3]="#f7e9bc",e[e["#c4e4f5"]=4]="#c4e4f5",e[e["#e8e8e8"]=5]="#e8e8e8",e[e["#e8d5cb"]=6]="#e8d5cb",e[e["#c0ebe5"]=7]="#c0ebe5",e[e["#dbcef5"]=8]="#dbcef5",e[e["#e5edca"]=9]="#e5edca",e))(q||{});const Be=g({__name:"Ranking",setup(e){const t=X([]),s=async()=>{const r=await Y.get(`/data/common/award-ranking.json?v=${+new Date}`);t.value=r.data.sort((o,n)=>n.weeks.length-o.weeks.length).map(o=>({...o,level:o.weeks.length,levelText:ae(o.weeks.length)}))};function a(r){return q[r%10]}return s(),(r,o)=>{const n=$e,d=ue,I=ne,l=we,f=te,S=ke;return c(),i("div",Ne,[m(S,null,{default:_(()=>[m(n,null,{default:_(()=>[xe]),_:1}),t.value.length?(c(),j(l,{key:0},{default:_(()=>[(c(!0),i(F,null,A(t.value,(p,K)=>(c(),j(I,{gutter:20,key:p.userId,class:"row"},{default:_(()=>[m(d,{span:1},{default:_(()=>[B(E(K+1),1)]),_:2},1024),m(d,{span:2,title:p.userName,class:"text-ellipsis"},{default:_(()=>[B(E(p.userName),1)]),_:2},1032,["title"]),m(d,{span:2},{default:_(()=>[B(E(p.levelText),1)]),_:2},1024),m(d,{span:2},{default:_(()=>[B(E(p.weeks.length?`\u5DF2\u575A\u6301 ${p.weeks.length} \u5468`:""),1)]),_:2},1024),m(d,{span:17},{default:_(()=>[p.weeks.length?(c(),i("div",Se,[(c(!0),i(F,null,A((p.weeks||[]).sort(($,U)=>U-$),$=>(c(),i("span",{class:"weeks",style:x({backgroundColor:a($)}),key:$}," \u7B2C"+E($)+"\u5468 ",5))),128))])):(c(),i(F,{key:0},[],64))]),_:2},1024)]),_:2},1024))),128))]),_:1})):D("",!0),t.value.length?D("",!0):(c(),j(f,{key:1,class:"emptyBox",description:"\u6682\u65E0\u5339\u914D\u7684\u6570\u636E"}))]),_:1})])}}});var Oe=W(Be,[["__scopeId","data-v-34d1ba4b"]]);export{Oe as default};
