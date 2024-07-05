import{_ as ee}from"./DialogCloseBtn-0b4be227.js";import{g as q}from"./auth-6f82e049.js";import{a as k}from"./axios-01b94c30.js";import{a as w,V as ae}from"./VRow-855a74e6.js";import{j as u,G as A,a2 as le,r as te,o as _,c as g,n as e,w as a,l as s,L as p,F as E,a as P,p as n,q as oe,x as R,z as $,E as S,C as c}from"./index-3ab1350d.js";import{V as G}from"./VDivider-c3764d21.js";import{V as D,d as U,b as L,c as se,a as K}from"./VCard-8cc916f2.js";import{V as ne}from"./VTextField-526edc2d.js";import{V as ie}from"./VSelect-9931210f.js";import{V as O}from"./VDialog-e6874142.js";import{V as H}from"./VSpacer-6162073f.js";import"./VAvatar-711074a5.js";import"./VImg-6da79d67.js";import"./transition-1aad72ac.js";import"./forwardRefs-9d31fcaa.js";import"./VList-325f7d70.js";import"./dialog-transition-822ea419.js";import"./VMenu-2e27caac.js";import"./VOverlay-351a2b8b.js";import"./VCheckboxBtn-a2048371.js";const re={class:"flat-card"},ue={class:"d-flex w-full align-center justify-between mb-2"},de=s("div",{class:"v-card-title"}," Categories ",-1),ce=["onClick"],me={class:"d-flex gap-1"},fe={class:"flat-card"},ve={class:"d-flex w-full align-center justify-between mb-2"},pe=s("div",{class:"v-card-title"}," Sub Categories ",-1),_e={class:"d-flex gap-1"},J={__name:"CategoryList",props:{baseUrl:{type:String,required:!0}},setup(z){const C=z,h={value:-1,title:"Main"},m=u([]),V=u([]),y=u(-1),I=u(-1),i=u(!1),f=u(!1),Q=A(()=>V.value.filter(o=>o.parent_id==y.value)),B=A(()=>[h,...m.value.map(o=>({value:o.id,title:o.name}))]),b=u(q),v=u(h),W=o=>{y.value=o},N=o=>{o?v.value="Main":v.value=B.value.find(l=>l.value==y.value),b.value=q,i.value=!0},T=o=>{b.value=o,i.value=!0},F=o=>{I.value=o,f.value=!0},M=()=>{i.value=!1},X=()=>{f.value=!1},Y=()=>{const o={...b.value},l=o.id;delete o.id;const r=B.value.find(d=>d.value==v.value);r==null||r.value==-1?delete o.parent_id:o.parent_id=r.value,l==-1?k.post(C.baseUrl,o).then(d=>{const{data:t}=d.data;m.value=t.categories,V.value=t.sub_categories,i.value=!1}):k.put(`${C.baseUrl}/${l}`,o).then(d=>{const{data:t}=d.data;m.value=t.categories,V.value=t.sub_categories,i.value=!1})},Z=()=>{k.delete(`${C.baseUrl}/${I.value}`).then(o=>{const{data:l}=o.data;m.value=l.categories,V.value=l.sub_categories,I.value=-1,f.value=!1})};return le(()=>{k.get(C.baseUrl).then(o=>{const{data:l}=o.data;m.value=l.categories,V.value=l.sub_categories,l.categories.length>0&&(y.value=l.categories[0].id)})}),(o,l)=>{const r=te("IconBtn"),d=ee;return _(),g("div",null,[e(ae,null,{default:a(()=>[e(w,{cols:"12",md:"1"}),e(w,{cols:"6",md:"5"},{default:a(()=>[s("div",re,[s("div",ue,[de,e(p,{size:"small",icon:"tabler-plus",onClick:l[0]||(l[0]=t=>N(!0))})]),e(G),s("div",null,[(_(!0),g(E,null,P(n(m),(t,j)=>(_(),g("div",{key:j,class:"d-flex w-full align-center justify-between mb-2 px-2 py-2"},[s("span",{class:oe(["cursor-pointer",n(y)==t.id?"text-success":""]),onClick:x=>W(t.id)},R(t.name),11,ce),s("div",me,[e(r,{onClick:x=>T(t)},{default:a(()=>[e($,{icon:"mdi-pencil-outline"})]),_:2},1032,["onClick"]),e(r,{onClick:x=>F(t.id)},{default:a(()=>[e($,{icon:"mdi-delete-outline"})]),_:2},1032,["onClick"])])]))),128))])])]),_:1}),e(w,{cols:"6",md:"5"},{default:a(()=>[s("div",fe,[s("div",ve,[pe,e(p,{size:"small",icon:"tabler-plus",onClick:l[1]||(l[1]=t=>N(!1))})]),e(G),s("div",null,[(_(!0),g(E,null,P(n(Q),(t,j)=>(_(),g("div",{key:j,class:"d-flex w-full align-center justify-between px-2 py-2"},[s("span",null,R(t.name),1),s("div",_e,[e(r,{onClick:x=>T(t)},{default:a(()=>[e($,{icon:"mdi-pencil-outline"})]),_:2},1032,["onClick"]),e(r,{onClick:x=>F(t.id)},{default:a(()=>[e($,{icon:"mdi-delete-outline"})]),_:2},1032,["onClick"])])]))),128))])])]),_:1}),e(w,{cols:"12",md:"1"})]),_:1}),e(O,{modelValue:n(i),"onUpdate:modelValue":l[4]||(l[4]=t=>S(i)?i.value=t:null),"max-width":"720"},{default:a(()=>[e(d,{onClick:M}),e(D,{title:"Campaign Category"},{default:a(()=>[e(U,null,{default:a(()=>[e(ne,{class:"mb-4",modelValue:n(b).name,"onUpdate:modelValue":l[2]||(l[2]=t=>n(b).name=t),label:"Category Name"},null,8,["modelValue"]),e(ie,{class:"mb-4",modelValue:n(v),"onUpdate:modelValue":l[3]||(l[3]=t=>S(v)?v.value=t:null),items:n(B),variant:"outlined",label:"Parent Category"},null,8,["modelValue","items"])]),_:1}),e(U,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(p,{variant:"tonal",color:"secondary",onClick:M},{default:a(()=>[c(" Close ")]),_:1}),e(p,{onClick:Y},{default:a(()=>[c(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(O,{modelValue:n(f),"onUpdate:modelValue":l[5]||(l[5]=t=>S(f)?f.value=t:null),"max-width":"500px"},{default:a(()=>[e(D,null,{default:a(()=>[e(L,{class:"px-8 py-8"},{default:a(()=>[c(" Are you sure you want to delete this category? ")]),_:1}),e(se,null,{default:a(()=>[e(H),e(p,{color:"error",variant:"outlined",onClick:X},{default:a(()=>[c(" Cancel ")]),_:1}),e(p,{color:"success",variant:"elevated",onClick:Z},{default:a(()=>[c(" OK ")]),_:1}),e(H)]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}},Fe={__name:"index",setup(z){return(C,h)=>(_(),g("div",null,[e(D,null,{default:a(()=>[e(K,null,{default:a(()=>[e(L,null,{default:a(()=>[c("Campaign Categories List")]),_:1})]),_:1}),e(U,null,{default:a(()=>[e(J,{baseUrl:"/admin/campaign-categories"})]),_:1})]),_:1}),e(D,{class:"mt-4"},{default:a(()=>[e(K,null,{default:a(()=>[e(L,null,{default:a(()=>[c("Progress Categories List")]),_:1})]),_:1}),e(U,null,{default:a(()=>[e(J,{baseUrl:"/admin/progress-categories"})]),_:1})]),_:1})]))}};export{Fe as default};
