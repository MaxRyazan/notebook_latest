import{d as A,b as f,r as v,e as $,f as h,g as B,o as l,c,h as s,F as m,i as N,t as _,j as T,p as b,k as S,_ as w,u as D,w as P,l as k,m as x,n as R,q as g,s as V,T as M,v as y,x as L}from"./index-3cc4f03c.js";const C=A("noteStore",{state:()=>({notes:[]})});function I(e){const t=new Date(e),n=t.getDate(),d=p(t.getMonth()+1),a=t.getFullYear(),r=p(t.getHours()),o=p(t.getMinutes());return n+"-"+d+"-"+a+" "+r+":"+o}function p(e){return e<10?"0"+e:e}const W=e=>(b("data-v-5df080df"),e=e(),S(),e),j={class:"card_wrapper"},q={class:"note_item"},z=W(()=>s("span",null,"Теги: ",-1)),E=["onClick"],H={class:"note_item note_title"},O={class:"note_item note_text"},U=W(()=>s("div",{class:"hide_content"},null,-1)),Y={class:"note_item note_footer"},G=f({__name:"ReusableNoteCard",props:{singleNote:{}},emits:["showAllNotesWithThatTag"],setup(e){const t=e,n=v({}),d=$(()=>I(t.singleNote.dateTime));return h(async()=>{n.value=B(t.singleNote.userId)}),(a,r)=>{var o,u;return l(),c("div",j,[s("div",q,[z,(l(!0),c(m,null,N(a.singleNote.tags,i=>(l(),c("span",{class:"note_item--tag",key:i,onClick:F=>a.$emit("showAllNotesWithThatTag",i)},_(i),9,E))),128))]),s("div",H,_(a.singleNote.title),1),s("div",O,[T(_(a.singleNote.text)+" ",1),U]),s("div",Y,[s("span",null,"Заметка от: "+_(d.value),1),s("span",null,_((o=n.value)!=null&&o.username?"Автор: "+((u=n.value)==null?void 0:u.username):" Автор неизвестен"),1)])])}}});const J=w(G,[["__scopeId","data-v-5df080df"]]),K=e=>(b("data-v-4fbb43fa"),e=e(),S(),e),Q={class:"filtered_notes"},X={class:"filter_tag-wrapper"},Z=K(()=>s("span",{style:{cursor:"default"}},"Все заметки с тегом ",-1)),ee={class:"filter_tag"},te=["onClick"],se=f({__name:"FilteredNotesWindow",props:{tag:{}},emits:["closeWindow"],setup(e){const t=e,n=C(),d=D(),a=v([]);h(()=>{a.value=n.notes.filter(o=>o.tags.includes(t.tag))});const r=$(()=>t.tag);return P(r,()=>{a.value=n.notes.filter(o=>o.tags.includes(r.value))}),(o,u)=>(l(),c("div",Q,[k(R,{onPush:u[0]||(u[0]=i=>o.$emit("closeWindow")),style:{position:"absolute",right:"2px",top:"2px"},close_warning:""},{default:x(()=>[T("x")]),_:1}),s("div",X,[Z,s("span",ee,_(t.tag)+":",1)]),(l(!0),c(m,null,N(a.value,i=>(l(),c("div",{key:i.dateTime},[s("div",{class:"filter_line",onClick:F=>g(d).push(i.id.toString())},[s("span",null,_(i.title),1),s("span",null,_(g(I)(i.dateTime)),1)],8,te)]))),128))]))}});const oe=w(se,[["__scopeId","data-v-4fbb43fa"]]),ne={class:"wrapper"},ae={class:"all_notes_wrapper"},le=f({__name:"AllNotesPage",setup(e){const t=C(),n=v("");h(()=>{t.notes=V()});function d(a){n.value=a}return(a,r)=>(l(),c("div",ne,[s("div",ae,[(l(!0),c(m,null,N(g(t).notes,o=>(l(),y(J,{onShowAllNotesWithThatTag:d,key:o.id,singleNote:o},null,8,["singleNote"]))),128))]),k(M,{name:"fade"},{default:x(()=>[n.value.length?(l(),y(oe,{key:0,onCloseWindow:r[0]||(r[0]=o=>n.value=""),tag:n.value},null,8,["tag"])):L("",!0)]),_:1})]))}});const re=w(le,[["__scopeId","data-v-9b19c00a"]]);export{re as default};
