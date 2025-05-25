import{R as e,r as s}from"./index-D4lIrffr.js";import{c as r}from"./JBInput-4hmS1Vhn.js";import"./index-CDaik1Cz.js";import"./jb-validation-BFHHOeHY.js";import"./index-BEepDcv4.js";import"./index-B65NTg4l.js";function ae(){return e.createElement("div",{className:"jb-input-styling-test"},e.createElement("h1",null,"JBInput different Styling test"),e.createElement("div",{className:"cloudy-style"},e.createElement(r,{type:"number"})))}ae.__docgenInfo={description:"",methods:[],displayName:"JBInputStylingTest"};function re(){const t=s.useRef(null),[n,l]=s.useState("09"),[o,E]=s.useState(0);return s.useEffect(()=>{t.current.focus()},[]),e.createElement("div",{style:{direction:"rtl"}},e.createElement(r,{ref:t,value:n,onKeyup:a=>l(a.target.value),onKeydown:a=>{console.log(a)},label:"تست تایپ"}),e.createElement("span",null,"value:"),e.createElement("input",{value:n,onChange:a=>l(a.target.value)}),e.createElement("h3",null,"test events"),e.createElement(r,{onEnter:()=>{alert("you press Enter")},label:"تست تایپ"}),e.createElement("h3",null,"number input test"),e.createElement("h4",null,"step:2, Decimalpecission:4"),"y",e.createElement(r,{type:"number",label:"عدد اعشاری",numberFieldParameter:{step:2,decimalPrecision:4,invalidNumberReplacement:""}}),e.createElement(r,{value:o,onChange:a=>{E(a.target.value)},type:"number",label:"عدد عشاری",numberFieldParameter:{step:2,decimalPrecision:4,invalidNumberReplacement:""}}),e.createElement("h3",null,"number after change event"),e.createElement("h4",null,o))}re.__docgenInfo={description:"",methods:[],displayName:"JBInputTest"};function f(t){const n=[{validator:t.inputRegex,message:t.inputMessage}],l=[{validator:t.passwordRegex,message:t.passwordMessage}],o=[{validator:t.emailRegex,message:t.emailMessage},{validator:({displayValue:le,value:v})=>v.includes("yahoo")?"you cant enter yahoo email9":!0,message:"email must be gmail"},{validator:({displayValue:le,value:v})=>new Promise(w=>{setTimeout(()=>{v.includes("outlook")&&w("you cant enter outlook email"),w(!0)},3e3)}),message:"outlook doesn't respond",defer:!0}],E=[{validator:t.mobileRegex,message:t.mobileMessage}],a=s.useRef();function se(){a.current&&console.log(a.current.validation.result)}return e.createElement("div",{style:{direction:"rtl"}},e.createElement(r,{label:"ورودی",validationList:n}),e.createElement(r,{ref:a,label:"رمز",validationList:l}),e.createElement(r,{label:"ایمیل",validationList:o,message:"enter outlook and see async validation result after 3sec"}),e.createElement(r,{label:"شماره موبایل",validationList:E}),e.createElement(r,{label:"پسورد",validationList:l,type:"password"}),e.createElement("button",{onClick:se},"log password validation(see console)"))}try{f.displayName="JBInputValidationList",f.__docgenInfo={description:"",displayName:"JBInputValidationList",props:{inputRegex:{defaultValue:null,description:"",name:"inputRegex",required:!0,type:{name:"RegExp"}},inputMessage:{defaultValue:null,description:"",name:"inputMessage",required:!0,type:{name:"string"}},passwordRegex:{defaultValue:null,description:"",name:"passwordRegex",required:!0,type:{name:"RegExp"}},passwordMessage:{defaultValue:null,description:"",name:"passwordMessage",required:!0,type:{name:"string"}},emailRegex:{defaultValue:null,description:"",name:"emailRegex",required:!0,type:{name:"RegExp"}},emailMessage:{defaultValue:null,description:"",name:"emailMessage",required:!0,type:{name:"string"}},mobileRegex:{defaultValue:null,description:"",name:"mobileRegex",required:!0,type:{name:"RegExp"}},mobileMessage:{defaultValue:null,description:"",name:"mobileMessage",required:!0,type:{name:"string"}}}}}catch{}const ue={title:"Components/form elements/Inputs/JBInput",component:r},i={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",disabled:!1}},c={args:{label:"متن ساختگی جهت نمایش در لیبل برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد",message:"متن ساختگی جهت نمایش در پیام برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد"}},d={args:{label:"has error message",message:"simple hint message",error:"error message",validationList:[{validator:/^.{3,}$/g,message:"you must enter at least 3 characters"}],type:"password"}},m={args:{label:"with placeholder",placeholder:"test placeholder"}},u={render:()=>e.createElement(re,null)},p={render:()=>e.createElement(ae,null)},g={render:t=>e.createElement(f,{...t}),args:{inputRegex:/^.{8,}$/g,inputMessage:"ورودی باید حداقل 8 کارکتر باشد",passwordRegex:/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g,passwordMessage:"رمز باید حداقل 8 کارکتر و حداقل شامل یک حرف انگلیسی و حداقل شامل یک عدد باشد",emailRegex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/g,emailMessage:"آدرس ایمیل معتبر نیست ",mobileRegex:/^(\+98|0|0098)?9\d{9}$/g,mobileMessage:"شماره موبایل معتبر نیست "}},h={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})}},b={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})}},y={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement(s.Fragment,null,e.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}),e.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}))}},x={args:{label:"number keyboard",inputmode:"numeric"}};var R,S,V;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    disabled: false
  }
}`,...(V=(S=i.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var M,I,k;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'متن ساختگی جهت نمایش در لیبل برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد',
    message: 'متن ساختگی جهت نمایش در پیام برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد'
  }
}`,...(k=(I=c.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var L,B,C;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var J,_,N;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'with placeholder',
    placeholder: 'test placeholder'
  }
}`,...(N=(_=m.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var W,$,q;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <JBInputTest></JBInputTest>
}`,...(q=($=u.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var T,P,F;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <JBInputStylingTest />
}`,...(F=(P=p.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var A,K,z;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <JBInputValidationList {...args}></JBInputValidationList>,
  args: {
    inputRegex: /^.{8,}$/g,
    inputMessage: 'ورودی باید حداقل 8 کارکتر باشد',
    passwordRegex: /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g,
    passwordMessage: 'رمز باید حداقل 8 کارکتر و حداقل شامل یک حرف انگلیسی و حداقل شامل یک عدد باشد',
    emailRegex: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/g,
    emailMessage: 'آدرس ایمیل معتبر نیست ',
    mobileRegex: /^(\\+98|0|0098)?9\\d{9}$/g,
    mobileMessage: 'شماره موبایل معتبر نیست '
  }
}`,...(z=(K=g.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var D,j,O;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(O=(j=h.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var G,H,Q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(H=b.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var U,X,Y;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    'label': 'number keyboard',
    'inputmode': 'numeric'
  }
}`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const pe=["Normal","Large","WithError","WithPlaceholder","testActions","testStyles","ValidationList","WithStartSection","WithEndSection","WithStartAndEndSection","CustomMobileKeyboard"];export{x as CustomMobileKeyboard,c as Large,i as Normal,g as ValidationList,b as WithEndSection,d as WithError,m as WithPlaceholder,y as WithStartAndEndSection,h as WithStartSection,pe as __namedExportsOrder,ue as default,u as testActions,p as testStyles};
