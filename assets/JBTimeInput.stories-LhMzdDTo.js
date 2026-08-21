import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-DqjxMHfY.js";import{r as a,t as o}from"./react-CIv0yQ5E.js";import{n as s,t as c}from"./react-Ca0DF2Oj.js";function l(e,t=0){let n=e.querySelectorAll(`jb-time-input`)[t];return g(n).toBeTruthy(),g(n.shadowRoot).toBeTruthy(),n}function u(e){let t=e.elements.input;return g(t).toBeTruthy(),g(t.shadowRoot).toBeTruthy(),t}function d(e){let t=u(e).shadowRoot?.querySelector(`input`);return g(t).toBeTruthy(),t}function f(e){return u(e).shadowRoot?.querySelector(`.message-box`)?.textContent??``}function p(e){let t=e.elements.timePicker.component;return g(t).toBeTruthy(),g(t.shadowRoot).toBeTruthy(),t}function m(e,t,n){let r=e.shadowRoot?.querySelector(`.${v[n]} .${t}-text`);return g(r).toBeTruthy(),r}async function h(e,t){await _(()=>{g(e.value).toBe(t),g(d(e).value).toBe(u(e).displayValue)})}var g,_,v,y=t((()=>{({expect:g,waitFor:_}=__STORYBOOK_MODULE_TEST__),v={substitutePrevTime:`substitute-prev-time`,prevTime:`prev-time`,currentTime:`current-time`,nextTime:`next-time`,substituteNextTime:`substitute-next-time`}})),b=e({Disabled:()=>k,EventTestPage:()=>L,ExplicitNullValueDoesNotFallBackToInitialValue:()=>M,FrontalZero:()=>B,InitialValue:()=>A,InitialValueDoesNotOverrideValue:()=>j,Normal:()=>O,OptionalMinute:()=>V,PersianNumber:()=>N,RTLSample:()=>F,ValidationSample:()=>R,WebComponentEventTestPage:()=>I,__namedExportsOrder:()=>H,default:()=>D,withValue:()=>P,withoutSecond:()=>z}),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U=t((()=>{x=n(r(),1),c(),y(),o(),S=i(),{expect:C,fn:w,userEvent:T,waitFor:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/form elements/Inputs/JBTimeInput`,component:s},O={args:{label:`time`},play:async({canvasElement:e})=>{let t=l(e);await h(t,`00:00:00`),await T.click(d(t)),await E(()=>{C(t.showTimePicker).toBe(!0),C(p(t).value).toEqual({hour:0,minute:0,second:0})})}},k={args:{label:`disabled time`,value:`12:34:56`,disabled:!0,onChange:w()},play:async({canvasElement:e,args:t})=>{let n=l(e),r=u(n),i=d(n);await h(n,`12:34:56`),C(n.disabled).toBe(!0),C(r.disabled).toBe(!0),C(i.disabled).toBe(!0),await T.click(i),await T.type(i,`23:59:59`),await E(()=>{C(n.value).toBe(`12:34:56`),C(n.showTimePicker).toBe(!1),C(t.onChange).not.toHaveBeenCalled()})}},A={render:e=>{let t=(0,x.useRef)(null);return(0,S.jsxs)(`form`,{ref:t,children:[(0,S.jsx)(s,{...e}),(0,S.jsx)(a,{onClick:()=>t.current?.reset(),children:`Reset`})]})},args:{label:`initial value`,initialValue:`08:30:45`},play:async({canvasElement:e,args:t})=>{let n=l(e),r=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`);C(r).toBeTruthy(),await E(()=>{C(n.initialValue).toBe(t.initialValue),C(n.value).toBe(t.initialValue),C(n.isDirty).toBe(!1)}),n.secondEnabled=!1,await E(()=>{C(n.initialValue).toBe(`08:30`),C(n.value).toBe(`08:30`),C(n.isDirty).toBe(!1)}),n.secondEnabled=!0,await E(()=>{C(n.initialValue).toBe(`08:30:00`),C(n.value).toBe(`08:30:00`),C(n.isDirty).toBe(!1)}),n.value=`invalid-time`,n.initialValue=`09:15:30`,await E(()=>{C(n.initialValue).toBe(`09:15:30`),C(n.value).toBe(`09:15:30`),C(n.isDirty).toBe(!1)}),n.value=`12:34:56`,await E(()=>{C(n.value).toBe(`12:34:56`),C(n.isDirty).toBe(!0)}),n.initialValue=`10:15:30`,C(n.initialValue).toBe(`10:15:30`),C(n.value).toBe(`12:34:56`),C(n.isDirty).toBe(!0),await T.click(r),await E(()=>{C(n.value).toBe(`10:15:30`),C(n.initialValue).toBe(n.value),C(n.isDirty).toBe(!1)}),n.initialValue=`11:20:30`,await E(()=>{C(n.value).toBe(`11:20:30`),C(n.isDirty).toBe(!1)})}},j={args:{initialValue:`08:30:45`,value:`12:34:56`},play:async({canvasElement:e})=>{let t=l(e);await E(()=>{C(t.initialValue).toBe(`08:30:45`),C(t.value).toBe(`12:34:56`),C(t.isDirty).toBe(!0)})}},M={args:{initialValue:`08:30:45`,value:null},play:async({canvasElement:e})=>{let t=l(e);await E(()=>{C(t.initialValue).toBe(`08:30:45`),C(t.value).toBe(`00:00:00`),C(t.isDirty).toBe(!0)})}},N={args:{label:`time`,showPersianNumber:!0},play:async({canvasElement:e})=>{let t=l(e),n=d(t),r=u(t);await T.click(n),n.setSelectionRange(0,n.value.length),await T.type(n,`123456`),await E(()=>{C(t.value).toBe(`12:34:56`),C(r.displayValue).toBe(`۱۲:۳۴:۵۶`),C(n.value).toBe(`۱۲:۳۴:۵۶`)})}},P={args:{label:`time`,value:`13:24:48`},play:async({canvasElement:e})=>{let t=l(e),n=p(t);await h(t,`13:24:48`),await E(()=>{C(n.value).toEqual({hour:13,minute:24,second:48})})}},F={args:{label:`زمان`,closeButtonText:`بستن`},parameters:{themes:{themeOverride:`rtl`}},play:async({canvasElement:e})=>{let t=l(e);await E(()=>{C(u(t).getAttribute(`label`)).toBe(`زمان`),C(t.elements.timePicker.closeButton.textContent).toBe(`بستن`)})}},I={render:()=>(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`jb-time-input`,{label:`date`}),(0,S.jsx)(`h3`,{children:`without second`}),(0,S.jsx)(`jb-time-input`,{"second-enabled":`false`})]}),play:async({canvasElement:e})=>{let t=l(e),n=l(e,1),r=[];t.addEventListener(`focus`,()=>r.push(`focus`)),t.addEventListener(`beforeinput`,()=>r.push(`beforeinput`)),t.addEventListener(`input`,()=>r.push(`input`)),t.addEventListener(`keydown`,()=>r.push(`keydown`)),t.addEventListener(`keypress`,()=>r.push(`keypress`)),t.addEventListener(`keyup`,()=>r.push(`keyup`)),t.addEventListener(`enter`,()=>r.push(`enter`)),t.addEventListener(`change`,()=>r.push(`change`)),t.addEventListener(`blur`,()=>r.push(`blur`));let i=d(t);await T.click(i),i.setSelectionRange(0,i.value.length),await T.type(i,`123456{Enter}`),i.blur(),await E(()=>{C(t.value).toBe(`12:34:56`),C(r).toEqual(C.arrayContaining([`focus`,`beforeinput`,`input`,`keydown`,`keypress`,`keyup`,`enter`,`change`,`blur`]))}),await E(()=>{C(n.secondEnabled).toBe(!1),C(n.value).toBe(`00:00`),C(n.second).toBeNull()})}},L={render:e=>{let[t,n]=(0,x.useState)(`00:00:00`);return(0,S.jsxs)(`div`,{children:[(0,S.jsx)(s,{...e,label:`event test`,value:t,onChange:t=>{e.onChange?.(t),n(t.target.value)}}),(0,S.jsxs)(`span`,{children:[`value:`,t]}),(0,S.jsx)(a,{onClick:()=>n(`12:48:00`),children:`set value to 12:48`})]})},args:{onChange:w()},play:async({canvasElement:e,args:t})=>{let n=l(e),r=Array.from(e.querySelectorAll(`button`)).find(e=>e.textContent?.includes(`12:48`));C(r).toBeTruthy(),await T.click(r),await E(()=>{C(n.value).toBe(`12:48:00`),C(e.textContent).toContain(`value:12:48:00`)});let i=d(n);await T.click(i),i.setSelectionRange(0,i.value.length),await T.type(i,`132500`),i.blur(),await E(()=>{C(n.value).toBe(`13:25:00`),C(t.onChange).toHaveBeenCalled(),C(e.textContent).toContain(`value:13:25:00`)})}},R={args:{label:`time:`,validationList:[{validator:/^[1][1234].*$/g,message:`hour  must be between 11 and 14`},{validator:({displayValue:e,value:t,valueObject:n})=>!(n.minute&&n.minute<30),message:`minute must be 30 to 60`}]},play:async({canvasElement:e})=>{let t=l(e);await E(()=>{C(t.validation.list.length).toBe(2)}),t.value=`12:20:00`,C(t.reportValidity()).toBe(!1),await E(()=>{C(f(t)).toBe(`minute must be 30 to 60`),C(t.validationMessage).toBe(`minute must be 30 to 60`)}),t.value=`12:30:00`,C(t.reportValidity()).toBe(!0),await E(()=>{C(f(t)).not.toBe(`minute must be 30 to 60`)})}},z={args:{label:`time`,secondEnabled:!1},play:async({canvasElement:e})=>{let t=l(e),n=d(t);await h(t,`00:00`),C(t.secondEnabled).toBe(!1),C(t.second).toBeNull(),C(p(t).secondEnabled).toBe(!1),await T.click(n),n.setSelectionRange(0,n.value.length),await T.type(n,`123456`),await E(()=>{C(t.value).toBe(`12:34`),C(t.value.split(`:`)).toHaveLength(2),C(t.second).toBeNull()})}},B={args:{label:`time`,closeButtonText:`بستن`,frontalZero:!0},play:async({canvasElement:e})=>{let t=l(e),n=p(t);await E(()=>{C(t.frontalZero).toBe(!0),C(m(n,`hour`,`currentTime`).textContent).toBe(`00`),C(m(n,`minute`,`currentTime`).textContent).toBe(`00`),C(m(n,`second`,`currentTime`).textContent).toBe(`00`)})}},V={args:{label:`زمان`,closeButtonText:`بستن`,optionalUnits:[`minute`]},play:async({canvasElement:e})=>{let t=l(e),n=p(t);await E(()=>{C(t.optionalUnits).toEqual([`minute`]),C(m(n,`minute`,`currentTime`).classList.contains(`--optional`)).toBe(!0),C(m(n,`hour`,`currentTime`).classList.contains(`--optional`)).toBe(!1)})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time'
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    await waitForInputValue(timeInput, '00:00:00');
    await userEvent.click(getNativeInput(timeInput));
    await waitFor(() => {
      expect(timeInput.showTimePicker).toBe(true);
      expect(getTimePicker(timeInput).value).toEqual({
        hour: 0,
        minute: 0,
        second: 0
      });
    });
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'disabled time',
    value: '12:34:56',
    disabled: true,
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const timeInput = getTimeInput(canvasElement);
    const innerInput = getInnerInput(timeInput);
    const nativeInput = getNativeInput(timeInput);
    await waitForInputValue(timeInput, '12:34:56');
    expect(timeInput.disabled).toBe(true);
    expect(innerInput.disabled).toBe(true);
    expect(nativeInput.disabled).toBe(true);
    await userEvent.click(nativeInput);
    await userEvent.type(nativeInput, '23:59:59');
    await waitFor(() => {
      expect(timeInput.value).toBe('12:34:56');
      expect(timeInput.showTimePicker).toBe(false);
      expect(args.onChange).not.toHaveBeenCalled();
    });
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBTimeInput {...args} />
        <JBButton onClick={() => formRef.current?.reset()}>Reset</JBButton>
      </form>;
  },
  args: {
    label: 'initial value',
    initialValue: '08:30:45'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const timeInput = getTimeInput(canvasElement);
    const resetButton = canvasElement.querySelector('jb-button')?.shadowRoot?.querySelector<HTMLButtonElement>('button');
    expect(resetButton).toBeTruthy();
    await waitFor(() => {
      expect(timeInput.initialValue).toBe(args.initialValue);
      expect(timeInput.value).toBe(args.initialValue);
      expect(timeInput.isDirty).toBe(false);
    });
    timeInput.secondEnabled = false;
    await waitFor(() => {
      // Changing time precision is configuration, so the reset baseline must
      // be converted with the live value without making the input dirty.
      expect(timeInput.initialValue).toBe('08:30');
      expect(timeInput.value).toBe('08:30');
      expect(timeInput.isDirty).toBe(false);
    });
    timeInput.secondEnabled = true;
    await waitFor(() => {
      expect(timeInput.initialValue).toBe('08:30:00');
      expect(timeInput.value).toBe('08:30:00');
      expect(timeInput.isDirty).toBe(false);
    });

    // A rejected live value must not prevent a later baseline from initializing
    // a component whose accepted value has never changed.
    timeInput.value = 'invalid-time';
    timeInput.initialValue = '09:15:30';
    await waitFor(() => {
      expect(timeInput.initialValue).toBe('09:15:30');
      expect(timeInput.value).toBe('09:15:30');
      expect(timeInput.isDirty).toBe(false);
    });

    // This story verifies setter precedence and reset behavior. Input editing
    // itself is exercised by the Normal story.
    timeInput.value = '12:34:56';
    await waitFor(() => {
      expect(timeInput.value).toBe('12:34:56');
      expect(timeInput.isDirty).toBe(true);
    });
    timeInput.initialValue = '10:15:30';
    expect(timeInput.initialValue).toBe('10:15:30');
    expect(timeInput.value).toBe('12:34:56');
    expect(timeInput.isDirty).toBe(true);
    await userEvent.click(resetButton!);
    await waitFor(() => {
      expect(timeInput.value).toBe('10:15:30');
      expect(timeInput.initialValue).toBe(timeInput.value);
      expect(timeInput.isDirty).toBe(false);
    });
    timeInput.initialValue = '11:20:30';
    await waitFor(() => {
      expect(timeInput.value).toBe('11:20:30');
      expect(timeInput.isDirty).toBe(false);
    });
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: '08:30:45',
    value: '12:34:56'
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    await waitFor(() => {
      expect(timeInput.initialValue).toBe('08:30:45');
      expect(timeInput.value).toBe('12:34:56');
      expect(timeInput.isDirty).toBe(true);
    });
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: '08:30:45',
    value: null
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    await waitFor(() => {
      expect(timeInput.initialValue).toBe('08:30:45');
      expect(timeInput.value).toBe('00:00:00');
      expect(timeInput.isDirty).toBe(true);
    });
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time',
    showPersianNumber: true
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    const nativeInput = getNativeInput(timeInput);
    const innerInput = getInnerInput(timeInput);
    await userEvent.click(nativeInput);
    nativeInput.setSelectionRange(0, nativeInput.value.length);
    await userEvent.type(nativeInput, '123456');
    await waitFor(() => {
      expect(timeInput.value).toBe('12:34:56');
      expect(innerInput.displayValue).toBe('\\u06F1\\u06F2:\\u06F3\\u06F4:\\u06F5\\u06F6');
      expect(nativeInput.value).toBe('\\u06F1\\u06F2:\\u06F3\\u06F4:\\u06F5\\u06F6');
    });
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time',
    value: "13:24:48"
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    const timePicker = getTimePicker(timeInput);
    await waitForInputValue(timeInput, '13:24:48');
    await waitFor(() => {
      expect(timePicker.value).toEqual({
        hour: 13,
        minute: 24,
        second: 48
      });
    });
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'زمان',
    closeButtonText: 'بستن'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    await waitFor(() => {
      expect(getInnerInput(timeInput).getAttribute('label')).toBe('زمان');
      expect(timeInput.elements.timePicker.closeButton.textContent).toBe('بستن');
    });
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <jb-time-input label="date"></jb-time-input>
      <h3>without second</h3>
      <jb-time-input second-enabled="false"></jb-time-input>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    const withoutSecondTimeInput = getTimeInput(canvasElement, 1);
    const events: string[] = [];
    timeInput.addEventListener('focus', () => events.push('focus'));
    timeInput.addEventListener('beforeinput', () => events.push('beforeinput'));
    timeInput.addEventListener('input', () => events.push('input'));
    timeInput.addEventListener('keydown', () => events.push('keydown'));
    timeInput.addEventListener('keypress', () => events.push('keypress'));
    timeInput.addEventListener('keyup', () => events.push('keyup'));
    timeInput.addEventListener('enter', () => events.push('enter'));
    timeInput.addEventListener('change', () => events.push('change'));
    timeInput.addEventListener('blur', () => events.push('blur'));
    const nativeInput = getNativeInput(timeInput);
    await userEvent.click(nativeInput);
    nativeInput.setSelectionRange(0, nativeInput.value.length);
    await userEvent.type(nativeInput, '123456{Enter}');
    nativeInput.blur();
    await waitFor(() => {
      expect(timeInput.value).toBe('12:34:56');
      expect(events).toEqual(expect.arrayContaining(['focus', 'beforeinput', 'input', 'keydown', 'keypress', 'keyup', 'enter', 'change', 'blur']));
    });
    await waitFor(() => {
      expect(withoutSecondTimeInput.secondEnabled).toBe(false);
      expect(withoutSecondTimeInput.value).toBe('00:00');
      expect(withoutSecondTimeInput.second).toBeNull();
    });
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('00:00:00');
    return <div>
        <JBTimeInput {...args} label="event test" value={value} onChange={event => {
        args.onChange?.(event);
        setValue(event.target.value);
      }} />
        <span>value:{value}</span>
        <JBButton onClick={() => setValue('12:48:00')}>set value to 12:48</JBButton>
      </div>;
  },
  args: {
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const timeInput = getTimeInput(canvasElement);
    const setValueButton = Array.from(canvasElement.querySelectorAll('button')).find(button => button.textContent?.includes('12:48'));
    expect(setValueButton).toBeTruthy();
    await userEvent.click(setValueButton!);
    await waitFor(() => {
      expect(timeInput.value).toBe('12:48:00');
      expect(canvasElement.textContent).toContain('value:12:48:00');
    });
    const nativeInput = getNativeInput(timeInput);
    await userEvent.click(nativeInput);
    nativeInput.setSelectionRange(0, nativeInput.value.length);
    await userEvent.type(nativeInput, '132500');
    nativeInput.blur();
    await waitFor(() => {
      expect(timeInput.value).toBe('13:25:00');
      expect(args.onChange).toHaveBeenCalled();
      expect(canvasElement.textContent).toContain('value:13:25:00');
    });
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time:',
    validationList: [{
      validator: /^[1][1234].*$/g,
      message: "hour  must be between 11 and 14"
    }, {
      validator: ({
        displayValue,
        value,
        valueObject
      }) => {
        if (valueObject.minute && valueObject.minute < 30) {
          return false;
        }
        return true;
      },
      message: 'minute must be 30 to 60'
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    await waitFor(() => {
      expect(timeInput.validation.list.length).toBe(2);
    });
    timeInput.value = '12:20:00';
    expect(timeInput.reportValidity()).toBe(false);
    await waitFor(() => {
      expect(getMessageText(timeInput)).toBe('minute must be 30 to 60');
      expect(timeInput.validationMessage).toBe('minute must be 30 to 60');
    });
    timeInput.value = '12:30:00';
    expect(timeInput.reportValidity()).toBe(true);
    await waitFor(() => {
      expect(getMessageText(timeInput)).not.toBe('minute must be 30 to 60');
    });
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time',
    secondEnabled: false
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    const nativeInput = getNativeInput(timeInput);
    await waitForInputValue(timeInput, '00:00');
    expect(timeInput.secondEnabled).toBe(false);
    expect(timeInput.second).toBeNull();
    expect(getTimePicker(timeInput).secondEnabled).toBe(false);
    await userEvent.click(nativeInput);
    nativeInput.setSelectionRange(0, nativeInput.value.length);
    await userEvent.type(nativeInput, '123456');
    await waitFor(() => {
      expect(timeInput.value).toBe('12:34');
      expect(timeInput.value.split(':')).toHaveLength(2);
      expect(timeInput.second).toBeNull();
    });
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time',
    closeButtonText: 'بستن',
    frontalZero: true
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    const timePicker = getTimePicker(timeInput);
    await waitFor(() => {
      expect(timeInput.frontalZero).toBe(true);
      expect(getTimeText(timePicker, 'hour', 'currentTime').textContent).toBe('00');
      expect(getTimeText(timePicker, 'minute', 'currentTime').textContent).toBe('00');
      expect(getTimeText(timePicker, 'second', 'currentTime').textContent).toBe('00');
    });
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'زمان',
    closeButtonText: 'بستن',
    optionalUnits: ['minute']
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    const timePicker = getTimePicker(timeInput);
    await waitFor(() => {
      expect(timeInput.optionalUnits).toEqual(['minute']);
      expect(getTimeText(timePicker, 'minute', 'currentTime').classList.contains('--optional')).toBe(true);
      expect(getTimeText(timePicker, 'hour', 'currentTime').classList.contains('--optional')).toBe(false);
    });
  }
}`,...V.parameters?.docs?.source}}},H=[`Normal`,`Disabled`,`InitialValue`,`InitialValueDoesNotOverrideValue`,`ExplicitNullValueDoesNotFallBackToInitialValue`,`PersianNumber`,`withValue`,`RTLSample`,`WebComponentEventTestPage`,`EventTestPage`,`ValidationSample`,`withoutSecond`,`FrontalZero`,`OptionalMinute`]}));U();export{k as Disabled,L as EventTestPage,M as ExplicitNullValueDoesNotFallBackToInitialValue,B as FrontalZero,A as InitialValue,j as InitialValueDoesNotOverrideValue,O as Normal,V as OptionalMinute,N as PersianNumber,F as RTLSample,R as ValidationSample,I as WebComponentEventTestPage,H as __namedExportsOrder,D as default,U as n,b as t,P as withValue,z as withoutSecond};