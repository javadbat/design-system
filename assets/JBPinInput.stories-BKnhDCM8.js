import{R as e,r as J}from"./index-CwcVQgaJ.js";import{o as t}from"./JBPinInput-BOuNxx0f.js";import"./jb-validation-AFHFNd1g.js";import"./index-BjRxPyWZ.js";import"./index-BVrqzDik.js";function z(){return e.createElement("div",{className:"pin-input-test-wrapper"},e.createElement("div",{className:"bottom-line-test"},e.createElement("h1",null,"pin input bottom line style test"),e.createElement(t,null),e.createElement("div",null,e.createElement("h3",null,"customize pin input"),e.createElement("p",null," --jb-pin-input-bottom-line-height:10px;"),e.createElement("p",null," --jb-pin-input-bottom-line-border-radius:0px"),e.createElement("p",null," --jb-pin-input-bottom-line-color:black;"),e.createElement("p",null,"--jb-pin-input-bottom-line-color-active:#ececec;"))),e.createElement("div",{className:"bottom-line-display"},e.createElement("h1",null,"pin input bottom line display test"),e.createElement(t,null),e.createElement("div",null,e.createElement("h3",null,"customize pin input"),e.createElement("p",null," --jb-pin-input-bottom-line-height:10px;"),e.createElement("p",null," --jb-pin-input-bottom-line-border-radius:0px"),e.createElement("p",null," --jb-pin-input-bottom-line-color:black;"),e.createElement("p",null,"--jb-pin-input-bottom-line-color-active:#ececec;"))),e.createElement("div",{className:"input-border-display"},e.createElement("h1",null,"pin input border display test"),e.createElement(t,null),e.createElement("div",null,e.createElement("h3",null,"customize pin input"),e.createElement("p",null,"--jb-pin-input-wrapper-border-width:4px;"),e.createElement("p",null,"--jb-pin-input-wrapper-border-color:black"),e.createElement("p",null,"--jb-pin-input-bottom-line-display:none;"),e.createElement("p",null,"--jb-pin-input-wrapper-border-radius:5px;"),e.createElement("p",null,"--jb-pin-input-wrapper-border-color-active:#ececec;"),e.createElement("p",null,"--jb-pin-input-inputs-wrapper-width:500px;"),e.createElement("p",null,"--jb-pin-input-pin-input-wrapper-height:25px;"),e.createElement("p",null," --jb-pin-input-pin-font-size:16px;"),e.createElement("p",null,"--jb-pin-input-pin-font-weight:600;"),e.createElement("p",null,"--jb-pin-input-wrapper-box-shadow:0px 0px 1px 1px #ececec;"),e.createElement("p",null,"--jb-pin-input-error-message-margin:12px 24px;"))))}const _={title:"Components/form elements/JBPinInput",component:t},r={args:{label:"pin input",message:"please fill the pin",value:""}},n={args:{label:"autofocus",autofocus:!0,value:""}},a={args:{label:"8 digit pin",value:"",charLength:8}},l={args:{label:"with error",message:"simple message",error:"error message",value:""}},o={args:{label:"required",required:!0}},i={render:B=>{const u=J.useRef(null),C=[{validator:s=>s.startsWith("1"),message:"pin input must be start with 1"}];return e.createElement("div",{ref:u},e.createElement(t,{...B,ref:u,validationList:C,onComplete:s=>console.log("complete",s),required:!0,onChange:()=>{console.log("change")}}))},args:{label:"will jump on overflow"}},p={render:()=>e.createElement(z,null)};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'pin input',
    message: "please fill the pin",
    value: ""
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var b,g,E;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'autofocus',
    autofocus: true,
    value: ""
  }
}`,...(E=(g=n.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var h,v,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: '8 digit pin',
    value: "",
    charLength: 8
  }
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var j,w,x;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: "simple message",
    error: "error message",
    value: ""
  }
}`,...(x=(w=l.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var S,y,q;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'required',
    required: true
  }
}`,...(q=(y=o.parameters)==null?void 0:y.docs)==null?void 0:q.source}}};var L,I,P;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef(null);
    const validationList = [{
      validator: value => {
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
}`,...(P=(I=i.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var N,R,W;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <JBPinInputStyleTest></JBPinInputStyleTest>
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const O=["Normal","AutoFocus","charLength","WithError","Required","WithValidation","PinInputStyle"];export{n as AutoFocus,r as Normal,p as PinInputStyle,o as Required,l as WithError,i as WithValidation,O as __namedExportsOrder,a as charLength,_ as default};
