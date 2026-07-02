import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{a as r,n as i,ot as a,r as o,t as s}from"./iframe-B-xp21_X.js";import{r as c,t as l}from"./dist-CSLcGHe3.js";import{r as u,t as d}from"./react-QHvfcGVS.js";import{n as f,t as p}from"./jb-validation-W7g_ROyS.js";var m,h,g=t((()=>{p(),c(),o(),m=new i({fa:{requireMessage:`سوییچ میبایست فعال شود`},en:{requireMessage:`Switch is required`}}),h=class extends HTMLElement{static get formAssociated(){return!0}#e;#t;#n;#r;get value(){return this.#t===null?this.#e:this.#t}set value(e){let t=!!e;this.#e!==t&&(this.#e=t),this.#d(),this.#i()}#i(){this.#r&&typeof this.#r.setFormValue==`function`&&this.#r.setFormValue(`${this.#e}`)}#a;get isLoading(){return this.#a}get form(){return this.#r?.form??null}set isLoading(e){this.#a=!!e,this.#a?this.elements.triggerCircleBar.classList.add(`--loading`):this.elements.triggerCircleBar.classList.remove(`--loading`)}#o;get validation(){return this.#o}get name(){return this.getAttribute(`name`)||``}get isDirty(){return this.#e!==this.initialValue}#s;set required(e){this.#s=!!e,this.#o.checkValiditySync({showError:!1})}get required(){return this.#s}get disabled(){return this.#n}set disabled(e){this.#n=!!e,this.#n?this.#r?.states?.add(`disabled`):this.#r?.states?.delete(`disabled`)}constructor(){super(),this.#e=!1,this.#t=null,this.#n=!1,this.#a=!1,this.#o=new f({clearValidationError:this.clearValidationError.bind(this),getValue:()=>this.value,getValidations:this.#p.bind(this),getValueString:()=>this.value?`true`:`false`,setValidationResult:this.#f.bind(this),showValidationError:this.showValidationError.bind(this)}),this.initialValue=!1,this.#s=!1,this.isAutoValidationDisabled=!1,typeof this.attachInternals==`function`&&(this.#r=this.attachInternals(),this.#r.role=`switch`),this.initWebComponent()}connectedCallback(){this.callOnLoadEvent(),this.initProp(),this.callOnInitEvent()}callOnLoadEvent(){let e=new CustomEvent(`load`,{bubbles:!0,composed:!1});this.dispatchEvent(e)}callOnInitEvent(){let e=new CustomEvent(`init`,{bubbles:!0,composed:!1});this.dispatchEvent(e)}initWebComponent(){let e=this.attachShadow({mode:`open`,delegatesFocus:!0,clonable:!0,serializable:!0});l();let t=document.createElement(`template`);t.innerHTML=`<style>:host(:focus),:host(:focus-visible){outline:none}:host(:dir(rtl)){direction:rtl}:host(:dir(ltr)){direction:ltr}.jb-switch-web-component{flex-direction:row;justify-content:start;align-items:center;gap:.5rem;display:flex}.jb-switch-web-component .caption{color:inherit;transition:all .3s ease-in-out;display:inline-block}.jb-switch-web-component .caption.--active{-webkit-text-stroke:1px;transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper{width:71px;height:44px}.jb-switch-web-component .svg-wrapper .switch-svg{width:71px;height:44px}.jb-switch-web-component .svg-wrapper .switch-svg.--active .trigger-button:dir(rtl){transform:translate(280px)}.jb-switch-web-component .svg-wrapper .switch-svg.--active .trigger-button:dir(ltr){transform:translate(0)}.jb-switch-web-component .svg-wrapper .switch-svg.--active .trigger-circle-bar{stroke:var(--ring-color-active)}.jb-switch-web-component .svg-wrapper .switch-svg.--active .bg-bar{fill:var(--bg-color-active)}.jb-switch-web-component .svg-wrapper .switch-svg .bg-bar{fill:var(--bg-color);transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-button{transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-button:dir(rtl){transform:translate(0)}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-button:dir(ltr){transform:translate(280px)}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-circle{transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-circle-bar{fill:#0000;stroke:var(--ring-color);stroke-width:20px;stroke-dasharray:800 800;stroke-dashoffset:0;stroke-linecap:round;transition:all .3s ease-in-out}.jb-switch-web-component .svg-wrapper .switch-svg .trigger-circle-bar.--loading{animation:1.5s ease-in-out infinite jb-switch-loading-dash}@keyframes jb-switch-loading-dash{0%{stroke-dasharray:1 800;stroke-dashoffset:0}50%{stroke-dasharray:600 800;stroke-dashoffset:-600px}to{stroke-dasharray:1 800;stroke-dashoffset:0}} :host{--ring-color-active:var(--jb-switch-ring-color-active,var(--jb-green));--bg-color-active:var(--jb-switch-bg-color-active,var(--jb-green));--bg-color:var(--jb-switch-bg-color,var(--jb-neutral-10));--ring-color:var(--jb-switch-ring-color,var(--jb-primary))}</style>

  <div class="jb-switch-web-component">
    <div class="caption true-text" part="true-text"></div>
    <div class="svg-wrapper" part="svg-wrapper">
        <svg class="switch-svg" part="switch" viewBox=" 0 0 710 440">
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
            <rect class="bg-bar" part="bar" x="20" y="40" height="360" width="680" stroke="red" rx="180" stroke-width="0" />
            <g class="trigger-button" part="trigger-button">
                <circle class="trigger-circle" fill="url(#color1)" cx="220" cy="220" r="200"
                filter="url(#drop-shadow)" />
            <circle class="trigger-circle-bar" part="trigger-ring" cx=" 220" cy="220" r="120"
                filter="url(#drop-shadow)" />
            </g>

        </svg>
    </div>
    <div class="caption false-text" part="false-text"></div>
    </div>
  `,e.appendChild(t.content.cloneNode(!0)),this.elements={componentWrapper:e.querySelector(`.jb-switch-web-component`),falseText:e.querySelector(`.false-text`),trueText:e.querySelector(`.true-text`),switch:e.querySelector(`.switch-svg`),triggerCircleBar:e.querySelector(`.trigger-circle-bar`),triggerButton:e.querySelector(`.trigger-button`)},this.registerEventListener()}registerEventListener(){this.elements.componentWrapper.addEventListener(`click`,(()=>this.#c()))}initProp(){this.value=this.getAttribute(`value`)===`true`,this.required=this.getAttribute(`required`)===``||this.getAttribute(`required`)===`true`,this.disabled=this.getAttribute(`disabled`)===``||this.getAttribute(`disabled`)===`true`,this.isLoading=this.getAttribute(`loading`)===``||this.getAttribute(`loading`)===`true`}static get observedAttributes(){return[`true-title`,`false-title`,`value`,`name`,`disabled`,`loading`,`required`]}attributeChangedCallback(e,t,n){this.onAttributeChange(e,n)}onAttributeChange(e,t){switch(e){case`value`:this.value=t===`true`;break;case`true-title`:this.elements.trueText.innerText=t??``;break;case`false-title`:this.elements.falseText.innerText=t??``;break;case`disabled`:this.disabled=t===``||t===`true`;break;case`loading`:this.isLoading=t===``||t===`true`;break;case`required`:this.required=t===``||t===`true`}}#c(){if(this.#n)return;this.#t=!this.#e;let e=this.#l();this.#t=null,e||(this.value=!this.#e,this.#u().defaultPrevented&&(this.value=!this.#e))}#l(){let e=new CustomEvent(`before-change`,{cancelable:!0});return this.dispatchEvent(e),e.defaultPrevented}#u(){let e=new Event(`change`,{bubbles:!0,cancelable:!0,composed:!0});return this.dispatchEvent(e),e}focus(){}#d(){this.value?(this.elements.falseText.classList.remove(`--active`),this.elements.trueText.classList.add(`--active`),this.elements.switch.classList.add(`--active`)):(this.elements.trueText.classList.remove(`--active`),this.elements.falseText.classList.add(`--active`),this.elements.switch.classList.remove(`--active`))}#f(e){if(e.isAllValid)this.#r?.setValidity({},``);else{let t={},n=``;e.validationList.forEach((e=>{e.isValid||(e.validation.stateType&&(t[e.validation.stateType]=!0),n===``&&(n=e.message??``))})),this.#r?.setValidity(t,n)}}#p(){return this.#s?[{validator:e=>!1!==e,message:m.get(r,`requireMessage`)}]:[]}showValidationError(e){}clearValidationError(){}get validationMessage(){return this.#r?.validationMessage??``}checkValidity(){return this.#o.checkValiditySync({showError:!1}).isAllValid}reportValidity(){return this.#o.checkValiditySync({showError:!0}).isAllValid}},customElements.get(`jb-switch`)||window.customElements.define(`jb-switch`,h)})),ee=t((()=>{g(),g()})),_,v,y=t((()=>{_=n(a(),1),ee(),d(),v=_.forwardRef(((e,t)=>{let n=(0,_.useRef)(null);(0,_.useImperativeHandle)(t,(()=>n?n.current:void 0),[n]);let{disabled:r,falseTitle:i,isLoading:a,required:o,trueTitle:s,validationList:c,value:l,onBeforeChange:d,onChange:f,onInit:p,onLoad:m,...h}=e;return function(e,t){(0,_.useEffect)((()=>{e.current&&Array.isArray(t.validationList)&&(e.current.validation.list=t.validationList)}),[t.validationList,e.current]),(0,_.useEffect)((()=>{e.current&&typeof t.value==`boolean`&&(e.current.value=t.value)}),[t.value,e.current]),(0,_.useEffect)((()=>{e.current&&typeof t.isLoading==`boolean`&&(e.current.isLoading=t.isLoading)}),[t.isLoading,e.current]),(0,_.useEffect)((()=>{e.current&&typeof t.disabled==`boolean`&&(e.current.disabled=t.disabled)}),[t.disabled,e.current]),(0,_.useEffect)((()=>{e.current&&typeof t.required==`boolean`&&(e.current.required=t.required)}),[t.required,e.current]),(0,_.useEffect)((()=>{e.current&&e.current.setAttribute(`true-title`,t.trueTitle||``)}),[t.trueTitle,e.current]),(0,_.useEffect)((()=>{e.current&&e.current.setAttribute(`false-title`,t.falseTitle||``)}),[t.falseTitle,e.current])}(n,{disabled:r,falseTitle:i,isLoading:a,required:o,trueTitle:s,validationList:c,value:l}),function(e,t){u(e,`load`,t.onLoad,!0),u(e,`init`,t.onInit,!0),u(e,`change`,t.onChange),u(e,`before-change`,t.onBeforeChange)}(n,{onBeforeChange:d,onChange:f,onInit:p,onLoad:m}),_.createElement(`jb-switch`,{ref:n,...h})})),v.displayName=`JBSwitch`})),b=t((()=>{y()}));function x(e){let[t,n]=(0,S.useState)(!1);return(0,C.jsx)(v,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:t,onChange:e=>{n(e.target.value)}})}var S,C,w=t((()=>{S=n(a(),1),b(),C=s(),x.__docgenInfo={description:``,methods:[],displayName:`JBSwitchTest`}}));function T(e){let[t,n]=(0,E.useState)(!1),[r,i]=(0,E.useState)(!1);function a(e){let t=e.target.value;i(!0),setTimeout(()=>{n(t),i(!1)},1500)}return(0,D.jsx)(v,{trueTitle:e.trueTitle,falseTitle:e.falseTitle,value:t,onChange:e=>{a(e)},isLoading:r})}var E,D,O=t((()=>{E=n(a(),1),b(),D=s(),T.__docgenInfo={description:``,methods:[],displayName:`JBSwitchIsLoadingTest`}}));function k(e,t=0){let n=e.querySelectorAll(`jb-switch`)[t];return L(n).toBeTruthy(),L(n.shadowRoot).toBeTruthy(),n}function A(e){let t=e.shadowRoot?.querySelector(`.jb-switch-web-component`);return L(t).toBeTruthy(),t}function j(e){let t=e.shadowRoot?.querySelector(`.switch-svg`);return L(t).toBeTruthy(),t}function M(e){let t=e.shadowRoot?.querySelector(`.true-text`);return L(t).toBeTruthy(),t}function N(e){let t=e.shadowRoot?.querySelector(`.false-text`);return L(t).toBeTruthy(),t}function P(e){let t=e.shadowRoot?.querySelector(`.trigger-circle-bar`);return L(t).toBeTruthy(),t}async function F(e,t){await R(()=>{L(e.value).toBe(t),L(j(e).classList.contains(`--active`)).toBe(t),L(M(e).classList.contains(`--active`)).toBe(t),L(N(e).classList.contains(`--active`)).toBe(!t)})}async function I(e){let t=[],n=document.createElement(`jb-switch`);return n.setAttribute(`true-title`,`on`),n.setAttribute(`false-title`,`off`),n.setAttribute(`required`,``),n.addEventListener(`load`,()=>t.push(`load`)),n.addEventListener(`init`,()=>t.push(`init`)),n.addEventListener(`before-change`,()=>t.push(`before-change`)),n.addEventListener(`change`,()=>t.push(`change`)),e.appendChild(n),await R(()=>{L(t).toEqual(L.arrayContaining([`load`,`init`]))}),{switchElement:n,events:t}}var L,R,z=t((()=>{({expect:L,waitFor:R}=__STORYBOOK_MODULE_TEST__)})),B=e({ActionTest:()=>J,EventTest:()=>Z,LoadingActionTest:()=>Y,Normal:()=>K,RTL:()=>q,WebComponent:()=>X,__namedExportsOrder:()=>Q,default:()=>G}),V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{a(),b(),w(),O(),z(),V=s(),{expect:H,userEvent:U,waitFor:W}=__STORYBOOK_MODULE_TEST__,G={title:`Components/form elements/JBSwitch`,component:v},K={args:{value:!1,trueTitle:`active`,falseTitle:`deactivate`,onChange:e=>{console.log(e)}},play:async({canvasElement:e,args:t})=>{let n=k(e);await W(()=>{H(n.value).toBe(t.value),H(M(n).textContent).toBe(t.trueTitle),H(N(n).textContent).toBe(t.falseTitle)}),await U.click(A(n)),await F(n,!0)}},q={args:{value:!1,trueTitle:`فعال`,falseTitle:`غیر فعال`,onChange:e=>{console.log(e)}},parameters:{themes:{themeOverride:`rtl`}},play:async({canvasElement:e,args:t})=>{let n=k(e);await W(()=>{H(M(n).textContent).toBe(t.trueTitle),H(N(n).textContent).toBe(t.falseTitle)})}},J={render:e=>(0,V.jsx)(x,{...e}),args:{trueTitle:`active`,falseTitle:`deactivate`}},Y={render:e=>(0,V.jsx)(T,{...e}),args:{trueTitle:`active`,falseTitle:`deactivate`,value:!1,isLoading:!0,onChange:e=>{console.log(e)}},play:async({canvasElement:e})=>{let t=k(e);await U.click(A(t)),await W(()=>{H(t.isLoading).toBe(!0),H(P(t).classList.contains(`--loading`)).toBe(!0)}),await W(()=>{H(t.value).toBe(!0),H(t.isLoading).toBe(!1),H(P(t).classList.contains(`--loading`)).toBe(!1)},{timeout:2500})}},X={render:e=>(0,V.jsx)(`jb-switch`,{"true-title":e.trueTitle,"false-title":e.falseTitle}),args:{value:!1,trueTitle:`active`,falseTitle:`deactivate`,onChange:e=>{console.log(e)}},play:async({canvasElement:e,args:t})=>{let n=k(e);await W(()=>{H(n.value).toBe(!1),H(M(n).textContent).toBe(t.trueTitle),H(N(n).textContent).toBe(t.falseTitle)}),await U.click(A(n)),await F(n,!0)}},Z={render:()=>(0,V.jsx)(v,{trueTitle:`active`,falseTitle:`deactivate`,required:!0}),play:async({canvasElement:e})=>{let{switchElement:t,events:n}=await I(e);H(t.reportValidity()).toBe(!1),await U.click(A(t)),await W(()=>{H(t.value).toBe(!0),H(t.reportValidity()).toBe(!0),H(n).toEqual(H.arrayContaining([`before-change`,`change`]))}),t.value=!1,t.addEventListener(`before-change`,e=>e.preventDefault(),{once:!0}),await U.click(A(t)),await W(()=>{H(t.value).toBe(!1)}),t.value=!1,t.addEventListener(`change`,e=>e.preventDefault(),{once:!0}),await U.click(A(t)),await W(()=>{H(t.value).toBe(!1),H(j(t).classList.contains(`--active`)).toBe(!1)})}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    value: false,
    trueTitle: 'active',
    falseTitle: 'deactivate',
    onChange: e => {
      console.log(e);
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const switchElement = getSwitch(canvasElement);
    await waitFor(() => {
      expect(switchElement.value).toBe(args.value);
      expect(getTrueText(switchElement).textContent).toBe(args.trueTitle);
      expect(getFalseText(switchElement).textContent).toBe(args.falseTitle);
    });
    await userEvent.click(getSwitchWrapper(switchElement));
    await waitForSwitchValue(switchElement, true);
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const switchElement = getSwitch(canvasElement);
    await waitFor(() => {
      expect(getTrueText(switchElement).textContent).toBe(args.trueTitle);
      expect(getFalseText(switchElement).textContent).toBe(args.falseTitle);
    });
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <JBSwitchTest {...args} />,
  args: {
    trueTitle: 'active',
    falseTitle: 'deactivate'
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <JBSwitchIsLoadingTest {...args}></JBSwitchIsLoadingTest>,
  args: {
    trueTitle: 'active',
    falseTitle: 'deactivate',
    value: false,
    isLoading: true,
    onChange: e => {
      console.log(e);
    }
  },
  play: async ({
    canvasElement
  }) => {
    const switchElement = getSwitch(canvasElement);
    await userEvent.click(getSwitchWrapper(switchElement));
    await waitFor(() => {
      expect(switchElement.isLoading).toBe(true);
      expect(getTriggerCircleBar(switchElement).classList.contains('--loading')).toBe(true);
    });
    await waitFor(() => {
      expect(switchElement.value).toBe(true);
      expect(switchElement.isLoading).toBe(false);
      expect(getTriggerCircleBar(switchElement).classList.contains('--loading')).toBe(false);
    }, {
      timeout: 2500
    });
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <jb-switch true-title={args.trueTitle} false-title={args.falseTitle}></jb-switch>,
  args: {
    value: false,
    trueTitle: 'active',
    falseTitle: 'deactivate',
    onChange: (e: any) => {
      console.log(e);
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const switchElement = getSwitch(canvasElement);
    await waitFor(() => {
      expect(switchElement.value).toBe(false);
      expect(getTrueText(switchElement).textContent).toBe(args.trueTitle);
      expect(getFalseText(switchElement).textContent).toBe(args.falseTitle);
    });
    await userEvent.click(getSwitchWrapper(switchElement));
    await waitForSwitchValue(switchElement, true);
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <JBSwitch trueTitle="active" falseTitle="deactivate" required />,
  play: async ({
    canvasElement
  }) => {
    const {
      switchElement,
      events
    } = await appendEventSwitch(canvasElement);
    expect(switchElement.reportValidity()).toBe(false);
    await userEvent.click(getSwitchWrapper(switchElement));
    await waitFor(() => {
      expect(switchElement.value).toBe(true);
      expect(switchElement.reportValidity()).toBe(true);
      expect(events).toEqual(expect.arrayContaining(['before-change', 'change']));
    });
    switchElement.value = false;
    switchElement.addEventListener('before-change', event => event.preventDefault(), {
      once: true
    });
    await userEvent.click(getSwitchWrapper(switchElement));
    await waitFor(() => {
      expect(switchElement.value).toBe(false);
    });
    switchElement.value = false;
    switchElement.addEventListener('change', event => event.preventDefault(), {
      once: true
    });
    await userEvent.click(getSwitchWrapper(switchElement));
    await waitFor(() => {
      expect(switchElement.value).toBe(false);
      expect(getSwitchSvg(switchElement).classList.contains('--active')).toBe(false);
    });
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Normal`,`RTL`,`ActionTest`,`LoadingActionTest`,`WebComponent`,`EventTest`]}));$();export{J as ActionTest,Z as EventTest,Y as LoadingActionTest,K as Normal,q as RTL,X as WebComponent,Q as __namedExportsOrder,G as default,$ as n,B as t};