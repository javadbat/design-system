import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-C3yPao1g.js";import{r as a,t as o}from"./react-BMqP9A1E.js";import{r as s,t as c}from"./react-WxPxmnts.js";var l=t((()=>{}));function u(e,t=0){let n=e.querySelectorAll(`jb-input`)[t];return m(n).toBeTruthy(),m(n.shadowRoot).toBeTruthy(),n}function d(e){let t=e.shadowRoot?.querySelector(`input`);return m(t).toBeTruthy(),t}function f(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}function p(e){let t=e.shadowRoot?.querySelector(`.input-box`);return m(t).toBeTruthy(),t}var m,h=t((()=>{({expect:m}=__STORYBOOK_MODULE_TEST__)})),g=e({CustomMobileKeyboard:()=>H,DirectValueProperties:()=>E,Disabled:()=>O,LargeText:()=>I,Normal:()=>T,OnEnterTest:()=>F,Required:()=>D,RequiredWithCustomMessage:()=>A,RequiredWithLabel:()=>k,SizeVariants:()=>N,ValidationList:()=>R,WithEndSection:()=>B,WithError:()=>j,WithPlaceholder:()=>M,WithStartAndEndSection:()=>V,WithStartSection:()=>z,__namedExportsOrder:()=>U,default:()=>w,testActions:()=>P,testStyles:()=>L}),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W=t((()=>{_=n(r(),1),c(),o(),l(),h(),v=i(),{expect:y,fn:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/form elements/Inputs/JBInput`,component:s},T={args:{label:`label`,message:`static text under input show all the time`,placeholder:`placeholder`,disabled:!1}},E={args:{value:`current value`,initialValue:`initial value`},play:async({canvasElement:e})=>{let t=u(e),n=d(t);await S(()=>{y(t.value).toBe(`current value`),y(t.initialValue).toBe(`initial value`),y(n.value).toBe(`current value`),y(t.isDirty).toBe(!0)})}},D={args:{message:`focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear`,required:!0}},O={args:{label:`disabled input`,message:`static text under input show all the time`,value:`value`,disabled:!0},play:async({canvasElement:e})=>{let t=u(e),n=d(t),r=b();t.addEventListener(`input`,r),await S(()=>{y(t.disabled).toBe(!0),y(n.disabled).toBe(!0),y(n.value).toBe(`value`)}),t.focus(),await x.click(n),await x.type(n,` updated`),y(n.value).toBe(`value`),y(t.value).toBe(`value`),y(r).not.toHaveBeenCalled()}},k={args:{label:`name`,message:`focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear`,required:!0}},A={args:{label:`Required with custom message`,message:`focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear`,required:`you must fill this field to continue`},play:async({canvasElement:e,args:t})=>{let n=u(e);y(n.reportValidity()).toBe(!1),await S(()=>{y(f(n)).toBe(t.required),y(n.hasState(`invalid`)).toBe(!0)}),n.value=`filled`,y(n.reportValidity()).toBe(!0),await S(()=>{y(f(n)).toBe(t.message),y(n.hasState(`invalid`)).toBe(!1)})}},j={args:{label:`has error message`,message:`simple hint message`,error:`error message`,validationList:[{validator:/^.{3,}$/g,message:`you must enter at least 3 characters`}],type:`password`},play:async({canvasElement:e,args:t})=>{let n=u(e);await S(()=>{y(n.reportValidity()).toBe(!1),y(f(n)).toBe(t.error)}),n.value=`ab`,n.setAttribute(`error`,``),await S(()=>{y(n.reportValidity()).toBe(!1),y(f(n)).toBe(`you must enter at least 3 characters`),y(n.hasState(`invalid`)).toBe(!0)}),n.value=`abcd`,y(n.reportValidity()).toBe(!0),await S(()=>{y(f(n)).toBe(t.message),y(n.hasState(`invalid`)).toBe(!1)})}},M={args:{label:`with placeholder`,placeholder:`test placeholder`}},N={render:()=>(0,v.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`},children:[(0,v.jsx)(s,{label:`xl size`,message:`message underneath`,size:`xl`}),(0,v.jsx)(s,{label:`xl size`,placeholder:`placeholder`,size:`xl`}),(0,v.jsx)(s,{label:`xl size`,value:`Value 1234`,size:`xl`}),(0,v.jsx)(s,{label:`lg size`,message:`message underneath`,size:`lg`}),(0,v.jsx)(s,{label:`lg size`,placeholder:`placeholder`,size:`lg`}),(0,v.jsx)(s,{label:`lg size`,value:`Value 1234`,size:`lg`}),(0,v.jsx)(s,{label:`md size`,message:`message underneath`,size:`md`}),(0,v.jsx)(s,{label:`md size`,placeholder:`placeholder`,size:`md`}),(0,v.jsx)(s,{label:`md size`,value:`Value 1234`,size:`md`}),(0,v.jsx)(s,{label:`sm size`,message:`message underneath`,size:`sm`}),(0,v.jsx)(s,{label:`sm size`,placeholder:`placeholder`,size:`sm`}),(0,v.jsx)(s,{label:`sm size`,value:`Value 1234`,size:`sm`}),(0,v.jsx)(s,{label:`xs size`,message:`message underneath`,size:`xs`}),(0,v.jsx)(s,{label:`xs size`,placeholder:`placeholder`,size:`xs`}),(0,v.jsx)(s,{label:`xs size`,value:`Value 1234`,size:`xs`})]})},P={render:()=>{let e=(0,_.useRef)(null),[t,n]=(0,_.useState)(`09`);return(0,_.useEffect)(()=>{e.current?.focus()},[]),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(s,{ref:e,value:t,onKeyup:e=>n(e.target.value),onKeydown:e=>{console.log(e)},label:`type value`,message:`native input and JB Input value must be sync`}),(0,v.jsx)(`br`,{}),(0,v.jsx)(`span`,{children:`value:`}),(0,v.jsx)(`input`,{"data-testid":`mirror-input`,value:t,onChange:e=>n(e.target.value)})]})},play:async({canvasElement:e})=>{let t=u(e),n=d(t),r=C(e).getByTestId(`mirror-input`);await S(()=>{y(n.value).toBe(`09`),y(r.value).toBe(`09`)}),await x.click(r),await x.keyboard(`{Control>}a{/Control}{Backspace}`),await x.type(r,`12345`),await S(()=>{y(t.value).toBe(`12345`),y(n.value).toBe(`12345`)}),n.focus(),await x.keyboard(`{Control>}a{/Control}{Backspace}`),await x.type(n,`678`),await S(()=>{y(t.value).toBe(`678`),y(r.value).toBe(`678`)})}},F={args:{label:`enter test`,message:`Press Enter to see alert`,onEnter:b()},play:async({canvasElement:e,args:t})=>{let n=d(u(e));n.focus(),n.dispatchEvent(new KeyboardEvent(`keyup`,{key:`Enter`,keyCode:13,bubbles:!0,composed:!0})),await S(()=>{y(t.onEnter).toHaveBeenCalled()})}},I={args:{label:`large text to test what will happen if we set long text as an label to input`,message:`long message text to test what happen we we set long message as an message prop. you can also try responsiveness control to see what happen in mobile or tablet size`}},L={render:()=>(0,v.jsxs)(`div`,{className:`jb-input-styling-test`,children:[(0,v.jsx)(`h1`,{children:`JBInput different Styling test`}),(0,v.jsx)(`div`,{className:`cloudy-style`,children:(0,v.jsx)(s,{})}),(0,v.jsx)(`a`,{href:`https://github.com/javadbat/jb-input/blob/main/stories/styles/styles.css`,target:`_blank`,rel:`noopener`,children:`see css styles here`})]})},R={render:()=>{let e=[{validator:/^.{8,}$/g,message:`you must enter 8 char at least`}],t=[{validator:/.{8,}/g,message:`password must at least 8 char long`},{validator:/(?=.*?[0-9])/g,message:`password should include one number`},{validator:/(?=.*?[a-z])/g,message:`password must include one word`}],n=[{validator:/^[^\s@]+@[^\s@]+\.[^\s@]+$/g,message:`email is not valid`},{validator:({displayValue:e,value:t})=>t.includes(`yahoo`)?`you cant enter yahoo email9`:!0,message:`email must be gmail`},{validator:({displayValue:e,value:t})=>new Promise(e=>{setTimeout(()=>{t.includes(`outlook`)&&e(`you cant enter outlook email`),e(!0)},3e3)}),message:`outlook doesn't respond`,defer:!0}],r=[{validator:/^(\+98|0|0098)?9\d{9}$/g,message:`mobile number is not valid`}],i=(0,_.useRef)(null);function o(){i.current&&console.log(i.current.validation.result)}return(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,v.jsx)(s,{label:`input`,validationList:e}),(0,v.jsx)(s,{label:`email`,validationList:n,message:`enter outlook and see async validation result after 3sec`}),(0,v.jsx)(s,{label:`phone number`,validationList:r,message:`you can use jb-mobile-input for better experience`}),(0,v.jsx)(s,{ref:i,label:`password`,validationList:t}),(0,v.jsx)(a,{onClick:o,children:`log password validation(see console)`})]})},args:{},play:async({canvasElement:e})=>{let t=u(e),n=d(t);await x.type(n,`short`),n.blur(),await S(()=>{y(t.reportValidity()).toBe(!1),y(f(t)).toBe(`you must enter 8 char at least`),y(t.hasState(`invalid`)).toBe(!0)}),n.focus(),await x.keyboard(`{Control>}a{/Control}{Backspace}`),await x.type(n,`long-enough`),await S(()=>{y(t.reportValidity()).toBe(!0),y(t.hasState(`invalid`)).toBe(!1)})}},z={args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`,children:(0,v.jsx)(`div`,{slot:`start-section`,style:{width:`1.5rem`,height:`1.5rem`,backgroundColor:`#262626`}})}},B={args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`,children:(0,v.jsx)(`div`,{slot:`end-section`,style:{width:`1.5rem`,height:`1.5rem`,backgroundColor:`#262626`}})}},V={args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`,children:(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(`div`,{slot:`end-section`,style:{width:`1.5rem`,height:`1.5rem`,backgroundColor:`#262626`}}),(0,v.jsx)(`div`,{slot:`start-section`,style:{width:`1.5rem`,height:`1.5rem`,backgroundColor:`#262626`}})]})}},H={args:{label:`number keyboard`,inputmode:`numeric`},play:async({canvasElement:e})=>{let t=u(e),n=d(t),r=p(t);await S(()=>{y(n.inputMode).toBe(`numeric`),y(r).toBeTruthy()})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'placeholder',
    disabled: false
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
    });
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: "name",
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with placeholder',
    placeholder: 'test placeholder'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const input = useRef<JBInputWebComponent>(null);
    const [value, setValue] = useState('09');
    useEffect(() => {
      input.current?.focus();
    }, []);
    return <div>
        <JBInput ref={input} value={value} onKeyup={e => setValue(e.target.value)} onKeydown={e => {
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'large text to test what will happen if we set long text as an label to input',
    message: 'long message text to test what happen we we set long message as an message prop. you can also try responsiveness control to see what happen in mobile or tablet size'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="jb-input-styling-test">
      <h1>JBInput different Styling test</h1>
      <div className="cloudy-style">
        <JBInput />
      </div>
      <a href='https://github.com/javadbat/jb-input/blob/main/stories/styles/styles.css' target='_blank' rel="noopener">see css styles here</a>
    </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    children: <div slot="start-section" style={{
      width: '1.5rem',
      height: '1.5rem',
      backgroundColor: '#262626'
    }}></div>
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    children: <div slot="end-section" style={{
      width: '1.5rem',
      height: '1.5rem',
      backgroundColor: '#262626'
    }}></div>
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    children: <Fragment>
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
      </Fragment>
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`Normal`,`DirectValueProperties`,`Required`,`Disabled`,`RequiredWithLabel`,`RequiredWithCustomMessage`,`WithError`,`WithPlaceholder`,`SizeVariants`,`testActions`,`OnEnterTest`,`LargeText`,`testStyles`,`ValidationList`,`WithStartSection`,`WithEndSection`,`WithStartAndEndSection`,`CustomMobileKeyboard`]}));W();export{H as CustomMobileKeyboard,E as DirectValueProperties,O as Disabled,I as LargeText,T as Normal,F as OnEnterTest,D as Required,A as RequiredWithCustomMessage,k as RequiredWithLabel,N as SizeVariants,R as ValidationList,B as WithEndSection,j as WithError,M as WithPlaceholder,V as WithStartAndEndSection,z as WithStartSection,U as __namedExportsOrder,w as default,W as n,g as t,P as testActions,L as testStyles};