import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-CI8AyR3H.js";import{r as a,t as o}from"./react-Ez7zuf8t.js";import{a as s,t as c}from"./react-DSzqxyAS.js";var l=t((()=>{})),u=e({CustomMobileKeyboard:()=>A,Disabled:()=>g,LargeText:()=>w,Normal:()=>m,OnEnterTest:()=>C,Required:()=>h,RequiredWithCustomMessage:()=>v,RequiredWithLabel:()=>_,SizeVariants:()=>x,ValidationList:()=>E,WithEndSection:()=>O,WithError:()=>y,WithPlaceholder:()=>b,WithStartAndEndSection:()=>k,WithStartSection:()=>D,__namedExportsOrder:()=>j,default:()=>p,testActions:()=>S,testStyles:()=>T}),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{d=n(r(),1),c(),o(),l(),f=i(),p={title:`Components/form elements/Inputs/JBInput`,component:s},m={args:{label:`label`,message:`static text under input show all the time`,placeholder:`placeholder`,disabled:!1}},h={args:{message:`focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear`,required:!0}},g={args:{label:`disabled input`,message:`static text under input show all the time`,value:`value`,disabled:!0}},_={args:{label:`name`,message:`focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear`,required:!0}},v={args:{label:`Required with custom message`,message:`focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear`,required:`you must fill this field to continue`}},y={args:{label:`has error message`,message:`simple hint message`,error:`error message`,validationList:[{validator:/^.{3,}$/g,message:`you must enter at least 3 characters`}],type:`password`}},b={args:{label:`with placeholder`,placeholder:`test placeholder`}},x={render:()=>(0,f.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`},children:[(0,f.jsx)(s,{label:`xl size`,message:`message underneath`,size:`xl`}),(0,f.jsx)(s,{label:`xl size`,placeholder:`placeholder`,size:`xl`}),(0,f.jsx)(s,{label:`xl size`,value:`Value 1234`,size:`xl`}),(0,f.jsx)(s,{label:`lg size`,message:`message underneath`,size:`lg`}),(0,f.jsx)(s,{label:`lg size`,placeholder:`placeholder`,size:`lg`}),(0,f.jsx)(s,{label:`lg size`,value:`Value 1234`,size:`lg`}),(0,f.jsx)(s,{label:`md size`,message:`message underneath`,size:`md`}),(0,f.jsx)(s,{label:`md size`,placeholder:`placeholder`,size:`md`}),(0,f.jsx)(s,{label:`md size`,value:`Value 1234`,size:`md`}),(0,f.jsx)(s,{label:`sm size`,message:`message underneath`,size:`sm`}),(0,f.jsx)(s,{label:`sm size`,placeholder:`placeholder`,size:`sm`}),(0,f.jsx)(s,{label:`sm size`,value:`Value 1234`,size:`sm`}),(0,f.jsx)(s,{label:`xs size`,message:`message underneath`,size:`xs`}),(0,f.jsx)(s,{label:`xs size`,placeholder:`placeholder`,size:`xs`}),(0,f.jsx)(s,{label:`xs size`,value:`Value 1234`,size:`xs`})]})},S={render:()=>{let e=(0,d.useRef)(null),[t,n]=(0,d.useState)(`09`);return(0,d.useEffect)(()=>{e.current?.focus()},[]),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(s,{ref:e,value:t,onKeyup:e=>n(e.target.value),onKeydown:e=>{console.log(e)},label:`type value`,message:`native input and JB Input value must be sync`}),(0,f.jsx)(`br`,{}),(0,f.jsx)(`span`,{children:`value:`}),(0,f.jsx)(`input`,{value:t,onChange:e=>n(e.target.value)})]})}},C={args:{label:`enter test`,message:`Press Enter to see alert`,onEnter:()=>{alert(`you press Enter`)}}},w={args:{label:`large text to test what will happen if we set long text as an label to input`,message:`long message text to test what happen we we set long message as an message prop. you can also try responsiveness control to see what happen in mobile or tablet size`}},T={render:()=>(0,f.jsxs)(`div`,{className:`jb-input-styling-test`,children:[(0,f.jsx)(`h1`,{children:`JBInput different Styling test`}),(0,f.jsx)(`div`,{className:`cloudy-style`,children:(0,f.jsx)(s,{})}),(0,f.jsx)(`a`,{href:`https://github.com/javadbat/jb-input/blob/main/stories/styles/styles.css`,target:`_blank`,rel:`noopener`,children:`see css styles here`})]})},E={render:e=>{let t=[{validator:e.inputRegex,message:e.inputMessage}],n=[{validator:e.passwordRegex,message:e.passwordMessage}],r=[{validator:e.emailRegex,message:e.emailMessage},{validator:({displayValue:e,value:t})=>t.includes(`yahoo`)?`you cant enter yahoo email9`:!0,message:`email must be gmail`},{validator:({displayValue:e,value:t})=>new Promise(e=>{setTimeout(()=>{t.includes(`outlook`)&&e(`you cant enter outlook email`),e(!0)},3e3)}),message:`outlook doesn't respond`,defer:!0}],i=[{validator:e.mobileRegex,message:e.mobileMessage}],o=(0,d.useRef)(null);function c(){o.current&&console.log(o.current.validation.result)}return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,f.jsx)(s,{label:`input`,validationList:t}),(0,f.jsx)(s,{label:`email`,validationList:r,message:`enter outlook and see async validation result after 3sec`}),(0,f.jsx)(s,{label:`phone number`,validationList:i,message:`you can use jb-mobile-input for better experience`}),(0,f.jsx)(s,{ref:o,label:`password`,validationList:n}),(0,f.jsx)(a,{onClick:c,children:`log password validation(see console)`})]})},args:{inputRegex:/^.{8,}$/g,inputMessage:`you must enter 8 char at least`,passwordRegex:/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g,passwordMessage:`password must include one word one number and at least 8 char long`,emailRegex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/g,emailMessage:`email is not valid`,mobileRegex:/^(\+98|0|0098)?9\d{9}$/g,mobileMessage:`mobile number is not valid`}},D={args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`,children:(0,f.jsx)(`div`,{slot:`start-section`,style:{width:`24px`,height:`24px`,backgroundColor:`#262626`}})}},O={args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`,children:(0,f.jsx)(`div`,{slot:`end-section`,style:{width:`24px`,height:`24px`,backgroundColor:`#262626`}})}},k={args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`,children:(0,f.jsxs)(d.Fragment,{children:[(0,f.jsx)(`div`,{slot:`end-section`,style:{width:`24px`,height:`24px`,backgroundColor:`#262626`}}),(0,f.jsx)(`div`,{slot:`start-section`,style:{width:`24px`,height:`24px`,backgroundColor:`#262626`}})]})}},A={args:{label:`number keyboard`,inputmode:`numeric`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'placeholder',
    disabled: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'disabled input',
    message: 'static text under input show all the time',
    value: 'value',
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "name",
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Required with custom message",
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: "you must fill this field to continue"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'has error message',
    message: 'simple hint message',
    error: 'error message',
    validationList: [{
      validator: /^.{3,}$/g,
      message: 'you must enter at least 3 characters'
    }],
    type: 'password'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with placeholder',
    placeholder: 'test placeholder'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
        <input value={value} onChange={e => setValue(e.target.value)} />
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: "enter test",
    message: 'Press Enter to see alert',
    onEnter: () => {
      alert('you press Enter');
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'large text to test what will happen if we set long text as an label to input',
    message: 'long message text to test what happen we we set long message as an message prop. you can also try responsiveness control to see what happen in mobile or tablet size'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="jb-input-styling-test">
      <h1>JBInput different Styling test</h1>
      <div className="cloudy-style">
        <JBInput />
      </div>
      <a href='https://github.com/javadbat/jb-input/blob/main/stories/styles/styles.css' target='_blank' rel="noopener">see css styles here</a>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (props: Record<string, any>) => {
    const inputValidation: ValidationItem<ValidationValue>[] = [{
      validator: props.inputRegex,
      message: props.inputMessage
    }];
    const passwordValidation = [{
      validator: props.passwordRegex,
      message: props.passwordMessage
    }];
    const emailValidation: ValidationItem<ValidationValue>[] = [{
      validator: props.emailRegex,
      message: props.emailMessage
    }, {
      validator: ({
        displayValue,
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
        displayValue,
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
      validator: props.mobileRegex,
      message: props.mobileMessage
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
  args: {
    inputRegex: /^.{8,}$/g,
    inputMessage: 'you must enter 8 char at least',
    passwordRegex: /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g,
    passwordMessage: 'password must include one word one number and at least 8 char long',
    emailRegex: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/g,
    emailMessage: 'email is not valid',
    mobileRegex: /^(\\+98|0|0098)?9\\d{9}$/g,
    mobileMessage: 'mobile number is not valid'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    children: <div slot="start-section" style={{
      width: '24px',
      height: '24px',
      backgroundColor: '#262626'
    }}></div>
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    children: <div slot="end-section" style={{
      width: '24px',
      height: '24px',
      backgroundColor: '#262626'
    }}></div>
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    children: <Fragment>
        <div slot="end-section" style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#262626'
      }}></div>
        <div slot="start-section" style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#262626'
      }}></div>
      </Fragment>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    'label': 'number keyboard',
    'inputmode': 'numeric'
  }
}`,...A.parameters?.docs?.source}}},j=[`Normal`,`Required`,`Disabled`,`RequiredWithLabel`,`RequiredWithCustomMessage`,`WithError`,`WithPlaceholder`,`SizeVariants`,`testActions`,`OnEnterTest`,`LargeText`,`testStyles`,`ValidationList`,`WithStartSection`,`WithEndSection`,`WithStartAndEndSection`,`CustomMobileKeyboard`]}));M();export{A as CustomMobileKeyboard,g as Disabled,w as LargeText,m as Normal,C as OnEnterTest,h as Required,v as RequiredWithCustomMessage,_ as RequiredWithLabel,x as SizeVariants,E as ValidationList,O as WithEndSection,y as WithError,b as WithPlaceholder,k as WithStartAndEndSection,D as WithStartSection,j as __namedExportsOrder,p as default,M as n,u as t,S as testActions,T as testStyles};