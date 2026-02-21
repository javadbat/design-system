import{r as t,R as a}from"./index-DwQS_Y10.js";import"./jb-number-input-CZksyZ5x.js";import{l as Y,o as Z}from"./JBInput-DuNXDxv0.js";import"./index-B9_TbPzc.js";import"./jb-validation-DPnsTO1v.js";import"./index-Bg4fOAbC.js";import"./index-bfIR6bpK.js";import"./index-_b1slotr.js";import"./index-BJ5IkxrY.js";let n=t.forwardRef((e,L)=>{let r=t.useRef(null),[Q,X]=t.useState(0);return t.useImperativeHandle(L,()=>r?r.current:void 0,[r]),t.useEffect(()=>{X(Q+1)},[r.current]),Y(r,e),Z(r,e),t.useEffect(()=>{r!=null&&r.current&&(r.current.minValue=e.minValue)},[e.minValue]),t.useEffect(()=>{r.current&&(r.current.maxValue=e.maxValue)},[e.maxValue]),t.useEffect(()=>{r.current&&e.acceptNegative!==void 0&&(r.current.acceptNegative=e.acceptNegative)},[e.acceptNegative]),t.useEffect(()=>{r.current&&(r.current.decimalPrecision=e.decimalPrecision)},[e.decimalPrecision]),t.useEffect(()=>{r.current&&typeof e.showControlButton=="boolean"&&(r.current.showControlButton=e.showControlButton)},[e.showControlButton]),t.useEffect(()=>{r.current&&typeof e.showThousandSeparator=="boolean"&&(r.current.showThousandSeparator=e.showThousandSeparator)},[e.showThousandSeparator]),t.useEffect(()=>{r.current&&typeof e.thousandSeparator=="string"&&(r.current.thousandSeparator=e.thousandSeparator)},[e.thousandSeparator]),t.useEffect(()=>{r.current&&typeof e.step=="number"&&(r.current.step=e.step)},[e.step]),t.useEffect(()=>{r.current&&typeof e.showPersianNumber=="boolean"&&(r.current.showPersianNumber=e.showPersianNumber)},[e.showPersianNumber]),a.createElement("jb-number-input",{ref:r,class:e.className},e.children)});n.displayName="JBNumberInput";const ee=()=>a.createElement("div",{className:"input-wrapper"},a.createElement(n,{label:"تست",message:"این متن تست می باشد"})),ie={title:"Components/form elements/Inputs/JBNumberInput",component:n},s={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",disabled:!1,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},o={args:{label:"with thousand separator",message:"type a big number. each 3 number will separated by a comma",showThousandSeparator:!0,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},l={args:{label:"with min 100 & max 1000",message:"type smaller or larger number, after un-focus it will turn to max or min(it does not prevent user from typing)",maxValue:1e4,minValue:100,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},u={args:{label:"non-negative number with underline separator",message:"each 3 digit separated by _",acceptNegative:!1,showThousandSeparator:!0,thousandSeparator:"_",onChange:e=>{console.log(`new number is ${e.target.value}`)}}},c={args:{label:"with increase and decrease button",message:"with +- buttons",showControlButton:!0,step:100,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},i={args:{label:"type number",message:"type en number but user see persian char number",showPersianNumber:!0,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},m={args:{label:"show error",error:"error message"}},p={render:()=>a.createElement(ee,null)},d={render:e=>a.createElement(n,{...e},a.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"label",message:"static text under input show all the time",placeholder:"place holder"}},h={render:e=>a.createElement(n,{...e},a.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"label",message:"static text under input show all the time",placeholder:"place holder"}},g={render:e=>a.createElement(n,{...e},a.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}),a.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"label",message:"static text under input show all the time",placeholder:"place holder"}};var b,w,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    disabled: false,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(f=(w=s.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var N,v,x;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'with thousand separator',
    message: 'type a big number. each 3 number will separated by a comma',
    showThousandSeparator: true,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,C,E;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'with min 100 & max 1000',
    message: 'type smaller or larger number, after un-focus it will turn to max or min(it does not prevent user from typing)',
    maxValue: 10000,
    minValue: 100,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var y,B,W;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(W=(B=u.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var I,T,$;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'with increase and decrease button',
    message: 'with +- buttons',
    showControlButton: true,
    step: 100,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...($=(T=c.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var J,P,V;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'type number',
    message: 'type en number but user see persian char number',
    showPersianNumber: true,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(V=(P=i.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var k,_,M;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'show error',
    error: 'error message'
  }
}`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var R,A,U;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <JBInputNumberTest></JBInputNumberTest>
}`,...(U=(A=p.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var j,H,O;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(O=(H=d.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var q,z,D;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(D=(z=h.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var F,G,K;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(K=(G=g.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const me=["Normal","NumberWithComma","NumberWithMinMax","NonNegativeNumberWithUnderlineSeparator","NumberWithButtons","NumberWithPersianChar","WithError","numberTest","WithStartSection","WithEndSection","WithStartAndEndSection"];export{u as NonNegativeNumberWithUnderlineSeparator,s as Normal,c as NumberWithButtons,o as NumberWithComma,l as NumberWithMinMax,i as NumberWithPersianChar,h as WithEndSection,m as WithError,g as WithStartAndEndSection,d as WithStartSection,me as __namedExportsOrder,ie as default,p as numberTest};
