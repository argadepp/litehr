import{h as F,u as O,m as q,q as z,z as U,t as G,r as i,o as c,a as b,f as t,l as e,e as a,F as g,k as f,x as r,y as l,A as H,p as J,b as L,d}from"./app-44623493.js";const K={class:"grid grid-cols-1 gap-x-4 gap-y-8 px-4 py-2 sm:grid-cols-4"},M={class:"font-semibold"},Q={class:"font-semibold"},W={class:"mt-4 grid grid-cols-2 border-t border-gray-200 dark:border-gray-700"},X={class:"col-span-2 border-r border-gray-200 dark:border-gray-700 sm:col-span-1"},Y={class:"text-success"},Z={class:"text-success"},ee={class:"text-success text-md font-semibold"},te={class:"text-success text-md font-semibold"},ae={class:"text-success text-xl font-semibold"},le={class:"text-success text-xl font-semibold"},ne={class:"col-span-2 sm:col-span-1"},oe={class:"text-danger"},se={class:"text-danger"},re={class:"text-danger text-md font-semibold"},de={class:"text-danger text-md font-semibold"},ue=d("span",{class:"text-success text-xl font-semibold"}," ",-1),ie={name:"PayrollShow"},me=Object.assign(ie,{setup(ce){F();const v=O(),w=q(),n=z("$trans"),j={records:[]},I="payroll/",C=[{key:"payHead",label:n("payroll.pay_head.pay_head"),visibility:!0},{key:"amount",label:n("payroll.props.amount"),visibility:!0}],D=h=>{let p=o.records.filter(x=>x.payHead.category.value=="earning").length,y=o.records.filter(x=>x.payHead.category.value=="deduction").length;return h=="earning"&&p<y?y-p:h=="deduction"&&y<p?p-y:0},P=U(!1),o=G({...j}),N=h=>{Object.assign(o,h)};return(h,p)=>{const y=i("PageHeaderAction"),x=i("PageHeader"),B=i("ListItemView"),S=i("ListContainerVertical"),k=i("BaseCard"),m=i("BaseDataView"),u=i("DataCell"),_=i("DataRow"),V=i("SimpleTable"),R=i("BaseButton"),T=i("ShowButton"),A=i("DetailLayoutVertical"),$=i("ShowItem"),E=i("ParentTransition");return c(),b(g,null,[t(x,{title:a(n)(a(v).meta.trans,{attribute:a(n)(a(v).meta.label)}),navs:[{label:a(n)("payroll.payroll"),path:"PayrollList"}]},{default:e(()=>[t(y,{name:"Payroll",title:a(n)("payroll.payroll"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),t(E,{appear:"",visibility:!0},{default:e(()=>[t($,{"init-url":I,uuid:a(v).params.uuid,onSetItem:N,onRedirectTo:p[1]||(p[1]=s=>a(w).push({name:"Payroll"})),refresh:P.value,onRefreshed:p[2]||(p[2]=s=>P.value=!1)},{default:e(()=>[o.uuid?(c(),f(A,{key:0},{detail:e(()=>[t(k,{"no-padding":"","no-content-padding":""},{title:e(()=>[r(l(a(n)("payroll.props.code_number"))+" "+l(o.codeNumber),1)]),default:e(()=>[t(S,null,{default:e(()=>[t(B,{label:a(n)("general.created_at")},{default:e(()=>[r(l(o.createdAt.formatted),1)]),_:1},8,["label"]),t(B,{label:a(n)("general.updated_at")},{default:e(()=>[r(l(o.updatedAt.formatted),1)]),_:1},8,["label"])]),_:1})]),_:1}),t(k,{class:"mt-4","no-padding":"","no-content-padding":""},{title:e(()=>[r(l(a(n)("global.summary",{attribute:a(n)("attendance.attendance")})),1)]),default:e(()=>[t(S,null,{default:e(()=>[(c(!0),b(g,null,H(o.attendanceSummary,s=>(c(),f(B,{align:"right",label:s.name+" ("+s.code+")"},{default:e(()=>[r(l(s.count)+" "+l(a(n)("list.durations."+s.unit)),1)]),_:2},1032,["label"]))),256))]),_:1})]),_:1})]),default:e(()=>[t(k,{"no-padding":"","no-content-padding":"","bottom-content-padding":""},{title:e(()=>[r(l(a(n)("payroll.payroll")),1)]),footer:e(()=>[t(T,null,{default:e(()=>[a(J)("payroll:edit")?(c(),f(R,{key:0,design:"primary",onClick:p[0]||(p[0]=s=>a(w).push({name:"PayrollEdit",params:{uuid:o.uuid}}))},{default:e(()=>[r(l(a(n)("general.edit")),1)]),_:1})):L("",!0)]),_:1})]),default:e(()=>[d("dl",K,[t(m,{label:a(n)("employee.employee")},{default:e(()=>[r(l(o.employee.name),1)]),_:1},8,["label"]),t(m,{label:a(n)("employee.props.code_number")},{default:e(()=>[r(l(o.employee.codeNumber),1)]),_:1},8,["label"]),t(m,{label:a(n)("employee.props.joining_date")},{default:e(()=>[r(l(o.employee.joiningDate.formatted),1)]),_:1},8,["label"]),t(m,{label:a(n)("employee.props.joining_date")},{default:e(()=>[r(l(o.employee.joiningDate.formatted),1)]),_:1},8,["label"]),t(m,{label:a(n)("company.department.department")},{default:e(()=>[r(l(o.employee.department),1)]),_:1},8,["label"]),t(m,{label:a(n)("company.designation.designation")},{default:e(()=>[r(l(o.employee.designation),1)]),_:1},8,["label"]),t(m,{label:a(n)("company.branch.branch")},{default:e(()=>[r(l(o.employee.branch),1)]),_:1},8,["label"]),t(m,{label:a(n)("employee.employment_status.employment_status")},{default:e(()=>[r(l(o.employee.employmentStatus),1)]),_:1},8,["label"]),t(m,{class:"col-span-1 sm:col-span-2",label:a(n)("payroll.props.period")},{default:e(()=>[d("span",M,l(o.period),1)]),_:1},8,["label"]),t(m,{class:"col-span-1 sm:col-span-2",label:a(n)("payroll.props.duration")},{default:e(()=>[d("span",Q,l(o.duration),1)]),_:1},8,["label"])]),d("div",W,[d("div",X,[t(V,{corner:"sharp",header:C},{default:e(()=>[(c(!0),b(g,null,H(o.records.filter(s=>s.payHead.category.value=="earning"),s=>(c(),f(_,{key:s.uuid},{default:e(()=>[t(u,{name:"payHead"},{default:e(()=>[d("span",Y,l(s.payHead.name),1)]),_:2},1024),t(u,{name:"amount"},{default:e(()=>[d("span",Z,l(s.amount.formatted),1)]),_:2},1024)]),_:2},1024))),128)),(c(!0),b(g,null,H(D("earning"),s=>(c(),f(_,null,{default:e(()=>[t(u,{name:"payHead"},{default:e(()=>[r(" ")]),_:1}),t(u,{name:"amount"},{default:e(()=>[r(" ")]),_:1})]),_:1}))),256)),t(_,null,{default:e(()=>[t(u,{name:"payHead"},{default:e(()=>[d("span",ee,l(a(n)("payroll.salary_structure.props.net_earning")),1)]),_:1}),t(u,{name:"amount"},{default:e(()=>[d("span",te,l(o.netEarning.formatted),1)]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(u,{name:"payHead"},{default:e(()=>[d("span",ae,l(a(n)("payroll.salary_structure.props.net_salary")),1)]),_:1}),t(u,{name:"amount"},{default:e(()=>[d("span",le,l(o.total.formatted),1)]),_:1})]),_:1})]),_:1})]),d("div",ne,[t(V,{corner:"sharp",header:C},{default:e(()=>[(c(!0),b(g,null,H(o.records.filter(s=>s.payHead.category.value=="deduction"),s=>(c(),f(_,{key:s.uuid},{default:e(()=>[t(u,{name:"payHead"},{default:e(()=>[d("span",oe,l(s.payHead.name),1)]),_:2},1024),t(u,{name:"amount"},{default:e(()=>[d("span",se,l(s.amount.formatted),1)]),_:2},1024)]),_:2},1024))),128)),(c(!0),b(g,null,H(D("deduction"),s=>(c(),f(_,null,{default:e(()=>[t(u,{name:"payHead"},{default:e(()=>[r(" ")]),_:1}),t(u,{name:"amount"},{default:e(()=>[r(" ")]),_:1})]),_:1}))),256)),t(_,null,{default:e(()=>[t(u,{name:"payHead"},{default:e(()=>[d("span",re,l(a(n)("payroll.salary_structure.props.net_deduction")),1)]),_:1}),t(u,{name:"amount"},{default:e(()=>[d("span",de,l(o.netDeduction.formatted),1)]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(u,{name:"payHead"},{default:e(()=>[ue]),_:1}),t(u,{name:"amount"},{default:e(()=>[r(" ")]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1})):L("",!0)]),_:1},8,["uuid","refresh"])]),_:1})],64)}}});export{me as default};
