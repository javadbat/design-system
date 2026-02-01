import{N as e}from"./index-bfIR6bpK.js";var o=class extends HTMLElement{constructor(){super(),this.initWebComponent()}connectedCallback(){this.callOnLoadEvent(),this.callOnInitEvent()}callOnLoadEvent(){const n=new CustomEvent("load",{bubbles:!0,composed:!0});this.dispatchEvent(n)}callOnInitEvent(){const n=new CustomEvent("init",{bubbles:!0,composed:!0});this.dispatchEvent(n)}initWebComponent(){const n=this.attachShadow({mode:"open"});e();const t=document.createElement("template");t.innerHTML=`<style>:host{width:var(--jb-loading-width,100%);height:var(--jb-loading-height,100%);display:block}.jb-loading-web-component .spin .spin-loading{fill:#0000;width:100%;height:100%}.jb-loading-web-component .spin .spin-loading circle{stroke:var(--loading-color);stroke-width:8px;stroke-linecap:round;stroke-dasharray:1 50;transform-box:center;transform-origin:50%;animation:1s ease-in-out infinite loading}@keyframes loading{0%{stroke-dasharray:1 50;transform:rotate(0)}50%{stroke-dasharray:50 1;transform:rotate(180deg)}to{stroke-dasharray:1 50;transform:rotate(359deg)}} :host{--loading-color:var(--jb-loading-color,var(--jb-neutral))}</style>

  <div class="jb-loading-web-component">
    <div class="spin">
        <svg viewbox="0 0 100 100" class="spin-loading">
            <circle cx="50" cy="50" r="40"></circle>
        </svg>
    </div>
  </div>
  `,n.appendChild(t.content.cloneNode(!0))}};customElements.get("jb-loading")||window.customElements.define("jb-loading",o);
