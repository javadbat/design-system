import{R as e,r}from"./index-CC6F48bw.js";import{c as a}from"./JBInput-Nhb5gcTM.js";import{o as Ie}from"./JBButton-BsSO-APp.js";import"./index-B4_gk7g0.js";import"./jb-validation-DPnsTO1v.js";import"./index-BsliqPsk.js";import"./index-CXPivJim.js";import"./index-_b1slotr.js";import"./index-Drw24fzo.js";import"./jb-loading-KLGT6U3e.js";const We={title:"Components/form elements/Inputs/JBInput",component:a},o={args:{label:"label",message:"static text under input show all the time",placeholder:"placeholder",disabled:!1}},i={args:{message:"focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",required:!0}},u={args:{label:"name",message:"focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",required:!0}},m={args:{label:"Required with custom message",message:"focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",required:"you must fill this field to continue"}},d={args:{label:"has error message",message:"simple hint message",error:"error message",validationList:[{validator:/^.{3,}$/g,message:"you must enter at least 3 characters"}],type:"password"}},c={args:{label:"with placeholder",placeholder:"test placeholder"}},p={render:()=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}},e.createElement(a,{label:"xl size",message:"message underneath",size:"xl"}),e.createElement(a,{label:"xl size",placeholder:"placeholder",size:"xl"}),e.createElement(a,{label:"xl size",value:"Value 1234",size:"xl"}),e.createElement(a,{label:"lg size",message:"message underneath",size:"lg"}),e.createElement(a,{label:"lg size",placeholder:"placeholder",size:"lg"}),e.createElement(a,{label:"lg size",value:"Value 1234",size:"lg"}),e.createElement(a,{label:"md size",message:"message underneath",size:"md"}),e.createElement(a,{label:"md size",placeholder:"placeholder",size:"md"}),e.createElement(a,{label:"md size",value:"Value 1234",size:"md"}),e.createElement(a,{label:"sm size",message:"message underneath",size:"sm"}),e.createElement(a,{label:"sm size",placeholder:"placeholder",size:"sm"}),e.createElement(a,{label:"sm size",value:"Value 1234",size:"sm"}),e.createElement(a,{label:"xs size",message:"message underneath",size:"xs"}),e.createElement(a,{label:"xs size",placeholder:"placeholder",size:"xs"}),e.createElement(a,{label:"xs size",value:"Value 1234",size:"xs"}))},g={render:()=>{const s=r.useRef(null),[l,n]=r.useState("09");return r.useEffect(()=>{var t;(t=s.current)==null||t.focus()},[]),e.createElement("div",null,e.createElement(a,{ref:s,value:l,onKeyup:t=>n(t.target.value),onKeydown:t=>{console.log(t)},label:"type value",message:"native input and JB Input value must be sync"}),e.createElement("br",null),e.createElement("span",null,"value:"),e.createElement("input",{value:l,onChange:t=>n(t.target.value)}))}},h={args:{label:"enter test",message:"Press Enter to see alert",onEnter:()=>{alert("you press Enter")}}},b={args:{label:"large text to test what will happen if we set long text as an label to input",message:"long message text to test what happen we we set long message as an message prop. you can also try responsiveness control to see what happen in mobile or tablet size"}},v={render:()=>e.createElement("div",{className:"jb-input-styling-test"},e.createElement("h1",null,"JBInput different Styling test"),e.createElement("div",{className:"cloudy-style"},e.createElement(a,null)),e.createElement("a",{href:"https://github.com/javadbat/jb-input/blob/main/stories/styles/styles.css",target:"_blank"},"see css styles here"))},x={render:s=>{const l=[{validator:s.inputRegex,message:s.inputMessage}],n=[{validator:s.passwordRegex,message:s.passwordMessage}],t=[{validator:s.emailRegex,message:s.emailMessage},{validator:({displayValue:ze,value:B})=>B.includes("yahoo")?"you cant enter yahoo email9":!0,message:"email must be gmail"},{validator:({displayValue:ze,value:B})=>new Promise(E=>{setTimeout(()=>{B.includes("outlook")&&E("you cant enter outlook email"),E(!0)},3e3)}),message:"outlook doesn't respond",defer:!0}],ye=[{validator:s.mobileRegex,message:s.mobileMessage}],I=r.useRef(null);function fe(){I.current&&console.log(I.current.validation.result)}return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"}},e.createElement(a,{label:"input",validationList:l}),e.createElement(a,{label:"email",validationList:t,message:"enter outlook and see async validation result after 3sec"}),e.createElement(a,{label:"phone number",validationList:ye,message:"you can use jb-mobile-input for better experience"}),e.createElement(a,{ref:I,label:"password",validationList:n}),e.createElement(Ie,{onClick:fe},"log password validation(see console)"))},args:{inputRegex:/^.{8,}$/g,inputMessage:"you must enter 8 char at least",passwordRegex:/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g,passwordMessage:"password must include one word one number and at least 8 char long",emailRegex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/g,emailMessage:"email is not valid",mobileRegex:/^(\+98|0|0098)?9\d{9}$/g,mobileMessage:"mobile number is not valid"}},w={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})}},y={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})}},f={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement(r.Fragment,null,e.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}),e.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}))}},z={args:{label:"number keyboard",inputmode:"numeric"}};var J,V,S;o.parameters={...o.parameters,docs:{...(J=o.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'placeholder',
    disabled: false
  }
}`,...(S=(V=o.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var k,R,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: true
  }
}`,...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var M,L,W;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "name",
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: true
  }
}`,...(W=(L=u.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var q,$,j;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Required with custom message",
    message: "focus on input write nothing then unfocus(blur) the input and see error message. then write something to make message disappear",
    required: "you must fill this field to continue"
  }
}`,...(j=($=m.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var T,D,K;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(K=(D=d.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var N,P,A;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'with placeholder',
    placeholder: 'test placeholder'
  }
}`,...(A=(P=c.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var _,F,O;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(F=p.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var G,H,Q;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(H=g.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: "enter test",
    message: 'Press Enter to see alert',
    onEnter: () => {
      alert('you press Enter');
    }
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'large text to test what will happen if we set long text as an label to input',
    message: 'long message text to test what happen we we set long message as an message prop. you can also try responsiveness control to see what happen in mobile or tablet size'
  }
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,te,re;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="jb-input-styling-test">
      <h1>JBInput different Styling test</h1>
      <div className="cloudy-style">
        <JBInput />
      </div>
      <a href='https://github.com/javadbat/jb-input/blob/main/stories/styles/styles.css' target='_blank'>see css styles here</a>
    </div>
}`,...(re=(te=v.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var le,ne,oe;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(oe=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,ue,me;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(me=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var de,ce,pe;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ge,he,be;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(be=(he=f.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ve,xe,we;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    'label': 'number keyboard',
    'inputmode': 'numeric'
  }
}`,...(we=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};const qe=["Normal","Required","RequiredWithLabel","RequiredWithCustomMessage","WithError","WithPlaceholder","SizeVariants","testActions","OnEnterTest","LargeText","testStyles","ValidationList","WithStartSection","WithEndSection","WithStartAndEndSection","CustomMobileKeyboard"];export{z as CustomMobileKeyboard,b as LargeText,o as Normal,h as OnEnterTest,i as Required,m as RequiredWithCustomMessage,u as RequiredWithLabel,p as SizeVariants,x as ValidationList,y as WithEndSection,d as WithError,c as WithPlaceholder,f as WithStartAndEndSection,w as WithStartSection,qe as __namedExportsOrder,We as default,g as testActions,v as testStyles};
