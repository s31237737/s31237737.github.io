import{i as J,d as m,a as g,o as i,e as l,b as a,c as o,f as d,w as e,aR as W,u as f,g as p,ay as _,au as O,F as r,av as k,aw as H,ax as M,az as b,aK as y,cm as h,O as R,aB as q,ar as F,V as I,aD as N,c5 as ss,aG as P,at as es,aH as ts,c2 as as,aT as ls,aU as is,aV as _s,aW as os,aX as ps,aY as ns,aZ as gs,a_ as ms,a$ as us,b0 as rs,b1 as bs,b2 as vs,b3 as ds,b4 as cs,b5 as fs,b6 as ks,b7 as ys,b8 as As,b9 as xs,ba as ws,bb as Vs,bc as Cs,bd as Ds,be as js,bf as Ts,bg as Us,bh as $s,bi as zs,bj as Is,bk as Ns,bl as Bs,bm as Es,bn as Ls,bo as Ss,bp as Ws,bq as Os,br as Hs,bs as Ms,bt as Rs,bu as qs,bv as Fs,bw as Ps,bx as Gs,by as Ks,bz as Qs,bA as Xs,bB as Ys,bC as Zs,bD as Js,bE as hs,bF as se,bG as ee,bH as te,bI as ae,bJ as le,bK as ie,bL as _e,bM as oe,bN as pe,bO as ne,bP as ge,bQ as me,bR as ue,bS as re,bT as be,bU as ve,bV as de,bW as ce,bX as fe,bY as ke,bZ as ye,b_ as Ae,b$ as xe}from"./index-BwiAbbgW.js";import{V as C}from"./VListItemAction-slwUlNm4.js";import{V as D}from"./VSheet-CInMRqEi.js";const we={class:"my-app"},Ve={class:"tit-wrap"},Ce={class:"btns"},De={key:0,class:"action"},je={class:"img"},Te={class:"tit-wrap row"},Ue={key:0,class:"scroll-control"},$e={class:"apps-recomm-wrap"},ze={class:"apps-top"},Ie={class:"icon-text"},Ne={class:"flag-wrap"},Be={class:"apps-bottom"},Ee={class:"context"},Le={class:"apps-bottom-btns"},Se={class:"tit-wrap"},We={class:"btns"},Oe={class:"img"},He={class:"tit-wrap row"},Me={key:0,class:"scroll-control"},Re={class:"apps-recomm-wrap"},qe={class:"apps-top"},Fe={class:"icon-text"},Pe={class:"flag-wrap"},Ge={class:"apps-bottom"},Ke={class:"context"},Qe={class:"apps-bottom-btns"},Xe={class:"tit-wrap"},Ye={class:"btns"},Ze={class:"img"},Je=420,at={__name:"App",setup(he){const x=J("isDesktop"),G=J("isMobile"),B=n=>new URL(Object.assign({"../../assets/images/@temp_img_01.png":xe,"../../assets/images/@temp_img_01_lg.png":Ae,"../../assets/images/@temp_img_02.png":ye,"../../assets/images/@temp_img_03.png":ke,"../../assets/images/@temp_img_QR.png":fe,"../../assets/images/@temp_img_app_banner.png":ce,"../../assets/images/@temp_img_app_icon01.png":de,"../../assets/images/@temp_img_app_icon02.png":ve,"../../assets/images/@temp_img_app_icon03.png":be,"../../assets/images/@temp_img_app_icon04.png":re,"../../assets/images/@temp_img_app_icon05.png":ue,"../../assets/images/@temp_img_app_icon06.png":me,"../../assets/images/@temp_img_app_icon07.png":ge,"../../assets/images/@temp_img_app_icon08.png":ne,"../../assets/images/@temp_img_app_icon09.png":pe,"../../assets/images/@temp_img_apps_visual_01.png":oe,"../../assets/images/@temp_img_apps_visual_02.png":_e,"../../assets/images/@temp_main_app card_01.jpg":ie,"../../assets/images/@temp_main_app card_02.jpg":le,"../../assets/images/@temp_main_app card_03.jpg":ae,"../../assets/images/@temp_main_app card_04.jpg":te,"../../assets/images/@temp_main_app card_05.jpg":ee,"../../assets/images/@temp_main_app card_06.jpg":se,"../../assets/images/error.png":hs,"../../assets/images/footer_logo.png":Js,"../../assets/images/icon_edit_profile.png":Zs,"../../assets/images/icon_folder_profile.png":Ys,"../../assets/images/icon_selected_profile.png":Xs,"../../assets/images/img_about_01.png":Qs,"../../assets/images/img_about_02.png":Ks,"../../assets/images/img_about_03.png":Gs,"../../assets/images/img_about_04.png":Ps,"../../assets/images/img_about_05.png":Fs,"../../assets/images/img_about_06.png":qs,"../../assets/images/img_about_07.png":Rs,"../../assets/images/img_about_08.png":Ms,"../../assets/images/img_about_banner.png":Hs,"../../assets/images/img_about_icon_01.png":Os,"../../assets/images/img_about_icon_02.png":Ws,"../../assets/images/img_about_icon_03.png":Ss,"../../assets/images/img_about_icon_04.png":Ls,"../../assets/images/img_about_icon_05.png":Es,"../../assets/images/img_about_icon_06.png":Bs,"../../assets/images/img_about_icon_07.png":Ns,"../../assets/images/img_about_logo_01.png":Is,"../../assets/images/img_about_logo_02.png":zs,"../../assets/images/img_about_logo_03.png":$s,"../../assets/images/img_about_logo_04.png":Us,"../../assets/images/img_about_logo_05.png":Ts,"../../assets/images/img_about_logo_06.png":js,"../../assets/images/img_apps_banner_01.png":Ds,"../../assets/images/img_apps_banner_02.png":Cs,"../../assets/images/img_apps_banner_03.png":Vs,"../../assets/images/img_avatar01.jpg":ws,"../../assets/images/img_avatar02.jpg":xs,"../../assets/images/img_avatar03.jpg":As,"../../assets/images/img_avatar04.jpg":ys,"../../assets/images/img_avatar05.jpg":ks,"../../assets/images/img_avatar06.jpg":fs,"../../assets/images/img_avatar07.jpg":cs,"../../assets/images/img_avatar08.jpg":ds,"../../assets/images/img_avatar09.jpg":vs,"../../assets/images/img_avatar10.jpg":bs,"../../assets/images/img_avatar11.jpg":rs,"../../assets/images/img_avatar12.jpg":us,"../../assets/images/img_avatar13.jpg":ms,"../../assets/images/img_community_banner.png":gs,"../../assets/images/img_main_appbn.jpg":ns,"../../assets/images/img_news_banner.png":ps,"../../assets/images/login.png":os,"../../assets/images/logo.png":_s,"../../assets/images/player_button.png":is,"../../assets/images/pop_tail.png":ls})[`../../assets/images/${n}`],import.meta.url).href,j=m(!1),A=m(!1),T=m("최근접속순"),K=m("최근신청순"),v=m(!1),w=m([]),U=m([{value:"useApps01",link:"/AppsDetail",title:"IT 일일 점검",image:"@temp_img_app_icon01.png"},{value:"useApps02",link:"/AppsDetail",title:"퇴비비료 생산 및 출고관리",image:"@temp_img_app_icon02.png"},{value:"useApps03",link:"/AppsDetail",title:"퇴비비료 생산 및 출고관리",image:"@temp_img_app_icon03.png"},{value:"useApps04",link:"/AppsDetail",title:"IT 일일 점검",image:"@temp_img_app_icon04.png"},{value:"useApps05",link:"/AppsDetail",title:"퇴비비료 생산 및 출고관리",image:"@temp_img_app_icon05.png"},{value:"useApps06",link:"/AppsDetail",title:"하나로마트 식품 안전 일일 점검",image:"@temp_img_app_icon06.png"},{value:"useApps07",link:"/AppsDetail",title:"IT 일일 점검",image:"@temp_img_app_icon07.png"},{value:"useApps08",link:"/AppsDetail",title:"퇴비비료 생산 및 출고관리",image:"@temp_img_app_icon08.png"},{value:"useApps09",link:"/AppsDetail",title:"하나로마트 식품 안전 일일 점검",image:"@temp_img_app_icon09.png"}]),$=m([]),Q=m([{value:"waitingApps01",link:"/AppsDetail",title:"IT 일일 점검",image:"@temp_img_app_icon01.png"},{value:"waitingApps02",link:"/AppsDetail",title:"퇴비비료 생산 및 출고관리",image:"@temp_img_app_icon02.png"},{value:"waitingApps03",link:"/AppsDetail",title:"퇴비비료 생산 및 출고관리",image:"@temp_img_app_icon03.png"},{value:"waitingApps04",link:"/AppsDetail",title:"IT 일일 점검",image:"@temp_img_app_icon04.png"},{value:"waitingApps05",link:"/AppsDetail",title:"퇴비비료 생산 및 출고관리",image:"@temp_img_app_icon05.png"},{value:"waitingApps06",link:"/AppsDetail",title:"하나로마트 식품 안전 일일 점검",image:"@temp_img_app_icon06.png"},{value:"waitingApps07",link:"/AppsDetail",title:"IT 일일 점검",image:"@temp_img_app_icon07.png"},{value:"waitingApps08",link:"/AppsDetail",title:"퇴비비료 생산 및 출고관리",image:"@temp_img_app_icon08.png"},{value:"waitingApps09",link:"/AppsDetail",title:"하나로마트 식품 안전 일일 점검",image:"@temp_img_app_icon09.png"}]),V=m(null),X=()=>{const n=V.value;n&&n.scrollBy({left:-420,behavior:"smooth"})},Y=()=>{const n=V.value;n&&n.scrollBy({left:Je,behavior:"smooth"})},E=m(!0),L=m(!1),Z=()=>{const n=V.value;n&&(E.value=n.scrollLeft===0,L.value=n.scrollLeft+n.clientWidth>=n.scrollWidth)},z=m([{link:"/AppsDetail",title:"1공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미",subtitle:"총무형",badges:[{text:"NEW",color:"success"},{text:"추천",color:"purple"},{text:"HOT",color:"pink"}],inUse:!0,likeCount:999},{link:"/AppsDetail",title:"2공통총무알리미",subtitle:"총무형",badges:[{text:"NEW",color:"success"},{text:"추천",color:"purple"},{text:"HOT",color:"pink"}],inUse:!0,likeCount:100},{link:"/AppsDetail",title:"3공통총무알리미",subtitle:"총무형",badges:[{text:"NEW",color:"success"},{text:"추천",color:"purple"}],inUse:!1,likeCount:555},{link:"/AppsDetail",title:"4공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미공통총무알리미",subtitle:"총무형",badges:[{text:"NEW",color:"success"},{text:"추천",color:"purple"},{text:"HOT",color:"pink"}],inUse:!0,likeCount:999},{link:"/AppsDetail",title:"5공통총무알리미",subtitle:"총무형",badges:[{text:"NEW",color:"success"},{text:"추천",color:"purple"},{text:"HOT",color:"pink"}],inUse:!0,likeCount:100}]);return(n,s)=>(i(),g(r,null,[l("div",we,[a(D,{class:"w-box"},{default:e(()=>[l("div",Ve,[s[25]||(s[25]=l("strong",{class:"title-5-bd"}," 사용중인 앱 ",-1)),l("div",Ce,[a(W,{modelValue:T.value,"onUpdate:modelValue":s[0]||(s[0]=t=>T.value=t),width:f(x)?"auto":"105",density:"compact",items:["최근접속순","가장많은 접속순","업데이트순","가나다순"]},null,8,["modelValue","width"]),v.value?d("",!0):(i(),o(p,{key:0,color:"info",disabled:U.value.length===0,onClick:s[1]||(s[1]=t=>v.value=!0)},{default:e(()=>s[22]||(s[22]=[_(" 편집 ")])),_:1},8,["disabled"]))]),v.value?(i(),g("div",De,[a(p,{color:"info",onClick:s[2]||(s[2]=t=>v.value=!1)},{default:e(()=>s[23]||(s[23]=[_(" 편집완료 ")])),_:1}),a(p,{disabled:w.value.length===0,color:"warning",variant:"outlined",onClick:s[3]||(s[3]=t=>A.value=!0)},{default:e(()=>s[24]||(s[24]=[_(" 삭제 ")])),_:1},8,["disabled"])])):d("",!0)]),U.value.length>0?(i(),o(O,{key:0,selected:w.value,"onUpdate:selected":s[5]||(s[5]=t=>w.value=t),"select-strategy":"multiple",class:"app-list"},{default:e(()=>[(i(!0),g(r,null,k(U.value,(t,u)=>(i(),o(H,{key:u,value:t.value,ripple:!1,to:v.value?null:t.link},{prepend:e(({isSelected:c})=>[v.value?(i(),o(C,{key:0},{default:e(()=>[a(h,{"model-value":c},null,8,["model-value"])]),_:2},1024)):d("",!0),l("div",je,[a(R,{src:B(t.image)},null,8,["src"])])]),default:e(()=>[a(M,null,{default:e(()=>[_(b(t.title),1)]),_:2},1024),a(C,null,{default:e(()=>[a(p,{color:"info",size:"small",disabled:v.value,onClick:s[4]||(s[4]=y(()=>{},["stop","prevent"]))},{default:e(()=>s[26]||(s[26]=[_(" 앱 열기 ")])),_:1},8,["disabled"])]),_:1})]),_:2},1032,["value","to"]))),128))]),_:1},8,["selected"])):(i(),o(q,{key:1,height:f(x)?"235":"260",icon:"null"},{text:e(()=>s[27]||(s[27]=[l("div",{class:"text-2-md text-quaternary"}," 신청대기중인 앱이 없습니다. ",-1)])),actions:e(()=>[a(p,{color:"primary",size:"x-large",to:"/Apps"},{default:e(()=>s[28]||(s[28]=[_(" Apps 보러가기 ")])),_:1})]),_:1},8,["height"]))]),_:1}),U.value.length===0?(i(),o(D,{key:0,class:"r-box"},{default:e(()=>[l("div",Te,[s[29]||(s[29]=l("strong",{class:"title-5-bd"}," 직무를 위한 앱을 추천드려요 ",-1)),!f(G)&z.value.length>3?(i(),g("div",Ue,[a(p,{icon:"custom:arrow-left",class:"btn-scroll",variant:"plain",disabled:E.value,onClick:X},null,8,["disabled"]),a(p,{variant:"plain",icon:"custom:arrow-right",class:"btn-scroll",disabled:L.value,onClick:Y},null,8,["disabled"])])):d("",!0)]),l("div",$e,[l("div",{ref_key:"scrollContainer",ref:V,class:"apps-list recomm scroll",onScroll:Z,onTouchstart:s[7]||(s[7]=y(()=>{},["stop"])),onTouchmove:s[8]||(s[8]=y(()=>{},["stop"]))},[(i(!0),g(r,null,k(z.value,(t,u)=>(i(),o(F,{id:`section${u+1}`,key:u,to:t.link,ripple:!1,class:"apps"},{default:e(()=>[l("div",ze,[l("div",Ie,[a(I,{class:"like",size:"x-large",icon:"custom:full-heart"}),l("span",null,b(t.likeCount),1)]),l("div",Ne,[(i(!0),g(r,null,k(t.badges.slice(0,3),(c,S)=>(i(),o(N,{key:S,color:c.color,variant:"tonal",class:"flag"},{default:e(()=>[_(b(c.text),1)]),_:2},1032,["color"]))),128)),t.inUse?(i(),o(N,{key:0,class:"flag",color:"primary"},{default:e(()=>s[30]||(s[30]=[_(" 사용중 ")])),_:1})):d("",!0)])]),l("div",Be,[l("div",Ee,[a(ss,{class:"line-clamp"},{default:e(()=>[_(b(t.subtitle),1)]),_:2},1024),a(P,{class:"title-4 line-clamp"},{default:e(()=>[_(b(t.title),1)]),_:2},1024)]),l("div",Le,[a(p,{color:"primary",onClick:s[6]||(s[6]=y(()=>{},["stop","prevent"]))},{default:e(()=>s[31]||(s[31]=[_(" 사용신청 ")])),_:1})])])]),_:2},1032,["id","to"]))),128))],544)])]),_:1})):d("",!0),a(D,{class:"w-box"},{default:e(()=>[l("div",Se,[s[33]||(s[33]=l("strong",{class:"title-5-bd"}," 사용중인 앱 ",-1)),l("div",We,[a(W,{modelValue:T.value,"onUpdate:modelValue":s[9]||(s[9]=t=>T.value=t),width:f(x)?"auto":"105",density:"compact",items:["최근접속순","가장많은 접속순","업데이트순","가나다순"]},null,8,["modelValue","width"]),a(p,{color:"info",disabled:$.value.length===0,onClick:s[10]||(s[10]=t=>v.value=!0)},{default:e(()=>s[32]||(s[32]=[_(" 편집 ")])),_:1},8,["disabled"])])]),$.value.length>0?(i(),o(O,{key:0,selected:w.value,"onUpdate:selected":s[11]||(s[11]=t=>w.value=t),"select-strategy":"multiple",class:"app-list"},{default:e(()=>[(i(!0),g(r,null,k($.value,(t,u)=>(i(),o(H,{key:u,value:t.value,ripple:!1},{prepend:e(({isSelected:c})=>[v.value?(i(),o(C,{key:0},{default:e(()=>[a(h,{"model-value":c},null,8,["model-value"])]),_:2},1024)):d("",!0),l("div",Oe,[a(R,{src:B(t.image)},null,8,["src"])])]),default:e(()=>[a(M,null,{default:e(()=>[_(b(t.title),1)]),_:2},1024),a(C,null,{default:e(()=>[a(p,{color:"info",size:"small",disabled:v.value},{default:e(()=>s[34]||(s[34]=[_(" 앱 열기 ")])),_:1},8,["disabled"])]),_:1})]),_:2},1032,["value"]))),128))]),_:1},8,["selected"])):(i(),o(q,{key:1,height:f(x)?"235":"260",icon:"null"},{text:e(()=>s[35]||(s[35]=[l("div",{class:"text-2-md text-quaternary"}," 신청대기중인 앱이 없습니다. ",-1)])),actions:e(()=>[a(p,{color:"primary",size:"x-large",to:"/Apps"},{default:e(()=>s[36]||(s[36]=[_(" Apps 보러가기 ")])),_:1})]),_:1},8,["height"]))]),_:1}),$.value.length===0?(i(),o(D,{key:1,class:"r-box"},{default:e(()=>[l("div",He,[s[37]||(s[37]=l("strong",{class:"title-5-bd"}," 직무를 위한 앱을 추천드려요 ",-1)),!f(G)&z.value.length>3?(i(),g("div",Me,[a(p,{icon:"custom:arrow-left",class:"btn-scroll",variant:"plain",disabled:E.value,onClick:X},null,8,["disabled"]),a(p,{variant:"plain",icon:"custom:arrow-right",class:"btn-scroll",disabled:L.value,onClick:Y},null,8,["disabled"])])):d("",!0)]),l("div",Re,[l("div",{ref_key:"scrollContainer",ref:V,class:"apps-list recomm scroll",onScroll:Z,onTouchstart:s[13]||(s[13]=y(()=>{},["stop"])),onTouchmove:s[14]||(s[14]=y(()=>{},["stop"]))},[(i(!0),g(r,null,k(z.value,(t,u)=>(i(),o(F,{id:`section${u+1}`,key:u,to:t.link,ripple:!1,class:"apps"},{default:e(()=>[l("div",qe,[l("div",Fe,[a(I,{class:"like",size:"x-large",icon:"custom:full-heart"}),l("span",null,b(t.likeCount),1)]),l("div",Pe,[(i(!0),g(r,null,k(t.badges.slice(0,3),(c,S)=>(i(),o(N,{key:S,color:c.color,variant:"tonal",class:"flag"},{default:e(()=>[_(b(c.text),1)]),_:2},1032,["color"]))),128)),t.inUse?(i(),o(N,{key:0,class:"flag",color:"primary"},{default:e(()=>s[38]||(s[38]=[_(" 사용중 ")])),_:1})):d("",!0)])]),l("div",Ge,[l("div",Ke,[a(ss,{class:"line-clamp"},{default:e(()=>[_(b(t.subtitle),1)]),_:2},1024),a(P,{class:"title-4 line-clamp"},{default:e(()=>[_(b(t.title),1)]),_:2},1024)]),l("div",Qe,[a(p,{color:"primary",onClick:s[12]||(s[12]=y(()=>{},["stop","prevent"]))},{default:e(()=>s[39]||(s[39]=[_(" 사용신청 ")])),_:1})])])]),_:2},1032,["id","to"]))),128))],544)])]),_:1})):d("",!0),a(D,{class:"w-box"},{default:e(()=>[l("div",Xe,[s[40]||(s[40]=l("strong",{class:"title-5-bd"}," 신청대기 앱 ",-1)),l("div",Ye,[a(W,{modelValue:K.value,"onUpdate:modelValue":s[15]||(s[15]=t=>K.value=t),density:"compact",items:["최근신청순","가나다순"]},null,8,["modelValue"])])]),Q.value.length>0?(i(),o(O,{key:0,class:"app-list"},{default:e(()=>[(i(!0),g(r,null,k(Q.value,(t,u)=>(i(),o(H,{key:u,value:t.value,ripple:!1,to:t.link},{prepend:e(()=>[l("div",Ze,[a(R,{width:50,src:B(t.image)},null,8,["src"])])]),default:e(()=>[a(M,null,{default:e(()=>[_(b(t.title),1)]),_:2},1024),a(C,null,{default:e(()=>[a(p,{color:"secondary",size:"small",disabled:""},{default:e(()=>s[41]||(s[41]=[_(" 신청 대기중 ")])),_:1})]),_:1})]),_:2},1032,["value","to"]))),128))]),_:1})):(i(),o(q,{key:1,height:f(x)?"314":"260",icon:"null"},{text:e(()=>s[42]||(s[42]=[l("div",{class:"text-2-md text-quaternary"}," 신청대기중인 앱이 없습니다. ",-1)])),actions:e(()=>[a(p,{color:"primary",size:"x-large",to:"/Apps"},{default:e(()=>s[43]||(s[43]=[_(" Apps 보러가기 ")])),_:1})]),_:1},8,["height"]))]),_:1})]),a(as,{modelValue:A.value,"onUpdate:modelValue":s[20]||(s[20]=t=>A.value=t),class:"popup-sm",onAfterLeave:s[21]||(s[21]=t=>j.value=!1)},{default:e(()=>[a(F,null,{default:e(()=>[a(P,null,{default:e(()=>[a(p,{icon:"custom:close",density:"comfortable",onClick:s[16]||(s[16]=t=>A.value=!1)})]),_:1}),a(es,null,{default:e(()=>[j.value?(i(),g(r,{key:1},[a(I,{icon:"custom:complete"}),s[46]||(s[46]=l("strong",{class:"title-5-bd"},"삭제 완료",-1)),s[47]||(s[47]=l("p",{class:"text-4"}," 삭제가 완료되었습니다. ",-1))],64)):(i(),g(r,{key:0},[a(I,{icon:"custom:warning"}),s[44]||(s[44]=l("strong",{class:"title-5-bd"},"삭제",-1)),s[45]||(s[45]=l("p",{class:"text-4"}," 삭제하시겠습니까? ",-1))],64))]),_:1}),a(ts,null,{default:e(()=>[j.value?(i(),o(p,{key:1,color:"primary",size:"large",onClick:s[19]||(s[19]=t=>A.value=!1)},{default:e(()=>s[50]||(s[50]=[_(" 확인 ")])),_:1})):(i(),g(r,{key:0},[a(p,{color:"info",size:"large",onClick:s[17]||(s[17]=t=>A.value=!1)},{default:e(()=>s[48]||(s[48]=[_(" 취소 ")])),_:1}),a(p,{color:"primary",size:"large",onClick:s[18]||(s[18]=t=>j.value=!0)},{default:e(()=>s[49]||(s[49]=[_(" 삭제 ")])),_:1})],64))]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}};export{at as default};
