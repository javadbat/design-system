import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,i,n as a,r as o,t as s}from"./iframe-DqjxMHfY.js";import{o as c,t as l}from"./jb-core-DsmvCuBc.js";import{r as u,t as d}from"./react-CIv0yQ5E.js";import{n as f,t as p}from"./jb-input-BN-S3wIk.js";import{a as m,n as h,t as g}from"./react-D17hW1e7.js";var _,v,y=t((()=>{l(),p(),o(),_=new i({fa:{validNumberMessage:`شماره موبایل معتبر نیست`},en:{validNumberMessage:`mobile number is not valid`}}),v=class extends f{constructor(){super(),this.initMobileInputWebComponent()}initMobileInputWebComponent(){let e=document.createElement(`template`);e.innerHTML=`<style>:host{--input-direction:var(--jb-mobile-input-input-direction,ltr)}</style><style>.jb-input-web-component{--jb-input-input-direction:var(--input-direction)}</style>`,this.shadowRoot.appendChild(e.content.cloneNode(!0)),this.validation.addValidationListGetter(this.#e.bind(this)),this.addStandardValueCallback(this.#n.bind(this))}#e(){let e=[],t={validator:/^(?:09[0-9]{2} [0-9]{7})?$/g,message:_.get(a,`validNumberMessage`)};return e.push(t),e}#t(e){let t=e.replace(/\s/g,``).replace(/\u06F0/g,`0`).replace(/\u06F1/g,`1`).replace(/\u06F2/g,`2`).replace(/\u06F3/g,`3`).replace(/\u06F4/g,`4`).replace(/\u06F5/g,`5`).replace(/\u06F6/g,`6`).replace(/\u06F7/g,`7`).replace(/\u06F8/g,`8`).replace(/\u06F9/g,`9`).replace(/[^0-9]/g,``),n=/(?<opCode>(09|0|9)?)(?<number>.{0,})/g.exec(t);if(n&&n.groups){let e,t=n.groups.number;if(t=t.substring(0,9),n.groups.opCode)e=n.groups.opCode===`9`?`09`:n.groups.opCode;else{if(!(t.length>0))return``;e=`09`}return e.length==1?e:e+t}return``}#n(e){let t=``,n=``;n=this.#t(e);let r=/(09[0-9]{0,2})([0-9]{0,7})/g.exec(n);return t=r&&r.length>0?r.slice(1).filter((e=>e!==``)).join(` `):n,{value:n,displayValue:t}}},c(`jb-mobile-input`,v)})),b=t((()=>{y()})),x,S,C=t((()=>{x=n(r(),1),b(),g(),S=(0,x.forwardRef)(((e,t)=>{let n=(0,x.useRef)(null);(0,x.useImperativeHandle)(t,(()=>n.current??void 0),[n]);let{disabled:r,initialValue:i,required:a,validationList:o,value:s,onBeforeinput:c,onBlur:l,onChange:u,onEnter:d,onFocus:f,onInput:p,onKeydown:g,onKeyup:_,...v}=e;h(n,{disabled:r,required:a,validationList:o,...v}),m(n,{onBeforeinput:c,onBlur:l,onChange:u,onEnter:d,onFocus:f,onInput:p,onKeydown:g,onKeyup:_,...v});let y=s===void 0?{}:{value:s?.toString()??``};return x.createElement(`jb-mobile-input`,{ref:n,initialValue:i?.toString()??``,...y,...v},e.children)})),S.displayName=`JBMobileInput`})),w=t((()=>{C()}));function T(e,t=0){let n=e.querySelectorAll(`jb-mobile-input`)[t];return O(n).toBeTruthy(),O(n.shadowRoot).toBeTruthy(),n}function E(e){let t=e.shadowRoot?.querySelector(`input`);return O(t).toBeTruthy(),t}function D(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}var O,k=t((()=>{({expect:O}=__STORYBOOK_MODULE_TEST__)})),A=e({ExplicitNullValueDoesNotFallBackToInitialValue:()=>B,InitialValue:()=>R,InitialValueDoesNotOverrideValue:()=>z,Normal:()=>L,Required:()=>V,RequiredWithMessage:()=>H,__namedExportsOrder:()=>U,default:()=>I}),j,M,N,P,F,I,L,R,z,B,V,H,U,W=t((()=>{j=n(r(),1),d(),w(),k(),M=s(),{expect:N,userEvent:P,waitFor:F}=__STORYBOOK_MODULE_TEST__,I={title:`Components/form elements/Inputs/JBMobileInput`,component:S,argTypes:{error:{control:{type:`text`},description:`error message`}}},L={args:{label:`mobile`,message:`please enter your mobile number`},play:async({canvasElement:e,args:t})=>{let n=T(e),r=E(n);await P.type(r,`912abc3456789`),await F(()=>{N(n.value).toBe(`09123456789`),N(n.displayValue).toBe(`0912 3456789`),N(r.value).toBe(`0912 3456789`),N(n.reportValidity()).toBe(!0),N(D(n)).toBe(t.message)}),r.focus(),await P.keyboard(`{Control>}a{/Control}{Backspace}`),await P.type(r,`09123`),await F(()=>{N(n.value).toBe(`09123`),N(n.reportValidity()).toBe(!1),N(D(n)).toBe(`mobile number is not valid`),N(n.hasState(`invalid`)).toBe(!0)}),r.focus(),await P.keyboard(`{Control>}a{/Control}{Backspace}`),await P.type(r,`۰۹۱۲۳۴۵۶۷۸۹`),await F(()=>{N(n.value).toBe(`09123456789`),N(n.displayValue).toBe(`0912 3456789`),N(n.reportValidity()).toBe(!0),N(n.hasState(`invalid`)).toBe(!1)})}},R={render:e=>{let t=(0,j.useRef)(null);return(0,M.jsxs)(`form`,{ref:t,children:[(0,M.jsx)(S,{...e}),(0,M.jsx)(u,{type:`button`,onClick:()=>t.current?.reset(),children:`Reset`})]})},args:{label:`initial mobile`,initialValue:`0912 3456789`},play:async({canvasElement:e})=>{let t=T(e),n=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`);N(n).toBeTruthy(),await F(()=>{N(t.initialValue).toBe(`09123456789`),N(t.value).toBe(`09123456789`),N(t.displayValue).toBe(`0912 3456789`),N(t.isDirty).toBe(!1)}),t.initialValue=`۰۹۳۵۱۲۳۴۵۶۷`,await F(()=>{N(t.initialValue).toBe(`09351234567`),N(t.value).toBe(`09351234567`),N(t.isDirty).toBe(!1)}),t.value=`09111234567`,await P.click(n),await F(()=>{N(t.value).toBe(`09351234567`),N(t.isDirty).toBe(!1)})}},z={args:{initialValue:`0912 3456789`,value:`09351234567`},play:async({canvasElement:e})=>{let t=T(e);await F(()=>{N(t.initialValue).toBe(`09123456789`),N(t.value).toBe(`09351234567`),N(t.isDirty).toBe(!0)})}},B={args:{initialValue:`0912 3456789`,value:null},play:async({canvasElement:e})=>{let t=T(e);await F(()=>{N(t.initialValue).toBe(`09123456789`),N(t.value).toBe(``),N(t.isDirty).toBe(!0)})}},V={args:{label:`required`,required:!0},play:async({canvasElement:e})=>{let t=T(e);N(t.reportValidity()).toBe(!1),await F(()=>{N(t.hasState(`invalid`)).toBe(!0),N(D(t).length).toBeGreaterThan(0)}),t.value=`09123456789`,N(t.reportValidity()).toBe(!0),await F(()=>{N(t.hasState(`invalid`)).toBe(!1)})}},H={args:{label:`mobile`,required:`please enter the full number`},play:async({canvasElement:e,args:t})=>{let n=T(e);N(n.reportValidity()).toBe(!1),await F(()=>{N(D(n)).toBe(t.required),N(n.hasState(`invalid`)).toBe(!0)})}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBMobileInput {...args} />
        <JBButton type="button" onClick={() => formRef.current?.reset()}>Reset</JBButton>
      </form>;
  },
  args: {
    label: 'initial mobile',
    initialValue: '0912 3456789'
  },
  play: async ({
    canvasElement
  }) => {
    const mobileInput = getMobileInput(canvasElement);
    const resetButton = canvasElement.querySelector('jb-button')?.shadowRoot?.querySelector<HTMLButtonElement>('button');
    expect(resetButton).toBeTruthy();
    await waitFor(() => {
      // The public baseline uses the same canonical digits as the live value.
      expect(mobileInput.initialValue).toBe('09123456789');
      expect(mobileInput.value).toBe('09123456789');
      expect(mobileInput.displayValue).toBe('0912 3456789');
      expect(mobileInput.isDirty).toBe(false);
    });
    mobileInput.initialValue = '۰۹۳۵۱۲۳۴۵۶۷';
    await waitFor(() => {
      expect(mobileInput.initialValue).toBe('09351234567');
      expect(mobileInput.value).toBe('09351234567');
      expect(mobileInput.isDirty).toBe(false);
    });
    mobileInput.value = '09111234567';
    await userEvent.click(resetButton!);
    await waitFor(() => {
      expect(mobileInput.value).toBe('09351234567');
      expect(mobileInput.isDirty).toBe(false);
    });
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: '0912 3456789',
    value: '09351234567'
  },
  play: async ({
    canvasElement
  }) => {
    const mobileInput = getMobileInput(canvasElement);
    await waitFor(() => {
      expect(mobileInput.initialValue).toBe('09123456789');
      expect(mobileInput.value).toBe('09351234567');
      expect(mobileInput.isDirty).toBe(true);
    });
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: '0912 3456789',
    value: null
  },
  play: async ({
    canvasElement
  }) => {
    const mobileInput = getMobileInput(canvasElement);
    await waitFor(() => {
      expect(mobileInput.initialValue).toBe('09123456789');
      expect(mobileInput.value).toBe('');
      expect(mobileInput.isDirty).toBe(true);
    });
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`Normal`,`InitialValue`,`InitialValueDoesNotOverrideValue`,`ExplicitNullValueDoesNotFallBackToInitialValue`,`Required`,`RequiredWithMessage`]}));W();export{B as ExplicitNullValueDoesNotFallBackToInitialValue,R as InitialValue,z as InitialValueDoesNotOverrideValue,L as Normal,V as Required,H as RequiredWithMessage,U as __namedExportsOrder,I as default,W as n,A as t};