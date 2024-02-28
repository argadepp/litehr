import{u as f,s as U,t as k,r as d,o as i,k as C,l as b,d as y,f as l,e as n,a as m,b as _,L as H,F}from"./app-44623493.js";const P={class:"grid grid-cols-2 gap-6"},A={class:"col-span-2 sm:col-span-1"},j={key:0,class:"col-span-2 sm:col-span-1"},O={key:1,class:"col-span-2 sm:col-span-1"},T={key:2,class:"col-span-2 sm:col-span-1"},w={class:"col-span-2 sm:col-span-1"},E={name:"CalendarHolidayForm"},N=Object.assign(E,{setup(v){const p=f(),o={name:"",type:"range",startDate:"",endDate:"",dates:"",description:""},u="calendar/holiday/",r=U(u),t=k({...o}),c=s=>{Object.assign(o,{...s,startDate:s.startDate.value,endDate:s.endDate.value}),Object.assign(t,H(o))};return(s,e)=>{const V=d("BaseInput"),D=d("BaseRadioGroup"),g=d("DatePicker"),$=d("BaseTextarea"),B=d("FormAction");return i(),C(B,{"init-url":u,"init-form":o,form:t,"set-form":c,redirect:"CalendarHoliday"},{default:b(()=>[y("div",P,[y("div",A,[l(V,{type:"text",modelValue:t.name,"onUpdate:modelValue":e[0]||(e[0]=a=>t.name=a),name:"name",label:s.$trans("calendar.holiday.props.name"),error:n(r).name,"onUpdate:error":e[1]||(e[1]=a=>n(r).name=a),autofocus:""},null,8,["modelValue","label","error"])]),n(p).params.uuid?_("",!0):(i(),m("div",j,[l(D,{options:[{label:s.$trans("calendar.holiday.props.type_range"),value:"range"},{label:s.$trans("calendar.holiday.props.type_dates"),value:"dates"}],name:"type",modelValue:t.type,"onUpdate:modelValue":e[2]||(e[2]=a=>t.type=a),error:n(r).type,"onUpdate:error":e[3]||(e[3]=a=>n(r).type=a),horizontal:""},null,8,["options","modelValue","error"])])),t.type=="range"?(i(),m("div",O,[l(g,{start:t.startDate,"onUpdate:start":e[4]||(e[4]=a=>t.startDate=a),end:t.endDate,"onUpdate:end":e[5]||(e[5]=a=>t.endDate=a),name:"dateBetween",as:"range",label:s.$trans("general.date_between")},null,8,["start","end","label"])])):_("",!0),t.type=="dates"?(i(),m("div",T,[l(g,{modelValue:t.dates,"onUpdate:modelValue":e[6]||(e[6]=a=>t.dates=a),name:"dates",as:"multiple",label:s.$trans("calendar.holiday.props.dates"),"no-clear":"",error:n(r).dates,"onUpdate:error":e[7]||(e[7]=a=>n(r).dates=a)},null,8,["modelValue","label","error"])])):_("",!0),y("div",w,[l($,{modelValue:t.description,"onUpdate:modelValue":e[8]||(e[8]=a=>t.description=a),name:"description",label:s.$trans("calendar.holiday.props.description"),error:n(r).description,"onUpdate:error":e[9]||(e[9]=a=>n(r).description=a)},null,8,["modelValue","label","error"])])])]),_:1},8,["form"])}}}),R={name:"CalendarHolidayAction"},G=Object.assign(R,{setup(v){const p=f();return(o,u)=>{const r=d("PageHeaderAction"),t=d("PageHeader"),c=d("ParentTransition");return i(),m(F,null,[l(t,{title:o.$trans(n(p).meta.trans,{attribute:o.$trans(n(p).meta.label)}),navs:[{label:o.$trans("calendar.calendar"),path:"Calendar"},{label:o.$trans("calendar.holiday.holiday"),path:"CalendarHolidayList"}]},{default:b(()=>[l(r,{name:"CalendarHoliday",title:o.$trans("calendar.holiday.holiday"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),l(c,{appear:"",visibility:!0},{default:b(()=>[l(N)]),_:1})],64)}}});export{G as default};
