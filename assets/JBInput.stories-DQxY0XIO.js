import{R as e,r as f}from"./index-CwcVQgaJ.js";import{d as a}from"./JBInput-ddxJ_STh.js";import{o as Ve}from"./JBButton-CzXHkPk6.js";const Se={title:"Components/form elements/Inputs/JBInput",component:a},r={args:{label:"label",message:"static text under input show all the time",placeholder:"placeholder",disabled:!1}},l={args:{message:"focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",required:!0}},n={args:{label:"disabled input",message:"static text under input show all the time",value:"value",disabled:!0}},o={args:{label:"name",message:"focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",required:!0}},i={args:{label:"Required with custom message",message:"focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",required:"you must fill this field to continue"}},u={args:{label:"has error message",message:"simple hint message",error:"error message",validationList:[{validator:/^.{3,}$/g,message:"you must enter at least 3 characters"}],type:"password"}},d={args:{label:"with placeholder",placeholder:"test placeholder"}},m={render:()=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}},e.createElement(a,{label:"xl size",message:"message underneath",size:"xl"}),e.createElement(a,{label:"xl size",placeholder:"placeholder",size:"xl"}),e.createElement(a,{label:"xl size",value:"Value 1234",size:"xl"}),e.createElement(a,{label:"lg size",message:"message underneath",size:"lg"}),e.createElement(a,{label:"lg size",placeholder:"placeholder",size:"lg"}),e.createElement(a,{label:"lg size",value:"Value 1234",size:"lg"}),e.createElement(a,{label:"md size",message:"message underneath",size:"md"}),e.createElement(a,{label:"md size",placeholder:"placeholder",size:"md"}),e.createElement(a,{label:"md size",value:"Value 1234",size:"md"}),e.createElement(a,{label:"sm size",message:"message underneath",size:"sm"}),e.createElement(a,{label:"sm size",placeholder:"placeholder",size:"sm"}),e.createElement(a,{label:"sm size",value:"Value 1234",size:"sm"}),e.createElement(a,{label:"xs size",message:"message underneath",size:"xs"}),e.createElement(a,{label:"xs size",placeholder:"placeholder",size:"xs"}),e.createElement(a,{label:"xs size",value:"Value 1234",size:"xs"}))},c={render:()=>{const s=f.useRef(null),[z,I]=f.useState("09");return f.useEffect(()=>{var t;(t=s.current)==null||t.focus()},[]),e.createElement("div",null,e.createElement(a,{ref:s,value:z,onKeyup:t=>I(t.target.value),onKeydown:t=>{console.log(t)},label:"type value",message:"native input and JB Input value must be sync"}),e.createElement("br",null),e.createElement("span",null,"value:"),e.createElement("input",{value:z,onChange:t=>I(t.target.value)}))}},p={args:{label:"enter test",message:"Press Enter to see alert",onEnter:()=>{alert("you press Enter")}}},g={args:{label:"large text to test what will happen if we set long text as an label to input",message:"long message text to test what happen we we set long message as an message prop. you can also try responsiveness control to see what happen in mobile or tablet size"}},h={render:()=>e.createElement("div",{className:"jb-input-styling-test"},e.createElement("h1",null,"JBInput different Styling test"),e.createElement("div",{className:"cloudy-style"},e.createElement(a,null)),e.createElement("a",{href:"https://github.com/javadbat/jb-input/blob/main/stories/styles/styles.css",target:"_blank",rel:"noopener"},"see css styles here"))},b={render:s=>{const z=[{validator:s.inputRegex,message:s.inputMessage}],I=[{validator:s.passwordRegex,message:s.passwordMessage}],t=[{validator:s.emailRegex,message:s.emailMessage},{validator:({displayValue:Je,value:E})=>E.includes("yahoo")?"you cant enter yahoo email9":!0,message:"email must be gmail"},{validator:({displayValue:Je,value:E})=>new Promise(J=>{setTimeout(()=>{E.includes("outlook")&&J("you cant enter outlook email"),J(!0)},3e3)}),message:"outlook doesn't respond",defer:!0}],Be=[{validator:s.mobileRegex,message:s.mobileMessage}],B=f.useRef(null);function Ee(){B.current&&console.log(B.current.validation.result)}return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"}},e.createElement(a,{label:"input",validationList:z}),e.createElement(a,{label:"email",validationList:t,message:"enter outlook and see async validation result after 3sec"}),e.createElement(a,{label:"phone number",validationList:Be,message:"you can use jb-mobile-input for better experience"}),e.createElement(a,{ref:B,label:"password",validationList:I}),e.createElement(Ve,{onClick:Ee},"log password validation(see console)"))},args:{inputRegex:/^.{8,}$/g,inputMessage:"you must enter 8 char at least",passwordRegex:/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g,passwordMessage:"password must include one word one number and at least 8 char long",emailRegex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/g,emailMessage:"email is not valid",mobileRegex:/^(\+98|0|0098)?9\d{9}$/g,mobileMessage:"mobile number is not valid"}},v={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})}},x={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})}},w={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement(f.Fragment,null,e.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}),e.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}))}},y={args:{label:"number keyboard",inputmode:"numeric"}};var V,S,k;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'placeholder',
    disabled: false
  }
}`,...(k=(S=r.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var R,C,M;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: true
  }
}`,...(M=(C=l.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var L,W,q;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'disabled input',
    message: 'static text under input show all the time',
    value: 'value',
    disabled: true
  }
}`,...(q=(W=n.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var j,$,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "name",
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: true
  }
}`,...(D=($=o.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var T,_,N;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Required with custom message",
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: "you must fill this field to continue"
  }
}`,...(N=(_=i.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var P,K,O;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=(K=u.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var A,F,G;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'with placeholder',
    placeholder: 'test placeholder'
  }
}`,...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,Q,U;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,se;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: "enter test",
    message: 'Press Enter to see alert',
    onEnter: () => {
      alert('you press Enter');
    }
  }
}`,...(se=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,re,le;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'large text to test what will happen if we set long text as an label to input',
    message: 'long message text to test what happen we we set long message as an message prop. you can also try responsiveness control to see what happen in mobile or tablet size'
  }
}`,...(le=(re=g.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ne,oe,ie;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div className="jb-input-styling-test">
      <h1>JBInput different Styling test</h1>
      <div className="cloudy-style">
        <JBInput />
      </div>
      <a href='https://github.com/javadbat/jb-input/blob/main/stories/styles/styles.css' target='_blank' rel="noopener">see css styles here</a>
    </div>
}`,...(ie=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ue,de,me;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(de=b.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ce,pe,ge;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ge=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var he,be,ve;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ve=(be=x.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var xe,we,ye;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(ye=(we=w.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var fe,ze,Ie;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    'label': 'number keyboard',
    'inputmode': 'numeric'
  }
}`,...(Ie=(ze=y.parameters)==null?void 0:ze.docs)==null?void 0:Ie.source}}};const ke=["Normal","Required","Disabled","RequiredWithLabel","RequiredWithCustomMessage","WithError","WithPlaceholder","SizeVariants","testActions","OnEnterTest","LargeText","testStyles","ValidationList","WithStartSection","WithEndSection","WithStartAndEndSection","CustomMobileKeyboard"],Le=Object.freeze(Object.defineProperty({__proto__:null,CustomMobileKeyboard:y,Disabled:n,LargeText:g,Normal:r,OnEnterTest:p,Required:l,RequiredWithCustomMessage:i,RequiredWithLabel:o,SizeVariants:m,ValidationList:b,WithEndSection:x,WithError:u,WithPlaceholder:d,WithStartAndEndSection:w,WithStartSection:v,__namedExportsOrder:ke,default:Se,testActions:c,testStyles:h},Symbol.toStringTag,{value:"Module"}));export{Le as I,r as N};
