import{u as T,m as k,h as y,t as F,v as q,r as n,o as p,k as C,l as e,f as t,x as u,y as c,d as h,q as w,z as M,e as f,a as O,A as N,b as A,F as H}from"./app-44623493.js";const S={class:"grid grid-cols-3 gap-6"},U={class:"col-span-3 sm:col-span-1"},E={__name:"Filter",props:{preRequisites:{type:Object,default(){return{}}}},emits:["refresh","hide"],setup(I,{emit:m}){const l=T(),B=k();y();const i={search:""},s=F({...i}),b=()=>{Object.assign(s,i),r(),m("hide")};q(async()=>{Object.assign(s,{search:l.query.search})});const r=async()=>{await B.push({name:l.name,query:{...l.query,...s}}),m("refresh")};return(a,_)=>{const g=n("BaseInput"),d=n("BaseButton"),v=n("BaseCard");return p(),C(v,null,{footer:e(()=>[t(d,{design:"error",class:"mr-4",onClick:b},{default:e(()=>[u(c(a.$trans("general.cancel")),1)]),_:1}),t(d,{onClick:r},{default:e(()=>[u(c(a.$trans("general.filter")),1)]),_:1})]),default:e(()=>[h("div",S,[h("div",U,[t(g,{type:"text",modelValue:s.search,"onUpdate:modelValue":_[0]||(_[0]=$=>s.search=$),name:"search",label:a.$trans("general.search")},null,8,["modelValue","label"])])])]),_:1})}}},z={name:"LocaleList"},J=Object.assign(z,{setup(I){const m=k();y();const l=w("emitter"),B="config/locale/",i=M(!1),s=F({}),b=r=>{Object.assign(s,r)};return(r,a)=>{const _=n("PageHeaderAction"),g=n("ParentTransition"),d=n("DataCell"),v=n("FloatingMenuItem"),$=n("FloatingMenu"),L=n("DataRow"),D=n("BaseButton"),R=n("DataTable"),V=n("ListItem"),j=n("ConfigPage");return p(),C(j,{"no-background":""},{action:e(()=>[t(_,{name:"ConfigLocale",title:r.$trans("config.locale.locale"),actions:["create","filter"],onToggleFilter:a[0]||(a[0]=o=>i.value=!i.value)},null,8,["title"])]),default:e(()=>[t(V,{class:"sm:-mt-4","init-url":B,onSetItems:b},{filter:e(()=>[t(g,{appear:"",visibility:i.value},{default:e(()=>[t(E,{onRefresh:a[1]||(a[1]=o=>f(l).emit("listItems")),onHide:a[2]||(a[2]=o=>i.value=!1)})]),_:1},8,["visibility"])]),default:e(()=>[t(g,{appear:"",visibility:!0},{default:e(()=>[t(R,{header:s.headers,meta:s.meta,module:"config.locale",onRefresh:a[4]||(a[4]=o=>f(l).emit("listItems"))},{actionButton:e(()=>[t(D,{onClick:a[3]||(a[3]=o=>f(m).push({name:"LocaleCreate"}))},{default:e(()=>[u(c(r.$trans("global.add",{attribute:r.$trans("config.locale.locale")})),1)]),_:1})]),default:e(()=>[(p(!0),O(H,null,N(s.data,o=>(p(),C(L,{key:o.uuid},{default:e(()=>[t(d,{name:"name"},{default:e(()=>[u(c(o.name),1)]),_:2},1024),t(d,{name:"code"},{default:e(()=>[u(c(o.code),1)]),_:2},1024),t(d,{name:"action"},{default:e(()=>[o.isDefault?A("",!0):(p(),C($,{key:0},{default:e(()=>[t(v,{icon:"fas fa-edit",onClick:P=>f(m).push({name:"ConfigLocaleEdit",params:{uuid:o.uuid}})},{default:e(()=>[u(c(r.$trans("general.edit")),1)]),_:2},1032,["onClick"]),t(v,{icon:"fas fa-trash",onClick:P=>f(l).emit("deleteItem",{uuid:o.uuid})},{default:e(()=>[u(c(r.$trans("general.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024))]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})]),_:1})]),_:1})}}});export{J as default};
