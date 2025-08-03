import{R as e,r as s}from"./index-0yr9KlQE.js";import{c as r}from"./JBInput-whJL6lpb.js";import"./index-BCJo01lv.js";import"./jb-validation-BFHHOeHY.js";import"./index-DERdVVTI.js";import"./index-Dsu68ezD.js";function re(){return e.createElement("div",{className:"jb-input-styling-test"},e.createElement("h1",null,"JBInput different Styling test"),e.createElement("div",{className:"cloudy-style"},e.createElement(r,{type:"number"})))}function se(){const t=s.useRef(null),[n,l]=s.useState("09"),[o,y]=s.useState(0);return s.useEffect(()=>{t.current.focus()},[]),e.createElement("div",{style:{direction:"rtl"}},e.createElement(r,{ref:t,value:n,onKeyup:a=>l(a.target.value),onKeydown:a=>{console.log(a)},label:"تست تایپ"}),e.createElement("span",null,"value:"),e.createElement("input",{value:n,onChange:a=>l(a.target.value)}),e.createElement("h3",null,"test events"),e.createElement(r,{onEnter:()=>{alert("you press Enter")},label:"تست تایپ"}),e.createElement("h3",null,"number input test"),e.createElement("h4",null,"step:2, Decimalpecission:4"),"y",e.createElement(r,{type:"number",label:"عدد اعشاری",numberFieldParameter:{step:2,decimalPrecision:4,invalidNumberReplacement:""}}),e.createElement(r,{value:o,onChange:a=>{y(a.target.value)},type:"number",label:"عدد عشاری",numberFieldParameter:{step:2,decimalPrecision:4,invalidNumberReplacement:""}}),e.createElement("h3",null,"number after change event"),e.createElement("h4",null,o))}function le(t){const n=[{validator:t.inputRegex,message:t.inputMessage}],l=[{validator:t.passwordRegex,message:t.passwordMessage}],o=[{validator:t.emailRegex,message:t.emailMessage},{validator:({displayValue:ae,value:x})=>x.includes("yahoo")?"you cant enter yahoo email9":!0,message:"email must be gmail"},{validator:({displayValue:ae,value:x})=>new Promise(w=>{setTimeout(()=>{x.includes("outlook")&&w("you cant enter outlook email"),w(!0)},3e3)}),message:"outlook doesn't respond",defer:!0}],y=[{validator:t.mobileRegex,message:t.mobileMessage}],a=s.useRef();function te(){a.current&&console.log(a.current.validation.result)}return e.createElement("div",{style:{direction:"rtl"}},e.createElement(r,{label:"ورودی",validationList:n}),e.createElement(r,{ref:a,label:"رمز",validationList:l}),e.createElement(r,{label:"ایمیل",validationList:o,message:"enter outlook and see async validation result after 3sec"}),e.createElement(r,{label:"شماره موبایل",validationList:y}),e.createElement(r,{label:"پسورد",validationList:l,type:"password"}),e.createElement("button",{onClick:te},"log password validation(see console)"))}const ue={title:"Components/form elements/Inputs/JBInput",component:r},i={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",disabled:!1}},c={args:{label:"متن ساختگی جهت نمایش در لیبل برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد",message:"متن ساختگی جهت نمایش در پیام برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد"}},d={args:{label:"has error message",message:"simple hint message",error:"error message",validationList:[{validator:/^.{3,}$/g,message:"you must enter at least 3 characters"}],type:"password"}},m={args:{label:"with placeholder",placeholder:"test placeholder"}},u={render:()=>e.createElement(se,null)},p={render:()=>e.createElement(re,null)},g={render:t=>e.createElement(le,{...t}),args:{inputRegex:/^.{8,}$/g,inputMessage:"ورودی باید حداقل 8 کارکتر باشد",passwordRegex:/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g,passwordMessage:"رمز باید حداقل 8 کارکتر و حداقل شامل یک حرف انگلیسی و حداقل شامل یک عدد باشد",emailRegex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/g,emailMessage:"آدرس ایمیل معتبر نیست ",mobileRegex:/^(\+98|0|0098)?9\d{9}$/g,mobileMessage:"شماره موبایل معتبر نیست "}},h={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})}},b={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})}},v={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",children:e.createElement(s.Fragment,null,e.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}),e.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}))}},E={args:{label:"number keyboard",inputmode:"numeric"}};var S,f,R;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    disabled: false
  }
}`,...(R=(f=i.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var k,C,L;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'متن ساختگی جهت نمایش در لیبل برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد',
    message: 'متن ساختگی جهت نمایش در پیام برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد'
  }
}`,...(L=(C=c.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var M,V,I;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(I=(V=d.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var B,J,W;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'with placeholder',
    placeholder: 'test placeholder'
  }
}`,...(W=(J=m.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var $,N,P;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <JBInputTest></JBInputTest>
}`,...(P=(N=u.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var T,F,A;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <JBInputStylingTest />
}`,...(A=(F=p.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var K,z,D;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(D=(z=g.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var _,j,O;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(j=h.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var q,G,H;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    'label': 'number keyboard',
    'inputmode': 'numeric'
  }
}`,...(ee=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const pe=["Normal","Large","WithError","WithPlaceholder","testActions","testStyles","ValidationList","WithStartSection","WithEndSection","WithStartAndEndSection","CustomMobileKeyboard"];export{E as CustomMobileKeyboard,c as Large,i as Normal,g as ValidationList,b as WithEndSection,d as WithError,m as WithPlaceholder,v as WithStartAndEndSection,h as WithStartSection,pe as __namedExportsOrder,ue as default,u as testActions,p as testStyles};
