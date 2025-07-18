import{r as b,R as e}from"./index-D4lIrffr.js";import{u as a}from"./JBTextarea-wd6NUcf9.js";import"./jb-validation-BFHHOeHY.js";import"./index-DERdVVTI.js";import"./index-B65NTg4l.js";function M(r){const[u,Q]=b.useState(""),[U,g]=b.useState("");function X(t){t.preventDefault()}return e.createElement("div",null,e.createElement("h2",null,"test grow ability"),e.createElement(a,{value:U,onChange:t=>{g(t.target.value)},label:"type to grow",autoHeight:!0}),e.createElement("button",{onClick:()=>{g("")}},"clean"),e.createElement("button",{onClick:()=>{g("sss eeee ggggg".repeat(200))}},"longText"),e.createElement("h3",null,"grow with min and max height"),e.createElement("div",{className:"grow-with-custom-limit"},e.createElement(a,{label:"48 to 120",autoHeight:!0})),e.createElement("h3",null,"test value binding to state"),e.createElement(a,{value:u,onChange:t=>{Q(t.target.value)},label:"مشاهده در پایین"}),e.createElement("p",null,u),e.createElement("h3",null,"test events (check console log)"),e.createElement(a,{onKeydown:X,onFocus:t=>{console.log(t)},onBlur:t=>{console.log(t)},label:"مشاهده در پایین"}))}M.propTypes={};const te={title:"Components/form elements/JBTextarea",component:a},s={args:{label:"text",placeholder:"please type here"}},o={args:{label:"with error",message:"message under textarea",error:"error message"}},l={args:{label:"validation",placeholder:"10 char, and no f char",validationList:[{validator:/.{10}/g,message:"you must enter 10 char at least"},{validator:r=>!r.includes("f"),message:"you cant enter f char"}]}},n={args:{label:"text",placeholder:"please hit enter with shift key and without shift key",onEnter:r=>{alert("shift key:"+(r.shiftKey?"true":"false"))}}},c={render:r=>e.createElement(M,{...r}),args:{label:"text",placeholder:"please type here"}},i={render:r=>e.createElement(a,{...r},e.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"red"},slot:"inline-start-section"})),args:{label:"text",placeholder:"please type here"}},d={render:r=>e.createElement(a,{...r},e.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"red"},slot:"inline-end-section"})),args:{label:"text",placeholder:"please type here"}},p={render:r=>e.createElement(a,{...r},e.createElement("div",{style:{width:"100%",height:"2rem",backgroundColor:"red"},slot:"block-start-section"})),args:{label:"text",placeholder:"please type here"}},m={render:r=>e.createElement(a,{...r},e.createElement("div",{style:{width:"100%",height:"2rem",backgroundColor:"red"},slot:"block-end-section"})),args:{label:"text",placeholder:"please type here"}},h={args:{label:"متن",placeholder:"لطفا وارد کنید"},parameters:{themes:{themeOverride:"rtl"}}};var x,y,E;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...(E=(y=s.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var v,f,k;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: 'message under textarea',
    error: 'error message'
  }
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var w,T,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(T=l.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var B,C,J;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'text',
    placeholder: 'please hit enter with shift key and without shift key',
    onEnter: e => {
      alert("shift key:" + (e.shiftKey ? 'true' : 'false'));
    }
  }
}`,...(J=(C=n.parameters)==null?void 0:C.docs)==null?void 0:J.source}}};var A,V,O;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <JBTextAreaTestPage {...args}></JBTextAreaTestPage>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var I,K,L;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(L=(K=i.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var R,W,N;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(W=d.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var P,G,H;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <JBTextarea {...args}>
    <div style={{
      width: '100%',
      height: '2rem',
      backgroundColor: 'red'
    }} slot="block-start-section"></div>
  </JBTextarea>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var _,D,F;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <JBTextarea {...args}>
    <div style={{
      width: '100%',
      height: '2rem',
      backgroundColor: 'red'
    }} slot="block-end-section"></div>
  </JBTextarea>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var j,q,z;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'متن',
    placeholder: 'لطفا وارد کنید'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(z=(q=h.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const ae=["Normal","WithError","WithValidation","OnEnterTest","ActionTest","InlineStart","InlineEnd","BlockStart","BlockEnd","RTL"];export{c as ActionTest,m as BlockEnd,p as BlockStart,d as InlineEnd,i as InlineStart,s as Normal,n as OnEnterTest,h as RTL,o as WithError,l as WithValidation,ae as __namedExportsOrder,te as default};
