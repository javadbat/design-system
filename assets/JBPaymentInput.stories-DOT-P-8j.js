import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{K as n,t as r}from"./iframe-D_Yaz38j.js";import{r as i,t as a}from"./react-BHXKgqFV.js";import{i as o,n as s,t as c}from"./react-CayoK0tf.js";function l(e,t=0){let n=e.querySelectorAll(`jb-payment-input`)[t];return m(n).toBeTruthy(),m(n.shadowRoot).toBeTruthy(),n}function u(e){let t=e.shadowRoot?.querySelector(`input`);return m(t).toBeTruthy(),t}function d(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}function f(e){let t=e.querySelector(`bank-indicator`);return m(t).toBeTruthy(),m(t.shadowRoot).toBeTruthy(),t}function p(e){let t=e.shadowRoot?.querySelector(`.bank-image-wrapper`);return m(t).toBeTruthy(),t}var m,h=t((()=>{({expect:m}=__STORYBOOK_MODULE_TEST__)})),g=e({CardNumber:()=>S,CardNumberPaste:()=>C,CardNumberWithBankLogo:()=>E,DashSeparatorCN:()=>D,RequiredCardNumber:()=>w,ShabaNumber:()=>T,__namedExportsOrder:()=>O,default:()=>x}),_,v,y,b,x,S,C,w,T,E,D,O,k=t((()=>{n(),a(),o(),c(),h(),_=r(),{expect:v,userEvent:y,waitFor:b}=__STORYBOOK_MODULE_TEST__,x={title:`Components/form elements/Inputs/JBPaymentInput`,component:i},S={args:{label:`card number`,message:`please input 16 digit card number`,value:``,inputType:`CARD`},play:async({canvasElement:e})=>{let t=l(e),n=u(t);await y.type(n,`card 603799123456789`),await b(()=>{v(t.value).toBe(`603799123456789`),v(t.reportValidity()).toBe(!1),v(d(t)).toBe(`Please enter all 16 digits of your card number.`),v(t.hasState(`invalid`)).toBe(!0)}),n.focus(),await y.keyboard(`{Control>}a{/Control}{Backspace}`),await y.type(n,`6037991234567890`),await b(()=>{v(t.value).toBe(`6037991234567890`),v(t.displayValue).toBe(`6037 9912 3456 7890`),v(n.value).toBe(`6037 9912 3456 7890`),v(t.reportValidity()).toBe(!0),v(t.hasState(`invalid`)).toBe(!1)})}},C={args:{label:`card number paste`,message:`paste text that contains a 16 digit card number`,value:``,inputType:`CARD`},play:async({canvasElement:e})=>{let t=l(e),n=u(t);n.value=`card number: 6037-9912-3456-7890`,n.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0,inputType:`insertFromPaste`})),await b(()=>{v(t.value).toBe(`6037991234567890`),v(t.displayValue).toBe(`6037 9912 3456 7890`),v(n.value).toBe(`6037 9912 3456 7890`),v(t.reportValidity()).toBe(!0)})}},w={args:{label:`card number`,message:`please input 16 digit card number`,inputType:`CARD`,required:!0}},T={args:{label:`shaba number`,message:`please input shaba number`,value:``,inputType:`SHABA`},play:async({canvasElement:e})=>{let t=l(e),n=u(t);await y.type(n,`120000000000000000000000`),await b(()=>{v(t.value).toBe(`IR120000000000000000000000`),v(t.displayValue).toBe(`IR12 0000 0000 0000 0000 0000 00`),v(n.value).toBe(`IR12 0000 0000 0000 0000 0000 00`),v(t.reportValidity()).toBe(!0)}),n.focus(),await y.keyboard(`{Control>}a{/Control}{Backspace}`),await y.type(n,`IR12`),await b(()=>{v(t.value).toBe(`IR12`),v(t.displayValue).toBe(`IR12`),v(t.reportValidity()).toBe(!1),v(d(t)).toBe(`Please enter all 26 digits of your IBAN number.`),v(t.hasState(`invalid`)).toBe(!0)}),n.focus(),await y.keyboard(`{Control>}a{/Control}{Backspace}`),await y.type(n,`12`),await b(()=>{v(t.value).toBe(`IR12`),v(t.displayValue).toBe(`IR12`),v(n.value).toBe(`IR12`)})}},E={args:{label:`card number`,message:`card number with bank logo (ex: start card with 603799 number to see melli bank logo)`,value:``,inputType:`CARD`,children:(0,_.jsx)(s,{slot:`end-section`})},play:async({canvasElement:e})=>{let t=l(e),n=u(t),r=f(e),i=p(r);await y.type(n,`6037991234567890`),await b(()=>{v(t.value).toBe(`6037991234567890`),v(r.selectedBank?.title.fa).toBe(`بانک ملی ایران`),v(i.getAttribute(`title`)).toBe(`بانک ملی ایران`)}),n.focus(),await y.keyboard(`{Control>}a{/Control}{Backspace}`),await y.type(n,`1111111234567890`),await b(()=>{v(r.selectedBank).toBe(null)})}},D={args:{label:`card number`,message:`please input 16 digit card number`,value:``,separator:`-`,inputType:`CARD`},play:async({canvasElement:e})=>{let t=l(e),n=u(t);await y.type(n,`6037991234567890`),await b(()=>{v(t.value).toBe(`6037991234567890`),v(t.displayValue).toBe(`6037-9912-3456-7890`),v(n.value).toBe(`6037-9912-3456-7890`)})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'card number',
    message: "please input 16 digit card number",
    inputType: "CARD",
    required: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`CardNumber`,`CardNumberPaste`,`RequiredCardNumber`,`ShabaNumber`,`CardNumberWithBankLogo`,`DashSeparatorCN`]}));k();export{S as CardNumber,C as CardNumberPaste,E as CardNumberWithBankLogo,D as DashSeparatorCN,w as RequiredCardNumber,T as ShabaNumber,O as __namedExportsOrder,x as default,k as n,g as t};