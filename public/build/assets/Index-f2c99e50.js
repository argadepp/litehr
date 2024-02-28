import{t as F,r,o as f,k as g,l as e,d as y,f as t,m as k,q as A,z as B,e as b,a as H,A as T,x as u,y as p,F as V}from"./app-44623493.js";const x={class:"grid grid-cols-3 gap-6"},R={class:"col-span-3 sm:col-span-1"},U={class:"col-span-3 sm:col-span-1"},h={__name:"Filter",emits:["hide"],setup($,{emit:c}){const _={search:"",startDate:"",endDate:""},a=F({..._});return(i,s)=>{const d=r("BaseInput"),o=r("DatePicker"),v=r("FilterForm");return f(),g(v,{"init-form":_,form:a,onHide:s[3]||(s[3]=l=>c("hide"))},{default:e(()=>[y("div",x,[y("div",R,[t(d,{type:"text",modelValue:a.search,"onUpdate:modelValue":s[0]||(s[0]=l=>a.search=l),name:"search",label:i.$trans("general.search")},null,8,["modelValue","label"])]),y("div",U,[t(o,{type:"text",start:a.startDate,"onUpdate:start":s[1]||(s[1]=l=>a.startDate=l),end:a.endDate,"onUpdate:end":s[2]||(s[2]=l=>a.endDate=l),name:"dateBetween",as:"range",label:i.$trans("general.date_between")},null,8,["start","end","label"])])])]),_:1},8,["form"])}}},C={name:"ActivityLogList"},N=Object.assign(C,{setup($){k();const c=A("emitter"),_="utility/activityLog/",a=B(!1),i=F({}),s=d=>{Object.assign(i,d)};return(d,o)=>{const v=r("PageHeaderAction"),l=r("PageHeader"),D=r("ParentTransition"),m=r("DataCell"),w=r("DataRow"),I=r("DataTable"),P=r("ListItem");return f(),g(P,{"init-url":_,onSetItems:s},{header:e(()=>[t(l,{title:d.$trans("utility.activity.log")},{default:e(()=>[t(v,{url:"utility/activity-logs/",name:"UtilityActivityLog",title:d.$trans("utility.activity.log"),actions:["filter"],"dropdown-actions":["print","pdf","excel"],onToggleFilter:o[0]||(o[0]=n=>a.value=!a.value)},null,8,["title"])]),_:1},8,["title"])]),filter:e(()=>[t(D,{appear:"",visibility:a.value},{default:e(()=>[t(h,{onRefresh:o[1]||(o[1]=n=>b(c).emit("listItems")),onHide:o[2]||(o[2]=n=>a.value=!1)})]),_:1},8,["visibility"])]),default:e(()=>[t(D,{appear:"",visibility:!0},{default:e(()=>[t(I,{header:i.headers,meta:i.meta,module:"utility.activity",onRefresh:o[3]||(o[3]=n=>b(c).emit("listItems"))},{default:e(()=>[(f(!0),H(V,null,T(i.data,n=>(f(),g(w,{key:n.uuid},{default:e(()=>[t(m,{name:"user"},{default:e(()=>[u(p(n.user?n.user.profile.name:"-"),1)]),_:2},1024),t(m,{name:"activity"},{default:e(()=>[u(p(n.activity),1)]),_:2},1024),t(m,{name:"ip"},{default:e(()=>[u(p(n.ip),1)]),_:2},1024),t(m,{name:"browser"},{default:e(()=>[u(p(n.browser),1)]),_:2},1024),t(m,{name:"os"},{default:e(()=>[u(p(n.os),1)]),_:2},1024),t(m,{name:"createdAt"},{default:e(()=>[u(p(n.createdAt.formatted),1)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})]),_:1})}}});export{N as default};