(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const a="https://ijorge-gonzalezi.github.io/Camila/assets/montse_edit_mobile.789e438f.png",c="https://ijorge-gonzalezi.github.io/Camila/assets/montse_edit_desk.893d951c.png";class u extends HTMLElement{constructor(){super(),this.main=document.getElementById("main"),this.body=document.querySelector("body"),document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{this.body.removeChild(this),this.main.classList.add("active")},1500)})}}customElements.define("loader-spinner",u);class m extends HTMLElement{constructor(){super(),this.startDate=this.dataset.startDate,this.startTime=this.dataset.startTime,this.endDate=this.dataset.endDate,this.endTime=this.dataset.endTime,this.second=1e3,this.minute=this.second*60,this.hour=this.minute*60,this.day=this.hour*24,this.init()}init(){setInterval(()=>{const t=this.formatDateUS(this.startDate,this.startTime),o=this.formatDateUS(this.endDate,this.endTime),s=Date.now(),e=t.time-s,i=o.time-s,n=this.getRestDate(i);e<0&&i>0?this.renderCountdown(n):e>0&&i>0&&(this.style.display="none")},1e3)}formatDateUS(t,o){const s=t.split("/"),e=o.split(":");return{formatDate:`${s[1]}/${s[0]}/${s[2]} ${e[0]}:${e[1]}:${e[2]}`,time:new Date(`${s[1]}/${s[0]}/${s[2]} ${e[0]}:${e[1]}:${e[2]}`).getTime(),second:e[2],minutes:e[1],hour:e[0],day:s[0],month:s[1],year:s[2]}}getRestDate(t){return{day:Math.floor(t/this.day),hour:Math.floor(t%this.day/this.hour),minutes:Math.floor(t%this.hour/this.minute),seconds:Math.floor(t%this.minute/this.second)}}renderCountdown(t){this.querySelector(".days .value").innerHTML=t.day<10?"0"+t.day:t.day,document.querySelector(".hours .value").innerHTML=t.hour<10?"0"+t.hour:t.hour,document.querySelector(".minutes .value").innerHTML=t.minutes<10?"0"+t.minutes:t.minutes,document.querySelector(".seconds .value").innerHTML=t.seconds<10?"0"+t.seconds:t.seconds}}customElements.define("counter-clock",m);class d extends HTMLElement{constructor(){super(),this.srcDesk=c,this.srcMobile=a,this.img=this.querySelector("img"),this.setSource()}setSource(){window.screen.width>768?this.img.src=this.srcDesk:this.img.src=this.srcMobile}}customElements.define("dynamic-src-image",d);
