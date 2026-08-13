import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-D4DdPDUe.js";import{t as a}from"./arrow-Bd_Nt6LW.js";import{t as ee}from"./eye-CSidFc8G.js";import{a as o,i as te,n as s,o as ne,r as c,t as re}from"./filter-BFS4-wPJ.js";import{t as ie}from"./search-CRGkFE4x.js";function l(e){return new g({lightness:6*(3+1.3*e)*.01,chroma:.001*(14+.09*e),hue:258.36},`--jb-neutral-${e}`)}function ae(e){return new g({lightness:e.lightness+.07,chroma:e.chroma+.07,hue:e.hue},`${e.variableName}-hover`)}function oe(e){return new g({lightness:e.lightness-.1,chroma:e.chroma-.05,hue:e.hue},`${e.variableName}-pressed`)}function se(e){let t=Math.min(e.lightness+.12*(1-e.lightness),.985),n=e.chroma*(1-.15*(t-e.lightness));return new g({lightness:t,chroma:Number(n.toFixed(3)),hue:e.hue},`${e.variableName}-l`)}function ce(e){let t=Math.max(e.lightness-.12*e.lightness,.02);return new g({lightness:t,chroma:e.chroma*(1-.15*(t-e.lightness)),hue:e.hue},`${e.variableName}-d`)}function u(e){let t=Math.min(e.lightness+.65*(1-e.lightness),.93),n=.55*e.chroma*(1-.08*(t-e.lightness)),r=e.hue>=70&&e.hue<=162?5:-3,i=e.hue+r;return new g({lightness:t,chroma:Number(n.toFixed(3)),hue:i},`${e.variableName}-subtle`)}function le(e){let t=Math.max(e.lightness-.35,.22),n=Math.min(1.6*e.chroma,.28);return new g({lightness:Number(t.toFixed(3)),chroma:Number(n.toFixed(3)),hue:e.hue},`${e.variableName}-contrast`)}function d(e){return{main:e,hover:ae(e),pressed:oe(e),light:se(e),dark:ce(e),subtle:u(e),contrast:le(e)}}function f(e){try{let{value:t,...n}=e;typeof window.CSS.registerProperty==`function`&&window.CSS.registerProperty({...n}),ue(e.name,t)}catch{}}function ue(e,t){try{t&&(document.documentElement.style.getPropertyValue(e)||document.documentElement.style.setProperty(e,t))}catch{}}function de(e=``){return crypto?.randomUUID?`${e}-${crypto.randomUUID()}`:`${e}-${Date.now()}-${Math.random().toString(36).slice(2)}`}function p(e,t){f({name:t??e.variableName??`--${de()}`,syntax:`<color>`,inherits:!0,initialValue:e.value})}function m(e){p(e.main),p(e.dark),p(e.light),p(e.contrast),p(e.hover),p(e.pressed),p(e.subtle)}function h(e,t){t.variableName?ue(e,`var(${t.variableName})`):console.error(`Semantic colors must reference a named primitive`,t)}function fe(){(function(e){p(e.neutral[0],`--jb-neutral`),m(e.primary),m(e.secondary),m(e.red),m(e.green),m(e.yellow),p(e.single.black),p(e.single.white),p(e.single.highlight);for(let t=1;t<=10;t++)p(e.neutral[t])})(_),h(`--jb-content-primary`,_.single.black),h(`--jb-content-secondary`,_.neutral[7]),h(`--jb-content-inverse`,_.single.white),h(`--jb-surface-primary`,_.single.white),h(`--jb-surface-secondary`,_.neutral[10]),h(`--jb-surface-inverse`,_.single.black)}function pe(){f({name:`--jb-radius`,inherits:!0,value:`1rem`,initialValue:`16px`,syntax:`<length-percentage>`}),f({name:`--jb-radius-xs`,inherits:!0,value:`0.5rem`,initialValue:`8px`,syntax:`<length-percentage>`}),f({name:`--jb-radius-sm`,inherits:!0,value:`0.75rem`,initialValue:`12px`,syntax:`<length-percentage>`}),f({name:`--jb-radius-lg`,inherits:!0,value:`1.25rem`,initialValue:`20px`,syntax:`<length-percentage>`}),f({name:`--jb-radius-xl`,inherits:!0,value:`1.5rem`,initialValue:`24px`,syntax:`<length-percentage>`}),f({name:`--jb-control-height-xs`,inherits:!0,value:`1.5rem`,initialValue:`24px`,syntax:`<length-percentage>`}),f({name:`--jb-control-height-sm`,inherits:!0,value:`2rem`,initialValue:`32px`,syntax:`<length-percentage>`}),f({name:`--jb-control-height-md`,inherits:!0,value:`2.5rem`,initialValue:`40px`,syntax:`<length-percentage>`}),f({name:`--jb-control-height-lg`,inherits:!0,value:`3rem`,initialValue:`48px`,syntax:`<length-percentage>`}),f({name:`--jb-control-height-xl`,inherits:!0,value:`4rem`,initialValue:`64px`,syntax:`<length-percentage>`}),fe()}var g,me,he,ge,_e,ve,_,ye,be,xe,Se,Ce=t((()=>{g=class{get value(){return`oklch(${this.lightness} ${this.chroma} ${this.hue})`}constructor(e,t){this.variableName=t,this.lightness=e.lightness,this.chroma=e.chroma,this.hue=e.hue}},me=new g({lightness:.6,chroma:.26,hue:256},`--jb-primary`),he=new g({lightness:.6,chroma:.26,hue:286},`--jb-secondary`),ge=new g({lightness:.75,chroma:.18,hue:70},`--jb-yellow`),_e=new g({lightness:.68,chroma:.1484,hue:162.1},`--jb-green`),ve=new g({lightness:.6,chroma:.22,hue:23.21},`--jb-red`),_={single:{black:new g({lightness:.14,chroma:0,hue:0},`--jb-black`),white:new g({lightness:1,chroma:0,hue:0},`--jb-white`),highlight:new g({lightness:.93,chroma:.2302,hue:125.18},`--jb-highlight`)},neutral:[l(0),l(1),l(2),l(3),l(4),l(5),l(6),l(7),l(8),l(9),l(10)],primary:d(me),secondary:d(he),yellow:d(ge),green:d(_e),red:d(ve)},ye=globalThis.HTMLElement??class{},be=[`xs`,`sm`,`md`,`lg`,`xl`],xe=[`primary`,`secondary`,`positive`,`danger`,`warning`,`light`,`dark`],Se=class extends ye{#e=!1;#t=null;get isOpen(){return this.#e}set isOpen(e){this.#e!==e&&(e?this.playOpenAnimation():this.playCloseAnimation())}get size(){let e=this.getAttribute(`size`);return be.includes(e)?e:`md`}set size(e){this.setAttribute(`size`,e)}get color(){let e=this.getAttribute(`color`);return xe.includes(e)?e:null}set color(e){e===null?this.removeAttribute(`color`):this.setAttribute(`color`,e)}constructor(){super(),pe();let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{--icon-size:var(--jb-icon-size,1.5rem);--icon-color:var(--jb-icon-color,currentColor);--icon-color-complementary:var(--jb-icon-color-complementary,var(--jb-primary));--icon-stroke-width-thin:48;--icon-stroke-width:64;--icon-stroke-width-thick:96;height:var(--icon-size)}:host([size=xs]){--icon-size:var(--jb-icon-size-xs,1rem)}:host([size=sm]){--icon-size:var(--jb-icon-size-sm,1.25rem)}:host([size=md]){--icon-size:var(--jb-icon-size-md,1.5rem)}:host([size=lg]){--icon-size:var(--jb-icon-size-lg,1.75rem)}:host([size=xl]){--icon-size:var(--jb-icon-size-xl,2.25rem)}:host([color=primary]){--icon-color:var(--jb-icon-color-primary,var(--jb-primary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-primary,var(--jb-icon-color-complementary,var(--jb-secondary)))}:host([color=secondary]){--icon-color:var(--jb-icon-color-secondary,var(--jb-secondary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-secondary,var(--jb-icon-color-complementary,var(--jb-primary)))}:host([color=positive]){--icon-color:var(--jb-icon-color-positive,var(--jb-green,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-positive,var(--jb-icon-color-complementary,var(--jb-green-subtle)))}:host([color=danger]){--icon-color:var(--jb-icon-color-danger,var(--jb-red,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-danger,var(--jb-icon-color-complementary,var(--jb-red-subtle)))}:host([color=warning]){--icon-color:var(--jb-icon-color-warning,var(--jb-yellow,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-warning,var(--jb-icon-color-complementary,var(--jb-yellow-subtle)))}:host([color=light]){--icon-color:var(--jb-icon-color-light,var(--jb-neutral-10,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-light,var(--jb-icon-color-complementary,var(--jb-neutral)))}:host([color=dark]){--icon-color:var(--jb-icon-color-dark,var(--jb-neutral,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-dark,var(--jb-icon-color-complementary,var(--jb-content-inverse)))}
:host{aspect-ratio:1;line-height:0;display:inline-block}svg{box-sizing:border-box;fill:none;width:auto;height:100%;stroke:var(--icon-color);stroke-width:var(--icon-stroke-width);stroke-linecap:round;stroke-linejoin:round;display:block;overflow:visible}.door{transform-box:fill-box;transform-origin:50%}</style>

    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" part="svg">
      <g class="door" part="door">
        <path d="M175 246H850"></path>
        <path d="M366 220A136 136 0 0 1 636 220"></path>
      </g>
      <path d="M238 326 280 783A132 132 0 0 0 412 915H613A132 132 0 0 0 745 783L787 326" part="body"></path>
      <path d="M429 420V658" part="line"></path>
      <path d="M604 524V762" part="line"></path>
    </svg>
  `,e.appendChild(t.content.cloneNode(!0)),this.door=e.querySelector(`.door`)}playOpenAnimation(){return this.#e=!0,this.#t?.cancel(),this.#t=this.door.animate([{transform:`translate(0, 0) rotate(0deg)`},{transform:`translate(-9rem, -5rem) rotate(-18deg)`}],{id:`open`,duration:200,easing:`ease`,fill:`forwards`,iterations:1}),this.#t}playCloseAnimation(){return this.#e=!1,this.#t?.cancel(),this.#t=this.door.animate([{transform:`translate(-9rem, -5rem) rotate(-18deg)`},{transform:`translate(0, 0) rotate(0deg)`}],{id:`close`,duration:200,easing:`ease`,fill:`forwards`,iterations:1}),this.#t}},typeof window>`u`||window.customElements.get(`jb-icon-delete`)||window.customElements.define(`jb-icon-delete`,Se)})),we=t((()=>{Ce()}));function v(e){return new w({lightness:6*(3+1.3*e)*.01,chroma:.001*(14+.09*e),hue:258.36},`--jb-neutral-${e}`)}function Te(e){return new w({lightness:e.lightness+.07,chroma:e.chroma+.07,hue:e.hue},`${e.variableName}-hover`)}function Ee(e){return new w({lightness:e.lightness-.1,chroma:e.chroma-.05,hue:e.hue},`${e.variableName}-pressed`)}function De(e){let t=Math.min(e.lightness+.12*(1-e.lightness),.985),n=e.chroma*(1-.15*(t-e.lightness));return new w({lightness:t,chroma:Number(n.toFixed(3)),hue:e.hue},`${e.variableName}-l`)}function Oe(e){let t=Math.max(e.lightness-.12*e.lightness,.02);return new w({lightness:t,chroma:e.chroma*(1-.15*(t-e.lightness)),hue:e.hue},`${e.variableName}-d`)}function ke(e){let t=Math.min(e.lightness+.65*(1-e.lightness),.93),n=.55*e.chroma*(1-.08*(t-e.lightness)),r=e.hue>=70&&e.hue<=162?5:-3,i=e.hue+r;return new w({lightness:t,chroma:Number(n.toFixed(3)),hue:i},`${e.variableName}-subtle`)}function Ae(e){let t=Math.max(e.lightness-.35,.22),n=Math.min(1.6*e.chroma,.28);return new w({lightness:Number(t.toFixed(3)),chroma:Number(n.toFixed(3)),hue:e.hue},`${e.variableName}-contrast`)}function y(e){return{main:e,hover:Te(e),pressed:Ee(e),light:De(e),dark:Oe(e),subtle:ke(e),contrast:Ae(e)}}function b(e){try{let{value:t,...n}=e;typeof window.CSS.registerProperty==`function`&&window.CSS.registerProperty({...n}),je(e.name,t)}catch{}}function je(e,t){try{t&&(document.documentElement.style.getPropertyValue(e)||document.documentElement.style.setProperty(e,t))}catch{}}function Me(e=``){return crypto?.randomUUID?`${e}-${crypto.randomUUID()}`:`${e}-${Date.now()}-${Math.random().toString(36).slice(2)}`}function x(e,t){b({name:t??e.variableName??`--${Me()}`,syntax:`<color>`,inherits:!0,initialValue:e.value})}function S(e){x(e.main),x(e.dark),x(e.light),x(e.contrast),x(e.hover),x(e.pressed),x(e.subtle)}function C(e,t){t.variableName?je(e,`var(${t.variableName})`):console.error(`Semantic colors must reference a named primitive`,t)}function Ne(){(function(e){x(e.neutral[0],`--jb-neutral`),S(e.primary),S(e.secondary),S(e.red),S(e.green),S(e.yellow),x(e.single.black),x(e.single.white),x(e.single.highlight);for(let t=1;t<=10;t++)x(e.neutral[t])})(T),C(`--jb-content-primary`,T.single.black),C(`--jb-content-secondary`,T.neutral[7]),C(`--jb-content-inverse`,T.single.white),C(`--jb-surface-primary`,T.single.white),C(`--jb-surface-secondary`,T.neutral[10]),C(`--jb-surface-inverse`,T.single.black)}function Pe(){b({name:`--jb-radius`,inherits:!0,value:`1rem`,initialValue:`16px`,syntax:`<length-percentage>`}),b({name:`--jb-radius-xs`,inherits:!0,value:`0.5rem`,initialValue:`8px`,syntax:`<length-percentage>`}),b({name:`--jb-radius-sm`,inherits:!0,value:`0.75rem`,initialValue:`12px`,syntax:`<length-percentage>`}),b({name:`--jb-radius-lg`,inherits:!0,value:`1.25rem`,initialValue:`20px`,syntax:`<length-percentage>`}),b({name:`--jb-radius-xl`,inherits:!0,value:`1.5rem`,initialValue:`24px`,syntax:`<length-percentage>`}),b({name:`--jb-control-height-xs`,inherits:!0,value:`1.5rem`,initialValue:`24px`,syntax:`<length-percentage>`}),b({name:`--jb-control-height-sm`,inherits:!0,value:`2rem`,initialValue:`32px`,syntax:`<length-percentage>`}),b({name:`--jb-control-height-md`,inherits:!0,value:`2.5rem`,initialValue:`40px`,syntax:`<length-percentage>`}),b({name:`--jb-control-height-lg`,inherits:!0,value:`3rem`,initialValue:`48px`,syntax:`<length-percentage>`}),b({name:`--jb-control-height-xl`,inherits:!0,value:`4rem`,initialValue:`64px`,syntax:`<length-percentage>`}),Ne()}var w,Fe,Ie,Le,Re,ze,T,Be,Ve,He,Ue,We=t((()=>{w=class{get value(){return`oklch(${this.lightness} ${this.chroma} ${this.hue})`}constructor(e,t){this.variableName=t,this.lightness=e.lightness,this.chroma=e.chroma,this.hue=e.hue}},Fe=new w({lightness:.6,chroma:.26,hue:256},`--jb-primary`),Ie=new w({lightness:.6,chroma:.26,hue:286},`--jb-secondary`),Le=new w({lightness:.75,chroma:.18,hue:70},`--jb-yellow`),Re=new w({lightness:.68,chroma:.1484,hue:162.1},`--jb-green`),ze=new w({lightness:.6,chroma:.22,hue:23.21},`--jb-red`),T={single:{black:new w({lightness:.14,chroma:0,hue:0},`--jb-black`),white:new w({lightness:1,chroma:0,hue:0},`--jb-white`),highlight:new w({lightness:.93,chroma:.2302,hue:125.18},`--jb-highlight`)},neutral:[v(0),v(1),v(2),v(3),v(4),v(5),v(6),v(7),v(8),v(9),v(10)],primary:y(Fe),secondary:y(Ie),yellow:y(Le),green:y(Re),red:y(ze)},Be=globalThis.HTMLElement??class{},Ve=[`xs`,`sm`,`md`,`lg`,`xl`],He=[`primary`,`secondary`,`positive`,`danger`,`warning`,`light`,`dark`],Ue=class extends Be{get isActive(){return function(e,t=!1){return e===null?t:e===``||e.toLowerCase()===`true`||e.toLowerCase()!==`false`&&!!e}(this.getAttribute(`active`))}set isActive(e){this.toggleAttribute(`active`,e)}get size(){let e=this.getAttribute(`size`);return Ve.includes(e)?e:`md`}set size(e){this.setAttribute(`size`,e)}get color(){let e=this.getAttribute(`color`);return He.includes(e)?e:null}set color(e){e===null?this.removeAttribute(`color`):this.setAttribute(`color`,e)}constructor(){super(),Pe();let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{--icon-size:var(--jb-icon-size,1.5rem);--icon-color:var(--jb-icon-color,currentColor);--icon-color-complementary:var(--jb-icon-color-complementary,var(--jb-primary));--icon-stroke-width-thin:48;--icon-stroke-width:64;--icon-stroke-width-thick:96;height:var(--icon-size)}:host([size=xs]){--icon-size:var(--jb-icon-size-xs,1rem)}:host([size=sm]){--icon-size:var(--jb-icon-size-sm,1.25rem)}:host([size=md]){--icon-size:var(--jb-icon-size-md,1.5rem)}:host([size=lg]){--icon-size:var(--jb-icon-size-lg,1.75rem)}:host([size=xl]){--icon-size:var(--jb-icon-size-xl,2.25rem)}:host([color=primary]){--icon-color:var(--jb-icon-color-primary,var(--jb-primary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-primary,var(--jb-icon-color-complementary,var(--jb-secondary)))}:host([color=secondary]){--icon-color:var(--jb-icon-color-secondary,var(--jb-secondary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-secondary,var(--jb-icon-color-complementary,var(--jb-primary)))}:host([color=positive]){--icon-color:var(--jb-icon-color-positive,var(--jb-green,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-positive,var(--jb-icon-color-complementary,var(--jb-green-subtle)))}:host([color=danger]){--icon-color:var(--jb-icon-color-danger,var(--jb-red,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-danger,var(--jb-icon-color-complementary,var(--jb-red-subtle)))}:host([color=warning]){--icon-color:var(--jb-icon-color-warning,var(--jb-yellow,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-warning,var(--jb-icon-color-complementary,var(--jb-yellow-subtle)))}:host([color=light]){--icon-color:var(--jb-icon-color-light,var(--jb-neutral-10,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-light,var(--jb-icon-color-complementary,var(--jb-neutral)))}:host([color=dark]){--icon-color:var(--jb-icon-color-dark,var(--jb-neutral,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-dark,var(--jb-icon-color-complementary,var(--jb-content-inverse)))}
:host{aspect-ratio:1;line-height:0;display:inline-block}svg{box-sizing:border-box;width:auto;height:100%;display:block;overflow:visible}.pen{fill:none;stroke:var(--icon-color);stroke-width:var(--icon-stroke-width);stroke-linecap:round;stroke-linejoin:round;transform-origin:50%;transform-box:fill-box;transition:transform .3s}.line{fill:none;stroke:var(--icon-color-complementary);stroke-width:var(--icon-stroke-width-thin);stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:60 820;transition:stroke-dasharray .3s}:host([active]) .pen{transform:translate(80px,-96px)rotate(-79deg)}:host([active]) .line{stroke-dasharray:800 60}</style>

    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" part="svg">
      <g class="pen" part="pen">
        <path d="M190 834 232 634 648 218A96 96 0 0 1 784 354L368 770 190 834Z"></path>
        <path d="M232 634 368 770M600 266 736 402"></path>
      </g>
      <path class="line" d="M112 912H912" part="line"></path>
    </svg>
  `,e.appendChild(t.content.cloneNode(!0))}},typeof window>`u`||window.customElements.get(`jb-icon-edit`)||window.customElements.define(`jb-icon-edit`,Ue)})),Ge=t((()=>{We()}));function E(e){return new M({lightness:6*(3+1.3*e)*.01,chroma:.001*(14+.09*e),hue:258.36},`--jb-neutral-${e}`)}function Ke(e){return new M({lightness:e.lightness+.07,chroma:e.chroma+.07,hue:e.hue},`${e.variableName}-hover`)}function qe(e){return new M({lightness:e.lightness-.1,chroma:e.chroma-.05,hue:e.hue},`${e.variableName}-pressed`)}function Je(e){let t=Math.min(e.lightness+.12*(1-e.lightness),.985),n=e.chroma*(1-.15*(t-e.lightness));return new M({lightness:t,chroma:Number(n.toFixed(3)),hue:e.hue},`${e.variableName}-l`)}function Ye(e){let t=Math.max(e.lightness-.12*e.lightness,.02);return new M({lightness:t,chroma:e.chroma*(1-.15*(t-e.lightness)),hue:e.hue},`${e.variableName}-d`)}function Xe(e){let t=Math.min(e.lightness+.65*(1-e.lightness),.93),n=.55*e.chroma*(1-.08*(t-e.lightness)),r=e.hue>=70&&e.hue<=162?5:-3,i=e.hue+r;return new M({lightness:t,chroma:Number(n.toFixed(3)),hue:i},`${e.variableName}-subtle`)}function Ze(e){let t=Math.max(e.lightness-.35,.22),n=Math.min(1.6*e.chroma,.28);return new M({lightness:Number(t.toFixed(3)),chroma:Number(n.toFixed(3)),hue:e.hue},`${e.variableName}-contrast`)}function D(e){return{main:e,hover:Ke(e),pressed:qe(e),light:Je(e),dark:Ye(e),subtle:Xe(e),contrast:Ze(e)}}function O(e){try{let{value:t,...n}=e;typeof window.CSS.registerProperty==`function`&&window.CSS.registerProperty({...n}),Qe(e.name,t)}catch{}}function Qe(e,t){try{t&&(document.documentElement.style.getPropertyValue(e)||document.documentElement.style.setProperty(e,t))}catch{}}function $e(e=``){return crypto?.randomUUID?`${e}-${crypto.randomUUID()}`:`${e}-${Date.now()}-${Math.random().toString(36).slice(2)}`}function k(e,t){O({name:t??e.variableName??`--${$e()}`,syntax:`<color>`,inherits:!0,initialValue:e.value})}function A(e){k(e.main),k(e.dark),k(e.light),k(e.contrast),k(e.hover),k(e.pressed),k(e.subtle)}function j(e,t){t.variableName?Qe(e,`var(${t.variableName})`):console.error(`Semantic colors must reference a named primitive`,t)}function et(){(function(e){k(e.neutral[0],`--jb-neutral`),A(e.primary),A(e.secondary),A(e.red),A(e.green),A(e.yellow),k(e.single.black),k(e.single.white),k(e.single.highlight);for(let t=1;t<=10;t++)k(e.neutral[t])})(N),j(`--jb-content-primary`,N.single.black),j(`--jb-content-secondary`,N.neutral[7]),j(`--jb-content-inverse`,N.single.white),j(`--jb-surface-primary`,N.single.white),j(`--jb-surface-secondary`,N.neutral[10]),j(`--jb-surface-inverse`,N.single.black)}function tt(){O({name:`--jb-radius`,inherits:!0,value:`1rem`,initialValue:`16px`,syntax:`<length-percentage>`}),O({name:`--jb-radius-xs`,inherits:!0,value:`0.5rem`,initialValue:`8px`,syntax:`<length-percentage>`}),O({name:`--jb-radius-sm`,inherits:!0,value:`0.75rem`,initialValue:`12px`,syntax:`<length-percentage>`}),O({name:`--jb-radius-lg`,inherits:!0,value:`1.25rem`,initialValue:`20px`,syntax:`<length-percentage>`}),O({name:`--jb-radius-xl`,inherits:!0,value:`1.5rem`,initialValue:`24px`,syntax:`<length-percentage>`}),O({name:`--jb-control-height-xs`,inherits:!0,value:`1.5rem`,initialValue:`24px`,syntax:`<length-percentage>`}),O({name:`--jb-control-height-sm`,inherits:!0,value:`2rem`,initialValue:`32px`,syntax:`<length-percentage>`}),O({name:`--jb-control-height-md`,inherits:!0,value:`2.5rem`,initialValue:`40px`,syntax:`<length-percentage>`}),O({name:`--jb-control-height-lg`,inherits:!0,value:`3rem`,initialValue:`48px`,syntax:`<length-percentage>`}),O({name:`--jb-control-height-xl`,inherits:!0,value:`4rem`,initialValue:`64px`,syntax:`<length-percentage>`}),et()}var M,nt,rt,it,at,ot,N,st,ct,lt,ut,dt=t((()=>{M=class{get value(){return`oklch(${this.lightness} ${this.chroma} ${this.hue})`}constructor(e,t){this.variableName=t,this.lightness=e.lightness,this.chroma=e.chroma,this.hue=e.hue}},nt=new M({lightness:.6,chroma:.26,hue:256},`--jb-primary`),rt=new M({lightness:.6,chroma:.26,hue:286},`--jb-secondary`),it=new M({lightness:.75,chroma:.18,hue:70},`--jb-yellow`),at=new M({lightness:.68,chroma:.1484,hue:162.1},`--jb-green`),ot=new M({lightness:.6,chroma:.22,hue:23.21},`--jb-red`),N={single:{black:new M({lightness:.14,chroma:0,hue:0},`--jb-black`),white:new M({lightness:1,chroma:0,hue:0},`--jb-white`),highlight:new M({lightness:.93,chroma:.2302,hue:125.18},`--jb-highlight`)},neutral:[E(0),E(1),E(2),E(3),E(4),E(5),E(6),E(7),E(8),E(9),E(10)],primary:D(nt),secondary:D(rt),yellow:D(it),green:D(at),red:D(ot)},st=globalThis.HTMLElement??class{},ct=[`xs`,`sm`,`md`,`lg`,`xl`],lt=[`primary`,`secondary`,`positive`,`danger`,`warning`,`light`,`dark`],ut=class extends st{get size(){let e=this.getAttribute(`size`);return ct.includes(e)?e:`md`}set size(e){this.setAttribute(`size`,e)}get color(){let e=this.getAttribute(`color`);return lt.includes(e)?e:null}set color(e){e===null?this.removeAttribute(`color`):this.setAttribute(`color`,e)}constructor(){super(),tt();let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{--icon-size:var(--jb-icon-size,1.5rem);--icon-color:var(--jb-icon-color,currentColor);--icon-color-complementary:var(--jb-icon-color-complementary,var(--jb-primary));--icon-stroke-width-thin:48;--icon-stroke-width:64;--icon-stroke-width-thick:96;height:var(--icon-size)}:host([size=xs]){--icon-size:var(--jb-icon-size-xs,1rem)}:host([size=sm]){--icon-size:var(--jb-icon-size-sm,1.25rem)}:host([size=md]){--icon-size:var(--jb-icon-size-md,1.5rem)}:host([size=lg]){--icon-size:var(--jb-icon-size-lg,1.75rem)}:host([size=xl]){--icon-size:var(--jb-icon-size-xl,2.25rem)}:host([color=primary]){--icon-color:var(--jb-icon-color-primary,var(--jb-primary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-primary,var(--jb-icon-color-complementary,var(--jb-secondary)))}:host([color=secondary]){--icon-color:var(--jb-icon-color-secondary,var(--jb-secondary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-secondary,var(--jb-icon-color-complementary,var(--jb-primary)))}:host([color=positive]){--icon-color:var(--jb-icon-color-positive,var(--jb-green,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-positive,var(--jb-icon-color-complementary,var(--jb-green-subtle)))}:host([color=danger]){--icon-color:var(--jb-icon-color-danger,var(--jb-red,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-danger,var(--jb-icon-color-complementary,var(--jb-red-subtle)))}:host([color=warning]){--icon-color:var(--jb-icon-color-warning,var(--jb-yellow,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-warning,var(--jb-icon-color-complementary,var(--jb-yellow-subtle)))}:host([color=light]){--icon-color:var(--jb-icon-color-light,var(--jb-neutral-10,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-light,var(--jb-icon-color-complementary,var(--jb-neutral)))}:host([color=dark]){--icon-color:var(--jb-icon-color-dark,var(--jb-neutral,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-dark,var(--jb-icon-color-complementary,var(--jb-content-inverse)))}
:host{aspect-ratio:1;line-height:0;display:inline-block}svg{box-sizing:border-box;width:auto;height:100%;display:block}.frame{fill:var(--icon-color)}.highlight{fill:var(--icon-color-complementary)}</style>

    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" part="svg">
      <path class="frame" part="frame" d="m789.333333 0c-114.812501 0-210.458333 82.947917-230.593749 192h-93.479168c-20.135416-109.052083-115.781248-192-230.593749-192-129.385416 0-234.666667 105.281251-234.666667 234.666667s105.281251 234.666667 234.666667 234.666667c114.812501 0 210.458333-82.947917 230.593749-192h93.479168c20.135416 109.052083 115.781248 192 230.593749 192 56.687499 0 108.739584-20.197917 149.333333-53.781251v565.781251c0 23.552083 19.114584 42.666667 42.666667 42.666667s42.666667-19.114584 42.666667-42.666667v-746.666667c0-129.385416-105.281251-234.666667-234.666667-234.666667zm-554.666667 384c-82.322917 0-149.333333-66.989584-149.333333-149.333333s67.010416-149.333333 149.333333-149.333333 149.333333 66.989584 149.333333 149.333333-67.010416 149.333333-149.333333 149.333333zm554.666667 0c-82.322917 0-149.333333-66.989584-149.333333-149.333333s67.010416-149.333333 149.333333-149.333333 149.333333 66.989584 149.333333 149.333333-67.010416 149.333333-149.333333 149.333333z"></path>
      <path class="highlight" part="highlight" d="m798.166667 136.833333c-23.552083 0-42.666667 19.114584-42.666667 42.666667s19.114584 42.666667 42.666667 42.666667c6.885416 0 12.5 5.604165 12.5 12.5 0 23.552083 19.114584 42.666667 42.666667 42.666667s42.666667-19.114584 42.666667-42.666667c0-53.947917-43.906251-97.833333-97.833333-97.833333z"></path>
      <path class="highlight" part="highlight" d="m243.5 136.833333c-23.552083 0-42.666667 19.114584-42.666667 42.666667s19.114584 42.666667 42.666667 42.666667c6.885416 0 12.5 5.604165 12.5 12.5 0 23.552083 19.114584 42.666667 42.666667 42.666667s42.666667-19.114584 42.666667-42.666667c0-53.947917-43.906251-97.833333-97.833333-97.833333z"></path>
    </svg>
  `,e.appendChild(t.content.cloneNode(!0))}},typeof window>`u`||window.customElements.get(`jb-icon-lorgnette`)||window.customElements.define(`jb-icon-lorgnette`,ut)})),ft=t((()=>{dt()})),pt=t((()=>{})),mt=e({Animations:()=>Q,Colors:()=>X,Gallery:()=>J,Playground:()=>K,ReactJsx:()=>q,Sizes:()=>Y,Spin:()=>$,StrokeWidths:()=>Z,__namedExportsOrder:()=>bt,default:()=>G});function P({icon:e,size:t=`md`,color:n,long:r}){return(0,I.createElement)(`jb-icon-${e}`,{size:t,color:n,long:r,"aria-label":`${e} icon`})}function F({icon:e,size:t=`md`,color:n}){let r=(0,I.useRef)(null),i=t=>{let n=r.current;if(n)switch(e){case`delete`:n.isOpen=t;break;case`edit`:n.isActive=t;break;case`expand`:n.isExpanded=t;break;case`eye`:n.open=t;break;case`refresh`:case`search`:n.isLoading=t;break}};return(0,I.createElement)(`jb-icon-${e}`,{ref:r,size:t,color:n,"aria-label":`${e} icon`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)})}function ht(){let e=(0,I.useRef)(null),[t,n]=(0,I.useState)(!1),[r,i]=(0,I.useState)(!1),[a,ee]=(0,I.useState)(!1),[o,te]=(0,I.useState)(!1),[s,ne]=(0,I.useState)(!1),[c,re]=(0,I.useState)(!1),ie=()=>{let t=!o;te(t);let n=e.current?.querySelector(`jb-icon-eye`);n&&(n.open=t)},l=()=>{let r=!t;n(r);let i=e.current?.querySelector(`jb-icon-delete`);i&&(i.isOpen=r)},ae=()=>{let t=!r;i(t);let n=e.current?.querySelector(`jb-icon-edit`);n&&(n.isActive=t)},oe=()=>{let t=!a;ee(t);let n=e.current?.querySelector(`jb-icon-expand`);n&&(n.isExpanded=t)},se=()=>{let t=!s;ne(t);let n=e.current?.querySelector(`jb-icon-refresh`);n&&(n.isLoading=t)},ce=()=>{let t=!c;re(t);let n=e.current?.querySelector(`jb-icon-search`);n&&(n.isLoading=t)},u=t=>{let n=e.current?.querySelector(t);n&&(n.spin=180)};return(0,L.jsxs)(`div`,{className:`icon-actions`,ref:e,children:[(0,L.jsxs)(`section`,{className:`icon-action-card`,children:[(0,L.jsx)(P,{icon:`delete`,size:`xl`,color:`danger`}),(0,L.jsx)(`strong`,{children:`Delete`}),(0,L.jsx)(`button`,{type:`button`,onClick:l,children:t?`Close`:`Open`})]}),(0,L.jsxs)(`section`,{className:`icon-action-card`,children:[(0,L.jsx)(P,{icon:`edit`,size:`xl`,color:`primary`}),(0,L.jsx)(`strong`,{children:`Edit`}),(0,L.jsx)(`button`,{type:`button`,onClick:ae,children:r?`Deactivate`:`Activate`})]}),(0,L.jsxs)(`section`,{className:`icon-action-card`,children:[(0,L.jsx)(P,{icon:`expand`,size:`xl`,color:`primary`}),(0,L.jsx)(`strong`,{children:`Expand`}),(0,L.jsx)(`button`,{type:`button`,onClick:oe,children:a?`Collapse`:`Expand`})]}),(0,L.jsxs)(`section`,{className:`icon-action-card`,children:[(0,L.jsx)(P,{icon:`eye`,size:`xl`,color:`dark`}),(0,L.jsx)(`strong`,{children:`Eye`}),(0,L.jsx)(`button`,{type:`button`,onClick:ie,children:o?`Close`:`Open`})]}),(0,L.jsxs)(`section`,{className:`icon-action-card`,children:[(0,L.jsx)(P,{icon:`refresh`,size:`xl`,color:`positive`}),(0,L.jsx)(`strong`,{children:`Refresh`}),(0,L.jsx)(`button`,{type:`button`,onClick:se,children:s?`Stop`:`Start`})]}),(0,L.jsxs)(`section`,{className:`icon-action-card`,children:[(0,L.jsx)(P,{icon:`search`,size:`xl`,color:`secondary`}),(0,L.jsx)(`strong`,{children:`Search`}),(0,L.jsx)(`button`,{type:`button`,onClick:ce,children:c?`Stop`:`Start`})]}),(0,L.jsxs)(`section`,{className:`icon-action-card`,children:[(0,L.jsx)(P,{icon:`arrow`,size:`xl`,color:`primary`}),(0,L.jsx)(`strong`,{children:`Arrow`}),(0,L.jsx)(`button`,{type:`button`,onClick:()=>u(`jb-icon-arrow`),children:`Spin 180°`})]}),(0,L.jsxs)(`section`,{className:`icon-action-card`,children:[(0,L.jsx)(P,{icon:`arrow-tailed`,size:`xl`,color:`primary`}),(0,L.jsx)(`strong`,{children:`Arrow Tailed`}),(0,L.jsx)(`button`,{type:`button`,onClick:()=>u(`jb-icon-arrow-tailed`),children:`Spin 180°`})]}),(0,L.jsxs)(`section`,{className:`icon-action-card`,children:[(0,L.jsx)(P,{icon:`triangle`,size:`xl`,color:`primary`}),(0,L.jsx)(`strong`,{children:`Triangle`}),(0,L.jsx)(`button`,{type:`button`,onClick:()=>u(`jb-icon-triangle`),children:`Spin 180°`})]})]})}function gt(){let e=(0,I.useRef)(null),[t,n]=(0,I.useState)(`up`),[r,i]=(0,I.useState)(0);return(0,I.useEffect)(()=>{e.current?.querySelectorAll(`[data-spin-icon]`).forEach(e=>{e.spin=r})},[r]),(0,L.jsxs)(`div`,{className:`spin-demo`,ref:e,children:[(0,L.jsxs)(`header`,{className:`spin-demo-header`,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`h3`,{children:`Absolute spin`}),(0,L.jsx)(`p`,{children:`Each angle is measured from the selected original direction. Set the angle to 0° to restore it.`})]}),(0,L.jsxs)(`label`,{children:[`Original direction`,(0,L.jsx)(`select`,{value:t,onChange:e=>n(e.target.value),children:vt.map(e=>(0,L.jsx)(`option`,{value:e,children:e},e))})]})]}),(0,L.jsxs)(`div`,{className:`spin-angle-control`,children:[(0,L.jsxs)(`label`,{htmlFor:`spin-angle`,children:[`Spin angle`,(0,L.jsxs)(`output`,{children:[r,`°`]})]}),(0,L.jsx)(`input`,{id:`spin-angle`,type:`range`,min:`-360`,max:`360`,step:`15`,value:r,onChange:e=>i(e.target.valueAsNumber)}),(0,L.jsxs)(`fieldset`,{className:`spin-presets`,children:[(0,L.jsx)(`legend`,{children:`Spin angle presets`}),(0,L.jsx)(`div`,{children:yt.map(e=>(0,L.jsxs)(`button`,{type:`button`,"aria-label":`Set spin to ${e} degrees`,"aria-pressed":r===e,onClick:()=>i(e),children:[e,`°`]},e))})]})]}),(0,L.jsx)(`div`,{className:`spin-icon-grid`,children:W.map(e=>(0,I.createElement)(`section`,{className:`spin-icon-card`,key:e},(0,I.createElement)(`jb-icon-${e}`,{direction:t,size:`xl`,color:`primary`,"data-spin-icon":``,"data-testid":`spin-${e}`,"aria-label":`${t} ${e} with ${r} degree spin`}),(0,I.createElement)(`strong`,null,e),(0,I.createElement)(`code`,null,`${t} + ${r}°`)))})]})}var I,L,R,z,B,V,_t,H,U,W,vt,yt,G,K,q,J,Y,X,Z,Q,$,bt,xt=t((()=>{I=n(r(),1),a(),s(),we(),Ge(),ne(),ee(),re(),ft(),c(),ie(),o(),te(),pt(),L=i(),{expect:R,userEvent:z,waitFor:B,within:V}=__STORYBOOK_MODULE_TEST__,_t=[`arrow`,`arrow-tailed`,`close`,`delete`,`edit`,`expand`,`eye`,`filter`,`lorgnette`,`refresh`,`search`,`triangle`],H=[`xs`,`sm`,`md`,`lg`,`xl`],U=[`primary`,`secondary`,`positive`,`danger`,`warning`,`light`,`dark`],W=[`arrow`,`arrow-tailed`,`triangle`],vt=[`up`,`right`,`down`,`left`,`inline-start`,`inline-end`],yt=[-180,-90,0,90,180,360],G={title:`Components/JBIcons`,args:{icon:`edit`,size:`xl`,color:`primary`,long:!1},argTypes:{icon:{control:`select`,options:_t},size:{control:`select`,options:H},color:{control:`select`,options:U},long:{control:`boolean`,if:{arg:`icon`,eq:`arrow-tailed`}}},parameters:{layout:`centered`}},K={render:e=>(0,L.jsx)(`div`,{className:`icon-preview ${e.color===`light`?`icon-preview--dark`:``}`,children:(0,L.jsx)(P,{...e})})},q={render:()=>(0,L.jsxs)(`div`,{className:`icon-row`,children:[(0,L.jsx)(`jb-icon-arrow`,{direction:`inline-end`,size:`lg`,color:`primary`,"aria-label":`React JSX arrow`}),(0,L.jsx)(`jb-icon-triangle`,{direction:`down`,size:`lg`,color:`secondary`,round:60,"aria-label":`React JSX triangle`}),(0,L.jsx)(`jb-icon-eye`,{open:!0,size:`lg`,color:`positive`,"aria-label":`React JSX eye`})]}),play:async({canvasElement:e})=>{let t=V(e);R(t.getByLabelText(`React JSX arrow`)).toBeTruthy(),R(t.getByLabelText(`React JSX triangle`)).toBeTruthy(),R(t.getByLabelText(`React JSX eye`)).toBeTruthy()}},J={render:()=>(0,L.jsxs)(`div`,{className:`icon-gallery`,children:[(0,L.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,L.jsxs)(`div`,{className:`arrow-directions`,children:[(0,I.createElement)(`jb-icon-arrow`,{direction:`up`,size:`xl`,"aria-label":`up arrow`}),(0,I.createElement)(`jb-icon-arrow`,{direction:`right`,size:`xl`,"aria-label":`right arrow`}),(0,I.createElement)(`jb-icon-arrow`,{direction:`down`,size:`xl`,"aria-label":`down arrow`}),(0,I.createElement)(`jb-icon-arrow`,{direction:`left`,size:`xl`,"aria-label":`left arrow`}),(0,I.createElement)(`jb-icon-arrow`,{direction:`inline-start`,size:`xl`,"aria-label":`inline-start arrow`}),(0,I.createElement)(`jb-icon-arrow`,{direction:`inline-end`,size:`xl`,"aria-label":`inline-end arrow`})]}),(0,L.jsx)(`code`,{children:`jb-icon-arrow`})]}),(0,L.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,L.jsxs)(`div`,{className:`arrow-directions`,children:[(0,I.createElement)(`jb-icon-arrow`,{direction:`up`,size:`xl`,"end-line":``,"aria-label":`up arrow with end line`}),(0,I.createElement)(`jb-icon-arrow`,{direction:`right`,size:`xl`,"end-line":``,"aria-label":`right arrow with end line`}),(0,I.createElement)(`jb-icon-arrow`,{direction:`down`,size:`xl`,"end-line":``,"aria-label":`down arrow with end line`}),(0,I.createElement)(`jb-icon-arrow`,{direction:`left`,size:`xl`,"end-line":``,"aria-label":`left arrow with end line`}),(0,I.createElement)(`jb-icon-arrow`,{direction:`inline-start`,size:`xl`,"end-line":``,"aria-label":`inline-start arrow with end line`}),(0,I.createElement)(`jb-icon-arrow`,{direction:`inline-end`,size:`xl`,"end-line":``,"aria-label":`inline-end arrow with end line`})]}),(0,L.jsx)(`code`,{children:`jb-icon-arrow`}),(0,L.jsx)(`code`,{children:`end-line`})]}),(0,L.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,L.jsxs)(`div`,{className:`arrow-directions`,children:[(0,I.createElement)(`jb-icon-arrow-tailed`,{direction:`up`,size:`xl`,"aria-label":`up tailed arrow`}),(0,I.createElement)(`jb-icon-arrow-tailed`,{direction:`right`,size:`xl`,"aria-label":`right tailed arrow`}),(0,I.createElement)(`jb-icon-arrow-tailed`,{direction:`down`,size:`xl`,"aria-label":`down tailed arrow`}),(0,I.createElement)(`jb-icon-arrow-tailed`,{direction:`left`,size:`xl`,"aria-label":`left tailed arrow`}),(0,I.createElement)(`jb-icon-arrow-tailed`,{direction:`inline-start`,size:`xl`,"aria-label":`inline-start tailed arrow`}),(0,I.createElement)(`jb-icon-arrow-tailed`,{direction:`inline-end`,size:`xl`,"aria-label":`inline-end tailed arrow`})]}),(0,L.jsx)(`code`,{children:`jb-icon-arrow-tailed`})]}),(0,L.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,L.jsxs)(`div`,{className:`arrow-directions`,children:[(0,I.createElement)(`jb-icon-arrow-tailed`,{direction:`up`,size:`xl`,long:!0,"aria-label":`long up tailed arrow`}),(0,I.createElement)(`jb-icon-arrow-tailed`,{direction:`right`,size:`xl`,long:!0,"aria-label":`long right tailed arrow`}),(0,I.createElement)(`jb-icon-arrow-tailed`,{direction:`down`,size:`xl`,long:!0,"aria-label":`long down tailed arrow`}),(0,I.createElement)(`jb-icon-arrow-tailed`,{direction:`left`,size:`xl`,long:!0,"aria-label":`long left tailed arrow`}),(0,I.createElement)(`jb-icon-arrow-tailed`,{direction:`inline-start`,size:`xl`,long:!0,"aria-label":`long inline-start tailed arrow`}),(0,I.createElement)(`jb-icon-arrow-tailed`,{direction:`inline-end`,size:`xl`,long:!0,"aria-label":`long inline-end tailed arrow`})]}),(0,L.jsx)(`code`,{children:`jb-icon-arrow-tailed`}),(0,L.jsx)(`code`,{children:`long`})]}),(0,L.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,L.jsxs)(`div`,{className:`arrow-directions`,children:[(0,I.createElement)(`jb-icon-triangle`,{direction:`up`,size:`xl`,"aria-label":`up triangle`}),(0,I.createElement)(`jb-icon-triangle`,{direction:`right`,size:`xl`,"aria-label":`right triangle`}),(0,I.createElement)(`jb-icon-triangle`,{direction:`down`,size:`xl`,"aria-label":`down triangle`}),(0,I.createElement)(`jb-icon-triangle`,{direction:`left`,size:`xl`,"aria-label":`left triangle`}),(0,I.createElement)(`jb-icon-triangle`,{direction:`inline-start`,size:`xl`,"aria-label":`inline-start triangle`}),(0,I.createElement)(`jb-icon-triangle`,{direction:`inline-end`,size:`xl`,"aria-label":`inline-end triangle`})]}),(0,L.jsx)(`code`,{children:`jb-icon-triangle`})]}),(0,L.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,L.jsx)(F,{icon:`close`,size:`xl`}),(0,L.jsx)(`code`,{children:`jb-icon-close`})]}),(0,L.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,L.jsx)(F,{icon:`delete`,size:`xl`}),(0,L.jsx)(`code`,{children:`jb-icon-delete`})]}),(0,L.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,L.jsx)(F,{icon:`edit`,size:`xl`}),(0,L.jsx)(`code`,{children:`jb-icon-edit`})]}),(0,L.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,L.jsx)(F,{icon:`expand`,size:`xl`}),(0,L.jsx)(`code`,{children:`jb-icon-expand`})]}),(0,L.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,L.jsx)(F,{icon:`eye`,size:`xl`}),(0,L.jsx)(`code`,{children:`jb-icon-eye`})]}),(0,L.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,L.jsx)(F,{icon:`filter`,size:`xl`}),(0,L.jsx)(`code`,{children:`jb-icon-filter`})]}),(0,L.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,L.jsx)(P,{icon:`lorgnette`,size:`xl`}),(0,L.jsx)(`code`,{children:`jb-icon-lorgnette`})]}),(0,L.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,L.jsx)(F,{icon:`refresh`,size:`xl`}),(0,L.jsx)(`code`,{children:`jb-icon-refresh`})]}),(0,L.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,L.jsx)(F,{icon:`search`,size:`xl`}),(0,L.jsx)(`code`,{children:`jb-icon-search`})]})]})},Y={render:e=>(0,L.jsx)(`div`,{className:`icon-row`,children:H.map(t=>(0,L.jsxs)(`div`,{className:`icon-variant`,children:[(0,L.jsx)(P,{icon:e.icon,size:t,color:e.color}),(0,L.jsx)(`code`,{children:t})]},t))})},X={render:e=>(0,L.jsx)(`div`,{className:`icon-color-grid`,children:U.map(t=>(0,L.jsxs)(`div`,{className:`icon-variant ${t===`light`?`icon-variant--dark`:``}`,children:[(0,L.jsx)(F,{icon:e.icon,size:`xl`,color:t}),(0,L.jsx)(`code`,{children:t})]},t))})},Z={render:()=>(0,L.jsx)(`div`,{className:`icon-row`,children:[{label:`Thin`,value:48},{label:`Standard`,value:64},{label:`Thick`,value:96}].map(({label:e,value:t})=>(0,L.jsxs)(`div`,{className:`icon-variant`,children:[(0,L.jsx)(`jb-icon-arrow`,{direction:`right`,size:`xl`,color:`primary`,style:{"--icon-stroke-width":t},"aria-label":`${e} stroke`}),(0,L.jsxs)(`code`,{children:[e,` (`,t,`)`]})]},e))}),play:async({canvasElement:e})=>{let t=V(e);for(let e of[`Thin`,`Standard`,`Thick`])R(t.getByLabelText(`${e} stroke`)).toBeTruthy()}},Q={render:()=>(0,L.jsx)(ht,{})},$={render:()=>(0,L.jsx)(gt,{}),play:async({canvasElement:e})=>{let t=V(e),n=W.map(e=>t.getByTestId(`spin-${e}`));await z.click(t.getByRole(`button`,{name:`Set spin to 180 degrees`})),await B(()=>{n.forEach(e=>{R(e.spin).toBe(180);let t=(e.shadowRoot?.querySelector(`.spin-icon`)?.getAnimations().at(-1)?.effect)?.getKeyframes().at(-1);R(t?.transform).toBe(`rotate(180deg)`)})}),await z.click(t.getByRole(`button`,{name:`Set spin to 0 degrees`})),await B(()=>{n.forEach(e=>{R(e.spin).toBe(0);let t=(e.shadowRoot?.querySelector(`.spin-icon`)?.getAnimations().at(-1)?.effect)?.getKeyframes().at(-1);R(t?.transform).toBe(`rotate(0deg)`)})})}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <div className={\`icon-preview \${args.color === "light" ? "icon-preview--dark" : ""}\`}>
      <Icon {...args} />
    </div>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="icon-row">
      <jb-icon-arrow direction="inline-end" size="lg" color="primary" aria-label="React JSX arrow" />
      <jb-icon-triangle direction="down" size="lg" color="secondary" round={60} aria-label="React JSX triangle" />
      <jb-icon-eye open size="lg" color="positive" aria-label="React JSX eye" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByLabelText("React JSX arrow")).toBeTruthy();
    expect(canvas.getByLabelText("React JSX triangle")).toBeTruthy();
    expect(canvas.getByLabelText("React JSX eye")).toBeTruthy();
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div className="icon-gallery">
      <div className="icon-gallery-item">
        <div className="arrow-directions">
          {createElement("jb-icon-arrow", {
          direction: "up",
          size: "xl",
          "aria-label": "up arrow"
        })}
          {createElement("jb-icon-arrow", {
          direction: "right",
          size: "xl",
          "aria-label": "right arrow"
        })}
          {createElement("jb-icon-arrow", {
          direction: "down",
          size: "xl",
          "aria-label": "down arrow"
        })}
          {createElement("jb-icon-arrow", {
          direction: "left",
          size: "xl",
          "aria-label": "left arrow"
        })}
          {createElement("jb-icon-arrow", {
          direction: "inline-start",
          size: "xl",
          "aria-label": "inline-start arrow"
        })}
          {createElement("jb-icon-arrow", {
          direction: "inline-end",
          size: "xl",
          "aria-label": "inline-end arrow"
        })}
        </div>
        <code>jb-icon-arrow</code>
      </div>
      <div className="icon-gallery-item">
        <div className="arrow-directions">
          {createElement("jb-icon-arrow", {
          direction: "up",
          size: "xl",
          "end-line": "",
          "aria-label": "up arrow with end line"
        })}
          {createElement("jb-icon-arrow", {
          direction: "right",
          size: "xl",
          "end-line": "",
          "aria-label": "right arrow with end line"
        })}
          {createElement("jb-icon-arrow", {
          direction: "down",
          size: "xl",
          "end-line": "",
          "aria-label": "down arrow with end line"
        })}
          {createElement("jb-icon-arrow", {
          direction: "left",
          size: "xl",
          "end-line": "",
          "aria-label": "left arrow with end line"
        })}
          {createElement("jb-icon-arrow", {
          direction: "inline-start",
          size: "xl",
          "end-line": "",
          "aria-label": "inline-start arrow with end line"
        })}
          {createElement("jb-icon-arrow", {
          direction: "inline-end",
          size: "xl",
          "end-line": "",
          "aria-label": "inline-end arrow with end line"
        })}
        </div>
        <code>jb-icon-arrow</code>
        <code>end-line</code>
      </div>
      <div className="icon-gallery-item">
        <div className="arrow-directions">
          {createElement("jb-icon-arrow-tailed", {
          direction: "up",
          size: "xl",
          "aria-label": "up tailed arrow"
        })}
          {createElement("jb-icon-arrow-tailed", {
          direction: "right",
          size: "xl",
          "aria-label": "right tailed arrow"
        })}
          {createElement("jb-icon-arrow-tailed", {
          direction: "down",
          size: "xl",
          "aria-label": "down tailed arrow"
        })}
          {createElement("jb-icon-arrow-tailed", {
          direction: "left",
          size: "xl",
          "aria-label": "left tailed arrow"
        })}
          {createElement("jb-icon-arrow-tailed", {
          direction: "inline-start",
          size: "xl",
          "aria-label": "inline-start tailed arrow"
        })}
          {createElement("jb-icon-arrow-tailed", {
          direction: "inline-end",
          size: "xl",
          "aria-label": "inline-end tailed arrow"
        })}
        </div>
        <code>jb-icon-arrow-tailed</code>
      </div>
      <div className="icon-gallery-item">
        <div className="arrow-directions">
          {createElement("jb-icon-arrow-tailed", {
          direction: "up",
          size: "xl",
          long: true,
          "aria-label": "long up tailed arrow"
        })}
          {createElement("jb-icon-arrow-tailed", {
          direction: "right",
          size: "xl",
          long: true,
          "aria-label": "long right tailed arrow"
        })}
          {createElement("jb-icon-arrow-tailed", {
          direction: "down",
          size: "xl",
          long: true,
          "aria-label": "long down tailed arrow"
        })}
          {createElement("jb-icon-arrow-tailed", {
          direction: "left",
          size: "xl",
          long: true,
          "aria-label": "long left tailed arrow"
        })}
          {createElement("jb-icon-arrow-tailed", {
          direction: "inline-start",
          size: "xl",
          long: true,
          "aria-label": "long inline-start tailed arrow"
        })}
          {createElement("jb-icon-arrow-tailed", {
          direction: "inline-end",
          size: "xl",
          long: true,
          "aria-label": "long inline-end tailed arrow"
        })}
        </div>
        <code>jb-icon-arrow-tailed</code>
        <code>long</code>
      </div>
      <div className="icon-gallery-item">
        <div className="arrow-directions">
          {createElement("jb-icon-triangle", {
          direction: "up",
          size: "xl",
          "aria-label": "up triangle"
        })}
          {createElement("jb-icon-triangle", {
          direction: "right",
          size: "xl",
          "aria-label": "right triangle"
        })}
          {createElement("jb-icon-triangle", {
          direction: "down",
          size: "xl",
          "aria-label": "down triangle"
        })}
          {createElement("jb-icon-triangle", {
          direction: "left",
          size: "xl",
          "aria-label": "left triangle"
        })}
          {createElement("jb-icon-triangle", {
          direction: "inline-start",
          size: "xl",
          "aria-label": "inline-start triangle"
        })}
          {createElement("jb-icon-triangle", {
          direction: "inline-end",
          size: "xl",
          "aria-label": "inline-end triangle"
        })}
        </div>
        <code>jb-icon-triangle</code>
      </div>
      <div className="icon-gallery-item">
        <HoverAnimatedIcon icon="close" size="xl" />
        <code>jb-icon-close</code>
      </div>
      <div className="icon-gallery-item">
        <HoverAnimatedIcon icon="delete" size="xl" />
        <code>jb-icon-delete</code>
      </div>
      <div className="icon-gallery-item">
        <HoverAnimatedIcon icon="edit" size="xl" />
        <code>jb-icon-edit</code>
      </div>
      <div className="icon-gallery-item">
        <HoverAnimatedIcon icon="expand" size="xl" />
        <code>jb-icon-expand</code>
      </div>
      <div className="icon-gallery-item">
        <HoverAnimatedIcon icon="eye" size="xl" />
        <code>jb-icon-eye</code>
      </div>
      <div className="icon-gallery-item">
        <HoverAnimatedIcon icon="filter" size="xl" />
        <code>jb-icon-filter</code>
      </div>
      <div className="icon-gallery-item">
        <Icon icon="lorgnette" size="xl" />
        <code>jb-icon-lorgnette</code>
      </div>
      <div className="icon-gallery-item">
        <HoverAnimatedIcon icon="refresh" size="xl" />
        <code>jb-icon-refresh</code>
      </div>
      <div className="icon-gallery-item">
        <HoverAnimatedIcon icon="search" size="xl" />
        <code>jb-icon-search</code>
      </div>
    </div>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <div className="icon-row">
      {iconSizes.map(size => <div className="icon-variant" key={size}>
          <Icon icon={args.icon} size={size} color={args.color} />
          <code>{size}</code>
        </div>)}
    </div>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <div className="icon-color-grid">
      {iconColors.map(color => <div className={\`icon-variant \${color === "light" ? "icon-variant--dark" : ""}\`} key={color}>
          <HoverAnimatedIcon icon={args.icon} size="xl" color={color} />
          <code>{color}</code>
        </div>)}
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="icon-row">
      {[{
      label: "Thin",
      value: 48
    }, {
      label: "Standard",
      value: 64
    }, {
      label: "Thick",
      value: 96
    }].map(({
      label,
      value
    }) => <div className="icon-variant" key={label}>
          <jb-icon-arrow direction="right" size="xl" color="primary" style={{
        "--icon-stroke-width": value
      } as CSSProperties} aria-label={\`\${label} stroke\`} />
          <code>
            {label} ({value})
          </code>
        </div>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const label of ["Thin", "Standard", "Thick"]) {
      expect(canvas.getByLabelText(\`\${label} stroke\`)).toBeTruthy();
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <AnimationExamples />
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <SpinExamples />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const icons = spinIconNames.map(icon => canvas.getByTestId(\`spin-\${icon}\`) as AnimatedIconElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Set spin to 180 degrees"
    }));
    await waitFor(() => {
      icons.forEach(icon => {
        expect(icon.spin).toBe(180);
        const animation = icon.shadowRoot?.querySelector(".spin-icon")?.getAnimations().at(-1);
        const finalKeyframe = (animation?.effect as KeyframeEffect | null)?.getKeyframes().at(-1);
        expect(finalKeyframe?.transform).toBe("rotate(180deg)");
      });
    });
    await userEvent.click(canvas.getByRole("button", {
      name: "Set spin to 0 degrees"
    }));
    await waitFor(() => {
      icons.forEach(icon => {
        expect(icon.spin).toBe(0);
        const animation = icon.shadowRoot?.querySelector(".spin-icon")?.getAnimations().at(-1);
        const finalKeyframe = (animation?.effect as KeyframeEffect | null)?.getKeyframes().at(-1);
        expect(finalKeyframe?.transform).toBe("rotate(0deg)");
      });
    });
  }
}`,...$.parameters?.docs?.source}}},bt=[`Playground`,`ReactJsx`,`Gallery`,`Sizes`,`Colors`,`StrokeWidths`,`Animations`,`Spin`]}));xt();export{Q as Animations,X as Colors,J as Gallery,K as Playground,q as ReactJsx,Y as Sizes,$ as Spin,Z as StrokeWidths,bt as __namedExportsOrder,G as default,xt as n,mt as t};