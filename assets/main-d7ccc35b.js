import"./modulepreload-polyfill-3cfb730f.js";let s=0,g=0,n=[];console.log(`
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
`);const h=document.getElementById("ref"),m=document.body.getBoundingClientRect().height,o=document.createElement("div");h.append(o);o.classList.add("three-d-container");const p=document.querySelectorAll(".base"),i=p[0],_=i.getBoundingClientRect().height;o.style.perspective=`${_/200}px`;const l=window.innerHeight/6,r=window.innerHeight/2;function a(){for(;s<_+200;){let e=document.createElement("div");e.classList.add("size-fix"),e.style.height=`${l}px`;let t=i.cloneNode(!0);t.classList="",t.style.transform=`translateY(${-s-g}px)`,e.append(t),o.append(e),n.push(e),s+=l}i.style.overflow="hidden",i.style.height=0;for(let e=0;e+1<n.length;e+=1)e%2!=0?n[e].style.transformOrigin="bottom":n[e].style.transformOrigin="top";document.body.style.height=m}a();const c=1.5,d=e=>{for(let t=0;t+1<n.length;t+=2)o.style.perspectiveOrigin=`50% ${window.pageYOffset}px`,n[t].style.transform=`rotateX(${Math.min(0,Math.max(-(r-n[t+1].getBoundingClientRect().top)*.01,-c))}deg)`,n[t+1].style.transform=`rotateX(${Math.max(0,Math.min((r-n[t+1].getBoundingClientRect().top)*.01,c))}deg)`};setTimeout(()=>{a(),d(),console.log("timeout run")},"3000");window.addEventListener("scroll",e=>d());
