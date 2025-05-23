import{r as u,R as e}from"./index-D4lIrffr.js";import{o as a}from"./JBTextarea-DjneDRhx.js";import"./jb-validation-BFHHOeHY.js";import"./index-B65NTg4l.js";function p(t){const[g,W]=u.useState(""),[_,m]=u.useState("");function O(r){r.preventDefault()}return e.createElement("div",null,e.createElement("h2",null,"test grow ability"),e.createElement(a,{value:_,onChange:r=>{m(r.target.value)},label:"type to grow",autoHeight:!0}),e.createElement("button",{onClick:()=>{m("")}},"clean"),e.createElement("button",{onClick:()=>{m("sss eeee ggggg".repeat(200))}},"longText"),e.createElement("h3",null,"grow with min and max height"),e.createElement("div",{className:"grow-with-custom-limit"},e.createElement(a,{label:"48 to 120",autoHeight:!0})),e.createElement("h3",null,"test value binding to state"),e.createElement(a,{value:g,onChange:r=>{W(r.target.value)},label:"مشاهده در پایین"}),e.createElement("p",null,g),e.createElement("h3",null,"test events (check console log)"),e.createElement(a,{onKeydown:O,onFocus:r=>{console.log(r)},onBlur:r=>{console.log(r)},label:"مشاهده در پایین"}))}p.propTypes={};p.__docgenInfo={description:"",methods:[],displayName:"JBTextAreaTestPage"};const F={title:"Components/form elements/JBTextarea",component:a},s={args:{label:"text",placeholder:"please type here"}},o={args:{label:"with error",message:"message under textarea",error:"error message"}},l={args:{label:"validation",placeholder:"10 char, and no f char",validationList:[{validator:/.{10}/g,message:"you must enter 10 char at least"},{validator:t=>!t.includes("f"),message:"you cant enter f char"}]}},n={render:t=>e.createElement(p,{...t}),args:{label:"text",placeholder:"please type here"}},c={render:t=>e.createElement(a,{...t},e.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"red"},slot:"inline-start-section"})),args:{label:"text",placeholder:"please type here"}},i={render:t=>e.createElement(a,{...t},e.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"red"},slot:"inline-end-section"})),args:{label:"text",placeholder:"please type here"}},d={args:{label:"متن",placeholder:"لطفا وارد کنید"},parameters:{themes:{themeOverride:"rtl"}}};var h,x,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var b,E,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: 'message under textarea',
    error: 'error message'
  }
}`,...(y=(E=o.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var T,f,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var S,B,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <JBTextAreaTestPage {...args}></JBTextAreaTestPage>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...(C=(B=n.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var J,k,A;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <JBTextarea {...args}>
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'red'
    }} slot="inline-start-section"></div>
  </JBTextarea>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var V,I,L;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <JBTextarea {...args}>
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'red'
    }} slot="inline-end-section"></div>
  </JBTextarea>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...(L=(I=i.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var N,P,R;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'متن',
    placeholder: 'لطفا وارد کنید'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const j=["Normal","WithError","WithValidation","ActionTest","InlineStart","InlineEnd","RTL"];export{n as ActionTest,i as InlineEnd,c as InlineStart,s as Normal,d as RTL,o as WithError,l as WithValidation,j as __namedExportsOrder,F as default};
