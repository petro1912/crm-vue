import{t as _,i as f,o as i,b as s,w as t,p as o,y as d,l as v,n as e,z as g,A as h,T as C,e as V,r}from"./index-02544f79.js";import{i as w,a as b}from"./auth-6f82e049.js";import B from"./Footer-0c0f0ad2.js";import k from"./NavbarThemeSwitcher-8c241793.js";import y from"./UserProfile-09240dec.js";import{V as N}from"./VSpacer-789f9cb5.js";import"./VTooltip-97c4d0b6.js";import"./VOverlay-311e958b.js";import"./forwardRefs-9d31fcaa.js";import"./transition-11e3056b.js";import"./avatar-1-0fc07019.js";import"./VBadge-b38fd96e.js";import"./VImg-71aa10cb.js";import"./VMenu-d75f87ea.js";import"./dialog-transition-2ccf56f1.js";import"./VList-2da4db40.js";import"./VAvatar-8d8c7504.js";import"./VDivider-883477ee.js";const R=w(),T=b(),x=[{title:"Campaigns",to:{name:"campaigns"},icon:{icon:"tabler-plane"}}],A={title:"Users",to:{name:"users"},icon:{icon:"tabler-user"}};let n=[];R&&(n=[{title:"Categories",to:{name:"categories"},icon:{icon:"tabler-plane"}}]);T&&(n=[A,...n]);const I=[...x,...n],$={class:"d-flex h-100 align-center"},te={__name:"DefaultLayoutWithVerticalNav",setup(z){const{appRouteTransition:m,isLessThanOverlayNavBreakpoint:c}=_(),{width:p}=f();return(L,W)=>{const l=r("IconBtn"),u=r("RouterView");return i(),s(o(d),{"nav-items":o(I)},{navbar:t(({toggleVerticalOverlayNavActive:a})=>[v("div",$,[o(c)(o(p))?(i(),s(l,{key:0,id:"vertical-nav-toggle-btn",class:"ms-n3",onClick:D=>a(!0)},{default:t(()=>[e(g,{size:"26",icon:"tabler-menu-2"})]),_:2},1032,["onClick"])):h("",!0),e(k),e(N),e(y)])]),footer:t(()=>[e(B)]),default:t(()=>[e(u,null,{default:t(({Component:a})=>[e(C,{name:o(m),mode:"out-in"},{default:t(()=>[(i(),s(V(a)))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{te as default};