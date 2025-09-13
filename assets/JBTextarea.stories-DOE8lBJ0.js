import{r as v,R as e}from"./index-0yr9KlQE.js";import{u as t}from"./JBTextarea-Df4AmHff.js";import"./jb-validation-BFHHOeHY.js";import"./index-_cW7E40i.js";import"./index-Dsu68ezD.js";function re(r){const[x,ae]=v.useState(""),[te,b]=v.useState("");function se(a){a.preventDefault()}return e.createElement("div",null,e.createElement("h2",null,"test grow ability"),e.createElement(t,{value:te,onChange:a=>{b(a.target.value)},label:"type to grow",autoHeight:!0}),e.createElement("button",{onClick:()=>{b("")}},"clean"),e.createElement("button",{onClick:()=>{b("sss eeee ggggg".repeat(200))}},"longText"),e.createElement("h3",null,"grow with min and max height"),e.createElement("div",{className:"grow-with-custom-limit"},e.createElement(t,{label:"48 to 120",autoHeight:!0})),e.createElement("h3",null,"test value binding to state"),e.createElement(t,{value:x,onChange:a=>{ae(a.target.value)},label:"مشاهده در پایین"}),e.createElement("p",null,x),e.createElement("h3",null,"test events (check console log)"),e.createElement(t,{onKeydown:se,onFocus:a=>{console.log(a)},onBlur:a=>{console.log(a)},label:"مشاهده در پایین"}))}re.propTypes={};const de={title:"Components/form elements/JBTextarea",component:t},s={args:{label:"text",placeholder:"please type here"}},l={args:{label:"with error",message:"message under textarea",error:"error message"}},o={args:{label:"validation",placeholder:"10 char, and no f char",validationList:[{validator:/.{10}/g,message:"you must enter 10 char at least"},{validator:r=>!r.includes("f"),message:"you cant enter f char"}]}},n={args:{label:"text",placeholder:"please hit enter with shift key and without shift key",onEnter:r=>{alert("shift key:"+(r.shiftKey?"true":"false"))}}},c={args:{label:"disabled",placeholder:"this textarea is disabled",disabled:!0}},i={args:{label:"disabled",value:"here is the textarea value",disabled:!0}},d={render:r=>e.createElement(re,{...r}),args:{label:"text",placeholder:"please type here"}},p={render:r=>e.createElement(t,{...r},e.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"red"},slot:"inline-start-section"})),args:{label:"text",placeholder:"please type here"}},m={render:r=>e.createElement(t,{...r},e.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"red"},slot:"inline-end-section"})),args:{label:"text",placeholder:"please type here"}},h={render:r=>e.createElement(t,{...r},e.createElement("div",{style:{width:"100%",height:"2rem",backgroundColor:"red"},slot:"block-start-section"})),args:{label:"text",placeholder:"please type here"}},u={render:r=>e.createElement(t,{...r},e.createElement("div",{style:{width:"100%",height:"2rem",backgroundColor:"red"},slot:"block-end-section"})),args:{label:"text",placeholder:"please type here"}},g={args:{label:"متن",placeholder:"لطفا وارد کنید"},parameters:{themes:{themeOverride:"rtl"}}};var y,E,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...(f=(E=s.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var k,w,T;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: 'message under textarea',
    error: 'error message'
  }
}`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var S,B,C;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(B=o.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var J,V,A;n.parameters={...n.parameters,docs:{...(J=n.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'text',
    placeholder: 'please hit enter with shift key and without shift key',
    onEnter: e => {
      alert("shift key:" + (e.shiftKey ? 'true' : 'false'));
    }
  }
}`,...(A=(V=n.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var W,D,O;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'disabled',
    placeholder: 'this textarea is disabled',
    disabled: true
  }
}`,...(O=(D=c.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var I,K,L;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'disabled',
    value: 'here is the textarea value',
    disabled: true
  }
}`,...(L=(K=i.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var R,N,P;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <JBTextAreaTestPage {...args}></JBTextAreaTestPage>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...(P=(N=d.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var G,H,_;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(_=(H=p.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var F,j,q;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,M,Q;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Q=(M=h.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,X,Y;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'متن',
    placeholder: 'لطفا وارد کنید'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const pe=["Normal","WithError","WithValidation","OnEnterTest","Disabled","DisabledWithValue","ActionTest","InlineStart","InlineEnd","BlockStart","BlockEnd","RTL"];export{d as ActionTest,u as BlockEnd,h as BlockStart,c as Disabled,i as DisabledWithValue,m as InlineEnd,p as InlineStart,s as Normal,n as OnEnterTest,g as RTL,l as WithError,o as WithValidation,pe as __namedExportsOrder,de as default};
