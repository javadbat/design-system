import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{a as r,n as i,ot as a,r as o}from"./iframe-B-xp21_X.js";import{r as s,t as c}from"./jb-input-CpXSv7io.js";var l,u,d=t((()=>{c(),o(),l=new i({fa:{validNumberMessage:`شماره موبایل معتبر نیست`},en:{validNumberMessage:`mobile number is not valid`}}),u=class extends s{constructor(){super(),this.initMobileInputWebComponent()}initMobileInputWebComponent(){let e=document.createElement(`template`);e.innerHTML=`<style>.jb-input-web-component{--jb-input-input-direction:var(--jb-mobile-input-input-direction,ltr)}</style>`,this.shadowRoot.appendChild(e.content.cloneNode(!0)),this.validation.addValidationListGetter(this.#e.bind(this)),this.addStandardValueCallback(this.#n.bind(this))}#e(){let e=[],t={validator:/^(?:09[0-9]{2} [0-9]{7})?$/g,message:l.get(r,`validNumberMessage`)};return e.push(t),e}#t(e){let t=e.replace(/\s/g,``).replace(/\u06F0/g,`0`).replace(/\u06F1/g,`1`).replace(/\u06F2/g,`2`).replace(/\u06F3/g,`3`).replace(/\u06F4/g,`4`).replace(/\u06F5/g,`5`).replace(/\u06F6/g,`6`).replace(/\u06F7/g,`7`).replace(/\u06F8/g,`8`).replace(/\u06F9/g,`9`).replace(/[^0-9]/g,``),n=/(?<opCode>(09|0|9)?)(?<number>.{0,})/g.exec(t);if(n&&n.groups){let e,t=n.groups.number;if(t=t.substring(0,9),n.groups.opCode)e=n.groups.opCode===`9`?`09`:n.groups.opCode;else{if(!(t.length>0))return``;e=`09`}return e.length==1?e:e+t}return``}#n(e){let t=``,n=``;n=this.#t(e);let r=/(09[0-9]{0,2})([0-9]{0,7})/g.exec(n);return t=r&&r.length>0?r.slice(1).filter((e=>e!==``)).join(` `):n,{value:n,displayValue:t}}},customElements.get(`jb-mobile-input`)||window.customElements.define(`jb-mobile-input`,u)})),f=t((()=>{d()}));function p(e,t,n,r=!1){let i=(0,g.useCallback)((t=>{e.current&&typeof n==`function`&&n(t)}),[e,n]);(0,g.useEffect)((()=>{let n=e.current;return n&&n.addEventListener(t,i,{passive:r,capture:!1}),function(){n&&n.removeEventListener(t,i,{passive:r,capture:!1})}}),[e,t,n,r])}function m(e,t){p(e,`enter`,t.onEnter),p(e,`input`,t.onInput),p(e,`beforeinput`,t.onBeforeinput),p(e,`change`,t.onChange),p(e,`keydown`,t.onKeydown),p(e,`keyup`,t.onKeyup),p(e,`focus`,t.onFocus),p(e,`blur`,t.onBlur)}function h(e,t){(0,g.useEffect)((()=>{let n=t.value;t.value!=null&&t.value!==void 0||(n=``),e&&e.current&&e.current&&(e.current.value=n?.toString()||``)}),[t.value]),(0,g.useEffect)((()=>{e&&e.current&&(e.current.validation.list=t.validationList||[])}),[t.validationList]),(0,g.useEffect)((()=>{typeof t.disabled==`boolean`&&t.disabled?e?.current?.setAttribute(`disabled`,``):e?.current?.removeAttribute(`disabled`)}),[t.disabled]),(0,g.useEffect)((()=>{typeof t.required==`string`&&e?.current?.setAttribute(`required`,t.required),typeof t.required==`boolean`&&(t.required?e?.current?.setAttribute(`required`,``):e?.current?.removeAttribute(`required`))}),[t.required])}var g,_,v,y=t((()=>{g=n(a(),1),f(),c(),_=(0,g.forwardRef)(((e,t)=>{let n=(0,g.useRef)(null);(0,g.useImperativeHandle)(t,(()=>n?n.current:void 0),[n]);let{onBeforeinput:r,onBlur:i,onChange:a,onEnter:o,onFocus:s,onInput:c,onKeydown:l,onKeyup:u,size:d,autocomplete:f,disabled:p,error:_,inputmode:v,label:y,message:b,name:x,placeholder:S,required:C,type:w,validationList:T,value:E,...D}=e,O={label:y,message:b,name:x,placeholder:S,size:d,type:w,error:_,inputmode:v,autocomplete:f};return m(n,{onBeforeinput:r,onBlur:i,onChange:a,onEnter:o,onFocus:s,onInput:c,onKeydown:l,onKeyup:u}),h(n,{disabled:p,required:C,validationList:T,value:E}),g.createElement(`jb-input`,{ref:n,...O,...D},e.children)})),_.displayName=`JBInput`,v=(0,g.forwardRef)(((e,t)=>{let n=(0,g.useRef)(null);(0,g.useImperativeHandle)(t,(()=>n.current??void 0),[n]);let{disabled:r,required:i,validationList:a,value:o,onBeforeinput:s,onBlur:c,onChange:l,onEnter:u,onFocus:d,onInput:f,onKeydown:p,onKeyup:_,...v}=e;return h(n,{disabled:r,required:i,validationList:a,value:o,...v}),m(n,{onBeforeinput:s,onBlur:c,onChange:l,onEnter:u,onFocus:d,onInput:f,onKeydown:p,onKeyup:_,...v}),g.createElement(`jb-mobile-input`,{ref:n,...v},e.children)})),v.displayName=`JBMobileInput`})),b=t((()=>{y()}));function x(e,t=0){let n=e.querySelectorAll(`jb-mobile-input`)[t];return w(n).toBeTruthy(),w(n.shadowRoot).toBeTruthy(),n}function S(e){let t=e.shadowRoot?.querySelector(`input`);return w(t).toBeTruthy(),t}function C(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}var w,T=t((()=>{({expect:w}=__STORYBOOK_MODULE_TEST__)})),E=e({Normal:()=>j,Required:()=>M,RequiredWithMessage:()=>N,__namedExportsOrder:()=>P,default:()=>A}),D,O,k,A,j,M,N,P,F=t((()=>{b(),T(),{expect:D,userEvent:O,waitFor:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/form elements/Inputs/JBMobileInput`,component:v,argTypes:{error:{control:{type:`text`},description:`error message`}}},j={args:{label:`mobile`,message:`please enter your mobile number`},play:async({canvasElement:e,args:t})=>{let n=x(e),r=S(n);await O.type(r,`912abc3456789`),await k(()=>{D(n.value).toBe(`09123456789`),D(n.displayValue).toBe(`0912 3456789`),D(r.value).toBe(`0912 3456789`),D(n.reportValidity()).toBe(!0),D(C(n)).toBe(t.message)}),r.focus(),await O.keyboard(`{Control>}a{/Control}{Backspace}`),await O.type(r,`09123`),await k(()=>{D(n.value).toBe(`09123`),D(n.reportValidity()).toBe(!1),D(C(n)).toBe(`mobile number is not valid`),D(n.hasState(`invalid`)).toBe(!0)}),r.focus(),await O.keyboard(`{Control>}a{/Control}{Backspace}`),await O.type(r,`۰۹۱۲۳۴۵۶۷۸۹`),await k(()=>{D(n.value).toBe(`09123456789`),D(n.displayValue).toBe(`0912 3456789`),D(n.reportValidity()).toBe(!0),D(n.hasState(`invalid`)).toBe(!1)})}},M={args:{label:`required`,required:!0},play:async({canvasElement:e})=>{let t=x(e);D(t.reportValidity()).toBe(!1),await k(()=>{D(t.hasState(`invalid`)).toBe(!0),D(C(t).length).toBeGreaterThan(0)}),t.value=`09123456789`,D(t.reportValidity()).toBe(!0),await k(()=>{D(t.hasState(`invalid`)).toBe(!1)})}},N={args:{label:`mobile`,required:`please enter the full number`},play:async({canvasElement:e,args:t})=>{let n=x(e);D(n.reportValidity()).toBe(!1),await k(()=>{D(C(n)).toBe(t.required),D(n.hasState(`invalid`)).toBe(!0)})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'mobile',
    message: "please enter your mobile number"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const mobileInput = getMobileInput(canvasElement);
    const nativeInput = getNativeInput(mobileInput);
    await userEvent.type(nativeInput, '912abc3456789');
    await waitFor(() => {
      expect(mobileInput.value).toBe('09123456789');
      expect(mobileInput.displayValue).toBe('0912 3456789');
      expect(nativeInput.value).toBe('0912 3456789');
      expect(mobileInput.reportValidity()).toBe(true);
      expect(getMessageText(mobileInput)).toBe(args.message);
    });
    nativeInput.focus();
    await userEvent.keyboard('{Control>}a{/Control}{Backspace}');
    await userEvent.type(nativeInput, '09123');
    await waitFor(() => {
      expect(mobileInput.value).toBe('09123');
      expect(mobileInput.reportValidity()).toBe(false);
      expect(getMessageText(mobileInput)).toBe('mobile number is not valid');
      expect(mobileInput.hasState('invalid')).toBe(true);
    });
    nativeInput.focus();
    await userEvent.keyboard('{Control>}a{/Control}{Backspace}');
    await userEvent.type(nativeInput, '۰۹۱۲۳۴۵۶۷۸۹');
    await waitFor(() => {
      expect(mobileInput.value).toBe('09123456789');
      expect(mobileInput.displayValue).toBe('0912 3456789');
      expect(mobileInput.reportValidity()).toBe(true);
      expect(mobileInput.hasState('invalid')).toBe(false);
    });
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'required',
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const mobileInput = getMobileInput(canvasElement);
    expect(mobileInput.reportValidity()).toBe(false);
    await waitFor(() => {
      expect(mobileInput.hasState('invalid')).toBe(true);
      expect(getMessageText(mobileInput).length).toBeGreaterThan(0);
    });
    mobileInput.value = '09123456789';
    expect(mobileInput.reportValidity()).toBe(true);
    await waitFor(() => {
      expect(mobileInput.hasState('invalid')).toBe(false);
    });
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'mobile',
    required: 'please enter the full number'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const mobileInput = getMobileInput(canvasElement);
    expect(mobileInput.reportValidity()).toBe(false);
    await waitFor(() => {
      expect(getMessageText(mobileInput)).toBe(args.required);
      expect(mobileInput.hasState('invalid')).toBe(true);
    });
  }
}`,...N.parameters?.docs?.source}}},P=[`Normal`,`Required`,`RequiredWithMessage`]}));F();export{j as Normal,M as Required,N as RequiredWithMessage,P as __namedExportsOrder,A as default,F as n,E as t};