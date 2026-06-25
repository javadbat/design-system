import{R as i,r as T}from"./index-D4lIrffr.js";import{o as B}from"./JBPinInput-Dn-9zUjk.js";import{J as x}from"./JBPinInputStyleTest-Cjwl55SO.js";const O={title:"Components/form elements/JBPinInput",component:B},e={args:{label:"pin input",message:"please fill the pin",value:""}},r={args:{label:"autofocus",autofocus:!0,value:""}},a={args:{label:"8 digit pin",value:"",charLength:8}},s={args:{label:"with error",message:"simple message",error:"error message",value:""}},t={args:{label:"required",required:!0}},o={render:C=>{const u=T.useRef(null),j=[{validator:l=>l.startsWith("1"),message:"pin input must be start with 1"}];return i.createElement("div",{ref:u},i.createElement(B,{...C,ref:u,validationList:j,onComplete:l=>console.log("complete",l),required:!0,onChange:()=>{console.log("change")}}))},args:{label:"will jump on overflow"}},n={render:()=>i.createElement(x,null)};var c,p,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'pin input',
    message: "please fill the pin",
    value: ""
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,g,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'autofocus',
    autofocus: true,
    value: ""
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,v,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: '8 digit pin',
    value: "",
    charLength: 8
  }
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var S,P,q;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: "simple message",
    error: "error message",
    value: ""
  }
}`,...(q=(P=s.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var w,I,L;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'required',
    required: true
  }
}`,...(L=(I=t.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var y,E,W;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef(null);
    const validationList = [{
      validator: (value: string) => {
        return value.startsWith("1");
      },
      message: "pin input must be start with 1"
    }];
    return <div ref={ref}>
          <JBPinInput {...args} ref={ref} validationList={validationList} onComplete={e => console.log("complete", e)} required onChange={() => {
        console.log("change");
      }} />
        </div>;
  },
  args: {
    label: "will jump on overflow"
  }
}`,...(W=(E=o.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var J,R,_;n.parameters={...n.parameters,docs:{...(J=n.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <JBPinInputStyleTest></JBPinInputStyleTest>
}`,...(_=(R=n.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const A=["Normal","AutoFocus","charLength","WithError","Required","WithValidation","PinInputStyle"],z=Object.freeze(Object.defineProperty({__proto__:null,AutoFocus:r,Normal:e,PinInputStyle:n,Required:t,WithError:s,WithValidation:o,__namedExportsOrder:A,charLength:a,default:O},Symbol.toStringTag,{value:"Module"}));export{z as P,o as W,a as c};
