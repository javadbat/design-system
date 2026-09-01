import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-DIBpeuX4.js";import{r as a,t as o}from"./react-Cxlx6W1K.js";import{n as s,t as c}from"./react-SYpm_zXA.js";var l=t((()=>{}));function u(e,t=0){let n=e.querySelectorAll(`jb-textarea`)[t];return _(n).toBeTruthy(),_(n.shadowRoot).toBeTruthy(),n}function d(e){let t=e.shadowRoot?.querySelector(`textarea`);return _(t).toBeTruthy(),t}function f(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}function p(e){return e.shadowRoot?.querySelector(`.label-value`)?.textContent??``}function m(e,t){let n=e.shadowRoot?.querySelector(t);return _(n).toBeTruthy(),n}async function h(e,t){await v(()=>{_(e.value).toBe(t),_(d(e).value).toBe(t)})}async function g(e){let t=[],n=document.createElement(`jb-textarea`);n.setAttribute(`required`,``),n.setAttribute(`label`,`event textarea`);for(let e of[`beforeinput`,`input`,`keydown`,`keypress`,`keyup`,`enter`,`change`,`invalid`])n.addEventListener(e,()=>t.push(e));return e.appendChild(n),await v(()=>{_(d(n)).toBeTruthy()}),{textarea:n,events:t}}var _,v,y=t((()=>{({expect:_,waitFor:v}=__STORYBOOK_MODULE_TEST__)})),b=e({ActionTest:()=>L,BlockEnd:()=>V,BlockStart:()=>B,Disabled:()=>F,DisabledWithValue:()=>I,EventTest:()=>U,ExplicitNullValueDoesNotFallBackToInitialValue:()=>A,InitialValue:()=>O,InitialValueDoesNotOverrideValue:()=>k,InlineEnd:()=>z,InlineStart:()=>R,Normal:()=>D,OnEnterTest:()=>P,RTL:()=>H,Required:()=>j,WithError:()=>M,WithValidation:()=>N,__namedExportsOrder:()=>W,default:()=>E}),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G=t((()=>{x=n(r(),1),c(),o(),l(),y(),S=i(),{expect:C,userEvent:w,waitFor:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/form elements/JBTextarea`,component:s},D={args:{label:`text`,placeholder:`please type here`},play:async({canvasElement:e,args:t})=>{let n=u(e),r=d(n);await T(()=>{C(p(n)).toBe(t.label),C(r.placeholder).toBe(t.placeholder)}),await w.type(r,`hello textarea`),await h(n,`hello textarea`)}},O={render:e=>{let t=x.useRef(null);return(0,S.jsxs)(`form`,{ref:t,children:[(0,S.jsx)(s,{...e}),(0,S.jsx)(a,{onClick:()=>t.current?.reset(),children:`Reset`})]})},args:{label:`initial value`,initialValue:`initial value`},play:async({canvasElement:e,args:t})=>{let n=u(e),r=d(n),i=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`);C(i).toBeTruthy(),await T(()=>{C(n.initialValue).toBe(t.initialValue),C(n.value).toBe(t.initialValue),C(r.value).toBe(t.initialValue),C(n.isDirty).toBe(!1)}),n.value=`changed value`,await T(()=>{C(n.value).toBe(`changed value`),C(r.value).toBe(`changed value`),C(n.isDirty).toBe(!0)}),n.initialValue=`reset value`,await T(()=>{C(n.initialValue).toBe(`reset value`),C(n.value).toBe(`changed value`),C(r.value).toBe(`changed value`),C(n.isDirty).toBe(!0)}),await w.click(i),await T(()=>{C(n.value).toBe(`reset value`),C(n.initialValue).toBe(n.value),C(r.value).toBe(`reset value`),C(n.isDirty).toBe(!1)})}},k={args:{initialValue:`initial value`,value:`current value`},play:async({canvasElement:e})=>{let t=u(e),n=d(t);await T(()=>{C(t.initialValue).toBe(`initial value`),C(t.value).toBe(`current value`),C(n.value).toBe(`current value`),C(t.isDirty).toBe(!0)})}},A={args:{initialValue:`initial value`,value:null},play:async({canvasElement:e})=>{let t=u(e),n=d(t);await T(()=>{C(t.initialValue).toBe(`initial value`),C(t.value).toBe(``),C(n.value).toBe(``),C(t.isDirty).toBe(!0)})}},j={args:{label:`required text`,message:`focus and unfocus to textarea to see the error`,required:!0},play:async({canvasElement:e,args:t})=>{let n=u(e);await T(()=>{C(n.required).toBe(!0),C(f(n)).toBe(t.message),C(n.reportValidity()).toBe(!1),C(f(n).length).toBeGreaterThan(0)})}},M={args:{label:`with error`,message:`message under textarea`,error:`error message`},play:async({canvasElement:e,args:t})=>{let n=u(e);await T(()=>{C(n.reportValidity()).toBe(!1),C(f(n)).toBe(t.error),C(n.validationMessage).toBe(t.error)})}},N={args:{label:`validation`,placeholder:`10 char, and no f char`,validationList:[{validator:/.{10}/g,message:`you must enter 10 char at least`},{validator:e=>!e.includes(`f`),message:`you cant enter f char`}]},play:async({canvasElement:e})=>{let t=u(e);t.value=`abc`,C(t.reportValidity()).toBe(!1),await T(()=>{C(f(t)).toBe(`you must enter 10 char at least`)}),t.value=`abcdefghij`,C(t.reportValidity()).toBe(!1),await T(()=>{C(f(t)).toBe(`you cant enter f char`)}),t.value=`abcdeghijk`,C(t.reportValidity()).toBe(!0),await T(()=>{C(f(t)).toBe(``)})}},P={args:{label:`text`,placeholder:`please hit enter with shift key and without shift key`,onEnter:e=>{alert(`shift key:`+(e.shiftKey?`true`:`false`))}}},F={args:{label:`disabled`,placeholder:`this textarea is disabled`,disabled:!0},play:async({canvasElement:e})=>{let t=u(e),n=d(t);await T(()=>{C(t.disabled).toBe(!0),C(n.disabled).toBe(!0)})}},I={args:{label:`disabled`,value:`here is the textarea value`,disabled:!0},play:async({canvasElement:e,args:t})=>{let n=u(e);await T(()=>{C(n.disabled).toBe(!0),C(n.value).toBe(t.value),C(d(n).value).toBe(t.value)})}},L={render:e=>{let[t,n]=(0,x.useState)(``),[r,i]=(0,x.useState)(``);function a(e){e.preventDefault()}return(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h2`,{children:`test grow ability`}),(0,S.jsx)(s,{value:r,onChange:e=>{i(e.target.value)},label:`type to grow`,autoHeight:!0}),(0,S.jsx)(`button`,{onClick:()=>{i(``)},children:`clean`}),(0,S.jsx)(`button`,{onClick:()=>{i(`sss eeee ggggg`.repeat(200))},children:`longText`}),(0,S.jsx)(`h3`,{children:`grow with min and max height`}),(0,S.jsx)(`div`,{className:`grow-with-custom-limit`,children:(0,S.jsx)(s,{label:`48 to 120`,autoHeight:!0})}),(0,S.jsx)(`h3`,{children:`test value binding to state`}),(0,S.jsx)(s,{value:t,onChange:e=>{n(e.target.value)},label:`see the bottom`}),(0,S.jsx)(`p`,{children:t}),(0,S.jsx)(`h3`,{children:`test events (check console log)`}),(0,S.jsx)(s,{onKeyDown:a,onFocus:e=>{console.log(e)},onBlur:e=>{console.log(e)},label:`see value after `})]})},args:{label:`text`,placeholder:`please type here`},play:async({canvasElement:e})=>{let t=u(e),n=d(t);await T(()=>{C(t.autoHeight).toBe(!0)});let r=n.style.height;t.value=`long text `.repeat(100),await T(()=>{C(n.style.height).not.toBe(r)})}},R={render:e=>(0,S.jsx)(s,{...e,children:(0,S.jsx)(`div`,{style:{width:`100%`,height:`100%`,backgroundColor:`red`},slot:`inline-start-section`})}),args:{label:`text`,placeholder:`please type here`},play:async({canvasElement:e})=>{C(m(u(e),`.inline-start-section-wrapper`).querySelector(`slot`)?.name).toBe(`inline-start-section`)}},z={render:e=>(0,S.jsx)(s,{...e,children:(0,S.jsx)(`div`,{style:{width:`100%`,height:`100%`,backgroundColor:`red`},slot:`inline-end-section`})}),args:{label:`text`,placeholder:`please type here`},play:async({canvasElement:e})=>{C(m(u(e),`.inline-end-section-wrapper`).querySelector(`slot`)?.name).toBe(`inline-end-section`)}},B={render:e=>(0,S.jsx)(s,{...e,children:(0,S.jsx)(`div`,{style:{width:`100%`,height:`2rem`,backgroundColor:`red`},slot:`block-start-section`})}),args:{label:`text`,placeholder:`please type here`},play:async({canvasElement:e})=>{C(m(u(e),`.block-start-section-wrapper`).querySelector(`slot`)?.name).toBe(`block-start-section`)}},V={render:e=>(0,S.jsx)(s,{...e,children:(0,S.jsx)(`div`,{style:{width:`100%`,height:`2rem`,backgroundColor:`red`},slot:`block-end-section`})}),args:{label:`text`,placeholder:`please type here`},play:async({canvasElement:e})=>{C(m(u(e),`.block-end-section-wrapper`).querySelector(`slot`)?.name).toBe(`block-end-section`)}},H={args:{label:`متن`,placeholder:`لطفا وارد کنید`},parameters:{themes:{themeOverride:`rtl`}},play:async({canvasElement:e,args:t})=>{let n=u(e);await T(()=>{C(p(n)).toBe(t.label),C(d(n).placeholder).toBe(t.placeholder)})}},U={render:()=>(0,S.jsx)(s,{label:`event test`,required:!0}),play:async({canvasElement:e})=>{let{textarea:t,events:n}=await g(e),r=d(t);C(t.reportValidity()).toBe(!1),r.dispatchEvent(new InputEvent(`beforeinput`,{data:`a`,inputType:`insertText`,bubbles:!0,cancelable:!0,composed:!0})),r.value=`a`,r.dispatchEvent(new InputEvent(`input`,{data:`a`,inputType:`insertText`,bubbles:!0,composed:!0})),r.dispatchEvent(new KeyboardEvent(`keydown`,{key:`Enter`,bubbles:!0,cancelable:!0})),r.dispatchEvent(new KeyboardEvent(`keypress`,{key:`Enter`,bubbles:!0,cancelable:!0})),r.dispatchEvent(new KeyboardEvent(`keyup`,{key:`Enter`,bubbles:!0,cancelable:!0})),r.dispatchEvent(new Event(`change`,{bubbles:!0,cancelable:!0})),await T(()=>{C(t.value).toBe(`a`),C(n).toEqual(C.arrayContaining([`invalid`,`beforeinput`,`input`,`keydown`,`keypress`,`enter`,`keyup`,`change`]))})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'text',
    placeholder: 'please type here'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const textarea = getTextarea(canvasElement);
    const nativeTextarea = getNativeTextarea(textarea);
    await waitFor(() => {
      expect(getLabelText(textarea)).toBe(args.label);
      expect(nativeTextarea.placeholder).toBe(args.placeholder);
    });
    await userEvent.type(nativeTextarea, 'hello textarea');
    await waitForTextareaValue(textarea, 'hello textarea');
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = React.useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBTextarea {...args} />
        <JBButton onClick={() => formRef.current?.reset()}>Reset</JBButton>
      </form>;
  },
  args: {
    label: 'initial value',
    initialValue: 'initial value'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const textarea = getTextarea(canvasElement);
    const nativeTextarea = getNativeTextarea(textarea);
    const resetButton = canvasElement.querySelector('jb-button')?.shadowRoot?.querySelector<HTMLButtonElement>('button');
    expect(resetButton).toBeTruthy();
    await waitFor(() => {
      expect(textarea.initialValue).toBe(args.initialValue);
      expect(textarea.value).toBe(args.initialValue);
      expect(nativeTextarea.value).toBe(args.initialValue);
      expect(textarea.isDirty).toBe(false);
    });

    // This story targets live-value precedence and form reset. Keyboard editing
    // remains covered by the textarea's dedicated interaction stories.
    textarea.value = 'changed value';
    await waitFor(() => {
      expect(textarea.value).toBe('changed value');
      expect(nativeTextarea.value).toBe('changed value');
      expect(textarea.isDirty).toBe(true);
    });
    textarea.initialValue = 'reset value';
    await waitFor(() => {
      expect(textarea.initialValue).toBe('reset value');
      expect(textarea.value).toBe('changed value');
      expect(nativeTextarea.value).toBe('changed value');
      expect(textarea.isDirty).toBe(true);
    });
    await userEvent.click(resetButton!);
    await waitFor(() => {
      expect(textarea.value).toBe('reset value');
      expect(textarea.initialValue).toBe(textarea.value);
      expect(nativeTextarea.value).toBe('reset value');
      expect(textarea.isDirty).toBe(false);
    });
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: 'initial value',
    value: 'current value'
  },
  play: async ({
    canvasElement
  }) => {
    const textarea = getTextarea(canvasElement);
    const nativeTextarea = getNativeTextarea(textarea);
    await waitFor(() => {
      expect(textarea.initialValue).toBe('initial value');
      expect(textarea.value).toBe('current value');
      expect(nativeTextarea.value).toBe('current value');
      expect(textarea.isDirty).toBe(true);
    });
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: 'initial value',
    value: null
  },
  play: async ({
    canvasElement
  }) => {
    const textarea = getTextarea(canvasElement);
    const nativeTextarea = getNativeTextarea(textarea);
    await waitFor(() => {
      expect(textarea.initialValue).toBe('initial value');
      expect(textarea.value).toBe('');
      expect(nativeTextarea.value).toBe('');
      expect(textarea.isDirty).toBe(true);
    });
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'required text',
    message: 'focus and unfocus to textarea to see the error',
    required: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const textarea = getTextarea(canvasElement);
    await waitFor(() => {
      expect(textarea.required).toBe(true);
      expect(getMessageText(textarea)).toBe(args.message);
      expect(textarea.reportValidity()).toBe(false);
      expect(getMessageText(textarea).length).toBeGreaterThan(0);
    });
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: 'message under textarea',
    error: 'error message'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const textarea = getTextarea(canvasElement);
    await waitFor(() => {
      expect(textarea.reportValidity()).toBe(false);
      expect(getMessageText(textarea)).toBe(args.error);
      expect(textarea.validationMessage).toBe(args.error);
    });
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'validation',
    placeholder: '10 char, and no f char',
    validationList: [{
      validator: /.{10}/g,
      message: "you must enter 10 char at least"
    }, {
      validator: value => {
        if (value.includes("f")) {
          return false;
        }
        return true;
      },
      message: "you cant enter f char"
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const textarea = getTextarea(canvasElement);
    textarea.value = 'abc';
    expect(textarea.reportValidity()).toBe(false);
    await waitFor(() => {
      expect(getMessageText(textarea)).toBe('you must enter 10 char at least');
    });
    textarea.value = 'abcdefghij';
    expect(textarea.reportValidity()).toBe(false);
    await waitFor(() => {
      expect(getMessageText(textarea)).toBe('you cant enter f char');
    });
    textarea.value = 'abcdeghijk';
    expect(textarea.reportValidity()).toBe(true);
    await waitFor(() => {
      expect(getMessageText(textarea)).toBe('');
    });
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'text',
    placeholder: 'please hit enter with shift key and without shift key',
    onEnter: e => {
      alert("shift key:" + (e.shiftKey ? 'true' : 'false'));
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'disabled',
    placeholder: 'this textarea is disabled',
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const textarea = getTextarea(canvasElement);
    const nativeTextarea = getNativeTextarea(textarea);
    await waitFor(() => {
      expect(textarea.disabled).toBe(true);
      expect(nativeTextarea.disabled).toBe(true);
    });
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'disabled',
    value: 'here is the textarea value',
    disabled: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const textarea = getTextarea(canvasElement);
    await waitFor(() => {
      expect(textarea.disabled).toBe(true);
      expect(textarea.value).toBe(args.value);
      expect(getNativeTextarea(textarea).value).toBe(args.value);
    });
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [textVal, textValSetter] = useState('');
    const [autoGrowTextVal, autoGrowTextValSetter] = useState('');
    function onTextAreaKeydown(e) {
      e.preventDefault();
    }
    return <div>
      <h2>test grow ability</h2>
      <JBTextarea value={autoGrowTextVal} onChange={e => {
        autoGrowTextValSetter(e.target.value);
      }} label="type to grow" autoHeight={true}></JBTextarea>
      <button onClick={() => {
        autoGrowTextValSetter('');
      }}>clean</button>
      <button onClick={() => {
        autoGrowTextValSetter('sss eeee ggggg'.repeat(200));
      }}>longText</button>
      <h3>grow with min and max height</h3>
      <div className="grow-with-custom-limit">
        <JBTextarea label="48 to 120" autoHeight={true}></JBTextarea>
      </div>
      <h3>test value binding to state</h3>
      <JBTextarea value={textVal} onChange={e => {
        textValSetter(e.target.value);
      }} label="see the bottom"></JBTextarea>
      <p>{textVal}</p>
      <h3>test events (check console log)</h3>
      <JBTextarea onKeyDown={onTextAreaKeydown} onFocus={e => {
        console.log(e);
      }} onBlur={e => {
        console.log(e);
      }} label="see value after "></JBTextarea>
    </div>;
  },
  args: {
    label: 'text',
    placeholder: 'please type here'
  },
  play: async ({
    canvasElement
  }) => {
    const textarea = getTextarea(canvasElement);
    const nativeTextarea = getNativeTextarea(textarea);
    await waitFor(() => {
      expect(textarea.autoHeight).toBe(true);
    });
    const initialHeight = nativeTextarea.style.height;
    textarea.value = 'long text '.repeat(100);
    await waitFor(() => {
      expect(nativeTextarea.style.height).not.toBe(initialHeight);
    });
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => <JBTextarea {...args}>
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'red'
    }} slot="inline-start-section"></div>
  </JBTextarea>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  },
  play: async ({
    canvasElement
  }) => {
    const textarea = getTextarea(canvasElement);
    expect(getSlotWrapper(textarea, '.inline-start-section-wrapper').querySelector('slot')?.name).toBe('inline-start-section');
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <JBTextarea {...args}>
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'red'
    }} slot="inline-end-section"></div>
  </JBTextarea>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  },
  play: async ({
    canvasElement
  }) => {
    const textarea = getTextarea(canvasElement);
    expect(getSlotWrapper(textarea, '.inline-end-section-wrapper').querySelector('slot')?.name).toBe('inline-end-section');
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <JBTextarea {...args}>
    <div style={{
      width: '100%',
      height: '2rem',
      backgroundColor: 'red'
    }} slot="block-start-section"></div>
  </JBTextarea>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  },
  play: async ({
    canvasElement
  }) => {
    const textarea = getTextarea(canvasElement);
    expect(getSlotWrapper(textarea, '.block-start-section-wrapper').querySelector('slot')?.name).toBe('block-start-section');
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <JBTextarea {...args}>
    <div style={{
      width: '100%',
      height: '2rem',
      backgroundColor: 'red'
    }} slot="block-end-section"></div>
  </JBTextarea>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  },
  play: async ({
    canvasElement
  }) => {
    const textarea = getTextarea(canvasElement);
    expect(getSlotWrapper(textarea, '.block-end-section-wrapper').querySelector('slot')?.name).toBe('block-end-section');
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'متن',
    placeholder: 'لطفا وارد کنید'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const textarea = getTextarea(canvasElement);
    await waitFor(() => {
      expect(getLabelText(textarea)).toBe(args.label);
      expect(getNativeTextarea(textarea).placeholder).toBe(args.placeholder);
    });
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <JBTextarea label="event test" required />,
  play: async ({
    canvasElement
  }) => {
    const {
      textarea,
      events
    } = await appendEventTextarea(canvasElement);
    const nativeTextarea = getNativeTextarea(textarea);
    expect(textarea.reportValidity()).toBe(false);
    nativeTextarea.dispatchEvent(new InputEvent('beforeinput', {
      data: 'a',
      inputType: 'insertText',
      bubbles: true,
      cancelable: true,
      composed: true
    }));
    nativeTextarea.value = 'a';
    nativeTextarea.dispatchEvent(new InputEvent('input', {
      data: 'a',
      inputType: 'insertText',
      bubbles: true,
      composed: true
    }));
    nativeTextarea.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
      cancelable: true
    }));
    nativeTextarea.dispatchEvent(new KeyboardEvent('keypress', {
      key: 'Enter',
      bubbles: true,
      cancelable: true
    }));
    nativeTextarea.dispatchEvent(new KeyboardEvent('keyup', {
      key: 'Enter',
      bubbles: true,
      cancelable: true
    }));
    nativeTextarea.dispatchEvent(new Event('change', {
      bubbles: true,
      cancelable: true
    }));
    await waitFor(() => {
      expect(textarea.value).toBe('a');
      expect(events).toEqual(expect.arrayContaining(['invalid', 'beforeinput', 'input', 'keydown', 'keypress', 'enter', 'keyup', 'change']));
    });
  }
}`,...U.parameters?.docs?.source}}},W=[`Normal`,`InitialValue`,`InitialValueDoesNotOverrideValue`,`ExplicitNullValueDoesNotFallBackToInitialValue`,`Required`,`WithError`,`WithValidation`,`OnEnterTest`,`Disabled`,`DisabledWithValue`,`ActionTest`,`InlineStart`,`InlineEnd`,`BlockStart`,`BlockEnd`,`RTL`,`EventTest`]}));G();export{L as ActionTest,V as BlockEnd,B as BlockStart,F as Disabled,I as DisabledWithValue,U as EventTest,A as ExplicitNullValueDoesNotFallBackToInitialValue,O as InitialValue,k as InitialValueDoesNotOverrideValue,z as InlineEnd,R as InlineStart,D as Normal,P as OnEnterTest,H as RTL,j as Required,M as WithError,N as WithValidation,W as __namedExportsOrder,E as default,G as n,b as t};