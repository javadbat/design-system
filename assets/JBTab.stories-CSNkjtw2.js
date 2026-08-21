import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-DqjxMHfY.js";import{n as a,r as o}from"./dist-COPX3L6A.js";import{i as s,m as c,o as l,t as u,u as d}from"./jb-core-DsmvCuBc.js";import{r as f,t as p}from"./react-CEnyJRlu.js";var m,h=t((()=>{u(),m=class extends d{static get observedAttributes(){return[`value`]}#e=``;#t=!1;#n;constructor(){super(),typeof this.attachInternals==`function`?(this.#n=this.attachInternals(),this.#n.role=`tabpanel`):this.setAttribute(`role`,`tabpanel`);let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{display:none}:host([selected]){display:block}</style><slot></slot>`,e.appendChild(t.content.cloneNode(!0))}connectedCallback(){this.#e=this.getAttribute(`value`)??``,this.#i()}attributeChangedCallback(e,t,n){t!==n&&this.#r(e,n)}get value(){return this.#e}set value(e){let t=String(e??``);this.#e=t,this.getAttribute(`value`)!==t&&this.setAttribute(`value`,t)}get selected(){return this.#t}set selected(e){let t=!!e;this.#t!==t&&(this.#t=t,this.toggleAttribute(`selected`,t),t?this.#n?.states.add(`selected`):this.#n?.states.delete(`selected`),this.#i())}setAriaLabelledBy(e){e?this.setAttribute(`aria-labelledby`,e):this.removeAttribute(`aria-labelledby`)}#r(e,t){e===`value`&&(this.#e=t??``)}#i(){let e=!this.#t;this.setAttribute(`aria-hidden`,String(e)),this.#n&&(this.#n.ariaHidden=String(e))}},l(`jb-tab-content`,m)})),g=t((()=>{h(),h()})),_,v,y=t((()=>{u(),a(),_=[`xs`,`sm`,`md`,`lg`,`xl`],v=class extends d{static get observedAttributes(){return[`orientation`,`size`]}#e=null;#t;#n=0;#r;constructor(){super(),typeof this.attachInternals==`function`?(this.#r=this.attachInternals(),this.#r.role=`tablist`):this.setAttribute(`role`,`tablist`);let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0});o();let t=document.createElement(`template`);t.innerHTML=`<style>:host{--size-padding:var(--jb-tab-list-padding-md,.25rem);--size-trigger-height:var(--jb-tab-trigger-height-md,var(--jb-control-height-md,2.5rem));--size-trigger-block-padding:var(--jb-tab-trigger-block-padding-md,.5rem);--size-trigger-inline-padding:var(--jb-tab-trigger-inline-padding-md,1rem);--size-trigger-border-radius:var(--jb-tab-trigger-border-radius-md,var(--jb-radius));--size-trigger-font-size:var(--jb-tab-trigger-font-size-md,1rem);--background:var(--jb-tab-list-background,var(--jb-surface-secondary));--padding:var(--jb-tab-list-padding,var(--size-padding));--gap:var(--jb-tab-list-gap,0);--tab-trigger-height:var(--jb-tab-trigger-height,var(--size-trigger-height));--tab-trigger-block-padding:var(--jb-tab-trigger-block-padding,var(--size-trigger-block-padding));--tab-trigger-inline-padding:var(--jb-tab-trigger-inline-padding,var(--size-trigger-inline-padding));--tab-trigger-font-size:var(--jb-tab-trigger-font-size,var(--size-trigger-font-size));--tab-trigger-border-radius:var(--jb-tab-trigger-border-radius,var(--size-trigger-border-radius));--background-border-radius:calc(var(--tab-trigger-border-radius) + var(--padding));--indicator-color:var(--jb-tab-list-indicator-color,var(--jb-surface-primary));--indicator-radius:var(--tab-trigger-border-radius);--indicator-duration:var(--jb-tab-list-indicator-duration,.24s);--indicator-easing:var(--jb-tab-list-indicator-easing,cubic-bezier(.2, .8, .2, 1));--indicator-shadow:var(--jb-tab-list-indicator-shadow,0 1px 3px #0000001f)}:host([size=xs]){--size-padding:var(--jb-tab-list-padding-xs,.125rem);--size-trigger-height:var(--jb-tab-trigger-height-xs,var(--jb-control-height-xs,1.5rem));--size-trigger-block-padding:var(--jb-tab-trigger-block-padding-xs,.125rem);--size-trigger-inline-padding:var(--jb-tab-trigger-inline-padding-xs,.25rem);--size-trigger-border-radius:var(--jb-tab-trigger-border-radius-xs,var(--jb-radius-xs));--size-trigger-font-size:var(--jb-tab-trigger-font-size-xs,.75rem)}:host([size=sm]){--size-padding:var(--jb-tab-list-padding-sm,.1875rem);--size-trigger-height:var(--jb-tab-trigger-height-sm,var(--jb-control-height-sm,2rem));--size-trigger-block-padding:var(--jb-tab-trigger-block-padding-sm,.25rem);--size-trigger-inline-padding:var(--jb-tab-trigger-inline-padding-sm,.5rem);--size-trigger-border-radius:var(--jb-tab-trigger-border-radius-sm,var(--jb-radius-sm));--size-trigger-font-size:var(--jb-tab-trigger-font-size-sm,.875rem)}:host([size=lg]){--size-padding:var(--jb-tab-list-padding-lg,.375rem);--size-trigger-height:var(--jb-tab-trigger-height-lg,var(--jb-control-height-lg,3rem));--size-trigger-block-padding:var(--jb-tab-trigger-block-padding-lg,.75rem);--size-trigger-inline-padding:var(--jb-tab-trigger-inline-padding-lg,1.5rem);--size-trigger-border-radius:var(--jb-tab-trigger-border-radius-lg,var(--jb-radius-lg));--size-trigger-font-size:var(--jb-tab-trigger-font-size-lg,1.125rem)}:host([size=xl]){--size-padding:var(--jb-tab-list-padding-xl,.5rem);--size-trigger-height:var(--jb-tab-trigger-height-xl,var(--jb-control-height-xl,4rem));--size-trigger-block-padding:var(--jb-tab-trigger-block-padding-xl,1rem);--size-trigger-inline-padding:var(--jb-tab-trigger-inline-padding-xl,2rem);--size-trigger-border-radius:var(--jb-tab-trigger-border-radius-xl,var(--jb-radius-xl));--size-trigger-font-size:var(--jb-tab-trigger-font-size-xl,1.25rem)}
:host{display:block}.tab-list{isolation:isolate;box-sizing:border-box;gap:var(--gap);padding:var(--padding);border-radius:var(--background-border-radius);background:var(--background);display:flex;position:relative}:host([orientation=vertical]) .tab-list{flex-direction:column}.selection-indicator{z-index:0;box-sizing:border-box;border-radius:var(--indicator-radius);background-color:var(--indicator-color-from-trigger,var(--indicator-color));width:0;height:0;box-shadow:var(--indicator-shadow);opacity:0;pointer-events:none;transition:transform var(--indicator-duration) var(--indicator-easing), width var(--indicator-duration) var(--indicator-easing), height var(--indicator-duration) var(--indicator-easing), border-radius var(--indicator-duration) var(--indicator-easing), background-color var(--indicator-duration) var(--indicator-easing), opacity .12s ease;position:absolute;inset:0 auto auto 0;transform:translate(0,0)}.selection-indicator[data-visible=true]{opacity:1}@media (prefers-reduced-motion:reduce){.selection-indicator{transition-duration:.01ms}}</style>
    <div class="tab-list" part="list">
      <span class="selection-indicator" part="indicator" aria-hidden="true"></span>
      <slot></slot>
    </div>
  `,e.appendChild(t.content.cloneNode(!0)),this.elements={list:e.querySelector(`.tab-list`),indicator:e.querySelector(`.selection-indicator`),slot:e.querySelector(`slot`)},this.#i()}connectedCallback(){this.#u(),this.#l(),this.refreshIndicator()}disconnectedCallback(){this.#t?.disconnect(),this.#n&&cancelAnimationFrame(this.#n)}attributeChangedCallback(e,t,n){t!==n&&this.#a(e)}get orientation(){return this.getAttribute(`orientation`)===`vertical`?`vertical`:`horizontal`}set orientation(e){let t=e===`vertical`?`vertical`:`horizontal`;this.getAttribute(`orientation`)!==t&&this.setAttribute(`orientation`,t)}get size(){let e=this.getAttribute(`size`);return e&&_.includes(e)?e:`md`}set size(e){e===null?this.removeAttribute(`size`):this.setAttribute(`size`,e)}get selectedTrigger(){return this.#e}get triggers(){return Array.from(this.children).filter((e=>e.localName===`jb-tab-trigger`))}setActiveTrigger(e){this.#e=e&&e.parentElement===this?e:null,this.#l(),this.refreshIndicator()}refreshIndicator(){this.isConnected&&(this.#n&&cancelAnimationFrame(this.#n),this.#n=requestAnimationFrame((()=>{this.#n=0,this.#d()})))}#i(){this.addEventListener(`keydown`,this.#o),this.elements.slot.addEventListener(`slotchange`,this.#s),this.elements.list.addEventListener(`scroll`,this.#c,{passive:!0})}#a(e){e===`orientation`&&this.#u(),this.refreshIndicator()}#o=e=>{let t=e.composedPath().find((e=>e instanceof HTMLElement&&e.localName===`jb-tab-trigger`&&e.parentElement===this));if(!t)return;let n=this.triggers.filter((e=>!e.disabled));if(n.length===0)return;let r=n.indexOf(t);if(r<0)return;let i=this.orientation===`vertical`?`ArrowUp`:`ArrowLeft`,a=this.orientation===`vertical`?`ArrowDown`:`ArrowRight`,o;e.key===i?o=n[(r-1+n.length)%n.length]:e.key===a?o=n[(r+1)%n.length]:e.key===`Home`?o=n[0]:e.key===`End`&&(o=n[n.length-1]),o&&(e.preventDefault(),o.focus(),o.select())};#s=()=>{this.#l(),this.refreshIndicator()};#c=()=>{this.refreshIndicator()};#l(){if(this.#t?.disconnect(),typeof ResizeObserver<`u`){this.#t=new ResizeObserver((()=>this.refreshIndicator())),this.#t.observe(this.elements.list);for(let e of this.triggers)this.#t.observe(e)}}#u(){let e=this.orientation;this.setAttribute(`aria-orientation`,e),this.#r&&(this.#r.ariaOrientation=e)}#d(){let e=this.#e;if(!e?.isConnected||e.parentElement!==this)return void(this.elements.indicator.dataset.visible=`false`);let t=this.elements.list.getBoundingClientRect(),n=e.getBoundingClientRect(),r=n.left-t.left+this.elements.list.scrollLeft,i=n.top-t.top+this.elements.list.scrollTop,a=this.#f(e);this.elements.indicator.style.width=`${n.width}px`,this.elements.indicator.style.height=`${n.height}px`,this.elements.indicator.style.transform=`translate3d(${r}px, ${i}px, 0)`,a?this.elements.indicator.style.setProperty(`--indicator-color-from-trigger`,a):this.elements.indicator.style.removeProperty(`--indicator-color-from-trigger`),this.elements.indicator.dataset.visible=`true`}#f(e){let t=getComputedStyle(e);return t.getPropertyValue(`--jb-tab-trigger-indicator-color`).trim()||t.getPropertyValue(`--indicator-color-from-attribute`).trim()}},l(`jb-tab-list`,v)})),b=t((()=>{y(),y()})),x,S,C=t((()=>{u(),a(),x=[`primary`,`primary-subtle`,`secondary`,`secondary-subtle`,`positive`,`positive-subtle`,`danger`,`danger-subtle`,`warning`,`warning-subtle`,`light`,`dark`],S=class extends d{static get observedAttributes(){return[`value`,`disabled`,`color`]}#e=``;#t=!1;#n=document.createElement(`canvas`);#r;constructor(){super(),typeof this.attachInternals==`function`?(this.#r=this.attachInternals(),this.#r.role=`tab`):this.setAttribute(`role`,`tab`);let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0});o();let t=document.createElement(`template`);t.innerHTML=`<style>:host{--background:var(--jb-tab-trigger-background,transparent);--background-hover:var(--jb-tab-trigger-background-hover,transparent);--color:var(--jb-tab-trigger-color,var(--jb-content-secondary));--color-hover:var(--jb-tab-trigger-color-hover,var(--jb-content-primary));--color-selected:var(--jb-tab-trigger-color-selected,var(--selected-color-from-indicator,var(--jb-content-primary)));--height:var(--jb-tab-trigger-height,var(--tab-trigger-height,var(--jb-control-height-md,2.5rem)));--block-padding:var(--jb-tab-trigger-block-padding,var(--tab-trigger-block-padding,var(--jb-tab-trigger-block-padding-md,.5rem)));--inline-padding:var(--jb-tab-trigger-inline-padding,var(--tab-trigger-inline-padding,var(--jb-tab-trigger-inline-padding-md,1rem)));--padding:var(--jb-tab-trigger-padding,var(--block-padding) var(--inline-padding));--size-border-radius:var(--tab-trigger-border-radius,var(--jb-tab-trigger-border-radius-md,var(--jb-radius)));--border-radius:var(--jb-tab-trigger-border-radius,var(--size-border-radius));--font-size:var(--jb-tab-trigger-font-size,var(--tab-trigger-font-size,var(--jb-tab-trigger-font-size-md,1rem)));--font-weight:var(--jb-tab-trigger-font-weight,500);--font-weight-selected:var(--jb-tab-trigger-font-weight-selected,600);--focus-ring-color:var(--jb-tab-trigger-focus-ring-color,Highlight)}:host([color=primary]){--indicator-color-from-attribute:var(--jb-tab-trigger-primary,var(--jb-primary))}:host([color=primary-subtle]){--indicator-color-from-attribute:var(--jb-tab-trigger-primary-subtle,var(--jb-primary-subtle))}:host([color=secondary]){--indicator-color-from-attribute:var(--jb-tab-trigger-secondary,var(--jb-secondary))}:host([color=secondary-subtle]){--indicator-color-from-attribute:var(--jb-tab-trigger-secondary-subtle,var(--jb-secondary-subtle))}:host([color=positive]){--indicator-color-from-attribute:var(--jb-tab-trigger-positive,var(--jb-green))}:host([color=positive-subtle]){--indicator-color-from-attribute:var(--jb-tab-trigger-positive-subtle,var(--jb-green-subtle))}:host([color=danger]){--indicator-color-from-attribute:var(--jb-tab-trigger-danger,var(--jb-red))}:host([color=danger-subtle]){--indicator-color-from-attribute:var(--jb-tab-trigger-danger-subtle,var(--jb-red-subtle))}:host([color=warning]){--indicator-color-from-attribute:var(--jb-tab-trigger-warning,var(--jb-yellow))}:host([color=warning-subtle]){--indicator-color-from-attribute:var(--jb-tab-trigger-warning-subtle,var(--jb-yellow-subtle))}:host([color=light]){--indicator-color-from-attribute:var(--jb-tab-trigger-light,var(--jb-surface-primary))}:host([color=dark]){--indicator-color-from-attribute:var(--jb-tab-trigger-dark,var(--jb-neutral))}:host([color=primary]),:host([color=secondary]),:host([color=positive]),:host([color=danger]),:host([color=warning]),:host([color=dark]){--selected-color-from-indicator:var(--jb-content-inverse)}:host([color=primary-subtle]),:host([color=secondary-subtle]),:host([color=positive-subtle]),:host([color=danger-subtle]),:host([color=warning-subtle]),:host([color=light]){--selected-color-from-indicator:var(--jb-content-primary)}
