import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,a as i,n as a,r as o,t as s}from"./iframe-Cke0LeCu.js";import{r as c,t as l}from"./react-BD8sZUeD.js";import{r as u,t as d}from"./jb-input-CMYfrKVE.js";import{a as f,n as p,t as m}from"./react-8rtoJJt2.js";var h,g,_=t((()=>{d(),o(),h=new a({fa:{validNumberMessage:`شماره موبایل معتبر نیست`},en:{validNumberMessage:`mobile number is not valid`}}),g=class extends u{constructor(){super(),this.initMobileInputWebComponent()}initMobileInputWebComponent(){let e=document.createElement(`template`);e.innerHTML=`<style>:host{--input-direction:var(--jb-mobile-input-input-direction,ltr)}</style><style>.jb-input-web-component{--jb-input-input-direction:var(--input-direction)}</style>`,this.shadowRoot.appendChild(e.content.cloneNode(!0)),this.validation.addValidationListGetter(this.#e.bind(this)),this.addStandardValueCallback(this.#n.bind(this))}#e(){let e=[],t={validator:/^(?:09[0-9]{2} [0-9]{7})?$/g,message:h.get(i,`validNumberMessage`)};return e.push(t),e}#t(e){let t=e.replace(/\s/g,``).replace(/\u06F0/g,`0`).replace(/\u06F1/g,`1`).replace(/\u06F2/g,`2`).replace(/\u06F3/g,`3`).replace(/\u06F4/g,`4`).replace(/\u06F5/g,`5`).replace(/\u06F6/g,`6`).replace(/\u06F7/g,`7`).replace(/\u06F8/g,`8`).replace(/\u06F9/g,`9`).replace(/[^0-9]/g,``),n=/(?<opCode>(09|0|9)?)(?<number>.{0,})/g.exec(t);if(n&&n.groups){let e,t=n.groups.number;if(t=t.substring(0,9),n.groups.opCode)e=n.groups.opCode===`9`?`09`:n.groups.opCode;else{if(!(t.length>0))return``;e=`09`}return e.length==1?e:e+t}return``}#n(e){let t=``,n=``;n=this.#t(e);let r=/(09[0-9]{0,2})([0-9]{0,7})/g.exec(n);return t=r&&r.length>0?r.slice(1).filter((e=>e!==``)).join(` `):n,{value:n,displayValue:t}}},customElements.get(`jb-mobile-input`)||window.customElements.define(`jb-mobile-input`,g)})),v=t((()=>{_()})),y,b,x=t((()=>{y=n(r(),1),v(),m(),b=(0,y.forwardRef)(((e,t)=>{let n=(0,y.useRef)(null);(0,y.useImperativeHandle)(t,(()=>n.current??void 0),[n]);let{disabled:r,initialValue:i,required:a,validationList:o,value:s,onBeforeinput:c,onBlur:l,onChange:u,onEnter:d,onFocus:m,onInput:h,onKeydown:g,onKeyup:_,...v}=e;p(n,{disabled:r,required:a,validationList:o,...v}),f(n,{onBeforeinput:c,onBlur:l,onChange:u,onEnter:d,onFocus:m,onInput:h,onKeydown:g,onKeyup:_,...v});let b=s===void 0?{}:{value:s?.toString()??``};return y.createElement(`jb-mobile-input`,{ref:n,initialValue:i?.toString()??``,...b,...v},e.children)})),b.displayName=`JBMobileInput`})),S=t((()=>{x()}));function C(e,t=0){let n=e.querySelectorAll(`jb-mobile-input`)[t];return E(n).toBeTruthy(),E(n.shadowRoot).toBeTruthy(),n}function w(e){let t=e.shadowRoot?.querySelector(`input`);return E(t).toBeTruthy(),t}function T(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}var E,D=t((()=>{({expect:E}=__STORYBOOK_MODULE_TEST__)})),O=e({ExplicitNullValueDoesNotFallBackToInitialValue:()=>R,InitialValue:()=>I,InitialValueDoesNotOverrideValue:()=>L,Normal:()=>F,Required:()=>z,RequiredWithMessage:()=>B,__namedExportsOrder:()=>V,default:()=>P}),k,A,j,M,N,P,F,I,L,R,z,B,V,H=t((()=>{k=n(r(),1),l(),S(),D(),A=s(),{expect:j,userEvent:M,waitFor:N}=__STORYBOOK_MODULE_TEST__,P={title:`Components/form elements/Inputs/JBMobileInput`,component:b,argTypes:{error:{control:{type:`text`},description:`error message`}}},F={args:{label:`mobile`,message:`please enter your mobile number`},play:async({canvasElement:e,args:t})=>{let n=C(e),r=w(n);await M.type(r,`912abc3456789`),await N(()=>{j(n.value).toBe(`09123456789`),j(n.displayValue).toBe(`0912 3456789`),j(r.value).toBe(`0912 3456789`),j(n.reportValidity()).toBe(!0),j(T(n)).toBe(t.message)}),r.focus(),await M.keyboard(`{Control>}a{/Control}{Backspace}`),await M.type(r,`09123`),await N(()=>{j(n.value).toBe(`09123`),j(n.reportValidity()).toBe(!1),j(T(n)).toBe(`mobile number is not valid`),j(n.hasState(`invalid`)).toBe(!0)}),r.focus(),await M.keyboard(`{Control>}a{/Control}{Backspace}`),await M.type(r,`۰۹۱۲۳۴۵۶۷۸۹`),await N(()=>{j(n.value).toBe(`09123456789`),j(n.displayValue).toBe(`0912 3456789`),j(n.reportValidity()).toBe(!0),j(n.hasState(`invalid`)).toBe(!1)})}},I={render:e=>{let t=(0,k.useRef)(null);return(0,A.jsxs)(`form`,{ref:t,children:[(0,A.jsx)(b,{...e}),(0,A.jsx)(c,{type:`button`,onClick:()=>t.current?.reset(),children:`Reset`})]})},args:{label:`initial mobile`,initialValue:`0912 3456789`},play:async({canvasElement:e})=>{let t=C(e),n=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`);j(n).toBeTruthy(),await N(()=>{j(t.initialValue).toBe(`09123456789`),j(t.value).toBe(`09123456789`),j(t.displayValue).toBe(`0912 3456789`),j(t.isDirty).toBe(!1)}),t.initialValue=`۰۹۳۵۱۲۳۴۵۶۷`,await N(()=>{j(t.initialValue).toBe(`09351234567`),j(t.value).toBe(`09351234567`),j(t.isDirty).toBe(!1)}),t.value=`09111234567`,await M.click(n),await N(()=>{j(t.value).toBe(`09351234567`),j(t.isDirty).toBe(!1)})}},L={args:{initialValue:`0912 3456789`,value:`09351234567`},play:async({canvasElement:e})=>{let t=C(e);await N(()=>{j(t.initialValue).toBe(`09123456789`),j(t.value).toBe(`09351234567`),j(t.isDirty).toBe(!0)})}},R={args:{initialValue:`0912 3456789`,value:null},play:async({canvasElement:e})=>{let t=C(e);await N(()=>{j(t.initialValue).toBe(`09123456789`),j(t.value).toBe(``),j(t.isDirty).toBe(!0)})}},z={args:{label:`required`,required:!0},play:async({canvasElement:e})=>{let t=C(e);j(t.reportValidity()).toBe(!1),await N(()=>{j(t.hasState(`invalid`)).toBe(!0),j(T(t).length).toBeGreaterThan(0)}),t.value=`09123456789`,j(t.reportValidity()).toBe(!0),await N(()=>{j(t.hasState(`invalid`)).toBe(!1)})}},B={args:{label:`mobile`,required:`please enter the full number`},play:async({canvasElement:e,args:t})=>{let n=C(e);j(n.reportValidity()).toBe(!1),await N(()=>{j(T(n)).toBe(t.required),j(n.hasState(`invalid`)).toBe(!0)})}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`Normal`,`InitialValue`,`InitialValueDoesNotOverrideValue`,`ExplicitNullValueDoesNotFallBackToInitialValue`,`Required`,`RequiredWithMessage`]}));H();export{R as ExplicitNullValueDoesNotFallBackToInitialValue,I as InitialValue,L as InitialValueDoesNotOverrideValue,F as Normal,z as Required,B as RequiredWithMessage,V as __namedExportsOrder,P as default,H as n,O as t};