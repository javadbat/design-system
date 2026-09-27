import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{q as r,t as i}from"./iframe-6sRBK7r6.js";import{r as a,t as o}from"./dist-BiC1ecBI.js";import{p as s,r as c,t as l,u}from"./jb-core-DiFOdNJT.js";import{t as d}from"./close-1c-rgsad.js";import{t as f}from"./minus-46Qp2JLV.js";import{t as p}from"./plus-Bq2sWsT7.js";import{t as m}from"./arrow-CSj7PPPF.js";import{t as h}from"./eye-h4xUm5Yk.js";import{t as g}from"./delete-CgBUV37d.js";import{a as _,i as v,n as y,r as b,t as ee}from"./filter-t1nqd9RF.js";import{t as x}from"./search-B7Ewlk36.js";var te,ne,S,C,w,T,E,re=t((()=>{l(),a(),te=[`xs`,`sm`,`md`,`lg`,`xl`],ne=[`primary`,`secondary`,`positive`,`danger`,`warning`,`light`,`dark`],S=906,C=634,w=`cubic-bezier(0.35, 0.1, 0.25, 1)`,T=`cubic-bezier(0.3, 0.9, 0.4, 1)`,E=class extends c{#e=!0;#t=null;#n=null;static get observedAttributes(){return[`unchecked`]}get isChecked(){return this.#e}set isChecked(e){e!==this.#e&&this.#o(e)}get size(){let e=this.getAttribute(`size`);return te.includes(e)?e:`md`}set size(e){this.setAttribute(`size`,e)}get color(){let e=this.getAttribute(`color`);return ne.includes(e)?e:null}set color(e){e===null?this.removeAttribute(`color`):this.setAttribute(`color`,e)}constructor(){super(),o();let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{--icon-size:var(--jb-icon-size,1.5rem);--icon-color:var(--jb-icon-color,currentColor);--icon-color-complementary:var(--jb-icon-color-complementary,var(--jb-primary));--icon-stroke-width-thin:48;--icon-stroke-width:64;--icon-stroke-width-thick:96;height:var(--icon-size)}:host([size=xs]){--icon-size:var(--jb-icon-size-xs,1rem)}:host([size=sm]){--icon-size:var(--jb-icon-size-sm,1.25rem)}:host([size=md]){--icon-size:var(--jb-icon-size-md,1.5rem)}:host([size=lg]){--icon-size:var(--jb-icon-size-lg,1.75rem)}:host([size=xl]){--icon-size:var(--jb-icon-size-xl,2.25rem)}:host([color=primary]){--icon-color:var(--jb-icon-color-primary,var(--jb-primary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-primary,var(--jb-icon-color-complementary,var(--jb-secondary)))}:host([color=secondary]){--icon-color:var(--jb-icon-color-secondary,var(--jb-secondary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-secondary,var(--jb-icon-color-complementary,var(--jb-primary)))}:host([color=positive]){--icon-color:var(--jb-icon-color-positive,var(--jb-green,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-positive,var(--jb-icon-color-complementary,var(--jb-green-subtle)))}:host([color=danger]){--icon-color:var(--jb-icon-color-danger,var(--jb-red,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-danger,var(--jb-icon-color-complementary,var(--jb-red-subtle)))}:host([color=warning]){--icon-color:var(--jb-icon-color-warning,var(--jb-yellow,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-warning,var(--jb-icon-color-complementary,var(--jb-yellow-subtle)))}:host([color=light]){--icon-color:var(--jb-icon-color-light,var(--jb-neutral-10,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-light,var(--jb-icon-color-complementary,var(--jb-neutral)))}:host([color=dark]){--icon-color:var(--jb-icon-color-dark,var(--jb-neutral,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-dark,var(--jb-icon-color-complementary,var(--jb-content-inverse)))}
:host{aspect-ratio:1;line-height:0;display:inline-block}svg{box-sizing:border-box;fill:none;width:auto;height:100%;stroke:var(--icon-color);stroke-width:var(--icon-stroke-width);stroke-linecap:round;stroke-linejoin:round;display:block}.check-mark{stroke-dasharray:var(--icon-check-mark-length,906);transform-box:fill-box;transform-origin:50%;stroke-dashoffset:0}:host([unchecked]) .check-mark{stroke-dashoffset:var(--icon-check-mark-length,906)}</style>

    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" part="svg">
      <path class="check-mark" d="M192 544 384 736 832 288" part="line"></path>
    </svg>
  `,e.appendChild(t.content.cloneNode(!0)),this.mark=e.querySelector(`.check-mark`),this.mark.style.setProperty(`--icon-check-mark-length`,`906`),this.#r()}#r(){let e=this.getAttribute(`unchecked`);e!==null&&(this.#e=!u(e))}attributeChangedCallback(e,t,n){if(e===`unchecked`){let e=u(n);this.#o(!e)}}#i(){let e=this.#l(S),t=this.#f();return this.#d(),this.#t=this.mark.animate(this.#s(e),{id:`check`,duration:t?1:420,fill:`forwards`,iterations:1}),t||(this.#n=this.mark.animate([{transform:`scale(1)`,offset:0,easing:`ease-out`},{transform:`scale(1.05)`,offset:.35,easing:`cubic-bezier(0.34, 1.56, 0.64, 1)`},{transform:`scale(1)`,offset:1}],{id:`check-press`,duration:300,delay:300,fill:`forwards`,iterations:1})),this.#t}#a(){let e=this.#l(0);return this.#d(),this.#t=this.mark.animate(this.#c(e),{id:`uncheck`,duration:this.#f()?1:140,fill:`forwards`,iterations:1}),this.#t}#o(e){this.#e=e,e&&this.removeAttribute(`unchecked`),e?this.#i():this.#a()}#s(e){return e<=C?[{strokeDashoffset:`${e}`,offset:0,easing:w},{strokeDashoffset:`0`,offset:1}]:[{strokeDashoffset:`${e}`,offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{strokeDashoffset:`634`,offset:.36},{strokeDashoffset:`634`,offset:.44,easing:w},{strokeDashoffset:`0`,offset:1}]}#c(e){return e>=C?[{strokeDashoffset:`${e}`,offset:0,easing:T},{strokeDashoffset:`906`,offset:1}]:[{strokeDashoffset:`${e}`,offset:0,easing:`cubic-bezier(0.45, 0, 0.55, 1)`},{strokeDashoffset:`634`,offset:.5},{strokeDashoffset:`634`,offset:.58,easing:T},{strokeDashoffset:`906`,offset:1}]}#l(e){return this.#t!==null&&this.#t.playState===`running`?this.#u():e}#u(){let e=Number.parseFloat(getComputedStyle(this.mark).strokeDashoffset);return Number.isFinite(e)?e:S}#d(){this.#t?.cancel(),this.#n?.cancel(),this.#t=null,this.#n=null}#f(){return typeof globalThis.matchMedia==`function`&&globalThis.matchMedia(`(prefers-reduced-motion: reduce)`).matches}},s(`jb-icon-check`,E)})),ie=t((()=>{re()})),D,O,k,ae=t((()=>{l(),a(),D=[`xs`,`sm`,`md`,`lg`,`xl`],O=[`primary`,`secondary`,`positive`,`danger`,`warning`,`light`,`dark`],k=class extends c{get isActive(){return u(this.getAttribute(`active`))}set isActive(e){this.toggleAttribute(`active`,e)}get size(){let e=this.getAttribute(`size`);return D.includes(e)?e:`md`}set size(e){this.setAttribute(`size`,e)}get color(){let e=this.getAttribute(`color`);return O.includes(e)?e:null}set color(e){e===null?this.removeAttribute(`color`):this.setAttribute(`color`,e)}constructor(){super(),o();let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{--icon-size:var(--jb-icon-size,1.5rem);--icon-color:var(--jb-icon-color,currentColor);--icon-color-complementary:var(--jb-icon-color-complementary,var(--jb-primary));--icon-stroke-width-thin:48;--icon-stroke-width:64;--icon-stroke-width-thick:96;height:var(--icon-size)}:host([size=xs]){--icon-size:var(--jb-icon-size-xs,1rem)}:host([size=sm]){--icon-size:var(--jb-icon-size-sm,1.25rem)}:host([size=md]){--icon-size:var(--jb-icon-size-md,1.5rem)}:host([size=lg]){--icon-size:var(--jb-icon-size-lg,1.75rem)}:host([size=xl]){--icon-size:var(--jb-icon-size-xl,2.25rem)}:host([color=primary]){--icon-color:var(--jb-icon-color-primary,var(--jb-primary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-primary,var(--jb-icon-color-complementary,var(--jb-secondary)))}:host([color=secondary]){--icon-color:var(--jb-icon-color-secondary,var(--jb-secondary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-secondary,var(--jb-icon-color-complementary,var(--jb-primary)))}:host([color=positive]){--icon-color:var(--jb-icon-color-positive,var(--jb-green,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-positive,var(--jb-icon-color-complementary,var(--jb-green-subtle)))}:host([color=danger]){--icon-color:var(--jb-icon-color-danger,var(--jb-red,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-danger,var(--jb-icon-color-complementary,var(--jb-red-subtle)))}:host([color=warning]){--icon-color:var(--jb-icon-color-warning,var(--jb-yellow,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-warning,var(--jb-icon-color-complementary,var(--jb-yellow-subtle)))}:host([color=light]){--icon-color:var(--jb-icon-color-light,var(--jb-neutral-10,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-light,var(--jb-icon-color-complementary,var(--jb-neutral)))}:host([color=dark]){--icon-color:var(--jb-icon-color-dark,var(--jb-neutral,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-dark,var(--jb-icon-color-complementary,var(--jb-content-inverse)))}
:host{aspect-ratio:1;line-height:0;display:inline-block}svg{box-sizing:border-box;width:auto;height:100%;display:block;overflow:visible}.pen{fill:none;stroke:var(--icon-color);stroke-width:var(--icon-stroke-width);stroke-linecap:round;stroke-linejoin:round;transform-origin:50%;transform-box:fill-box;transition:transform .3s}.line{fill:none;stroke:var(--icon-color-complementary);stroke-width:var(--icon-stroke-width-thin);stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:60 820;transition:stroke-dasharray .3s}:host([active]) .pen{transform:translate(80px,-96px)rotate(-79deg)}:host([active]) .line{stroke-dasharray:800 60}</style>

    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" part="svg">
      <g class="pen" part="pen">
        <path d="M190 834 232 634 648 218A96 96 0 0 1 784 354L368 770 190 834Z"></path>
        <path d="M232 634 368 770M600 266 736 402"></path>
      </g>
      <path class="line" d="M112 912H912" part="line"></path>
    </svg>
  `,e.appendChild(t.content.cloneNode(!0))}},s(`jb-icon-edit`,k)})),oe=t((()=>{ae()})),se,ce,le,ue=t((()=>{l(),a(),se=[`xs`,`sm`,`md`,`lg`,`xl`],ce=[`primary`,`secondary`,`positive`,`danger`,`warning`,`light`,`dark`],le=class extends c{get size(){let e=this.getAttribute(`size`);return se.includes(e)?e:`md`}set size(e){this.setAttribute(`size`,e)}get color(){let e=this.getAttribute(`color`);return ce.includes(e)?e:null}set color(e){e===null?this.removeAttribute(`color`):this.setAttribute(`color`,e)}constructor(){super(),o();let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{--icon-size:var(--jb-icon-size,1.5rem);--icon-color:var(--jb-icon-color,currentColor);--icon-color-complementary:var(--jb-icon-color-complementary,var(--jb-primary));--icon-stroke-width-thin:48;--icon-stroke-width:64;--icon-stroke-width-thick:96;height:var(--icon-size)}:host([size=xs]){--icon-size:var(--jb-icon-size-xs,1rem)}:host([size=sm]){--icon-size:var(--jb-icon-size-sm,1.25rem)}:host([size=md]){--icon-size:var(--jb-icon-size-md,1.5rem)}:host([size=lg]){--icon-size:var(--jb-icon-size-lg,1.75rem)}:host([size=xl]){--icon-size:var(--jb-icon-size-xl,2.25rem)}:host([color=primary]){--icon-color:var(--jb-icon-color-primary,var(--jb-primary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-primary,var(--jb-icon-color-complementary,var(--jb-secondary)))}:host([color=secondary]){--icon-color:var(--jb-icon-color-secondary,var(--jb-secondary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-secondary,var(--jb-icon-color-complementary,var(--jb-primary)))}:host([color=positive]){--icon-color:var(--jb-icon-color-positive,var(--jb-green,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-positive,var(--jb-icon-color-complementary,var(--jb-green-subtle)))}:host([color=danger]){--icon-color:var(--jb-icon-color-danger,var(--jb-red,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-danger,var(--jb-icon-color-complementary,var(--jb-red-subtle)))}:host([color=warning]){--icon-color:var(--jb-icon-color-warning,var(--jb-yellow,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-warning,var(--jb-icon-color-complementary,var(--jb-yellow-subtle)))}:host([color=light]){--icon-color:var(--jb-icon-color-light,var(--jb-neutral-10,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-light,var(--jb-icon-color-complementary,var(--jb-neutral)))}:host([color=dark]){--icon-color:var(--jb-icon-color-dark,var(--jb-neutral,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-dark,var(--jb-icon-color-complementary,var(--jb-content-inverse)))}
:host{aspect-ratio:1;line-height:0;display:inline-block}svg{box-sizing:border-box;width:auto;height:100%;display:block}.frame{fill:var(--icon-color)}.highlight{fill:var(--icon-color-complementary)}</style>

    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" part="svg">
      <path class="frame" part="frame" d="m789.333333 0c-114.812501 0-210.458333 82.947917-230.593749 192h-93.479168c-20.135416-109.052083-115.781248-192-230.593749-192-129.385416 0-234.666667 105.281251-234.666667 234.666667s105.281251 234.666667 234.666667 234.666667c114.812501 0 210.458333-82.947917 230.593749-192h93.479168c20.135416 109.052083 115.781248 192 230.593749 192 56.687499 0 108.739584-20.197917 149.333333-53.781251v565.781251c0 23.552083 19.114584 42.666667 42.666667 42.666667s42.666667-19.114584 42.666667-42.666667v-746.666667c0-129.385416-105.281251-234.666667-234.666667-234.666667zm-554.666667 384c-82.322917 0-149.333333-66.989584-149.333333-149.333333s67.010416-149.333333 149.333333-149.333333 149.333333 66.989584 149.333333 149.333333-67.010416 149.333333-149.333333 149.333333zm554.666667 0c-82.322917 0-149.333333-66.989584-149.333333-149.333333s67.010416-149.333333 149.333333-149.333333 149.333333 66.989584 149.333333 149.333333-67.010416 149.333333-149.333333 149.333333z"></path>
      <path class="highlight" part="highlight" d="m798.166667 136.833333c-23.552083 0-42.666667 19.114584-42.666667 42.666667s19.114584 42.666667 42.666667 42.666667c6.885416 0 12.5 5.604165 12.5 12.5 0 23.552083 19.114584 42.666667 42.666667 42.666667s42.666667-19.114584 42.666667-42.666667c0-53.947917-43.906251-97.833333-97.833333-97.833333z"></path>
      <path class="highlight" part="highlight" d="m243.5 136.833333c-23.552083 0-42.666667 19.114584-42.666667 42.666667s19.114584 42.666667 42.666667 42.666667c6.885416 0 12.5 5.604165 12.5 12.5 0 23.552083 19.114584 42.666667 42.666667 42.666667s42.666667-19.114584 42.666667-42.666667c0-53.947917-43.906251-97.833333-97.833333-97.833333z"></path>
    </svg>
  `,e.appendChild(t.content.cloneNode(!0))}},s(`jb-icon-lorgnette`,le)})),de=t((()=>{ue()})),fe=t((()=>{})),pe=e({Animations:()=>Z,Colors:()=>Y,Gallery:()=>q,Playground:()=>G,ReactJsx:()=>K,Sizes:()=>J,Spin:()=>Q,StrokeWidths:()=>X,__namedExportsOrder:()=>$,default:()=>W});function A({icon:e,size:t=`md`,color:n,long:r}){return(0,M.createElement)(`jb-icon-${e}`,{size:t,color:n,long:r,"aria-label":`${e} icon`})}function j({icon:e,size:t=`md`,color:n}){let r=(0,M.useRef)(null),i=t=>{let n=r.current;if(n)switch(e){case`delete`:n.isOpen=t;break;case`edit`:n.isActive=t;break;case`expand`:n.isExpanded=t;break;case`eye`:n.open=t;break;case`refresh`:case`search`:n.isLoading=t;break}};return(0,M.createElement)(`jb-icon-${e}`,{ref:r,size:t,color:n,"aria-label":`${e} icon`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)})}function me(){let e=(0,M.useRef)(null),[t,n]=(0,M.useState)(!1),[r,i]=(0,M.useState)(!1),[a,o]=(0,M.useState)(!1),[s,c]=(0,M.useState)(!1),[l,u]=(0,M.useState)(!1),[d,f]=(0,M.useState)(!1),[p,m]=(0,M.useState)(!1),h=()=>{let t=!s;c(t);let n=e.current?.querySelector(`jb-icon-eye`);n&&(n.open=t)},g=()=>{let r=!t;n(r);let i=e.current?.querySelector(`jb-icon-delete`);i&&(i.isOpen=r)},_=()=>{let t=!r;i(t);let n=e.current?.querySelector(`jb-icon-edit`);n&&(n.isActive=t)},v=()=>{let t=!a;o(t);let n=e.current?.querySelector(`jb-icon-expand`);n&&(n.isExpanded=t)},y=()=>{let t=!l;u(t);let n=e.current?.querySelector(`jb-icon-refresh`);n&&(n.isLoading=t)},b=()=>{let t=!d;f(t);let n=e.current?.querySelector(`jb-icon-search`);n&&(n.isLoading=t)},ee=()=>{let t=!p;m(t);let n=e.current?.querySelector(`jb-icon-check`);n&&(n.isChecked=t)},x=t=>{let n=e.current?.querySelector(t);n&&(n.spin=n.spin?0:180)};return(0,N.jsxs)(`div`,{className:`icon-actions`,ref:e,children:[(0,N.jsxs)(`section`,{className:`icon-action-card`,children:[(0,N.jsx)(A,{icon:`delete`,size:`xl`,color:`danger`}),(0,N.jsx)(`strong`,{children:`Delete`}),(0,N.jsx)(`button`,{type:`button`,onClick:g,children:t?`Close`:`Open`})]}),(0,N.jsxs)(`section`,{className:`icon-action-card`,children:[(0,N.jsx)(A,{icon:`edit`,size:`xl`,color:`primary`}),(0,N.jsx)(`strong`,{children:`Edit`}),(0,N.jsx)(`button`,{type:`button`,onClick:_,children:r?`Deactivate`:`Activate`})]}),(0,N.jsxs)(`section`,{className:`icon-action-card`,children:[(0,N.jsx)(A,{icon:`expand`,size:`xl`,color:`primary`}),(0,N.jsx)(`strong`,{children:`Expand`}),(0,N.jsx)(`button`,{type:`button`,onClick:v,children:a?`Collapse`:`Expand`})]}),(0,N.jsxs)(`section`,{className:`icon-action-card`,children:[(0,N.jsx)(A,{icon:`eye`,size:`xl`,color:`dark`}),(0,N.jsx)(`strong`,{children:`Eye`}),(0,N.jsx)(`button`,{type:`button`,onClick:h,children:s?`Close`:`Open`})]}),(0,N.jsxs)(`section`,{className:`icon-action-card`,children:[(0,N.jsx)(A,{icon:`refresh`,size:`xl`,color:`positive`}),(0,N.jsx)(`strong`,{children:`Refresh`}),(0,N.jsx)(`button`,{type:`button`,onClick:y,children:l?`Stop`:`Start`})]}),(0,N.jsxs)(`section`,{className:`icon-action-card`,children:[(0,N.jsx)(A,{icon:`search`,size:`xl`,color:`secondary`}),(0,N.jsx)(`strong`,{children:`Search`}),(0,N.jsx)(`button`,{type:`button`,onClick:b,children:d?`Stop`:`Start`})]}),(0,N.jsxs)(`section`,{className:`icon-action-card`,children:[(0,N.jsx)(A,{icon:`check`,size:`xl`,color:`positive`}),(0,N.jsx)(`strong`,{children:`Check`}),(0,N.jsx)(`button`,{type:`button`,onClick:ee,children:p?`Uncheck`:`Check`})]}),(0,N.jsxs)(`section`,{className:`icon-action-card`,children:[(0,N.jsx)(A,{icon:`arrow`,size:`xl`,color:`primary`}),(0,N.jsx)(`strong`,{children:`Arrow`}),(0,N.jsx)(`button`,{type:`button`,onClick:()=>x(`jb-icon-arrow`),children:`Spin 180°`})]}),(0,N.jsxs)(`section`,{className:`icon-action-card`,children:[(0,N.jsx)(A,{icon:`arrow-tailed`,size:`xl`,color:`primary`}),(0,N.jsx)(`strong`,{children:`Arrow Tailed`}),(0,N.jsx)(`button`,{type:`button`,onClick:()=>x(`jb-icon-arrow-tailed`),children:`Spin 180°`})]}),(0,N.jsxs)(`section`,{className:`icon-action-card`,children:[(0,N.jsx)(A,{icon:`triangle`,size:`xl`,color:`primary`}),(0,N.jsx)(`strong`,{children:`Triangle`}),(0,N.jsx)(`button`,{type:`button`,onClick:()=>x(`jb-icon-triangle`),children:`Spin 180°`})]})]})}function he(){let e=(0,M.useRef)(null),[t,n]=(0,M.useState)(`up`),[r,i]=(0,M.useState)(0);return(0,M.useEffect)(()=>{e.current?.querySelectorAll(`[data-spin-icon]`).forEach(e=>{e.spin=r})},[r]),(0,N.jsxs)(`div`,{className:`spin-demo`,ref:e,children:[(0,N.jsxs)(`header`,{className:`spin-demo-header`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{children:`Absolute spin`}),(0,N.jsx)(`p`,{children:`Each angle is measured from the selected original direction. Set the angle to 0° to restore it.`})]}),(0,N.jsxs)(`label`,{children:[`Original direction`,(0,N.jsx)(`select`,{value:t,onChange:e=>n(e.target.value),children:H.map(e=>(0,N.jsx)(`option`,{value:e,children:e},e))})]})]}),(0,N.jsxs)(`div`,{className:`spin-angle-control`,children:[(0,N.jsxs)(`label`,{htmlFor:`spin-angle`,children:[`Spin angle`,(0,N.jsxs)(`output`,{children:[r,`°`]})]}),(0,N.jsx)(`input`,{id:`spin-angle`,type:`range`,min:`-360`,max:`360`,step:`15`,value:r,onChange:e=>i(e.target.valueAsNumber)}),(0,N.jsxs)(`fieldset`,{className:`spin-presets`,children:[(0,N.jsx)(`legend`,{children:`Spin angle presets`}),(0,N.jsx)(`div`,{children:U.map(e=>(0,N.jsxs)(`button`,{type:`button`,"aria-label":`Set spin to ${e} degrees`,"aria-pressed":r===e,onClick:()=>i(e),children:[e,`°`]},e))})]})]}),(0,N.jsx)(`div`,{className:`spin-icon-grid`,children:V.map(e=>(0,M.createElement)(`section`,{className:`spin-icon-card`,key:e},(0,M.createElement)(`jb-icon-${e}`,{direction:t,size:`xl`,color:`primary`,"data-spin-icon":``,"data-testid":`spin-${e}`,"aria-label":`${t} ${e} with ${r} degree spin`}),(0,M.createElement)(`strong`,null,e),(0,M.createElement)(`code`,null,`${t} + ${r}°`)))})]})}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ge=t((()=>{M=n(r(),1),m(),ie(),d(),g(),oe(),_(),h(),ee(),de(),f(),p(),y(),x(),v(),b(),fe(),N=i(),{expect:P,userEvent:F,waitFor:I,within:L}=__STORYBOOK_MODULE_TEST__,R=[`arrow`,`arrow-tailed`,`check`,`close`,`delete`,`edit`,`expand`,`eye`,`filter`,`lorgnette`,`minus`,`plus`,`refresh`,`search`,`triangle`],z=[`xs`,`sm`,`md`,`lg`,`xl`],B=[`primary`,`secondary`,`positive`,`danger`,`warning`,`light`,`dark`],V=[`arrow`,`arrow-tailed`,`triangle`],H=[`up`,`right`,`down`,`left`,`inline-start`,`inline-end`],U=[-180,-90,0,90,180,360],W={title:`Components/JBIcons`,args:{icon:`edit`,size:`xl`,color:`primary`,long:!1},argTypes:{icon:{control:`select`,options:R},size:{control:`select`,options:z},color:{control:`select`,options:B},long:{control:`boolean`,if:{arg:`icon`,eq:`arrow-tailed`}}},parameters:{layout:`centered`}},G={render:e=>(0,N.jsx)(`div`,{className:`icon-preview ${e.color===`light`?`icon-preview--dark`:``}`,children:(0,N.jsx)(A,{...e})})},K={render:()=>(0,N.jsxs)(`div`,{className:`icon-row`,children:[(0,N.jsx)(`jb-icon-arrow`,{direction:`inline-end`,size:`lg`,color:`primary`,"aria-label":`React JSX arrow`}),(0,N.jsx)(`jb-icon-triangle`,{direction:`down`,size:`lg`,color:`secondary`,round:60,"aria-label":`React JSX triangle`}),(0,N.jsx)(`jb-icon-eye`,{open:!0,size:`lg`,color:`positive`,"aria-label":`React JSX eye`}),(0,N.jsx)(`jb-icon-check`,{isChecked:!0,size:`lg`,color:`positive`,"aria-label":`React JSX check`}),(0,N.jsx)(`jb-icon-plus`,{size:`lg`,color:`positive`,"aria-label":`React JSX plus`}),(0,N.jsx)(`jb-icon-minus`,{size:`lg`,color:`danger`,"aria-label":`React JSX minus`})]}),play:async({canvasElement:e})=>{let t=L(e);P(t.getByLabelText(`React JSX arrow`)).toBeTruthy(),P(t.getByLabelText(`React JSX triangle`)).toBeTruthy(),P(t.getByLabelText(`React JSX eye`)).toBeTruthy(),P(t.getByLabelText(`React JSX check`)).toBeTruthy(),P(t.getByLabelText(`React JSX plus`)).toBeTruthy(),P(t.getByLabelText(`React JSX minus`)).toBeTruthy()}},q={render:()=>(0,N.jsxs)(`div`,{className:`icon-gallery`,children:[(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsxs)(`div`,{className:`arrow-directions`,children:[(0,M.createElement)(`jb-icon-arrow`,{direction:`up`,size:`xl`,"aria-label":`up arrow`}),(0,M.createElement)(`jb-icon-arrow`,{direction:`right`,size:`xl`,"aria-label":`right arrow`}),(0,M.createElement)(`jb-icon-arrow`,{direction:`down`,size:`xl`,"aria-label":`down arrow`}),(0,M.createElement)(`jb-icon-arrow`,{direction:`left`,size:`xl`,"aria-label":`left arrow`}),(0,M.createElement)(`jb-icon-arrow`,{direction:`inline-start`,size:`xl`,"aria-label":`inline-start arrow`}),(0,M.createElement)(`jb-icon-arrow`,{direction:`inline-end`,size:`xl`,"aria-label":`inline-end arrow`})]}),(0,N.jsx)(`code`,{children:`jb-icon-arrow`})]}),(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsxs)(`div`,{className:`arrow-directions`,children:[(0,M.createElement)(`jb-icon-arrow`,{direction:`up`,size:`xl`,"end-line":``,"aria-label":`up arrow with end line`}),(0,M.createElement)(`jb-icon-arrow`,{direction:`right`,size:`xl`,"end-line":``,"aria-label":`right arrow with end line`}),(0,M.createElement)(`jb-icon-arrow`,{direction:`down`,size:`xl`,"end-line":``,"aria-label":`down arrow with end line`}),(0,M.createElement)(`jb-icon-arrow`,{direction:`left`,size:`xl`,"end-line":``,"aria-label":`left arrow with end line`}),(0,M.createElement)(`jb-icon-arrow`,{direction:`inline-start`,size:`xl`,"end-line":``,"aria-label":`inline-start arrow with end line`}),(0,M.createElement)(`jb-icon-arrow`,{direction:`inline-end`,size:`xl`,"end-line":``,"aria-label":`inline-end arrow with end line`})]}),(0,N.jsx)(`code`,{children:`jb-icon-arrow`}),(0,N.jsx)(`code`,{children:`end-line`})]}),(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsxs)(`div`,{className:`arrow-directions`,children:[(0,M.createElement)(`jb-icon-arrow-tailed`,{direction:`up`,size:`xl`,"aria-label":`up tailed arrow`}),(0,M.createElement)(`jb-icon-arrow-tailed`,{direction:`right`,size:`xl`,"aria-label":`right tailed arrow`}),(0,M.createElement)(`jb-icon-arrow-tailed`,{direction:`down`,size:`xl`,"aria-label":`down tailed arrow`}),(0,M.createElement)(`jb-icon-arrow-tailed`,{direction:`left`,size:`xl`,"aria-label":`left tailed arrow`}),(0,M.createElement)(`jb-icon-arrow-tailed`,{direction:`inline-start`,size:`xl`,"aria-label":`inline-start tailed arrow`}),(0,M.createElement)(`jb-icon-arrow-tailed`,{direction:`inline-end`,size:`xl`,"aria-label":`inline-end tailed arrow`})]}),(0,N.jsx)(`code`,{children:`jb-icon-arrow-tailed`})]}),(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsxs)(`div`,{className:`arrow-directions`,children:[(0,M.createElement)(`jb-icon-arrow-tailed`,{direction:`up`,size:`xl`,long:!0,"aria-label":`long up tailed arrow`}),(0,M.createElement)(`jb-icon-arrow-tailed`,{direction:`right`,size:`xl`,long:!0,"aria-label":`long right tailed arrow`}),(0,M.createElement)(`jb-icon-arrow-tailed`,{direction:`down`,size:`xl`,long:!0,"aria-label":`long down tailed arrow`}),(0,M.createElement)(`jb-icon-arrow-tailed`,{direction:`left`,size:`xl`,long:!0,"aria-label":`long left tailed arrow`}),(0,M.createElement)(`jb-icon-arrow-tailed`,{direction:`inline-start`,size:`xl`,long:!0,"aria-label":`long inline-start tailed arrow`}),(0,M.createElement)(`jb-icon-arrow-tailed`,{direction:`inline-end`,size:`xl`,long:!0,"aria-label":`long inline-end tailed arrow`})]}),(0,N.jsx)(`code`,{children:`jb-icon-arrow-tailed`}),(0,N.jsx)(`code`,{children:`long`})]}),(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsxs)(`div`,{className:`arrow-directions`,children:[(0,M.createElement)(`jb-icon-triangle`,{direction:`up`,size:`xl`,"aria-label":`up triangle`}),(0,M.createElement)(`jb-icon-triangle`,{direction:`right`,size:`xl`,"aria-label":`right triangle`}),(0,M.createElement)(`jb-icon-triangle`,{direction:`down`,size:`xl`,"aria-label":`down triangle`}),(0,M.createElement)(`jb-icon-triangle`,{direction:`left`,size:`xl`,"aria-label":`left triangle`}),(0,M.createElement)(`jb-icon-triangle`,{direction:`inline-start`,size:`xl`,"aria-label":`inline-start triangle`}),(0,M.createElement)(`jb-icon-triangle`,{direction:`inline-end`,size:`xl`,"aria-label":`inline-end triangle`})]}),(0,N.jsx)(`code`,{children:`jb-icon-triangle`})]}),(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsx)(A,{icon:`check`,size:`xl`}),(0,N.jsx)(`code`,{children:`jb-icon-check`})]}),(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsx)(j,{icon:`close`,size:`xl`}),(0,N.jsx)(`code`,{children:`jb-icon-close`})]}),(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsx)(j,{icon:`delete`,size:`xl`}),(0,N.jsx)(`code`,{children:`jb-icon-delete`})]}),(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsx)(j,{icon:`edit`,size:`xl`}),(0,N.jsx)(`code`,{children:`jb-icon-edit`})]}),(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsx)(j,{icon:`expand`,size:`xl`}),(0,N.jsx)(`code`,{children:`jb-icon-expand`})]}),(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsx)(j,{icon:`eye`,size:`xl`}),(0,N.jsx)(`code`,{children:`jb-icon-eye`})]}),(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsx)(j,{icon:`filter`,size:`xl`}),(0,N.jsx)(`code`,{children:`jb-icon-filter`})]}),(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsx)(A,{icon:`lorgnette`,size:`xl`}),(0,N.jsx)(`code`,{children:`jb-icon-lorgnette`})]}),(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsx)(A,{icon:`minus`,size:`xl`}),(0,N.jsx)(`code`,{children:`jb-icon-minus`})]}),(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsx)(A,{icon:`plus`,size:`xl`}),(0,N.jsx)(`code`,{children:`jb-icon-plus`})]}),(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsx)(j,{icon:`refresh`,size:`xl`}),(0,N.jsx)(`code`,{children:`jb-icon-refresh`})]}),(0,N.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,N.jsx)(j,{icon:`search`,size:`xl`}),(0,N.jsx)(`code`,{children:`jb-icon-search`})]})]})},J={render:e=>(0,N.jsx)(`div`,{className:`icon-row`,children:z.map(t=>(0,N.jsxs)(`div`,{className:`icon-variant`,children:[(0,N.jsx)(A,{icon:e.icon,size:t,color:e.color}),(0,N.jsx)(`code`,{children:t})]},t))})},Y={render:e=>(0,N.jsx)(`div`,{className:`icon-color-grid`,children:B.map(t=>(0,N.jsxs)(`div`,{className:`icon-variant ${t===`light`?`icon-variant--dark`:``}`,children:[(0,N.jsx)(j,{icon:e.icon,size:`xl`,color:t}),(0,N.jsx)(`code`,{children:t})]},t))})},X={render:()=>(0,N.jsx)(`div`,{className:`icon-row`,children:[{label:`Thin`,value:48},{label:`Standard`,value:64},{label:`Thick`,value:96}].map(({label:e,value:t})=>(0,N.jsxs)(`div`,{className:`icon-variant`,children:[(0,N.jsx)(`jb-icon-arrow`,{direction:`right`,size:`xl`,color:`primary`,style:{"--icon-stroke-width":t},"aria-label":`${e} stroke`}),(0,N.jsxs)(`code`,{children:[e,` (`,t,`)`]})]},e))}),play:async({canvasElement:e})=>{let t=L(e);for(let e of[`Thin`,`Standard`,`Thick`])P(t.getByLabelText(`${e} stroke`)).toBeTruthy()}},Z={render:()=>(0,N.jsx)(me,{}),play:async({canvasElement:e})=>{let t=L(e),n=t.getByLabelText(`check icon`),r=e=>((n.shadowRoot?.querySelector(`.check-mark`)?.getAnimations().filter(t=>t.id===e).at(-1))?.effect?.getKeyframes()??[]).map(e=>Number.parseFloat(String(e.strokeDashoffset)));await F.click(t.getByRole(`button`,{name:`Check`})),await I(()=>{P(n.isChecked).toBe(!0),P(r(`check`)).toEqual([906,634,634,0])}),await F.click(t.getByRole(`button`,{name:`Uncheck`})),await I(()=>{P(n.isChecked).toBe(!1),P(r(`uncheck`)).toEqual([0,634,634,906])})}},Q={render:()=>(0,N.jsx)(he,{}),play:async({canvasElement:e})=>{let t=L(e),n=V.map(e=>t.getByTestId(`spin-${e}`));await F.click(t.getByRole(`button`,{name:`Set spin to 180 degrees`})),await I(()=>{n.forEach(e=>{P(e.spin).toBe(180);let t=(e.shadowRoot?.querySelector(`.spin-icon`)?.getAnimations().at(-1))?.effect?.getKeyframes().at(-1);P(t?.transform).toBe(`rotate(180deg)`)})}),await F.click(t.getByRole(`button`,{name:`Set spin to 0 degrees`})),await I(()=>{n.forEach(e=>{P(e.spin).toBe(0);let t=(e.shadowRoot?.querySelector(`.spin-icon`)?.getAnimations().at(-1))?.effect?.getKeyframes().at(-1);P(t?.transform).toBe(`rotate(0deg)`)})})}},$=[`Playground`,`ReactJsx`,`Gallery`,`Sizes`,`Colors`,`StrokeWidths`,`Animations`,`Spin`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <div className={\`icon-preview \${args.color === "light" ? "icon-preview--dark" : ""}\`}>
      <Icon {...args} />
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div className="icon-row">
      <jb-icon-arrow direction="inline-end" size="lg" color="primary" aria-label="React JSX arrow" />
      <jb-icon-triangle direction="down" size="lg" color="secondary" round={60} aria-label="React JSX triangle" />
      <jb-icon-eye open size="lg" color="positive" aria-label="React JSX eye" />
      <jb-icon-check isChecked size="lg" color="positive" aria-label="React JSX check" />
      <jb-icon-plus size="lg" color="positive" aria-label="React JSX plus" />
      <jb-icon-minus size="lg" color="danger" aria-label="React JSX minus" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByLabelText("React JSX arrow")).toBeTruthy();
    expect(canvas.getByLabelText("React JSX triangle")).toBeTruthy();
    expect(canvas.getByLabelText("React JSX eye")).toBeTruthy();
    expect(canvas.getByLabelText("React JSX check")).toBeTruthy();
    expect(canvas.getByLabelText("React JSX plus")).toBeTruthy();
    expect(canvas.getByLabelText("React JSX minus")).toBeTruthy();
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
        <Icon icon="check" size="xl" />
        <code>jb-icon-check</code>
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
        <Icon icon="minus" size="xl" />
        <code>jb-icon-minus</code>
      </div>
      <div className="icon-gallery-item">
        <Icon icon="plus" size="xl" />
        <code>jb-icon-plus</code>
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <div className="icon-row">
      {iconSizes.map(size => <div className="icon-variant" key={size}>
          <Icon icon={args.icon} size={size} color={args.color} />
          <code>{size}</code>
        </div>)}
    </div>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <div className="icon-color-grid">
      {iconColors.map(color => <div className={\`icon-variant \${color === "light" ? "icon-variant--dark" : ""}\`} key={color}>
          <HoverAnimatedIcon icon={args.icon} size="xl" color={color} />
          <code>{color}</code>
        </div>)}
    </div>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <AnimationExamples />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkIcon = canvas.getByLabelText("check icon") as AnimatedIconElement;
    const markOffsets = (animationId: string) => {
      const animation = checkIcon.shadowRoot?.querySelector(".check-mark")?.getAnimations().filter(item => item.id === animationId).at(-1);
      return ((animation?.effect as KeyframeEffect | null)?.getKeyframes() ?? []).map(keyframe => Number.parseFloat(String(keyframe.strokeDashoffset)));
    };
    await userEvent.click(canvas.getByRole("button", {
      name: "Check"
    }));
    await waitFor(() => {
      expect(checkIcon.isChecked).toBe(true);
      //a short stroke into the corner, a pause, then the long stroke
      expect(markOffsets("check")).toEqual([906, 634, 634, 0]);
    });
    await userEvent.click(canvas.getByRole("button", {
      name: "Uncheck"
    }));
    await waitFor(() => {
      expect(checkIcon.isChecked).toBe(false);
      //the long stroke is wiped away first, then the short one
      expect(markOffsets("uncheck")).toEqual([0, 634, 634, 906]);
    });
  }
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
}`,...Q.parameters?.docs?.source}}}}));ge();export{Z as Animations,Y as Colors,q as Gallery,G as Playground,K as ReactJsx,J as Sizes,Q as Spin,X as StrokeWidths,$ as __namedExportsOrder,W as default,ge as n,pe as t};