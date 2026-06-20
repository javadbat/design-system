import{r,R as e}from"./index-D4lIrffr.js";import{i as G}from"./JBTimeInput-BKLsYHv6.js";function H(E){const a=r.useRef(),[t,n]=r.useState();return e.createElement("div",null,e.createElement(G,{ref:a,label:"date",value:t,onChange:b=>n(b.target.value)}),e.createElement("span",null,"value:",t),e.createElement("br",null),e.createElement("button",{onClick:()=>n("12:48:00")},"set value to 12:48"),e.createElement("button",{onClick:()=>n("00:00:00")},"set value to 00:00"))}H.propTypes={};function K(E){const a=r.useRef(),t=r.useRef(),[n,b]=r.useState(),[Q,X]=r.useState();return r.useEffect(()=>{a.current&&a.current.addEventListener("change",v=>{b(v.target.value)})},[a.current]),r.useEffect(()=>{t.current&&(t.current.addEventListener("change",v=>{X(v.target.value)}),t.current.secondEnabled=!1)},[t.current]),e.createElement("div",null,e.createElement("jb-time-input",{ref:a,label:"date"}),e.createElement("span",null,"value:",n),e.createElement("h3",null,"without second"),e.createElement("jb-time-input",{ref:t}),e.createElement("span",null,"value:",Q))}K.propTypes={};const Y={title:"Components/form elements/Inputs/JBTimeInput",component:G},s={args:{label:"time"}},o={args:{label:"time",showPersianNumber:!0}},l={args:{label:"time",value:"13:24:48"}},u={args:{label:"زمان",closeButtonText:"بستن"},parameters:{themes:{themeOverride:"rtl"}}},c={render:()=>e.createElement(K,null)},m={render:()=>e.createElement(H,null)},i={args:{label:"time:",validationList:[{validator:/^[1][1234].*$/g,message:"hour  must be between 11 and 14"},{validator:({displayValue:E,value:a,valueObject:t})=>!(t.minute&&t.minute<30),message:"minute must be 30 to 60"}]}},p={args:{label:"time",secondEnabled:!1}},d={args:{label:"time",closeButtonText:"بستن",frontalZero:!0}},g={args:{label:"زمان",closeButtonText:"بستن",optionalUnits:["minute"]}};var f,T,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'time'
  }
}`,...(S=(T=s.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var h,w,P;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'time',
    showPersianNumber: true
  }
}`,...(P=(w=o.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var B,V,x;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'time',
    value: "13:24:48"
  }
}`,...(x=(V=l.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var O,C,I;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'زمان',
    closeButtonText: 'بستن'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(I=(C=u.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var R,j,y;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <JBTimeInputWebComponentEventTestPage />
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var L,N,_;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <JBTimeInputEventTestPage />
}`,...(_=(N=m.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var J,W,Z;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(W=i.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var M,k,F;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'time',
    secondEnabled: false
  }
}`,...(F=(k=p.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var U,$,z;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'time',
    closeButtonText: 'بستن',
    frontalZero: true
  }
}`,...(z=($=d.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var q,A,D;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'زمان',
    closeButtonText: 'بستن',
    optionalUnits: ['minute']
  }
}`,...(D=(A=g.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const ee=["Normal","PersianNumber","withValue","RTLSample","WebComponentEventTestPage","EventTestPage","ValidationSample","withoutSecond","FrontalZero","OptionalMinute"],ae=Object.freeze(Object.defineProperty({__proto__:null,EventTestPage:m,FrontalZero:d,Normal:s,OptionalMinute:g,PersianNumber:o,RTLSample:u,ValidationSample:i,WebComponentEventTestPage:c,__namedExportsOrder:ee,default:Y,withValue:l,withoutSecond:p},Symbol.toStringTag,{value:"Module"}));export{ae as T,i as V,l as w};
