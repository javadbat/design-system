import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-D24fxiES.js";import{t as a}from"./arrow-DFB3H4so.js";import{t as ee}from"./eye-CEW3zuIy.js";import{a as o,i as te,n as s,o as ne,r as c,t as re}from"./filter-DO9u-8b1.js";import{t as ie}from"./search-cnS18jjB.js";function l(e){return new _({lightness:6*(3+1.3*e)*.01,chroma:.001*(14+.09*e),hue:258.36},`--jb-neutral-${e}`)}function ae(e){return new _({lightness:e.lightness+.07,chroma:e.chroma+.07,hue:e.hue},`${e.variableName}-hover`)}function u(e){return new _({lightness:e.lightness-.1,chroma:e.chroma-.05,hue:e.hue},`${e.variableName}-pressed`)}function d(e){let t=Math.min(e.lightness+.12*(1-e.lightness),.985),n=e.chroma*(1-.15*(t-e.lightness));return new _({lightness:t,chroma:Number(n.toFixed(3)),hue:e.hue},`${e.variableName}-l`)}function oe(e){let t=Math.max(e.lightness-.12*e.lightness,.02);return new _({lightness:t,chroma:e.chroma*(1-.15*(t-e.lightness)),hue:e.hue},`${e.variableName}-d`)}function f(e){let t=Math.min(e.lightness+.65*(1-e.lightness),.93),n=.55*e.chroma*(1-.08*(t-e.lightness)),r=e.hue>=70&&e.hue<=162?5:-3,i=e.hue+r;return new _({lightness:t,chroma:Number(n.toFixed(3)),hue:i},`${e.variableName}-subtle`)}function se(e){let t=Math.max(e.lightness-.35,.22),n=Math.min(1.6*e.chroma,.28);return new _({lightness:Number(t.toFixed(3)),chroma:Number(n.toFixed(3)),hue:e.hue},`${e.variableName}-contrast`)}function p(e){return{main:e,hover:ae(e),pressed:u(e),light:d(e),dark:oe(e),subtle:f(e),contrast:se(e)}}function m(e){try{let{value:t,...n}=e;typeof window.CSS.registerProperty==`function`&&window.CSS.registerProperty({...n}),function(e,t){try{t&&(document.documentElement.style.getPropertyValue(e)||document.documentElement.style.setProperty(e,t))}catch{}}(e.name,t)}catch{}}function ce(e=``){return crypto?.randomUUID?`${e}-${crypto.randomUUID()}`:`${e}-${Date.now()}-${Math.random().toString(36).slice(2)}`}function h(e,t){m({name:t??e.variableName??`--${ce()}`,syntax:`<color>`,inherits:!0,initialValue:e.value})}function g(e){h(e.main),h(e.dark),h(e.light),h(e.contrast),h(e.hover),h(e.pressed),h(e.subtle)}function le(){m({name:`--jb-radius`,inherits:!0,value:`1rem`,initialValue:`16px`,syntax:`<length-percentage>`}),m({name:`--jb-radius-xs`,inherits:!0,value:`0.5rem`,initialValue:`8px`,syntax:`<length-percentage>`}),m({name:`--jb-radius-sm`,inherits:!0,value:`0.75rem`,initialValue:`12px`,syntax:`<length-percentage>`}),m({name:`--jb-radius-lg`,inherits:!0,value:`1.25rem`,initialValue:`20px`,syntax:`<length-percentage>`}),m({name:`--jb-radius-xl`,inherits:!0,value:`1.5rem`,initialValue:`24px`,syntax:`<length-percentage>`}),m({name:`--jb-control-height-xs`,inherits:!0,value:`1.5rem`,initialValue:`24px`,syntax:`<length-percentage>`}),m({name:`--jb-control-height-sm`,inherits:!0,value:`2rem`,initialValue:`32px`,syntax:`<length-percentage>`}),m({name:`--jb-control-height-md`,inherits:!0,value:`2.5rem`,initialValue:`40px`,syntax:`<length-percentage>`}),m({name:`--jb-control-height-lg`,inherits:!0,value:`3rem`,initialValue:`48px`,syntax:`<length-percentage>`}),m({name:`--jb-control-height-xl`,inherits:!0,value:`4rem`,initialValue:`64px`,syntax:`<length-percentage>`}),function(){var e;(function(e){h(e.neutral[0],`--jb-neutral`),g(e.primary),g(e.secondary),g(e.red),g(e.red),g(e.green),g(e.yellow),h(e.single.black),h(e.single.white),h(e.single.highlight);for(let t=1;t<=10;t++)h(e.neutral[t])})(v),h((e=v).single.black,`--jb-text-primary`),h(e.neutral[7],`--jb-text-secondary`),h(e.single.white,`--jb-text-contrast`)}()}var _,ue,de,fe,pe,me,v,he,ge,_e,y,ve=t((()=>{_=class{get value(){return`oklch(${this.lightness} ${this.chroma} ${this.hue})`}constructor(e,t){this.variableName=t,this.lightness=e.lightness,this.chroma=e.chroma,this.hue=e.hue}},ue=new _({lightness:.6,chroma:.26,hue:256},`--jb-primary`),de=new _({lightness:.6,chroma:.26,hue:286},`--jb-secondary`),fe=new _({lightness:.75,chroma:.18,hue:70},`--jb-yellow`),pe=new _({lightness:.68,chroma:.1484,hue:162.1},`--jb-green`),me=new _({lightness:.6,chroma:.22,hue:23.21},`--jb-red`),v={single:{black:new _({lightness:.14,chroma:0,hue:0},`--jb-black`),white:new _({lightness:1,chroma:0,hue:0},`--jb-white`),highlight:new _({lightness:.93,chroma:.2302,hue:125.18},`--jb-highlight`)},neutral:[l(0),l(1),l(2),l(3),l(4),l(5),l(6),l(7),l(8),l(9),l(10)],primary:p(ue),secondary:p(de),yellow:p(fe),green:p(pe),red:p(me)},he=globalThis.HTMLElement??class{},ge=[`xs`,`sm`,`md`,`lg`,`xl`],_e=[`primary`,`secondary`,`positive`,`danger`,`warning`,`light`,`dark`],y=class extends he{#e=!1;#t=null;get isOpen(){return this.#e}set isOpen(e){this.#e!==e&&(e?this.playOpenAnimation():this.playCloseAnimation())}get size(){let e=this.getAttribute(`size`);return ge.includes(e)?e:`md`}set size(e){this.setAttribute(`size`,e)}get color(){let e=this.getAttribute(`color`);return _e.includes(e)?e:null}set color(e){e===null?this.removeAttribute(`color`):this.setAttribute(`color`,e)}constructor(){super(),le();let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{--icon-size:var(--jb-icon-size,1.5rem);--icon-color:var(--jb-icon-color,currentColor);--icon-color-complementary:var(--jb-icon-color-complementary,var(--jb-primary));--icon-stroke-width-thin:48;--icon-stroke-width:64;--icon-stroke-width-thick:96;height:var(--icon-size)}:host([size=xs]){--icon-size:var(--jb-icon-size-xs,1rem)}:host([size=sm]){--icon-size:var(--jb-icon-size-sm,1.25rem)}:host([size=md]){--icon-size:var(--jb-icon-size-md,1.5rem)}:host([size=lg]){--icon-size:var(--jb-icon-size-lg,1.75rem)}:host([size=xl]){--icon-size:var(--jb-icon-size-xl,2.25rem)}:host([color=primary]){--icon-color:var(--jb-icon-color-primary,var(--jb-primary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-primary,var(--jb-icon-color-complementary,var(--jb-secondary)))}:host([color=secondary]){--icon-color:var(--jb-icon-color-secondary,var(--jb-secondary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-secondary,var(--jb-icon-color-complementary,var(--jb-primary)))}:host([color=positive]){--icon-color:var(--jb-icon-color-positive,var(--jb-green,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-positive,var(--jb-icon-color-complementary,var(--jb-green-subtle)))}:host([color=danger]){--icon-color:var(--jb-icon-color-danger,var(--jb-red,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-danger,var(--jb-icon-color-complementary,var(--jb-red-subtle)))}:host([color=warning]){--icon-color:var(--jb-icon-color-warning,var(--jb-yellow,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-warning,var(--jb-icon-color-complementary,var(--jb-yellow-subtle)))}:host([color=light]){--icon-color:var(--jb-icon-color-light,var(--jb-neutral-10,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-light,var(--jb-icon-color-complementary,var(--jb-neutral)))}:host([color=dark]){--icon-color:var(--jb-icon-color-dark,var(--jb-neutral,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-dark,var(--jb-icon-color-complementary,var(--jb-neutral-10)))}
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
  `,e.appendChild(t.content.cloneNode(!0)),this.door=e.querySelector(`.door`)}playOpenAnimation(){return this.#e=!0,this.#t?.cancel(),this.#t=this.door.animate([{transform:`translate(0, 0) rotate(0deg)`},{transform:`translate(-9rem, -5rem) rotate(-18deg)`}],{id:`open`,duration:200,easing:`ease`,fill:`forwards`,iterations:1}),this.#t}playCloseAnimation(){return this.#e=!1,this.#t?.cancel(),this.#t=this.door.animate([{transform:`translate(-9rem, -5rem) rotate(-18deg)`},{transform:`translate(0, 0) rotate(0deg)`}],{id:`close`,duration:200,easing:`ease`,fill:`forwards`,iterations:1}),this.#t}},typeof window>`u`||window.customElements.get(`jb-icon-delete`)||window.customElements.define(`jb-icon-delete`,y)})),ye=t((()=>{ve()}));function b(e){return new T({lightness:6*(3+1.3*e)*.01,chroma:.001*(14+.09*e),hue:258.36},`--jb-neutral-${e}`)}function be(e){return new T({lightness:e.lightness+.07,chroma:e.chroma+.07,hue:e.hue},`${e.variableName}-hover`)}function xe(e){return new T({lightness:e.lightness-.1,chroma:e.chroma-.05,hue:e.hue},`${e.variableName}-pressed`)}function Se(e){let t=Math.min(e.lightness+.12*(1-e.lightness),.985),n=e.chroma*(1-.15*(t-e.lightness));return new T({lightness:t,chroma:Number(n.toFixed(3)),hue:e.hue},`${e.variableName}-l`)}function Ce(e){let t=Math.max(e.lightness-.12*e.lightness,.02);return new T({lightness:t,chroma:e.chroma*(1-.15*(t-e.lightness)),hue:e.hue},`${e.variableName}-d`)}function we(e){let t=Math.min(e.lightness+.65*(1-e.lightness),.93),n=.55*e.chroma*(1-.08*(t-e.lightness)),r=e.hue>=70&&e.hue<=162?5:-3,i=e.hue+r;return new T({lightness:t,chroma:Number(n.toFixed(3)),hue:i},`${e.variableName}-subtle`)}function Te(e){let t=Math.max(e.lightness-.35,.22),n=Math.min(1.6*e.chroma,.28);return new T({lightness:Number(t.toFixed(3)),chroma:Number(n.toFixed(3)),hue:e.hue},`${e.variableName}-contrast`)}function x(e){return{main:e,hover:be(e),pressed:xe(e),light:Se(e),dark:Ce(e),subtle:we(e),contrast:Te(e)}}function S(e){try{let{value:t,...n}=e;typeof window.CSS.registerProperty==`function`&&window.CSS.registerProperty({...n}),function(e,t){try{t&&(document.documentElement.style.getPropertyValue(e)||document.documentElement.style.setProperty(e,t))}catch{}}(e.name,t)}catch{}}function Ee(e=``){return crypto?.randomUUID?`${e}-${crypto.randomUUID()}`:`${e}-${Date.now()}-${Math.random().toString(36).slice(2)}`}function C(e,t){S({name:t??e.variableName??`--${Ee()}`,syntax:`<color>`,inherits:!0,initialValue:e.value})}function w(e){C(e.main),C(e.dark),C(e.light),C(e.contrast),C(e.hover),C(e.pressed),C(e.subtle)}function De(){S({name:`--jb-radius`,inherits:!0,value:`1rem`,initialValue:`16px`,syntax:`<length-percentage>`}),S({name:`--jb-radius-xs`,inherits:!0,value:`0.5rem`,initialValue:`8px`,syntax:`<length-percentage>`}),S({name:`--jb-radius-sm`,inherits:!0,value:`0.75rem`,initialValue:`12px`,syntax:`<length-percentage>`}),S({name:`--jb-radius-lg`,inherits:!0,value:`1.25rem`,initialValue:`20px`,syntax:`<length-percentage>`}),S({name:`--jb-radius-xl`,inherits:!0,value:`1.5rem`,initialValue:`24px`,syntax:`<length-percentage>`}),S({name:`--jb-control-height-xs`,inherits:!0,value:`1.5rem`,initialValue:`24px`,syntax:`<length-percentage>`}),S({name:`--jb-control-height-sm`,inherits:!0,value:`2rem`,initialValue:`32px`,syntax:`<length-percentage>`}),S({name:`--jb-control-height-md`,inherits:!0,value:`2.5rem`,initialValue:`40px`,syntax:`<length-percentage>`}),S({name:`--jb-control-height-lg`,inherits:!0,value:`3rem`,initialValue:`48px`,syntax:`<length-percentage>`}),S({name:`--jb-control-height-xl`,inherits:!0,value:`4rem`,initialValue:`64px`,syntax:`<length-percentage>`}),function(){var e;(function(e){C(e.neutral[0],`--jb-neutral`),w(e.primary),w(e.secondary),w(e.red),w(e.red),w(e.green),w(e.yellow),C(e.single.black),C(e.single.white),C(e.single.highlight);for(let t=1;t<=10;t++)C(e.neutral[t])})(D),C((e=D).single.black,`--jb-text-primary`),C(e.neutral[7],`--jb-text-secondary`),C(e.single.white,`--jb-text-contrast`)}()}var T,Oe,E,ke,Ae,je,D,Me,Ne,Pe,Fe,Ie=t((()=>{T=class{get value(){return`oklch(${this.lightness} ${this.chroma} ${this.hue})`}constructor(e,t){this.variableName=t,this.lightness=e.lightness,this.chroma=e.chroma,this.hue=e.hue}},Oe=new T({lightness:.6,chroma:.26,hue:256},`--jb-primary`),E=new T({lightness:.6,chroma:.26,hue:286},`--jb-secondary`),ke=new T({lightness:.75,chroma:.18,hue:70},`--jb-yellow`),Ae=new T({lightness:.68,chroma:.1484,hue:162.1},`--jb-green`),je=new T({lightness:.6,chroma:.22,hue:23.21},`--jb-red`),D={single:{black:new T({lightness:.14,chroma:0,hue:0},`--jb-black`),white:new T({lightness:1,chroma:0,hue:0},`--jb-white`),highlight:new T({lightness:.93,chroma:.2302,hue:125.18},`--jb-highlight`)},neutral:[b(0),b(1),b(2),b(3),b(4),b(5),b(6),b(7),b(8),b(9),b(10)],primary:x(Oe),secondary:x(E),yellow:x(ke),green:x(Ae),red:x(je)},Me=globalThis.HTMLElement??class{},Ne=[`xs`,`sm`,`md`,`lg`,`xl`],Pe=[`primary`,`secondary`,`positive`,`danger`,`warning`,`light`,`dark`],Fe=class extends Me{get isActive(){return this.hasAttribute(`active`)}set isActive(e){this.toggleAttribute(`active`,e)}get size(){let e=this.getAttribute(`size`);return Ne.includes(e)?e:`md`}set size(e){this.setAttribute(`size`,e)}get color(){let e=this.getAttribute(`color`);return Pe.includes(e)?e:null}set color(e){e===null?this.removeAttribute(`color`):this.setAttribute(`color`,e)}constructor(){super(),De();let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{--icon-size:var(--jb-icon-size,1.5rem);--icon-color:var(--jb-icon-color,currentColor);--icon-color-complementary:var(--jb-icon-color-complementary,var(--jb-primary));--icon-stroke-width-thin:48;--icon-stroke-width:64;--icon-stroke-width-thick:96;height:var(--icon-size)}:host([size=xs]){--icon-size:var(--jb-icon-size-xs,1rem)}:host([size=sm]){--icon-size:var(--jb-icon-size-sm,1.25rem)}:host([size=md]){--icon-size:var(--jb-icon-size-md,1.5rem)}:host([size=lg]){--icon-size:var(--jb-icon-size-lg,1.75rem)}:host([size=xl]){--icon-size:var(--jb-icon-size-xl,2.25rem)}:host([color=primary]){--icon-color:var(--jb-icon-color-primary,var(--jb-primary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-primary,var(--jb-icon-color-complementary,var(--jb-secondary)))}:host([color=secondary]){--icon-color:var(--jb-icon-color-secondary,var(--jb-secondary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-secondary,var(--jb-icon-color-complementary,var(--jb-primary)))}:host([color=positive]){--icon-color:var(--jb-icon-color-positive,var(--jb-green,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-positive,var(--jb-icon-color-complementary,var(--jb-green-subtle)))}:host([color=danger]){--icon-color:var(--jb-icon-color-danger,var(--jb-red,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-danger,var(--jb-icon-color-complementary,var(--jb-red-subtle)))}:host([color=warning]){--icon-color:var(--jb-icon-color-warning,var(--jb-yellow,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-warning,var(--jb-icon-color-complementary,var(--jb-yellow-subtle)))}:host([color=light]){--icon-color:var(--jb-icon-color-light,var(--jb-neutral-10,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-light,var(--jb-icon-color-complementary,var(--jb-neutral)))}:host([color=dark]){--icon-color:var(--jb-icon-color-dark,var(--jb-neutral,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-dark,var(--jb-icon-color-complementary,var(--jb-neutral-10)))}
:host{aspect-ratio:1;line-height:0;display:inline-block}svg{box-sizing:border-box;width:auto;height:100%;display:block;overflow:visible}.pen{fill:none;stroke:var(--icon-color);stroke-width:var(--icon-stroke-width);stroke-linecap:round;stroke-linejoin:round;transform-origin:50%;transform-box:fill-box;transition:transform .3s}.line{fill:none;stroke:var(--icon-color-complementary);stroke-width:var(--icon-stroke-width-thin);stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:60 820;transition:stroke-dasharray .3s}:host([active]) .pen{transform:translate(80px,-96px)rotate(-79deg)}:host([active]) .line{stroke-dasharray:800 60}</style>

    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" part="svg">
      <g class="pen" part="pen">
        <path d="M190 834 232 634 648 218A96 96 0 0 1 784 354L368 770 190 834Z"></path>
        <path d="M232 634 368 770M600 266 736 402"></path>
      </g>
      <path class="line" d="M112 912H912" part="line"></path>
    </svg>
  `,e.appendChild(t.content.cloneNode(!0))}},typeof window>`u`||window.customElements.get(`jb-icon-edit`)||window.customElements.define(`jb-icon-edit`,Fe)})),Le=t((()=>{Ie()}));function O(e){return new N({lightness:6*(3+1.3*e)*.01,chroma:.001*(14+.09*e),hue:258.36},`--jb-neutral-${e}`)}function Re(e){return new N({lightness:e.lightness+.07,chroma:e.chroma+.07,hue:e.hue},`${e.variableName}-hover`)}function ze(e){return new N({lightness:e.lightness-.1,chroma:e.chroma-.05,hue:e.hue},`${e.variableName}-pressed`)}function Be(e){let t=Math.min(e.lightness+.12*(1-e.lightness),.985),n=e.chroma*(1-.15*(t-e.lightness));return new N({lightness:t,chroma:Number(n.toFixed(3)),hue:e.hue},`${e.variableName}-l`)}function Ve(e){let t=Math.max(e.lightness-.12*e.lightness,.02);return new N({lightness:t,chroma:e.chroma*(1-.15*(t-e.lightness)),hue:e.hue},`${e.variableName}-d`)}function He(e){let t=Math.min(e.lightness+.65*(1-e.lightness),.93),n=.55*e.chroma*(1-.08*(t-e.lightness)),r=e.hue>=70&&e.hue<=162?5:-3,i=e.hue+r;return new N({lightness:t,chroma:Number(n.toFixed(3)),hue:i},`${e.variableName}-subtle`)}function Ue(e){let t=Math.max(e.lightness-.35,.22),n=Math.min(1.6*e.chroma,.28);return new N({lightness:Number(t.toFixed(3)),chroma:Number(n.toFixed(3)),hue:e.hue},`${e.variableName}-contrast`)}function k(e){return{main:e,hover:Re(e),pressed:ze(e),light:Be(e),dark:Ve(e),subtle:He(e),contrast:Ue(e)}}function A(e){try{let{value:t,...n}=e;typeof window.CSS.registerProperty==`function`&&window.CSS.registerProperty({...n}),function(e,t){try{t&&(document.documentElement.style.getPropertyValue(e)||document.documentElement.style.setProperty(e,t))}catch{}}(e.name,t)}catch{}}function We(e=``){return crypto?.randomUUID?`${e}-${crypto.randomUUID()}`:`${e}-${Date.now()}-${Math.random().toString(36).slice(2)}`}function j(e,t){A({name:t??e.variableName??`--${We()}`,syntax:`<color>`,inherits:!0,initialValue:e.value})}function M(e){j(e.main),j(e.dark),j(e.light),j(e.contrast),j(e.hover),j(e.pressed),j(e.subtle)}function Ge(){A({name:`--jb-radius`,inherits:!0,value:`1rem`,initialValue:`16px`,syntax:`<length-percentage>`}),A({name:`--jb-radius-xs`,inherits:!0,value:`0.5rem`,initialValue:`8px`,syntax:`<length-percentage>`}),A({name:`--jb-radius-sm`,inherits:!0,value:`0.75rem`,initialValue:`12px`,syntax:`<length-percentage>`}),A({name:`--jb-radius-lg`,inherits:!0,value:`1.25rem`,initialValue:`20px`,syntax:`<length-percentage>`}),A({name:`--jb-radius-xl`,inherits:!0,value:`1.5rem`,initialValue:`24px`,syntax:`<length-percentage>`}),A({name:`--jb-control-height-xs`,inherits:!0,value:`1.5rem`,initialValue:`24px`,syntax:`<length-percentage>`}),A({name:`--jb-control-height-sm`,inherits:!0,value:`2rem`,initialValue:`32px`,syntax:`<length-percentage>`}),A({name:`--jb-control-height-md`,inherits:!0,value:`2.5rem`,initialValue:`40px`,syntax:`<length-percentage>`}),A({name:`--jb-control-height-lg`,inherits:!0,value:`3rem`,initialValue:`48px`,syntax:`<length-percentage>`}),A({name:`--jb-control-height-xl`,inherits:!0,value:`4rem`,initialValue:`64px`,syntax:`<length-percentage>`}),function(){var e;(function(e){j(e.neutral[0],`--jb-neutral`),M(e.primary),M(e.secondary),M(e.red),M(e.red),M(e.green),M(e.yellow),j(e.single.black),j(e.single.white),j(e.single.highlight);for(let t=1;t<=10;t++)j(e.neutral[t])})(F),j((e=F).single.black,`--jb-text-primary`),j(e.neutral[7],`--jb-text-secondary`),j(e.single.white,`--jb-text-contrast`)}()}var N,Ke,qe,Je,P,Ye,F,Xe,Ze,Qe,$e,et=t((()=>{N=class{get value(){return`oklch(${this.lightness} ${this.chroma} ${this.hue})`}constructor(e,t){this.variableName=t,this.lightness=e.lightness,this.chroma=e.chroma,this.hue=e.hue}},Ke=new N({lightness:.6,chroma:.26,hue:256},`--jb-primary`),qe=new N({lightness:.6,chroma:.26,hue:286},`--jb-secondary`),Je=new N({lightness:.75,chroma:.18,hue:70},`--jb-yellow`),P=new N({lightness:.68,chroma:.1484,hue:162.1},`--jb-green`),Ye=new N({lightness:.6,chroma:.22,hue:23.21},`--jb-red`),F={single:{black:new N({lightness:.14,chroma:0,hue:0},`--jb-black`),white:new N({lightness:1,chroma:0,hue:0},`--jb-white`),highlight:new N({lightness:.93,chroma:.2302,hue:125.18},`--jb-highlight`)},neutral:[O(0),O(1),O(2),O(3),O(4),O(5),O(6),O(7),O(8),O(9),O(10)],primary:k(Ke),secondary:k(qe),yellow:k(Je),green:k(P),red:k(Ye)},Xe=globalThis.HTMLElement??class{},Ze=[`xs`,`sm`,`md`,`lg`,`xl`],Qe=[`primary`,`secondary`,`positive`,`danger`,`warning`,`light`,`dark`],$e=class extends Xe{get size(){let e=this.getAttribute(`size`);return Ze.includes(e)?e:`md`}set size(e){this.setAttribute(`size`,e)}get color(){let e=this.getAttribute(`color`);return Qe.includes(e)?e:null}set color(e){e===null?this.removeAttribute(`color`):this.setAttribute(`color`,e)}constructor(){super(),Ge();let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{--icon-size:var(--jb-icon-size,1.5rem);--icon-color:var(--jb-icon-color,currentColor);--icon-color-complementary:var(--jb-icon-color-complementary,var(--jb-primary));--icon-stroke-width-thin:48;--icon-stroke-width:64;--icon-stroke-width-thick:96;height:var(--icon-size)}:host([size=xs]){--icon-size:var(--jb-icon-size-xs,1rem)}:host([size=sm]){--icon-size:var(--jb-icon-size-sm,1.25rem)}:host([size=md]){--icon-size:var(--jb-icon-size-md,1.5rem)}:host([size=lg]){--icon-size:var(--jb-icon-size-lg,1.75rem)}:host([size=xl]){--icon-size:var(--jb-icon-size-xl,2.25rem)}:host([color=primary]){--icon-color:var(--jb-icon-color-primary,var(--jb-primary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-primary,var(--jb-icon-color-complementary,var(--jb-secondary)))}:host([color=secondary]){--icon-color:var(--jb-icon-color-secondary,var(--jb-secondary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-secondary,var(--jb-icon-color-complementary,var(--jb-primary)))}:host([color=positive]){--icon-color:var(--jb-icon-color-positive,var(--jb-green,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-positive,var(--jb-icon-color-complementary,var(--jb-green-subtle)))}:host([color=danger]){--icon-color:var(--jb-icon-color-danger,var(--jb-red,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-danger,var(--jb-icon-color-complementary,var(--jb-red-subtle)))}:host([color=warning]){--icon-color:var(--jb-icon-color-warning,var(--jb-yellow,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-warning,var(--jb-icon-color-complementary,var(--jb-yellow-subtle)))}:host([color=light]){--icon-color:var(--jb-icon-color-light,var(--jb-neutral-10,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-light,var(--jb-icon-color-complementary,var(--jb-neutral)))}:host([color=dark]){--icon-color:var(--jb-icon-color-dark,var(--jb-neutral,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-dark,var(--jb-icon-color-complementary,var(--jb-neutral-10)))}
:host{aspect-ratio:1;line-height:0;display:inline-block}svg{box-sizing:border-box;width:auto;height:100%;display:block}.frame{fill:var(--icon-color)}.highlight{fill:var(--icon-color-complementary)}</style>

    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" part="svg">
      <path class="frame" part="frame" d="m789.333333 0c-114.812501 0-210.458333 82.947917-230.593749 192h-93.479168c-20.135416-109.052083-115.781248-192-230.593749-192-129.385416 0-234.666667 105.281251-234.666667 234.666667s105.281251 234.666667 234.666667 234.666667c114.812501 0 210.458333-82.947917 230.593749-192h93.479168c20.135416 109.052083 115.781248 192 230.593749 192 56.687499 0 108.739584-20.197917 149.333333-53.781251v565.781251c0 23.552083 19.114584 42.666667 42.666667 42.666667s42.666667-19.114584 42.666667-42.666667v-746.666667c0-129.385416-105.281251-234.666667-234.666667-234.666667zm-554.666667 384c-82.322917 0-149.333333-66.989584-149.333333-149.333333s67.010416-149.333333 149.333333-149.333333 149.333333 66.989584 149.333333 149.333333-67.010416 149.333333-149.333333 149.333333zm554.666667 0c-82.322917 0-149.333333-66.989584-149.333333-149.333333s67.010416-149.333333 149.333333-149.333333 149.333333 66.989584 149.333333 149.333333-67.010416 149.333333-149.333333 149.333333z"></path>
      <path class="highlight" part="highlight" d="m798.166667 136.833333c-23.552083 0-42.666667 19.114584-42.666667 42.666667s19.114584 42.666667 42.666667 42.666667c6.885416 0 12.5 5.604165 12.5 12.5 0 23.552083 19.114584 42.666667 42.666667 42.666667s42.666667-19.114584 42.666667-42.666667c0-53.947917-43.906251-97.833333-97.833333-97.833333z"></path>
      <path class="highlight" part="highlight" d="m243.5 136.833333c-23.552083 0-42.666667 19.114584-42.666667 42.666667s19.114584 42.666667 42.666667 42.666667c6.885416 0 12.5 5.604165 12.5 12.5 0 23.552083 19.114584 42.666667 42.666667 42.666667s42.666667-19.114584 42.666667-42.666667c0-53.947917-43.906251-97.833333-97.833333-97.833333z"></path>
    </svg>
  `,e.appendChild(t.content.cloneNode(!0))}},typeof window>`u`||window.customElements.get(`jb-icon-lorgnette`)||window.customElements.define(`jb-icon-lorgnette`,$e)})),tt=t((()=>{et()})),nt=t((()=>{})),rt=e({Animations:()=>Z,Colors:()=>X,Gallery:()=>J,Playground:()=>q,Sizes:()=>Y,Spin:()=>Q,__namedExportsOrder:()=>$,default:()=>K});function I({icon:e,size:t=`md`,color:n,long:r}){return(0,R.createElement)(`jb-icon-${e}`,{size:t,color:n,long:r,"aria-label":`${e} icon`})}function L({icon:e,size:t=`md`,color:n}){let r=(0,R.useRef)(null),i=t=>{let n=r.current;if(n)switch(e){case`delete`:n.isOpen=t;break;case`edit`:n.isActive=t;break;case`expand`:n.isExpanded=t;break;case`eye`:n.open=t;break;case`refresh`:case`search`:n.isLoading=t;break}};return(0,R.createElement)(`jb-icon-${e}`,{ref:r,size:t,color:n,"aria-label":`${e} icon`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)})}function it(){let e=(0,R.useRef)(null),[t,n]=(0,R.useState)(!1),[r,i]=(0,R.useState)(!1),[a,ee]=(0,R.useState)(!1),[o,te]=(0,R.useState)(!1),[s,ne]=(0,R.useState)(!1),[c,re]=(0,R.useState)(!1),ie=()=>{let t=!o;te(t);let n=e.current?.querySelector(`jb-icon-eye`);n&&(n.open=t)},l=()=>{let r=!t;n(r);let i=e.current?.querySelector(`jb-icon-delete`);i&&(i.isOpen=r)},ae=()=>{let t=!r;i(t);let n=e.current?.querySelector(`jb-icon-edit`);n&&(n.isActive=t)},u=()=>{let t=!a;ee(t);let n=e.current?.querySelector(`jb-icon-expand`);n&&(n.isExpanded=t)},d=()=>{let t=!s;ne(t);let n=e.current?.querySelector(`jb-icon-refresh`);n&&(n.isLoading=t)},oe=()=>{let t=!c;re(t);let n=e.current?.querySelector(`jb-icon-search`);n&&(n.isLoading=t)},f=t=>{let n=e.current?.querySelector(t);n&&(n.spin=180)};return(0,z.jsxs)(`div`,{className:`icon-actions`,ref:e,children:[(0,z.jsxs)(`section`,{className:`icon-action-card`,children:[(0,z.jsx)(I,{icon:`delete`,size:`xl`,color:`danger`}),(0,z.jsx)(`strong`,{children:`Delete`}),(0,z.jsx)(`button`,{type:`button`,onClick:l,children:t?`Close`:`Open`})]}),(0,z.jsxs)(`section`,{className:`icon-action-card`,children:[(0,z.jsx)(I,{icon:`edit`,size:`xl`,color:`primary`}),(0,z.jsx)(`strong`,{children:`Edit`}),(0,z.jsx)(`button`,{type:`button`,onClick:ae,children:r?`Deactivate`:`Activate`})]}),(0,z.jsxs)(`section`,{className:`icon-action-card`,children:[(0,z.jsx)(I,{icon:`expand`,size:`xl`,color:`primary`}),(0,z.jsx)(`strong`,{children:`Expand`}),(0,z.jsx)(`button`,{type:`button`,onClick:u,children:a?`Collapse`:`Expand`})]}),(0,z.jsxs)(`section`,{className:`icon-action-card`,children:[(0,z.jsx)(I,{icon:`eye`,size:`xl`,color:`dark`}),(0,z.jsx)(`strong`,{children:`Eye`}),(0,z.jsx)(`button`,{type:`button`,onClick:ie,children:o?`Close`:`Open`})]}),(0,z.jsxs)(`section`,{className:`icon-action-card`,children:[(0,z.jsx)(I,{icon:`refresh`,size:`xl`,color:`positive`}),(0,z.jsx)(`strong`,{children:`Refresh`}),(0,z.jsx)(`button`,{type:`button`,onClick:d,children:s?`Stop`:`Start`})]}),(0,z.jsxs)(`section`,{className:`icon-action-card`,children:[(0,z.jsx)(I,{icon:`search`,size:`xl`,color:`secondary`}),(0,z.jsx)(`strong`,{children:`Search`}),(0,z.jsx)(`button`,{type:`button`,onClick:oe,children:c?`Stop`:`Start`})]}),(0,z.jsxs)(`section`,{className:`icon-action-card`,children:[(0,z.jsx)(I,{icon:`arrow`,size:`xl`,color:`primary`}),(0,z.jsx)(`strong`,{children:`Arrow`}),(0,z.jsx)(`button`,{type:`button`,onClick:()=>f(`jb-icon-arrow`),children:`Spin 180°`})]}),(0,z.jsxs)(`section`,{className:`icon-action-card`,children:[(0,z.jsx)(I,{icon:`arrow-tailed`,size:`xl`,color:`primary`}),(0,z.jsx)(`strong`,{children:`Arrow Tailed`}),(0,z.jsx)(`button`,{type:`button`,onClick:()=>f(`jb-icon-arrow-tailed`),children:`Spin 180°`})]}),(0,z.jsxs)(`section`,{className:`icon-action-card`,children:[(0,z.jsx)(I,{icon:`triangle`,size:`xl`,color:`primary`}),(0,z.jsx)(`strong`,{children:`Triangle`}),(0,z.jsx)(`button`,{type:`button`,onClick:()=>f(`jb-icon-triangle`),children:`Spin 180°`})]})]})}function at(){let e=(0,R.useRef)(null),[t,n]=(0,R.useState)(`up`),[r,i]=(0,R.useState)(0);return(0,R.useEffect)(()=>{e.current?.querySelectorAll(`[data-spin-icon]`).forEach(e=>{e.spin=r})},[r]),(0,z.jsxs)(`div`,{className:`spin-demo`,ref:e,children:[(0,z.jsxs)(`header`,{className:`spin-demo-header`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h3`,{children:`Absolute spin`}),(0,z.jsx)(`p`,{children:`Each angle is measured from the selected original direction. Set the angle to 0° to restore it.`})]}),(0,z.jsxs)(`label`,{children:[`Original direction`,(0,z.jsx)(`select`,{value:t,onChange:e=>n(e.target.value),children:ct.map(e=>(0,z.jsx)(`option`,{value:e,children:e},e))})]})]}),(0,z.jsxs)(`div`,{className:`spin-angle-control`,children:[(0,z.jsxs)(`label`,{htmlFor:`spin-angle`,children:[`Spin angle`,(0,z.jsxs)(`output`,{children:[r,`°`]})]}),(0,z.jsx)(`input`,{id:`spin-angle`,type:`range`,min:`-360`,max:`360`,step:`15`,value:r,onChange:e=>i(e.target.valueAsNumber)}),(0,z.jsxs)(`fieldset`,{className:`spin-presets`,children:[(0,z.jsx)(`legend`,{children:`Spin angle presets`}),(0,z.jsx)(`div`,{children:lt.map(e=>(0,z.jsxs)(`button`,{type:`button`,"aria-label":`Set spin to ${e} degrees`,"aria-pressed":r===e,onClick:()=>i(e),children:[e,`°`]},e))})]})]}),(0,z.jsx)(`div`,{className:`spin-icon-grid`,children:G.map(e=>(0,R.createElement)(`section`,{className:`spin-icon-card`,key:e},(0,R.createElement)(`jb-icon-${e}`,{direction:t,size:`xl`,color:`primary`,"data-spin-icon":``,"data-testid":`spin-${e}`,"aria-label":`${t} ${e} with ${r} degree spin`}),(0,R.createElement)(`strong`,null,e),(0,R.createElement)(`code`,null,`${t} + ${r}°`)))})]})}var R,z,B,V,H,ot,st,U,W,G,ct,lt,K,q,J,Y,X,Z,Q,$,ut=t((()=>{R=n(r(),1),a(),s(),ye(),Le(),ne(),ee(),re(),tt(),c(),ie(),o(),te(),nt(),z=i(),{expect:B,userEvent:V,waitFor:H,within:ot}=__STORYBOOK_MODULE_TEST__,st=[`arrow`,`arrow-tailed`,`close`,`delete`,`edit`,`expand`,`eye`,`filter`,`lorgnette`,`refresh`,`search`,`triangle`],U=[`xs`,`sm`,`md`,`lg`,`xl`],W=[`primary`,`secondary`,`positive`,`danger`,`warning`,`light`,`dark`],G=[`arrow`,`arrow-tailed`,`triangle`],ct=[`up`,`right`,`down`,`left`,`inline-start`,`inline-end`],lt=[-180,-90,0,90,180,360],K={title:`Components/JBIcons`,args:{icon:`edit`,size:`xl`,color:`primary`,long:!1},argTypes:{icon:{control:`select`,options:st},size:{control:`select`,options:U},color:{control:`select`,options:W},long:{control:`boolean`,if:{arg:`icon`,eq:`arrow-tailed`}}},parameters:{layout:`centered`}},q={render:e=>(0,z.jsx)(`div`,{className:`icon-preview ${e.color===`light`?`icon-preview--dark`:``}`,children:(0,z.jsx)(I,{...e})})},J={render:()=>(0,z.jsxs)(`div`,{className:`icon-gallery`,children:[(0,z.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,z.jsxs)(`div`,{className:`arrow-directions`,children:[(0,R.createElement)(`jb-icon-arrow`,{direction:`up`,size:`xl`,"aria-label":`up arrow`}),(0,R.createElement)(`jb-icon-arrow`,{direction:`right`,size:`xl`,"aria-label":`right arrow`}),(0,R.createElement)(`jb-icon-arrow`,{direction:`down`,size:`xl`,"aria-label":`down arrow`}),(0,R.createElement)(`jb-icon-arrow`,{direction:`left`,size:`xl`,"aria-label":`left arrow`}),(0,R.createElement)(`jb-icon-arrow`,{direction:`inline-start`,size:`xl`,"aria-label":`inline-start arrow`}),(0,R.createElement)(`jb-icon-arrow`,{direction:`inline-end`,size:`xl`,"aria-label":`inline-end arrow`})]}),(0,z.jsx)(`code`,{children:`jb-icon-arrow`})]}),(0,z.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,z.jsxs)(`div`,{className:`arrow-directions`,children:[(0,R.createElement)(`jb-icon-arrow`,{direction:`up`,size:`xl`,"end-line":``,"aria-label":`up arrow with end line`}),(0,R.createElement)(`jb-icon-arrow`,{direction:`right`,size:`xl`,"end-line":``,"aria-label":`right arrow with end line`}),(0,R.createElement)(`jb-icon-arrow`,{direction:`down`,size:`xl`,"end-line":``,"aria-label":`down arrow with end line`}),(0,R.createElement)(`jb-icon-arrow`,{direction:`left`,size:`xl`,"end-line":``,"aria-label":`left arrow with end line`}),(0,R.createElement)(`jb-icon-arrow`,{direction:`inline-start`,size:`xl`,"end-line":``,"aria-label":`inline-start arrow with end line`}),(0,R.createElement)(`jb-icon-arrow`,{direction:`inline-end`,size:`xl`,"end-line":``,"aria-label":`inline-end arrow with end line`})]}),(0,z.jsx)(`code`,{children:`jb-icon-arrow`}),(0,z.jsx)(`code`,{children:`end-line`})]}),(0,z.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,z.jsxs)(`div`,{className:`arrow-directions`,children:[(0,R.createElement)(`jb-icon-arrow-tailed`,{direction:`up`,size:`xl`,"aria-label":`up tailed arrow`}),(0,R.createElement)(`jb-icon-arrow-tailed`,{direction:`right`,size:`xl`,"aria-label":`right tailed arrow`}),(0,R.createElement)(`jb-icon-arrow-tailed`,{direction:`down`,size:`xl`,"aria-label":`down tailed arrow`}),(0,R.createElement)(`jb-icon-arrow-tailed`,{direction:`left`,size:`xl`,"aria-label":`left tailed arrow`}),(0,R.createElement)(`jb-icon-arrow-tailed`,{direction:`inline-start`,size:`xl`,"aria-label":`inline-start tailed arrow`}),(0,R.createElement)(`jb-icon-arrow-tailed`,{direction:`inline-end`,size:`xl`,"aria-label":`inline-end tailed arrow`})]}),(0,z.jsx)(`code`,{children:`jb-icon-arrow-tailed`})]}),(0,z.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,z.jsxs)(`div`,{className:`arrow-directions`,children:[(0,R.createElement)(`jb-icon-arrow-tailed`,{direction:`up`,size:`xl`,long:!0,"aria-label":`long up tailed arrow`}),(0,R.createElement)(`jb-icon-arrow-tailed`,{direction:`right`,size:`xl`,long:!0,"aria-label":`long right tailed arrow`}),(0,R.createElement)(`jb-icon-arrow-tailed`,{direction:`down`,size:`xl`,long:!0,"aria-label":`long down tailed arrow`}),(0,R.createElement)(`jb-icon-arrow-tailed`,{direction:`left`,size:`xl`,long:!0,"aria-label":`long left tailed arrow`}),(0,R.createElement)(`jb-icon-arrow-tailed`,{direction:`inline-start`,size:`xl`,long:!0,"aria-label":`long inline-start tailed arrow`}),(0,R.createElement)(`jb-icon-arrow-tailed`,{direction:`inline-end`,size:`xl`,long:!0,"aria-label":`long inline-end tailed arrow`})]}),(0,z.jsx)(`code`,{children:`jb-icon-arrow-tailed`}),(0,z.jsx)(`code`,{children:`long`})]}),(0,z.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,z.jsxs)(`div`,{className:`arrow-directions`,children:[(0,R.createElement)(`jb-icon-triangle`,{direction:`up`,size:`xl`,"aria-label":`up triangle`}),(0,R.createElement)(`jb-icon-triangle`,{direction:`right`,size:`xl`,"aria-label":`right triangle`}),(0,R.createElement)(`jb-icon-triangle`,{direction:`down`,size:`xl`,"aria-label":`down triangle`}),(0,R.createElement)(`jb-icon-triangle`,{direction:`left`,size:`xl`,"aria-label":`left triangle`}),(0,R.createElement)(`jb-icon-triangle`,{direction:`inline-start`,size:`xl`,"aria-label":`inline-start triangle`}),(0,R.createElement)(`jb-icon-triangle`,{direction:`inline-end`,size:`xl`,"aria-label":`inline-end triangle`})]}),(0,z.jsx)(`code`,{children:`jb-icon-triangle`})]}),(0,z.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,z.jsx)(L,{icon:`close`,size:`xl`}),(0,z.jsx)(`code`,{children:`jb-icon-close`})]}),(0,z.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,z.jsx)(L,{icon:`delete`,size:`xl`}),(0,z.jsx)(`code`,{children:`jb-icon-delete`})]}),(0,z.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,z.jsx)(L,{icon:`edit`,size:`xl`}),(0,z.jsx)(`code`,{children:`jb-icon-edit`})]}),(0,z.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,z.jsx)(L,{icon:`expand`,size:`xl`}),(0,z.jsx)(`code`,{children:`jb-icon-expand`})]}),(0,z.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,z.jsx)(L,{icon:`eye`,size:`xl`}),(0,z.jsx)(`code`,{children:`jb-icon-eye`})]}),(0,z.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,z.jsx)(L,{icon:`filter`,size:`xl`}),(0,z.jsx)(`code`,{children:`jb-icon-filter`})]}),(0,z.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,z.jsx)(I,{icon:`lorgnette`,size:`xl`}),(0,z.jsx)(`code`,{children:`jb-icon-lorgnette`})]}),(0,z.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,z.jsx)(L,{icon:`refresh`,size:`xl`}),(0,z.jsx)(`code`,{children:`jb-icon-refresh`})]}),(0,z.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,z.jsx)(L,{icon:`search`,size:`xl`}),(0,z.jsx)(`code`,{children:`jb-icon-search`})]})]})},Y={render:e=>(0,z.jsx)(`div`,{className:`icon-row`,children:U.map(t=>(0,z.jsxs)(`div`,{className:`icon-variant`,children:[(0,z.jsx)(I,{icon:e.icon,size:t,color:e.color}),(0,z.jsx)(`code`,{children:t})]},t))})},X={render:e=>(0,z.jsx)(`div`,{className:`icon-color-grid`,children:W.map(t=>(0,z.jsxs)(`div`,{className:`icon-variant ${t===`light`?`icon-variant--dark`:``}`,children:[(0,z.jsx)(L,{icon:e.icon,size:`xl`,color:t}),(0,z.jsx)(`code`,{children:t})]},t))})},Z={render:()=>(0,z.jsx)(it,{})},Q={render:()=>(0,z.jsx)(at,{}),play:async({canvasElement:e})=>{let t=ot(e),n=G.map(e=>t.getByTestId(`spin-${e}`));await V.click(t.getByRole(`button`,{name:`Set spin to 180 degrees`})),await H(()=>{n.forEach(e=>{B(e.spin).toBe(180);let t=(e.shadowRoot?.querySelector(`.spin-icon`)?.getAnimations().at(-1)?.effect)?.getKeyframes().at(-1);B(t?.transform).toBe(`rotate(180deg)`)})}),await V.click(t.getByRole(`button`,{name:`Set spin to 0 degrees`})),await H(()=>{n.forEach(e=>{B(e.spin).toBe(0);let t=(e.shadowRoot?.querySelector(`.spin-icon`)?.getAnimations().at(-1)?.effect)?.getKeyframes().at(-1);B(t?.transform).toBe(`rotate(0deg)`)})})}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <div className={\`icon-preview \${args.color === "light" ? "icon-preview--dark" : ""}\`}>
      <Icon {...args} />
    </div>
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
  render: () => <AnimationExamples />
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Playground`,`Gallery`,`Sizes`,`Colors`,`Animations`,`Spin`]}));ut();export{Z as Animations,X as Colors,J as Gallery,q as Playground,Y as Sizes,Q as Spin,$ as __namedExportsOrder,K as default,ut as n,rt as t};