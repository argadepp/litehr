import{h as $,u as j,m as E,q as F,t as M,r as s,o as r,a as y,f as l,l as e,e as t,F as L,k as m,x as n,y as i,d as h,p as O,b as _,A as q}from"./app-44623493.js";const U={class:"space-y-4"},z={key:1,class:"grid grid-cols-1 gap-x-4 gap-y-8 px-4 pt-4 sm:grid-cols-2"},G=["innerHTML"],J={name:"LeaveAllocationShow"},W=Object.assign(J,{setup(K){$();const b=j(),f=E(),a=F("$trans"),k={},B="leave/allocation/",w=[{key:"type",label:a("leave.type.type"),visibility:!0},{key:"allotted",label:a("leave.allocation.props.allotted"),visibility:!0},{key:"used",label:a("leave.allocation.props.used"),visibility:!0},{key:"action",label:"",visibility:!0}],o=M({...k}),A=v=>{Object.assign(o,v)};return(v,u)=>{const V=s("PageHeaderAction"),D=s("PageHeader"),d=s("ListItemView"),S=s("ListContainerVertical"),g=s("BaseCard"),p=s("DataCell"),C=s("DataRow"),T=s("SimpleTable"),x=s("BaseDataView"),H=s("BaseButton"),I=s("ShowButton"),P=s("DetailLayoutVertical"),N=s("ShowItem"),R=s("ParentTransition");return r(),y(L,null,[l(D,{title:t(a)(t(b).meta.trans,{attribute:t(a)(t(b).meta.label)}),navs:[{label:t(a)("leave.leave"),path:"Leave"},{label:t(a)("leave.allocation.allocation"),path:"LeaveAllocationList"}]},{default:e(()=>[l(V,{name:"LeaveAllocation",title:t(a)("leave.allocation.allocation"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),l(R,{appear:"",visibility:!0},{default:e(()=>[l(N,{"init-url":B,uuid:t(b).params.uuid,onSetItem:A,onRedirectTo:u[1]||(u[1]=c=>t(f).push({name:"LeaveAllocation"}))},{default:e(()=>[o.uuid?(r(),m(P,{key:0},{detail:e(()=>[l(g,{"no-padding":"","no-content-padding":""},{title:e(()=>[n(i(t(a)("global.detail",{attribute:t(a)("leave.allocation.allocation")})),1)]),default:e(()=>[l(S,null,{default:e(()=>[l(d,{label:t(a)("employee.props.name")},{default:e(()=>[n(i(o.employee.name),1)]),_:1},8,["label"]),l(d,{label:t(a)("employee.props.code_number")},{default:e(()=>[n(i(o.employee.codeNumber),1)]),_:1},8,["label"]),l(d,{label:t(a)("company.department.department")},{default:e(()=>[n(i(o.employee.department),1)]),_:1},8,["label"]),l(d,{label:t(a)("company.designation.designation")},{default:e(()=>[n(i(o.employee.designation),1)]),_:1},8,["label"]),l(d,{label:t(a)("company.branch.branch")},{default:e(()=>[n(i(o.employee.branch),1)]),_:1},8,["label"]),l(d,{label:t(a)("employee.employment_status.employment_status")},{default:e(()=>[n(i(o.employee.employmentStatus),1)]),_:1},8,["label"]),l(d,{label:t(a)("leave.allocation.props.start_date")},{default:e(()=>[n(i(o.startDate.formatted),1)]),_:1},8,["label"]),l(d,{label:t(a)("leave.allocation.props.end_date")},{default:e(()=>[n(i(o.endDate.formatted),1)]),_:1},8,["label"]),l(d,{label:t(a)("general.created_at")},{default:e(()=>[n(i(o.createdAt.formatted),1)]),_:1},8,["label"]),l(d,{label:t(a)("general.updated_at")},{default:e(()=>[n(i(o.updatedAt.formatted),1)]),_:1},8,["label"])]),_:1})]),_:1})]),default:e(()=>[h("div",U,[l(g,{"no-padding":"","no-content-padding":"","bottom-content-padding":""},{title:e(()=>[n(i(t(a)("leave.type.type")),1)]),footer:e(()=>[l(I,null,{default:e(()=>[t(O)("leave-allocation:edit")?(r(),m(H,{key:0,design:"primary",onClick:u[0]||(u[0]=c=>t(f).push({name:"LeaveAllocationEdit",params:{uuid:o.uuid}}))},{default:e(()=>[n(i(t(a)("general.edit")),1)]),_:1})):_("",!0)]),_:1})]),default:e(()=>[o.records.length>0?(r(),m(T,{key:0,header:w},{default:e(()=>[(r(!0),y(L,null,q(o.records,c=>(r(),m(C,{key:c.uuid},{default:e(()=>[l(p,{name:"type"},{default:e(()=>[n(i(c.leaveType.name),1)]),_:2},1024),l(p,{name:"allotted"},{default:e(()=>[n(i(c.allotted),1)]),_:2},1024),l(p,{name:"used"},{default:e(()=>[n(i(c.used),1)]),_:2},1024),l(p,{name:"action"})]),_:2},1024))),128))]),_:1})):_("",!0),o.description?(r(),y("dl",z,[l(x,{class:"col-span-1 sm:col-span-2",label:t(a)("leave.allocation.props.description")},{default:e(()=>[h("div",{innerHTML:o.description},null,8,G)]),_:1},8,["label"])])):_("",!0)]),_:1})])]),_:1})):_("",!0)]),_:1},8,["uuid"])]),_:1})],64)}}});export{W as default};