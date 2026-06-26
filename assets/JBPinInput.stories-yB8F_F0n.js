import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-DF-yE7r9.js";import{r as a,t as o}from"./react-CDeUZAxe.js";import{n as s,t as c}from"./JBPinInputStyleTest-B45O_bS-.js";var l=e({AutoFocus:()=>m,Normal:()=>p,PinInputStyle:()=>y,Required:()=>_,WithError:()=>g,WithValidation:()=>v,__namedExportsOrder:()=>b,charLength:()=>h,default:()=>f}),u,d,f,p,m,h,g,_,v,y,b,x=t((()=>{u=n(r(),1),o(),s(),d=i(),f={title:`Components/form elements/JBPinInput`,component:a},p={args:{label:`pin input`,message:`please fill the pin`,value:``}},m={args:{label:`autofocus`,autofocus:!0,value:``}},h={args:{label:`8 digit pin`,value:``,charLength:8}},g={args:{label:`with error`,message:`simple message`,error:`error message`,value:``}},_={args:{label:`required`,required:!0}},v={render:e=>{let t=(0,u.useRef)(null),n=[{validator:e=>e.startsWith(`1`),message:`pin input must be start with 1`}];return(0,d.jsx)(`div`,{ref:t,children:(0,d.jsx)(a,{...e,ref:t,validationList:n,onComplete:e=>console.log(`complete`,e),required:!0,onChange:()=>{console.log(`change`)}})})},args:{label:`will jump on overflow`}},y={render:()=>(0,d.jsx)(c,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'pin input',
    message: "please fill the pin",
    value: ""
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'autofocus',
    autofocus: true,
    value: ""
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: '8 digit pin',
    value: "",
    charLength: 8
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: "simple message",
    error: "error message",
    value: ""
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'required',
    required: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <JBPinInputStyleTest></JBPinInputStyleTest>
}`,...y.parameters?.docs?.source}}},b=[`Normal`,`AutoFocus`,`charLength`,`WithError`,`Required`,`WithValidation`,`PinInputStyle`]}));x();export{m as AutoFocus,p as Normal,y as PinInputStyle,_ as Required,g as WithError,v as WithValidation,b as __namedExportsOrder,h as charLength,f as default,x as n,l as t};