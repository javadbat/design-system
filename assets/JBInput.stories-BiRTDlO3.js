import{R as e,r}from"./index-0yr9KlQE.js";import{c as s}from"./JBInput-CEH-VaoZ.js";import{o as ne}from"./JBButton-CIwdOAfV.js";import"./index-eUDxMLXd.js";import"./jb-validation-BFHHOeHY.js";import"./index-DERdVVTI.js";import"./index-Dsu68ezD.js";import"./jb-loading-DCBhG1VE.js";const be={title:"Components/form elements/Inputs/JBInput",component:s},n={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",disabled:!1}},i={args:{label:"متن ساختگی جهت نمایش در لیبل برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد",message:"متن ساختگی جهت نمایش در پیام برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد"}},d={args:{label:"has error message",message:"simple hint message",error:"error message",validationList:[{validator:/^.{3,}$/g,message:"you must enter at least 3 characters"}],type:"password"}},u={args:{label:"with placeholder",placeholder:"test placeholder"}},c={render:()=>{const t=r.useRef(null),[o,l]=r.useState("09");return r.useEffect(()=>{var a;(a=t.current)==null||a.focus()},[]),e.createElement("div",null,e.createElement(s,{ref:t,value:o,onKeyup:a=>l(a.target.value),onKeydown:a=>{console.log(a)},label:"type value",message:"native input and JB Input value must be sync"}),e.createElement("br",null),e.createElement("span",null,"value:"),e.createElement("input",{value:o,onChange:a=>l(a.target.value)}))}},m={args:{label:"enter test",message:"Press Enter to see alert",onEnter:()=>{alert("you press Enter")}}},p={render:()=>e.createElement("div",{className:"jb-input-styling-test"},e.createElement("h1",null,"JBInput different Styling test"),e.createElement("div",{className:"cloudy-style"},e.createElement(s,null)),e.createElement("a",{href:"https://github.com/javadbat/jb-input/blob/main/stories/styles/styles.css",target:"_blank"},"see css styles here"))},g={render:t=>{const o=[{validator:t.inputRegex,message:t.inputMessage}],l=[{validator:t.passwordRegex,message:t.passwordMessage}],a=[{validator:t.emailRegex,message:t.emailMessage},{validator:({displayValue:le,value:w})=>w.includes("yahoo")?"you cant enter yahoo email9":!0,message:"email must be gmail"},{validator:({displayValue:le,value:w})=>new Promise(f=>{setTimeout(()=>{w.includes("outlook")&&f("you cant enter outlook email"),f(!0)},3e3)}),message:"outlook doesn't respond",defer:!0}],re=[{validator:t.mobileRegex,message:t.mobileMessage}],x=r.useRef(null);function oe(){x.current&&console.log(x.current.validation.result)}return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"}},e.createElement(s,{label:"input",validationList:o}),e.createElement(s,{label:"email",validationList:a,message:"enter outlook and see async validation result after 3sec"}),e.createElement(s,{label:"phone number",validationList:re,message:"you can use jb-mobile-input for better experience"}),e.createElement(s,{ref:x,label:"password",validationList:l}),e.createElement(ne,{onClick:oe},"log password validation(see console)"))},args:{inputRegex:/^.{8,}$/g,inputMessage:"you must enter 8 char at least",passwordRegex:/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g,passwordMessage:"password must include one word one number and at least 8 char long",emailRegex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/g,emailMessage:"email is not valid",mobileRegex:/^(\+98|0|0098)?9\d{9}$/g,mobileMessage:"mobile number is not valid"}},h={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})}},b={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})}},v={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement(r.Fragment,null,e.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}),e.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}))}},y={args:{label:"number keyboard",inputmode:"numeric"}};var E,V,S;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    disabled: false
  }
}`,...(S=(V=n.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var I,k,B;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'متن ساختگی جهت نمایش در لیبل برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد',
    message: 'متن ساختگی جهت نمایش در پیام برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد'
  }
}`,...(B=(k=i.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var R,C,J;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(J=(C=d.parameters)==null?void 0:C.docs)==null?void 0:J.source}}};var M,L,W;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'with placeholder',
    placeholder: 'test placeholder'
  }
}`,...(W=(L=u.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var $,j,D;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(D=(j=c.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var K,N,P;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: "enter test",
    message: 'Press Enter to see alert',
    onEnter: () => {
      alert('you press Enter');
    }
  }
}`,...(P=(N=m.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var A,T,_;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="jb-input-styling-test">
      <h1>JBInput different Styling test</h1>
      <div className="cloudy-style">
        <JBInput />
      </div>
      <a href='https://github.com/javadbat/jb-input/blob/main/stories/styles/styles.css' target='_blank'>see css styles here</a>
    </div>
}`,...(_=(T=p.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var F,O,z;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(O=g.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var q,G,H;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var Q,U,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,se;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    'label': 'number keyboard',
    'inputmode': 'numeric'
  }
}`,...(se=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const ve=["Normal","Large","WithError","WithPlaceholder","testActions","OnEnterTest","testStyles","ValidationList","WithStartSection","WithEndSection","WithStartAndEndSection","CustomMobileKeyboard"];export{y as CustomMobileKeyboard,i as Large,n as Normal,m as OnEnterTest,g as ValidationList,b as WithEndSection,d as WithError,u as WithPlaceholder,v as WithStartAndEndSection,h as WithStartSection,ve as __namedExportsOrder,be as default,c as testActions,p as testStyles};
