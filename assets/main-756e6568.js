(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();let c=0,p=0,r=[];console.log(`
greetings
* ** * * 
 *    *  
    *   *
         
        *
    *    
         
  **  *  
         
*      * 
         
 *   *   
`);window.onload=function(){const d=document.getElementById("ref");document.body.getBoundingClientRect().height;const i=document.createElement("div");d.append(i),i.classList.add("three-d-container");const s=document.querySelectorAll(".base")[0],e=s.getBoundingClientRect().height;i.style.perspective=`${e/200}px`;const t=window.innerHeight/4,l=window.innerHeight/2;function f(){for(;c<e;){let n=document.createElement("div");n.classList.add("size-fix"),n.style.height=`${t}px`;let o=s.cloneNode(!0);o.classList="",o.style.transform=`translateY(${-c-p}px)`,n.append(o),i.append(n),r.push(n),c+=t}s.style.overflow="hidden",s.style.height=0,s.style.display="none";for(let n=0;n+1<r.length;n+=1)n%2!=0?r[n].style.transformOrigin="bottom":r[n].style.transformOrigin="top"}f();const u=1.5,g=n=>{for(let o=0;o+1<r.length;o+=2)i.style.perspectiveOrigin=`50% ${window.pageYOffset}px`,r[o].style.transform=`rotateX(${Math.min(0,Math.max(-(l-r[o+1].getBoundingClientRect().top)*.01,-u))}deg)`,r[o+1].style.transform=`rotateX(${Math.max(0,Math.min((l-r[o+1].getBoundingClientRect().top)*.01,u))}deg)`};window.addEventListener("scroll",n=>g())};
