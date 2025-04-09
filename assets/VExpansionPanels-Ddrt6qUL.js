import{t as P,v as m,i as S,cy as z,x as y,b as l,a8 as T,a9 as L,R as j,cz as $,z as g,cA as F,E as h,cu as N,j as r,cB as H,P as A,V as J,cx as K,ac as k,cC as O,I as q,J as M,y as B,B as Q,cD as U,C as W,cE as X,cF as Y,K as Z,N as ee,G as t,A as ae,cG as ne,cH as le}from"./index-CHWqN9gn.js";const p=Symbol.for("vuetify:v-expansion-panel"),w=m({...g(),...$()},"VExpansionPanelText"),C=P()({name:"VExpansionPanelText",props:w(),setup(e,d){let{slots:n}=d;const a=S(p);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:o,onAfterLeave:u}=z(e,a.isSelected);return y(()=>l(j,{onAfterLeave:u},{default:()=>{var i;return[T(l("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&o.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(i=n.default)==null?void 0:i.call(n)])]),[[L,a.isSelected.value]])]}})),{}}}),D=m({color:String,expandIcon:{type:k,default:"$expand"},collapseIcon:{type:k,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...g(),...K()},"VExpansionPanelTitle"),I=P()({name:"VExpansionPanelTitle",directives:{Ripple:F},props:D(),setup(e,d){let{slots:n}=d;const a=S(p);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:o,backgroundColorStyles:u}=h(e,"color"),{dimensionStyles:i}=N(e),v=r(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),b=r(()=>a.isSelected.value?e.collapseIcon:e.expandIcon);return y(()=>{var x;return T(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},o.value,e.class],style:[u.value,i.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(x=n.default)==null?void 0:x.call(n,v.value),!e.hideActions&&l(A,{defaults:{VIcon:{icon:b.value}}},{default:()=>{var f;return[l("span",{class:"v-expansion-panel-title__icon"},[((f=n.actions)==null?void 0:f.call(n,v.value))??l(J,null,null)])]}})]),[[H("ripple"),e.ripple]])}),{}}}),_=m({title:String,text:String,bgColor:String,...W(),...U(),...Q(),...B(),...D(),...w()},"VExpansionPanel"),ie=P()({name:"VExpansionPanel",props:_(),emits:{"group:selected":e=>!0},setup(e,d){let{slots:n}=d;const a=O(e,p),{backgroundColorClasses:o,backgroundColorStyles:u}=h(e,"bgColor"),{elevationClasses:i}=q(e),{roundedClasses:v}=M(e),b=r(()=>(a==null?void 0:a.disabled.value)||e.disabled),x=r(()=>a.group.items.value.reduce((c,s,V)=>(a.group.selected.value.includes(s.id)&&c.push(V),c),[])),f=r(()=>{const c=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&x.value.some(s=>s-c===1)}),G=r(()=>{const c=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&x.value.some(s=>s-c===-1)});return X(p,a),y(()=>{const c=!!(n.text||e.text),s=!!(n.title||e.title),V=I.filterProps(e),R=C.filterProps(e);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":f.value,"v-expansion-panel--after-active":G.value,"v-expansion-panel--disabled":b.value},v.value,o.value,e.class],style:[u.value,e.style]},{default:()=>[l("div",{class:["v-expansion-panel__shadow",...i.value]},null),l(A,{defaults:{VExpansionPanelTitle:{...V},VExpansionPanelText:{...R}}},{default:()=>{var E;return[s&&l(I,{key:"title"},{default:()=>[n.title?n.title():e.title]}),c&&l(C,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(E=n.default)==null?void 0:E.call(n)]}})]})}),{groupItem:a}}}),te=["default","accordion","inset","popout"],se=m({flat:Boolean,...le(),...ne(_(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...ae(),...g(),...B(),variant:{type:String,default:"default",validator:e=>te.includes(e)}},"VExpansionPanels"),ce=P()({name:"VExpansionPanels",props:se(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:n}=d;const{next:a,prev:o}=Y(e,p),{themeClasses:u}=Z(e),i=r(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return ee({VExpansionPanel:{bgColor:t(e,"bgColor"),collapseIcon:t(e,"collapseIcon"),color:t(e,"color"),eager:t(e,"eager"),elevation:t(e,"elevation"),expandIcon:t(e,"expandIcon"),focusable:t(e,"focusable"),hideActions:t(e,"hideActions"),readonly:t(e,"readonly"),ripple:t(e,"ripple"),rounded:t(e,"rounded"),static:t(e,"static")}}),y(()=>l(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},u.value,i.value,e.class],style:e.style},{default:()=>{var v;return[(v=n.default)==null?void 0:v.call(n,{prev:o,next:a})]}})),{next:a,prev:o}}});export{ce as V,ie as a,I as b,C as c};
