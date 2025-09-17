var Z=Object.defineProperty;var k=e=>{throw TypeError(e)};var ee=(e,t,s)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var w=(e,t,s)=>ee(e,typeof t!="symbol"?t+"":t,s),V=(e,t,s)=>t.has(e)||k("Cannot "+s);var r=(e,t,s)=>(V(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?k("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),l=(e,t,s,i)=>(V(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),v=(e,t,s)=>(V(e,t,"access private method"),s);import{R as p,r as n}from"./index-0yr9KlQE.js";import{e as te}from"./jb-validation-BFHHOeHY.js";import{j as se}from"./index-C1o-zhIV.js";import{r as T}from"./index-Dsu68ezD.js";var c,g,d,o,b,f,m,a,$,z,K,Q,U,ie,A,re=(A=class extends HTMLElement{constructor(){super();h(this,a);h(this,c,!1);h(this,g,null);w(this,"elements");h(this,d,!1);h(this,o);h(this,b,!1);h(this,f,new te({clearValidationError:this.clearValidationError.bind(this),getValue:()=>this.value,getValidations:()=>[],getValueString:()=>this.value?"true":"false",setValidationResult:v(this,a,U).bind(this),showValidationError:this.showValidationError.bind(this)}));w(this,"initialValue",!1);h(this,m,!1);w(this,"isAutoValidationDisabled",!1);typeof this.attachInternals=="function"&&l(this,o,this.attachInternals()),this.initWebComponent()}static get formAssociated(){return!0}get value(){return r(this,g)!==null?r(this,g):r(this,c)}set value(t){r(this,c)!==t&&l(this,c,t),v(this,a,Q).call(this),r(this,o)&&typeof r(this,o).setFormValue=="function"&&r(this,o).setFormValue(`${t}`)}get isLoading(){return r(this,b)}set isLoading(t){l(this,b,t),t?this.elements.triggerCircleBar.classList.add("--loading"):this.elements.triggerCircleBar.classList.remove("--loading")}get validation(){return r(this,f)}get name(){return this.getAttribute("name")||""}get isDirty(){return r(this,c)!==this.initialValue}set required(t){l(this,m,t),r(this,f).checkValiditySync({showError:!1})}get required(){return r(this,m)}get disabled(){return r(this,d)}set disabled(t){var s,i;l(this,d,t),t?(s=r(this,o).states)==null||s.add("disabled"):(i=r(this,o).states)==null||i.delete("disabled")}connectedCallback(){this.callOnLoadEvent(),this.initProp(),this.callOnInitEvent()}callOnLoadEvent(){const t=new CustomEvent("load",{bubbles:!0,composed:!0});this.dispatchEvent(t)}callOnInitEvent(){const t=new CustomEvent("init",{bubbles:!0,composed:!0});this.dispatchEvent(t)}initWebComponent(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});se();const s=document.createElement("template");s.innerHTML=`<style>:host(:focus),:host(:focus-visible){outline:none}:host(:dir(rtl)){direction:rtl}:host(:dir(ltr)){direction:ltr}.jb-switch-web-component{flex-direction:row;justify-content:start;align-items:center;gap:.5rem;display:flex}.jb-switch-web-component .caption{color:inherit;transition:all .3s ease-in-out;display:inline-block}.jb-switch-web-component .caption.--active{-webkit-text-stroke:1px;transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper{width:71px;height:44px}.jb-switch-web-component .svg-wrapper .switch-svg{width:71px;height:44px}.jb-switch-web-component .svg-wrapper .switch-svg.--active .trigger-button:dir(rtl){transform:translate(280px)}.jb-switch-web-component .svg-wrapper .switch-svg.--active .trigger-button:dir(ltr){transform:translate(0)}.jb-switch-web-component .svg-wrapper .switch-svg.--active .trigger-circle-bar{stroke:var(--ring-color-active)}.jb-switch-web-component .svg-wrapper .switch-svg.--active .bg-bar{fill:var(--bg-color-active)}.jb-switch-web-component .svg-wrapper .switch-svg .bg-bar{fill:var(--bg-color);transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-button{transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-button:dir(rtl){transform:translate(0)}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-button:dir(ltr){transform:translate(280px)}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-circle{transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-circle-bar{fill:#0000;stroke:var(--ring-color);stroke-width:20px;stroke-dasharray:800 800;stroke-dashoffset:0;stroke-linecap:round;transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-circle-bar.--loading{animation:1.5s ease-in-out infinite jb-switch-loading-dash}@keyframes jb-switch-loading-dash{0%{stroke-dasharray:1 800;stroke-dashoffset:0}50%{stroke-dasharray:600 800;stroke-dashoffset:-600px}to{stroke-dasharray:1 800;stroke-dashoffset:0}} :host{--ring-color-active:var(--jb-switch-ring-color-active,var(--jb-green));--bg-color-active:var(--jb-switch-bg-color-active,var(--jb-green));--bg-color:var(--jb-switch-bg-color,var(--jb-neutral-10));--ring-color:var(--jb-switch-ring-color,var(--jb-primary))}</style>

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
                    <stop offset="0%" style="stop-color:rgb(255,255,255); stop-opacity:1" />
                    <stop offset="99%" style="stop-color:rgb(224,224,224); stop-opacity:1" />
                    <stop offset="100%" style="stop-color:rgb(224,224,224); stop-opacity:1" />
                </radialGradient>
            </defs>
            <rect class="bg-bar" x="20" y="40" height="360" width="680" stroke="red" rx="180" stroke-width="0" />
            <g class="trigger-button">
                <circle class="trigger-circle" fill="url(#color1)" cx="220" cy="220" r="200"
                filter="url(#drop-shadow)" />
            <circle class="trigger-circle-bar" cx=" 220" cy="220" r="120"
                filter="url(#drop-shadow)" />
            </g>

        </svg>
    </div>
    <div class="caption false-text"></div>
    </div>
  `,t.appendChild(s.content.cloneNode(!0)),this.elements={componentWrapper:t.querySelector(".jb-switch-web-component"),falseText:t.querySelector(".false-text"),trueText:t.querySelector(".true-text"),switch:t.querySelector(".switch-svg"),triggerCircleBar:t.querySelector(".trigger-circle-bar"),triggerButton:t.querySelector(".trigger-button")},this.registerEventListener()}registerEventListener(){this.elements.componentWrapper.addEventListener("click",()=>v(this,a,$).call(this))}initProp(){l(this,d,!1),this.value=this.getAttribute("value")==="true"||!1}static get observedAttributes(){return["true-title","false-title","value","name","disabled"]}attributeChangedCallback(t,s,i){this.onAttributeChange(t,i)}onAttributeChange(t,s){switch(t){case"value":this.value=!!s;break;case"true-title":this.elements.trueText.innerText=s;break;case"false-title":this.elements.falseText.innerText=s;break;case"disabled":s==""||s==="true"?l(this,d,!0):s!="false"&&s!=null&&s!=null||l(this,d,!1)}}focus(){}showValidationError(t){}clearValidationError(){}get validationMessage(){return r(this,o).validationMessage}checkValidity(){return r(this,f).checkValiditySync({showError:!1}).isAllValid}reportValidity(){return r(this,f).checkValiditySync({showError:!0}).isAllValid}},c=new WeakMap,g=new WeakMap,d=new WeakMap,o=new WeakMap,b=new WeakMap,f=new WeakMap,m=new WeakMap,a=new WeakSet,$=function(){if(r(this,d))return;l(this,g,!r(this,c));const t=v(this,a,z).call(this);l(this,g,null),t||(this.value=!r(this,c),v(this,a,K).call(this).defaultPrevented&&(this.value=!r(this,c)))},z=function(){const t=new CustomEvent("before-change",{cancelable:!0});return this.dispatchEvent(t),t.defaultPrevented},K=function(){const t=new Event("change",{bubbles:!0,cancelable:!0,composed:!0});return this.dispatchEvent(t),t},Q=function(){this.value?(this.elements.falseText.classList.remove("--active"),this.elements.trueText.classList.add("--active"),this.elements.switch.classList.add("--active")):(this.elements.trueText.classList.remove("--active"),this.elements.falseText.classList.add("--active"),this.elements.switch.classList.remove("--active"))},U=function(t){if(t.isAllValid)r(this,o).setValidity({},"");else{const s={};let i="";t.validationList.forEach(u=>{u.isValid||(u.validation.stateType&&(s[u.validation.stateType]=!0),i==""&&(i=u.message))}),r(this,o).setValidity(s,i)}},ie=function(){return r(this,m)?[{validator:t=>t!==!1,message:"سوییچ میبایست فعال شود"}]:[]},A);customElements.get("jb-switch")||window.customElements.define("jb-switch",re);let C=p.forwardRef((e,t)=>{let s=n.useRef(null),[i,u]=n.useState(0);return n.useImperativeHandle(t,()=>s?s.current:void 0,[s]),n.useEffect(()=>{u(i+1)},[s.current]),n.useEffect(()=>{s.current&&e.isLoading!==void 0&&e.isLoading!==null&&typeof e.isLoading=="boolean"&&(s.current.isLoading=e.isLoading)},[e.isLoading]),n.useEffect(()=>{s.current&&e.value!==null&&e.value!==void 0&&(s.current.value=e.value)},[e.value]),n.useEffect(()=>{s.current&&typeof e.style=="string"&&s.current.setAttribute("style",e.style)},[e.style]),n.useEffect(()=>{s.current&&typeof e.name=="string"?s.current.setAttribute("name",e.name):s.current&&e.name==null&&s.current.removeAttribute("name")},[e.name]),n.useEffect(()=>{s.current&&Array.isArray(e.validationList)&&(s.current.validation.list=e.validationList)},[e.validationList]),T(s,"load",e.onLoad,!0),T(s,"init",e.onInit,!0),T(s,"change",e.onChange),T(s,"before-change",e.onBeforeChange),p.createElement("jb-switch",{class:e.className?e.className:"","true-title":e.trueTitle?e.trueTitle:"","false-title":e.falseTitle?e.falseTitle:"",ref:s})});C.displayName="JBSwitch";function ae(e){const[t,s]=n.useState(!1);return p.createElement(C,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:t,onChange:i=>{s(i.target.value)}})}function ne(e){const[t,s]=n.useState(!1),[i,u]=n.useState(!1);function X(S){const Y=S.target.value;u(!0),setTimeout(()=>{s(Y),u(!1)},1500)}return p.createElement(C,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:t,onChange:S=>{X(S)},isLoading:i})}const de={title:"Components/form elements/JBSwitch",component:C},y={args:{value:!1,trueTitle:"فعال",falseTitle:"غیر فعال",onChange:e=>{console.log(e)}}},E={args:{value:!1,trueTitle:"فعال",falseTitle:"غیر فعال",onChange:e=>{console.log(e)}},parameters:{themes:{themeOverride:"rtl"}}},L={render:e=>p.createElement(ae,{...e}),args:{trueTitle:"فعال",falseTitle:"غیر فعال"}},x={render:e=>p.createElement(ne,{...e}),args:{trueTitle:"فعال",falseTitle:"غیر فعال",value:!1,isLoading:!0,onChange:e=>{console.log(e)}}},j={render:e=>p.createElement("jb-switch",{"true-title":e.trueTitle,"false-title":e.falseTitle}),args:{value:!1,trueTitle:"فعال",falseTitle:"غیر فعال",onChange:e=>{console.log(e)}}};var B,I,M;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    value: false,
    trueTitle: 'فعال',
    falseTitle: 'غیر فعال',
    onChange: e => {
      console.log(e);
    }
  }
}`,...(M=(I=y.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var N,O,q;E.parameters={...E.parameters,docs:{...(N=E.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: false,
    trueTitle: 'فعال',
    falseTitle: 'غیر فعال',
    onChange: e => {
      console.log(e);
    }
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(q=(O=E.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var J,R,W;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <JBSwitchTest {...args} />,
  args: {
    trueTitle: 'فعال',
    falseTitle: 'غیر فعال'
  }
}`,...(W=(R=L.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var F,G,P;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <JBSwitchIsLoadingTest {...args}></JBSwitchIsLoadingTest>,
  args: {
    trueTitle: 'فعال',
    falseTitle: 'غیر فعال',
    value: false,
    isLoading: true,
    onChange: e => {
      console.log(e);
    }
  }
}`,...(P=(G=x.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var D,H,_;j.parameters={...j.parameters,docs:{...(D=j.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args: any) => <jb-switch true-title={args.trueTitle} false-title={args.falseTitle}></jb-switch>,
  args: {
    value: false,
    trueTitle: 'فعال',
    falseTitle: 'غیر فعال',
    onChange: e => {
      console.log(e);
    }
  }
}`,...(_=(H=j.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};const ge=["Normal","RTL","ActionTest","LoadingActionTest","WebComponent"];export{L as ActionTest,x as LoadingActionTest,y as Normal,E as RTL,j as WebComponent,ge as __namedExportsOrder,de as default};