:host{z-index:1;box-sizing:border-box;height:var(--height);padding:var(--padding);border-radius:var(--border-radius);background:var(--background);color:var(--color);cursor:pointer;font-size:var(--font-size);font-weight:var(--font-weight);user-select:none;outline:none;justify-content:center;align-items:center;transition:background-color .2s;display:inline-flex;position:relative}:host(:hover:not([disabled])){background:var(--background-hover);color:var(--color-hover)}:host([selected]){color:var(--color-selected);font-weight:var(--font-weight-selected)}:host(:focus-visible){outline:2px solid var(--focus-ring-color);outline-offset:2px}:host([disabled]){cursor:not-allowed;opacity:var(--jb-tab-trigger-disabled-opacity,.5)}.trigger-content{display:contents}</style>
    <span class="trigger-content" part="content">
      <slot></slot>
    </span>
  `,e.appendChild(t.content.cloneNode(!0)),this.#i()}connectedCallback(){this.#e=this.getAttribute(`value`)??``,this.#o(this.getAttribute(`color`)),this.#d()}attributeChangedCallback(e,t,n){t!==n&&this.#a(e,n)}get value(){return this.#e}set value(e){let t=String(e??``);this.#e=t,this.getAttribute(`value`)!==t&&this.setAttribute(`value`,t)}get disabled(){return this.hasAttribute(`disabled`)}set disabled(e){this.toggleAttribute(`disabled`,!!e)}get color(){return this.getAttribute(`color`)}set color(e){e===null?this.removeAttribute(`color`):this.setAttribute(`color`,e)}get selected(){return this.#t}set selected(e){let t=!!e;this.#t!==t&&(t&&this.#s(),this.#t=t,this.toggleAttribute(`selected`,t),t?this.#r?.states.add(`selected`):this.#r?.states.delete(`selected`),this.#d())}setAriaControls(e){let t=e.map((e=>e.id)).filter(Boolean);t.length>0?this.setAttribute(`aria-controls`,t.join(` `)):this.removeAttribute(`aria-controls`)}select(){if(this.disabled)return;let e=new CustomEvent(`select`,{detail:{value:this.value,trigger:this},bubbles:!0,composed:!0});this.dispatchEvent(e)}#i(){this.addEventListener(`click`,this.#l),this.addEventListener(`keydown`,this.#u)}#a(e,t){e===`value`&&(this.#e=t??``),e===`color`&&(this.#o(t),this.#c()),this.#d()}#o(e){let t=e!==null&&x.includes(e),n=e!==null&&globalThis.CSS!==void 0&&globalThis.CSS.supports(`color`,e);!t&&n?this.style.setProperty(`--indicator-color-from-attribute`,e):this.style.removeProperty(`--indicator-color-from-attribute`),this.#s()}#s(){let e=getComputedStyle(this),t=e.getPropertyValue(`--jb-tab-trigger-indicator-color`).trim(),n=this.color,r=n!==null&&x.includes(n);if(!t&&r)return void this.style.removeProperty(`--selected-color-from-indicator`);let i=t||e.getPropertyValue(`--indicator-color-from-attribute`).trim();if(!i)return void this.style.removeProperty(`--selected-color-from-indicator`);let a=this.#n.getContext(`2d`,{willReadFrequently:!0});if(!a)return;a.clearRect(0,0,1,1),a.fillStyle=`white`,a.fillRect(0,0,1,1),a.fillStyle=i,a.fillRect(0,0,1,1);let[o,s,c]=a.getImageData(0,0,1,1).data,l=e=>{let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4},u=.2126*l(o)+.7152*l(s)+.0722*l(c)>.179?`var(--jb-content-primary)`:`var(--jb-content-inverse)`;this.style.setProperty(`--selected-color-from-indicator`,u)}#c(){let e=this.parentElement;e?.localName===`jb-tab-list`&&e.refreshIndicator?.()}#l=()=>{this.select()};#u=e=>{e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),this.select())};#d(){let e=String(this.#t),t=String(this.disabled);this.setAttribute(`aria-selected`,e),this.setAttribute(`aria-disabled`,t),this.#r&&(this.#r.ariaSelected=e,this.#r.ariaDisabled=t),this.tabIndex=!this.disabled&&this.#t?0:-1}},l(`jb-tab-trigger`,S)})),w=t((()=>{C(),C()})),T,E=t((()=>{u(),g(),b(),w(),T=class extends d{static get observedAttributes(){return[`value`,`default-value`,`nullable`]}#e=null;#t=null;#n=!1;#r=!1;#i;constructor(){super();let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{display:contents}</style><slot></slot>`,e.appendChild(t.content.cloneNode(!0)),this.#a()}connectedCallback(){this.#n||this.#o(),this.#u(),this.#d()}disconnectedCallback(){this.#i?.disconnect()}attributeChangedCallback(e,t,n){t!==n&&this.#s(e,n)}get value(){return this.#e}set value(e){this.#l(e==null?null:String(e),!0)}get defaultValue(){return this.#t}set defaultValue(e){let t=e==null?null:String(e);this.#t=t,t===null?this.removeAttribute(`default-value`):this.getAttribute(`default-value`)!==t&&this.setAttribute(`default-value`,t)}get nullable(){return s(this.getAttribute(`nullable`))}set nullable(e){this.toggleAttribute(`nullable`,!!e)}refresh(){this.#f()}#a(){this.addEventListener(`select`,this.#c)}#o(){this.#t=this.getAttribute(`default-value`),this.#e=this.hasAttribute(`value`)?this.getAttribute(`value`):this.#t,this.#n=!0}#s(e,t){e===`value`&&(this.#e=t),e===`default-value`&&(this.#t=t,this.#n||this.hasAttribute(`value`)||(this.#e=t)),this.#d()}#c=e=>{let t=e.detail?.trigger;if(!t||t.closest(`jb-tab`)!==this)return;let n=t.parentElement;if(n?.localName!==`jb-tab-list`||n.closest(`jb-tab`)!==this||t.disabled)return;let r=this.#e;if(this.#l(t.value,!0),r===t.value)return;let i=new CustomEvent(`change`,{detail:{value:t.value,previousValue:r,trigger:t},bubbles:!0,composed:!0});this.dispatchEvent(i)};#l(e,t){this.#e=e,t&&(e===null?this.hasAttribute(`value`)&&this.removeAttribute(`value`):this.getAttribute(`value`)!==e&&this.setAttribute(`value`,e)),this.#d()}#u(){this.#i?.disconnect(),typeof MutationObserver<`u`&&(this.#i=new MutationObserver((e=>{e.every((e=>e.target===this))||this.#d()})),this.#i.observe(this,{subtree:!0,childList:!0,attributes:!0,attributeFilter:[`value`,`disabled`]}))}#d(){this.isConnected&&!this.#r&&(this.#r=!0,queueMicrotask((()=>{this.#r=!1,this.isConnected&&this.#f()})))}#f(){let e=this.#p(`jb-tab-list`),t=e.flatMap((e=>e.triggers)),n=this.#p(`jb-tab-content`);if(this.#e===null&&!this.nullable){let e=t.find((e=>!e.disabled));e&&this.#l(e.value,!0)}for(let e of n)e.id||=c(`jb-tab-content`);for(let e of t){e.id||=c(`jb-tab-trigger`);let t=n.filter((t=>t.value===e.value));e.setAriaControls(t),e.selected=this.#e!==null&&e.value===this.#e}let r=t.find((e=>e.selected&&!e.disabled))??t.find((e=>!e.disabled))??null;for(let e of t)e.tabIndex=e===r?0:-1;for(let e of n){let n=t.find((t=>t.value===e.value))??null;e.setAriaLabelledBy(n?.id??null),e.selected=this.#e!==null&&e.value===this.#e}for(let t of e){let e=t.triggers.find((e=>e.selected))??null;t.setActiveTrigger(e)}}#p(e){return Array.from(this.querySelectorAll(e)).filter((e=>e.closest(`jb-tab`)===this))}},l(`jb-tab`,T)})),ee=t((()=>{E(),E()})),D,O,te=t((()=>{D=n(r(),1),p(),ee(),O=D.forwardRef(((e,t)=>{let n=(0,D.useRef)(null);(0,D.useImperativeHandle)(t,(()=>n.current),[]);let{value:r,defaultValue:i,nullable:a,onChange:o,children:s,...c}=e;return(0,D.useEffect)((()=>{n.current&&i!==void 0&&(n.current.defaultValue=i)}),[i]),(0,D.useEffect)((()=>{n.current&&a!==void 0&&(n.current.nullable=a)}),[a]),(0,D.useEffect)((()=>{n.current&&r!==void 0&&(n.current.value=r)}),[r]),f(n,`change`,o),D.createElement(`jb-tab`,{ref:n,value:r??void 0,"default-value":i??void 0,nullable:a||void 0,...c},s)})),O.displayName=`JBTab`})),ne=t((()=>{te()})),k,A,re=t((()=>{k=n(r(),1),g(),A=k.forwardRef(((e,t)=>{let n=(0,k.useRef)(null);(0,k.useImperativeHandle)(t,(()=>n.current),[]);let{value:r,children:i,...a}=e;return(0,k.useEffect)((()=>{n.current&&(n.current.value=r)}),[r]),k.createElement(`jb-tab-content`,{ref:n,value:r,...a},i)})),A.displayName=`JBTabContent`})),ie=t((()=>{re()})),j,M,N=t((()=>{j=n(r(),1),b(),M=j.forwardRef(((e,t)=>{let n=(0,j.useRef)(null);(0,j.useImperativeHandle)(t,(()=>n.current),[]);let{orientation:r,size:i,children:a,...o}=e;return(0,j.useEffect)((()=>{n.current&&r!==void 0&&(n.current.orientation=r)}),[r]),(0,j.useEffect)((()=>{n.current&&(n.current.size=i??null)}),[i]),j.createElement(`jb-tab-list`,{ref:n,orientation:r,size:i,...o},a)})),M.displayName=`JBTabList`})),ae=t((()=>{N()})),P,F,oe=t((()=>{P=n(r(),1),p(),w(),F=P.forwardRef(((e,t)=>{let n=(0,P.useRef)(null);(0,P.useImperativeHandle)(t,(()=>n.current),[]);let{value:r,disabled:i,color:a,onSelect:o,children:s,...c}=e;return(0,P.useEffect)((()=>{n.current&&(n.current.value=r)}),[r]),(0,P.useEffect)((()=>{n.current&&i!==void 0&&(n.current.disabled=i)}),[i]),(0,P.useEffect)((()=>{n.current&&(n.current.color=a??null)}),[a]),f(n,`select`,o),P.createElement(`jb-tab-trigger`,{ref:n,value:r,disabled:i||void 0,color:a,...c},s)})),F.displayName=`JBTabTrigger`})),se=t((()=>{oe()})),ce=t((()=>{})),le=e({Basic:()=>W,ColoredIndicators:()=>G,ControlledReact:()=>Z,DisabledAndKeyboard:()=>X,DuplicatePanels:()=>Y,NestedLayout:()=>q,Nullable:()=>J,SizeVariants:()=>K,__namedExportsOrder:()=>Q,default:()=>U});function ue({nullable:e=!1}){return(0,L.jsxs)(O,{nullable:e,children:[(0,L.jsxs)(M,{"aria-label":`Account sections`,children:[(0,L.jsx)(F,{value:`home`,children:`Home`}),(0,L.jsx)(F,{value:`about`,children:`About`}),(0,L.jsx)(F,{value:`user`,children:`User`})]}),(0,L.jsx)(A,{value:`home`,children:`Home content`}),(0,L.jsx)(A,{value:`about`,children:`About content`}),(0,L.jsx)(A,{value:`user`,children:`User content`})]})}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{I=n(r(),1),ne(),ie(),ae(),se(),ce(),L=i(),{expect:R,fn:z,userEvent:B,waitFor:V,within:H}=__STORYBOOK_MODULE_TEST__,U={title:`Components/JBTab`,component:O,args:{onChange:z()}},W={render:e=>(0,L.jsxs)(O,{onChange:e.onChange,children:[(0,L.jsxs)(M,{"aria-label":`Account sections`,children:[(0,L.jsx)(F,{value:`home`,children:`Home`}),(0,L.jsx)(F,{value:`about`,children:`About`}),(0,L.jsx)(F,{value:`user`,children:`User`})]}),(0,L.jsx)(A,{value:`home`,children:`Home content`}),(0,L.jsx)(A,{value:`about`,children:`About content`}),(0,L.jsx)(A,{value:`user`,children:`User content`})]}),play:async({canvasElement:e,args:t})=>{let n=e.querySelector(`jb-tab`),r=Array.from(n.querySelectorAll(`jb-tab-trigger`)),i=Array.from(n.querySelectorAll(`jb-tab-content`));await V(()=>R(n.value).toBe(`home`)),R(r[0].selected).toBe(!0),R(i[0].selected).toBe(!0),R(getComputedStyle(i[1]).display).toBe(`none`),R(r[0].getAttribute(`aria-controls`)).toContain(i[0].id),R(i[0].getAttribute(`aria-labelledby`)).toBe(r[0].id),await B.click(r[1]),R(n.value).toBe(`about`),R(i[0].selected).toBe(!1),R(i[1].selected).toBe(!0),R(t.onChange).toHaveBeenCalledOnce()}},G={render:()=>(0,L.jsxs)(O,{children:[(0,L.jsxs)(M,{className:`jb-tab-story-colors`,"aria-label":`Colored sections`,children:[(0,L.jsx)(F,{value:`primary`,color:`primary`,children:`Primary`}),(0,L.jsx)(F,{value:`secondary`,color:`secondary`,children:`Secondary`}),(0,L.jsx)(F,{value:`positive`,color:`positive`,children:`Positive`}),(0,L.jsx)(F,{value:`danger`,color:`danger`,children:`Danger`}),(0,L.jsx)(F,{value:`warning`,color:`warning`,children:`Warning`}),(0,L.jsx)(F,{value:`light`,color:`light`,children:`Light`}),(0,L.jsx)(F,{value:`dark`,color:`dark`,children:`Dark`}),(0,L.jsx)(F,{value:`primary-subtle`,color:`primary-subtle`,children:`Primary subtle`}),(0,L.jsx)(F,{value:`secondary-subtle`,color:`secondary-subtle`,children:`Secondary subtle`}),(0,L.jsx)(F,{value:`positive-subtle`,color:`positive-subtle`,children:`Positive subtle`}),(0,L.jsx)(F,{value:`danger-subtle`,color:`danger-subtle`,children:`Danger subtle`}),(0,L.jsx)(F,{value:`warning-subtle`,color:`warning-subtle`,children:`Warning subtle`}),(0,L.jsx)(F,{value:`custom-pink`,color:`#ec4899`,children:`Custom pink`}),(0,L.jsx)(F,{value:`custom-light-green`,color:`#bbf7d0`,children:`Custom light green`})]}),(0,L.jsx)(A,{value:`primary`,children:`Primary content`}),(0,L.jsx)(A,{value:`secondary`,children:`Secondary content`}),(0,L.jsx)(A,{value:`positive`,children:`Positive content`}),(0,L.jsx)(A,{value:`danger`,children:`Danger content`}),(0,L.jsx)(A,{value:`warning`,children:`Warning content`}),(0,L.jsx)(A,{value:`light`,children:`Light content`}),(0,L.jsx)(A,{value:`dark`,children:`Dark content`}),(0,L.jsx)(A,{value:`primary-subtle`,children:`Primary subtle content`}),(0,L.jsx)(A,{value:`secondary-subtle`,children:`Secondary subtle content`}),(0,L.jsx)(A,{value:`positive-subtle`,children:`Positive subtle content`}),(0,L.jsx)(A,{value:`danger-subtle`,children:`Danger subtle content`}),(0,L.jsx)(A,{value:`warning-subtle`,children:`Warning subtle content`}),(0,L.jsx)(A,{value:`custom-pink`,children:`Custom pink content`}),(0,L.jsx)(A,{value:`custom-light-green`,children:`Custom light green content`})]}),play:async({canvasElement:e})=>{let t=e.querySelector(`jb-tab-list`),n=e.querySelector(`jb-tab-trigger[value="primary"]`),r=e.querySelector(`jb-tab-trigger[value="danger"]`),i=e.querySelector(`jb-tab-trigger[value="dark"]`),a=e.querySelector(`jb-tab-trigger[value="primary-subtle"]`),o=e.querySelector(`jb-tab-trigger[value="custom-pink"]`),s=e.querySelector(`jb-tab-trigger[value="custom-light-green"]`),c=t.shadowRoot.querySelector(`.selection-indicator`),l=()=>c.style.getPropertyValue(`--indicator-color-from-trigger`),u=e=>getComputedStyle(e).color;await V(()=>R(n.selected).toBe(!0));let d=u(n);await B.click(r),R(u(r)).toBe(d),await B.click(i),await V(()=>R(l()).not.toBe(``));let f=l();R(u(i)).toBe(d),await B.click(a),R(u(a)).not.toBe(d),await B.click(o),await V(()=>R(l()).toBe(`#ec4899`)),R(l()).not.toBe(f),R(u(o)).not.toBe(d),await B.click(s),await V(()=>R(l()).toBe(`#bbf7d0`)),R(u(s)).not.toBe(d)}},K={render:()=>(0,L.jsx)(`div`,{className:`jb-tab-story-sizes`,children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,L.jsxs)(O,{children:[(0,L.jsxs)(M,{size:e,"aria-label":`${e} tabs`,children:[(0,L.jsxs)(F,{value:`first`,color:`primary`,children:[e.toUpperCase(),` first`]}),(0,L.jsxs)(F,{value:`second`,color:`primary-subtle`,children:[e.toUpperCase(),` second`]})]}),(0,L.jsxs)(A,{value:`first`,children:[e.toUpperCase(),` first content`]}),(0,L.jsxs)(A,{value:`second`,children:[e.toUpperCase(),` second content`]})]},e))}),play:async({canvasElement:e})=>{let t=Array.from(e.querySelectorAll(`jb-tab-list`));R(t).toHaveLength(5);for(let e of t){let t=e.triggers.map(e=>getComputedStyle(e));R(new Set(t.map(e=>e.height)).size).toBe(1),R(new Set(t.map(e=>e.fontSize)).size).toBe(1),R(new Set(t.map(e=>e.borderTopLeftRadius)).size).toBe(1);let n=e.shadowRoot.querySelector(`.tab-list`),r=getComputedStyle(n),i=Number.parseFloat(r.borderTopLeftRadius),a=Number.parseFloat(t[0].borderTopLeftRadius),o=Number.parseFloat(r.paddingTop);R(i).toBeCloseTo(a+o,3)}}},q={render:()=>(0,L.jsxs)(O,{defaultValue:`about`,className:`jb-tab-story-layout`,children:[(0,L.jsx)(`nav`,{children:(0,L.jsxs)(M,{orientation:`vertical`,"aria-label":`Profile sections`,children:[(0,L.jsx)(F,{value:`home`,children:`Home`}),(0,L.jsx)(F,{value:`about`,children:`About`}),(0,L.jsx)(F,{value:`user`,children:`User`})]})}),(0,L.jsx)(`main`,{children:(0,L.jsxs)(`section`,{className:`jb-tab-story-panel-wrapper`,children:[(0,L.jsx)(A,{className:`jb-tab-story-panel`,value:`home`,children:`Home content`}),(0,L.jsx)(A,{className:`jb-tab-story-panel`,value:`about`,children:`About content`}),(0,L.jsx)(A,{className:`jb-tab-story-panel`,value:`user`,children:`User content`})]})})]}),play:async({canvasElement:e})=>{let t=e.querySelector(`jb-tab`),n=t.querySelector(`jb-tab-list`);await V(()=>R(t.value).toBe(`about`)),R(n.orientation).toBe(`vertical`),R(n.selectedTrigger?.value).toBe(`about`)}},J={render:()=>(0,L.jsx)(ue,{nullable:!0}),play:async({canvasElement:e})=>{let t=e.querySelector(`jb-tab`),n=Array.from(t.querySelectorAll(`jb-tab-trigger`)),r=Array.from(t.querySelectorAll(`jb-tab-content`));await V(()=>R(t.value).toBeNull()),R(r.every(e=>!e.selected)).toBe(!0),R(n[0].tabIndex).toBe(0),await B.click(n[2]),R(t.value).toBe(`user`)}},Y={render:()=>(0,L.jsxs)(O,{defaultValue:`summary`,children:[(0,L.jsxs)(M,{"aria-label":`Report sections`,children:[(0,L.jsx)(F,{value:`summary`,children:`Summary`}),(0,L.jsx)(F,{value:`details`,children:`Details`})]}),(0,L.jsxs)(`div`,{className:`jb-tab-story-duplicate-panels`,children:[(0,L.jsx)(A,{value:`summary`,children:`Summary chart`}),(0,L.jsx)(A,{value:`summary`,children:`Summary table`}),(0,L.jsx)(A,{value:`details`,children:`Detailed report`})]})]}),play:async({canvasElement:e})=>{let t=()=>e.querySelectorAll(`jb-tab-content[value="summary"][selected]`);await V(()=>R(t()).toHaveLength(2)),R(e.querySelector(`jb-tab-trigger[value="summary"]`).getAttribute(`aria-controls`)?.split(` `)).toHaveLength(2)}},X={render:()=>(0,L.jsxs)(O,{children:[(0,L.jsxs)(M,{"aria-label":`Keyboard sections`,children:[(0,L.jsx)(F,{value:`first`,children:`First`}),(0,L.jsx)(F,{value:`disabled`,disabled:!0,children:`Disabled`}),(0,L.jsx)(F,{value:`last`,children:`Last`})]}),(0,L.jsx)(A,{value:`first`,children:`First content`}),(0,L.jsx)(A,{value:`disabled`,children:`Disabled content`}),(0,L.jsx)(A,{value:`last`,children:`Last content`})]}),play:async({canvasElement:e})=>{let t=e.querySelector(`jb-tab`),n=Array.from(t.querySelectorAll(`jb-tab-trigger`));await V(()=>R(t.value).toBe(`first`)),n[0].focus(),await B.keyboard(`{ArrowRight}`),R(t.value).toBe(`last`),R(document.activeElement).toBe(n[2]),await B.keyboard(`{Home}`),R(t.value).toBe(`first`),await B.click(n[1]),R(t.value).toBe(`first`)}},Z={render:e=>{let[t,n]=(0,I.useState)(`home`);return(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`output`,{"data-testid":`value`,children:t}),(0,L.jsxs)(O,{value:t,onChange:t=>{e.onChange?.(t),n(t.detail.value)},children:[(0,L.jsxs)(M,{"aria-label":`Controlled sections`,children:[(0,L.jsx)(F,{value:`home`,children:`Home`}),(0,L.jsx)(F,{value:`about`,children:`About`})]}),(0,L.jsx)(A,{value:`home`,children:`Home content`}),(0,L.jsx)(A,{value:`about`,children:`About content`})]})]})},play:async({canvasElement:e})=>{let t=H(e),n=e.querySelector(`jb-tab-trigger[value="about"]`);await B.click(n),await V(()=>R(t.getByTestId(`value`)).toHaveTextContent(`about`))}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <JBTab onChange={args.onChange}>
      <JBTabList aria-label="Account sections">
        <JBTabTrigger value="home">Home</JBTabTrigger>
        <JBTabTrigger value="about">About</JBTabTrigger>
        <JBTabTrigger value="user">User</JBTabTrigger>
      </JBTabList>
      <JBTabContent value="home">Home content</JBTabContent>
      <JBTabContent value="about">About content</JBTabContent>
      <JBTabContent value="user">User content</JBTabContent>
    </JBTab>,
  play: async ({
    canvasElement,
    args
  }) => {
    const tab = canvasElement.querySelector<JBTabWebComponent>("jb-tab")!;
    const triggers = Array.from(tab.querySelectorAll<JBTabTriggerWebComponent>("jb-tab-trigger"));
    const contents = Array.from(tab.querySelectorAll<JBTabContentWebComponent>("jb-tab-content"));
    await waitFor(() => expect(tab.value).toBe("home"));
    expect(triggers[0].selected).toBe(true);
    expect(contents[0].selected).toBe(true);
    expect(getComputedStyle(contents[1]).display).toBe("none");
    expect(triggers[0].getAttribute("aria-controls")).toContain(contents[0].id);
    expect(contents[0].getAttribute("aria-labelledby")).toBe(triggers[0].id);
    await userEvent.click(triggers[1]);
    expect(tab.value).toBe("about");
    expect(contents[0].selected).toBe(false);
    expect(contents[1].selected).toBe(true);
    expect(args.onChange).toHaveBeenCalledOnce();
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <JBTab>
      <JBTabList className="jb-tab-story-colors" aria-label="Colored sections">
        <JBTabTrigger value="primary" color="primary">
          Primary
        </JBTabTrigger>
        <JBTabTrigger value="secondary" color="secondary">
          Secondary
        </JBTabTrigger>
        <JBTabTrigger value="positive" color="positive">
          Positive
        </JBTabTrigger>
        <JBTabTrigger value="danger" color="danger">
          Danger
        </JBTabTrigger>
        <JBTabTrigger value="warning" color="warning">
          Warning
        </JBTabTrigger>
        <JBTabTrigger value="light" color="light">
          Light
        </JBTabTrigger>
        <JBTabTrigger value="dark" color="dark">
          Dark
        </JBTabTrigger>
        <JBTabTrigger value="primary-subtle" color="primary-subtle">
          Primary subtle
        </JBTabTrigger>
        <JBTabTrigger value="secondary-subtle" color="secondary-subtle">
          Secondary subtle
        </JBTabTrigger>
        <JBTabTrigger value="positive-subtle" color="positive-subtle">
          Positive subtle
        </JBTabTrigger>
        <JBTabTrigger value="danger-subtle" color="danger-subtle">
          Danger subtle
        </JBTabTrigger>
        <JBTabTrigger value="warning-subtle" color="warning-subtle">
          Warning subtle
        </JBTabTrigger>
        <JBTabTrigger value="custom-pink" color="#ec4899">
          Custom pink
        </JBTabTrigger>
        <JBTabTrigger value="custom-light-green" color="#bbf7d0">
          Custom light green
        </JBTabTrigger>
      </JBTabList>
      <JBTabContent value="primary">Primary content</JBTabContent>
      <JBTabContent value="secondary">Secondary content</JBTabContent>
      <JBTabContent value="positive">Positive content</JBTabContent>
      <JBTabContent value="danger">Danger content</JBTabContent>
      <JBTabContent value="warning">Warning content</JBTabContent>
      <JBTabContent value="light">Light content</JBTabContent>
      <JBTabContent value="dark">Dark content</JBTabContent>
      <JBTabContent value="primary-subtle">Primary subtle content</JBTabContent>
      <JBTabContent value="secondary-subtle">Secondary subtle content</JBTabContent>
      <JBTabContent value="positive-subtle">Positive subtle content</JBTabContent>
      <JBTabContent value="danger-subtle">Danger subtle content</JBTabContent>
      <JBTabContent value="warning-subtle">Warning subtle content</JBTabContent>
      <JBTabContent value="custom-pink">Custom pink content</JBTabContent>
      <JBTabContent value="custom-light-green">Custom light green content</JBTabContent>
    </JBTab>,
  play: async ({
    canvasElement
  }) => {
    const list = canvasElement.querySelector<JBTabListWebComponent>("jb-tab-list")!;
    const primary = canvasElement.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="primary"]')!;
    const danger = canvasElement.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="danger"]')!;
    const dark = canvasElement.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="dark"]')!;
    const primarySubtle = canvasElement.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="primary-subtle"]')!;
    const customPink = canvasElement.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="custom-pink"]')!;
    const customLightGreen = canvasElement.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="custom-light-green"]')!;
    const indicator = list.shadowRoot!.querySelector<HTMLElement>(".selection-indicator")!;
    const indicatorColor = () => indicator.style.getPropertyValue("--indicator-color-from-trigger");
    const selectedTextColor = (trigger: JBTabTriggerWebComponent) => getComputedStyle(trigger).color;
    await waitFor(() => expect(primary.selected).toBe(true));
    const lightTextColor = selectedTextColor(primary);
    await userEvent.click(danger);
    expect(selectedTextColor(danger)).toBe(lightTextColor);
    await userEvent.click(dark);
    await waitFor(() => expect(indicatorColor()).not.toBe(""));
    const darkColor = indicatorColor();
    expect(selectedTextColor(dark)).toBe(lightTextColor);
    await userEvent.click(primarySubtle);
    expect(selectedTextColor(primarySubtle)).not.toBe(lightTextColor);
    await userEvent.click(customPink);
    await waitFor(() => expect(indicatorColor()).toBe("#ec4899"));
    expect(indicatorColor()).not.toBe(darkColor);
    expect(selectedTextColor(customPink)).not.toBe(lightTextColor);
    await userEvent.click(customLightGreen);
    await waitFor(() => expect(indicatorColor()).toBe("#bbf7d0"));
    expect(selectedTextColor(customLightGreen)).not.toBe(lightTextColor);
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div className="jb-tab-story-sizes">
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <JBTab key={size}>
          <JBTabList size={size} aria-label={\`\${size} tabs\`}>
            <JBTabTrigger value="first" color="primary">
              {size.toUpperCase()} first
            </JBTabTrigger>
            <JBTabTrigger value="second" color="primary-subtle">
              {size.toUpperCase()} second
            </JBTabTrigger>
          </JBTabList>
          <JBTabContent value="first">{size.toUpperCase()} first content</JBTabContent>
          <JBTabContent value="second">{size.toUpperCase()} second content</JBTabContent>
        </JBTab>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const lists = Array.from(canvasElement.querySelectorAll<JBTabListWebComponent>("jb-tab-list"));
    expect(lists).toHaveLength(5);
    for (const list of lists) {
      const triggers = list.triggers;
      const triggerStyles = triggers.map(trigger => getComputedStyle(trigger));
      expect(new Set(triggerStyles.map(style => style.height)).size).toBe(1);
      expect(new Set(triggerStyles.map(style => style.fontSize)).size).toBe(1);
      expect(new Set(triggerStyles.map(style => style.borderTopLeftRadius)).size).toBe(1);
      const listPart = list.shadowRoot!.querySelector<HTMLElement>(".tab-list")!;
      const listStyle = getComputedStyle(listPart);
      const outerRadius = Number.parseFloat(listStyle.borderTopLeftRadius);
      const triggerRadius = Number.parseFloat(triggerStyles[0].borderTopLeftRadius);
      const listPadding = Number.parseFloat(listStyle.paddingTop);
      expect(outerRadius).toBeCloseTo(triggerRadius + listPadding, 3);
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <JBTab defaultValue="about" className="jb-tab-story-layout">
      <nav>
        <JBTabList orientation="vertical" aria-label="Profile sections">
          <JBTabTrigger value="home">Home</JBTabTrigger>
          <JBTabTrigger value="about">About</JBTabTrigger>
          <JBTabTrigger value="user">User</JBTabTrigger>
        </JBTabList>
      </nav>
      <main>
        <section className="jb-tab-story-panel-wrapper">
          <JBTabContent className="jb-tab-story-panel" value="home">
            Home content
          </JBTabContent>
          <JBTabContent className="jb-tab-story-panel" value="about">
            About content
          </JBTabContent>
          <JBTabContent className="jb-tab-story-panel" value="user">
            User content
          </JBTabContent>
        </section>
      </main>
    </JBTab>,
  play: async ({
    canvasElement
  }) => {
    const tab = canvasElement.querySelector<JBTabWebComponent>("jb-tab")!;
    const list = tab.querySelector<JBTabListWebComponent>("jb-tab-list")!;
    await waitFor(() => expect(tab.value).toBe("about"));
    expect(list.orientation).toBe("vertical");
    expect(list.selectedTrigger?.value).toBe("about");
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <StandardTabs nullable />,
  play: async ({
    canvasElement
  }) => {
    const tab = canvasElement.querySelector<JBTabWebComponent>("jb-tab")!;
    const triggers = Array.from(tab.querySelectorAll<JBTabTriggerWebComponent>("jb-tab-trigger"));
    const contents = Array.from(tab.querySelectorAll<JBTabContentWebComponent>("jb-tab-content"));
    await waitFor(() => expect(tab.value).toBeNull());
    expect(contents.every(content => !content.selected)).toBe(true);
    expect(triggers[0].tabIndex).toBe(0);
    await userEvent.click(triggers[2]);
    expect(tab.value).toBe("user");
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <JBTab defaultValue="summary">
      <JBTabList aria-label="Report sections">
        <JBTabTrigger value="summary">Summary</JBTabTrigger>
        <JBTabTrigger value="details">Details</JBTabTrigger>
      </JBTabList>
      <div className="jb-tab-story-duplicate-panels">
        <JBTabContent value="summary">Summary chart</JBTabContent>
        <JBTabContent value="summary">Summary table</JBTabContent>
        <JBTabContent value="details">Detailed report</JBTabContent>
      </div>
    </JBTab>,
  play: async ({
    canvasElement
  }) => {
    const selectedPanels = () => canvasElement.querySelectorAll<JBTabContentWebComponent>('jb-tab-content[value="summary"][selected]');
    await waitFor(() => expect(selectedPanels()).toHaveLength(2));
    const trigger = canvasElement.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="summary"]')!;
    expect(trigger.getAttribute("aria-controls")?.split(" ")).toHaveLength(2);
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <JBTab>
      <JBTabList aria-label="Keyboard sections">
        <JBTabTrigger value="first">First</JBTabTrigger>
        <JBTabTrigger value="disabled" disabled>
          Disabled
        </JBTabTrigger>
        <JBTabTrigger value="last">Last</JBTabTrigger>
      </JBTabList>
      <JBTabContent value="first">First content</JBTabContent>
      <JBTabContent value="disabled">Disabled content</JBTabContent>
      <JBTabContent value="last">Last content</JBTabContent>
    </JBTab>,
  play: async ({
    canvasElement
  }) => {
    const tab = canvasElement.querySelector<JBTabWebComponent>("jb-tab")!;
    const triggers = Array.from(tab.querySelectorAll<JBTabTriggerWebComponent>("jb-tab-trigger"));
    await waitFor(() => expect(tab.value).toBe("first"));
    triggers[0].focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(tab.value).toBe("last");
    expect(document.activeElement).toBe(triggers[2]);
    await userEvent.keyboard("{Home}");
    expect(tab.value).toBe("first");
    await userEvent.click(triggers[1]);
    expect(tab.value).toBe("first");
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("home");
    return <div>
        <output data-testid="value">{value}</output>
        <JBTab value={value} onChange={event => {
        args.onChange?.(event);
        setValue(event.detail.value);
      }}>
          <JBTabList aria-label="Controlled sections">
            <JBTabTrigger value="home">Home</JBTabTrigger>
            <JBTabTrigger value="about">About</JBTabTrigger>
          </JBTabList>
          <JBTabContent value="home">Home content</JBTabContent>
          <JBTabContent value="about">About content</JBTabContent>
        </JBTab>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const about = canvasElement.querySelector<JBTabTriggerWebComponent>('jb-tab-trigger[value="about"]')!;
    await userEvent.click(about);
    await waitFor(() => expect(canvas.getByTestId("value")).toHaveTextContent("about"));
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Basic`,`ColoredIndicators`,`SizeVariants`,`NestedLayout`,`Nullable`,`DuplicatePanels`,`DisabledAndKeyboard`,`ControlledReact`]}));$();export{W as Basic,G as ColoredIndicators,Z as ControlledReact,X as DisabledAndKeyboard,Y as DuplicatePanels,q as NestedLayout,J as Nullable,K as SizeVariants,Q as __namedExportsOrder,U as default,$ as n,le as t};