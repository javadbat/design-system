import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-pq5aVzpF.js";import{r as a,t as o}from"./react-D3vVezui.js";import{r as s,t as c}from"./react-B-NmmUWx.js";var l=t((()=>{})),u,d,f=t((()=>{r(),c(),l(),u=i(),d=()=>(0,u.jsx)(`div`,{className:`input-wrapper`,children:(0,u.jsx)(s,{label:`تست`,message:`این متن تست می باشد`})}),d.__docgenInfo={description:``,methods:[],displayName:`JBInputNumberTest`}}));function p(e,t=0){let n=e.querySelectorAll(`jb-number-input`)[t];return _(n).toBeTruthy(),_(n.shadowRoot).toBeTruthy(),n}function m(e){let t=e.shadowRoot?.querySelector(`input`);return _(t).toBeTruthy(),t}function h(e){let t=e.shadowRoot?.querySelector(`.increase-number-button`);return _(t).toBeTruthy(),t}function g(e){let t=e.shadowRoot?.querySelector(`.decrease-number-button`);return _(t).toBeTruthy(),t}var _,v=t((()=>{({expect:_}=__STORYBOOK_MODULE_TEST__)})),y=e({ControlButtonSizeVariants:()=>I,ControlledTypingKeepsFocus:()=>L,ExplicitNullValueDoesNotFallBackToInitialValue:()=>A,InitialValue:()=>O,InitialValueDoesNotOverrideValue:()=>k,NonNegativeNumberWithUnderlineSeparator:()=>P,Normal:()=>D,NumberWithButtons:()=>F,NumberWithComma:()=>j,NumberWithMinMax:()=>M,NumberWithPersianChar:()=>R,PrecisionAndInvalidReplacement:()=>N,WithEndSection:()=>H,WithError:()=>z,WithStartAndEndSection:()=>U,WithStartSection:()=>V,__namedExportsOrder:()=>W,default:()=>E,numberTest:()=>B}),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G=t((()=>{b=n(r(),1),c(),o(),f(),v(),x=i(),{expect:S,fn:C,userEvent:w,waitFor:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/form elements/Inputs/JBNumberInput`,component:s},D={args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`,disabled:!1,onChange:e=>{console.log(`new number is ${e.target.value}`)}},play:async({canvasElement:e})=>{let t=p(e),n=m(t);await w.type(n,`abc12.3x4`),await T(()=>{S(t.value).toBe(`12.34`),S(t.displayValue).toBe(`12.34`),S(n.value).toBe(`12.34`),S(t.reportValidity()).toBe(!0)}),t.value=`45text67`,await T(()=>{S(t.value).toBe(`4567`),S(n.value).toBe(`4567`)})}},O={render:e=>{let t=b.useRef(null);return(0,x.jsxs)(`form`,{ref:t,children:[(0,x.jsx)(s,{...e}),(0,x.jsx)(a,{onClick:()=>t.current?.reset(),children:`Reset`})]})},args:{label:`initial value`,initialValue:1200,showThousandSeparator:!0},play:async({canvasElement:e,args:t})=>{let n=p(e),r=m(n),i=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`);S(i).toBeTruthy(),await T(()=>{S(n.initialValue).toBe(String(t.initialValue)),S(n.value).toBe(`1200`),S(n.displayValue).toBe(`1,200`),S(r.value).toBe(`1,200`),S(n.isDirty).toBe(!1)}),n.thousandSeparator=`_`,n.showPersianNumber=!0,await T(()=>{S(n.initialValue).toBe(`1200`),S(n.value).toBe(`1200`),S(n.displayValue).toBe(`۱_۲۰۰`),S(r.value).toBe(`۱_۲۰۰`),S(n.isDirty).toBe(!1)}),n.initialValue=`2,300`,await T(()=>{S(n.initialValue).toBe(`2300`),S(n.value).toBe(`2300`),S(n.displayValue).toBe(`۲_۳۰۰`),S(n.isDirty).toBe(!1)}),n.value=`2500`,await T(()=>{S(n.value).toBe(`2500`),S(n.displayValue).toBe(`۲_۵۰۰`),S(n.isDirty).toBe(!0)}),n.initialValue=`3000`,await T(()=>{S(n.initialValue).toBe(`3000`),S(n.value).toBe(`2500`),S(r.value).toBe(`۲_۵۰۰`),S(n.isDirty).toBe(!0)}),await w.click(i),await T(()=>{S(n.value).toBe(`3000`),S(n.initialValue).toBe(n.value),S(n.displayValue).toBe(`۳_۰۰۰`),S(r.value).toBe(`۳_۰۰۰`),S(n.isDirty).toBe(!1)})}},k={args:{initialValue:1200,value:2500,showThousandSeparator:!0},play:async({canvasElement:e})=>{let t=p(e),n=m(t);await T(()=>{S(t.initialValue).toBe(`1200`),S(t.value).toBe(`2500`),S(t.displayValue).toBe(`2,500`),S(n.value).toBe(`2,500`),S(t.isDirty).toBe(!0)})}},A={args:{initialValue:1200,value:null,showThousandSeparator:!0},play:async({canvasElement:e})=>{let t=p(e),n=m(t);await T(()=>{S(t.initialValue).toBe(`1200`),S(t.value).toBe(``),S(t.displayValue).toBe(``),S(n.value).toBe(``),S(t.isDirty).toBe(!0)})}},j={args:{label:`with thousand separator`,message:`type a big number. each 3 number will separated by a comma`,showThousandSeparator:!0,onChange:e=>{console.log(`new number is ${e.target.value}`)}},play:async({canvasElement:e})=>{let t=p(e),n=m(t);await w.type(n,`1234567`),await T(()=>{S(t.value).toBe(`1234567`),S(t.displayValue).toBe(`1,234,567`),S(n.value).toBe(`1,234,567`)}),t.value=`-1234567.89`,await T(()=>{S(t.value).toBe(`-1234567.89`),S(n.value).toBe(`-1,234,567.89`)})}},M={args:{label:`with min 100 & max 1000`,message:`type smaller or larger number, after un-focus it will turn to max or min(it does not prevent user from typing)`,maxValue:1e4,minValue:100,onChange:e=>{console.log(`new number is ${e.target.value}`)}},play:async({canvasElement:e,args:t})=>{let n=p(e),r=m(n);n.value=`10`,await T(()=>{S(n.value).toBe(`${t.minValue}`),S(r.value).toBe(`${t.minValue}`)}),n.value=`12000`,await T(()=>{S(n.value).toBe(`${t.maxValue}`),S(r.value).toBe(`${t.maxValue}`)}),n.value=`500`,await T(()=>{S(n.value).toBe(`500`),S(n.reportValidity()).toBe(!0)})}},N={args:{label:`precision and invalid replacement`,decimalPrecision:2},play:async({canvasElement:e})=>{let t=p(e),n=m(t);t.invalidNumberReplacement=`0`,t.value=`12.345`,await T(()=>{S(t.value).toBe(`12.34`),S(n.value).toBe(`12.34`)}),t.value=`.`,await T(()=>{S(t.value).toBe(`0`),S(n.value).toBe(`0`)})}},P={args:{label:`non-negative number with underline separator`,message:`each 3 digit separated by _`,acceptNegative:!1,showThousandSeparator:!0,thousandSeparator:`_`,onChange:e=>{console.log(`new number is ${e.target.value}`)}},play:async({canvasElement:e})=>{let t=p(e),n=m(t);await w.type(n,`-1234567`),await T(()=>{S(t.value).toBe(`1234567`),S(n.value).toBe(`1_234_567`)}),await w.keyboard(`{ArrowDown}`),await T(()=>{S(t.value).toBe(`1234566`),S(n.value).toBe(`1_234_566`)}),t.value=`0`,n.focus(),await w.keyboard(`{ArrowDown}`),await T(()=>{S(t.value).toBe(`0`),S(n.value).toBe(`0`)}),await w.keyboard(`{ArrowUp}`),await T(()=>{S(t.value).toBe(`1`)})}},F={args:{label:`with increase and decrease button`,message:`with +- buttons`,showControlButton:!0,step:100,onChange:C()},play:async({canvasElement:e,args:t})=>{let n=p(e),r=m(n),i=h(n),a=g(n);S(i.querySelector(`jb-icon-plus`)).toBeTruthy(),S(a.querySelector(`jb-icon-minus`)).toBeTruthy(),n.value=`0`,await w.click(i),await T(()=>{S(n.value).toBe(`100`),S(r.value).toBe(`100`),S(t.onChange).toHaveBeenCalled()}),await w.click(a),await T(()=>{S(n.value).toBe(`0`),S(r.value).toBe(`0`),S(t.onChange).toHaveBeenCalledTimes(2)})}},I={render:()=>(0,x.jsx)(`div`,{style:{display:`grid`,gap:`1rem`,width:`20rem`},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,x.jsx)(s,{label:`${e} size`,size:e,showControlButton:!0},e))}),play:async({canvasElement:e})=>{let t=Array.from(e.querySelectorAll(`jb-number-input`)),n=t.map(e=>parseFloat(getComputedStyle(h(e)).width)),r=t.map(e=>{let t=h(e).querySelector(`jb-icon-plus`);if(!t)throw Error(`Increase icon was not rendered`);return parseFloat(getComputedStyle(t).height)});S(n).toEqual([...n].sort((e,t)=>e-t)),S(r).toEqual([...r].sort((e,t)=>e-t)),S(new Set(n).size).toBe(5),S(new Set(r).size).toBe(5)}},L={render:()=>{let[e,t]=b.useState(``);return(0,x.jsx)(s,{label:`Controlled value`,value:e,onInput:e=>t(e.target.value),showControlButton:!0})},play:async({canvasElement:e})=>{let t=p(e),n=m(t);n.focus();for(let e of[`1`,`2`,`3`])await w.keyboard(e),await T(()=>{S(n.getRootNode()).toHaveProperty(`activeElement`,n)});S(t.value).toBe(`123`),S(n.value).toBe(`123`)}},R={args:{label:`type number`,message:`type en number but user see persian char number`,showPersianNumber:!0,onChange:e=>{console.log(`new number is ${e.target.value}`)}},play:async({canvasElement:e})=>{let t=p(e),n=m(t);await w.type(n,`1234567`),await T(()=>{S(t.value).toBe(`1234567`),S(t.displayValue).toBe(`۱۲۳۴۵۶۷`),S(n.value).toBe(`۱۲۳۴۵۶۷`)}),t.value=`9876`,await T(()=>{S(t.value).toBe(`9876`),S(n.value).toBe(`۹۸۷۶`)})}},z={args:{label:`show error`,error:`error message`}},B={render:()=>(0,x.jsx)(d,{})},V={render:e=>(0,x.jsx)(s,{...e,children:(0,x.jsx)(`div`,{slot:`start-section`,style:{width:`1.5rem`,height:`1.5rem`,backgroundColor:`#262626`}})}),args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`}},H={render:e=>(0,x.jsx)(s,{...e,children:(0,x.jsx)(`div`,{slot:`end-section`,style:{width:`1.5rem`,height:`1.5rem`,backgroundColor:`#262626`}})}),args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`}},U={render:e=>(0,x.jsxs)(s,{...e,children:[(0,x.jsx)(`div`,{slot:`end-section`,style:{width:`1.5rem`,height:`1.5rem`,backgroundColor:`#262626`}}),(0,x.jsx)(`div`,{slot:`start-section`,style:{width:`1.5rem`,height:`1.5rem`,backgroundColor:`#262626`}})]}),args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = React.useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBNumberInput {...args} />
        <JBButton onClick={() => formRef.current?.reset()}>Reset</JBButton>
      </form>;
  },
  args: {
    label: 'initial value',
    initialValue: 1200,
    showThousandSeparator: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const numberInput = getNumberInput(canvasElement);
    const nativeInput = getNativeInput(numberInput);
    const resetButton = canvasElement.querySelector('jb-button')?.shadowRoot?.querySelector<HTMLButtonElement>('button');
    expect(resetButton).toBeTruthy();
    await waitFor(() => {
      expect(numberInput.initialValue).toBe(String(args.initialValue));
      expect(numberInput.value).toBe('1200');
      expect(numberInput.displayValue).toBe('1,200');
      expect(nativeInput.value).toBe('1,200');
      expect(numberInput.isDirty).toBe(false);
    });
    numberInput.thousandSeparator = '_';
    numberInput.showPersianNumber = true;
    await waitFor(() => {
      // Presentation-only configuration must reformat both the live display
      // and baseline domain without consuming the initialization latch.
      expect(numberInput.initialValue).toBe('1200');
      expect(numberInput.value).toBe('1200');
      expect(numberInput.displayValue).toBe('۱_۲۰۰');
      expect(nativeInput.value).toBe('۱_۲۰۰');
      expect(numberInput.isDirty).toBe(false);
    });

    // Formatting configuration must not consume the initialization latch.
    numberInput.initialValue = '2,300';
    await waitFor(() => {
      expect(numberInput.initialValue).toBe('2300');
      expect(numberInput.value).toBe('2300');
      expect(numberInput.displayValue).toBe('۲_۳۰۰');
      expect(numberInput.isDirty).toBe(false);
    });

    // Use the public setter here because this story targets live-value
    // precedence; keyboard behavior is covered by the other number stories.
    numberInput.value = '2500';
    await waitFor(() => {
      expect(numberInput.value).toBe('2500');
      expect(numberInput.displayValue).toBe('۲_۵۰۰');
      expect(numberInput.isDirty).toBe(true);
    });
    numberInput.initialValue = '3000';
    await waitFor(() => {
      expect(numberInput.initialValue).toBe('3000');
      expect(numberInput.value).toBe('2500');
      expect(nativeInput.value).toBe('۲_۵۰۰');
      expect(numberInput.isDirty).toBe(true);
    });
    await userEvent.click(resetButton!);
    await waitFor(() => {
      expect(numberInput.value).toBe('3000');
      expect(numberInput.initialValue).toBe(numberInput.value);
      expect(numberInput.displayValue).toBe('۳_۰۰۰');
      expect(nativeInput.value).toBe('۳_۰۰۰');
      expect(numberInput.isDirty).toBe(false);
    });
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: 1200,
    value: 2500,
    showThousandSeparator: true
  },
  play: async ({
    canvasElement
  }) => {
    const numberInput = getNumberInput(canvasElement);
    const nativeInput = getNativeInput(numberInput);
    await waitFor(() => {
      expect(numberInput.initialValue).toBe('1200');
      expect(numberInput.value).toBe('2500');
      expect(numberInput.displayValue).toBe('2,500');
      expect(nativeInput.value).toBe('2,500');
      expect(numberInput.isDirty).toBe(true);
    });
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: 1200,
    value: null,
    showThousandSeparator: true
  },
  play: async ({
    canvasElement
  }) => {
    const numberInput = getNumberInput(canvasElement);
    const nativeInput = getNativeInput(numberInput);
    await waitFor(() => {
      expect(numberInput.initialValue).toBe('1200');
      expect(numberInput.value).toBe('');
      expect(numberInput.displayValue).toBe('');
      expect(nativeInput.value).toBe('');
      expect(numberInput.isDirty).toBe(true);
    });
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'precision and invalid replacement',
    decimalPrecision: 2
  },
  play: async ({
    canvasElement
  }) => {
    const numberInput = getNumberInput(canvasElement);
    const nativeInput = getNativeInput(numberInput);
    numberInput.invalidNumberReplacement = '0';
    numberInput.value = '12.345';
    await waitFor(() => {
      expect(numberInput.value).toBe('12.34');
      expect(nativeInput.value).toBe('12.34');
    });
    numberInput.value = '.';
    await waitFor(() => {
      expect(numberInput.value).toBe('0');
      expect(nativeInput.value).toBe('0');
    });
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
    expect(increaseButton.querySelector('jb-icon-plus')).toBeTruthy();
    expect(decreaseButton.querySelector('jb-icon-minus')).toBeTruthy();
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '1rem',
    width: '20rem'
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <JBNumberInput key={size} label={\`\${size} size\`} size={size} showControlButton />)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const numberInputs = Array.from(canvasElement.querySelectorAll<JBNumberInputWebComponent>('jb-number-input'));
    const buttonWidths = numberInputs.map(numberInput => parseFloat(getComputedStyle(getIncreaseButton(numberInput)).width));
    const iconHeights = numberInputs.map(numberInput => {
      const icon = getIncreaseButton(numberInput).querySelector('jb-icon-plus');
      if (!icon) throw new Error('Increase icon was not rendered');
      return parseFloat(getComputedStyle(icon).height);
    });
    expect(buttonWidths).toEqual([...buttonWidths].sort((a, b) => a - b));
    expect(iconHeights).toEqual([...iconHeights].sort((a, b) => a - b));
    expect(new Set(buttonWidths).size).toBe(5);
    expect(new Set(iconHeights).size).toBe(5);
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('');
    return <JBNumberInput label="Controlled value" value={value} onInput={event => setValue(event.target.value)} showControlButton />;
  },
  play: async ({
    canvasElement
  }) => {
    const numberInput = getNumberInput(canvasElement);
    const nativeInput = getNativeInput(numberInput);
    nativeInput.focus();
    for (const character of ['1', '2', '3']) {
      await userEvent.keyboard(character);
      await waitFor(() => {
        expect(nativeInput.getRootNode()).toHaveProperty('activeElement', nativeInput);
      });
    }
    expect(numberInput.value).toBe('123');
    expect(nativeInput.value).toBe('123');
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'show error',
    error: 'error message'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <JBInputNumberTest></JBInputNumberTest>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W=[`Normal`,`InitialValue`,`InitialValueDoesNotOverrideValue`,`ExplicitNullValueDoesNotFallBackToInitialValue`,`NumberWithComma`,`NumberWithMinMax`,`PrecisionAndInvalidReplacement`,`NonNegativeNumberWithUnderlineSeparator`,`NumberWithButtons`,`ControlButtonSizeVariants`,`ControlledTypingKeepsFocus`,`NumberWithPersianChar`,`WithError`,`numberTest`,`WithStartSection`,`WithEndSection`,`WithStartAndEndSection`]}));G();export{I as ControlButtonSizeVariants,L as ControlledTypingKeepsFocus,A as ExplicitNullValueDoesNotFallBackToInitialValue,O as InitialValue,k as InitialValueDoesNotOverrideValue,P as NonNegativeNumberWithUnderlineSeparator,D as Normal,F as NumberWithButtons,j as NumberWithComma,M as NumberWithMinMax,R as NumberWithPersianChar,N as PrecisionAndInvalidReplacement,H as WithEndSection,z as WithError,U as WithStartAndEndSection,V as WithStartSection,W as __namedExportsOrder,E as default,G as n,B as numberTest,y as t};