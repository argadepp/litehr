import{u as U,m as q,h as I,z as S,t as C,I as z,v as E,r as o,o as t,a,k,l as r,e as _,b as f,f as l,F as m,L as w,d as i,A as y,x as P,y as p}from"./app-44623493.js";const W={class:"space-x-4"},G={class:"overflow-hidden border border-gray-200 dark:border-gray-700 sm:rounded-lg"},J={key:0,class:"table min-w-full divide-y divide-gray-200 dark:divide-gray-700"},K={class:"bg-gray-50 dark:bg-neutral-700"},Q={class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"},X={class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"},Y={class:"dark:bg-dark-body divide-y divide-gray-200 bg-white dark:divide-gray-700"},Z={class:"py-2 pl-6 text-sm text-gray-500 dark:text-gray-400"},ee={class:"py-2 pl-6 text-sm text-gray-500 dark:text-gray-400"},te={name:"TeamConfigPermissionAssign"},ae=Object.assign(te,{props:{team:{type:Object,default(){return{name:""}}}},setup(A){const d=U(),b=q(),$=I(),g=S(!1),v="team/permission/",u=C({modules:[]}),n={selectedModule:"",assignedPermissions:[]},c=C({...n}),M=e=>{b.push({name:"TeamConfigPermissionAssignModule",params:{module:e}})},x=async()=>{g.value=!0,await $.dispatch(v+"preRequisite",{uuid:d.params.uuid,data:d.params.module||"general"}).then(e=>{g.value=!1,Object.assign(u,{modules:e.modules,selectedModule:e.selectedModule,roles:e.roles}),n.selectedModule=e.selectedModule,n.assignedPermissions=e.assignedPermissions,Object.assign(c,w(n))}).catch(e=>{g.value=!1})};return z(()=>d.params.module,e=>{e&&(n.selectedModule=e,Object.assign(c,w(n)),x())}),E(()=>{x()}),(e,B)=>{const V=o("DropdownItem"),D=o("DropdownButton"),T=o("BaseButton"),j=o("PageHeader"),F=o("CardHeader"),L=o("BaseCheckbox"),O=o("BaseLoader"),R=o("FormAction"),H=o("ParentTransition");return t(),a(m,null,[A.team.uuid?(t(),k(j,{key:0,title:e.$trans(_(d).meta.label),navs:[]},{default:r(()=>[i("div",W,[u.modules.length?(t(),k(D,{key:0,direction:"down",label:e.$trans("module."+u.selectedModule)},{default:r(()=>[(t(!0),a(m,null,y(u.modules,s=>(t(),a("div",{key:s.value},[s.value!=_(d).params.module?(t(),k(V,{key:0,as:"span",onClick:h=>M(s.value)},{default:r(()=>[P(p(s.label),1)]),_:2},1032,["onClick"])):f("",!0)]))),128))]),_:1},8,["label"])):f("",!0),l(T,{onClick:B[0]||(B[0]=s=>_(b).push({name:"TeamConfigUserPermission"}))},{default:r(()=>[P(p(e.$trans("team.config.permission.user_permission")),1)]),_:1})])]),_:1},8,["title"])):f("",!0),l(H,{appear:"",visibility:!0},{default:r(()=>[l(R,{"no-data-fetch":"","init-url":v,uuid:_(d).params.uuid,action:"roleWiseAssign","init-form":n,form:c,"stay-on":""},{default:r(()=>[l(F,{first:"",title:e.$trans("team.config.permission.permission_config"),description:e.$trans("team.config.permission.permission_info")},null,8,["title","description"]),l(O,{"is-loading":g.value},{default:r(()=>[i("div",G,[c.assignedPermissions.length?(t(),a("table",J,[i("thead",K,[i("tr",null,[i("th",Q,p(e.$trans("team.config.permission.permission")),1),(t(!0),a(m,null,y(u.roles,s=>(t(),a("th",X,p(s.label),1))),256))])]),i("tbody",Y,[(t(!0),a(m,null,y(c.assignedPermissions,s=>(t(),a("tr",{key:s.name},[i("td",Z,p(s.name),1),(t(!0),a(m,null,y(s.roles,h=>(t(),a("td",ee,[l(L,{modelValue:h.isAssigned,"onUpdate:modelValue":N=>h.isAssigned=N},null,8,["modelValue","onUpdate:modelValue"])]))),256))]))),128))])])):f("",!0)])]),_:1},8,["is-loading"])]),_:1},8,["uuid","form"])]),_:1})],64)}}});export{ae as default};