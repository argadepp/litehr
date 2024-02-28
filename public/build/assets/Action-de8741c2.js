import{u as g,s as D,t as b,r as n,o as v,k as f,l as _,d,e as p,b as B,f as r,L as U,a as V,F}from"./app-44623493.js";const P={class:"grid grid-cols-2 gap-6"},H={class:"col-span-2 sm:col-span-1"},R={class:"col-span-2 sm:col-span-1"},S={class:"col-span-2"},A={class:"grid grid-cols-1"},h={class:"col"},j={name:"LeaveRequestForm"},O=Object.assign(j,{setup(T){const u=g(),s={leaveType:"",startDate:"",endDate:"",reason:"",media:[],mediaToken:"",mediaHash:""},c="leave/request/",l=D(c),a=b({...s}),i=b({leaveType:"",isLoaded:!u.params.uuid}),y=o=>{var e,m;Object.assign(s,{...o,leaveType:(e=o.leaveType)==null?void 0:e.uuid}),Object.assign(a,U(s)),i.leaveType=(m=o.leaveType)==null?void 0:m.uuid,i.isLoaded=!0};return(o,e)=>{const m=n("BaseSelectSearch"),q=n("DatePicker"),$=n("BaseTextarea"),L=n("MediaUpload"),k=n("FormAction");return v(),f(k,{"init-url":c,"init-form":s,form:a,"set-form":y,redirect:"LeaveRequest"},{default:_(()=>[d("div",P,[d("div",H,[i.isLoaded?(v(),f(m,{key:0,name:"leaveType",label:o.$trans("global.select",{attribute:o.$trans("leave.type.type")}),modelValue:a.leaveType,"onUpdate:modelValue":e[0]||(e[0]=t=>a.leaveType=t),error:p(l).leaveType,"onUpdate:error":e[1]||(e[1]=t=>p(l).leaveType=t),"label-prop":"name","value-prop":"uuid","init-search":i.leaveType,"search-action":"leave/type/list"},null,8,["label","modelValue","error","init-search"])):B("",!0)]),d("div",R,[r(q,{start:a.startDate,"onUpdate:start":e[2]||(e[2]=t=>a.startDate=t),end:a.endDate,"onUpdate:end":e[3]||(e[3]=t=>a.endDate=t),name:"dateBetween",as:"range",label:o.$trans("general.date_between")},null,8,["start","end","label"])]),d("div",S,[r($,{modelValue:a.reason,"onUpdate:modelValue":e[4]||(e[4]=t=>a.reason=t),name:"reason",label:o.$trans("leave.request.props.reason"),error:p(l).reason,"onUpdate:error":e[5]||(e[5]=t=>p(l).reason=t)},null,8,["modelValue","label","error"])])]),d("div",A,[d("div",h,[r(L,{multiple:"",label:o.$trans("general.file"),module:"leave_request",media:a.media,onSetHash:e[6]||(e[6]=t=>a.mediaHash=t),onSetToken:e[7]||(e[7]=t=>a.mediaToken=t)},null,8,["label","media"])])])]),_:1},8,["form"])}}}),w={name:"LeaveRequestAction"},E=Object.assign(w,{setup(T){const u=g();return(s,c)=>{const l=n("PageHeaderAction"),a=n("PageHeader"),i=n("ParentTransition");return v(),V(F,null,[r(a,{title:s.$trans(p(u).meta.trans,{attribute:s.$trans(p(u).meta.label)}),navs:[{label:s.$trans("leave.leave"),path:"Leave"},{label:s.$trans("leave.request.request"),path:"LeaveRequestList"}]},{default:_(()=>[r(l,{name:"LeaveRequest",title:s.$trans("leave.request.request"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),r(i,{appear:"",visibility:!0},{default:_(()=>[r(O)]),_:1})],64)}}});export{E as default};
