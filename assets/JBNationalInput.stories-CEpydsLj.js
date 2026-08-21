import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-Cb2Q_UG-.js";import{r as a,t as o}from"./react-BjexGVTr.js";import{r as s,t as c}from"./react-nuVyTJIO.js";function l(e,t=0){let n=e.querySelectorAll(`jb-national-input`)[t];return f(n).toBeTruthy(),f(n.shadowRoot).toBeTruthy(),n}function u(e){let t=e.shadowRoot?.querySelector(`input`);return f(t).toBeTruthy(),t}function d(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}var f,p=t((()=>{({expect:f}=__STORYBOOK_MODULE_TEST__)})),m=e({ExplicitNullValueDoesNotFallBackToInitialValue:()=>w,InitialValue:()=>S,InitialValueDoesNotOverrideValue:()=>C,Normal:()=>x,__namedExportsOrder:()=>T,default:()=>b}),h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{h=n(r(),1),o(),c(),p(),g=i(),{expect:_,userEvent:v,waitFor:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/form elements/Inputs/JBNationalInput`,component:s},x={args:{label:`national id`,message:`please enter your national code`},play:async({canvasElement:e,args:t})=>{let n=l(e),r=u(n);await v.type(r,`abc0012345679123`),await y(()=>{_(n.value).toBe(`0012345679`),_(n.displayValue).toBe(`0012345679`),_(r.value).toBe(`0012345679`),_(n.reportValidity()).toBe(!0),_(d(n)).toBe(t.message)}),r.focus(),await v.keyboard(`{Control>}a{/Control}{Backspace}`),await v.type(r,`0012345678`),await y(()=>{_(n.value).toBe(`0012345678`),_(n.reportValidity()).toBe(!1),_(d(n)).toBe(`The entered national code is invalid`),_(n.hasState(`invalid`)).toBe(!0)}),r.focus(),await v.keyboard(`{Control>}a{/Control}{Backspace}`),await v.type(r,`۰۰۱۲۳۴۵۶۷۹`),await y(()=>{_(n.value).toBe(`0012345679`),_(n.displayValue).toBe(`۰۰۱۲۳۴۵۶۷۹`),_(n.reportValidity()).toBe(!0),_(n.hasState(`invalid`)).toBe(!1)})}},S={render:e=>{let t=(0,h.useRef)(null);return(0,g.jsxs)(`form`,{ref:t,children:[(0,g.jsx)(s,{...e}),(0,g.jsx)(a,{type:`button`,onClick:()=>t.current?.reset(),children:`Reset`})]})},args:{label:`initial national id`,initialValue:`۰۰۱۲۳۴۵۶۷۹`},play:async({canvasElement:e})=>{let t=l(e),n=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`);_(n).toBeTruthy(),await y(()=>{_(t.initialValue).toBe(`0012345679`),_(t.value).toBe(`0012345679`),_(t.isDirty).toBe(!1)}),t.value=`0013545679`,await v.click(n),await y(()=>{_(t.value).toBe(`0012345679`),_(t.isDirty).toBe(!1)})}},C={args:{initialValue:`۰۰۱۲۳۴۵۶۷۹`,value:`0013545679`},play:async({canvasElement:e})=>{let t=l(e);await y(()=>{_(t.initialValue).toBe(`0012345679`),_(t.value).toBe(`0013545679`),_(t.isDirty).toBe(!0)})}},w={args:{initialValue:`۰۰۱۲۳۴۵۶۷۹`,value:null},play:async({canvasElement:e})=>{let t=l(e);await y(()=>{_(t.initialValue).toBe(`0012345679`),_(t.value).toBe(``),_(t.isDirty).toBe(!0)})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'national id',
    message: "please enter your national code"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const nationalInput = getNationalInput(canvasElement);
    const nativeInput = getNativeInput(nationalInput);
    await userEvent.type(nativeInput, 'abc0012345679123');
    await waitFor(() => {
      expect(nationalInput.value).toBe('0012345679');
      expect(nationalInput.displayValue).toBe('0012345679');
      expect(nativeInput.value).toBe('0012345679');
      expect(nationalInput.reportValidity()).toBe(true);
      expect(getMessageText(nationalInput)).toBe(args.message);
    });
    nativeInput.focus();
    await userEvent.keyboard('{Control>}a{/Control}{Backspace}');
    await userEvent.type(nativeInput, '0012345678');
    await waitFor(() => {
      expect(nationalInput.value).toBe('0012345678');
      expect(nationalInput.reportValidity()).toBe(false);
      expect(getMessageText(nationalInput)).toBe('The entered national code is invalid');
      expect(nationalInput.hasState('invalid')).toBe(true);
    });
    nativeInput.focus();
    await userEvent.keyboard('{Control>}a{/Control}{Backspace}');
    await userEvent.type(nativeInput, '۰۰۱۲۳۴۵۶۷۹');
    await waitFor(() => {
      expect(nationalInput.value).toBe('0012345679');
      expect(nationalInput.displayValue).toBe('۰۰۱۲۳۴۵۶۷۹');
      expect(nationalInput.reportValidity()).toBe(true);
      expect(nationalInput.hasState('invalid')).toBe(false);
    });
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBNationalInput {...args} />
        <JBButton type="button" onClick={() => formRef.current?.reset()}>Reset</JBButton>
      </form>;
  },
  args: {
    label: 'initial national id',
    initialValue: '۰۰۱۲۳۴۵۶۷۹'
  },
  play: async ({
    canvasElement
  }) => {
    const nationalInput = getNationalInput(canvasElement);
    const resetButton = canvasElement.querySelector('jb-button')?.shadowRoot?.querySelector<HTMLButtonElement>('button');
    expect(resetButton).toBeTruthy();
    await waitFor(() => {
      // Persian input is canonicalized once and used consistently as baseline.
      expect(nationalInput.initialValue).toBe('0012345679');
      expect(nationalInput.value).toBe('0012345679');
      expect(nationalInput.isDirty).toBe(false);
    });
    nationalInput.value = '0013545679';
    await userEvent.click(resetButton!);
    await waitFor(() => {
      expect(nationalInput.value).toBe('0012345679');
      expect(nationalInput.isDirty).toBe(false);
    });
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: '۰۰۱۲۳۴۵۶۷۹',
    value: '0013545679'
  },
  play: async ({
    canvasElement
  }) => {
    const nationalInput = getNationalInput(canvasElement);
    await waitFor(() => {
      expect(nationalInput.initialValue).toBe('0012345679');
      expect(nationalInput.value).toBe('0013545679');
      expect(nationalInput.isDirty).toBe(true);
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: '۰۰۱۲۳۴۵۶۷۹',
    value: null
  },
  play: async ({
    canvasElement
  }) => {
    const nationalInput = getNationalInput(canvasElement);
    await waitFor(() => {
      expect(nationalInput.initialValue).toBe('0012345679');
      expect(nationalInput.value).toBe('');
      expect(nationalInput.isDirty).toBe(true);
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`Normal`,`InitialValue`,`InitialValueDoesNotOverrideValue`,`ExplicitNullValueDoesNotFallBackToInitialValue`]}));E();export{w as ExplicitNullValueDoesNotFallBackToInitialValue,S as InitialValue,C as InitialValueDoesNotOverrideValue,x as Normal,T as __namedExportsOrder,b as default,E as n,m as t};