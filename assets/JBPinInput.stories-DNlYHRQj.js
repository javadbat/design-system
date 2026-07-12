import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-kacJPVKr.js";import{r as a,t as o}from"./react-CsxERd8Q.js";import{r as s,t as c}from"./react-CFj5l2Ys.js";import{n as l,t as u}from"./JBPinInputStyleTest-6zcGu0SZ.js";function d(e,t=0){let n=e.querySelectorAll(`jb-pin-input`)[t];return _(n).toBeTruthy(),_(n.shadowRoot).toBeTruthy(),n}function f(e){let t=Array.from(e.shadowRoot?.querySelectorAll(`.pin-input`)??[]);return _(t.length).toBeGreaterThan(0),t}function p(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}function m(e,t){let n=Array.from(e.querySelectorAll(`jb-button`)).find(e=>e.textContent?.includes(t));return _(n).toBeTruthy(),n}function h(e){let t=e.shadowRoot?.querySelector(`button`);return _(t).toBeTruthy(),t}function g(e,t){let n=new ClipboardEvent(`paste`,{bubbles:!0,cancelable:!0,clipboardData:new DataTransfer});n.clipboardData?.setData(`text`,t),e.dispatchEvent(n)}var _,v=t((()=>{({expect:_}=__STORYBOOK_MODULE_TEST__)})),y=e({AsyncValidation:()=>N,AutoFocus:()=>D,ChecksumValidation:()=>M,ManualValidation:()=>P,Normal:()=>E,PinInputStyle:()=>F,Required:()=>A,WithError:()=>k,WithValidation:()=>j,__namedExportsOrder:()=>I,charLength:()=>O,default:()=>T}),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=t((()=>{b=n(r(),1),o(),c(),l(),v(),x=i(),{expect:S,userEvent:C,waitFor:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/form elements/JBPinInput`,component:s},E={args:{label:`pin input`,message:`please fill the pin`,value:``},play:async({canvasElement:e})=>{let t=d(e),n=f(t);n[0].focus(),await C.keyboard(`12a3`),await w(()=>{S(t.value).toBe(`123---`),S(n[0].value).toBe(`1`),S(n[1].value).toBe(`2`),S(n[2].value).toBe(`3`),S(t.shadowRoot?.activeElement).toBe(n[3])}),g(n[0],`verification code: 987654`),await w(()=>{S(t.value).toBe(`987654`),S(n.map(e=>e.value).join(``)).toBe(`987654`),S(t.shadowRoot?.activeElement).toBe(n[5])})}},D={args:{label:`autofocus`,autofocus:!0,value:``},play:async({canvasElement:e})=>{let t=d(e),n=f(t);await w(()=>{S(t.shadowRoot?.activeElement).toBe(n[0])})}},O={args:{label:`8 digit pin`,value:``,charLength:8},play:async({canvasElement:e})=>{let t=d(e);await w(()=>{S(f(t)).toHaveLength(8),S(t.charLength).toBe(8)}),t.charLength=4,await w(()=>{S(f(t)).toHaveLength(4),S(t.charLength).toBe(4),S(t.value).toBe(`----`)})}},k={args:{label:`with error`,message:`simple message`,error:`error message`,value:``},play:async({canvasElement:e,args:t})=>{let n=d(e);S(n.reportValidity()).toBe(!1),await w(()=>{S(p(n)).toBe(t.error),S(f(n).every(e=>e.getAttribute(`aria-invalid`)===`true`)).toBe(!0)}),n.setAttribute(`error`,``),await w(()=>{S(n.reportValidity()).toBe(!0),S(p(n)).toBe(t.message),S(f(n).every(e=>!e.hasAttribute(`aria-invalid`))).toBe(!0)})}},A={args:{label:`required`,required:!0}},j={render:e=>{let t=[{validator:e=>e.startsWith(`1`),message:`PIN must start with 1`}];return(0,x.jsx)(`div`,{children:(0,x.jsx)(s,{...e,validationList:t,onComplete:e=>console.log(`complete`,e),required:!0,onChange:()=>{console.log(`change`)}})})},args:{label:`Verification code`,message:`Enter a code that starts with 1`},play:async({canvasElement:e,args:t})=>{let n=d(e);n.value=`234567`,S(n.reportValidity()).toBe(!1),await w(()=>{S(p(n)).toBe(`PIN must start with 1`),S(f(n).every(e=>e.getAttribute(`aria-invalid`)===`true`)).toBe(!0)}),n.value=`123456`,S(n.reportValidity()).toBe(!0),await w(()=>{S(p(n)).toBe(t.message)})}},M={render:e=>{let t=[{validator:e=>{if(e.includes(`-`))return!0;let t=e.split(``).map(Number);return t.slice(0,-1).reduce((e,t)=>e+t,0)%10===t[t.length-1]},message:`Last digit must match the checksum`}];return(0,x.jsx)(s,{...e,validationList:t,required:!0,onComplete:e=>console.log(`complete`,e)})},args:{label:`Checksum PIN`,charLength:4,message:`Try 1236. The last digit must equal the sum of previous digits modulo 10.`}},N={render:e=>{let t=[{validator:async e=>(await new Promise(e=>setTimeout(e,3e3)),e===`1234`),message:`Only 1234 is accepted`,defer:!0}];return(0,x.jsx)(s,{...e,validationList:t,required:!0,onComplete:e=>console.log(`complete`,e)})},args:{label:`Async verification code`,charLength:4,message:`Enter 1234 and wait 3 seconds for async validation.`},play:async({canvasElement:e,args:t})=>{let n=d(e);n.value=`9999`,S((await n.validation.checkValidity({showError:!0})).isAllValid).toBe(!1),await w(()=>{S(p(n)).toBe(`Only 1234 is accepted`)}),n.value=`1234`,S((await n.validation.checkValidity({showError:!0})).isAllValid).toBe(!0),await w(()=>{S(p(n)).toBe(t.message)})}},P={render:e=>{let t=(0,b.useRef)(null),[n,r]=(0,b.useState)(`Validation has not run yet.`),i=[{validator:e=>e.startsWith(`1`),message:`PIN must start with 1`}],o=()=>{let e=t.current?.reportValidity()??!1,n=t.current?.validationMessage;r(e?`Valid: reportValidity() returned true.`:`Invalid: ${n}`)};return(0,x.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,maxWidth:`24rem`},children:[(0,x.jsx)(s,{...e,ref:t,validationList:i,required:!0}),(0,x.jsx)(a,{type:`button`,onClick:o,children:`Validate PIN`}),(0,x.jsx)(`p`,{"aria-live":`polite`,children:n})]})},args:{label:`Manual validation code`,charLength:4,message:`Click the button to run reportValidity().`},play:async({canvasElement:e})=>{let t=d(e),n=m(e,`Validate PIN`);await C.click(h(n)),await w(()=>{S(e).toHaveTextContent(`Invalid:`)}),t.value=`1234`,await C.click(h(n)),await w(()=>{S(e).toHaveTextContent(`Valid: reportValidity() returned true.`)})}},F={render:()=>(0,x.jsx)(u,{})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'pin input',
    message: "please fill the pin",
    value: ""
  },
  play: async ({
    canvasElement
  }) => {
    const pinInput = getPinInput(canvasElement);
    const inputs = getPinCells(pinInput);
    inputs[0].focus();
    await userEvent.keyboard('12a3');
    await waitFor(() => {
      expect(pinInput.value).toBe('123---');
      expect(inputs[0].value).toBe('1');
      expect(inputs[1].value).toBe('2');
      expect(inputs[2].value).toBe('3');
      expect(pinInput.shadowRoot?.activeElement).toBe(inputs[3]);
    });
    dispatchPaste(inputs[0], 'verification code: 987654');
    await waitFor(() => {
      expect(pinInput.value).toBe('987654');
      expect(inputs.map(input => input.value).join('')).toBe('987654');
      expect(pinInput.shadowRoot?.activeElement).toBe(inputs[5]);
    });
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'autofocus',
    autofocus: true,
    value: ""
  },
  play: async ({
    canvasElement
  }) => {
    const pinInput = getPinInput(canvasElement);
    const inputs = getPinCells(pinInput);
    await waitFor(() => {
      expect(pinInput.shadowRoot?.activeElement).toBe(inputs[0]);
    });
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: '8 digit pin',
    value: "",
    charLength: 8
  },
  play: async ({
    canvasElement
  }) => {
    const pinInput = getPinInput(canvasElement);
    await waitFor(() => {
      expect(getPinCells(pinInput)).toHaveLength(8);
      expect(pinInput.charLength).toBe(8);
    });
    pinInput.charLength = 4;
    await waitFor(() => {
      expect(getPinCells(pinInput)).toHaveLength(4);
      expect(pinInput.charLength).toBe(4);
      expect(pinInput.value).toBe('----');
    });
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: "simple message",
    error: "error message",
    value: ""
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const pinInput = getPinInput(canvasElement);
    expect(pinInput.reportValidity()).toBe(false);
    await waitFor(() => {
      expect(getMessageText(pinInput)).toBe(args.error);
      expect(getPinCells(pinInput).every(input => input.getAttribute('aria-invalid') === 'true')).toBe(true);
    });
    pinInput.setAttribute('error', '');
    await waitFor(() => {
      expect(pinInput.reportValidity()).toBe(true);
      expect(getMessageText(pinInput)).toBe(args.message);
      expect(getPinCells(pinInput).every(input => !input.hasAttribute('aria-invalid'))).toBe(true);
    });
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'required',
    required: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const validationList = [{
      validator: (value: string) => {
        return value.startsWith("1");
      },
      message: "PIN must start with 1"
    }];
    return <div>
          <JBPinInput {...args} validationList={validationList} onComplete={e => console.log("complete", e)} required onChange={() => {
        console.log("change");
      }} />
        </div>;
  },
  args: {
    label: "Verification code",
    message: "Enter a code that starts with 1"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const pinInput = getPinInput(canvasElement);
    pinInput.value = '234567';
    expect(pinInput.reportValidity()).toBe(false);
    await waitFor(() => {
      expect(getMessageText(pinInput)).toBe('PIN must start with 1');
      expect(getPinCells(pinInput).every(input => input.getAttribute('aria-invalid') === 'true')).toBe(true);
    });
    pinInput.value = '123456';
    expect(pinInput.reportValidity()).toBe(true);
    await waitFor(() => {
      expect(getMessageText(pinInput)).toBe(args.message);
    });
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const validationList = [{
      validator: (value: string) => {
        if (value.includes("-")) {
          return true;
        }
        const digits = value.split("").map(Number);
        const checksum = digits.slice(0, -1).reduce((sum, digit) => sum + digit, 0) % 10;
        return checksum === digits[digits.length - 1];
      },
      message: "Last digit must match the checksum"
    }];
    return <JBPinInput {...args} validationList={validationList} required onComplete={e => console.log("complete", e)} />;
  },
  args: {
    label: "Checksum PIN",
    charLength: 4,
    message: "Try 1236. The last digit must equal the sum of previous digits modulo 10."
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const validationList = [{
      validator: async (value: string) => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        return value === "1234";
      },
      message: "Only 1234 is accepted",
      defer: true
    }];
    return <JBPinInput {...args} validationList={validationList} required onComplete={e => console.log("complete", e)} />;
  },
  args: {
    label: "Async verification code",
    charLength: 4,
    message: "Enter 1234 and wait 3 seconds for async validation."
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const pinInput = getPinInput(canvasElement);
    pinInput.value = '9999';
    const invalidResult = await pinInput.validation.checkValidity({
      showError: true
    });
    expect(invalidResult.isAllValid).toBe(false);
    await waitFor(() => {
      expect(getMessageText(pinInput)).toBe('Only 1234 is accepted');
    });
    pinInput.value = '1234';
    const validResult = await pinInput.validation.checkValidity({
      showError: true
    });
    expect(validResult.isAllValid).toBe(true);
    await waitFor(() => {
      expect(getMessageText(pinInput)).toBe(args.message);
    });
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    const pinInputRef = useRef<JBPinInputWebComponent>(null);
    const [validationResult, setValidationResult] = useState("Validation has not run yet.");
    const validationList = [{
      validator: (value: string) => value.startsWith("1"),
      message: "PIN must start with 1"
    }];
    const validate = () => {
      const isValid = pinInputRef.current?.reportValidity() ?? false;
      const message = pinInputRef.current?.validationMessage;
      setValidationResult(isValid ? "Valid: reportValidity() returned true." : \`Invalid: \${message}\`);
    };
    return <div style={{
      display: "grid",
      gap: "1rem",
      maxWidth: "24rem"
    }}>
          <JBPinInput {...args} ref={pinInputRef} validationList={validationList} required />
          <JBButton type="button" onClick={validate}>Validate PIN</JBButton>
          <p aria-live="polite">{validationResult}</p>
        </div>;
  },
  args: {
    label: "Manual validation code",
    charLength: 4,
    message: "Click the button to run reportValidity()."
  },
  play: async ({
    canvasElement
  }) => {
    const pinInput = getPinInput(canvasElement);
    const validateButton = getJBButton(canvasElement, 'Validate PIN');
    await userEvent.click(getJBButtonNativeButton(validateButton));
    await waitFor(() => {
      expect(canvasElement).toHaveTextContent('Invalid:');
    });
    pinInput.value = '1234';
    await userEvent.click(getJBButtonNativeButton(validateButton));
    await waitFor(() => {
      expect(canvasElement).toHaveTextContent('Valid: reportValidity() returned true.');
    });
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <JBPinInputStyleTest></JBPinInputStyleTest>
}`,...F.parameters?.docs?.source}}},I=[`Normal`,`AutoFocus`,`charLength`,`WithError`,`Required`,`WithValidation`,`ChecksumValidation`,`AsyncValidation`,`ManualValidation`,`PinInputStyle`]}));L();export{N as AsyncValidation,D as AutoFocus,M as ChecksumValidation,P as ManualValidation,E as Normal,F as PinInputStyle,A as Required,k as WithError,j as WithValidation,I as __namedExportsOrder,O as charLength,T as default,L as n,y as t};