import{d as V,u as x,r as i,b as g,l as N,c as b,f as h,m as r,j as d,R as m,w as S,n as T,q as y,o as B,h as U,_ as $}from"./index-6c555707.js";import{u as C,c}from"./index-53149743.js";import{u as I}from"./noteStore-da78a44a.js";const M={class:"new_note_wrapper"},P=["onSubmit"],R=V({__name:"NewNotePage",setup(j){const n=x(),_=I(),s=i(""),e=i({userId:n.user.id?n.user.id:0,title:"",tags:[],text:"",dateTime:0});async function p(){await l.value.$validate()&&(Object.assign(e.value.tags,f(s.value)),e.value.dateTime=Date.now(),await _.createNote(e.value),e.value.title="",e.value.text="",s.value="")}const v=g(()=>({title:{titleValidator:c.withMessage("Минимум 2 символа!",u)},text:{textValidator:c.withMessage("Заметка должна быть длиннее 2 символов!",u)}}));function f(a){return a.trim().split(" ")}const u=a=>a.length>2,l=C(v,e);return(a,t)=>{const w=N("reusable-text-area");return B(),b("div",M,[h("form",{class:"new_note",onSubmit:y(p,["prevent"])},[r(m,{errors:d(l).title.$errors,no_border:"",width:"100%",label:"Название заметки:",modelValue:e.value.title,"onUpdate:modelValue":t[0]||(t[0]=o=>e.value.title=o),autofocus:""},null,8,["errors","modelValue"]),r(m,{no_border:"",width:"100%",label:"Тэги:",modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=o=>s.value=o)},null,8,["modelValue"]),r(w,{errors:d(l).text.$errors,height:"70%",modelValue:e.value.text,"onUpdate:modelValue":t[2]||(t[2]=o=>e.value.text=o)},null,8,["errors","modelValue"]),r(T,{style:{"align-self":"end"},width:"150px",round_violet:""},{default:S(()=>[U("Создать")]),_:1})],40,P)])}}});const E=$(R,[["__scopeId","data-v-4c6839e9"]]);export{E as default};
