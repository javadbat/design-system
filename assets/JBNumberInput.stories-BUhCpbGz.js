import{R as r}from"./index-D4lIrffr.js";import{p as d}from"./JBNumberInput-366j_9gZ.js";const H=()=>r.createElement("div",{className:"input-wrapper"},r.createElement(d,{label:"تست",message:"این متن تست می باشد"})),K={title:"Components/form elements/Inputs/JBNumberInput",component:d},a={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",disabled:!1,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},t={args:{label:"with thousand separator",message:"type a big number. each 3 number will separated by a comma",showThousandSeparator:!0,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},n={args:{label:"with min 100 & max 1000",message:"type smaller or larger number, after un-focus it will turn to max or min(it does not prevent user from typing)",maxValue:1e4,minValue:100,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},s={args:{label:"non-negative number with underline separator",message:"each 3 digit separated by _",acceptNegative:!1,showThousandSeparator:!0,thousandSeparator:"_",onChange:e=>{console.log(`new number is ${e.target.value}`)}}},o={args:{label:"with increase and decrease button",message:"with +- buttons",showControlButton:!0,step:100,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},l={args:{label:"type number",message:"type en number but user see persian char number",showPersianNumber:!0,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},u={args:{label:"show error",error:"error message"}},i={render:()=>r.createElement(H,null)},c={render:e=>r.createElement(d,{...e},r.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"label",message:"static text under input show all the time",placeholder:"place holder"}},m={render:e=>r.createElement(d,{...e},r.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"label",message:"static text under input show all the time",placeholder:"place holder"}},p={render:e=>r.createElement(d,{...e},r.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}),r.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"label",message:"static text under input show all the time",placeholder:"place holder"}};var g,h,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    disabled: false,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var w,v,x;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'with thousand separator',
    message: 'type a big number. each 3 number will separated by a comma',
    showThousandSeparator: true,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var N,S,C;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'with min 100 & max 1000',
    message: 'type smaller or larger number, after un-focus it will turn to max or min(it does not prevent user from typing)',
    maxValue: 10000,
    minValue: 100,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var y,W,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'non-negative number with underline separator',
    message: 'each 3 digit separated by _',
    acceptNegative: false,
    showThousandSeparator: true,
    thousandSeparator: '_',
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(E=(W=s.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var f,B,I;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'with increase and decrease button',
    message: 'with +- buttons',
    showControlButton: true,
    step: 100,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(I=(B=o.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var $,J,T;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'type number',
    message: 'type en number but user see persian char number',
    showPersianNumber: true,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(T=(J=l.parameters)==null?void 0:J.docs)==null?void 0:T.source}}};var _,k,M;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'show error',
    error: 'error message'
  }
}`,...(M=(k=u.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var P,V,O;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <JBInputNumberTest></JBInputNumberTest>
}`,...(O=(V=i.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var j,A,R;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    return <JBNumberInput {...args}>
        <div slot="start-section" style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#262626'
      }}></div>
      </JBNumberInput>;
  },
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
  }
}`,...(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var U,z,q;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    return <JBNumberInput {...args}>
        <div slot="end-section" style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#262626'
      }}></div>
      </JBNumberInput>;
  },
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
  }
}`,...(q=(z=m.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var D,F,G;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    return <JBNumberInput {...args}>
        <div slot="end-section" style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#262626'
      }}></div>
        <div slot="start-section" style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#262626'
      }}></div>
      </JBNumberInput>;
  },
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
  }
}`,...(G=(F=p.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const L=["Normal","NumberWithComma","NumberWithMinMax","NonNegativeNumberWithUnderlineSeparator","NumberWithButtons","NumberWithPersianChar","WithError","numberTest","WithStartSection","WithEndSection","WithStartAndEndSection"],Y=Object.freeze(Object.defineProperty({__proto__:null,NonNegativeNumberWithUnderlineSeparator:s,Normal:a,NumberWithButtons:o,NumberWithComma:t,NumberWithMinMax:n,NumberWithPersianChar:l,WithEndSection:m,WithError:u,WithStartAndEndSection:p,WithStartSection:c,__namedExportsOrder:L,default:K,numberTest:i},Symbol.toStringTag,{value:"Module"}));export{Y as N,o as a,t as b};
