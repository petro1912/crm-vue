import{f as D}from"./forwardRefs-9d31fcaa.js";import{N as M,O,Q as w,R as b,G as m,j as v,aB as x,D as I,H as f,S as R,n as V,av as j,aI as A}from"./index-13ceccdd.js";import{m as N,u as T,c as g,V as p}from"./VOverlay-8690505d.js";import{V as U}from"./dialog-transition-c9f9e724.js";const H=M()({name:"VMenu",props:{id:String,...O(N({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:U}}),["absolute"])},emits:{"update:modelValue":a=>!0},setup(a,P){let{slots:t}=P;const o=w(a,"modelValue"),{scopeId:y}=T(),C=b(),i=m(()=>a.id||`v-menu-${C}`),u=v(),e=x(g,null),s=v(0);A(g,{register(){++s.value},unregister(){--s.value},closeParents(){setTimeout(()=>{s.value||(o.value=!1,e==null||e.closeParents())},40)}}),I(o,l=>{l?e==null||e.register():e==null||e.unregister()});function S(){e==null||e.closeParents()}const h=m(()=>f({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":i.value},a.activatorProps));return R(()=>{const[l]=p.filterProps(a);return V(p,f({ref:u,class:["v-menu",a.class],style:a.style},l,{modelValue:o.value,"onUpdate:modelValue":r=>o.value=r,absolute:!0,activatorProps:h.value,"onClick:outside":S},y),{activator:t.activator,default:function(){for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return V(j,{root:!0},{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t,...c)]}})}})}),D({id:i,ΨopenChildren:s},u)}});export{H as V};
