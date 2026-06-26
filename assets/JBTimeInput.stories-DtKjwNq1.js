import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-DF-yE7r9.js";import{i as a,n as o,t as s}from"./react-B-94r1yU.js";function c(e){let t=(0,l.useRef)(),[n,r]=(0,l.useState)();return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(o,{ref:t,label:`date`,value:n,onChange:e=>r(e.target.value)}),(0,u.jsxs)(`span`,{children:[`value:`,n]}),(0,u.jsx)(`br`,{}),(0,u.jsx)(`button`,{onClick:()=>r(`12:48:00`),children:`set value to 12:48`}),(0,u.jsx)(`button`,{onClick:()=>r(`00:00:00`),children:`set value to 00:00`})]})}var l,u,d=t((()=>{l=n(r(),1),s(),u=i(),c.propTypes={}}));function f(e){let t=(0,p.useRef)(),n=(0,p.useRef)(),[r,i]=(0,p.useState)(),[a,o]=(0,p.useState)();return(0,p.useEffect)(()=>{t.current&&t.current.addEventListener(`change`,e=>{i(e.target.value)})},[t.current]),(0,p.useEffect)(()=>{n.current&&(n.current.addEventListener(`change`,e=>{o(e.target.value)}),n.current.secondEnabled=!1)},[n.current]),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`jb-time-input`,{ref:t,label:`date`}),(0,m.jsxs)(`span`,{children:[`value:`,r]}),(0,m.jsx)(`h3`,{children:`without second`}),(0,m.jsx)(`jb-time-input`,{ref:n}),(0,m.jsxs)(`span`,{children:[`value:`,a]})]})}var p,m,h=t((()=>{p=n(r(),1),a(),m=i(),f.propTypes={}})),g=e({EventTestPage:()=>w,FrontalZero:()=>D,Normal:()=>y,OptionalMinute:()=>O,PersianNumber:()=>b,RTLSample:()=>S,ValidationSample:()=>T,WebComponentEventTestPage:()=>C,__namedExportsOrder:()=>k,default:()=>v,withValue:()=>x,withoutSecond:()=>E}),_,v,y,b,x,S,C,w,T,E,D,O,k,A=t((()=>{r(),s(),d(),h(),_=i(),v={title:`Components/form elements/Inputs/JBTimeInput`,component:o},y={args:{label:`time`}},b={args:{label:`time`,showPersianNumber:!0}},x={args:{label:`time`,value:`13:24:48`}},S={args:{label:`زمان`,closeButtonText:`بستن`},parameters:{themes:{themeOverride:`rtl`}}},C={render:()=>(0,_.jsx)(f,{})},w={render:()=>(0,_.jsx)(c,{})},T={args:{label:`time:`,validationList:[{validator:/^[1][1234].*$/g,message:`hour  must be between 11 and 14`},{validator:({displayValue:e,value:t,valueObject:n})=>!(n.minute&&n.minute<30),message:`minute must be 30 to 60`}]}},E={args:{label:`time`,secondEnabled:!1}},D={args:{label:`time`,closeButtonText:`بستن`,frontalZero:!0}},O={args:{label:`زمان`,closeButtonText:`بستن`,optionalUnits:[`minute`]}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time',
    showPersianNumber: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time',
    value: "13:24:48"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'زمان',
    closeButtonText: 'بستن'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <JBTimeInputWebComponentEventTestPage />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <JBTimeInputEventTestPage />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time:',
    validationList: [{
      validator: /^[1][1234].*$/g,
      message: "hour  must be between 11 and 14"
    }, {
      validator: ({
        displayValue,
        value,
        valueObject
      }) => {
        if (valueObject.minute && valueObject.minute < 30) {
          return false;
        }
        return true;
      },
      message: 'minute must be 30 to 60'
    }]
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time',
    secondEnabled: false
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time',
    closeButtonText: 'بستن',
    frontalZero: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'زمان',
    closeButtonText: 'بستن',
    optionalUnits: ['minute']
  }
}`,...O.parameters?.docs?.source}}},k=[`Normal`,`PersianNumber`,`withValue`,`RTLSample`,`WebComponentEventTestPage`,`EventTestPage`,`ValidationSample`,`withoutSecond`,`FrontalZero`,`OptionalMinute`]}));A();export{w as EventTestPage,D as FrontalZero,y as Normal,O as OptionalMinute,b as PersianNumber,S as RTLSample,T as ValidationSample,C as WebComponentEventTestPage,k as __namedExportsOrder,v as default,A as n,g as t,x as withValue,E as withoutSecond};