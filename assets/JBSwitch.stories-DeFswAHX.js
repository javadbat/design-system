var le=Object.defineProperty;var F=e=>{throw TypeError(e)};var ce=(e,t,s)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var f=(e,t,s)=>ce(e,typeof t!="symbol"?t+"":t,s),I=(e,t,s)=>t.has(e)||F("Cannot "+s);var r=(e,t,s)=>(I(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>t.has(e)?F("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),u=(e,t,s,i)=>(I(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),y=(e,t,s)=>(I(e,t,"access private method"),s);import{R as w,r as c}from"./index-D4lIrffr.js";import{e as he}from"./jb-validation-BFHHOeHY.js";import{r as C}from"./index-B65NTg4l.js";import{a as A}from"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";var n=class{constructor(e,t){f(this,"lightness");f(this,"chroma");f(this,"hue");f(this,"variableName");this.variableName=t,this.lightness=e.lightness,this.chroma=e.chroma,this.hue=e.hue}get value(){return`oklch(${this.lightness} ${this.chroma} ${this.hue})`}};function g(e){return new n({lightness:6*(3+1.3*e)*.01,chroma:.001*(14+.09*e),hue:258.36},`--jb-neutral-${e}`)}function ue(e){return new n({lightness:e.lightness-.1,chroma:e.chroma-.05,hue:e.hue},`${e.variableName}-pressed`)}function ge(e){const t=Math.min(e.lightness+.12*(1-e.lightness),.985),s=e.chroma*(1-.15*(t-e.lightness));return new n({lightness:t,chroma:Number(s.toFixed(3)),hue:e.hue},`${e.variableName}-l`)}function de(e){const t=Math.max(e.lightness-.12*e.lightness,.02),s=e.chroma*(1-.15*(t-e.lightness));return new n({lightness:t,chroma:s,hue:e.hue},`${e.variableName}-d`)}function me(e){const t=Math.min(e.lightness+.65*(1-e.lightness),.93),s=.55*e.chroma*(1-.08*(t-e.lightness)),i=e.hue>=70&&e.hue<=162?5:-3,a=e.hue+i;return new n({lightness:t,chroma:Number(s.toFixed(3)),hue:a},`${e.variableName}-subtle`)}function pe(e){const t=Math.max(e.lightness-.35,.22),s=Math.min(1.6*e.chroma,.28);return new n({lightness:Number(t.toFixed(3)),chroma:Number(s.toFixed(3)),hue:e.hue},`${e.variableName}-contrast`)}function j(e){return{main:e,hover:(t=e,new n({lightness:t.lightness+.07,chroma:t.chroma+.07,hue:t.hue},`${t.variableName}-hover`)),pressed:ue(e),light:ge(e),dark:de(e),subtle:me(e),contrast:pe(e)};var t}const fe=new n({lightness:.6,chroma:.26,hue:256},"--jb-primary"),be=new n({lightness:.6,chroma:.26,hue:286},"--jb-secondary"),ve=new n({lightness:.75,chroma:.18,hue:70},"--jb-yellow"),we=new n({lightness:.68,chroma:.1484,hue:162.1},"--jb-green"),ye=new n({lightness:.6,chroma:.22,hue:23.21},"--jb-red"),J={single:{black:new n({lightness:.14,chroma:0,hue:0},"--jb-black"),white:new n({lightness:1,chroma:0,hue:0},"--jb-white"),highlight:new n({lightness:.93,chroma:.2302,hue:125.18},"--jb-highlight")},neutral:[g(0),g(1),g(2),g(3),g(4),g(5),g(6),g(7),g(8),g(9),g(10)],primary:j(fe),secondary:j(be),yellow:j(ve),green:j(we),red:j(ye)};function T(e){try{const{value:t,...s}=e;window.CSS.registerProperty({...s}),function(i,a){try{a&&(document.documentElement.style.getPropertyValue(i)||document.documentElement.style.setProperty(i,a))}catch{}}(e.name,t)}catch{}}function o(e,t){T({name:t??e.variableName,syntax:"<color>",inherits:!0,initialValue:e.value})}function Te(){var e;T({name:"--jb-radius",inherits:!0,value:"1rem",initialValue:"16px",syntax:"<length-percentage>"}),T({name:"--jb-radius-xs",inherits:!0,value:"0.5rem",initialValue:"8px",syntax:"<length-percentage>"}),T({name:"--jb-radius-sm",inherits:!0,value:"0.75rem",initialValue:"12px",syntax:"<length-percentage>"}),T({name:"--jb-radius-lg",inherits:!0,value:"1.25rem",initialValue:"20px",syntax:"<length-percentage>"}),T({name:"--jb-radius-xl",inherits:!0,value:"1.5rem",initialValue:"24px",syntax:"<length-percentage>"}),function(t){o(t.neutral[0],"--jb-neutral"),o(t.primary.main),o(t.secondary.main),o(t.single.black),o(t.single.white),o(t.single.highlight),o(t.yellow.main),o(t.green.main),o(t.red.main),o(t.red.main);for(let s=1;s<=10;s++)o(t.neutral[s])}(J),o((e=J).single.black,"--jb-text-primary"),o(e.neutral[7],"--jb-text-secondary"),o(e.single.white,"--jb-text-contrast")}var d,b,p,h,E,v,x,l,ee,te,se,re,ie,je,O,xe=(O=class extends HTMLElement{constructor(){super();m(this,l);m(this,d,!1);m(this,b,null);f(this,"elements");m(this,p,!1);m(this,h);m(this,E,!1);m(this,v,new he({clearValidationError:this.clearValidationError.bind(this),getValue:()=>this.value,getValidations:()=>[],getValueString:()=>this.value?"true":"false",setValidationResult:y(this,l,ie).bind(this),showValidationError:this.showValidationError.bind(this)}));f(this,"initialValue",!1);m(this,x,!1);f(this,"isAutoValidationDisabled",!1);typeof this.attachInternals=="function"&&u(this,h,this.attachInternals()),this.initWebComponent()}static get formAssociated(){return!0}get value(){return r(this,b)!==null?r(this,b):r(this,d)}set value(t){r(this,d)!==t&&u(this,d,t),y(this,l,re).call(this),r(this,h)&&typeof r(this,h).setFormValue=="function"&&r(this,h).setFormValue(`${t}`)}get isLoading(){return r(this,E)}set isLoading(t){u(this,E,t),t?this.elements.triggerCircleBar.classList.add("--loading"):this.elements.triggerCircleBar.classList.remove("--loading")}get validation(){return r(this,v)}get name(){return this.getAttribute("name")||""}get isDirty(){return r(this,d)!==this.initialValue}set required(t){u(this,x,t),r(this,v).checkValiditySync({showError:!1})}get required(){return r(this,x)}get disabled(){return r(this,p)}set disabled(t){var s,i;u(this,p,t),t?(s=r(this,h).states)==null||s.add("disabled"):(i=r(this,h).states)==null||i.delete("disabled")}connectedCallback(){this.callOnLoadEvent(),this.initProp(),this.callOnInitEvent()}callOnLoadEvent(){const t=new CustomEvent("load",{bubbles:!0,composed:!0});this.dispatchEvent(t)}callOnInitEvent(){const t=new CustomEvent("init",{bubbles:!0,composed:!0});this.dispatchEvent(t)}initWebComponent(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});Te();const s=document.createElement("template");s.innerHTML=`<style>:host{--ring-color-active:var(--jb-switch-ring-color-active, var(--jb-green));--bg-color-active:var(--jb-switch-bg-color-active, var(--jb-green));--bg-color: var(--jb-switch-bg-color, var(--jb-neutral-10));--ring-color:var(--jb-switch-ring-color, var(--jb-primary))}:host(:focus),:host(:focus-visible){outline:none}:host(:dir(rtl)){direction:rtl}:host(:dir(ltr)){direction:ltr}.jb-switch-web-component{display:flex;flex-direction:row;align-items:center;justify-content:start;gap:.5rem}.jb-switch-web-component .caption{display:inline-block;color:inherit;transition:all .3s ease-in-out}.jb-switch-web-component .caption.--active{transition:all .3s ease-in-out;-webkit-text-stroke:1px}.jb-switch-web-component .svg-wrapper{width:71px;height:44px}.jb-switch-web-component .svg-wrapper .switch-svg{width:71px;height:44px}.jb-switch-web-component .svg-wrapper .switch-svg.--active .trigger-button:dir(rtl){transform:translateX(280px)}.jb-switch-web-component .svg-wrapper .switch-svg.--active .trigger-button:dir(ltr){transform:translateX(0px)}.jb-switch-web-component .svg-wrapper .switch-svg.--active .trigger-circle-bar{stroke:var(--ring-color-active)}.jb-switch-web-component .svg-wrapper .switch-svg.--active .bg-bar{fill:var(--bg-color-active)}.jb-switch-web-component .svg-wrapper .switch-svg .bg-bar{fill:var(--bg-color);transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-button{transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-button:dir(rtl){transform:translateX(0px)}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-button:dir(ltr){transform:translateX(280px)}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-circle{transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-circle-bar{fill:rgba(0,0,0,0);stroke:var(--ring-color);stroke-width:20px;transition:all .3s ease-in-out;stroke-dasharray:800,800;stroke-dashoffset:0;stroke-linecap:round}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-circle-bar.--loading{animation:jb-switch-loading-dash 1.5s ease-in-out infinite}@keyframes jb-switch-loading-dash{0%{stroke-dasharray:1,800;stroke-dashoffset:0}50%{stroke-dasharray:600,800;stroke-dashoffset:-600}100%{stroke-dasharray:1,800;stroke-dashoffset:0}}</style>
<div class="jb-switch-web-component">
    <div class="caption true-text"></div>
    <div class="svg-wrapper">
        <svg class="switch-svg" viewBox=" 0 0 710 440">
            <defs>
                <filter xmlns="http://www.w3.org/2000/svg" id="drop-shadow" height="150%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="7"></feGaussianBlur>
                    <feOffset dx="0" dy="0" result="offsetblur"></feOffset>
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.9"></feFuncA>
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
                <radialGradient id="color1" cx="50%" cy="50%" r="75%">
                    <stop offset="0%" style="stop-color:rgb(255,255,255); stop-opacity:1"/>
                    <stop offset="99%" style="stop-color:rgb(224,224,224); stop-opacity:1"/>
                    <stop offset="100%" style="stop-color:rgb(224,224,224); stop-opacity:1"/>
                </radialGradient>
            </defs>
            <rect class="bg-bar" x="20" y="40" height="360" width="680" stroke="red" rx="180" stroke-width="0"/>
            <g class="trigger-button">
                <circle class="trigger-circle" fill="url(#color1)" cx="220" cy="220" r="200" filter="url(#drop-shadow)"/>
            <circle class="trigger-circle-bar" cx=" 220" cy="220" r="120" filter="url(#drop-shadow)"/>
            </g>

        </svg>
    </div>
    <div class="caption false-text"></div>
    </div>`,t.appendChild(s.content.cloneNode(!0)),this.elements={componentWrapper:t.querySelector(".jb-switch-web-component"),falseText:t.querySelector(".false-text"),trueText:t.querySelector(".true-text"),switch:t.querySelector(".switch-svg"),triggerCircleBar:t.querySelector(".trigger-circle-bar"),triggerButton:t.querySelector(".trigger-button")},this.registerEventListener()}registerEventListener(){this.elements.componentWrapper.addEventListener("click",()=>y(this,l,ee).call(this))}initProp(){u(this,p,!1),this.value=this.getAttribute("value")==="true"||!1}static get observedAttributes(){return["true-title","false-title","value","name","disabled"]}attributeChangedCallback(t,s,i){this.onAttributeChange(t,i)}onAttributeChange(t,s){switch(t){case"value":this.value=!!s;break;case"true-title":this.elements.trueText.innerText=s;break;case"false-title":this.elements.falseText.innerText=s;break;case"disabled":s==""||s==="true"?u(this,p,!0):s!="false"&&s!=null&&s!=null||u(this,p,!1)}}focus(){}showValidationError(t){}clearValidationError(){}get validationMessage(){return r(this,h).validationMessage}checkValidity(){return r(this,v).checkValiditySync({showError:!1}).isAllValid}reportValidity(){return r(this,v).checkValiditySync({showError:!0}).isAllValid}},d=new WeakMap,b=new WeakMap,p=new WeakMap,h=new WeakMap,E=new WeakMap,v=new WeakMap,x=new WeakMap,l=new WeakSet,ee=function(){if(r(this,p))return;u(this,b,!r(this,d));const t=y(this,l,te).call(this);u(this,b,null),!t&&(this.value=!r(this,d),y(this,l,se).call(this).defaultPrevented&&(this.value=!r(this,d)))},te=function(){const t=new CustomEvent("before-change",{cancelable:!0});return this.dispatchEvent(t),t.defaultPrevented},se=function(){const t=new Event("change",{bubbles:!0,cancelable:!0,composed:!0});return this.dispatchEvent(t),t},re=function(){this.value?(this.elements.falseText.classList.remove("--active"),this.elements.trueText.classList.add("--active"),this.elements.switch.classList.add("--active")):(this.elements.trueText.classList.remove("--active"),this.elements.falseText.classList.add("--active"),this.elements.switch.classList.remove("--active"))},ie=function(t){if(t.isAllValid)r(this,h).setValidity({},"");else{const s={};let i="";t.validationList.forEach(a=>{a.isValid||(a.validation.stateType&&(s[a.validation.stateType]=!0),i==""&&(i=a.message))}),r(this,h).setValidity(s,i)}},je=function(){return r(this,x)?[{validator:t=>t!==!1,message:"سوییچ میبایست فعال شود"}]:[]},O);!customElements.get("jb-switch")&&window.customElements.define("jb-switch",xe);let B=w.forwardRef((e,t)=>{let s=c.useRef(null),[i,a]=c.useState(0);return c.useImperativeHandle(t,()=>s?s.current:void 0,[s]),c.useEffect(()=>{a(i+1)},[s.current]),c.useEffect(()=>{s.current&&e.isLoading!==void 0&&e.isLoading!==null&&typeof e.isLoading=="boolean"&&(s.current.isLoading=e.isLoading)},[e.isLoading]),c.useEffect(()=>{s.current&&e.value!==null&&e.value!==void 0&&(s.current.value=e.value)},[e.value]),c.useEffect(()=>{s.current&&typeof e.style=="string"&&s.current.setAttribute("style",e.style)},[e.style]),c.useEffect(()=>{s.current&&typeof e.name=="string"?s.current.setAttribute("name",e.name):s.current&&e.name==null&&s.current.removeAttribute("name")},[e.name]),c.useEffect(()=>{s.current&&Array.isArray(e.validationList)&&(s.current.validation.list=e.validationList)},[e.validationList]),C(s,"load",e.onLoad,!0),C(s,"init",e.onInit,!0),C(s,"change",e.onChange),C(s,"before-change",e.onBeforeChange),w.createElement("jb-switch",{class:e.className?e.className:"","true-title":e.trueTitle?e.trueTitle:"","false-title":e.falseTitle?e.falseTitle:"",ref:s})});B.displayName="JBSwitch";function ne(e){const[t,s]=c.useState(!1);return w.createElement(B,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:t,onChange:i=>{s(i.target.value)}})}ne.__docgenInfo={description:"",methods:[],displayName:"JBSwitchTest"};function ae(e){const[t,s]=c.useState(!1),[i,a]=c.useState(!1);function $(M){const oe=M.target.value;a(!0),setTimeout(()=>{s(oe),a(!1)},1500)}return w.createElement(B,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:t,onChange:M=>{$(M)},isLoading:i})}ae.__docgenInfo={description:"",methods:[],displayName:"JBSwitchIsLoadingTest"};const Ne={title:"Components/form elements/JBSwitch",component:B},L={args:{value:!1,trueTitle:"فعال",falseTitle:"غیر فعال",onChange:e=>{console.log(e),A("onChange")(e)}}},S={args:{value:!1,trueTitle:"فعال",falseTitle:"غیر فعال",onChange:e=>{console.log(e),A("onChange")(e)}},parameters:{themes:{themeOverride:"rtl"}}},V={render:e=>w.createElement(ne,{...e}),args:{trueTitle:"فعال",falseTitle:"غیر فعال"}},k={render:e=>w.createElement(ae,{...e}),args:{trueTitle:"فعال",falseTitle:"غیر فعال",value:!1,isLoading:!0,onChange:e=>{console.log(e),A("onChange")(e)}}},N={render:e=>w.createElement("jb-switch",{"true-title":e.trueTitle,"false-title":e.falseTitle}),args:{value:!1,trueTitle:"فعال",falseTitle:"غیر فعال",onChange:e=>{console.log(e),A("onChange")(e)}}};var q,P,R;L.parameters={...L.parameters,docs:{...(q=L.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    value: false,
    trueTitle: 'فعال',
    falseTitle: 'غیر فعال',
    onChange: e => {
      console.log(e);
      action('onChange')(e);
    }
  }
}`,...(R=(P=L.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var W,_,G;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: false,
    trueTitle: 'فعال',
    falseTitle: 'غیر فعال',
    onChange: e => {
      console.log(e);
      action('onChange')(e);
    }
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(G=(_=S.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var X,D,H;V.parameters={...V.parameters,docs:{...(X=V.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <JBSwitchTest {...args} />,
  args: {
    trueTitle: 'فعال',
    falseTitle: 'غیر فعال'
  }
}`,...(H=(D=V.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var z,K,Q;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <JBSwitchIsLoadingTest {...args}></JBSwitchIsLoadingTest>,
  args: {
    trueTitle: 'فعال',
    falseTitle: 'غیر فعال',
    value: false,
    isLoading: true,
    onChange: e => {
      console.log(e);
      action('onChange')(e);
    }
  }
}`,...(Q=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: (args: any) => <jb-switch true-title={args.trueTitle} false-title={args.falseTitle}></jb-switch>,
  args: {
    value: false,
    trueTitle: 'فعال',
    falseTitle: 'غیر فعال',
    onChange: e => {
      console.log(e);
      action('onChange')(e);
    }
  }
}`,...(Z=(Y=N.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ae=["Normal","RTL","ActionTest","LoadingActionTest","WebComponent"];export{V as ActionTest,k as LoadingActionTest,L as Normal,S as RTL,N as WebComponent,Ae as __namedExportsOrder,Ne as default};
