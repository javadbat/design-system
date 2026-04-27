import{R as r}from"./index-CwcVQgaJ.js";import{p as a}from"./JBNumberInput-CeH_hsSk.js";import"./index-C1suxRb_.js";import"./jb-validation-DEeh0jn_.js";import"./index-BtFglznY.js";import"./index-BjRxPyWZ.js";import"./index-Bhe3Q7G8.js";import"./JBInput-ddxJ_STh.js";import"./index-BVrqzDik.js";const H=()=>r.createElement("div",{className:"input-wrapper"},r.createElement(a,{label:"تست",message:"این متن تست می باشد"})),te={title:"Components/form elements/Inputs/JBNumberInput",component:a},t={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",disabled:!1,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},n={args:{label:"with thousand separator",message:"type a big number. each 3 number will separated by a comma",showThousandSeparator:!0,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},s={args:{label:"with min 100 & max 1000",message:"type smaller or larger number, after un-focus it will turn to max or min(it does not prevent user from typing)",maxValue:1e4,minValue:100,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},o={args:{label:"non-negative number with underline separator",message:"each 3 digit separated by _",acceptNegative:!1,showThousandSeparator:!0,thousandSeparator:"_",onChange:e=>{console.log(`new number is ${e.target.value}`)}}},l={args:{label:"with increase and decrease button",message:"with +- buttons",showControlButton:!0,step:100,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},i={args:{label:"type number",message:"type en number but user see persian char number",showPersianNumber:!0,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},u={args:{label:"show error",error:"error message"}},m={render:()=>r.createElement(H,null)},c={render:e=>r.createElement(a,{...e},r.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"label",message:"static text under input show all the time",placeholder:"place holder"}},p={render:e=>r.createElement(a,{...e},r.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"label",message:"static text under input show all the time",placeholder:"place holder"}},d={render:e=>r.createElement(a,{...e},r.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}),r.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"label",message:"static text under input show all the time",placeholder:"place holder"}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    disabled: false,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var w,x,v;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'with thousand separator',
    message: 'type a big number. each 3 number will separated by a comma',
    showThousandSeparator: true,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var N,S,C;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'with min 100 & max 1000',
    message: 'type smaller or larger number, after un-focus it will turn to max or min(it does not prevent user from typing)',
    maxValue: 10000,
    minValue: 100,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var y,W,E;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(E=(W=o.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var f,B,$;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'with increase and decrease button',
    message: 'with +- buttons',
    showControlButton: true,
    step: 100,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...($=(B=l.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var I,J,T;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'type number',
    message: 'type en number but user see persian char number',
    showPersianNumber: true,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(T=(J=i.parameters)==null?void 0:J.docs)==null?void 0:T.source}}};var k,_,M;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'show error',
    error: 'error message'
  }
}`,...(M=(_=u.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var P,V,A;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <JBInputNumberTest></JBInputNumberTest>
}`,...(A=(V=m.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var R,U,O;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(U=c.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var j,q,z;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var D,F,G;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const ne=["Normal","NumberWithComma","NumberWithMinMax","NonNegativeNumberWithUnderlineSeparator","NumberWithButtons","NumberWithPersianChar","WithError","numberTest","WithStartSection","WithEndSection","WithStartAndEndSection"];export{o as NonNegativeNumberWithUnderlineSeparator,t as Normal,l as NumberWithButtons,n as NumberWithComma,s as NumberWithMinMax,i as NumberWithPersianChar,p as WithEndSection,u as WithError,d as WithStartAndEndSection,c as WithStartSection,ne as __namedExportsOrder,te as default,m as numberTest};
