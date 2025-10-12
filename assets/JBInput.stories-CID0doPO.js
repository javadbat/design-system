import{R as e,r}from"./index-DhY--VwN.js";import{c as s}from"./JBInput-D8SN9Ev2.js";import{o as ye}from"./JBButton-CoFYeS6_.js";import"./index-lwRhtS7B.js";import"./jb-validation-BFHHOeHY.js";import"./index-C-kj9kL4.js";import"./index-DA-aheCX.js";import"./index-NH_qbYOC.js";import"./index-BMrwitbN.js";import"./jb-loading-Bke36SbW.js";const Je={title:"Components/form elements/Inputs/JBInput",component:s},l={args:{label:"label",message:"static text under input show all the time",placeholder:"placeholder",disabled:!1}},i={args:{message:"focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",required:!0}},u={args:{label:"name",message:"focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",required:!0}},c={args:{label:"Required with custom message",message:"focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",required:"you must fill this field to continue"}},d={args:{label:"has error message",message:"simple hint message",error:"error message",validationList:[{validator:/^.{3,}$/g,message:"you must enter at least 3 characters"}],type:"password"}},m={args:{label:"with placeholder",placeholder:"test placeholder"}},p={render:()=>{const t=r.useRef(null),[o,n]=r.useState("09");return r.useEffect(()=>{var a;(a=t.current)==null||a.focus()},[]),e.createElement("div",null,e.createElement(s,{ref:t,value:o,onKeyup:a=>n(a.target.value),onKeydown:a=>{console.log(a)},label:"type value",message:"native input and JB Input value must be sync"}),e.createElement("br",null),e.createElement("span",null,"value:"),e.createElement("input",{value:o,onChange:a=>n(a.target.value)}))}},g={args:{label:"enter test",message:"Press Enter to see alert",onEnter:()=>{alert("you press Enter")}}},h={args:{label:"large text to test what will happen if we set long text as an label to input",message:"long message text to test what happen we we set long message as an message prop. you can also try responsiveness control to see what happen in mobile or tablet size"}},b={render:()=>e.createElement("div",{className:"jb-input-styling-test"},e.createElement("h1",null,"JBInput different Styling test"),e.createElement("div",{className:"cloudy-style"},e.createElement(s,null)),e.createElement("a",{href:"https://github.com/javadbat/jb-input/blob/main/stories/styles/styles.css",target:"_blank"},"see css styles here"))},v={render:t=>{const o=[{validator:t.inputRegex,message:t.inputMessage}],n=[{validator:t.passwordRegex,message:t.passwordMessage}],a=[{validator:t.emailRegex,message:t.emailMessage},{validator:({displayValue:we,value:k})=>k.includes("yahoo")?"you cant enter yahoo email9":!0,message:"email must be gmail"},{validator:({displayValue:we,value:k})=>new Promise(R=>{setTimeout(()=>{k.includes("outlook")&&R("you cant enter outlook email"),R(!0)},3e3)}),message:"outlook doesn't respond",defer:!0}],be=[{validator:t.mobileRegex,message:t.mobileMessage}],E=r.useRef(null);function ve(){E.current&&console.log(E.current.validation.result)}return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"}},e.createElement(s,{label:"input",validationList:o}),e.createElement(s,{label:"email",validationList:a,message:"enter outlook and see async validation result after 3sec"}),e.createElement(s,{label:"phone number",validationList:be,message:"you can use jb-mobile-input for better experience"}),e.createElement(s,{ref:E,label:"password",validationList:n}),e.createElement(ye,{onClick:ve},"log password validation(see console)"))},args:{inputRegex:/^.{8,}$/g,inputMessage:"you must enter 8 char at least",passwordRegex:/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g,passwordMessage:"password must include one word one number and at least 8 char long",emailRegex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/g,emailMessage:"email is not valid",mobileRegex:/^(\+98|0|0098)?9\d{9}$/g,mobileMessage:"mobile number is not valid"}},w={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})}},y={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})}},f={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement(r.Fragment,null,e.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}),e.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}))}},x={args:{label:"number keyboard",inputmode:"numeric"}};var S,V,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'placeholder',
    disabled: false
  }
}`,...(I=(V=l.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var B,C,J;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: true
  }
}`,...(J=(C=i.parameters)==null?void 0:C.docs)==null?void 0:J.source}}};var M,L,W;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "name",
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: true
  }
}`,...(W=(L=u.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var q,$,j;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Required with custom message",
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: "you must fill this field to continue"
  }
}`,...(j=($=c.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var D,K,N;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(K=d.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var P,T,z;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'with placeholder',
    placeholder: 'test placeholder'
  }
}`,...(z=(T=m.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var A,_,F;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(F=(_=p.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var O,G,H;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "enter test",
    message: 'Press Enter to see alert',
    onEnter: () => {
      alert('you press Enter');
    }
  }
}`,...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var Q,U,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'large text to test what will happen if we set long text as an label to input',
    message: 'long message text to test what happen we we set long message as an message prop. you can also try responsiveness control to see what happen in mobile or tablet size'
  }
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="jb-input-styling-test">
      <h1>JBInput different Styling test</h1>
      <div className="cloudy-style">
        <JBInput />
      </div>
      <a href='https://github.com/javadbat/jb-input/blob/main/stories/styles/styles.css' target='_blank'>see css styles here</a>
    </div>
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,se;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,oe,ne;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ne=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,ie,ue;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var ce,de,me;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(de=f.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ge,he;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    'label': 'number keyboard',
    'inputmode': 'numeric'
  }
}`,...(he=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};const Me=["Normal","Required","RequiredWithLabel","RequiredWithCustomMessage","WithError","WithPlaceholder","testActions","OnEnterTest","LargeText","testStyles","ValidationList","WithStartSection","WithEndSection","WithStartAndEndSection","CustomMobileKeyboard"];export{x as CustomMobileKeyboard,h as LargeText,l as Normal,g as OnEnterTest,i as Required,c as RequiredWithCustomMessage,u as RequiredWithLabel,v as ValidationList,y as WithEndSection,d as WithError,m as WithPlaceholder,f as WithStartAndEndSection,w as WithStartSection,Me as __namedExportsOrder,Je as default,p as testActions,b as testStyles};
