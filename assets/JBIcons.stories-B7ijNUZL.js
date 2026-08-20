import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-CKFpjfZi.js";import{n as a,r as o}from"./dist-COPX3L6A.js";import{i as s,o as c,t as l,u}from"./jb-core-DsmvCuBc.js";import{n as d,t as f}from"./plus-DrMasepe.js";import{t as p}from"./arrow-wVIH1l6b.js";import{t as m}from"./eye-ChDFnWkp.js";import{a as h,i as g,n as _,o as v,r as y,t as ee}from"./filter-IXJr0a09.js";import{t as te}from"./search-NwYApwJh.js";var b,x,S,ne=t((()=>{l(),a(),b=[`xs`,`sm`,`md`,`lg`,`xl`],x=[`primary`,`secondary`,`positive`,`danger`,`warning`,`light`,`dark`],S=class extends u{#e=!1;#t=null;get isOpen(){return this.#e}set isOpen(e){this.#e!==e&&(e?this.playOpenAnimation():this.playCloseAnimation())}get size(){let e=this.getAttribute(`size`);return b.includes(e)?e:`md`}set size(e){this.setAttribute(`size`,e)}get color(){let e=this.getAttribute(`color`);return x.includes(e)?e:null}set color(e){e===null?this.removeAttribute(`color`):this.setAttribute(`color`,e)}constructor(){super(),o();let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{--icon-size:var(--jb-icon-size,1.5rem);--icon-color:var(--jb-icon-color,currentColor);--icon-color-complementary:var(--jb-icon-color-complementary,var(--jb-primary));--icon-stroke-width-thin:48;--icon-stroke-width:64;--icon-stroke-width-thick:96;height:var(--icon-size)}:host([size=xs]){--icon-size:var(--jb-icon-size-xs,1rem)}:host([size=sm]){--icon-size:var(--jb-icon-size-sm,1.25rem)}:host([size=md]){--icon-size:var(--jb-icon-size-md,1.5rem)}:host([size=lg]){--icon-size:var(--jb-icon-size-lg,1.75rem)}:host([size=xl]){--icon-size:var(--jb-icon-size-xl,2.25rem)}:host([color=primary]){--icon-color:var(--jb-icon-color-primary,var(--jb-primary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-primary,var(--jb-icon-color-complementary,var(--jb-secondary)))}:host([color=secondary]){--icon-color:var(--jb-icon-color-secondary,var(--jb-secondary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-secondary,var(--jb-icon-color-complementary,var(--jb-primary)))}:host([color=positive]){--icon-color:var(--jb-icon-color-positive,var(--jb-green,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-positive,var(--jb-icon-color-complementary,var(--jb-green-subtle)))}:host([color=danger]){--icon-color:var(--jb-icon-color-danger,var(--jb-red,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-danger,var(--jb-icon-color-complementary,var(--jb-red-subtle)))}:host([color=warning]){--icon-color:var(--jb-icon-color-warning,var(--jb-yellow,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-warning,var(--jb-icon-color-complementary,var(--jb-yellow-subtle)))}:host([color=light]){--icon-color:var(--jb-icon-color-light,var(--jb-neutral-10,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-light,var(--jb-icon-color-complementary,var(--jb-neutral)))}:host([color=dark]){--icon-color:var(--jb-icon-color-dark,var(--jb-neutral,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-dark,var(--jb-icon-color-complementary,var(--jb-content-inverse)))}
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
  `,e.appendChild(t.content.cloneNode(!0)),this.door=e.querySelector(`.door`)}playOpenAnimation(){return this.#e=!0,this.#t?.cancel(),this.#t=this.door.animate([{transform:`translate(0, 0) rotate(0deg)`},{transform:`translate(-9rem, -5rem) rotate(-18deg)`}],{id:`open`,duration:200,easing:`ease`,fill:`forwards`,iterations:1}),this.#t}playCloseAnimation(){return this.#e=!1,this.#t?.cancel(),this.#t=this.door.animate([{transform:`translate(-9rem, -5rem) rotate(-18deg)`},{transform:`translate(0, 0) rotate(0deg)`}],{id:`close`,duration:200,easing:`ease`,fill:`forwards`,iterations:1}),this.#t}},c(`jb-icon-delete`,S)})),re=t((()=>{ne()})),C,w,T,ie=t((()=>{l(),a(),C=[`xs`,`sm`,`md`,`lg`,`xl`],w=[`primary`,`secondary`,`positive`,`danger`,`warning`,`light`,`dark`],T=class extends u{get isActive(){return s(this.getAttribute(`active`))}set isActive(e){this.toggleAttribute(`active`,e)}get size(){let e=this.getAttribute(`size`);return C.includes(e)?e:`md`}set size(e){this.setAttribute(`size`,e)}get color(){let e=this.getAttribute(`color`);return w.includes(e)?e:null}set color(e){e===null?this.removeAttribute(`color`):this.setAttribute(`color`,e)}constructor(){super(),o();let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{--icon-size:var(--jb-icon-size,1.5rem);--icon-color:var(--jb-icon-color,currentColor);--icon-color-complementary:var(--jb-icon-color-complementary,var(--jb-primary));--icon-stroke-width-thin:48;--icon-stroke-width:64;--icon-stroke-width-thick:96;height:var(--icon-size)}:host([size=xs]){--icon-size:var(--jb-icon-size-xs,1rem)}:host([size=sm]){--icon-size:var(--jb-icon-size-sm,1.25rem)}:host([size=md]){--icon-size:var(--jb-icon-size-md,1.5rem)}:host([size=lg]){--icon-size:var(--jb-icon-size-lg,1.75rem)}:host([size=xl]){--icon-size:var(--jb-icon-size-xl,2.25rem)}:host([color=primary]){--icon-color:var(--jb-icon-color-primary,var(--jb-primary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-primary,var(--jb-icon-color-complementary,var(--jb-secondary)))}:host([color=secondary]){--icon-color:var(--jb-icon-color-secondary,var(--jb-secondary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-secondary,var(--jb-icon-color-complementary,var(--jb-primary)))}:host([color=positive]){--icon-color:var(--jb-icon-color-positive,var(--jb-green,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-positive,var(--jb-icon-color-complementary,var(--jb-green-subtle)))}:host([color=danger]){--icon-color:var(--jb-icon-color-danger,var(--jb-red,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-danger,var(--jb-icon-color-complementary,var(--jb-red-subtle)))}:host([color=warning]){--icon-color:var(--jb-icon-color-warning,var(--jb-yellow,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-warning,var(--jb-icon-color-complementary,var(--jb-yellow-subtle)))}:host([color=light]){--icon-color:var(--jb-icon-color-light,var(--jb-neutral-10,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-light,var(--jb-icon-color-complementary,var(--jb-neutral)))}:host([color=dark]){--icon-color:var(--jb-icon-color-dark,var(--jb-neutral,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-dark,var(--jb-icon-color-complementary,var(--jb-content-inverse)))}
:host{aspect-ratio:1;line-height:0;display:inline-block}svg{box-sizing:border-box;width:auto;height:100%;display:block;overflow:visible}.pen{fill:none;stroke:var(--icon-color);stroke-width:var(--icon-stroke-width);stroke-linecap:round;stroke-linejoin:round;transform-origin:50%;transform-box:fill-box;transition:transform .3s}.line{fill:none;stroke:var(--icon-color-complementary);stroke-width:var(--icon-stroke-width-thin);stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:60 820;transition:stroke-dasharray .3s}:host([active]) .pen{transform:translate(80px,-96px)rotate(-79deg)}:host([active]) .line{stroke-dasharray:800 60}</style>

    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" part="svg">
      <g class="pen" part="pen">
        <path d="M190 834 232 634 648 218A96 96 0 0 1 784 354L368 770 190 834Z"></path>
        <path d="M232 634 368 770M600 266 736 402"></path>
      </g>
      <path class="line" d="M112 912H912" part="line"></path>
    </svg>
  `,e.appendChild(t.content.cloneNode(!0))}},c(`jb-icon-edit`,T)})),ae=t((()=>{ie()})),E,D,O,oe=t((()=>{l(),a(),E=[`xs`,`sm`,`md`,`lg`,`xl`],D=[`primary`,`secondary`,`positive`,`danger`,`warning`,`light`,`dark`],O=class extends u{get size(){let e=this.getAttribute(`size`);return E.includes(e)?e:`md`}set size(e){this.setAttribute(`size`,e)}get color(){let e=this.getAttribute(`color`);return D.includes(e)?e:null}set color(e){e===null?this.removeAttribute(`color`):this.setAttribute(`color`,e)}constructor(){super(),o();let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{--icon-size:var(--jb-icon-size,1.5rem);--icon-color:var(--jb-icon-color,currentColor);--icon-color-complementary:var(--jb-icon-color-complementary,var(--jb-primary));--icon-stroke-width-thin:48;--icon-stroke-width:64;--icon-stroke-width-thick:96;height:var(--icon-size)}:host([size=xs]){--icon-size:var(--jb-icon-size-xs,1rem)}:host([size=sm]){--icon-size:var(--jb-icon-size-sm,1.25rem)}:host([size=md]){--icon-size:var(--jb-icon-size-md,1.5rem)}:host([size=lg]){--icon-size:var(--jb-icon-size-lg,1.75rem)}:host([size=xl]){--icon-size:var(--jb-icon-size-xl,2.25rem)}:host([color=primary]){--icon-color:var(--jb-icon-color-primary,var(--jb-primary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-primary,var(--jb-icon-color-complementary,var(--jb-secondary)))}:host([color=secondary]){--icon-color:var(--jb-icon-color-secondary,var(--jb-secondary,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-secondary,var(--jb-icon-color-complementary,var(--jb-primary)))}:host([color=positive]){--icon-color:var(--jb-icon-color-positive,var(--jb-green,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-positive,var(--jb-icon-color-complementary,var(--jb-green-subtle)))}:host([color=danger]){--icon-color:var(--jb-icon-color-danger,var(--jb-red,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-danger,var(--jb-icon-color-complementary,var(--jb-red-subtle)))}:host([color=warning]){--icon-color:var(--jb-icon-color-warning,var(--jb-yellow,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-warning,var(--jb-icon-color-complementary,var(--jb-yellow-subtle)))}:host([color=light]){--icon-color:var(--jb-icon-color-light,var(--jb-neutral-10,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-light,var(--jb-icon-color-complementary,var(--jb-neutral)))}:host([color=dark]){--icon-color:var(--jb-icon-color-dark,var(--jb-neutral,currentColor));--icon-color-complementary:var(--jb-icon-color-complementary-dark,var(--jb-icon-color-complementary,var(--jb-content-inverse)))}
:host{aspect-ratio:1;line-height:0;display:inline-block}svg{box-sizing:border-box;width:auto;height:100%;display:block}.frame{fill:var(--icon-color)}.highlight{fill:var(--icon-color-complementary)}</style>

    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" part="svg">
      <path class="frame" part="frame" d="m789.333333 0c-114.812501 0-210.458333 82.947917-230.593749 192h-93.479168c-20.135416-109.052083-115.781248-192-230.593749-192-129.385416 0-234.666667 105.281251-234.666667 234.666667s105.281251 234.666667 234.666667 234.666667c114.812501 0 210.458333-82.947917 230.593749-192h93.479168c20.135416 109.052083 115.781248 192 230.593749 192 56.687499 0 108.739584-20.197917 149.333333-53.781251v565.781251c0 23.552083 19.114584 42.666667 42.666667 42.666667s42.666667-19.114584 42.666667-42.666667v-746.666667c0-129.385416-105.281251-234.666667-234.666667-234.666667zm-554.666667 384c-82.322917 0-149.333333-66.989584-149.333333-149.333333s67.010416-149.333333 149.333333-149.333333 149.333333 66.989584 149.333333 149.333333-67.010416 149.333333-149.333333 149.333333zm554.666667 0c-82.322917 0-149.333333-66.989584-149.333333-149.333333s67.010416-149.333333 149.333333-149.333333 149.333333 66.989584 149.333333 149.333333-67.010416 149.333333-149.333333 149.333333z"></path>
      <path class="highlight" part="highlight" d="m798.166667 136.833333c-23.552083 0-42.666667 19.114584-42.666667 42.666667s19.114584 42.666667 42.666667 42.666667c6.885416 0 12.5 5.604165 12.5 12.5 0 23.552083 19.114584 42.666667 42.666667 42.666667s42.666667-19.114584 42.666667-42.666667c0-53.947917-43.906251-97.833333-97.833333-97.833333z"></path>
      <path class="highlight" part="highlight" d="m243.5 136.833333c-23.552083 0-42.666667 19.114584-42.666667 42.666667s19.114584 42.666667 42.666667 42.666667c6.885416 0 12.5 5.604165 12.5 12.5 0 23.552083 19.114584 42.666667 42.666667 42.666667s42.666667-19.114584 42.666667-42.666667c0-53.947917-43.906251-97.833333-97.833333-97.833333z"></path>
    </svg>
  `,e.appendChild(t.content.cloneNode(!0))}},c(`jb-icon-lorgnette`,O)})),se=t((()=>{oe()})),ce=t((()=>{})),le=e({Animations:()=>X,Colors:()=>J,Gallery:()=>K,Playground:()=>W,ReactJsx:()=>G,Sizes:()=>q,Spin:()=>Z,StrokeWidths:()=>Y,__namedExportsOrder:()=>Q,default:()=>U});function k({icon:e,size:t=`md`,color:n,long:r}){return(0,j.createElement)(`jb-icon-${e}`,{size:t,color:n,long:r,"aria-label":`${e} icon`})}function A({icon:e,size:t=`md`,color:n}){let r=(0,j.useRef)(null),i=t=>{let n=r.current;if(n)switch(e){case`delete`:n.isOpen=t;break;case`edit`:n.isActive=t;break;case`expand`:n.isExpanded=t;break;case`eye`:n.open=t;break;case`refresh`:case`search`:n.isLoading=t;break}};return(0,j.createElement)(`jb-icon-${e}`,{ref:r,size:t,color:n,"aria-label":`${e} icon`,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)})}function ue(){let e=(0,j.useRef)(null),[t,n]=(0,j.useState)(!1),[r,i]=(0,j.useState)(!1),[a,o]=(0,j.useState)(!1),[s,c]=(0,j.useState)(!1),[l,u]=(0,j.useState)(!1),[d,f]=(0,j.useState)(!1),p=()=>{let t=!s;c(t);let n=e.current?.querySelector(`jb-icon-eye`);n&&(n.open=t)},m=()=>{let r=!t;n(r);let i=e.current?.querySelector(`jb-icon-delete`);i&&(i.isOpen=r)},h=()=>{let t=!r;i(t);let n=e.current?.querySelector(`jb-icon-edit`);n&&(n.isActive=t)},g=()=>{let t=!a;o(t);let n=e.current?.querySelector(`jb-icon-expand`);n&&(n.isExpanded=t)},_=()=>{let t=!l;u(t);let n=e.current?.querySelector(`jb-icon-refresh`);n&&(n.isLoading=t)},v=()=>{let t=!d;f(t);let n=e.current?.querySelector(`jb-icon-search`);n&&(n.isLoading=t)},y=t=>{let n=e.current?.querySelector(t);n&&(n.spin=180)};return(0,M.jsxs)(`div`,{className:`icon-actions`,ref:e,children:[(0,M.jsxs)(`section`,{className:`icon-action-card`,children:[(0,M.jsx)(k,{icon:`delete`,size:`xl`,color:`danger`}),(0,M.jsx)(`strong`,{children:`Delete`}),(0,M.jsx)(`button`,{type:`button`,onClick:m,children:t?`Close`:`Open`})]}),(0,M.jsxs)(`section`,{className:`icon-action-card`,children:[(0,M.jsx)(k,{icon:`edit`,size:`xl`,color:`primary`}),(0,M.jsx)(`strong`,{children:`Edit`}),(0,M.jsx)(`button`,{type:`button`,onClick:h,children:r?`Deactivate`:`Activate`})]}),(0,M.jsxs)(`section`,{className:`icon-action-card`,children:[(0,M.jsx)(k,{icon:`expand`,size:`xl`,color:`primary`}),(0,M.jsx)(`strong`,{children:`Expand`}),(0,M.jsx)(`button`,{type:`button`,onClick:g,children:a?`Collapse`:`Expand`})]}),(0,M.jsxs)(`section`,{className:`icon-action-card`,children:[(0,M.jsx)(k,{icon:`eye`,size:`xl`,color:`dark`}),(0,M.jsx)(`strong`,{children:`Eye`}),(0,M.jsx)(`button`,{type:`button`,onClick:p,children:s?`Close`:`Open`})]}),(0,M.jsxs)(`section`,{className:`icon-action-card`,children:[(0,M.jsx)(k,{icon:`refresh`,size:`xl`,color:`positive`}),(0,M.jsx)(`strong`,{children:`Refresh`}),(0,M.jsx)(`button`,{type:`button`,onClick:_,children:l?`Stop`:`Start`})]}),(0,M.jsxs)(`section`,{className:`icon-action-card`,children:[(0,M.jsx)(k,{icon:`search`,size:`xl`,color:`secondary`}),(0,M.jsx)(`strong`,{children:`Search`}),(0,M.jsx)(`button`,{type:`button`,onClick:v,children:d?`Stop`:`Start`})]}),(0,M.jsxs)(`section`,{className:`icon-action-card`,children:[(0,M.jsx)(k,{icon:`arrow`,size:`xl`,color:`primary`}),(0,M.jsx)(`strong`,{children:`Arrow`}),(0,M.jsx)(`button`,{type:`button`,onClick:()=>y(`jb-icon-arrow`),children:`Spin 180°`})]}),(0,M.jsxs)(`section`,{className:`icon-action-card`,children:[(0,M.jsx)(k,{icon:`arrow-tailed`,size:`xl`,color:`primary`}),(0,M.jsx)(`strong`,{children:`Arrow Tailed`}),(0,M.jsx)(`button`,{type:`button`,onClick:()=>y(`jb-icon-arrow-tailed`),children:`Spin 180°`})]}),(0,M.jsxs)(`section`,{className:`icon-action-card`,children:[(0,M.jsx)(k,{icon:`triangle`,size:`xl`,color:`primary`}),(0,M.jsx)(`strong`,{children:`Triangle`}),(0,M.jsx)(`button`,{type:`button`,onClick:()=>y(`jb-icon-triangle`),children:`Spin 180°`})]})]})}function de(){let e=(0,j.useRef)(null),[t,n]=(0,j.useState)(`up`),[r,i]=(0,j.useState)(0);return(0,j.useEffect)(()=>{e.current?.querySelectorAll(`[data-spin-icon]`).forEach(e=>{e.spin=r})},[r]),(0,M.jsxs)(`div`,{className:`spin-demo`,ref:e,children:[(0,M.jsxs)(`header`,{className:`spin-demo-header`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{children:`Absolute spin`}),(0,M.jsx)(`p`,{children:`Each angle is measured from the selected original direction. Set the angle to 0° to restore it.`})]}),(0,M.jsxs)(`label`,{children:[`Original direction`,(0,M.jsx)(`select`,{value:t,onChange:e=>n(e.target.value),children:V.map(e=>(0,M.jsx)(`option`,{value:e,children:e},e))})]})]}),(0,M.jsxs)(`div`,{className:`spin-angle-control`,children:[(0,M.jsxs)(`label`,{htmlFor:`spin-angle`,children:[`Spin angle`,(0,M.jsxs)(`output`,{children:[r,`°`]})]}),(0,M.jsx)(`input`,{id:`spin-angle`,type:`range`,min:`-360`,max:`360`,step:`15`,value:r,onChange:e=>i(e.target.valueAsNumber)}),(0,M.jsxs)(`fieldset`,{className:`spin-presets`,children:[(0,M.jsx)(`legend`,{children:`Spin angle presets`}),(0,M.jsx)(`div`,{children:H.map(e=>(0,M.jsxs)(`button`,{type:`button`,"aria-label":`Set spin to ${e} degrees`,"aria-pressed":r===e,onClick:()=>i(e),children:[e,`°`]},e))})]})]}),(0,M.jsx)(`div`,{className:`spin-icon-grid`,children:B.map(e=>(0,j.createElement)(`section`,{className:`spin-icon-card`,key:e},(0,j.createElement)(`jb-icon-${e}`,{direction:t,size:`xl`,color:`primary`,"data-spin-icon":``,"data-testid":`spin-${e}`,"aria-label":`${t} ${e} with ${r} degree spin`}),(0,j.createElement)(`strong`,null,e),(0,j.createElement)(`code`,null,`${t} + ${r}°`)))})]})}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{j=n(r(),1),p(),_(),re(),ae(),v(),m(),ee(),se(),d(),f(),y(),te(),h(),g(),ce(),M=i(),{expect:N,userEvent:P,waitFor:F,within:I}=__STORYBOOK_MODULE_TEST__,L=[`arrow`,`arrow-tailed`,`close`,`delete`,`edit`,`expand`,`eye`,`filter`,`lorgnette`,`minus`,`plus`,`refresh`,`search`,`triangle`],R=[`xs`,`sm`,`md`,`lg`,`xl`],z=[`primary`,`secondary`,`positive`,`danger`,`warning`,`light`,`dark`],B=[`arrow`,`arrow-tailed`,`triangle`],V=[`up`,`right`,`down`,`left`,`inline-start`,`inline-end`],H=[-180,-90,0,90,180,360],U={title:`Components/JBIcons`,args:{icon:`edit`,size:`xl`,color:`primary`,long:!1},argTypes:{icon:{control:`select`,options:L},size:{control:`select`,options:R},color:{control:`select`,options:z},long:{control:`boolean`,if:{arg:`icon`,eq:`arrow-tailed`}}},parameters:{layout:`centered`}},W={render:e=>(0,M.jsx)(`div`,{className:`icon-preview ${e.color===`light`?`icon-preview--dark`:``}`,children:(0,M.jsx)(k,{...e})})},G={render:()=>(0,M.jsxs)(`div`,{className:`icon-row`,children:[(0,M.jsx)(`jb-icon-arrow`,{direction:`inline-end`,size:`lg`,color:`primary`,"aria-label":`React JSX arrow`}),(0,M.jsx)(`jb-icon-triangle`,{direction:`down`,size:`lg`,color:`secondary`,round:60,"aria-label":`React JSX triangle`}),(0,M.jsx)(`jb-icon-eye`,{open:!0,size:`lg`,color:`positive`,"aria-label":`React JSX eye`}),(0,M.jsx)(`jb-icon-plus`,{size:`lg`,color:`positive`,"aria-label":`React JSX plus`}),(0,M.jsx)(`jb-icon-minus`,{size:`lg`,color:`danger`,"aria-label":`React JSX minus`})]}),play:async({canvasElement:e})=>{let t=I(e);N(t.getByLabelText(`React JSX arrow`)).toBeTruthy(),N(t.getByLabelText(`React JSX triangle`)).toBeTruthy(),N(t.getByLabelText(`React JSX eye`)).toBeTruthy(),N(t.getByLabelText(`React JSX plus`)).toBeTruthy(),N(t.getByLabelText(`React JSX minus`)).toBeTruthy()}},K={render:()=>(0,M.jsxs)(`div`,{className:`icon-gallery`,children:[(0,M.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,M.jsxs)(`div`,{className:`arrow-directions`,children:[(0,j.createElement)(`jb-icon-arrow`,{direction:`up`,size:`xl`,"aria-label":`up arrow`}),(0,j.createElement)(`jb-icon-arrow`,{direction:`right`,size:`xl`,"aria-label":`right arrow`}),(0,j.createElement)(`jb-icon-arrow`,{direction:`down`,size:`xl`,"aria-label":`down arrow`}),(0,j.createElement)(`jb-icon-arrow`,{direction:`left`,size:`xl`,"aria-label":`left arrow`}),(0,j.createElement)(`jb-icon-arrow`,{direction:`inline-start`,size:`xl`,"aria-label":`inline-start arrow`}),(0,j.createElement)(`jb-icon-arrow`,{direction:`inline-end`,size:`xl`,"aria-label":`inline-end arrow`})]}),(0,M.jsx)(`code`,{children:`jb-icon-arrow`})]}),(0,M.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,M.jsxs)(`div`,{className:`arrow-directions`,children:[(0,j.createElement)(`jb-icon-arrow`,{direction:`up`,size:`xl`,"end-line":``,"aria-label":`up arrow with end line`}),(0,j.createElement)(`jb-icon-arrow`,{direction:`right`,size:`xl`,"end-line":``,"aria-label":`right arrow with end line`}),(0,j.createElement)(`jb-icon-arrow`,{direction:`down`,size:`xl`,"end-line":``,"aria-label":`down arrow with end line`}),(0,j.createElement)(`jb-icon-arrow`,{direction:`left`,size:`xl`,"end-line":``,"aria-label":`left arrow with end line`}),(0,j.createElement)(`jb-icon-arrow`,{direction:`inline-start`,size:`xl`,"end-line":``,"aria-label":`inline-start arrow with end line`}),(0,j.createElement)(`jb-icon-arrow`,{direction:`inline-end`,size:`xl`,"end-line":``,"aria-label":`inline-end arrow with end line`})]}),(0,M.jsx)(`code`,{children:`jb-icon-arrow`}),(0,M.jsx)(`code`,{children:`end-line`})]}),(0,M.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,M.jsxs)(`div`,{className:`arrow-directions`,children:[(0,j.createElement)(`jb-icon-arrow-tailed`,{direction:`up`,size:`xl`,"aria-label":`up tailed arrow`}),(0,j.createElement)(`jb-icon-arrow-tailed`,{direction:`right`,size:`xl`,"aria-label":`right tailed arrow`}),(0,j.createElement)(`jb-icon-arrow-tailed`,{direction:`down`,size:`xl`,"aria-label":`down tailed arrow`}),(0,j.createElement)(`jb-icon-arrow-tailed`,{direction:`left`,size:`xl`,"aria-label":`left tailed arrow`}),(0,j.createElement)(`jb-icon-arrow-tailed`,{direction:`inline-start`,size:`xl`,"aria-label":`inline-start tailed arrow`}),(0,j.createElement)(`jb-icon-arrow-tailed`,{direction:`inline-end`,size:`xl`,"aria-label":`inline-end tailed arrow`})]}),(0,M.jsx)(`code`,{children:`jb-icon-arrow-tailed`})]}),(0,M.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,M.jsxs)(`div`,{className:`arrow-directions`,children:[(0,j.createElement)(`jb-icon-arrow-tailed`,{direction:`up`,size:`xl`,long:!0,"aria-label":`long up tailed arrow`}),(0,j.createElement)(`jb-icon-arrow-tailed`,{direction:`right`,size:`xl`,long:!0,"aria-label":`long right tailed arrow`}),(0,j.createElement)(`jb-icon-arrow-tailed`,{direction:`down`,size:`xl`,long:!0,"aria-label":`long down tailed arrow`}),(0,j.createElement)(`jb-icon-arrow-tailed`,{direction:`left`,size:`xl`,long:!0,"aria-label":`long left tailed arrow`}),(0,j.createElement)(`jb-icon-arrow-tailed`,{direction:`inline-start`,size:`xl`,long:!0,"aria-label":`long inline-start tailed arrow`}),(0,j.createElement)(`jb-icon-arrow-tailed`,{direction:`inline-end`,size:`xl`,long:!0,"aria-label":`long inline-end tailed arrow`})]}),(0,M.jsx)(`code`,{children:`jb-icon-arrow-tailed`}),(0,M.jsx)(`code`,{children:`long`})]}),(0,M.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,M.jsxs)(`div`,{className:`arrow-directions`,children:[(0,j.createElement)(`jb-icon-triangle`,{direction:`up`,size:`xl`,"aria-label":`up triangle`}),(0,j.createElement)(`jb-icon-triangle`,{direction:`right`,size:`xl`,"aria-label":`right triangle`}),(0,j.createElement)(`jb-icon-triangle`,{direction:`down`,size:`xl`,"aria-label":`down triangle`}),(0,j.createElement)(`jb-icon-triangle`,{direction:`left`,size:`xl`,"aria-label":`left triangle`}),(0,j.createElement)(`jb-icon-triangle`,{direction:`inline-start`,size:`xl`,"aria-label":`inline-start triangle`}),(0,j.createElement)(`jb-icon-triangle`,{direction:`inline-end`,size:`xl`,"aria-label":`inline-end triangle`})]}),(0,M.jsx)(`code`,{children:`jb-icon-triangle`})]}),(0,M.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,M.jsx)(A,{icon:`close`,size:`xl`}),(0,M.jsx)(`code`,{children:`jb-icon-close`})]}),(0,M.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,M.jsx)(A,{icon:`delete`,size:`xl`}),(0,M.jsx)(`code`,{children:`jb-icon-delete`})]}),(0,M.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,M.jsx)(A,{icon:`edit`,size:`xl`}),(0,M.jsx)(`code`,{children:`jb-icon-edit`})]}),(0,M.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,M.jsx)(A,{icon:`expand`,size:`xl`}),(0,M.jsx)(`code`,{children:`jb-icon-expand`})]}),(0,M.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,M.jsx)(A,{icon:`eye`,size:`xl`}),(0,M.jsx)(`code`,{children:`jb-icon-eye`})]}),(0,M.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,M.jsx)(A,{icon:`filter`,size:`xl`}),(0,M.jsx)(`code`,{children:`jb-icon-filter`})]}),(0,M.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,M.jsx)(k,{icon:`lorgnette`,size:`xl`}),(0,M.jsx)(`code`,{children:`jb-icon-lorgnette`})]}),(0,M.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,M.jsx)(k,{icon:`minus`,size:`xl`}),(0,M.jsx)(`code`,{children:`jb-icon-minus`})]}),(0,M.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,M.jsx)(k,{icon:`plus`,size:`xl`}),(0,M.jsx)(`code`,{children:`jb-icon-plus`})]}),(0,M.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,M.jsx)(A,{icon:`refresh`,size:`xl`}),(0,M.jsx)(`code`,{children:`jb-icon-refresh`})]}),(0,M.jsxs)(`div`,{className:`icon-gallery-item`,children:[(0,M.jsx)(A,{icon:`search`,size:`xl`}),(0,M.jsx)(`code`,{children:`jb-icon-search`})]})]})},q={render:e=>(0,M.jsx)(`div`,{className:`icon-row`,children:R.map(t=>(0,M.jsxs)(`div`,{className:`icon-variant`,children:[(0,M.jsx)(k,{icon:e.icon,size:t,color:e.color}),(0,M.jsx)(`code`,{children:t})]},t))})},J={render:e=>(0,M.jsx)(`div`,{className:`icon-color-grid`,children:z.map(t=>(0,M.jsxs)(`div`,{className:`icon-variant ${t===`light`?`icon-variant--dark`:``}`,children:[(0,M.jsx)(A,{icon:e.icon,size:`xl`,color:t}),(0,M.jsx)(`code`,{children:t})]},t))})},Y={render:()=>(0,M.jsx)(`div`,{className:`icon-row`,children:[{label:`Thin`,value:48},{label:`Standard`,value:64},{label:`Thick`,value:96}].map(({label:e,value:t})=>(0,M.jsxs)(`div`,{className:`icon-variant`,children:[(0,M.jsx)(`jb-icon-arrow`,{direction:`right`,size:`xl`,color:`primary`,style:{"--icon-stroke-width":t},"aria-label":`${e} stroke`}),(0,M.jsxs)(`code`,{children:[e,` (`,t,`)`]})]},e))}),play:async({canvasElement:e})=>{let t=I(e);for(let e of[`Thin`,`Standard`,`Thick`])N(t.getByLabelText(`${e} stroke`)).toBeTruthy()}},X={render:()=>(0,M.jsx)(ue,{})},Z={render:()=>(0,M.jsx)(de,{}),play:async({canvasElement:e})=>{let t=I(e),n=B.map(e=>t.getByTestId(`spin-${e}`));await P.click(t.getByRole(`button`,{name:`Set spin to 180 degrees`})),await F(()=>{n.forEach(e=>{N(e.spin).toBe(180);let t=(e.shadowRoot?.querySelector(`.spin-icon`)?.getAnimations().at(-1)?.effect)?.getKeyframes().at(-1);N(t?.transform).toBe(`rotate(180deg)`)})}),await P.click(t.getByRole(`button`,{name:`Set spin to 0 degrees`})),await F(()=>{n.forEach(e=>{N(e.spin).toBe(0);let t=(e.shadowRoot?.querySelector(`.spin-icon`)?.getAnimations().at(-1)?.effect)?.getKeyframes().at(-1);N(t?.transform).toBe(`rotate(0deg)`)})})}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <div className={\`icon-preview \${args.color === "light" ? "icon-preview--dark" : ""}\`}>
      <Icon {...args} />
    </div>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div className="icon-row">
      <jb-icon-arrow direction="inline-end" size="lg" color="primary" aria-label="React JSX arrow" />
      <jb-icon-triangle direction="down" size="lg" color="secondary" round={60} aria-label="React JSX triangle" />
      <jb-icon-eye open size="lg" color="positive" aria-label="React JSX eye" />
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
    expect(canvas.getByLabelText("React JSX plus")).toBeTruthy();
    expect(canvas.getByLabelText("React JSX minus")).toBeTruthy();
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <div className="icon-row">
      {iconSizes.map(size => <div className="icon-variant" key={size}>
          <Icon icon={args.icon} size={size} color={args.color} />
          <code>{size}</code>
        </div>)}
    </div>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <div className="icon-color-grid">
      {iconColors.map(color => <div className={\`icon-variant \${color === "light" ? "icon-variant--dark" : ""}\`} key={color}>
          <HoverAnimatedIcon icon={args.icon} size="xl" color={color} />
          <code>{color}</code>
        </div>)}
    </div>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <AnimationExamples />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Playground`,`ReactJsx`,`Gallery`,`Sizes`,`Colors`,`StrokeWidths`,`Animations`,`Spin`]}));$();export{X as Animations,J as Colors,K as Gallery,W as Playground,G as ReactJsx,q as Sizes,Z as Spin,Y as StrokeWidths,Q as __namedExportsOrder,U as default,$ as n,le as t};