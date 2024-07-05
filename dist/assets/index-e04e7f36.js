import{V as le,_ as ae,a as te,b as se}from"./VPagination-9dd8d4ce.js";import{_ as oe}from"./AppTextField-933bd428.js";import{_ as ne}from"./DialogCloseBtn-0b4be227.js";import{r as ue,R as re,u as de,b as ie,A as z,d as me,t as pe,e as G,f as ce}from"./auth-6f82e049.js";import{a as k}from"./axios-01b94c30.js";import{a as fe}from"./avatar-1-0fc07019.js";import{j as c,o as y,c as L,n as e,w as t,z as O,p as l,l as R,a1 as H,G as K,a2 as Q,b as S,A as j,E as F,L as D,C as U,x as W,r as Ve}from"./index-3ab1350d.js";import{V as _e}from"./VBadge-77601574.js";import{V as I,d as A,a as X,b as M,c as ve}from"./VCard-8cc916f2.js";import{V as Z,a as V}from"./VRow-855a74e6.js";import{V as ee}from"./VDialog-e6874142.js";import{V as h}from"./VTextField-526edc2d.js";import{V as Y,a as ge}from"./VSelect-9931210f.js";import{V as J}from"./VSpacer-6162073f.js";import"./VOverlay-351a2b8b.js";import"./forwardRefs-9d31fcaa.js";import"./transition-1aad72ac.js";import"./VCheckboxBtn-a2048371.js";import"./VList-325f7d70.js";import"./VAvatar-711074a5.js";import"./VImg-6da79d67.js";import"./VDivider-c3764d21.js";import"./dialog-transition-822ea419.js";import"./VMenu-2e27caac.js";const be={class:"text-center"},Ue=R("div",{class:"text-center mb-2"},"Select Photo",-1),Ce=["src"],ye=["src"],xe={__name:"AvatarPicker",setup($){const g=c(null),r=c(null),_=v=>{const f=v.target.files[0];r.value=URL.createObjectURL(f)},u=()=>{g.value.click()};return(v,f)=>(y(),L("div",be,[Ue,e(_e,{onClick:u},{badge:t(()=>[e(O,{icon:"tabler-camera"})]),default:t(()=>[r.value?(y(),L("img",{key:0,class:"photoPreview",src:r.value},null,8,Ce)):(y(),L("img",{key:1,class:"photoPreview",src:l(fe)},null,8,ye))]),_:1}),R("input",{class:"photo-selector",ref_key:"photoSelector",ref:g,type:"file",onChange:_},null,544)]))}},we={__name:"CreateDialog",props:{isDialogVisible:{type:Boolean,required:!1},user:{type:Object,required:!1},isUpdate:{type:Boolean,required:!1}},emits:["close-dialog"],setup($,{emit:g}){const r=$,_=ue(),u=de,v=c([]),f=H(r,"isDialogVisible"),s=H(r,"user"),d=c(""),x=K(()=>b.value.length>0),B=K(()=>s.value.role==re),b=c(""),N=()=>{g("close-dialog",!1)},T=()=>{const i=s.value;if(i.username.length==0){b.value="Username must be not empty.";return}if(i.role!="Agent"){b.value="User role must be agent.";return}if(i.team_leader==0||i.team_leader==""){b.value="You must select team leader.";return}if(i.status!="active"&&i.status!="inactive"){b.value="Status is wrong.";return}if(!r.isUpdate&&i.password.length==0){b.value="Password must be not empty.";return}if(!r.isUpdate&&i.password!=d.value){b.value="Password mismatch.";return}r.isUpdate?k.put("/users",i).then(o=>{g("close-dialog",!0)}):k.post("/users",i).then(o=>{g("close-dialog",!0)})},E=()=>{k.get("/users/leaders").then(i=>{const{leaders:o}=i.data;v.value=o.map(w=>({value:w.id,title:w.name}))})};return Q(()=>{E()}),(i,o)=>{const w=ne,C=oe,P=ae;return y(),S(ee,{modelValue:l(f),"onUpdate:modelValue":o[12]||(o[12]=a=>F(f)?f.value=a:null),"max-width":"720"},{default:t(()=>[e(w,{onClick:N}),e(I,{title:"User Profile"},{default:t(()=>[e(A,null,{default:t(()=>[e(xe),e(Z,{class:"mt-4"},{default:t(()=>[e(V,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(C,{modelValue:l(s).username,"onUpdate:modelValue":o[0]||(o[0]=a=>l(s).username=a),label:"User Name"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(C,{modelValue:l(s).name,"onUpdate:modelValue":o[1]||(o[1]=a=>l(s).name=a),label:"Name"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(C,{modelValue:l(s).email,"onUpdate:modelValue":o[2]||(o[2]=a=>l(s).email=a),label:"Email","persistent-hint":""},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(P,{modelValue:l(s).role,"onUpdate:modelValue":o[3]||(o[3]=a=>l(s).role=a),items:l(_),label:"Role"},null,8,["modelValue","items"])]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:t(()=>[l(B)?(y(),S(P,{key:0,modelValue:l(s).team_leader,"onUpdate:modelValue":o[4]||(o[4]=a=>l(s).team_leader=a),items:l(v),label:"Team Leader"},null,8,["modelValue","items"])):j("",!0)]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(P,{modelValue:l(s).status,"onUpdate:modelValue":o[5]||(o[5]=a=>l(s).status=a),items:l(u),label:"Status"},null,8,["modelValue","items"])]),_:1}),r.isUpdate?j("",!0):(y(),S(V,{key:0,cols:"12",sm:"6"},{default:t(()=>[e(C,{modelValue:l(s).password,"onUpdate:modelValue":o[6]||(o[6]=a=>l(s).password=a),label:"Password",type:"password"},null,8,["modelValue"])]),_:1})),r.isUpdate?j("",!0):(y(),S(V,{key:1,cols:"12",sm:"6"},{default:t(()=>[e(C,{modelValue:l(d),"onUpdate:modelValue":o[7]||(o[7]=a=>F(d)?d.value=a:null),label:"Password Confirmation",type:"password"},null,8,["modelValue"])]),_:1})),e(V,{cols:"12",sm:"6"},{default:t(()=>[e(C,{modelValue:l(s).caller_id,"onUpdate:modelValue":o[8]||(o[8]=a=>l(s).caller_id=a),label:"Caller ID",type:"number"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6"},{default:t(()=>[e(C,{modelValue:l(s).contact_number,"onUpdate:modelValue":o[9]||(o[9]=a=>l(s).contact_number=a),label:"Contact Number",type:"text"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(A,{class:"d-flex justify-end flex-wrap gap-3"},{default:t(()=>[e(D,{variant:"tonal",color:"secondary",onClick:o[10]||(o[10]=a=>f.value=!1)},{default:t(()=>[U(" Close ")]),_:1}),e(D,{onClick:T},{default:t(()=>[U(" Save ")]),_:1})]),_:1})]),_:1}),e(le,{modelValue:l(x),"onUpdate:modelValue":o[11]||(o[11]=a=>F(x)?x.value=a:null),timeout:1e3,location:"top end",variant:"tonal",color:"error"},{default:t(()=>[U(W(l(b)),1)]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])}}},ke={class:"d-flex align-center mx-4"},De={__name:"FilterUser",emits:["apply-filter"],setup($,{emit:g}){const r=ie(),_=me,u=c({id:"",name:"",role:z,status:z}),v=()=>{g("apply-filter",u.value)};return(f,s)=>(y(),S(I,null,{default:t(()=>[e(X,null,{default:t(()=>[e(M,null,{default:t(()=>[U("Filter ")]),_:1})]),_:1}),e(A,null,{default:t(()=>[R("div",ke,[e(h,{modelValue:l(u).id,"onUpdate:modelValue":s[0]||(s[0]=d=>l(u).id=d),label:"Id"},null,8,["modelValue"]),e(h,{class:"ml-4",modelValue:l(u).name,"onUpdate:modelValue":s[1]||(s[1]=d=>l(u).name=d),label:"Name"},null,8,["modelValue"]),e(Y,{class:"ml-4",modelValue:l(u).role,"onUpdate:modelValue":s[2]||(s[2]=d=>l(u).role=d),items:l(r),variant:"outlined",label:"Role"},null,8,["modelValue","items"]),e(Y,{class:"ml-4",modelValue:l(u).status,"onUpdate:modelValue":s[3]||(s[3]=d=>l(u).status=d),items:l(_),variant:"outlined",label:"Status"},null,8,["modelValue","items"]),e(D,{class:"ml-4",onClick:v},{default:t(()=>[U(" Apply ")]),_:1})])]),_:1})]),_:1}))}},Pe={class:"d-flex gap-1"},Xe={__name:"index",setup($){const g=ce.user,r=c([]),_=c([]),u=c(pe),v=c(G),f=c(!1),s=c(!1),d=c(!1),x=c(-1),B=a=>a==="active"?{color:"success",text:a}:{color:"secondary",text:a},b=()=>{s.value=!0,f.value=!1},N=a=>{s.value=!1,v.value=G,a&&w()},T=a=>{k.get(`/users/${a}`).then(n=>{const{user:m}=n.data;v.value=m,s.value=!0,f.value=!0})},E=a=>{d.value=!0,x.value=a},i=()=>{d.value=!1,x.value=-1},o=()=>{k.delete(`/users/${x.value}`).then(a=>{const{users:n}=a.data;r.value=n,_.value=n,d.value=!1,x.value=-1})},w=()=>{k.get("/users").then(a=>{const{users:n}=a.data;r.value=n,_.value=n})},C=a=>{k.put(`/users/activate/${a}`).then(n=>{const{users:m}=n.data;r.value=m,_.value=m})},P=a=>{let n=r.value;a.id!=""&&(n=n.filter(m=>m.id==a.id)),a.name!=""&&(n=n.filter(m=>m.username.includes(a.name))),a.role!="All"&&(n=n.filter(m=>m.role==a.role)),a.status!="All"&&(n=n.filter(m=>m.status==a.status)),_.value=[...n]};return Q(()=>{w()}),(a,n)=>{const m=Ve("IconBtn");return y(),L("div",null,[e(De,{onApplyFilter:P}),e(I,{class:"mt-4"},{default:t(()=>[e(X,null,{append:t(()=>[e(D,{onClick:b,size:"small",icon:"tabler-plus"})]),default:t(()=>[e(M,null,{default:t(()=>[U("User List")]),_:1})]),_:1}),e(A,null,{default:t(()=>[e(l(te),{headers:l(g),items:l(_),"items-per-page":l(u).itemsPerPage,page:l(u).page,"onUpdate:options":n[2]||(n[2]=p=>u.value=p)},{"item.status":t(({item:p})=>[e(ge,{color:B(p.raw.status).color,onClick:q=>C(p.raw.id),size:"small"},{default:t(()=>[U(W(B(p.raw.status).text),1)]),_:2},1032,["color","onClick"])]),"item.actions":t(({item:p})=>[R("div",Pe,[e(m,{onClick:q=>T(p.raw.id)},{default:t(()=>[e(O,{icon:"mdi-pencil-outline"})]),_:2},1032,["onClick"]),e(m,{onClick:q=>E(p.raw.id)},{default:t(()=>[e(O,{icon:"mdi-delete-outline"})]),_:2},1032,["onClick"])])]),bottom:t(()=>[e(A,{class:"mt-8"},{default:t(()=>[e(Z,null,{default:t(()=>[e(V,{lg:"2",cols:"3"},{default:t(()=>[e(h,{modelValue:l(u).itemsPerPage,"onUpdate:modelValue":n[0]||(n[0]=p=>l(u).itemsPerPage=p),label:"Rows per page:",type:"number",min:"-1",max:"15","hide-details":""},null,8,["modelValue"])]),_:1}),e(V,{lg:"10",cols:"9",class:"d-flex justify-end"},{default:t(()=>[e(se,{modelValue:l(u).page,"onUpdate:modelValue":n[1]||(n[1]=p=>l(u).page=p),"total-visible":"5",length:Math.ceil(l(r).length/l(u).itemsPerPage)},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})]),_:1},8,["headers","items","items-per-page","page"]),e(we,{isDialogVisible:l(s),user:l(v),isUpdate:l(f),onCloseDialog:N},null,8,["isDialogVisible","user","isUpdate"]),e(ee,{modelValue:l(d),"onUpdate:modelValue":n[3]||(n[3]=p=>F(d)?d.value=p:null),"max-width":"500px"},{default:t(()=>[e(I,null,{default:t(()=>[e(M,{class:"px-8 py-8"},{default:t(()=>[U(" Are you sure you want to delete this user? ")]),_:1}),e(ve,null,{default:t(()=>[e(J),e(D,{color:"error",variant:"outlined",onClick:i},{default:t(()=>[U(" Cancel ")]),_:1}),e(D,{color:"success",variant:"elevated",onClick:o},{default:t(()=>[U(" OK ")]),_:1}),e(J)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})])}}};export{Xe as default};