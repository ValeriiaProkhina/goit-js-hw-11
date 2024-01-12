import{S as d,i as u}from"./assets/vendor-9310f15c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const n=document.querySelector(".search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".span-loader"),p="https://pixabay.com/api/",m="41747369-46a857856bf510ac3748d6666";n.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="",l.classList.add("loader");const e=s.currentTarget.elements.query.value,t=new URLSearchParams({key:m,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});g(t),n.reset()});const f=s=>fetch(`${p}?${s}`).then(e=>{if(e.ok)return e.json();throw new Error("Sorry, there are no images matching your search query. Please try again!")}),h=s=>s.hits.reduce((e,t)=>e+`<li class="img-item">
      <div class="img">
  <a class="img-link" href="${t.largeImageURL}">
    <img
      class="images"
      src="${t.webformatURL}"
      data-source="${t.largeImageURL}"
      alt="${t.tags}"
      width="360"
      height="200"
  /></a></div>
<div class="description">
  <div class="category">
    <p><b>Likes</b></p>
    <p>${t.likes}</p>
  </div>
  <div>
    <p><b>Views</b></p>
    <p>${t.views}</p>
  </div>
  <div>
    <p><b>Comments</b></p>
    <p>${t.comments}</p>
  </div>
  <div>
    <p><b>Downloads</b></p>
    <p>${t.downloads}</p>
  </div>
</div>
</li>`,"");function g(s){f(s).then(e=>{if(e.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");const t=new d(".gallery a",{captionsData:"alt",captionDelay:250,close:!0});c.insertAdjacentHTML("afterbegin",h(e)),t.refresh()}).catch(e=>u.error({message:e.message,position:"topRight"})).finally(()=>{l.classList.remove("loader")})}
//# sourceMappingURL=commonHelpers.js.map
