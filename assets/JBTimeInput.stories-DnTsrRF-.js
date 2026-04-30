import{r,R as e}from"./index-CwcVQgaJ.js";import{a as G}from"./JBTimeInput-aJ0RvUh8.js";import"./jb-time-picker-d-XprQTL.js";import"./index-CUhgvN0_.js";import"./jb-validation-AFHFNd1g.js";import"./index-BtFglznY.js";import"./index-BjRxPyWZ.js";import"./index-Bhe3Q7G8.js";import"./jb-popover-DTIBXtF_.js";import"./index-BVrqzDik.js";function H(E){const a=r.useRef(),[t,n]=r.useState();return e.createElement("div",null,e.createElement(G,{ref:a,label:"date",value:t,onChange:b=>n(b.target.value)}),e.createElement("span",null,"value:",t),e.createElement("br",null),e.createElement("button",{onClick:()=>n("12:48:00")},"set value to 12:48"),e.createElement("button",{onClick:()=>n("00:00:00")},"set value to 00:00"))}H.propTypes={};function K(E){const a=r.useRef(),t=r.useRef(),[n,b]=r.useState(),[Q,X]=r.useState();return r.useEffect(()=>{a.current&&a.current.addEventListener("change",v=>{b(v.target.value)})},[a.current]),r.useEffect(()=>{t.current&&(t.current.addEventListener("change",v=>{X(v.target.value)}),t.current.secondEnabled=!1)},[t.current]),e.createElement("div",null,e.createElement("jb-time-input",{ref:a,label:"date"}),e.createElement("span",null,"value:",n),e.createElement("h3",null,"without second"),e.createElement("jb-time-input",{ref:t}),e.createElement("span",null,"value:",Q))}K.propTypes={};const me={title:"Components/form elements/Inputs/JBTimeInput",component:G},s={args:{label:"time"}},o={args:{label:"time",showPersianNumber:!0}},l={args:{label:"time",value:"13:24:48"}},u={args:{label:"زمان",closeButtonText:"بستن"},parameters:{themes:{themeOverride:"rtl"}}},m={render:()=>e.createElement(K,null)},c={render:()=>e.createElement(H,null)},i={args:{label:"time:",validationList:[{validator:/^[1][1234].*$/g,message:"hour  must be between 11 and 14"},{validator:({displayValue:E,value:a,valueObject:t})=>!(t.minute&&t.minute<30),message:"minute must be 30 to 60"}]}},p={args:{label:"time",secondEnabled:!1}},d={args:{label:"time",closeButtonText:"بستن",frontalZero:!0}},g={args:{label:"زمان",closeButtonText:"بستن",optionalUnits:["minute"]}};var f,T,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'time'
  }
}`,...(S=(T=s.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var h,w,P;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'time',
    showPersianNumber: true
  }
}`,...(P=(w=o.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var B,x,V;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'time',
    value: "13:24:48"
  }
}`,...(V=(x=l.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var C,O,R;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'زمان',
    closeButtonText: 'بستن'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(R=(O=u.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var I,L,N;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <JBTimeInputWebComponentEventTestPage />
}`,...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var J,j,y;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <JBTimeInputEventTestPage />
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var W,Z,k;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(k=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:k.source}}};var F,M,U;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'time',
    secondEnabled: false
  }
}`,...(U=(M=p.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var _,$,q;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'time',
    closeButtonText: 'بستن',
    frontalZero: true
  }
}`,...(q=($=d.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var z,A,D;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'زمان',
    closeButtonText: 'بستن',
    optionalUnits: ['minute']
  }
}`,...(D=(A=g.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const ce=["Normal","PersianNumber","withValue","RTLSample","WebComponentEventTestPage","EventTestPage","ValidationSample","withoutSecond","FrontalZero","OptionalMinute"];export{c as EventTestPage,d as FrontalZero,s as Normal,g as OptionalMinute,o as PersianNumber,u as RTLSample,i as ValidationSample,m as WebComponentEventTestPage,ce as __namedExportsOrder,me as default,l as withValue,p as withoutSecond};
