import{R as e,r as w}from"./index-DwQS_Y10.js";import{d as a}from"./JBInput-D74Vik9B.js";import{o as Ie}from"./JBButton-CgFwNxXH.js";const Be={title:"Components/form elements/Inputs/JBInput",component:a},r={args:{label:"label",message:"static text under input show all the time",placeholder:"placeholder",disabled:!1}},l={args:{message:"focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",required:!0}},n={args:{label:"name",message:"focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",required:!0}},o={args:{label:"Required with custom message",message:"focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",required:"you must fill this field to continue"}},i={args:{label:"has error message",message:"simple hint message",error:"error message",validationList:[{validator:/^.{3,}$/g,message:"you must enter at least 3 characters"}],type:"password"}},u={args:{label:"with placeholder",placeholder:"test placeholder"}},d={render:()=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}},e.createElement(a,{label:"xl size",message:"message underneath",size:"xl"}),e.createElement(a,{label:"xl size",placeholder:"placeholder",size:"xl"}),e.createElement(a,{label:"xl size",value:"Value 1234",size:"xl"}),e.createElement(a,{label:"lg size",message:"message underneath",size:"lg"}),e.createElement(a,{label:"lg size",placeholder:"placeholder",size:"lg"}),e.createElement(a,{label:"lg size",value:"Value 1234",size:"lg"}),e.createElement(a,{label:"md size",message:"message underneath",size:"md"}),e.createElement(a,{label:"md size",placeholder:"placeholder",size:"md"}),e.createElement(a,{label:"md size",value:"Value 1234",size:"md"}),e.createElement(a,{label:"sm size",message:"message underneath",size:"sm"}),e.createElement(a,{label:"sm size",placeholder:"placeholder",size:"sm"}),e.createElement(a,{label:"sm size",value:"Value 1234",size:"sm"}),e.createElement(a,{label:"xs size",message:"message underneath",size:"xs"}),e.createElement(a,{label:"xs size",placeholder:"placeholder",size:"xs"}),e.createElement(a,{label:"xs size",value:"Value 1234",size:"xs"}))},m={render:()=>{const s=w.useRef(null),[f,z]=w.useState("09");return w.useEffect(()=>{var t;(t=s.current)==null||t.focus()},[]),e.createElement("div",null,e.createElement(a,{ref:s,value:f,onKeyup:t=>z(t.target.value),onKeydown:t=>{console.log(t)},label:"type value",message:"native input and JB Input value must be sync"}),e.createElement("br",null),e.createElement("span",null,"value:"),e.createElement("input",{value:f,onChange:t=>z(t.target.value)}))}},c={args:{label:"enter test",message:"Press Enter to see alert",onEnter:()=>{alert("you press Enter")}}},p={args:{label:"large text to test what will happen if we set long text as an label to input",message:"long message text to test what happen we we set long message as an message prop. you can also try responsiveness control to see what happen in mobile or tablet size"}},g={render:()=>e.createElement("div",{className:"jb-input-styling-test"},e.createElement("h1",null,"JBInput different Styling test"),e.createElement("div",{className:"cloudy-style"},e.createElement(a,null)),e.createElement("a",{href:"https://github.com/javadbat/jb-input/blob/main/stories/styles/styles.css",target:"_blank"},"see css styles here"))},h={render:s=>{const f=[{validator:s.inputRegex,message:s.inputMessage}],z=[{validator:s.passwordRegex,message:s.passwordMessage}],t=[{validator:s.emailRegex,message:s.emailMessage},{validator:({displayValue:ze,value:B})=>B.includes("yahoo")?"you cant enter yahoo email9":!0,message:"email must be gmail"},{validator:({displayValue:ze,value:B})=>new Promise(E=>{setTimeout(()=>{B.includes("outlook")&&E("you cant enter outlook email"),E(!0)},3e3)}),message:"outlook doesn't respond",defer:!0}],we=[{validator:s.mobileRegex,message:s.mobileMessage}],I=w.useRef(null);function fe(){I.current&&console.log(I.current.validation.result)}return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"}},e.createElement(a,{label:"input",validationList:f}),e.createElement(a,{label:"email",validationList:t,message:"enter outlook and see async validation result after 3sec"}),e.createElement(a,{label:"phone number",validationList:we,message:"you can use jb-mobile-input for better experience"}),e.createElement(a,{ref:I,label:"password",validationList:z}),e.createElement(Ie,{onClick:fe},"log password validation(see console)"))},args:{inputRegex:/^.{8,}$/g,inputMessage:"you must enter 8 char at least",passwordRegex:/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g,passwordMessage:"password must include one word one number and at least 8 char long",emailRegex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/g,emailMessage:"email is not valid",mobileRegex:/^(\+98|0|0098)?9\d{9}$/g,mobileMessage:"mobile number is not valid"}},b={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})}},v={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})}},x={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement(w.Fragment,null,e.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}),e.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}))}},y={args:{label:"number keyboard",inputmode:"numeric"}};var J,V,S;r.parameters={...r.parameters,docs:{...(J=r.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'placeholder',
    disabled: false
  }
}`,...(S=(V=r.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var k,R,C;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: true
  }
}`,...(C=(R=l.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var M,L,W;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "name",
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: true
  }
}`,...(W=(L=n.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var q,j,$;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Required with custom message",
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: "you must fill this field to continue"
  }
}`,...($=(j=o.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var T,_,D;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(_=i.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var N,P,K;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'with placeholder',
    placeholder: 'test placeholder'
  }
}`,...(K=(P=u.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};var O,A,F;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(A=d.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var G,H,Q;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(H=m.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var U,X,Y;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: "enter test",
    message: 'Press Enter to see alert',
    onEnter: () => {
      alert('you press Enter');
    }
  }
}`,...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'large text to test what will happen if we set long text as an label to input',
    message: 'long message text to test what happen we we set long message as an message prop. you can also try responsiveness control to see what happen in mobile or tablet size'
  }
}`,...(ae=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,te,re;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="jb-input-styling-test">
      <h1>JBInput different Styling test</h1>
      <div className="cloudy-style">
        <JBInput />
      </div>
      <a href='https://github.com/javadbat/jb-input/blob/main/stories/styles/styles.css' target='_blank'>see css styles here</a>
    </div>
}`,...(re=(te=g.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var le,ne,oe;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(oe=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,ue,de;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,ce,pe;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ge,he,be;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(be=(he=x.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ve,xe,ye;y.parameters={...y.parameters,docs:{...(ve=y.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    'label': 'number keyboard',
    'inputmode': 'numeric'
  }
}`,...(ye=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};const Ee=["Normal","Required","RequiredWithLabel","RequiredWithCustomMessage","WithError","WithPlaceholder","SizeVariants","testActions","OnEnterTest","LargeText","testStyles","ValidationList","WithStartSection","WithEndSection","WithStartAndEndSection","CustomMobileKeyboard"],ke=Object.freeze(Object.defineProperty({__proto__:null,CustomMobileKeyboard:y,LargeText:p,Normal:r,OnEnterTest:c,Required:l,RequiredWithCustomMessage:o,RequiredWithLabel:n,SizeVariants:d,ValidationList:h,WithEndSection:v,WithError:i,WithPlaceholder:u,WithStartAndEndSection:x,WithStartSection:b,__namedExportsOrder:Ee,default:Be,testActions:m,testStyles:g},Symbol.toStringTag,{value:"Module"}));export{ke as I,r as N};
