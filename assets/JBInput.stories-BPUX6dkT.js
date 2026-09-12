import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{q as r,t as i}from"./iframe-DlBehn5c.js";import{r as a,t as o}from"./react-cvegqbt7.js";import{i as s,t as c}from"./react-8MrKX504.js";var l=t((()=>{}));function u(e,t=0){let n=e.querySelectorAll(`jb-input`)[t];return h(n).toBeTruthy(),h(n.shadowRoot).toBeTruthy(),n}function d(e){let t=e.shadowRoot?.querySelector(`input`);return h(t).toBeTruthy(),t}function f(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}function p(e){let t=e.shadowRoot?.querySelector(`.control`);return h(t).toBeTruthy(),t}function m(e){let t=e.shadowRoot?.querySelector(`.clear-button`);return h(t).toBeTruthy(),t}var h,g=t((()=>{({expect:h}=__STORYBOOK_MODULE_TEST__)})),_=e({ClearButton:()=>D,CustomMobileKeyboard:()=>J,DirectValueProperties:()=>k,Disabled:()=>N,ExplicitNullValueDoesNotFallBackToInitialValue:()=>j,InitialValue:()=>A,LargeText:()=>H,Normal:()=>E,OnEnterTest:()=>V,PreventClear:()=>O,Required:()=>M,RequiredWithCustomMessage:()=>F,RequiredWithLabel:()=>P,SizeVariants:()=>R,StandardValueCallback:()=>B,ValidationList:()=>W,WithEndSection:()=>K,WithError:()=>I,WithPlaceholder:()=>L,WithStartAndEndSection:()=>q,WithStartSection:()=>G,__namedExportsOrder:()=>Y,default:()=>T,testActions:()=>z,testStyles:()=>U}),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X=t((()=>{v=n(r(),1),c(),o(),l(),g(),y=i(),{expect:b,fn:x,userEvent:S,waitFor:C,within:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/form elements/Inputs/JBInput`,component:s},E={args:{label:`label`,message:`static text under input show all the time`,placeholder:`placeholder`,disabled:!1}},D={args:{label:`Clearable input`,value:`Clear me`,clearable:!0,onBeforeInput:x(),onInput:x(),onChange:x(),onClick:x()},play:async({canvasElement:e,args:t})=>{let n=u(e),r=m(n),i=r.querySelector(`jb-icon-close`),a=[];b(i?.shadowRoot).toBeTruthy(),n.addEventListener(`beforeinput`,()=>a.push(`beforeinput:${n.value}`)),n.addEventListener(`input`,()=>a.push(`input:${n.value}`)),n.addEventListener(`change`,()=>a.push(`change:${n.value}`)),await C(()=>b(getComputedStyle(r).display).not.toBe(`none`)),await S.click(r),b(n.value).toBe(``),b(a).toEqual([`beforeinput:Clear me`,`input:`,`change:`]),b(t.onBeforeInput).toHaveBeenCalledOnce(),b(t.onInput).toHaveBeenCalledOnce(),b(t.onChange).toHaveBeenCalledOnce(),b(t.onClick).toHaveBeenCalledOnce(),b(n.shadowRoot?.querySelector(`.clear-button`)).toBe(r),b(r.hidden).toBe(!0),n.value=`Clear again`,await C(()=>b(r.hidden).toBe(!1)),b(n.shadowRoot?.querySelector(`.clear-button`)).toBe(r)}},O={args:{label:`Prevent clear`,value:`Keep me`,clearable:!0,onBeforeInput:e=>e.preventDefault(),onInput:x(),onChange:x()},play:async({canvasElement:e,args:t})=>{let n=u(e),r=m(n);await S.click(r),b(n.value).toBe(`Keep me`),b(t.onInput).not.toHaveBeenCalled(),b(t.onChange).not.toHaveBeenCalled(),b(getComputedStyle(r).display).not.toBe(`none`)}},k={args:{value:`current value`,initialValue:`initial value`},play:async({canvasElement:e})=>{let t=u(e),n=d(t);await C(()=>{b(t.value).toBe(`current value`),b(t.initialValue).toBe(`initial value`),b(n.value).toBe(`current value`),b(t.isDirty).toBe(!0),b(t.shadowRoot?.querySelector(`.clear-button`)).toBeNull()})}},A={render:e=>{let t=(0,v.useRef)(null);return(0,y.jsxs)(`form`,{ref:t,children:[(0,y.jsx)(s,{...e}),(0,y.jsx)(a,{onClick:()=>t.current?.reset(),children:`Reset`})]})},args:{label:`initial value`,initialValue:`initial value`},play:async({canvasElement:e})=>{let t=u(e),n=d(t),r=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`);b(r).toBeTruthy(),await C(()=>{b(t.value).toBe(`initial value`),b(t.initialValue).toBe(`initial value`),b(n.value).toBe(`initial value`),b(t.isDirty).toBe(!1)}),t.value=`changed value`,await C(()=>{b(t.value).toBe(`changed value`),b(t.isDirty).toBe(!0)}),t.initialValue=`reset value`,await C(()=>{b(t.initialValue).toBe(`reset value`),b(t.value).toBe(`changed value`),b(t.isDirty).toBe(!0)}),await S.click(r),await C(()=>{b(t.value).toBe(`reset value`),b(t.initialValue).toBe(t.value),b(n.value).toBe(`reset value`),b(t.isDirty).toBe(!1)}),t.value=`second changed value`,t.initialValue=`second reset value`,await C(()=>{b(t.initialValue).toBe(`second reset value`),b(t.value).toBe(`second changed value`),b(n.value).toBe(`second changed value`),b(t.isDirty).toBe(!0)}),await S.click(r),await C(()=>{b(t.value).toBe(`second reset value`),b(t.initialValue).toBe(t.value),b(n.value).toBe(`second reset value`),b(t.isDirty).toBe(!1)})}},j={args:{initialValue:`initial value`,value:null},play:async({canvasElement:e})=>{let t=u(e),n=d(t);await C(()=>{b(t.value).toBe(``),b(n.value).toBe(``),b(t.isDirty).toBe(!0)})}},M={args:{message:`focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear`,required:!0}},N={args:{label:`disabled input`,message:`static text under input show all the time`,value:`value`,disabled:!0},play:async({canvasElement:e})=>{let t=u(e),n=d(t),r=x();t.addEventListener(`input`,r),await C(()=>{b(t.disabled).toBe(!0),b(n.disabled).toBe(!0),b(n.value).toBe(`value`)}),t.focus(),await S.click(n),await S.type(n,` updated`),b(n.value).toBe(`value`),b(t.value).toBe(`value`),b(r).not.toHaveBeenCalled()}},P={args:{label:`name`,message:`focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear`,required:!0}},F={args:{label:`Required with custom message`,message:`focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear`,required:`you must fill this field to continue`},play:async({canvasElement:e,args:t})=>{let n=u(e);b(n.reportValidity()).toBe(!1),await C(()=>{b(f(n)).toBe(t.required),b(n.hasState(`invalid`)).toBe(!0)}),n.value=`filled`,b(n.reportValidity()).toBe(!0),await C(()=>{b(f(n)).toBe(t.message),b(n.hasState(`invalid`)).toBe(!1)})}},I={args:{label:`has error message`,message:`simple hint message`,error:`error message`,validationList:[{validator:/^.{3,}$/g,message:`you must enter at least 3 characters`}],type:`password`},play:async({canvasElement:e,args:t})=>{let n=u(e);await C(()=>{b(n.reportValidity()).toBe(!1),b(f(n)).toBe(t.error)}),n.value=`ab`,n.setAttribute(`error`,``),await C(()=>{b(n.reportValidity()).toBe(!1),b(f(n)).toBe(`you must enter at least 3 characters`),b(n.hasState(`invalid`)).toBe(!0)}),n.value=`abcd`,b(n.reportValidity()).toBe(!0),await C(()=>{b(f(n)).toBe(t.message),b(n.hasState(`invalid`)).toBe(!1)})}},L={args:{label:`with placeholder`,placeholder:`test placeholder`}},R={render:()=>(0,y.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`},children:[(0,y.jsx)(s,{label:`xl size`,message:`message underneath`,size:`xl`}),(0,y.jsx)(s,{label:`xl size`,placeholder:`placeholder`,size:`xl`}),(0,y.jsx)(s,{label:`xl size`,value:`Value 1234`,size:`xl`}),(0,y.jsx)(s,{label:`lg size`,message:`message underneath`,size:`lg`}),(0,y.jsx)(s,{label:`lg size`,placeholder:`placeholder`,size:`lg`}),(0,y.jsx)(s,{label:`lg size`,value:`Value 1234`,size:`lg`}),(0,y.jsx)(s,{label:`md size`,message:`message underneath`,size:`md`}),(0,y.jsx)(s,{label:`md size`,placeholder:`placeholder`,size:`md`}),(0,y.jsx)(s,{label:`md size`,value:`Value 1234`,size:`md`}),(0,y.jsx)(s,{label:`sm size`,message:`message underneath`,size:`sm`}),(0,y.jsx)(s,{label:`sm size`,placeholder:`placeholder`,size:`sm`}),(0,y.jsx)(s,{label:`sm size`,value:`Value 1234`,size:`sm`}),(0,y.jsx)(s,{label:`xs size`,message:`message underneath`,size:`xs`}),(0,y.jsx)(s,{label:`xs size`,placeholder:`placeholder`,size:`xs`}),(0,y.jsx)(s,{label:`xs size`,value:`Value 1234`,size:`xs`})]})},z={render:()=>{let e=(0,v.useRef)(null),[t,n]=(0,v.useState)(`09`);return(0,v.useEffect)(()=>{e.current?.focus()},[]),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(s,{ref:e,value:t,onKeyUp:e=>n(e.target.value),onKeyDown:e=>{console.log(e)},label:`type value`,message:`native input and JB Input value must be sync`}),(0,y.jsx)(`br`,{}),(0,y.jsx)(`span`,{children:`value:`}),(0,y.jsx)(`input`,{"data-testid":`mirror-input`,value:t,onChange:e=>n(e.target.value)})]})},play:async({canvasElement:e})=>{let t=u(e),n=d(t),r=w(e).getByTestId(`mirror-input`);await C(()=>{b(n.value).toBe(`09`),b(r.value).toBe(`09`)}),await S.click(r),await S.keyboard(`{Control>}a{/Control}{Backspace}`),await S.type(r,`12345`),await C(()=>{b(t.value).toBe(`12345`),b(n.value).toBe(`12345`)}),n.focus(),await S.keyboard(`{Control>}a{/Control}{Backspace}`),await S.type(n,`678`),await C(()=>{b(t.value).toBe(`678`),b(r.value).toBe(`678`)})}},B={render:()=>{let e=(0,v.useRef)(null);return(0,v.useEffect)(()=>{e.current?.addStandardValueCallback(e=>{let t=e.replace(/\D/g,``);return{value:t,displayValue:t}})},[]),(0,y.jsx)(s,{ref:e,label:`Digits only`,message:`The callback removes non-numeric characters while you type.`,placeholder:`Type letters and numbers`})},play:async({canvasElement:e})=>{let t=u(e),n=d(t);await S.type(n,`12ab3`),await C(()=>{b(t.value).toBe(`123`),b(t.displayValue).toBe(`123`),b(n.value).toBe(`123`)})}},V={args:{label:`enter test`,message:`Press Enter to see alert`,onEnter:x()},play:async({canvasElement:e,args:t})=>{let n=d(u(e));n.focus(),n.dispatchEvent(new KeyboardEvent(`keyup`,{key:`Enter`,keyCode:13,bubbles:!0,composed:!0})),await C(()=>{b(t.onEnter).toHaveBeenCalled()})}},H={args:{label:`large text to test what will happen if we set long text as an label to input`,message:`long message text to test what happen we we set long message as an message prop. you can also try responsiveness control to see what happen in mobile or tablet size`}},U={render:()=>(0,y.jsxs)(`div`,{className:`jb-input-styling-test`,children:[(0,y.jsx)(`h1`,{children:`JBInput different Styling test`}),(0,y.jsx)(`div`,{className:`cloudy-style`,children:(0,y.jsx)(s,{})}),(0,y.jsx)(`a`,{href:`https://github.com/javadbat/jb-input/blob/main/stories/styles/styles.css`,target:`_blank`,rel:`noopener`,children:`see css styles here`})]})},W={render:()=>{let e=[{validator:/^.{8,}$/g,message:`you must enter 8 char at least`}],t=[{validator:/.{8,}/g,message:`password must at least 8 char long`},{validator:/(?=.*?[0-9])/g,message:`password should include one number`},{validator:/(?=.*?[a-z])/g,message:`password must include one word`}],n=[{validator:/^[^\s@]+@[^\s@]+\.[^\s@]+$/g,message:`email is not valid`},{validator:({displayValue:e,value:t})=>t.includes(`yahoo`)?`you cant enter yahoo email9`:!0,message:`email must be gmail`},{validator:({displayValue:e,value:t})=>new Promise(e=>{setTimeout(()=>{t.includes(`outlook`)&&e(`you cant enter outlook email`),e(!0)},3e3)}),message:`outlook doesn't respond`,defer:!0}],r=[{validator:/^(\+98|0|0098)?9\d{9}$/g,message:`mobile number is not valid`}],i=(0,v.useRef)(null);function o(){i.current&&console.log(i.current.validation.result)}return(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,y.jsx)(s,{label:`input`,validationList:e}),(0,y.jsx)(s,{label:`email`,validationList:n,message:`enter outlook and see async validation result after 3sec`}),(0,y.jsx)(s,{label:`phone number`,validationList:r,message:`you can use jb-mobile-input for better experience`}),(0,y.jsx)(s,{ref:i,label:`password`,validationList:t}),(0,y.jsx)(a,{onClick:o,children:`log password validation(see console)`})]})},args:{},play:async({canvasElement:e})=>{let t=u(e),n=d(t);await S.type(n,`short`),n.blur(),await C(()=>{b(t.reportValidity()).toBe(!1),b(f(t)).toBe(`you must enter 8 char at least`),b(t.hasState(`invalid`)).toBe(!0)}),n.focus(),await S.keyboard(`{Control>}a{/Control}{Backspace}`),await S.type(n,`long-enough`),await C(()=>{b(t.reportValidity()).toBe(!0),b(t.hasState(`invalid`)).toBe(!1)})}},G={args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`,children:(0,y.jsx)(`div`,{slot:`inline-start`,style:{width:`1.5rem`,height:`1.5rem`,backgroundColor:`#262626`}})}},K={args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`,children:(0,y.jsx)(`div`,{slot:`inline-end`,style:{width:`1.5rem`,height:`1.5rem`,backgroundColor:`#262626`}})}},q={args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`,children:(0,y.jsxs)(v.Fragment,{children:[(0,y.jsx)(`div`,{slot:`inline-end`,style:{width:`1.5rem`,height:`1.5rem`,backgroundColor:`#262626`}}),(0,y.jsx)(`div`,{slot:`inline-start`,style:{width:`1.5rem`,height:`1.5rem`,backgroundColor:`#262626`}})]})}},J={args:{label:`number keyboard`,inputmode:`numeric`},play:async({canvasElement:e})=>{let t=u(e),n=d(t),r=p(t);await C(()=>{b(n.inputMode).toBe(`numeric`),b(r).toBeTruthy()})}},Y=[`Normal`,`ClearButton`,`PreventClear`,`DirectValueProperties`,`InitialValue`,`ExplicitNullValueDoesNotFallBackToInitialValue`,`Required`,`Disabled`,`RequiredWithLabel`,`RequiredWithCustomMessage`,`WithError`,`WithPlaceholder`,`SizeVariants`,`testActions`,`StandardValueCallback`,`OnEnterTest`,`LargeText`,`testStyles`,`ValidationList`,`WithStartSection`,`WithEndSection`,`WithStartAndEndSection`,`CustomMobileKeyboard`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'placeholder',
    disabled: false
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Clearable input',
    value: 'Clear me',
    clearable: true,
    onBeforeInput: fn(),
    onInput: fn(),
    onChange: fn(),
    onClick: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const input = getInput(canvasElement);
    const clearButton = getClearButton(input);
    const closeIcon = clearButton.querySelector('jb-icon-close');
    const eventOrder: string[] = [];
    expect(closeIcon?.shadowRoot).toBeTruthy();
    input.addEventListener('beforeinput', () => eventOrder.push(\`beforeinput:\${input.value}\`));
    input.addEventListener('input', () => eventOrder.push(\`input:\${input.value}\`));
    input.addEventListener('change', () => eventOrder.push(\`change:\${input.value}\`));
    await waitFor(() => expect(getComputedStyle(clearButton).display).not.toBe('none'));
    await userEvent.click(clearButton);
    expect(input.value).toBe('');
    expect(eventOrder).toEqual(['beforeinput:Clear me', 'input:', 'change:']);
    expect(args.onBeforeInput).toHaveBeenCalledOnce();
    expect(args.onInput).toHaveBeenCalledOnce();
    expect(args.onChange).toHaveBeenCalledOnce();
    expect(args.onClick).toHaveBeenCalledOnce();
    expect(input.shadowRoot?.querySelector('.clear-button')).toBe(clearButton);
    expect(clearButton.hidden).toBe(true);
    input.value = 'Clear again';
    await waitFor(() => expect(clearButton.hidden).toBe(false));
    expect(input.shadowRoot?.querySelector('.clear-button')).toBe(clearButton);
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Prevent clear',
    value: 'Keep me',
    clearable: true,
    onBeforeInput: event => event.preventDefault(),
    onInput: fn(),
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const input = getInput(canvasElement);
    const clearButton = getClearButton(input);
    await userEvent.click(clearButton);
    expect(input.value).toBe('Keep me');
    expect(args.onInput).not.toHaveBeenCalled();
    expect(args.onChange).not.toHaveBeenCalled();
    expect(getComputedStyle(clearButton).display).not.toBe('none');
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'current value',
    initialValue: 'initial value'
  },
  play: async ({
    canvasElement
  }) => {
    const input = getInput(canvasElement);
    const nativeInput = getNativeInput(input);
    await waitFor(() => {
      expect(input.value).toBe('current value');
      expect(input.initialValue).toBe('initial value');
      expect(nativeInput.value).toBe('current value');
      expect(input.isDirty).toBe(true);
      expect(input.shadowRoot?.querySelector('.clear-button')).toBeNull();
    });
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBInput {...args} />
        <JBButton onClick={() => formRef.current?.reset()}>Reset</JBButton>
      </form>;
  },
  args: {
    label: 'initial value',
    initialValue: 'initial value'
  },
  play: async ({
    canvasElement
  }) => {
    const input = getInput(canvasElement);
    const nativeInput = getNativeInput(input);
    const resetButton = canvasElement.querySelector('jb-button')?.shadowRoot?.querySelector<HTMLButtonElement>('button');
    expect(resetButton).toBeTruthy();
    await waitFor(() => {
      expect(input.value).toBe('initial value');
      expect(input.initialValue).toBe('initial value');
      expect(nativeInput.value).toBe('initial value');
      expect(input.isDirty).toBe(false);
    });

    // Use the public setter because this story verifies live-value precedence;
    // keyboard editing behavior is covered by the dedicated interaction stories.
    input.value = 'changed value';
    await waitFor(() => {
      expect(input.value).toBe('changed value');
      expect(input.isDirty).toBe(true);
    });
    input.initialValue = 'reset value';
    await waitFor(() => {
      expect(input.initialValue).toBe('reset value');
      expect(input.value).toBe('changed value');
      expect(input.isDirty).toBe(true);
    });
    await userEvent.click(resetButton!);
    await waitFor(() => {
      expect(input.value).toBe('reset value');
      expect(input.initialValue).toBe(input.value);
      expect(nativeInput.value).toBe('reset value');
      expect(input.isDirty).toBe(false);
    });
    input.value = 'second changed value';
    input.initialValue = 'second reset value';
    await waitFor(() => {
      expect(input.initialValue).toBe('second reset value');
      expect(input.value).toBe('second changed value');
      expect(nativeInput.value).toBe('second changed value');
      expect(input.isDirty).toBe(true);
    });
    await userEvent.click(resetButton!);
    await waitFor(() => {
      expect(input.value).toBe('second reset value');
      expect(input.initialValue).toBe(input.value);
      expect(nativeInput.value).toBe('second reset value');
      expect(input.isDirty).toBe(false);
    });
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: 'initial value',
    value: null
  },
  play: async ({
    canvasElement
  }) => {
    const input = getInput(canvasElement);
    const nativeInput = getNativeInput(input);
    await waitFor(() => {
      expect(input.value).toBe('');
      expect(nativeInput.value).toBe('');
      expect(input.isDirty).toBe(true);
    });
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'disabled input',
    message: 'static text under input show all the time',
    value: 'value',
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const input = getInput(canvasElement);
    const nativeInput = getNativeInput(input);
    const onInput = fn();
    input.addEventListener('input', onInput);
    await waitFor(() => {
      expect(input.disabled).toBe(true);
      expect(nativeInput.disabled).toBe(true);
      expect(nativeInput.value).toBe('value');
    });
    input.focus();
    await userEvent.click(nativeInput);
    await userEvent.type(nativeInput, ' updated');
    expect(nativeInput.value).toBe('value');
    expect(input.value).toBe('value');
    expect(onInput).not.toHaveBeenCalled();
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: "name",
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Required with custom message",
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: "you must fill this field to continue"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const input = getInput(canvasElement);
    expect(input.reportValidity()).toBe(false);
    await waitFor(() => {
      expect(getMessageText(input)).toBe(args.required);
      expect(input.hasState('invalid')).toBe(true);
    });
    input.value = 'filled';
    expect(input.reportValidity()).toBe(true);
    await waitFor(() => {
      expect(getMessageText(input)).toBe(args.message);
      expect(input.hasState('invalid')).toBe(false);
    });
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'has error message',
    message: 'simple hint message',
    error: 'error message',
    validationList: [{
      validator: /^.{3,}$/g,
      message: 'you must enter at least 3 characters'
    }],
    type: 'password'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const input = getInput(canvasElement);
    await waitFor(() => {
      expect(input.reportValidity()).toBe(false);
      expect(getMessageText(input)).toBe(args.error);
    });
    input.value = 'ab';
    input.setAttribute('error', '');
    await waitFor(() => {
      expect(input.reportValidity()).toBe(false);
      expect(getMessageText(input)).toBe('you must enter at least 3 characters');
      expect(input.hasState('invalid')).toBe(true);
    });
    input.value = 'abcd';
    expect(input.reportValidity()).toBe(true);
    await waitFor(() => {
      expect(getMessageText(input)).toBe(args.message);
      expect(input.hasState('invalid')).toBe(false);
    });
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with placeholder',
    placeholder: 'test placeholder'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1rem'
    }}>
      <JBInput label='xl size' message="message underneath" size='xl'></JBInput>
      <JBInput label='xl size' placeholder="placeholder" size='xl'></JBInput>
      <JBInput label='xl size' value="Value 1234" size='xl'></JBInput>

      <JBInput label='lg size' message="message underneath" size='lg'></JBInput>
      <JBInput label='lg size' placeholder="placeholder" size='lg'></JBInput>
      <JBInput label='lg size' value="Value 1234" size='lg'></JBInput>

      <JBInput label='md size' message="message underneath" size='md'></JBInput>
      <JBInput label='md size' placeholder="placeholder" size='md'></JBInput>
      <JBInput label='md size' value="Value 1234" size='md'></JBInput>

      <JBInput label='sm size' message="message underneath" size='sm'></JBInput>
      <JBInput label='sm size' placeholder="placeholder" size='sm'></JBInput>
      <JBInput label='sm size' value="Value 1234" size='sm'></JBInput>

      <JBInput label='xs size' message="message underneath" size='xs'></JBInput>
      <JBInput label='xs size' placeholder="placeholder" size='xs'></JBInput>
      <JBInput label='xs size' value="Value 1234" size='xs'></JBInput>
    </div>;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const input = useRef<JBInputWebComponent>(null);
    const [value, setValue] = useState('09');
    useEffect(() => {
      input.current?.focus();
    }, []);
    return <div>
        <JBInput ref={input} value={value} onKeyUp={e => setValue(e.target.value)} onKeyDown={e => {
        console.log(e);
      }} label="type value" message='native input and JB Input value must be sync'></JBInput>
        <br />
        <span>value:</span>
        <input data-testid="mirror-input" value={value} onChange={e => setValue(e.target.value)} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const input = getInput(canvasElement);
    const nativeInput = getNativeInput(input);
    const mirrorInput = within(canvasElement).getByTestId('mirror-input') as HTMLInputElement;
    await waitFor(() => {
      expect(nativeInput.value).toBe('09');
      expect(mirrorInput.value).toBe('09');
    });
    await userEvent.click(mirrorInput);
    await userEvent.keyboard('{Control>}a{/Control}{Backspace}');
    await userEvent.type(mirrorInput, '12345');
    await waitFor(() => {
      expect(input.value).toBe('12345');
      expect(nativeInput.value).toBe('12345');
    });
    nativeInput.focus();
    await userEvent.keyboard('{Control>}a{/Control}{Backspace}');
    await userEvent.type(nativeInput, '678');
    await waitFor(() => {
      expect(input.value).toBe('678');
      expect(mirrorInput.value).toBe('678');
    });
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const input = useRef<JBInputWebComponent>(null);
    useEffect(() => {
      input.current?.addStandardValueCallback(inputtedString => {
        const digitsOnly = inputtedString.replace(/\\D/g, '');
        return {
          value: digitsOnly,
          displayValue: digitsOnly
        };
      });
    }, []);
    return <JBInput ref={input} label="Digits only" message="The callback removes non-numeric characters while you type." placeholder="Type letters and numbers" />;
  },
  play: async ({
    canvasElement
  }) => {
    const input = getInput(canvasElement);
    const nativeInput = getNativeInput(input);
    await userEvent.type(nativeInput, '12ab3');
    await waitFor(() => {
      expect(input.value).toBe('123');
      expect(input.displayValue).toBe('123');
      expect(nativeInput.value).toBe('123');
    });
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: "enter test",
    message: 'Press Enter to see alert',
    onEnter: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const input = getInput(canvasElement);
    const nativeInput = getNativeInput(input);
    nativeInput.focus();
    nativeInput.dispatchEvent(new KeyboardEvent('keyup', {
      key: 'Enter',
      keyCode: 13,
      bubbles: true,
      composed: true
    }));
    await waitFor(() => {
      expect(args.onEnter).toHaveBeenCalled();
    });
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'large text to test what will happen if we set long text as an label to input',
    message: 'long message text to test what happen we we set long message as an message prop. you can also try responsiveness control to see what happen in mobile or tablet size'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div className="jb-input-styling-test">
      <h1>JBInput different Styling test</h1>
      <div className="cloudy-style">
        <JBInput />
      </div>
      <a href='https://github.com/javadbat/jb-input/blob/main/stories/styles/styles.css' target='_blank' rel="noopener">see css styles here</a>
    </div>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const inputValidation: ValidationItem<ValidationValue>[] = [{
      validator: /^.{8,}$/g,
      message: 'you must enter 8 char at least'
    }];
    const passwordValidation = [{
      validator: /.{8,}/g,
      message: 'password must at least 8 char long'
    }, {
      validator: /(?=.*?[0-9])/g,
      message: 'password should include one number'
    }, {
      validator: /(?=.*?[a-z])/g,
      message: 'password must include one word'
    }];
    const emailValidation: ValidationItem<ValidationValue>[] = [{
      validator: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/g,
      message: 'email is not valid'
    }, {
      validator: ({
        displayValue: _,
        value
      }) => {
        if (value.includes('yahoo')) {
          return 'you cant enter yahoo email9';
        }
        return true;
      },
      message: "email must be gmail"
    }, {
      validator: ({
        displayValue: _,
        value
      }) => {
        return new Promise(resolve => {
          setTimeout(() => {
            if (value.includes('outlook')) {
              resolve('you cant enter outlook email');
            }
            resolve(true);
          }, 3000);
        });
      },
      message: "outlook doesn't respond",
      defer: true
    }];
    const mobileValidation: ValidationItem<ValidationValue>[] = [{
      validator: /^(\\+98|0|0098)?9\\d{9}$/g,
      message: 'mobile number is not valid'
    }];
    const passwordInputDom = useRef<JBInputWebComponent>(null);
    function onButtonClicked() {
      if (passwordInputDom.current) {
        console.log(passwordInputDom.current.validation.result);
      }
    }
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
        <JBInput label='input' validationList={inputValidation}></JBInput>
        <JBInput label='email' validationList={emailValidation} message="enter outlook and see async validation result after 3sec"></JBInput>
        <JBInput label='phone number' validationList={mobileValidation} message='you can use jb-mobile-input for better experience'></JBInput>
        <JBInput ref={passwordInputDom} label='password' validationList={passwordValidation}></JBInput>
        <JBButton onClick={onButtonClicked}>log password validation(see console)</JBButton>
      </div>;
  },
  args: {},
  play: async ({
    canvasElement
  }) => {
    const input = getInput(canvasElement);
    const nativeInput = getNativeInput(input);
    await userEvent.type(nativeInput, 'short');
    nativeInput.blur();
    await waitFor(() => {
      expect(input.reportValidity()).toBe(false);
      expect(getMessageText(input)).toBe('you must enter 8 char at least');
      expect(input.hasState('invalid')).toBe(true);
    });
    nativeInput.focus();
    await userEvent.keyboard('{Control>}a{/Control}{Backspace}');
    await userEvent.type(nativeInput, 'long-enough');
    await waitFor(() => {
      expect(input.reportValidity()).toBe(true);
      expect(input.hasState('invalid')).toBe(false);
    });
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    children: <div slot="inline-start" style={{
      width: '1.5rem',
      height: '1.5rem',
      backgroundColor: '#262626'
    }}></div>
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    children: <div slot="inline-end" style={{
      width: '1.5rem',
      height: '1.5rem',
      backgroundColor: '#262626'
    }}></div>
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    children: <Fragment>
        <div slot="inline-end" style={{
        width: '1.5rem',
        height: '1.5rem',
        backgroundColor: '#262626'
      }}></div>
        <div slot="inline-start" style={{
        width: '1.5rem',
        height: '1.5rem',
        backgroundColor: '#262626'
      }}></div>
      </Fragment>
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    'label': 'number keyboard',
    'inputmode': 'numeric'
  },
  play: async ({
    canvasElement
  }) => {
    const input = getInput(canvasElement);
    const nativeInput = getNativeInput(input);
    const inputBox = getInputBox(input);
    await waitFor(() => {
      expect(nativeInput.inputMode).toBe('numeric');
      expect(inputBox).toBeTruthy();
    });
  }
}`,...J.parameters?.docs?.source}}}}));X();export{D as ClearButton,J as CustomMobileKeyboard,k as DirectValueProperties,N as Disabled,j as ExplicitNullValueDoesNotFallBackToInitialValue,A as InitialValue,H as LargeText,E as Normal,V as OnEnterTest,O as PreventClear,M as Required,F as RequiredWithCustomMessage,P as RequiredWithLabel,R as SizeVariants,B as StandardValueCallback,W as ValidationList,K as WithEndSection,I as WithError,L as WithPlaceholder,q as WithStartAndEndSection,G as WithStartSection,Y as __namedExportsOrder,T as default,X as n,_ as t,z as testActions,U as testStyles};