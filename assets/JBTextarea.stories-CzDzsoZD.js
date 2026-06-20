import{R as e,r as y}from"./index-D4lIrffr.js";import{u as a}from"./JBTextarea-Dl0M4A9h.js";const ce={title:"Components/form elements/JBTextarea",component:a},s={args:{label:"text",placeholder:"please type here"}},o={args:{label:"required text",message:"focus and unfocus to textarea to see the error",required:!0}},l={args:{label:"with error",message:"message under textarea",error:"error message"}},n={args:{label:"validation",placeholder:"10 char, and no f char",validationList:[{validator:/.{10}/g,message:"you must enter 10 char at least"},{validator:t=>!t.includes("f"),message:"you cant enter f char"}]}},c={args:{label:"text",placeholder:"please hit enter with shift key and without shift key",onEnter:t=>{alert("shift key:"+(t.shiftKey?"true":"false"))}}},i={args:{label:"disabled",placeholder:"this textarea is disabled",disabled:!0}},d={args:{label:"disabled",value:"here is the textarea value",disabled:!0}},u={render:t=>{const[v,oe]=y.useState(""),[le,x]=y.useState("");function ne(r){r.preventDefault()}return e.createElement("div",null,e.createElement("h2",null,"test grow ability"),e.createElement(a,{value:le,onChange:r=>{x(r.target.value)},label:"type to grow",autoHeight:!0}),e.createElement("button",{onClick:()=>{x("")}},"clean"),e.createElement("button",{onClick:()=>{x("sss eeee ggggg".repeat(200))}},"longText"),e.createElement("h3",null,"grow with min and max height"),e.createElement("div",{className:"grow-with-custom-limit"},e.createElement(a,{label:"48 to 120",autoHeight:!0})),e.createElement("h3",null,"test value binding to state"),e.createElement(a,{value:v,onChange:r=>{oe(r.target.value)},label:"see the bottom"}),e.createElement("p",null,v),e.createElement("h3",null,"test events (check console log)"),e.createElement(a,{onKeyDown:ne,onFocus:r=>{console.log(r)},onBlur:r=>{console.log(r)},label:"see value after "}))},args:{label:"text",placeholder:"please type here"}},h={render:t=>e.createElement(a,{...t},e.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"red"},slot:"inline-start-section"})),args:{label:"text",placeholder:"please type here"}},g={render:t=>e.createElement(a,{...t},e.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"red"},slot:"inline-end-section"})),args:{label:"text",placeholder:"please type here"}},m={render:t=>e.createElement(a,{...t},e.createElement("div",{style:{width:"100%",height:"2rem",backgroundColor:"red"},slot:"block-start-section"})),args:{label:"text",placeholder:"please type here"}},p={render:t=>e.createElement(a,{...t},e.createElement("div",{style:{width:"100%",height:"2rem",backgroundColor:"red"},slot:"block-end-section"})),args:{label:"text",placeholder:"please type here"}},b={args:{label:"متن",placeholder:"لطفا وارد کنید"},parameters:{themes:{themeOverride:"rtl"}}};var w,T,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var E,S,k;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'required text',
    message: 'focus and unfocus to textarea to see the error',
    required: true
  }
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var B,V,C;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: 'message under textarea',
    error: 'error message'
  }
}`,...(C=(V=l.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var J,D,G;n.parameters={...n.parameters,docs:{...(J=n.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(G=(D=n.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var K,O,W;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'text',
    placeholder: 'please hit enter with shift key and without shift key',
    onEnter: e => {
      alert("shift key:" + (e.shiftKey ? 'true' : 'false'));
    }
  }
}`,...(W=(O=c.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var q,A,R;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'disabled',
    placeholder: 'this textarea is disabled',
    disabled: true
  }
}`,...(R=(A=i.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var _,H,I;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'disabled',
    value: 'here is the textarea value',
    disabled: true
  }
}`,...(I=(H=d.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var L,N,j;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [textVal, textValSetter] = useState('');
    const [autoGrowTextVal, autoGrowTextValSetter] = useState('');
    function onTextAreaKeydown(e) {
      e.preventDefault();
    }
    return <div>
      <h2>test grow ability</h2>
      <JBTextarea value={autoGrowTextVal} onChange={e => {
        autoGrowTextValSetter(e.target.value);
      }} label="type to grow" autoHeight={true}></JBTextarea>
      <button onClick={() => {
        autoGrowTextValSetter('');
      }}>clean</button>
      <button onClick={() => {
        autoGrowTextValSetter('sss eeee ggggg'.repeat(200));
      }}>longText</button>
      <h3>grow with min and max height</h3>
      <div className="grow-with-custom-limit">
        <JBTextarea label="48 to 120" autoHeight={true}></JBTextarea>
      </div>
      <h3>test value binding to state</h3>
      <JBTextarea value={textVal} onChange={e => {
        textValSetter(e.target.value);
      }} label="see the bottom"></JBTextarea>
      <p>{textVal}</p>
      <h3>test events (check console log)</h3>
      <JBTextarea onKeyDown={onTextAreaKeydown} onFocus={e => {
        console.log(e);
      }} onBlur={e => {
        console.log(e);
      }} label="see value after "></JBTextarea>
    </div>;
  },
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...(j=(N=u.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var F,z,M;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(M=(z=h.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var P,Q,U;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(te=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,se;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: 'متن',
    placeholder: 'لطفا وارد کنید'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(se=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const ie=["Normal","Required","WithError","WithValidation","OnEnterTest","Disabled","DisabledWithValue","ActionTest","InlineStart","InlineEnd","BlockStart","BlockEnd","RTL"],he=Object.freeze(Object.defineProperty({__proto__:null,ActionTest:u,BlockEnd:p,BlockStart:m,Disabled:i,DisabledWithValue:d,InlineEnd:g,InlineStart:h,Normal:s,OnEnterTest:c,RTL:b,Required:o,WithError:l,WithValidation:n,__namedExportsOrder:ie,default:ce},Symbol.toStringTag,{value:"Module"}));export{u as A,he as T,n as W};
