import"./modulepreload-polyfill-3cfb730f.js";let s=0,m=0,n=[];console.log(`
greetings
* ** * * 
 *    *  
    *   *
         
        *
    *    
         
  **  *  
         
*      * 
         
 *   *   
`);addEventListener("DOMContentLoaded",p=>{const c=document.getElementById("ref");document.body.getBoundingClientRect().height;const i=document.createElement("div");c.append(i),i.classList.add("three-d-container");const o=document.querySelectorAll(".base")[0],l=o.getBoundingClientRect().height;i.style.perspective=`${l/200}px`;const r=window.innerHeight/4,a=window.innerHeight/2;function g(){for(;s<l;){let e=document.createElement("div");e.classList.add("size-fix"),e.style.height=`${r}px`;let t=o.cloneNode(!0);t.classList="",t.style.transform=`translateY(${-s-m}px)`,e.append(t),i.append(e),n.push(e),s+=r}o.style.overflow="hidden",o.style.height=0,o.style.display="none";for(let e=0;e+1<n.length;e+=1)e%2!=0?n[e].style.transformOrigin="bottom":n[e].style.transformOrigin="top"}g();const d=1.5,h=e=>{for(let t=0;t+1<n.length;t+=2)i.style.perspectiveOrigin=`50% ${window.pageYOffset}px`,n[t].style.transform=`rotateX(${Math.min(0,Math.max(-(a-n[t+1].getBoundingClientRect().top)*.01,-d))}deg)`,n[t+1].style.transform=`rotateX(${Math.max(0,Math.min((a-n[t+1].getBoundingClientRect().top)*.01,d))}deg)`};window.addEventListener("scroll",e=>h())});
