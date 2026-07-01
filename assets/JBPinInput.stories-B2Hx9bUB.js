import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-Sdk7KWEq.js";import{r as a,t as o}from"./react-2_3NvgYd.js";import{i as s,n as c,o as l,t as u}from"./JBPinInputStyleTest-D-1S3vd6.js";var d=e({AsyncValidation:()=>S,AutoFocus:()=>g,ChecksumValidation:()=>x,ManualValidation:()=>C,Normal:()=>h,PinInputStyle:()=>w,Required:()=>y,WithError:()=>v,WithValidation:()=>b,__namedExportsOrder:()=>T,charLength:()=>_,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{f=n(r(),1),o(),s(),c(),p=i(),m={title:`Components/form elements/JBPinInput`,component:l},h={args:{label:`pin input`,message:`please fill the pin`,value:``}},g={args:{label:`autofocus`,autofocus:!0,value:``}},_={args:{label:`8 digit pin`,value:``,charLength:8}},v={args:{label:`with error`,message:`simple message`,error:`error message`,value:``}},y={args:{label:`required`,required:!0}},b={render:e=>{let t=[{validator:e=>e.startsWith(`1`),message:`PIN must start with 1`}];return(0,p.jsx)(`div`,{children:(0,p.jsx)(l,{...e,validationList:t,onComplete:e=>console.log(`complete`,e),required:!0,onChange:()=>{console.log(`change`)}})})},args:{label:`Verification code`,message:`Enter a code that starts with 1`}},x={render:e=>{let t=[{validator:e=>{if(e.includes(`-`))return!0;let t=e.split(``).map(Number);return t.slice(0,-1).reduce((e,t)=>e+t,0)%10===t[t.length-1]},message:`Last digit must match the checksum`}];return(0,p.jsx)(l,{...e,validationList:t,required:!0,onComplete:e=>console.log(`complete`,e)})},args:{label:`Checksum PIN`,charLength:4,message:`Try 1236. The last digit must equal the sum of previous digits modulo 10.`}},S={render:e=>{let t=[{validator:async e=>(await new Promise(e=>setTimeout(e,3e3)),e===`1234`),message:`Only 1234 is accepted`,defer:!0}];return(0,p.jsx)(l,{...e,validationList:t,required:!0,onComplete:e=>console.log(`complete`,e)})},args:{label:`Async verification code`,charLength:4,message:`Enter 1234 and wait 3 seconds for async validation.`}},C={render:e=>{let t=(0,f.useRef)(null),[n,r]=(0,f.useState)(`Validation has not run yet.`),i=[{validator:e=>e.startsWith(`1`),message:`PIN must start with 1`}],o=()=>{let e=t.current?.reportValidity()??!1,n=t.current?.validationMessage;r(e?`Valid: reportValidity() returned true.`:`Invalid: ${n}`)};return(0,p.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`,maxWidth:`24rem`},children:[(0,p.jsx)(l,{...e,ref:t,validationList:i,required:!0}),(0,p.jsx)(a,{type:`button`,onClick:o,children:`Validate PIN`}),(0,p.jsx)(`p`,{"aria-live":`polite`,children:n})]})},args:{label:`Manual validation code`,charLength:4,message:`Click the button to run reportValidity().`}},w={render:()=>(0,p.jsx)(u,{})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'pin input',
    message: "please fill the pin",
    value: ""
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'autofocus',
    autofocus: true,
    value: ""
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: '8 digit pin',
    value: "",
    charLength: 8
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: "simple message",
    error: "error message",
    value: ""
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'required',
    required: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const validationList = [{
      validator: (value: string) => {
        return value.startsWith("1");
      },
      message: "PIN must start with 1"
    }];
    return <div>
          <JBPinInput {...args} validationList={validationList} onComplete={e => console.log("complete", e)} required onChange={() => {
        console.log("change");
      }} />
        </div>;
  },
  args: {
    label: "Verification code",
    message: "Enter a code that starts with 1"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const validationList = [{
      validator: (value: string) => {
        if (value.includes("-")) {
          return true;
        }
        const digits = value.split("").map(Number);
        const checksum = digits.slice(0, -1).reduce((sum, digit) => sum + digit, 0) % 10;
        return checksum === digits[digits.length - 1];
      },
      message: "Last digit must match the checksum"
    }];
    return <JBPinInput {...args} validationList={validationList} required onComplete={e => console.log("complete", e)} />;
  },
  args: {
    label: "Checksum PIN",
    charLength: 4,
    message: "Try 1236. The last digit must equal the sum of previous digits modulo 10."
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const validationList = [{
      validator: async (value: string) => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        return value === "1234";
      },
      message: "Only 1234 is accepted",
      defer: true
    }];
    return <JBPinInput {...args} validationList={validationList} required onComplete={e => console.log("complete", e)} />;
  },
  args: {
    label: "Async verification code",
    charLength: 4,
    message: "Enter 1234 and wait 3 seconds for async validation."
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const pinInputRef = useRef<JBPinInputWebComponent>(null);
    const [validationResult, setValidationResult] = useState("Validation has not run yet.");
    const validationList = [{
      validator: (value: string) => value.startsWith("1"),
      message: "PIN must start with 1"
    }];
    const validate = () => {
      const isValid = pinInputRef.current?.reportValidity() ?? false;
      const message = pinInputRef.current?.validationMessage;
      setValidationResult(isValid ? "Valid: reportValidity() returned true." : \`Invalid: \${message}\`);
    };
    return <div style={{
      display: "grid",
      gap: "1rem",
      maxWidth: "24rem"
    }}>
          <JBPinInput {...args} ref={pinInputRef} validationList={validationList} required />
          <JBButton type="button" onClick={validate}>Validate PIN</JBButton>
          <p aria-live="polite">{validationResult}</p>
        </div>;
  },
  args: {
    label: "Manual validation code",
    charLength: 4,
    message: "Click the button to run reportValidity()."
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <JBPinInputStyleTest></JBPinInputStyleTest>
}`,...w.parameters?.docs?.source}}},T=[`Normal`,`AutoFocus`,`charLength`,`WithError`,`Required`,`WithValidation`,`ChecksumValidation`,`AsyncValidation`,`ManualValidation`,`PinInputStyle`]}));E();export{S as AsyncValidation,g as AutoFocus,x as ChecksumValidation,C as ManualValidation,h as Normal,w as PinInputStyle,y as Required,v as WithError,b as WithValidation,T as __namedExportsOrder,_ as charLength,m as default,E as n,d as t};