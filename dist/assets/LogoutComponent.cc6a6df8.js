import{u as c,r as _,c as o,b as e,i as u,w as i,k as l,l as d,o as t}from"./index.104e7420.js";import{c as m,b as p}from"./firebaseconfig.74deeeb5.js";const g={class:"login-page modal-std-container"},h={class:"modal-std"},v={key:0},f=e("i",{class:"material-icons"},"dark_mode",-1),k=e("strong",null,"sure?",-1),b={__name:"LogoutComponent",setup(y){const s=d(),a=c(),n=_(!0),r=async()=>{await m(p),a.$reset(),localStorage.clear(),s.push("Login")};return(L,w)=>(t(),o("div",g,[e("div",h,[n.value?(t(),o("span",v,[f,u(" Really? Are you "),k,e("button",{onClick:i(r,["prevent"])},"unLogMe")])):l("",!0)])]))}};export{b as default};
