var l=Object.defineProperty;var u=(s,e,n)=>e in s?l(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var c=(s,e,n)=>(u(s,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();class d extends HTMLButtonElement{constructor(){super()}connectedCallback(){this.setup()}setup(){this.addEventListener("click",()=>console.log("Clicked!"))}}customElements.define("custom-btn",d,{extends:"button"});class m extends HTMLElement{constructor(){super();c(this,"shadowRoot");this.shadowRoot=this.attachShadow({mode:"closed"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
            <div>
                <h1>Sono un titolo</h1>
                <h2>Sono un sottotitolo</h2>
                <button>Sono un pulsante</button>
            </div>
            <style>
                button {
                    background-color: crimson;
                    color: white;
                }
            </style>
            `}}customElements.define("custom-div",m);class a extends HTMLElement{constructor(){super();c(this,"shadowRoot");c(this,"template",document.createElement("template"));this.shadowRoot=this.attachShadow({mode:"closed"}),this.template.id="custom-comp",this.template.innerHTML=`
            <div>
                <h1><slot name="custom-comp-title">Sono un titolo</slot></h1>
                <h2><slot name="custom-comp-subtitle">Sono un sottotitolo</slot></h2>
                <button><slot name="custom-comp-btn">Sono un pulsante</slot></button>
            </div>
            `,this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}connectedCallback(){this.render()}render(){this.innerHTML=`
            <span slot="custom-comp-title">Titolo custom</span>
            <span slot="custom-comp-subtitle">Sottotitolo custom</span>
            <span slot="custom-comp-btn">Pulsante custom</span>
            `}}customElements.define("custom-comp",a);
