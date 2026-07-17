import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{K as n,t as r}from"./iframe-C3yTzOc_.js";import{r as i,t as a}from"./react-i97ez1Qz.js";var o=t((()=>{})),s,c,l=t((()=>{n(),a(),o(),s=r(),c=()=>(0,s.jsx)(`div`,{className:`input-wrapper`,children:(0,s.jsx)(i,{label:`تست`,message:`این متن تست می باشد`})}),c.__docgenInfo={description:``,methods:[],displayName:`JBInputNumberTest`}}));function u(e,t=0){let n=e.querySelectorAll(`jb-number-input`)[t];return m(n).toBeTruthy(),m(n.shadowRoot).toBeTruthy(),n}function d(e){let t=e.shadowRoot?.querySelector(`input`);return m(t).toBeTruthy(),t}function f(e){let t=e.shadowRoot?.querySelector(`.increase-number-button`);return m(t).toBeTruthy(),t}function p(e){let t=e.shadowRoot?.querySelector(`.decrease-number-button`);return m(t).toBeTruthy(),t}var m,h=t((()=>{({expect:m}=__STORYBOOK_MODULE_TEST__)})),g=e({NonNegativeNumberWithUnderlineSeparator:()=>E,Normal:()=>C,NumberWithButtons:()=>D,NumberWithComma:()=>w,NumberWithMinMax:()=>T,NumberWithPersianChar:()=>O,WithEndSection:()=>M,WithError:()=>k,WithStartAndEndSection:()=>N,WithStartSection:()=>j,__namedExportsOrder:()=>P,default:()=>S,numberTest:()=>A}),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=t((()=>{n(),a(),l(),h(),_=r(),{expect:v,fn:y,userEvent:b,waitFor:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/form elements/Inputs/JBNumberInput`,component:i},C={args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`,disabled:!1,onChange:e=>{console.log(`new number is ${e.target.value}`)}},play:async({canvasElement:e})=>{let t=u(e),n=d(t);await b.type(n,`abc12.3x4`),await x(()=>{v(t.value).toBe(`12.34`),v(t.displayValue).toBe(`12.34`),v(n.value).toBe(`12.34`),v(t.reportValidity()).toBe(!0)}),t.value=`45text67`,await x(()=>{v(t.value).toBe(`4567`),v(n.value).toBe(`4567`)})}},w={args:{label:`with thousand separator`,message:`type a big number. each 3 number will separated by a comma`,showThousandSeparator:!0,onChange:e=>{console.log(`new number is ${e.target.value}`)}},play:async({canvasElement:e})=>{let t=u(e),n=d(t);await b.type(n,`1234567`),await x(()=>{v(t.value).toBe(`1234567`),v(t.displayValue).toBe(`1,234,567`),v(n.value).toBe(`1,234,567`)}),t.value=`-1234567.89`,await x(()=>{v(t.value).toBe(`-1234567.89`),v(n.value).toBe(`-1,234,567.89`)})}},T={args:{label:`with min 100 & max 1000`,message:`type smaller or larger number, after un-focus it will turn to max or min(it does not prevent user from typing)`,maxValue:1e4,minValue:100,onChange:e=>{console.log(`new number is ${e.target.value}`)}},play:async({canvasElement:e,args:t})=>{let n=u(e),r=d(n);n.value=`10`,await x(()=>{v(n.value).toBe(`${t.minValue}`),v(r.value).toBe(`${t.minValue}`)}),n.value=`12000`,await x(()=>{v(n.value).toBe(`${t.maxValue}`),v(r.value).toBe(`${t.maxValue}`)}),n.value=`500`,await x(()=>{v(n.value).toBe(`500`),v(n.reportValidity()).toBe(!0)})}},E={args:{label:`non-negative number with underline separator`,message:`each 3 digit separated by _`,acceptNegative:!1,showThousandSeparator:!0,thousandSeparator:`_`,onChange:e=>{console.log(`new number is ${e.target.value}`)}},play:async({canvasElement:e})=>{let t=u(e),n=d(t);await b.type(n,`-1234567`),await x(()=>{v(t.value).toBe(`1234567`),v(n.value).toBe(`1_234_567`)}),await b.keyboard(`{ArrowDown}`),await x(()=>{v(t.value).toBe(`1234566`),v(n.value).toBe(`1_234_566`)}),t.value=`0`,n.focus(),await b.keyboard(`{ArrowDown}`),await x(()=>{v(t.value).toBe(`0`),v(n.value).toBe(`0`)}),await b.keyboard(`{ArrowUp}`),await x(()=>{v(t.value).toBe(`1`)})}},D={args:{label:`with increase and decrease button`,message:`with +- buttons`,showControlButton:!0,step:100,onChange:y()},play:async({canvasElement:e,args:t})=>{let n=u(e),r=d(n),i=f(n),a=p(n);n.value=`0`,await b.click(i),await x(()=>{v(n.value).toBe(`100`),v(r.value).toBe(`100`),v(t.onChange).toHaveBeenCalled()}),await b.click(a),await x(()=>{v(n.value).toBe(`0`),v(r.value).toBe(`0`),v(t.onChange).toHaveBeenCalledTimes(2)})}},O={args:{label:`type number`,message:`type en number but user see persian char number`,showPersianNumber:!0,onChange:e=>{console.log(`new number is ${e.target.value}`)}},play:async({canvasElement:e})=>{let t=u(e),n=d(t);await b.type(n,`1234567`),await x(()=>{v(t.value).toBe(`1234567`),v(t.displayValue).toBe(`۱۲۳۴۵۶۷`),v(n.value).toBe(`۱۲۳۴۵۶۷`)}),t.value=`9876`,await x(()=>{v(t.value).toBe(`9876`),v(n.value).toBe(`۹۸۷۶`)})}},k={args:{label:`show error`,error:`error message`}},A={render:()=>(0,_.jsx)(c,{})},j={render:e=>(0,_.jsx)(i,{...e,children:(0,_.jsx)(`div`,{slot:`start-section`,style:{width:`1.5rem`,height:`1.5rem`,backgroundColor:`#262626`}})}),args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`}},M={render:e=>(0,_.jsx)(i,{...e,children:(0,_.jsx)(`div`,{slot:`end-section`,style:{width:`1.5rem`,height:`1.5rem`,backgroundColor:`#262626`}})}),args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`}},N={render:e=>(0,_.jsxs)(i,{...e,children:[(0,_.jsx)(`div`,{slot:`end-section`,style:{width:`1.5rem`,height:`1.5rem`,backgroundColor:`#262626`}}),(0,_.jsx)(`div`,{slot:`start-section`,style:{width:`1.5rem`,height:`1.5rem`,backgroundColor:`#262626`}})]}),args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    disabled: false,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  },
  play: async ({
    canvasElement
  }) => {
    const numberInput = getNumberInput(canvasElement);
    const nativeInput = getNativeInput(numberInput);
    await userEvent.type(nativeInput, 'abc12.3x4');
    await waitFor(() => {
      expect(numberInput.value).toBe('12.34');
      expect(numberInput.displayValue).toBe('12.34');
      expect(nativeInput.value).toBe('12.34');
      expect(numberInput.reportValidity()).toBe(true);
    });
    numberInput.value = '45text67';
    await waitFor(() => {
      expect(numberInput.value).toBe('4567');
      expect(nativeInput.value).toBe('4567');
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with thousand separator',
    message: 'type a big number. each 3 number will separated by a comma',
    showThousandSeparator: true,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  },
  play: async ({
    canvasElement
  }) => {
    const numberInput = getNumberInput(canvasElement);
    const nativeInput = getNativeInput(numberInput);
    await userEvent.type(nativeInput, '1234567');
    await waitFor(() => {
      expect(numberInput.value).toBe('1234567');
      expect(numberInput.displayValue).toBe('1,234,567');
      expect(nativeInput.value).toBe('1,234,567');
    });
    numberInput.value = '-1234567.89';
    await waitFor(() => {
      expect(numberInput.value).toBe('-1234567.89');
      expect(nativeInput.value).toBe('-1,234,567.89');
    });
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with min 100 & max 1000',
    message: 'type smaller or larger number, after un-focus it will turn to max or min(it does not prevent user from typing)',
    maxValue: 10000,
    minValue: 100,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const numberInput = getNumberInput(canvasElement);
    const nativeInput = getNativeInput(numberInput);
    numberInput.value = '10';
    await waitFor(() => {
      expect(numberInput.value).toBe(\`\${args.minValue}\`);
      expect(nativeInput.value).toBe(\`\${args.minValue}\`);
    });
    numberInput.value = '12000';
    await waitFor(() => {
      expect(numberInput.value).toBe(\`\${args.maxValue}\`);
      expect(nativeInput.value).toBe(\`\${args.maxValue}\`);
    });
    numberInput.value = '500';
    await waitFor(() => {
      expect(numberInput.value).toBe('500');
      expect(numberInput.reportValidity()).toBe(true);
    });
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'non-negative number with underline separator',
    message: 'each 3 digit separated by _',
    acceptNegative: false,
    showThousandSeparator: true,
    thousandSeparator: '_',
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  },
  play: async ({
    canvasElement
  }) => {
    const numberInput = getNumberInput(canvasElement);
    const nativeInput = getNativeInput(numberInput);
    await userEvent.type(nativeInput, '-1234567');
    await waitFor(() => {
      expect(numberInput.value).toBe('1234567');
      expect(nativeInput.value).toBe('1_234_567');
    });
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(numberInput.value).toBe('1234566');
      expect(nativeInput.value).toBe('1_234_566');
    });
    numberInput.value = '0';
    nativeInput.focus();
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(numberInput.value).toBe('0');
      expect(nativeInput.value).toBe('0');
    });
    await userEvent.keyboard('{ArrowUp}');
    await waitFor(() => {
      expect(numberInput.value).toBe('1');
    });
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with increase and decrease button',
    message: 'with +- buttons',
    showControlButton: true,
    step: 100,
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const numberInput = getNumberInput(canvasElement);
    const nativeInput = getNativeInput(numberInput);
    const increaseButton = getIncreaseButton(numberInput);
    const decreaseButton = getDecreaseButton(numberInput);
    numberInput.value = '0';
    await userEvent.click(increaseButton);
    await waitFor(() => {
      expect(numberInput.value).toBe('100');
      expect(nativeInput.value).toBe('100');
      expect(args.onChange).toHaveBeenCalled();
    });
    await userEvent.click(decreaseButton);
    await waitFor(() => {
      expect(numberInput.value).toBe('0');
      expect(nativeInput.value).toBe('0');
      expect(args.onChange).toHaveBeenCalledTimes(2);
    });
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'type number',
    message: 'type en number but user see persian char number',
    showPersianNumber: true,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  },
  play: async ({
    canvasElement
  }) => {
    const numberInput = getNumberInput(canvasElement);
    const nativeInput = getNativeInput(numberInput);
    await userEvent.type(nativeInput, '1234567');
    await waitFor(() => {
      expect(numberInput.value).toBe('1234567');
      expect(numberInput.displayValue).toBe('۱۲۳۴۵۶۷');
      expect(nativeInput.value).toBe('۱۲۳۴۵۶۷');
    });
    numberInput.value = '9876';
    await waitFor(() => {
      expect(numberInput.value).toBe('9876');
      expect(nativeInput.value).toBe('۹۸۷۶');
    });
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'show error',
    error: 'error message'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <JBInputNumberTest></JBInputNumberTest>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <JBNumberInput {...args}>
        <div slot="start-section" style={{
        width: '1.5rem',
        height: '1.5rem',
        backgroundColor: '#262626'
      }}></div>
      </JBNumberInput>;
  },
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <JBNumberInput {...args}>
        <div slot="end-section" style={{
        width: '1.5rem',
        height: '1.5rem',
        backgroundColor: '#262626'
      }}></div>
      </JBNumberInput>;
  },
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <JBNumberInput {...args}>
        <div slot="end-section" style={{
        width: '1.5rem',
        height: '1.5rem',
        backgroundColor: '#262626'
      }}></div>
        <div slot="start-section" style={{
        width: '1.5rem',
        height: '1.5rem',
        backgroundColor: '#262626'
      }}></div>
      </JBNumberInput>;
  },
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
  }
}`,...N.parameters?.docs?.source}}},P=[`Normal`,`NumberWithComma`,`NumberWithMinMax`,`NonNegativeNumberWithUnderlineSeparator`,`NumberWithButtons`,`NumberWithPersianChar`,`WithError`,`numberTest`,`WithStartSection`,`WithEndSection`,`WithStartAndEndSection`]}));F();export{E as NonNegativeNumberWithUnderlineSeparator,C as Normal,D as NumberWithButtons,w as NumberWithComma,T as NumberWithMinMax,O as NumberWithPersianChar,M as WithEndSection,k as WithError,N as WithStartAndEndSection,j as WithStartSection,P as __namedExportsOrder,S as default,F as n,A as numberTest,g as t};