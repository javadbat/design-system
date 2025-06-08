import{r as g,R as e}from"./index-D4lIrffr.js";import{u as a}from"./JBTextarea-BiSg6oOb.js";import"./jb-validation-BFHHOeHY.js";import"./index-DERdVVTI.js";import"./index-B65NTg4l.js";function h(r){const[u,G]=g.useState(""),[H,p]=g.useState("");function D(t){t.preventDefault()}return e.createElement("div",null,e.createElement("h2",null,"test grow ability"),e.createElement(a,{value:H,onChange:t=>{p(t.target.value)},label:"type to grow",autoHeight:!0}),e.createElement("button",{onClick:()=>{p("")}},"clean"),e.createElement("button",{onClick:()=>{p("sss eeee ggggg".repeat(200))}},"longText"),e.createElement("h3",null,"grow with min and max height"),e.createElement("div",{className:"grow-with-custom-limit"},e.createElement(a,{label:"48 to 120",autoHeight:!0})),e.createElement("h3",null,"test value binding to state"),e.createElement(a,{value:u,onChange:t=>{G(t.target.value)},label:"مشاهده در پایین"}),e.createElement("p",null,u),e.createElement("h3",null,"test events (check console log)"),e.createElement(a,{onKeydown:D,onFocus:t=>{console.log(t)},onBlur:t=>{console.log(t)},label:"مشاهده در پایین"}))}h.propTypes={};h.__docgenInfo={description:"",methods:[],displayName:"JBTextAreaTestPage"};const Q={title:"Components/form elements/JBTextarea",component:a},s={args:{label:"text",placeholder:"please type here"}},o={args:{label:"with error",message:"message under textarea",error:"error message"}},l={args:{label:"validation",placeholder:"10 char, and no f char",validationList:[{validator:/.{10}/g,message:"you must enter 10 char at least"},{validator:r=>!r.includes("f"),message:"you cant enter f char"}]}},n={args:{label:"text",placeholder:"please hit enter with shift key and without shift key",onEnter:r=>{alert("shift key:"+(r.shiftKey?"true":"false"))}}},c={render:r=>e.createElement(h,{...r}),args:{label:"text",placeholder:"please type here"}},i={render:r=>e.createElement(a,{...r},e.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"red"},slot:"inline-start-section"})),args:{label:"text",placeholder:"please type here"}},d={render:r=>e.createElement(a,{...r},e.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"red"},slot:"inline-end-section"})),args:{label:"text",placeholder:"please type here"}},m={args:{label:"متن",placeholder:"لطفا وارد کنید"},parameters:{themes:{themeOverride:"rtl"}}};var x,y,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,E,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: 'message under textarea',
    error: 'error message'
  }
}`,...(v=(E=o.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var T,w,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var k,B,C;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'text',
    placeholder: 'please hit enter with shift key and without shift key',
    onEnter: e => {
      alert("shift key:" + (e.shiftKey ? 'true' : 'false'));
    }
  }
}`,...(C=(B=n.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var J,A,V;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <JBTextAreaTestPage {...args}></JBTextAreaTestPage>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...(V=(A=c.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var I,O,K;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(K=(O=i.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var L,N,P;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(P=(N=d.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var R,W,_;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'متن',
    placeholder: 'لطفا وارد کنید'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(_=(W=m.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const U=["Normal","WithError","WithValidation","OnEnterTest","ActionTest","InlineStart","InlineEnd","RTL"];export{c as ActionTest,d as InlineEnd,i as InlineStart,s as Normal,n as OnEnterTest,m as RTL,o as WithError,l as WithValidation,U as __namedExportsOrder,Q as default};
