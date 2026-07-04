import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-ggKXR4rT.js";import{r as a,t as o}from"./react-BmXJtctB.js";var s=t((()=>{}));function c(e,t=0){let n=e.querySelectorAll(`jb-textarea`)[t];return h(n).toBeTruthy(),h(n.shadowRoot).toBeTruthy(),n}function l(e){let t=e.shadowRoot?.querySelector(`textarea`);return h(t).toBeTruthy(),t}function u(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}function d(e){return e.shadowRoot?.querySelector(`.label-value`)?.textContent??``}function f(e,t){let n=e.shadowRoot?.querySelector(t);return h(n).toBeTruthy(),n}async function p(e,t){await g(()=>{h(e.value).toBe(t),h(l(e).value).toBe(t)})}async function m(e){let t=[],n=document.createElement(`jb-textarea`);n.setAttribute(`required`,``),n.setAttribute(`label`,`event textarea`);for(let e of[`beforeinput`,`input`,`keydown`,`keypress`,`keyup`,`enter`,`change`,`invalid`])n.addEventListener(e,()=>t.push(e));return e.appendChild(n),await g(()=>{h(l(n)).toBeTruthy()}),{textarea:n,events:t}}var h,g,_=t((()=>{({expect:h,waitFor:g}=__STORYBOOK_MODULE_TEST__)})),v=e({ActionTest:()=>M,BlockEnd:()=>I,BlockStart:()=>F,Disabled:()=>A,DisabledWithValue:()=>j,EventTest:()=>R,InlineEnd:()=>P,InlineStart:()=>N,Normal:()=>T,OnEnterTest:()=>k,RTL:()=>L,Required:()=>E,WithError:()=>D,WithValidation:()=>O,__namedExportsOrder:()=>z,default:()=>w}),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B=t((()=>{y=n(r(),1),o(),s(),_(),b=i(),{expect:x,userEvent:S,waitFor:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/form elements/JBTextarea`,component:a},T={args:{label:`text`,placeholder:`please type here`},play:async({canvasElement:e,args:t})=>{let n=c(e),r=l(n);await C(()=>{x(d(n)).toBe(t.label),x(r.placeholder).toBe(t.placeholder)}),await S.type(r,`hello textarea`),await p(n,`hello textarea`)}},E={args:{label:`required text`,message:`focus and unfocus to textarea to see the error`,required:!0},play:async({canvasElement:e,args:t})=>{let n=c(e);await C(()=>{x(n.required).toBe(!0),x(u(n)).toBe(t.message),x(n.reportValidity()).toBe(!1),x(u(n).length).toBeGreaterThan(0)})}},D={args:{label:`with error`,message:`message under textarea`,error:`error message`},play:async({canvasElement:e,args:t})=>{let n=c(e);await C(()=>{x(n.reportValidity()).toBe(!1),x(u(n)).toBe(t.error),x(n.validationMessage).toBe(t.error)})}},O={args:{label:`validation`,placeholder:`10 char, and no f char`,validationList:[{validator:/.{10}/g,message:`you must enter 10 char at least`},{validator:e=>!e.includes(`f`),message:`you cant enter f char`}]},play:async({canvasElement:e})=>{let t=c(e);t.value=`abc`,x(t.reportValidity()).toBe(!1),await C(()=>{x(u(t)).toBe(`you must enter 10 char at least`)}),t.value=`abcdefghij`,x(t.reportValidity()).toBe(!1),await C(()=>{x(u(t)).toBe(`you cant enter f char`)}),t.value=`abcdeghijk`,x(t.reportValidity()).toBe(!0),await C(()=>{x(u(t)).toBe(``)})}},k={args:{label:`text`,placeholder:`please hit enter with shift key and without shift key`,onEnter:e=>{alert(`shift key:`+(e.shiftKey?`true`:`false`))}}},A={args:{label:`disabled`,placeholder:`this textarea is disabled`,disabled:!0},play:async({canvasElement:e})=>{let t=c(e),n=l(t);await C(()=>{x(t.disabled).toBe(!0),x(n.disabled).toBe(!0)})}},j={args:{label:`disabled`,value:`here is the textarea value`,disabled:!0},play:async({canvasElement:e,args:t})=>{let n=c(e);await C(()=>{x(n.disabled).toBe(!0),x(n.value).toBe(t.value),x(l(n).value).toBe(t.value)})}},M={render:e=>{let[t,n]=(0,y.useState)(``),[r,i]=(0,y.useState)(``);function o(e){e.preventDefault()}return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{children:`test grow ability`}),(0,b.jsx)(a,{value:r,onChange:e=>{i(e.target.value)},label:`type to grow`,autoHeight:!0}),(0,b.jsx)(`button`,{onClick:()=>{i(``)},children:`clean`}),(0,b.jsx)(`button`,{onClick:()=>{i(`sss eeee ggggg`.repeat(200))},children:`longText`}),(0,b.jsx)(`h3`,{children:`grow with min and max height`}),(0,b.jsx)(`div`,{className:`grow-with-custom-limit`,children:(0,b.jsx)(a,{label:`48 to 120`,autoHeight:!0})}),(0,b.jsx)(`h3`,{children:`test value binding to state`}),(0,b.jsx)(a,{value:t,onChange:e=>{n(e.target.value)},label:`see the bottom`}),(0,b.jsx)(`p`,{children:t}),(0,b.jsx)(`h3`,{children:`test events (check console log)`}),(0,b.jsx)(a,{onKeyDown:o,onFocus:e=>{console.log(e)},onBlur:e=>{console.log(e)},label:`see value after `})]})},args:{label:`text`,placeholder:`please type here`},play:async({canvasElement:e})=>{let t=c(e),n=l(t);await C(()=>{x(t.autoHeight).toBe(!0)});let r=n.style.height;t.value=`long text `.repeat(100),await C(()=>{x(n.style.height).not.toBe(r)})}},N={render:e=>(0,b.jsx)(a,{...e,children:(0,b.jsx)(`div`,{style:{width:`100%`,height:`100%`,backgroundColor:`red`},slot:`inline-start-section`})}),args:{label:`text`,placeholder:`please type here`},play:async({canvasElement:e})=>{x(f(c(e),`.inline-start-section-wrapper`).querySelector(`slot`)?.name).toBe(`inline-start-section`)}},P={render:e=>(0,b.jsx)(a,{...e,children:(0,b.jsx)(`div`,{style:{width:`100%`,height:`100%`,backgroundColor:`red`},slot:`inline-end-section`})}),args:{label:`text`,placeholder:`please type here`},play:async({canvasElement:e})=>{x(f(c(e),`.inline-end-section-wrapper`).querySelector(`slot`)?.name).toBe(`inline-end-section`)}},F={render:e=>(0,b.jsx)(a,{...e,children:(0,b.jsx)(`div`,{style:{width:`100%`,height:`2rem`,backgroundColor:`red`},slot:`block-start-section`})}),args:{label:`text`,placeholder:`please type here`},play:async({canvasElement:e})=>{x(f(c(e),`.block-start-section-wrapper`).querySelector(`slot`)?.name).toBe(`block-start-section`)}},I={render:e=>(0,b.jsx)(a,{...e,children:(0,b.jsx)(`div`,{style:{width:`100%`,height:`2rem`,backgroundColor:`red`},slot:`block-end-section`})}),args:{label:`text`,placeholder:`please type here`},play:async({canvasElement:e})=>{x(f(c(e),`.block-end-section-wrapper`).querySelector(`slot`)?.name).toBe(`block-end-section`)}},L={args:{label:`متن`,placeholder:`لطفا وارد کنید`},parameters:{themes:{themeOverride:`rtl`}},play:async({canvasElement:e,args:t})=>{let n=c(e);await C(()=>{x(d(n)).toBe(t.label),x(l(n).placeholder).toBe(t.placeholder)})}},R={render:()=>(0,b.jsx)(a,{label:`event test`,required:!0}),play:async({canvasElement:e})=>{let{textarea:t,events:n}=await m(e),r=l(t);x(t.reportValidity()).toBe(!1),r.dispatchEvent(new InputEvent(`beforeinput`,{data:`a`,inputType:`insertText`,bubbles:!0,cancelable:!0,composed:!0})),r.value=`a`,r.dispatchEvent(new InputEvent(`input`,{data:`a`,inputType:`insertText`,bubbles:!0,composed:!0})),r.dispatchEvent(new KeyboardEvent(`keydown`,{key:`Enter`,bubbles:!0,cancelable:!0})),r.dispatchEvent(new KeyboardEvent(`keypress`,{key:`Enter`,bubbles:!0,cancelable:!0})),r.dispatchEvent(new KeyboardEvent(`keyup`,{key:`Enter`,bubbles:!0,cancelable:!0})),r.dispatchEvent(new Event(`change`,{bubbles:!0,cancelable:!0})),await C(()=>{x(t.value).toBe(`a`),x(n).toEqual(x.arrayContaining([`invalid`,`beforeinput`,`input`,`keydown`,`keypress`,`enter`,`keyup`,`change`]))})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'text',
    placeholder: 'please hit enter with shift key and without shift key',
    onEnter: e => {
      alert("shift key:" + (e.shiftKey ? 'true' : 'false'));
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z=[`Normal`,`Required`,`WithError`,`WithValidation`,`OnEnterTest`,`Disabled`,`DisabledWithValue`,`ActionTest`,`InlineStart`,`InlineEnd`,`BlockStart`,`BlockEnd`,`RTL`,`EventTest`]}));B();export{M as ActionTest,I as BlockEnd,F as BlockStart,A as Disabled,j as DisabledWithValue,R as EventTest,P as InlineEnd,N as InlineStart,T as Normal,k as OnEnterTest,L as RTL,E as Required,D as WithError,O as WithValidation,z as __namedExportsOrder,w as default,B as n,v as t};