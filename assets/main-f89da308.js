(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function p(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(e){if(e.ep)return;e.ep=!0;const n=p(e);fetch(e.href,n)}})();let c=0,h=0,i=[];console.log(`
greetings
* ** * * 
 *    *  
    *   *
         
        *
    *    
         
  **  *  
         
*      * 
         
 *   *   
`);console.log("hi there! I put my cv at peibarthwu.com/portfolio, it is also linked in the bottom right corner.");console.log(`
_____ 
________________(_)
___  __   _ _  / 
__  /_/ /  __/  /  
_  .___/___//_/   
/_/                
`);const m=document.getElementById("ref"),y=document.body.getBoundingClientRect().height,r=document.createElement("div");m.append(r);r.classList.add("three-d-container");const b=document.querySelectorAll(".base"),s=b[0],g=s.getBoundingClientRect().height;r.style.perspective=`${g/200}px`;const a=window.innerHeight/6,u=window.innerHeight/2;function w(){for(;c<g+200;){let t=document.createElement("div");t.classList.add("size-fix"),t.style.height=`${a}px`;let o=s.cloneNode(!0);o.classList="",o.style.transform=`translateY(${-c-h}px)`,t.append(o),r.append(t),i.push(t),c+=a}s.style.overflow="hidden",s.style.height=0;for(let t=0;t+1<i.length;t+=1)t%2!=0?i[t].style.transformOrigin="bottom":i[t].style.transformOrigin="top";document.body.style.height=y}w();const _=1.5,f=t=>{for(let o=0;o+1<i.length;o+=2)r.style.perspectiveOrigin=`50% ${window.pageYOffset}px`,i[o].style.transform=`rotateX(${Math.min(0,Math.max(-(u-i[o+1].getBoundingClientRect().top)*.01,-_))}deg)`,i[o+1].style.transform=`rotateX(${Math.max(0,Math.min((u-i[o+1].getBoundingClientRect().top)*.01,_))}deg)`};f();window.addEventListener("scroll",t=>f());
