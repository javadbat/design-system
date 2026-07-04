import{i as e}from"./preload-helper-CT_b8DTk.js";import{r as t,t as n}from"./dist-Difvyw-t.js";var r,i=e((()=>{t(),r=class extends HTMLElement{constructor(){super(),this.initWebComponent()}connectedCallback(){this.callOnLoadEvent(),this.callOnInitEvent()}callOnLoadEvent(){let e=new CustomEvent(`load`,{bubbles:!0,composed:!1});this.dispatchEvent(e)}callOnInitEvent(){let e=new CustomEvent(`init`,{bubbles:!0,composed:!1});this.dispatchEvent(e)}initWebComponent(){let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0});n();let t=document.createElement(`template`);t.innerHTML=`<style>:host{width:var(--width);height:var(--height);display:block}.jb-loading-web-component .spin .spin-loading{fill:#0000;width:100%;height:100%}.jb-loading-web-component .spin .spin-loading circle{stroke:var(--loading-color);stroke-width:.5rem;stroke-linecap:round;stroke-dasharray:1 3.125rem;transform-box:center;transform-origin:50%;animation:1s ease-in-out infinite loading}@keyframes loading{0%{stroke-dasharray:1 3.125rem;transform:rotate(0)}50%{stroke-dasharray:3.125rem 1;transform:rotate(180deg)}to{stroke-dasharray:1 3.125rem;transform:rotate(359deg)}} :host{--width:var(--jb-loading-width,100%);--height:var(--jb-loading-height,100%);--loading-color:var(--jb-loading-color,var(--jb-neutral))}</style>

  <div class="jb-loading-web-component">
    <div class="spin">
        <svg viewbox="0 0 100 100" class="spin-loading">
            <circle cx="50" cy="50" r="40"></circle>
        </svg>
    </div>
  </div>
  `,e.appendChild(t.content.cloneNode(!0))}},customElements.get(`jb-loading`)||window.customElements.define(`jb-loading`,r)})),a=e((()=>{i()}));export{a as t};