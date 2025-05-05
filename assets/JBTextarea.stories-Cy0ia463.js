import{r as p,R as e}from"./index-D4lIrffr.js";import{n as t}from"./JBTextarea-DP-OvKku.js";import"./jb-validation-BFHHOeHY.js";import"./index-B65NTg4l.js";function i(a){const[u,C]=p.useState(""),[J,m]=p.useState("");function L(r){r.preventDefault()}return e.createElement("div",null,e.createElement("h2",null,"test grow ability"),e.createElement(t,{value:J,onChange:r=>{m(r.target.value)},label:"type to grow",autoHeight:!0}),e.createElement("button",{onClick:()=>{m("")}},"clean"),e.createElement("button",{onClick:()=>{m("sss eeee ggggg".repeat(200))}},"longText"),e.createElement("h3",null,"grow with min and max height"),e.createElement("div",{className:"grow-with-custom-limit"},e.createElement(t,{label:"48 to 120",autoHeight:!0})),e.createElement("h3",null,"test value binding to state"),e.createElement(t,{value:u,onChange:r=>{C(r.target.value)},label:"مشاهده در پایین"}),e.createElement("p",null,u),e.createElement("h3",null,"test events (check console log)"),e.createElement(t,{onKeydown:L,onFocus:r=>{console.log(r)},onBlur:r=>{console.log(r)},label:"مشاهده در پایین"}))}i.propTypes={};i.__docgenInfo={description:"",methods:[],displayName:"JBTextAreaTestPage"};const _={title:"Components/form elements/JBTextarea",component:t},o={args:{label:"text",placeholder:"please type here"}},s={args:{label:"with error",message:"message under textarea",error:"error message"}},l={args:{label:"validation",placeholder:"10 char, and no f char",validationList:[{validator:/.{10}/g,message:"you must enter 10 char at least"},{validator:a=>!a.includes("f"),message:"you cant enter f char"}]}},n={render:a=>e.createElement(i,{...a}),args:{label:"text",placeholder:"please type here"}},c={args:{label:"متن",placeholder:"لطفا وارد کنید"},parameters:{themes:{themeOverride:"rtl"}}};var d,g,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,x,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: 'message under textarea',
    error: 'error message'
  }
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,E,T;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'validation',
    placeholder: '10 char, and no f char',
    validationList: [{
      validator: /.{10}/g,
      message: "you must enter 10 char at least"
    }, {
      validator: value => {
        if (value.includes("f")) {
          return false;
        }
        return true;
      },
      message: "you cant enter f char"
    }]
  }
}`,...(T=(E=l.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var y,w,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <JBTextAreaTestPage {...args}></JBTextAreaTestPage>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var A,B,V;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'متن',
    placeholder: 'لطفا وارد کنید'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(V=(B=c.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const k=["Normal","WithError","WithValidation","ActionTest","RTL"];export{n as ActionTest,o as Normal,c as RTL,s as WithError,l as WithValidation,k as __namedExportsOrder,_ as default};
