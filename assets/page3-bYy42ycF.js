import{S as r,N as s,K as l,P as i,A as a}from"./vendor-C3Q1bVlX.js";new r(".my-swiper",{modules:[s,l,i],keyboard:{enabled:!0},speed:600,pagination:{el:".my-swiper-pagination",clickable:!0},navigation:{nextEl:".my-swiper-button-next",prevEl:".my-swiper-button-prev"},spaceBetween:32,breakpoints:{320:{slidesPerView:1},1280:{slidesPerView:2,centerInsufficientSlides:!0}}});document.querySelector(".scroll-btn").addEventListener("click",()=>window.scrollBy({left:0,top:window.innerHeight,behavior:"smooth"}));const c=document.querySelector("#scroll-onY");window.addEventListener("scroll",()=>{c.innerHTML=window.scrollY});const e=document.querySelector("header");let t=window.scrollY;window.addEventListener("scroll",()=>{window.scrollY>t?(e.style.transform="translateY(-100%)",e.classList.remove("scroll")):(e.style.transform="translateY(0)",e.classList.add("scroll")),window.scrollY===0&&(e.style.transform="translateY(0)",e.classList.remove("scroll")),t=window.scrollY});const d=document.documentElement,o=document.querySelector("#theme-mod");o.addEventListener("change",()=>{const n=o.checked?"dark":"light";d.setAttribute("data-theme",n)});new a(".accordion-container",{openOnInit:[0],duration:400,showMultiple:!1,collapse:!0});
//# sourceMappingURL=page3-bYy42ycF.js.map