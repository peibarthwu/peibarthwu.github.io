(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();let d=0,m=0,i=[];console.log(`
greetings
* ** * * 
 *    *  
    *   *
         
        *
    *    
         
  **  *  
         
*      * 
         
 *   *   
`);addEventListener("DOMContentLoaded",f=>{const l=document.getElementById("ref");document.body.getBoundingClientRect().height;const r=document.createElement("div");l.append(r),r.classList.add("three-d-container");const e=document.querySelectorAll(".base")[0],t=e.getBoundingClientRect().height;r.style.perspective=`${t/200}px`;const s=window.innerHeight/4,a=window.innerHeight/2;function g(){for(;d<t;){let n=document.createElement("div");n.classList.add("size-fix"),n.style.height=`${s}px`;let o=e.cloneNode(!0);o.classList="",o.style.transform=`translateY(${-d-m}px)`,n.append(o),r.append(n),i.push(n),d+=s}e.style.overflow="hidden",e.style.height=0,e.style.display="none";for(let n=0;n+1<i.length;n+=1)n%2!=0?i[n].style.transformOrigin="bottom":i[n].style.transformOrigin="top"}g();const u=1.5,p=n=>{for(let o=0;o+1<i.length;o+=2)r.style.perspectiveOrigin=`50% ${window.pageYOffset}px`,i[o].style.transform=`rotateX(${Math.min(0,Math.max(-(a-i[o+1].getBoundingClientRect().top)*.01,-u))}deg)`,i[o+1].style.transform=`rotateX(${Math.max(0,Math.min((a-i[o+1].getBoundingClientRect().top)*.01,u))}deg)`};window.addEventListener("scroll",n=>p())});
