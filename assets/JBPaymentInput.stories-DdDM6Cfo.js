import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-qYtN58L9.js";import{r as a,t as o}from"./react-B_8ZMVjE.js";import{r as s,t as c}from"./react-l8iTk3r8.js";import{i as l,n as u,t as d}from"./react-CIxOvsoE.js";function f(e,t=0){let n=e.querySelectorAll(`jb-payment-input`)[t];return _(n).toBeTruthy(),_(n.shadowRoot).toBeTruthy(),n}function p(e){let t=e.shadowRoot?.querySelector(`input`);return _(t).toBeTruthy(),t}function m(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}function h(e){let t=e.querySelector(`bank-indicator`);return _(t).toBeTruthy(),_(t.shadowRoot).toBeTruthy(),t}function g(e){let t=e.shadowRoot?.querySelector(`.bank-image-wrapper`);return _(t).toBeTruthy(),t}var _,v=t((()=>{({expect:_}=__STORYBOOK_MODULE_TEST__)})),y=e({CardNumber:()=>E,CardNumberPaste:()=>N,CardNumberWithBankLogo:()=>I,ChangingPaymentTypeKeepsInitialBaseline:()=>M,DashSeparatorCN:()=>L,ExplicitNullValueDoesNotFallBackToInitialValue:()=>j,InitialValue:()=>k,InitialValueDoesNotOverrideValue:()=>A,RequiredCardNumber:()=>P,ShabaNumber:()=>F,__namedExportsOrder:()=>R,default:()=>T}),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z=t((()=>{b=n(r(),1),o(),c(),l(),d(),v(),x=i(),{expect:S,userEvent:C,waitFor:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/form elements/Inputs/JBPaymentInput`,component:s},E={args:{label:`card number`,message:`please input 16 digit card number`,value:``,inputType:`CARD`},play:async({canvasElement:e})=>{let t=f(e),n=p(t);await C.type(n,`card 603799123456789`),await w(()=>{S(t.value).toBe(`603799123456789`),S(t.reportValidity()).toBe(!1),S(m(t)).toBe(`Please enter all 16 digits of your card number.`),S(t.hasState(`invalid`)).toBe(!0)}),n.focus(),await C.keyboard(`{Control>}a{/Control}{Backspace}`),await C.type(n,`6037991234567890`),await w(()=>{S(t.value).toBe(`6037991234567890`),S(t.displayValue).toBe(`6037 9912 3456 7890`),S(n.value).toBe(`6037 9912 3456 7890`),S(t.reportValidity()).toBe(!0),S(t.hasState(`invalid`)).toBe(!1)})}},D=`IR120000000000000000000000`,O=`IR340000000000000000000000`,k={render:e=>{let t=(0,b.useRef)(null);return(0,x.jsxs)(`form`,{ref:t,children:[(0,x.jsx)(s,{...e}),(0,x.jsx)(a,{type:`button`,onClick:()=>t.current?.reset(),children:`Reset`})]})},args:{label:`initial SHABA`,inputType:`SHABA`,initialValue:D},play:async({canvasElement:e})=>{let t=f(e),n=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`);S(n).toBeTruthy(),await w(()=>{S(t.initialValue).toBe(D),S(t.value).toBe(D),S(t.displayValue).toBe(`IR12 0000 0000 0000 0000 0000 00`),S(t.isDirty).toBe(!1)}),t.initialValue=O,await w(()=>{S(t.initialValue).toBe(O),S(t.value).toBe(O),S(t.isDirty).toBe(!1)}),t.value=`IR560000000000000000000000`,await C.click(n),await w(()=>{S(t.value).toBe(O),S(t.isDirty).toBe(!1)})}},A={args:{inputType:`SHABA`,initialValue:D,value:O},play:async({canvasElement:e})=>{let t=f(e);await w(()=>{S(t.initialValue).toBe(D),S(t.value).toBe(O),S(t.isDirty).toBe(!0)})}},j={args:{inputType:`SHABA`,initialValue:D,value:null},play:async({canvasElement:e})=>{let t=f(e);await w(()=>{S(t.initialValue).toBe(D),S(t.value).toBe(``),S(t.isDirty).toBe(!0)})}},M={render:e=>{let t=(0,b.useRef)(null);return(0,x.jsxs)(`form`,{ref:t,children:[(0,x.jsx)(s,{...e}),(0,x.jsx)(a,{type:`button`,onClick:()=>t.current?.reset(),children:`Reset`})]})},args:{inputType:`CARD`,initialValue:`6037991234567890`},play:async({canvasElement:e})=>{let t=f(e),n=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`);S(n).toBeTruthy(),await w(()=>{S(t.value).toBe(`6037991234567890`),S(t.isDirty).toBe(!1)}),t.paymentInputType=`SHABA`,await w(()=>{S(t.initialValue).toBe(`IR6037991234567890`),S(t.value).toBe(`IR6037991234567890`),S(t.isDirty).toBe(!1)}),t.value=D,S(t.isDirty).toBe(!0),await C.click(n),await w(()=>{S(t.value).toBe(`IR6037991234567890`),S(t.initialValue).toBe(t.value),S(t.isDirty).toBe(!1)})}},N={args:{label:`card number paste`,message:`paste text that contains a 16 digit card number`,value:``,inputType:`CARD`},play:async({canvasElement:e})=>{let t=f(e),n=p(t);n.value=`card number: 6037-9912-3456-7890`,n.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0,inputType:`insertFromPaste`})),await w(()=>{S(t.value).toBe(`6037991234567890`),S(t.displayValue).toBe(`6037 9912 3456 7890`),S(n.value).toBe(`6037 9912 3456 7890`),S(t.reportValidity()).toBe(!0)})}},P={args:{label:`card number`,message:`please input 16 digit card number`,inputType:`CARD`,required:!0}},F={args:{label:`shaba number`,message:`please input shaba number`,value:``,inputType:`SHABA`},play:async({canvasElement:e})=>{let t=f(e),n=p(t);await C.type(n,`120000000000000000000000`),await w(()=>{S(t.value).toBe(`IR120000000000000000000000`),S(t.displayValue).toBe(`IR12 0000 0000 0000 0000 0000 00`),S(n.value).toBe(`IR12 0000 0000 0000 0000 0000 00`),S(t.reportValidity()).toBe(!0)}),n.focus(),await C.keyboard(`{Control>}a{/Control}{Backspace}`),await C.type(n,`IR12`),await w(()=>{S(t.value).toBe(`IR12`),S(t.displayValue).toBe(`IR12`),S(t.reportValidity()).toBe(!1),S(m(t)).toBe(`Please enter all 26 digits of your IBAN number.`),S(t.hasState(`invalid`)).toBe(!0)}),n.focus(),await C.keyboard(`{Control>}a{/Control}{Backspace}`),await C.type(n,`12`),await w(()=>{S(t.value).toBe(`IR12`),S(t.displayValue).toBe(`IR12`),S(n.value).toBe(`IR12`)})}},I={args:{label:`card number`,message:`card number with bank logo (ex: start card with 603799 number to see melli bank logo)`,value:``,inputType:`CARD`,children:(0,x.jsx)(u,{slot:`end-section`})},play:async({canvasElement:e})=>{let t=f(e),n=p(t),r=h(e),i=g(r);await C.type(n,`6037991234567890`),await w(()=>{S(t.value).toBe(`6037991234567890`),S(r.selectedBank?.title.fa).toBe(`بانک ملی ایران`),S(i.getAttribute(`title`)).toBe(`بانک ملی ایران`)}),n.focus(),await C.keyboard(`{Control>}a{/Control}{Backspace}`),await C.type(n,`1111111234567890`),await w(()=>{S(r.selectedBank).toBe(null)})}},L={args:{label:`card number`,message:`please input 16 digit card number`,value:``,separator:`-`,inputType:`CARD`},play:async({canvasElement:e})=>{let t=f(e),n=p(t);await C.type(n,`6037991234567890`),await w(()=>{S(t.value).toBe(`6037991234567890`),S(t.displayValue).toBe(`6037-9912-3456-7890`),S(n.value).toBe(`6037-9912-3456-7890`)})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'card number',
    message: "please input 16 digit card number",
    value: "",
    inputType: "CARD"
  },
  play: async ({
    canvasElement
  }) => {
    const paymentInput = getPaymentInput(canvasElement);
    const nativeInput = getNativeInput(paymentInput);
    await userEvent.type(nativeInput, 'card 603799123456789');
    await waitFor(() => {
      expect(paymentInput.value).toBe('603799123456789');
      expect(paymentInput.reportValidity()).toBe(false);
      expect(getMessageText(paymentInput)).toBe('Please enter all 16 digits of your card number.');
      expect(paymentInput.hasState('invalid')).toBe(true);
    });
    nativeInput.focus();
    await userEvent.keyboard('{Control>}a{/Control}{Backspace}');
    await userEvent.type(nativeInput, '6037991234567890');
    await waitFor(() => {
      expect(paymentInput.value).toBe('6037991234567890');
      expect(paymentInput.displayValue).toBe('6037 9912 3456 7890');
      expect(nativeInput.value).toBe('6037 9912 3456 7890');
      expect(paymentInput.reportValidity()).toBe(true);
      expect(paymentInput.hasState('invalid')).toBe(false);
    });
  }
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBPaymentInput {...args} />
        <JBButton type="button" onClick={() => formRef.current?.reset()}>Reset</JBButton>
      </form>;
  },
  args: {
    label: 'initial SHABA',
    inputType: 'SHABA',
    initialValue: initialShaba
  },
  play: async ({
    canvasElement
  }) => {
    const paymentInput = getPaymentInput(canvasElement);
    const resetButton = canvasElement.querySelector('jb-button')?.shadowRoot?.querySelector<HTMLButtonElement>('button');
    expect(resetButton).toBeTruthy();
    await waitFor(() => {
      // The wrapper must configure SHABA mode before assigning the baseline,
      // otherwise CARD normalization truncates the 24-digit account number.
      expect(paymentInput.initialValue).toBe(initialShaba);
      expect(paymentInput.value).toBe(initialShaba);
      expect(paymentInput.displayValue).toBe('IR12 0000 0000 0000 0000 0000 00');
      expect(paymentInput.isDirty).toBe(false);
    });
    paymentInput.initialValue = nextInitialShaba;
    await waitFor(() => {
      expect(paymentInput.initialValue).toBe(nextInitialShaba);
      expect(paymentInput.value).toBe(nextInitialShaba);
      expect(paymentInput.isDirty).toBe(false);
    });
    paymentInput.value = 'IR560000000000000000000000';
    await userEvent.click(resetButton!);
    await waitFor(() => {
      expect(paymentInput.value).toBe(nextInitialShaba);
      expect(paymentInput.isDirty).toBe(false);
    });
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    inputType: 'SHABA',
    initialValue: initialShaba,
    value: nextInitialShaba
  },
  play: async ({
    canvasElement
  }) => {
    const paymentInput = getPaymentInput(canvasElement);
    await waitFor(() => {
      expect(paymentInput.initialValue).toBe(initialShaba);
      expect(paymentInput.value).toBe(nextInitialShaba);
      expect(paymentInput.isDirty).toBe(true);
    });
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    inputType: 'SHABA',
    initialValue: initialShaba,
    value: null
  },
  play: async ({
    canvasElement
  }) => {
    const paymentInput = getPaymentInput(canvasElement);
    await waitFor(() => {
      expect(paymentInput.initialValue).toBe(initialShaba);
      expect(paymentInput.value).toBe('');
      expect(paymentInput.isDirty).toBe(true);
    });
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBPaymentInput {...args} />
        <JBButton type="button" onClick={() => formRef.current?.reset()}>Reset</JBButton>
      </form>;
  },
  args: {
    inputType: 'CARD',
    initialValue: '6037991234567890'
  },
  play: async ({
    canvasElement
  }) => {
    const paymentInput = getPaymentInput(canvasElement);
    const resetButton = canvasElement.querySelector('jb-button')?.shadowRoot?.querySelector<HTMLButtonElement>('button');
    expect(resetButton).toBeTruthy();
    await waitFor(() => {
      expect(paymentInput.value).toBe('6037991234567890');
      expect(paymentInput.isDirty).toBe(false);
    });
    paymentInput.paymentInputType = 'SHABA';
    await waitFor(() => {
      // CARD -> SHABA changes the canonical value domain, so the reset
      // baseline must be transformed together with the live value.
      expect(paymentInput.initialValue).toBe('IR6037991234567890');
      expect(paymentInput.value).toBe('IR6037991234567890');
      expect(paymentInput.isDirty).toBe(false);
    });
    paymentInput.value = initialShaba;
    expect(paymentInput.isDirty).toBe(true);
    await userEvent.click(resetButton!);
    await waitFor(() => {
      expect(paymentInput.value).toBe('IR6037991234567890');
      expect(paymentInput.initialValue).toBe(paymentInput.value);
      expect(paymentInput.isDirty).toBe(false);
    });
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'card number paste',
    message: 'paste text that contains a 16 digit card number',
    value: '',
    inputType: 'CARD'
  },
  play: async ({
    canvasElement
  }) => {
    const paymentInput = getPaymentInput(canvasElement);
    const nativeInput = getNativeInput(paymentInput);
    nativeInput.value = 'card number: 6037-9912-3456-7890';
    nativeInput.dispatchEvent(new InputEvent('input', {
      bubbles: true,
      composed: true,
      inputType: 'insertFromPaste'
    }));
    await waitFor(() => {
      expect(paymentInput.value).toBe('6037991234567890');
      expect(paymentInput.displayValue).toBe('6037 9912 3456 7890');
      expect(nativeInput.value).toBe('6037 9912 3456 7890');
      expect(paymentInput.reportValidity()).toBe(true);
    });
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'card number',
    message: "please input 16 digit card number",
    inputType: "CARD",
    required: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'shaba number',
    message: "please input shaba number",
    value: "",
    inputType: "SHABA"
  },
  play: async ({
    canvasElement
  }) => {
    const paymentInput = getPaymentInput(canvasElement);
    const nativeInput = getNativeInput(paymentInput);
    await userEvent.type(nativeInput, '120000000000000000000000');
    await waitFor(() => {
      expect(paymentInput.value).toBe('IR120000000000000000000000');
      expect(paymentInput.displayValue).toBe('IR12 0000 0000 0000 0000 0000 00');
      expect(nativeInput.value).toBe('IR12 0000 0000 0000 0000 0000 00');
      expect(paymentInput.reportValidity()).toBe(true);
    });
    nativeInput.focus();
    await userEvent.keyboard('{Control>}a{/Control}{Backspace}');
    await userEvent.type(nativeInput, 'IR12');
    await waitFor(() => {
      expect(paymentInput.value).toBe('IR12');
      expect(paymentInput.displayValue).toBe('IR12');
      expect(paymentInput.reportValidity()).toBe(false);
      expect(getMessageText(paymentInput)).toBe('Please enter all 26 digits of your IBAN number.');
      expect(paymentInput.hasState('invalid')).toBe(true);
    });
    nativeInput.focus();
    await userEvent.keyboard('{Control>}a{/Control}{Backspace}');
    await userEvent.type(nativeInput, '12');
    await waitFor(() => {
      expect(paymentInput.value).toBe('IR12');
      expect(paymentInput.displayValue).toBe('IR12');
      expect(nativeInput.value).toBe('IR12');
    });
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'card number',
    message: "card number with bank logo (ex: start card with 603799 number to see melli bank logo)",
    value: "",
    inputType: "CARD",
    children: <BankIndicator slot="end-section" />
  },
  play: async ({
    canvasElement
  }) => {
    const paymentInput = getPaymentInput(canvasElement);
    const nativeInput = getNativeInput(paymentInput);
    const bankIndicator = getBankIndicator(canvasElement);
    const bankImageWrapper = getBankImageWrapper(bankIndicator);
    await userEvent.type(nativeInput, '6037991234567890');
    await waitFor(() => {
      expect(paymentInput.value).toBe('6037991234567890');
      expect(bankIndicator.selectedBank?.title.fa).toBe('بانک ملی ایران');
      expect(bankImageWrapper.getAttribute('title')).toBe('بانک ملی ایران');
    });
    nativeInput.focus();
    await userEvent.keyboard('{Control>}a{/Control}{Backspace}');
    await userEvent.type(nativeInput, '1111111234567890');
    await waitFor(() => {
      expect(bankIndicator.selectedBank).toBe(null);
    });
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'card number',
    message: "please input 16 digit card number",
    value: "",
    separator: "-",
    inputType: "CARD"
  },
  play: async ({
    canvasElement
  }) => {
    const paymentInput = getPaymentInput(canvasElement);
    const nativeInput = getNativeInput(paymentInput);
    await userEvent.type(nativeInput, '6037991234567890');
    await waitFor(() => {
      expect(paymentInput.value).toBe('6037991234567890');
      expect(paymentInput.displayValue).toBe('6037-9912-3456-7890');
      expect(nativeInput.value).toBe('6037-9912-3456-7890');
    });
  }
}`,...L.parameters?.docs?.source}}},R=[`CardNumber`,`InitialValue`,`InitialValueDoesNotOverrideValue`,`ExplicitNullValueDoesNotFallBackToInitialValue`,`ChangingPaymentTypeKeepsInitialBaseline`,`CardNumberPaste`,`RequiredCardNumber`,`ShabaNumber`,`CardNumberWithBankLogo`,`DashSeparatorCN`]}));z();export{E as CardNumber,N as CardNumberPaste,I as CardNumberWithBankLogo,M as ChangingPaymentTypeKeepsInitialBaseline,L as DashSeparatorCN,j as ExplicitNullValueDoesNotFallBackToInitialValue,k as InitialValue,A as InitialValueDoesNotOverrideValue,P as RequiredCardNumber,F as ShabaNumber,R as __namedExportsOrder,T as default,z as n,y as t};