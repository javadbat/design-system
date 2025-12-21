var ee=Object.defineProperty;var k=e=>{throw TypeError(e)};var te=(e,t,s)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var w=(e,t,s)=>te(e,typeof t!="symbol"?t+"":t,s),V=(e,t,s)=>t.has(e)||k("Cannot "+s);var r=(e,t,s)=>(V(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?k("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),l=(e,t,s,i)=>(V(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),g=(e,t,s)=>(V(e,t,"access private method"),s);import{R as p,r as o}from"./index-CC6F48bw.js";import{e as se}from"./jb-validation-BFHHOeHY.js";import{j as re}from"./index-DA-aheCX.js";import{a as ie,t as ae}from"./index-NH_qbYOC.js";import{r as T}from"./index-Drw24fzo.js";const ne=new ie({fa:{requireMessage:"سوییچ میبایست فعال شود"},en:{requireMessage:"Switch is required"}});var c,f,d,n,b,v,m,a,_,z,K,Q,U,X,A,oe=(A=class extends HTMLElement{constructor(){super();h(this,a);h(this,c,!1);h(this,f,null);w(this,"elements");h(this,d,!1);h(this,n);h(this,b,!1);h(this,v,new se({clearValidationError:this.clearValidationError.bind(this),getValue:()=>this.value,getValidations:g(this,a,X).bind(this),getValueString:()=>this.value?"true":"false",setValidationResult:g(this,a,U).bind(this),showValidationError:this.showValidationError.bind(this)}));w(this,"initialValue",!1);h(this,m,!1);w(this,"isAutoValidationDisabled",!1);typeof this.attachInternals=="function"&&(l(this,n,this.attachInternals()),r(this,n).role="switch"),this.initWebComponent()}static get formAssociated(){return!0}get value(){return r(this,f)!==null?r(this,f):r(this,c)}set value(t){r(this,c)!==t&&l(this,c,t),g(this,a,Q).call(this),r(this,n)&&typeof r(this,n).setFormValue=="function"&&r(this,n).setFormValue(`${t}`)}get isLoading(){return r(this,b)}set isLoading(t){l(this,b,t),t?this.elements.triggerCircleBar.classList.add("--loading"):this.elements.triggerCircleBar.classList.remove("--loading")}get validation(){return r(this,v)}get name(){return this.getAttribute("name")||""}get isDirty(){return r(this,c)!==this.initialValue}set required(t){l(this,m,t),r(this,v).checkValiditySync({showError:!1})}get required(){return r(this,m)}get disabled(){return r(this,d)}set disabled(t){var s,i;l(this,d,t),t?(s=r(this,n).states)==null||s.add("disabled"):(i=r(this,n).states)==null||i.delete("disabled")}connectedCallback(){this.callOnLoadEvent(),this.initProp(),this.callOnInitEvent()}callOnLoadEvent(){const t=new CustomEvent("load",{bubbles:!0,composed:!0});this.dispatchEvent(t)}callOnInitEvent(){const t=new CustomEvent("init",{bubbles:!0,composed:!0});this.dispatchEvent(t)}initWebComponent(){const t=this.attachShadow({mode:"open",delegatesFocus:!0});re();const s=document.createElement("template");s.innerHTML=`<style>:host(:focus),:host(:focus-visible){outline:none}:host(:dir(rtl)){direction:rtl}:host(:dir(ltr)){direction:ltr}.jb-switch-web-component{flex-direction:row;justify-content:start;align-items:center;gap:.5rem;display:flex}.jb-switch-web-component .caption{color:inherit;transition:all .3s ease-in-out;display:inline-block}.jb-switch-web-component .caption.--active{-webkit-text-stroke:1px;transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper{width:71px;height:44px}.jb-switch-web-component .svg-wrapper .switch-svg{width:71px;height:44px}.jb-switch-web-component .svg-wrapper .switch-svg.--active .trigger-button:dir(rtl){transform:translate(280px)}.jb-switch-web-component .svg-wrapper .switch-svg.--active .trigger-button:dir(ltr){transform:translate(0)}.jb-switch-web-component .svg-wrapper .switch-svg.--active .trigger-circle-bar{stroke:var(--ring-color-active)}.jb-switch-web-component .svg-wrapper .switch-svg.--active .bg-bar{fill:var(--bg-color-active)}.jb-switch-web-component .svg-wrapper .switch-svg .bg-bar{fill:var(--bg-color);transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-button{transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-button:dir(rtl){transform:translate(0)}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-button:dir(ltr){transform:translate(280px)}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-circle{transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-circle-bar{fill:#0000;stroke:var(--ring-color);stroke-width:20px;stroke-dasharray:800 800;stroke-dashoffset:0;stroke-linecap:round;transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-circle-bar.--loading{animation:1.5s ease-in-out infinite jb-switch-loading-dash}@keyframes jb-switch-loading-dash{0%{stroke-dasharray:1 800;stroke-dashoffset:0}50%{stroke-dasharray:600 800;stroke-dashoffset:-600px}to{stroke-dasharray:1 800;stroke-dashoffset:0}} :host{--ring-color-active:var(--jb-switch-ring-color-active,var(--jb-green));--bg-color-active:var(--jb-switch-bg-color-active,var(--jb-green));--bg-color:var(--jb-switch-bg-color,var(--jb-neutral-10));--ring-color:var(--jb-switch-ring-color,var(--jb-primary))}</style>

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
  `,t.appendChild(s.content.cloneNode(!0)),this.elements={componentWrapper:t.querySelector(".jb-switch-web-component"),falseText:t.querySelector(".false-text"),trueText:t.querySelector(".true-text"),switch:t.querySelector(".switch-svg"),triggerCircleBar:t.querySelector(".trigger-circle-bar"),triggerButton:t.querySelector(".trigger-button")},this.registerEventListener()}registerEventListener(){this.elements.componentWrapper.addEventListener("click",()=>g(this,a,_).call(this))}initProp(){l(this,d,!1),this.value=this.getAttribute("value")==="true"||!1}static get observedAttributes(){return["true-title","false-title","value","name","disabled"]}attributeChangedCallback(t,s,i){this.onAttributeChange(t,i)}onAttributeChange(t,s){switch(t){case"value":this.value=!!s;break;case"true-title":this.elements.trueText.innerText=s;break;case"false-title":this.elements.falseText.innerText=s;break;case"disabled":s==""||s==="true"?l(this,d,!0):s!="false"&&s!=null&&s!=null||l(this,d,!1)}}focus(){}showValidationError(t){}clearValidationError(){}get validationMessage(){return r(this,n).validationMessage}checkValidity(){return r(this,v).checkValiditySync({showError:!1}).isAllValid}reportValidity(){return r(this,v).checkValiditySync({showError:!0}).isAllValid}},c=new WeakMap,f=new WeakMap,d=new WeakMap,n=new WeakMap,b=new WeakMap,v=new WeakMap,m=new WeakMap,a=new WeakSet,_=function(){if(r(this,d))return;l(this,f,!r(this,c));const t=g(this,a,z).call(this);l(this,f,null),t||(this.value=!r(this,c),g(this,a,K).call(this).defaultPrevented&&(this.value=!r(this,c)))},z=function(){const t=new CustomEvent("before-change",{cancelable:!0});return this.dispatchEvent(t),t.defaultPrevented},K=function(){const t=new Event("change",{bubbles:!0,cancelable:!0,composed:!0});return this.dispatchEvent(t),t},Q=function(){this.value?(this.elements.falseText.classList.remove("--active"),this.elements.trueText.classList.add("--active"),this.elements.switch.classList.add("--active")):(this.elements.trueText.classList.remove("--active"),this.elements.falseText.classList.add("--active"),this.elements.switch.classList.remove("--active"))},U=function(t){if(t.isAllValid)r(this,n).setValidity({},"");else{const s={};let i="";t.validationList.forEach(u=>{u.isValid||(u.validation.stateType&&(s[u.validation.stateType]=!0),i==""&&(i=u.message))}),r(this,n).setValidity(s,i)}},X=function(){return r(this,m)?[{validator:t=>t!==!1,message:ne.get(ae,"requireMessage")}]:[]},A);customElements.get("jb-switch")||window.customElements.define("jb-switch",oe);let S=p.forwardRef((e,t)=>{let s=o.useRef(null),[i,u]=o.useState(0);return o.useImperativeHandle(t,()=>s?s.current:void 0,[s]),o.useEffect(()=>{u(i+1)},[s.current]),o.useEffect(()=>{s.current&&e.isLoading!==void 0&&e.isLoading!==null&&typeof e.isLoading=="boolean"&&(s.current.isLoading=e.isLoading)},[e.isLoading]),o.useEffect(()=>{s.current&&e.value!==null&&e.value!==void 0&&(s.current.value=e.value)},[e.value]),o.useEffect(()=>{s.current&&typeof e.style=="string"&&s.current.setAttribute("style",e.style)},[e.style]),o.useEffect(()=>{s.current&&typeof e.name=="string"?s.current.setAttribute("name",e.name):s.current&&e.name==null&&s.current.removeAttribute("name")},[e.name]),o.useEffect(()=>{s.current&&Array.isArray(e.validationList)&&(s.current.validation.list=e.validationList)},[e.validationList]),T(s,"load",e.onLoad,!0),T(s,"init",e.onInit,!0),T(s,"change",e.onChange),T(s,"before-change",e.onBeforeChange),p.createElement("jb-switch",{class:e.className?e.className:"","true-title":e.trueTitle?e.trueTitle:"","false-title":e.falseTitle?e.falseTitle:"",ref:s})});S.displayName="JBSwitch";function le(e){const[t,s]=o.useState(!1);return p.createElement(S,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:t,onChange:i=>{s(i.target.value)}})}function ce(e){const[t,s]=o.useState(!1),[i,u]=o.useState(!1);function Y(C){const Z=C.target.value;u(!0),setTimeout(()=>{s(Z),u(!1)},1500)}return p.createElement(S,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:t,onChange:C=>{Y(C)},isLoading:i})}const pe={title:"Components/form elements/JBSwitch",component:S},y={args:{value:!1,trueTitle:"active",falseTitle:"deactivate",onChange:e=>{console.log(e)}}},E={args:{value:!1,trueTitle:"فعال",falseTitle:"غیر فعال",onChange:e=>{console.log(e)}},parameters:{themes:{themeOverride:"rtl"}}},L={render:e=>p.createElement(le,{...e}),args:{trueTitle:"active",falseTitle:"deactivate"}},x={render:e=>p.createElement(ce,{...e}),args:{trueTitle:"active",falseTitle:"deactivate",value:!1,isLoading:!0,onChange:e=>{console.log(e)}}},j={render:e=>p.createElement("jb-switch",{"true-title":e.trueTitle,"false-title":e.falseTitle}),args:{value:!1,trueTitle:"active",falseTitle:"deactivate",onChange:e=>{console.log(e)}}};var B,M,q;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    value: false,
    trueTitle: 'active',
    falseTitle: 'deactivate',
    onChange: e => {
      console.log(e);
    }
  }
}`,...(q=(M=y.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var I,N,O;E.parameters={...E.parameters,docs:{...(I=E.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(O=(N=E.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var J,R,W;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <JBSwitchTest {...args} />,
  args: {
    trueTitle: 'active',
    falseTitle: 'deactivate'
  }
}`,...(W=(R=L.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var F,G,P;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <JBSwitchIsLoadingTest {...args}></JBSwitchIsLoadingTest>,
  args: {
    trueTitle: 'active',
    falseTitle: 'deactivate',
    value: false,
    isLoading: true,
    onChange: e => {
      console.log(e);
    }
  }
}`,...(P=(G=x.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var D,H,$;j.parameters={...j.parameters,docs:{...(D=j.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args: any) => <jb-switch true-title={args.trueTitle} false-title={args.falseTitle}></jb-switch>,
  args: {
    value: false,
    trueTitle: 'active',
    falseTitle: 'deactivate',
    onChange: (e: any) => {
      console.log(e);
    }
  }
}`,...($=(H=j.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};const me=["Normal","RTL","ActionTest","LoadingActionTest","WebComponent"];export{L as ActionTest,x as LoadingActionTest,y as Normal,E as RTL,j as WebComponent,me as __namedExportsOrder,pe as default};
