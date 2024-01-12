import{S as c,i as l}from"./assets/vendor-9310f15c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const n=document.querySelector(".search-form"),d=document.querySelector(".gallery");document.querySelector(".loader");const u="https://pixabay.com/api",p="41747369-46a857856bf510ac3748d6666";n.addEventListener("submit",s=>{s.preventDefault();const t=s.currentTarget.elements.query.value,r=new URLSearchParams({key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});h(r),n.reset()});const f=s=>fetch(`${u}?${s}`).then(t=>{if(t.ok)return t.json();throw new Error("Sorry, there are no images matching your search query. Please try again!")}),m=s=>s.hits.reduce((t,r)=>t+`<li class="img-item">
  <a class="img-link" href="${r.largeImageURL}">
    <img
      class="images"
      src="${r.webformatURL}"
      data-source="${r.largeImageURL}"
      alt="${r.tags}"
      width="360"
      height="200"
  /></a>
<div class="description">
  <div>
    <p><b>Likes</b></p>
    <p>${r.likes}</p>
  </div>
  <div>
    <p><b>Views</b></p>
    <p>${r.views}</p>
  </div>
  <div>
    <p><b>Comments</b></p>
    <p>${r.comments}</p>
  </div>
  <div>
    <p><b>Downloads</b></p>
    <p>${r.downloads}</p>
  </div>
</div>
</li>`,"");function h(s){f(s).then(t=>{const r=new c(".gallery a",{captionsData:"alt",captionDelay:250,close:!0});d.insertAdjacentHTML("afterbegin",m(t)),r.refresh()}).catch(t=>l.error({message:t.message,position:"topRight"}))}
//# sourceMappingURL=commonHelpers.js.map
