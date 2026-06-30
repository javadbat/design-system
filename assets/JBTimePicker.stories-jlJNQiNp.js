import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-9JcXr86A.js";import{t as a}from"./jb-time-picker-Dv2e4vY8.js";function o(e){let t=(0,s.useRef)(),[n,r]=(0,s.useState)({});function i(e,n,r){t.current.value={hour:e,minute:n,second:r}}let a=function(e){r({...e.target.value})};return(0,s.useEffect)(()=>{t.current.addEventListener(`change`,a)},[t.current]),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`jb-time-picker`,{ref:t}),(0,c.jsx)(`button`,{onClick:()=>{i(12,30,12)},children:`set 12:30:12`}),(0,c.jsx)(`button`,{onClick:()=>{i(24,10,59)},children:`set 24:10:59`}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`label`,{children:`selected value is:`}),(0,c.jsx)(`h3`,{children:`${n.hour}:${n.minute}:${n.second}`})]})]})}var s,c,l=t((()=>{s=n(r(),1),a(),c=i(),o.__docgenInfo={description:``,methods:[],displayName:`JBTimePickerValueTest`}})),u=e({Normal:()=>p,RTLSample:()=>m,ValueTest:()=>h,__namedExportsOrder:()=>g,default:()=>f}),d,f,p,m,h,g,_=t((()=>{r(),a(),l(),d=i(),f={title:`Components/JBTimePicker`},p={render:e=>(0,d.jsx)(`jb-time-picker`,{...e}),args:{hour:0,minute:0,second:0}},m={render:e=>(0,d.jsx)(`div`,{style:{direction:`rtl`},children:(0,d.jsx)(`jb-time-picker`,{...e})}),args:{}},h={render:e=>(0,d.jsx)(o,{...e})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <jb-time-picker {...args}></jb-time-picker>,
  args: {
    hour: 0,
    minute: 0,
    second: 0
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    direction: 'rtl'
  }}><jb-time-picker {...args}></jb-time-picker></div>,
  args: {}
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <JBTimePickerValueTest {...args}></JBTimePickerValueTest>
}`,...h.parameters?.docs?.source}}},g=[`Normal`,`RTLSample`,`ValueTest`]}));_();export{p as Normal,m as RTLSample,h as ValueTest,g as __namedExportsOrder,f as default,_ as n,u as t};