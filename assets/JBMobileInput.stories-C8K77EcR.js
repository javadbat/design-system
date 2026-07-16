import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,a as i,n as a,r as o}from"./iframe-CJEKjAwU.js";import{r as s,t as c}from"./jb-input-BNC70akt.js";import{a as l,n as u,t as d}from"./react-C5ER5Hxy.js";var f,p,m=t((()=>{c(),o(),f=new a({fa:{validNumberMessage:`شماره موبایل معتبر نیست`},en:{validNumberMessage:`mobile number is not valid`}}),p=class extends s{constructor(){super(),this.initMobileInputWebComponent()}initMobileInputWebComponent(){let e=document.createElement(`template`);e.innerHTML=`<style>:host{--input-direction:var(--jb-mobile-input-input-direction,ltr)}</style><style>.jb-input-web-component{--jb-input-input-direction:var(--input-direction)}</style>`,this.shadowRoot.appendChild(e.content.cloneNode(!0)),this.validation.addValidationListGetter(this.#e.bind(this)),this.addStandardValueCallback(this.#n.bind(this))}#e(){let e=[],t={validator:/^(?:09[0-9]{2} [0-9]{7})?$/g,message:f.get(i,`validNumberMessage`)};return e.push(t),e}#t(e){let t=e.replace(/\s/g,``).replace(/\u06F0/g,`0`).replace(/\u06F1/g,`1`).replace(/\u06F2/g,`2`).replace(/\u06F3/g,`3`).replace(/\u06F4/g,`4`).replace(/\u06F5/g,`5`).replace(/\u06F6/g,`6`).replace(/\u06F7/g,`7`).replace(/\u06F8/g,`8`).replace(/\u06F9/g,`9`).replace(/[^0-9]/g,``),n=/(?<opCode>(09|0|9)?)(?<number>.{0,})/g.exec(t);if(n&&n.groups){let e,t=n.groups.number;if(t=t.substring(0,9),n.groups.opCode)e=n.groups.opCode===`9`?`09`:n.groups.opCode;else{if(!(t.length>0))return``;e=`09`}return e.length==1?e:e+t}return``}#n(e){let t=``,n=``;n=this.#t(e);let r=/(09[0-9]{0,2})([0-9]{0,7})/g.exec(n);return t=r&&r.length>0?r.slice(1).filter((e=>e!==``)).join(` `):n,{value:n,displayValue:t}}},customElements.get(`jb-mobile-input`)||window.customElements.define(`jb-mobile-input`,p)})),h=t((()=>{m()})),g,_,v=t((()=>{g=n(r(),1),h(),d(),_=(0,g.forwardRef)(((e,t)=>{let n=(0,g.useRef)(null);(0,g.useImperativeHandle)(t,(()=>n.current??void 0),[n]);let{disabled:r,initialValue:i,required:a,validationList:o,value:s,onBeforeinput:c,onBlur:d,onChange:f,onEnter:p,onFocus:m,onInput:h,onKeydown:_,onKeyup:v,...y}=e;return u(n,{disabled:r,required:a,validationList:o,...y}),l(n,{onBeforeinput:c,onBlur:d,onChange:f,onEnter:p,onFocus:m,onInput:h,onKeydown:_,onKeyup:v,...y}),g.createElement(`jb-mobile-input`,{ref:n,value:s?.toString()??``,initialValue:i?.toString()??``,...y},e.children)})),_.displayName=`JBMobileInput`})),y=t((()=>{v()}));function b(e,t=0){let n=e.querySelectorAll(`jb-mobile-input`)[t];return C(n).toBeTruthy(),C(n.shadowRoot).toBeTruthy(),n}function x(e){let t=e.shadowRoot?.querySelector(`input`);return C(t).toBeTruthy(),t}function S(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}var C,w=t((()=>{({expect:C}=__STORYBOOK_MODULE_TEST__)})),T=e({Normal:()=>A,Required:()=>j,RequiredWithMessage:()=>M,__namedExportsOrder:()=>N,default:()=>k}),E,D,O,k,A,j,M,N,P=t((()=>{y(),w(),{expect:E,userEvent:D,waitFor:O}=__STORYBOOK_MODULE_TEST__,k={title:`Components/form elements/Inputs/JBMobileInput`,component:_,argTypes:{error:{control:{type:`text`},description:`error message`}}},A={args:{label:`mobile`,message:`please enter your mobile number`},play:async({canvasElement:e,args:t})=>{let n=b(e),r=x(n);await D.type(r,`912abc3456789`),await O(()=>{E(n.value).toBe(`09123456789`),E(n.displayValue).toBe(`0912 3456789`),E(r.value).toBe(`0912 3456789`),E(n.reportValidity()).toBe(!0),E(S(n)).toBe(t.message)}),r.focus(),await D.keyboard(`{Control>}a{/Control}{Backspace}`),await D.type(r,`09123`),await O(()=>{E(n.value).toBe(`09123`),E(n.reportValidity()).toBe(!1),E(S(n)).toBe(`mobile number is not valid`),E(n.hasState(`invalid`)).toBe(!0)}),r.focus(),await D.keyboard(`{Control>}a{/Control}{Backspace}`),await D.type(r,`۰۹۱۲۳۴۵۶۷۸۹`),await O(()=>{E(n.value).toBe(`09123456789`),E(n.displayValue).toBe(`0912 3456789`),E(n.reportValidity()).toBe(!0),E(n.hasState(`invalid`)).toBe(!1)})}},j={args:{label:`required`,required:!0},play:async({canvasElement:e})=>{let t=b(e);E(t.reportValidity()).toBe(!1),await O(()=>{E(t.hasState(`invalid`)).toBe(!0),E(S(t).length).toBeGreaterThan(0)}),t.value=`09123456789`,E(t.reportValidity()).toBe(!0),await O(()=>{E(t.hasState(`invalid`)).toBe(!1)})}},M={args:{label:`mobile`,required:`please enter the full number`},play:async({canvasElement:e,args:t})=>{let n=b(e);E(n.reportValidity()).toBe(!1),await O(()=>{E(S(n)).toBe(t.required),E(n.hasState(`invalid`)).toBe(!0)})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N=[`Normal`,`Required`,`RequiredWithMessage`]}));P();export{A as Normal,j as Required,M as RequiredWithMessage,N as __namedExportsOrder,k as default,P as n,T as t};