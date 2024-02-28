import{t as k,r as o,o as v,k as h,l as e,d as g,f as a,m as T,q as H,z as R,e as m,x as r,y as i,a as L,A as M,F as U}from"./app-44623493.js";const j={class:"grid grid-cols-3 gap-6"},N={class:"col-span-3 sm:col-span-1"},S={class:"col-span-3 sm:col-span-1"},E={class:"col-span-3 sm:col-span-1"},O={__name:"Filter",emits:["hide"],setup(C,{emit:p}){const c={name:"",code:"",alias:""},d=k({...c});return(f,n)=>{const u=o("BaseInput"),$=o("FilterForm");return v(),h($,{"init-form":c,form:d,onHide:n[3]||(n[3]=t=>p("hide"))},{default:e(()=>[g("div",j,[g("div",N,[a(u,{type:"text",modelValue:d.name,"onUpdate:modelValue":n[0]||(n[0]=t=>d.name=t),name:"name",label:f.$trans("payroll.pay_head.props.name")},null,8,["modelValue","label"])]),g("div",S,[a(u,{type:"text",modelValue:d.code,"onUpdate:modelValue":n[1]||(n[1]=t=>d.code=t),name:"code",label:f.$trans("payroll.pay_head.props.code")},null,8,["modelValue","label"])]),g("div",E,[a(u,{type:"text",modelValue:d.alias,"onUpdate:modelValue":n[2]||(n[2]=t=>d.alias=t),name:"alias",label:f.$trans("payroll.pay_head.props.alias")},null,8,["modelValue","label"])])])]),_:1},8,["form"])}}},q={name:"PayrollPayHeadList"},G=Object.assign(q,{setup(C){const p=T(),c=H("emitter");let d=["create","filter"];const f="payroll/payHead/",n=R(!1),u=k({}),$=t=>{Object.assign(u,t)};return(t,s)=>{const F=o("PageHeaderAction"),V=o("PageHeader"),b=o("ParentTransition"),_=o("DataCell"),y=o("FloatingMenuItem"),B=o("FloatingMenu"),I=o("DataRow"),w=o("BaseButton"),D=o("DataTable"),A=o("ListItem");return v(),h(A,{"init-url":f,onSetItems:$},{header:e(()=>[a(V,{title:t.$trans("payroll.pay_head.pay_head"),navs:[{label:t.$trans("payroll.payroll"),path:"Payroll"}]},{default:e(()=>[a(F,{url:"payroll/pay-heads/",name:"PayrollPayHead",title:t.$trans("payroll.pay_head.pay_head"),actions:m(d),"dropdown-actions":["print","pdf","excel"],onToggleFilter:s[0]||(s[0]=l=>n.value=!n.value)},null,8,["title","actions"])]),_:1},8,["title","navs"])]),filter:e(()=>[a(b,{appear:"",visibility:n.value},{default:e(()=>[a(O,{onRefresh:s[1]||(s[1]=l=>m(c).emit("listItems")),onHide:s[2]||(s[2]=l=>n.value=!1)})]),_:1},8,["visibility"])]),default:e(()=>[a(b,{appear:"",visibility:!0},{default:e(()=>[a(D,{header:u.headers,meta:u.meta,module:"payroll.pay_head",onRefresh:s[4]||(s[4]=l=>m(c).emit("listItems"))},{actionButton:e(()=>[a(w,{onClick:s[3]||(s[3]=l=>m(p).push({name:"PayrollPayHeadCreate"}))},{default:e(()=>[r(i(t.$trans("global.add",{attribute:t.$trans("payroll.pay_head.pay_head")})),1)]),_:1})]),default:e(()=>[(v(!0),L(U,null,M(u.data,l=>(v(),h(I,{key:l.uuid},{default:e(()=>[a(_,{name:"name"},{default:e(()=>[r(i(l.name),1)]),_:2},1024),a(_,{name:"code"},{default:e(()=>[r(i(l.code),1)]),_:2},1024),a(_,{name:"alias"},{default:e(()=>[r(i(l.alias),1)]),_:2},1024),a(_,{name:"category"},{default:e(()=>[r(i(l.category.label),1)]),_:2},1024),a(_,{name:"createdAt"},{default:e(()=>[r(i(l.createdAt.formatted),1)]),_:2},1024),a(_,{name:"action"},{default:e(()=>[a(B,null,{default:e(()=>[a(y,{icon:"fas fa-arrow-circle-right",onClick:P=>m(p).push({name:"PayrollPayHeadShow",params:{uuid:l.uuid}})},{default:e(()=>[r(i(t.$trans("general.show")),1)]),_:2},1032,["onClick"]),a(y,{icon:"fas fa-edit",onClick:P=>m(p).push({name:"PayrollPayHeadEdit",params:{uuid:l.uuid}})},{default:e(()=>[r(i(t.$trans("general.edit")),1)]),_:2},1032,["onClick"]),a(y,{icon:"fas fa-copy",onClick:P=>m(p).push({name:"PayrollPayHeadDuplicate",params:{uuid:l.uuid}})},{default:e(()=>[r(i(t.$trans("general.duplicate")),1)]),_:2},1032,["onClick"]),a(y,{icon:"fas fa-trash",onClick:P=>m(c).emit("deleteItem",{uuid:l.uuid})},{default:e(()=>[r(i(t.$trans("general.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})]),_:1})}}});export{G as default};