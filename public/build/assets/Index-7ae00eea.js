import{h as g,r as c,o as p,k as f,l as m,f as s,d as o,g as h}from"./app-44623493.js";const _={class:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"},v={class:"col-span-1"},u={class:"col-span-1"},b={class:"col-span-1"},y={class:"col-span-1"},w={class:"col-span-1"},C={name:"ConfigAsset"},k=Object.assign(C,{setup(U){const i=g(),a=e=>h("assets."+e).value,t=async()=>{await i.dispatch("config/get",!1)},n=async()=>{await i.dispatch("config/get",!1)};return(e,$)=>{const d=c("CardHeader"),l=c("ImageUpload"),r=c("ConfigPage");return p(),f(r,null,{default:m(()=>[s(d,{first:"",title:e.$trans("config.asset.asset_config"),description:e.$trans("config.asset.asset_info")},null,8,["title","description"]),o("div",_,[o("div",v,[s(l,{"recommended-size":"600x200",design:"modern","object-fit":!1,label:e.$trans("config.asset.logo"),"show-label":"",src:a("logo"),"upload-path":"config/assets?type=logo","remove-path":"config/assets?type=logo",onUploaded:t,onRemoved:n},null,8,["label","src"])]),o("div",u,[s(l,{"recommended-size":"600x200",design:"modern","object-fit":!1,label:e.$trans("config.asset.logo_light"),"show-label":"",src:a("logoLight"),dark:"","upload-path":"config/assets?type=logo_light","remove-path":"config/assets?type=logo_light",onUploaded:t,onRemoved:n},null,8,["label","src"])]),o("div",b,[s(l,{"recommended-size":"512x512",design:"modern","object-fit":!1,label:e.$trans("config.asset.icon"),"show-label":"",src:a("icon"),"upload-path":"config/assets?type=icon","remove-path":"config/assets?type=icon",onUploaded:t,onRemoved:n},null,8,["label","src"])]),o("div",y,[s(l,{"recommended-size":"512x512",design:"modern","object-fit":!1,label:e.$trans("config.asset.icon_light"),"show-label":"",src:a("iconLight"),dark:"","upload-path":"config/assets?type=icon_light","remove-path":"config/assets?type=icon_light",onUploaded:t,onRemoved:n},null,8,["label","src"])]),o("div",w,[s(l,{"recommended-size":"128x128",design:"modern","object-fit":!1,label:e.$trans("config.asset.favicon"),"show-label":"",src:a("favicon"),"upload-path":"config/assets?type=favicon","remove-path":"config/assets?type=favicon",onUploaded:t,onRemoved:n},null,8,["label","src"])])])]),_:1})}}});export{k as default};
